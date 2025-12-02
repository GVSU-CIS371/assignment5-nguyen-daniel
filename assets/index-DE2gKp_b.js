(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function pl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ae={},Zr=[],Gt=()=>{},Gd=()=>!1,ca=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),gl=t=>t.startsWith("onUpdate:"),ut=Object.assign,ml=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Py=Object.prototype.hasOwnProperty,Ee=(t,e)=>Py.call(t,e),re=Array.isArray,es=t=>Ai(t)==="[object Map]",Qd=t=>Ai(t)==="[object Set]",Ah=t=>Ai(t)==="[object Date]",le=t=>typeof t=="function",je=t=>typeof t=="string",Lt=t=>typeof t=="symbol",Pe=t=>t!==null&&typeof t=="object",Jd=t=>(Pe(t)||le(t))&&le(t.then)&&le(t.catch),Xd=Object.prototype.toString,Ai=t=>Xd.call(t),ky=t=>Ai(t).slice(8,-1),Yd=t=>Ai(t)==="[object Object]",la=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Qs=pl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ua=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Vy=/-\w/g,Xn=ua(t=>t.replace(Vy,e=>e.slice(1).toUpperCase())),Dy=/\B([A-Z])/g,Vr=ua(t=>t.replace(Dy,"-$1").toLowerCase()),Zd=ua(t=>t.charAt(0).toUpperCase()+t.slice(1)),rc=ua(t=>t?`on${Zd(t)}`:""),Hn=(t,e)=>!Object.is(t,e),go=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ep=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},_l=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let bh;const ha=()=>bh||(bh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ms(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=je(r)?My(r):ms(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(je(t)||Pe(t))return t}const Oy=/;(?![^(]*\))/g,Ny=/:([^]+)/,xy=/\/\*[^]*?\*\//g;function My(t){const e={};return t.replace(xy,"").split(Oy).forEach(n=>{if(n){const r=n.split(Ny);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function yl(t){let e="";if(je(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=yl(t[n]);r&&(e+=r+" ")}else if(Pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ly="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fy=pl(Ly);function tp(t){return!!t||t===""}function Uy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ko(t[r],e[r]);return n}function ko(t,e){if(t===e)return!0;let n=Ah(t),r=Ah(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Lt(t),r=Lt(e),n||r)return t===e;if(n=re(t),r=re(e),n||r)return n&&r?Uy(t,e):!1;if(n=Pe(t),r=Pe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in t){const c=t.hasOwnProperty(a),l=e.hasOwnProperty(a);if(c&&!l||!c&&l||!ko(t[a],e[a]))return!1}}return String(t)===String(e)}const np=t=>!!(t&&t.__v_isRef===!0),On=t=>je(t)?t:t==null?"":re(t)||Pe(t)&&(t.toString===Xd||!le(t.toString))?np(t)?On(t.value):JSON.stringify(t,rp,2):String(t),rp=(t,e)=>np(e)?rp(t,e.value):es(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[sc(r,i)+" =>"]=s,n),{})}:Qd(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>sc(n))}:Lt(e)?sc(e):Pe(e)&&!re(e)&&!Yd(e)?String(e):e,sc=(t,e="")=>{var n;return Lt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let it;class sp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=it,!e&&it&&(this.index=(it.scopes||(it.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=it;try{return it=this,e()}finally{it=n}}}on(){++this._on===1&&(this.prevScope=it,it=this)}off(){this._on>0&&--this._on===0&&(it=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ip(t){return new sp(t)}function op(){return it}function By(t,e=!1){it&&it.cleanups.push(t)}let Re;const ic=new WeakSet;class ap{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,it&&it.active&&it.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ic.has(this)&&(ic.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||lp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Sh(this),up(this);const e=Re,n=xt;Re=this,xt=!0;try{return this.fn()}finally{hp(this),Re=e,xt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)El(e);this.deps=this.depsTail=void 0,Sh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ic.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Pc(this)&&this.run()}get dirty(){return Pc(this)}}let cp=0,Js,Xs;function lp(t,e=!1){if(t.flags|=8,e){t.next=Xs,Xs=t;return}t.next=Js,Js=t}function vl(){cp++}function Tl(){if(--cp>0)return;if(Xs){let e=Xs;for(Xs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Js;){let e=Js;for(Js=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function up(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function hp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),El(r),$y(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Pc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(fp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function fp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ui)||(t.globalVersion=ui,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Pc(t))))return;t.flags|=2;const e=t.dep,n=Re,r=xt;Re=t,xt=!0;try{up(t);const s=t.fn(t._value);(e.version===0||Hn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Re=n,xt=r,hp(t),t.flags&=-3}}function El(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)El(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function $y(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let xt=!0;const dp=[];function yn(){dp.push(xt),xt=!1}function vn(){const t=dp.pop();xt=t===void 0?!0:t}function Sh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Re;Re=void 0;try{e()}finally{Re=n}}}let ui=0;class jy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Il{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Re||!xt||Re===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Re)n=this.activeLink=new jy(Re,this),Re.deps?(n.prevDep=Re.depsTail,Re.depsTail.nextDep=n,Re.depsTail=n):Re.deps=Re.depsTail=n,pp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Re.depsTail,n.nextDep=void 0,Re.depsTail.nextDep=n,Re.depsTail=n,Re.deps===n&&(Re.deps=r)}return n}trigger(e){this.version++,ui++,this.notify(e)}notify(e){vl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Tl()}}}function pp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)pp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Vo=new WeakMap,Er=Symbol(""),kc=Symbol(""),hi=Symbol("");function at(t,e,n){if(xt&&Re){let r=Vo.get(t);r||Vo.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Il),s.map=r,s.key=n),s.track()}}function hn(t,e,n,r,s,i){const a=Vo.get(t);if(!a){ui++;return}const c=l=>{l&&l.trigger()};if(vl(),e==="clear")a.forEach(c);else{const l=re(t),h=l&&la(n);if(l&&n==="length"){const d=Number(r);a.forEach((p,_)=>{(_==="length"||_===hi||!Lt(_)&&_>=d)&&c(p)})}else switch((n!==void 0||a.has(void 0))&&c(a.get(n)),h&&c(a.get(hi)),e){case"add":l?h&&c(a.get("length")):(c(a.get(Er)),es(t)&&c(a.get(kc)));break;case"delete":l||(c(a.get(Er)),es(t)&&c(a.get(kc)));break;case"set":es(t)&&c(a.get(Er));break}}Tl()}function qy(t,e){const n=Vo.get(t);return n&&n.get(e)}function zr(t){const e=ve(t);return e===t?e:(at(e,"iterate",hi),It(t)?e:e.map(Ft))}function fa(t){return at(t=ve(t),"iterate",hi),t}function xn(t,e){return Tn(t)?mn(t)?cs(Ft(e)):cs(e):Ft(e)}const Hy={__proto__:null,[Symbol.iterator](){return oc(this,Symbol.iterator,t=>xn(this,t))},concat(...t){return zr(this).concat(...t.map(e=>re(e)?zr(e):e))},entries(){return oc(this,"entries",t=>(t[1]=xn(this,t[1]),t))},every(t,e){return ln(this,"every",t,e,void 0,arguments)},filter(t,e){return ln(this,"filter",t,e,n=>n.map(r=>xn(this,r)),arguments)},find(t,e){return ln(this,"find",t,e,n=>xn(this,n),arguments)},findIndex(t,e){return ln(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ln(this,"findLast",t,e,n=>xn(this,n),arguments)},findLastIndex(t,e){return ln(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ln(this,"forEach",t,e,void 0,arguments)},includes(...t){return ac(this,"includes",t)},indexOf(...t){return ac(this,"indexOf",t)},join(t){return zr(this).join(t)},lastIndexOf(...t){return ac(this,"lastIndexOf",t)},map(t,e){return ln(this,"map",t,e,void 0,arguments)},pop(){return Us(this,"pop")},push(...t){return Us(this,"push",t)},reduce(t,...e){return Rh(this,"reduce",t,e)},reduceRight(t,...e){return Rh(this,"reduceRight",t,e)},shift(){return Us(this,"shift")},some(t,e){return ln(this,"some",t,e,void 0,arguments)},splice(...t){return Us(this,"splice",t)},toReversed(){return zr(this).toReversed()},toSorted(t){return zr(this).toSorted(t)},toSpliced(...t){return zr(this).toSpliced(...t)},unshift(...t){return Us(this,"unshift",t)},values(){return oc(this,"values",t=>xn(this,t))}};function oc(t,e,n){const r=fa(t),s=r[e]();return r!==t&&!It(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const zy=Array.prototype;function ln(t,e,n,r,s,i){const a=fa(t),c=a!==t&&!It(t),l=a[e];if(l!==zy[e]){const p=l.apply(t,i);return c?Ft(p):p}let h=n;a!==t&&(c?h=function(p,_){return n.call(this,xn(t,p),_,t)}:n.length>2&&(h=function(p,_){return n.call(this,p,_,t)}));const d=l.call(a,h,r);return c&&s?s(d):d}function Rh(t,e,n,r){const s=fa(t);let i=n;return s!==t&&(It(t)?n.length>3&&(i=function(a,c,l){return n.call(this,a,c,l,t)}):i=function(a,c,l){return n.call(this,a,xn(t,c),l,t)}),s[e](i,...r)}function ac(t,e,n){const r=ve(t);at(r,"iterate",hi);const s=r[e](...n);return(s===-1||s===!1)&&pa(n[0])?(n[0]=ve(n[0]),r[e](...n)):s}function Us(t,e,n=[]){yn(),vl();const r=ve(t)[e].apply(t,n);return Tl(),vn(),r}const Wy=pl("__proto__,__v_isRef,__isVue"),gp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Lt));function Ky(t){Lt(t)||(t=String(t));const e=ve(this);return at(e,"has",t),e.hasOwnProperty(t)}class mp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?rv:Tp:i?vp:yp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=re(e);if(!s){let l;if(a&&(l=Hy[n]))return l;if(n==="hasOwnProperty")return Ky}const c=Reflect.get(e,n,xe(e)?e:r);if((Lt(n)?gp.has(n):Wy(n))||(s||at(e,"get",n),i))return c;if(xe(c)){const l=a&&la(n)?c:c.value;return s&&Pe(l)?Dc(l):l}return Pe(c)?s?Dc(c):da(c):c}}class _p extends mp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const a=re(e)&&la(n);if(!this._isShallow){const h=Tn(i);if(!It(r)&&!Tn(r)&&(i=ve(i),r=ve(r)),!a&&xe(i)&&!xe(r))return h||(i.value=r),!0}const c=a?Number(n)<e.length:Ee(e,n),l=Reflect.set(e,n,r,xe(e)?e:s);return e===ve(s)&&(c?Hn(r,i)&&hn(e,"set",n,r):hn(e,"add",n,r)),l}deleteProperty(e,n){const r=Ee(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&hn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Lt(n)||!gp.has(n))&&at(e,"has",n),r}ownKeys(e){return at(e,"iterate",re(e)?"length":Er),Reflect.ownKeys(e)}}class Gy extends mp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Qy=new _p,Jy=new Gy,Xy=new _p(!0);const Vc=t=>t,no=t=>Reflect.getPrototypeOf(t);function Yy(t,e,n){return function(...r){const s=this.__v_raw,i=ve(s),a=es(i),c=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,h=s[t](...r),d=n?Vc:e?cs:Ft;return!e&&at(i,"iterate",l?kc:Er),{next(){const{value:p,done:_}=h.next();return _?{value:p,done:_}:{value:c?[d(p[0]),d(p[1])]:d(p),done:_}},[Symbol.iterator](){return this}}}}function ro(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Zy(t,e){const n={get(s){const i=this.__v_raw,a=ve(i),c=ve(s);t||(Hn(s,c)&&at(a,"get",s),at(a,"get",c));const{has:l}=no(a),h=e?Vc:t?cs:Ft;if(l.call(a,s))return h(i.get(s));if(l.call(a,c))return h(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&at(ve(s),"iterate",Er),s.size},has(s){const i=this.__v_raw,a=ve(i),c=ve(s);return t||(Hn(s,c)&&at(a,"has",s),at(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,l=ve(c),h=e?Vc:t?cs:Ft;return!t&&at(l,"iterate",Er),c.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return ut(n,t?{add:ro("add"),set:ro("set"),delete:ro("delete"),clear:ro("clear")}:{add(s){!e&&!It(s)&&!Tn(s)&&(s=ve(s));const i=ve(this);return no(i).has.call(i,s)||(i.add(s),hn(i,"add",s,s)),this},set(s,i){!e&&!It(i)&&!Tn(i)&&(i=ve(i));const a=ve(this),{has:c,get:l}=no(a);let h=c.call(a,s);h||(s=ve(s),h=c.call(a,s));const d=l.call(a,s);return a.set(s,i),h?Hn(i,d)&&hn(a,"set",s,i):hn(a,"add",s,i),this},delete(s){const i=ve(this),{has:a,get:c}=no(i);let l=a.call(i,s);l||(s=ve(s),l=a.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&hn(i,"delete",s,void 0),h},clear(){const s=ve(this),i=s.size!==0,a=s.clear();return i&&hn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Yy(s,t,e)}),n}function wl(t,e){const n=Zy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ee(n,s)&&s in r?n:r,s,i)}const ev={get:wl(!1,!1)},tv={get:wl(!1,!0)},nv={get:wl(!0,!1)};const yp=new WeakMap,vp=new WeakMap,Tp=new WeakMap,rv=new WeakMap;function sv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function iv(t){return t.__v_skip||!Object.isExtensible(t)?0:sv(ky(t))}function da(t){return Tn(t)?t:Al(t,!1,Qy,ev,yp)}function ov(t){return Al(t,!1,Xy,tv,vp)}function Dc(t){return Al(t,!0,Jy,nv,Tp)}function Al(t,e,n,r,s){if(!Pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=iv(t);if(i===0)return t;const a=s.get(t);if(a)return a;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function mn(t){return Tn(t)?mn(t.__v_raw):!!(t&&t.__v_isReactive)}function Tn(t){return!!(t&&t.__v_isReadonly)}function It(t){return!!(t&&t.__v_isShallow)}function pa(t){return t?!!t.__v_raw:!1}function ve(t){const e=t&&t.__v_raw;return e?ve(e):t}function bl(t){return!Ee(t,"__v_skip")&&Object.isExtensible(t)&&ep(t,"__v_skip",!0),t}const Ft=t=>Pe(t)?da(t):t,cs=t=>Pe(t)?Dc(t):t;function xe(t){return t?t.__v_isRef===!0:!1}function Sl(t){return av(t,!1)}function av(t,e){return xe(t)?t:new cv(t,e)}class cv{constructor(e,n){this.dep=new Il,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ve(e),this._value=n?e:Ft(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||It(e)||Tn(e);e=r?e:ve(e),Hn(e,n)&&(this._rawValue=e,this._value=r?e:Ft(e),this.dep.trigger())}}function me(t){return xe(t)?t.value:t}const lv={get:(t,e,n)=>e==="__v_raw"?t:me(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return xe(s)&&!xe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ep(t){return mn(t)?t:new Proxy(t,lv)}function uv(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=fv(t,n);return e}class hv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._raw=ve(e);let s=!0,i=e;if(!re(e)||!la(String(n)))do s=!pa(i)||It(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=me(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&xe(this._raw[this._key])){const n=this._object[this._key];if(xe(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return qy(this._raw,this._key)}}function fv(t,e,n){return new hv(t,e,n)}class dv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Il(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ui-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Re!==this)return lp(this,!0),!0}get value(){const e=this.dep.track();return fp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function pv(t,e,n=!1){let r,s;return le(t)?r=t:(r=t.get,s=t.set),new dv(r,s,n)}const so={},Do=new WeakMap;let gr;function gv(t,e=!1,n=gr){if(n){let r=Do.get(n);r||Do.set(n,r=[]),r.push(t)}}function mv(t,e,n=Ae){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:l}=n,h=H=>s?H:It(H)||s===!1||s===0?fn(H,1):fn(H);let d,p,_,b,k=!1,N=!1;if(xe(t)?(p=()=>t.value,k=It(t)):mn(t)?(p=()=>h(t),k=!0):re(t)?(N=!0,k=t.some(H=>mn(H)||It(H)),p=()=>t.map(H=>{if(xe(H))return H.value;if(mn(H))return h(H);if(le(H))return l?l(H,2):H()})):le(t)?e?p=l?()=>l(t,2):t:p=()=>{if(_){yn();try{_()}finally{vn()}}const H=gr;gr=d;try{return l?l(t,3,[b]):t(b)}finally{gr=H}}:p=Gt,e&&s){const H=p,oe=s===!0?1/0:s;p=()=>fn(H(),oe)}const L=op(),z=()=>{d.stop(),L&&L.active&&ml(L.effects,d)};if(i&&e){const H=e;e=(...oe)=>{H(...oe),z()}}let K=N?new Array(t.length).fill(so):so;const Q=H=>{if(!(!(d.flags&1)||!d.dirty&&!H))if(e){const oe=d.run();if(s||k||(N?oe.some((Te,I)=>Hn(Te,K[I])):Hn(oe,K))){_&&_();const Te=gr;gr=d;try{const I=[oe,K===so?void 0:N&&K[0]===so?[]:K,b];K=oe,l?l(e,3,I):e(...I)}finally{gr=Te}}}else d.run()};return c&&c(Q),d=new ap(p),d.scheduler=a?()=>a(Q,!1):Q,b=H=>gv(H,!1,d),_=d.onStop=()=>{const H=Do.get(d);if(H){if(l)l(H,4);else for(const oe of H)oe();Do.delete(d)}},e?r?Q(!0):K=d.run():a?a(Q.bind(null,!0),!0):d.run(),z.pause=d.pause.bind(d),z.resume=d.resume.bind(d),z.stop=z,z}function fn(t,e=1/0,n){if(e<=0||!Pe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,xe(t))fn(t.value,e,n);else if(re(t))for(let r=0;r<t.length;r++)fn(t[r],e,n);else if(Qd(t)||es(t))t.forEach(r=>{fn(r,e,n)});else if(Yd(t)){for(const r in t)fn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&fn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bi(t,e,n,r){try{return r?t(...r):t()}catch(s){ga(s,e,n)}}function en(t,e,n,r){if(le(t)){const s=bi(t,e,n,r);return s&&Jd(s)&&s.catch(i=>{ga(i,e,n)}),s}if(re(t)){const s=[];for(let i=0;i<t.length;i++)s.push(en(t[i],e,n,r));return s}}function ga(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ae;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,l,h)===!1)return}c=c.parent}if(i){yn(),bi(i,null,10,[t,l,h]),vn();return}}_v(t,n,s,r,a)}function _v(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const gt=[];let zt=-1;const ts=[];let Mn=null,Gr=0;const Ip=Promise.resolve();let Oo=null;function wp(t){const e=Oo||Ip;return t?e.then(this?t.bind(this):t):e}function yv(t){let e=zt+1,n=gt.length;for(;e<n;){const r=e+n>>>1,s=gt[r],i=fi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Rl(t){if(!(t.flags&1)){const e=fi(t),n=gt[gt.length-1];!n||!(t.flags&2)&&e>=fi(n)?gt.push(t):gt.splice(yv(e),0,t),t.flags|=1,Ap()}}function Ap(){Oo||(Oo=Ip.then(Sp))}function vv(t){re(t)?ts.push(...t):Mn&&t.id===-1?Mn.splice(Gr+1,0,t):t.flags&1||(ts.push(t),t.flags|=1),Ap()}function Ch(t,e,n=zt+1){for(;n<gt.length;n++){const r=gt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;gt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function bp(t){if(ts.length){const e=[...new Set(ts)].sort((n,r)=>fi(n)-fi(r));if(ts.length=0,Mn){Mn.push(...e);return}for(Mn=e,Gr=0;Gr<Mn.length;Gr++){const n=Mn[Gr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Mn=null,Gr=0}}const fi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Sp(t){try{for(zt=0;zt<gt.length;zt++){const e=gt[zt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),bi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;zt<gt.length;zt++){const e=gt[zt];e&&(e.flags&=-2)}zt=-1,gt.length=0,bp(),Oo=null,(gt.length||ts.length)&&Sp()}}let lt=null,Rp=null;function No(t){const e=lt;return lt=t,Rp=t&&t.type.__scopeId||null,e}function js(t,e=lt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Fh(-1);const i=No(e);let a;try{a=t(...s)}finally{No(i),r._d&&Fh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Wr(t,e){if(lt===null)return t;const n=va(lt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,c,l=Ae]=e[s];i&&(le(i)&&(i={mounted:i,updated:i}),i.deep&&fn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function dr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(yn(),en(l,n,8,[t.el,c,t,e]),vn())}}const Tv=Symbol("_vte"),Ev=t=>t.__isTeleport,Iv=Symbol("_leaveCb");function Cl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Cl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Si(t,e){return le(t)?ut({name:t.name},e,{setup:t}):t}function Cp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const xo=new WeakMap;function Ys(t,e,n,r,s=!1){if(re(t)){t.forEach((k,N)=>Ys(k,e&&(re(e)?e[N]:e),n,r,s));return}if(ns(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ys(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?va(r.component):r.el,a=s?null:i,{i:c,r:l}=t,h=e&&e.r,d=c.refs===Ae?c.refs={}:c.refs,p=c.setupState,_=ve(p),b=p===Ae?Gd:k=>Ee(_,k);if(h!=null&&h!==l){if(Ph(e),je(h))d[h]=null,b(h)&&(p[h]=null);else if(xe(h)){h.value=null;const k=e;k.k&&(d[k.k]=null)}}if(le(l))bi(l,c,12,[a,d]);else{const k=je(l),N=xe(l);if(k||N){const L=()=>{if(t.f){const z=k?b(l)?p[l]:d[l]:l.value;if(s)re(z)&&ml(z,i);else if(re(z))z.includes(i)||z.push(i);else if(k)d[l]=[i],b(l)&&(p[l]=d[l]);else{const K=[i];l.value=K,t.k&&(d[t.k]=K)}}else k?(d[l]=a,b(l)&&(p[l]=a)):N&&(l.value=a,t.k&&(d[t.k]=a))};if(a){const z=()=>{L(),xo.delete(t)};z.id=-1,xo.set(t,z),Tt(z,n)}else Ph(t),L()}}}function Ph(t){const e=xo.get(t);e&&(e.flags|=8,xo.delete(t))}ha().requestIdleCallback;ha().cancelIdleCallback;const ns=t=>!!t.type.__asyncLoader,Pp=t=>t.type.__isKeepAlive;function wv(t,e){kp(t,"a",e)}function Av(t,e){kp(t,"da",e)}function kp(t,e,n=mt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ma(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Pp(s.parent.vnode)&&bv(r,e,n,s),s=s.parent}}function bv(t,e,n,r){const s=ma(e,t,r,!0);Pl(()=>{ml(r[e],s)},n)}function ma(t,e,n=mt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{yn();const c=Ri(n),l=en(e,n,t,a);return c(),vn(),l});return r?s.unshift(i):s.push(i),i}}const Sn=t=>(e,n=mt)=>{(!pi||t==="sp")&&ma(t,(...r)=>e(...r),n)},Sv=Sn("bm"),Vp=Sn("m"),Rv=Sn("bu"),Cv=Sn("u"),Pv=Sn("bum"),Pl=Sn("um"),kv=Sn("sp"),Vv=Sn("rtg"),Dv=Sn("rtc");function Ov(t,e=mt){ma("ec",t,e)}const Nv=Symbol.for("v-ndc");function Fn(t,e,n,r){let s;const i=n,a=re(t);if(a||je(t)){const c=a&&mn(t);let l=!1,h=!1;c&&(l=!It(t),h=Tn(t),t=fa(t)),s=new Array(t.length);for(let d=0,p=t.length;d<p;d++)s[d]=e(l?h?cs(Ft(t[d])):Ft(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Pe(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const d=c[l];s[l]=e(t[d],d,l,i)}}else s=[];return s}function mo(t,e,n={},r,s){if(lt.ce||lt.parent&&ns(lt.parent)&&lt.parent.ce){const h=Object.keys(n).length>0;return e!=="default"&&(n.name=e),ge(),Un(Le,null,[wt("slot",n,r)],h?-2:64)}let i=t[e];i&&i._c&&(i._d=!1),ge();const a=i&&Dp(i(n)),c=n.key||a&&a.key,l=Un(Le,{key:(c&&!Lt(c)?c:`_${e}`)+(!a&&r?"_fb":"")},a||[],a&&t._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function Dp(t){return t.some(e=>Dl(e)?!(e.type===En||e.type===Le&&!Dp(e.children)):!0)?t:null}const Oc=t=>t?Zp(t)?va(t):Oc(t.parent):null,Zs=ut(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Oc(t.parent),$root:t=>Oc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Np(t),$forceUpdate:t=>t.f||(t.f=()=>{Rl(t.update)}),$nextTick:t=>t.n||(t.n=wp.bind(t.proxy)),$watch:t=>Kv.bind(t)}),cc=(t,e)=>t!==Ae&&!t.__isScriptSetup&&Ee(t,e),xv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=t;if(e[0]!=="$"){const _=a[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(cc(r,e))return a[e]=1,r[e];if(s!==Ae&&Ee(s,e))return a[e]=2,s[e];if(Ee(i,e))return a[e]=3,i[e];if(n!==Ae&&Ee(n,e))return a[e]=4,n[e];Nc&&(a[e]=0)}}const h=Zs[e];let d,p;if(h)return e==="$attrs"&&at(t.attrs,"get",""),h(t);if((d=c.__cssModules)&&(d=d[e]))return d;if(n!==Ae&&Ee(n,e))return a[e]=4,n[e];if(p=l.config.globalProperties,Ee(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return cc(s,e)?(s[e]=n,!0):r!==Ae&&Ee(r,e)?(r[e]=n,!0):Ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:a}},c){let l;return!!(n[c]||t!==Ae&&c[0]!=="$"&&Ee(t,c)||cc(e,c)||Ee(i,c)||Ee(r,c)||Ee(Zs,c)||Ee(s.config.globalProperties,c)||(l=a.__cssModules)&&l[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function kh(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Nc=!0;function Mv(t){const e=Np(t),n=t.proxy,r=t.ctx;Nc=!1,e.beforeCreate&&Vh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:d,beforeMount:p,mounted:_,beforeUpdate:b,updated:k,activated:N,deactivated:L,beforeDestroy:z,beforeUnmount:K,destroyed:Q,unmounted:H,render:oe,renderTracked:Te,renderTriggered:I,errorCaptured:m,serverPrefetch:y,expose:E,inheritAttrs:w,components:S,directives:T,filters:ft}=e;if(h&&Lv(h,r,null),a)for(const ae in a){const _e=a[ae];le(_e)&&(r[ae]=_e.bind(n))}if(s){const ae=s.call(n,n);Pe(ae)&&(t.data=da(ae))}if(Nc=!0,i)for(const ae in i){const _e=i[ae],kt=le(_e)?_e.bind(n,n):le(_e.get)?_e.get.bind(n,n):Gt,or=!le(_e)&&le(_e.set)?_e.set.bind(n):Gt,sn=tg({get:kt,set:or});Object.defineProperty(r,ae,{enumerable:!0,configurable:!0,get:()=>sn.value,set:qe=>sn.value=qe})}if(c)for(const ae in c)Op(c[ae],r,n,ae);if(l){const ae=le(l)?l.call(n):l;Reflect.ownKeys(ae).forEach(_e=>{qv(_e,ae[_e])})}d&&Vh(d,t,"c");function De(ae,_e){re(_e)?_e.forEach(kt=>ae(kt.bind(n))):_e&&ae(_e.bind(n))}if(De(Sv,p),De(Vp,_),De(Rv,b),De(Cv,k),De(wv,N),De(Av,L),De(Ov,m),De(Dv,Te),De(Vv,I),De(Pv,K),De(Pl,H),De(kv,y),re(E))if(E.length){const ae=t.exposed||(t.exposed={});E.forEach(_e=>{Object.defineProperty(ae,_e,{get:()=>n[_e],set:kt=>n[_e]=kt,enumerable:!0})})}else t.exposed||(t.exposed={});oe&&t.render===Gt&&(t.render=oe),w!=null&&(t.inheritAttrs=w),S&&(t.components=S),T&&(t.directives=T),y&&Cp(t)}function Lv(t,e,n=Gt){re(t)&&(t=xc(t));for(const r in t){const s=t[r];let i;Pe(s)?"default"in s?i=ei(s.from||r,s.default,!0):i=ei(s.from||r):i=ei(s),xe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Vh(t,e,n){en(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Op(t,e,n,r){let s=r.includes(".")?Lp(n,r):()=>n[r];if(je(t)){const i=e[t];le(i)&&_o(s,i)}else if(le(t))_o(s,t.bind(n));else if(Pe(t))if(re(t))t.forEach(i=>Op(i,e,n,r));else{const i=le(t.handler)?t.handler.bind(n):e[t.handler];le(i)&&_o(s,i,t)}}function Np(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>Mo(l,h,a,!0)),Mo(l,e,a)),Pe(e)&&i.set(e,l),l}function Mo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Mo(t,i,n,!0),s&&s.forEach(a=>Mo(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const c=Fv[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const Fv={data:Dh,props:Oh,emits:Oh,methods:qs,computed:qs,beforeCreate:pt,created:pt,beforeMount:pt,mounted:pt,beforeUpdate:pt,updated:pt,beforeDestroy:pt,beforeUnmount:pt,destroyed:pt,unmounted:pt,activated:pt,deactivated:pt,errorCaptured:pt,serverPrefetch:pt,components:qs,directives:qs,watch:Bv,provide:Dh,inject:Uv};function Dh(t,e){return e?t?function(){return ut(le(t)?t.call(this,this):t,le(e)?e.call(this,this):e)}:e:t}function Uv(t,e){return qs(xc(t),xc(e))}function xc(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function pt(t,e){return t?[...new Set([].concat(t,e))]:e}function qs(t,e){return t?ut(Object.create(null),t,e):e}function Oh(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:ut(Object.create(null),kh(t),kh(e??{})):e}function Bv(t,e){if(!t)return e;if(!e)return t;const n=ut(Object.create(null),t);for(const r in e)n[r]=pt(t[r],e[r]);return n}function xp(){return{app:null,config:{isNativeTag:Gd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $v=0;function jv(t,e){return function(r,s=null){le(r)||(r=ut({},r)),s!=null&&!Pe(s)&&(s=null);const i=xp(),a=new WeakSet,c=[];let l=!1;const h=i.app={_uid:$v++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:AT,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&le(d.install)?(a.add(d),d.install(h,...p)):le(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,_){if(!l){const b=h._ceVNode||wt(r,s);return b.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),t(b,d,_),l=!0,h._container=d,d.__vue_app__=h,va(b.component)}},onUnmount(d){c.push(d)},unmount(){l&&(en(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=Ir;Ir=h;try{return d()}finally{Ir=p}}};return h}}let Ir=null;function qv(t,e){if(mt){let n=mt.provides;const r=mt.parent&&mt.parent.provides;r===n&&(n=mt.provides=Object.create(r)),n[t]=e}}function ei(t,e,n=!1){const r=Yp();if(r||Ir){let s=Ir?Ir._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&le(e)?e.call(r&&r.proxy):e}}function Hv(){return!!(Yp()||Ir)}const zv=Symbol.for("v-scx"),Wv=()=>ei(zv);function _o(t,e,n){return Mp(t,e,n)}function Mp(t,e,n=Ae){const{immediate:r,deep:s,flush:i,once:a}=n,c=ut({},n),l=e&&r||!e&&i!=="post";let h;if(pi){if(i==="sync"){const b=Wv();h=b.__watcherHandles||(b.__watcherHandles=[])}else if(!l){const b=()=>{};return b.stop=Gt,b.resume=Gt,b.pause=Gt,b}}const d=mt;c.call=(b,k,N)=>en(b,d,k,N);let p=!1;i==="post"?c.scheduler=b=>{Tt(b,d&&d.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(b,k)=>{k?b():Rl(b)}),c.augmentJob=b=>{e&&(b.flags|=4),p&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const _=mv(t,e,c);return pi&&(h?h.push(_):l&&_()),_}function Kv(t,e,n){const r=this.proxy,s=je(t)?t.includes(".")?Lp(r,t):()=>r[t]:t.bind(r,r);let i;le(e)?i=e:(i=e.handler,n=e);const a=Ri(this),c=Mp(s,i.bind(r),n);return a(),c}function Lp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Gv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Xn(e)}Modifiers`]||t[`${Vr(e)}Modifiers`];function Qv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ae;let s=n;const i=e.startsWith("update:"),a=i&&Gv(r,e.slice(7));a&&(a.trim&&(s=n.map(d=>je(d)?d.trim():d)),a.number&&(s=n.map(_l)));let c,l=r[c=rc(e)]||r[c=rc(Xn(e))];!l&&i&&(l=r[c=rc(Vr(e))]),l&&en(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,en(h,t,6,s)}}const Jv=new WeakMap;function Fp(t,e,n=!1){const r=n?Jv:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},c=!1;if(!le(t)){const l=h=>{const d=Fp(h,e,!0);d&&(c=!0,ut(a,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Pe(t)&&r.set(t,null),null):(re(i)?i.forEach(l=>a[l]=null):ut(a,i),Pe(t)&&r.set(t,a),a)}function _a(t,e){return!t||!ca(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ee(t,e[0].toLowerCase()+e.slice(1))||Ee(t,Vr(e))||Ee(t,e))}function Nh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:d,props:p,data:_,setupState:b,ctx:k,inheritAttrs:N}=t,L=No(t);let z,K;try{if(n.shapeFlag&4){const H=s||r,oe=H;z=Kt(h.call(oe,H,d,p,b,_,k)),K=c}else{const H=e;z=Kt(H.length>1?H(p,{attrs:c,slots:a,emit:l}):H(p,null)),K=e.props?c:Xv(c)}}catch(H){ti.length=0,ga(H,t,1),z=wt(En)}let Q=z;if(K&&N!==!1){const H=Object.keys(K),{shapeFlag:oe}=Q;H.length&&oe&7&&(i&&H.some(gl)&&(K=Yv(K,i)),Q=ls(Q,K,!1,!0))}return n.dirs&&(Q=ls(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(n.dirs):n.dirs),n.transition&&Cl(Q,n.transition),z=Q,No(L),z}const Xv=t=>{let e;for(const n in t)(n==="class"||n==="style"||ca(n))&&((e||(e={}))[n]=t[n]);return e},Yv=(t,e)=>{const n={};for(const r in t)(!gl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Zv(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?xh(r,a,h):!!a;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const _=d[p];if(a[_]!==r[_]&&!_a(h,_))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?xh(r,a,h):!0:!!a;return!1}function xh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!_a(n,i))return!0}return!1}function eT({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Up={},Bp=()=>Object.create(Up),$p=t=>Object.getPrototypeOf(t)===Up;function tT(t,e,n,r=!1){const s={},i=Bp();t.propsDefaults=Object.create(null),jp(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:ov(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function nT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,c=ve(s),[l]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let _=d[p];if(_a(t.emitsOptions,_))continue;const b=e[_];if(l)if(Ee(i,_))b!==i[_]&&(i[_]=b,h=!0);else{const k=Xn(_);s[k]=Mc(l,c,k,b,t,!1)}else b!==i[_]&&(i[_]=b,h=!0)}}}else{jp(t,e,s,i)&&(h=!0);let d;for(const p in c)(!e||!Ee(e,p)&&((d=Vr(p))===p||!Ee(e,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Mc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Ee(e,p))&&(delete i[p],h=!0)}h&&hn(t.attrs,"set","")}function jp(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,c;if(e)for(let l in e){if(Qs(l))continue;const h=e[l];let d;s&&Ee(s,d=Xn(l))?!i||!i.includes(d)?n[d]=h:(c||(c={}))[d]=h:_a(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=ve(n),h=c||Ae;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Mc(s,l,p,h[p],t,!Ee(h,p))}}return a}function Mc(t,e,n,r,s,i){const a=t[n];if(a!=null){const c=Ee(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&le(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=Ri(s);r=h[n]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===Vr(n))&&(r=!0))}return r}const rT=new WeakMap;function qp(t,e,n=!1){const r=n?rT:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},c=[];let l=!1;if(!le(t)){const d=p=>{l=!0;const[_,b]=qp(p,e,!0);ut(a,_),b&&c.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return Pe(t)&&r.set(t,Zr),Zr;if(re(i))for(let d=0;d<i.length;d++){const p=Xn(i[d]);Mh(p)&&(a[p]=Ae)}else if(i)for(const d in i){const p=Xn(d);if(Mh(p)){const _=i[d],b=a[p]=re(_)||le(_)?{type:_}:ut({},_),k=b.type;let N=!1,L=!0;if(re(k))for(let z=0;z<k.length;++z){const K=k[z],Q=le(K)&&K.name;if(Q==="Boolean"){N=!0;break}else Q==="String"&&(L=!1)}else N=le(k)&&k.name==="Boolean";b[0]=N,b[1]=L,(N||Ee(b,"default"))&&c.push(p)}}const h=[a,c];return Pe(t)&&r.set(t,h),h}function Mh(t){return t[0]!=="$"&&!Qs(t)}const kl=t=>t==="_"||t==="_ctx"||t==="$stable",Vl=t=>re(t)?t.map(Kt):[Kt(t)],sT=(t,e,n)=>{if(e._n)return e;const r=js((...s)=>Vl(e(...s)),n);return r._c=!1,r},Hp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(kl(s))continue;const i=t[s];if(le(i))e[s]=sT(s,i,r);else if(i!=null){const a=Vl(i);e[s]=()=>a}}},zp=(t,e)=>{const n=Vl(e);t.slots.default=()=>n},Wp=(t,e,n)=>{for(const r in e)(n||!kl(r))&&(t[r]=e[r])},iT=(t,e,n)=>{const r=t.slots=Bp();if(t.vnode.shapeFlag&32){const s=e._;s?(Wp(r,e,n),n&&ep(r,"_",s,!0)):Hp(e,r)}else e&&zp(t,e)},oT=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Ae;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Wp(s,e,n):(i=!e.$stable,Hp(e,s)),a=e}else e&&(zp(t,e),a={default:1});if(i)for(const c in s)!kl(c)&&a[c]==null&&delete s[c]},Tt=hT;function aT(t){return cT(t)}function cT(t,e){const n=ha();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:_,setScopeId:b=Gt,insertStaticContent:k}=t,N=(v,A,P,F=null,O=null,x=null,j=void 0,B=null,U=!!A.dynamicChildren)=>{if(v===A)return;v&&!Bs(v,A)&&(F=on(v),qe(v,O,x,!0),v=null),A.patchFlag===-2&&(U=!1,A.dynamicChildren=null);const{type:M,ref:Y,shapeFlag:q}=A;switch(M){case ya:L(v,A,P,F);break;case En:z(v,A,P,F);break;case uc:v==null&&K(A,P,F,j);break;case Le:S(v,A,P,F,O,x,j,B,U);break;default:q&1?oe(v,A,P,F,O,x,j,B,U):q&6?T(v,A,P,F,O,x,j,B,U):(q&64||q&128)&&M.process(v,A,P,F,O,x,j,B,U,qt)}Y!=null&&O?Ys(Y,v&&v.ref,x,A||v,!A):Y==null&&v&&v.ref!=null&&Ys(v.ref,null,x,v,!0)},L=(v,A,P,F)=>{if(v==null)r(A.el=c(A.children),P,F);else{const O=A.el=v.el;A.children!==v.children&&h(O,A.children)}},z=(v,A,P,F)=>{v==null?r(A.el=l(A.children||""),P,F):A.el=v.el},K=(v,A,P,F)=>{[v.el,v.anchor]=k(v.children,A,P,F,v.el,v.anchor)},Q=({el:v,anchor:A},P,F)=>{let O;for(;v&&v!==A;)O=_(v),r(v,P,F),v=O;r(A,P,F)},H=({el:v,anchor:A})=>{let P;for(;v&&v!==A;)P=_(v),s(v),v=P;s(A)},oe=(v,A,P,F,O,x,j,B,U)=>{if(A.type==="svg"?j="svg":A.type==="math"&&(j="mathml"),v==null)Te(A,P,F,O,x,j,B,U);else{const M=v.el&&v.el._isVueCE?v.el:null;try{M&&M._beginPatch(),y(v,A,O,x,j,B,U)}finally{M&&M._endPatch()}}},Te=(v,A,P,F,O,x,j,B)=>{let U,M;const{props:Y,shapeFlag:q,transition:J,dirs:te}=v;if(U=v.el=a(v.type,x,Y&&Y.is,Y),q&8?d(U,v.children):q&16&&m(v.children,U,null,F,O,lc(v,x),j,B),te&&dr(v,null,F,"created"),I(U,v,v.scopeId,j,F),Y){for(const ce in Y)ce!=="value"&&!Qs(ce)&&i(U,ce,null,Y[ce],x,F);"value"in Y&&i(U,"value",null,Y.value,x),(M=Y.onVnodeBeforeMount)&&Ht(M,F,v)}te&&dr(v,null,F,"beforeMount");const Z=lT(O,J);Z&&J.beforeEnter(U),r(U,A,P),((M=Y&&Y.onVnodeMounted)||Z||te)&&Tt(()=>{M&&Ht(M,F,v),Z&&J.enter(U),te&&dr(v,null,F,"mounted")},O)},I=(v,A,P,F,O)=>{if(P&&b(v,P),F)for(let x=0;x<F.length;x++)b(v,F[x]);if(O){let x=O.subTree;if(A===x||Qp(x.type)&&(x.ssContent===A||x.ssFallback===A)){const j=O.vnode;I(v,j,j.scopeId,j.slotScopeIds,O.parent)}}},m=(v,A,P,F,O,x,j,B,U=0)=>{for(let M=U;M<v.length;M++){const Y=v[M]=B?Ln(v[M]):Kt(v[M]);N(null,Y,A,P,F,O,x,j,B)}},y=(v,A,P,F,O,x,j)=>{const B=A.el=v.el;let{patchFlag:U,dynamicChildren:M,dirs:Y}=A;U|=v.patchFlag&16;const q=v.props||Ae,J=A.props||Ae;let te;if(P&&pr(P,!1),(te=J.onVnodeBeforeUpdate)&&Ht(te,P,A,v),Y&&dr(A,v,P,"beforeUpdate"),P&&pr(P,!0),(q.innerHTML&&J.innerHTML==null||q.textContent&&J.textContent==null)&&d(B,""),M?E(v.dynamicChildren,M,B,P,F,lc(A,O),x):j||_e(v,A,B,null,P,F,lc(A,O),x,!1),U>0){if(U&16)w(B,q,J,P,O);else if(U&2&&q.class!==J.class&&i(B,"class",null,J.class,O),U&4&&i(B,"style",q.style,J.style,O),U&8){const Z=A.dynamicProps;for(let ce=0;ce<Z.length;ce++){const de=Z[ce],Ke=q[de],Ge=J[de];(Ge!==Ke||de==="value")&&i(B,de,Ke,Ge,O,P)}}U&1&&v.children!==A.children&&d(B,A.children)}else!j&&M==null&&w(B,q,J,P,O);((te=J.onVnodeUpdated)||Y)&&Tt(()=>{te&&Ht(te,P,A,v),Y&&dr(A,v,P,"updated")},F)},E=(v,A,P,F,O,x,j)=>{for(let B=0;B<A.length;B++){const U=v[B],M=A[B],Y=U.el&&(U.type===Le||!Bs(U,M)||U.shapeFlag&198)?p(U.el):P;N(U,M,Y,null,F,O,x,j,!0)}},w=(v,A,P,F,O)=>{if(A!==P){if(A!==Ae)for(const x in A)!Qs(x)&&!(x in P)&&i(v,x,A[x],null,O,F);for(const x in P){if(Qs(x))continue;const j=P[x],B=A[x];j!==B&&x!=="value"&&i(v,x,B,j,O,F)}"value"in P&&i(v,"value",A.value,P.value,O)}},S=(v,A,P,F,O,x,j,B,U)=>{const M=A.el=v?v.el:c(""),Y=A.anchor=v?v.anchor:c("");let{patchFlag:q,dynamicChildren:J,slotScopeIds:te}=A;te&&(B=B?B.concat(te):te),v==null?(r(M,P,F),r(Y,P,F),m(A.children||[],P,Y,O,x,j,B,U)):q>0&&q&64&&J&&v.dynamicChildren?(E(v.dynamicChildren,J,P,O,x,j,B),(A.key!=null||O&&A===O.subTree)&&Kp(v,A,!0)):_e(v,A,P,Y,O,x,j,B,U)},T=(v,A,P,F,O,x,j,B,U)=>{A.slotScopeIds=B,v==null?A.shapeFlag&512?O.ctx.activate(A,P,F,j,U):ft(A,P,F,O,x,j,U):jt(v,A,U)},ft=(v,A,P,F,O,x,j)=>{const B=v.component=yT(v,F,O);if(Pp(v)&&(B.ctx.renderer=qt),vT(B,!1,j),B.asyncDep){if(O&&O.registerDep(B,De,j),!v.el){const U=B.subTree=wt(En);z(null,U,A,P),v.placeholder=U.el}}else De(B,v,A,P,O,x,j)},jt=(v,A,P)=>{const F=A.component=v.component;if(Zv(v,A,P))if(F.asyncDep&&!F.asyncResolved){ae(F,A,P);return}else F.next=A,F.update();else A.el=v.el,F.vnode=A},De=(v,A,P,F,O,x,j)=>{const B=()=>{if(v.isMounted){let{next:q,bu:J,u:te,parent:Z,vnode:ce}=v;{const tt=Gp(v);if(tt){q&&(q.el=ce.el,ae(v,q,j)),tt.asyncDep.then(()=>{v.isUnmounted||B()});return}}let de=q,Ke;pr(v,!1),q?(q.el=ce.el,ae(v,q,j)):q=ce,J&&go(J),(Ke=q.props&&q.props.onVnodeBeforeUpdate)&&Ht(Ke,Z,q,ce),pr(v,!0);const Ge=Nh(v),bt=v.subTree;v.subTree=Ge,N(bt,Ge,p(bt.el),on(bt),v,O,x),q.el=Ge.el,de===null&&eT(v,Ge.el),te&&Tt(te,O),(Ke=q.props&&q.props.onVnodeUpdated)&&Tt(()=>Ht(Ke,Z,q,ce),O)}else{let q;const{el:J,props:te}=A,{bm:Z,m:ce,parent:de,root:Ke,type:Ge}=v,bt=ns(A);pr(v,!1),Z&&go(Z),!bt&&(q=te&&te.onVnodeBeforeMount)&&Ht(q,de,A),pr(v,!0);{Ke.ce&&Ke.ce._def.shadowRoot!==!1&&Ke.ce._injectChildStyle(Ge);const tt=v.subTree=Nh(v);N(null,tt,P,F,v,O,x),A.el=tt.el}if(ce&&Tt(ce,O),!bt&&(q=te&&te.onVnodeMounted)){const tt=A;Tt(()=>Ht(q,de,tt),O)}(A.shapeFlag&256||de&&ns(de.vnode)&&de.vnode.shapeFlag&256)&&v.a&&Tt(v.a,O),v.isMounted=!0,A=P=F=null}};v.scope.on();const U=v.effect=new ap(B);v.scope.off();const M=v.update=U.run.bind(U),Y=v.job=U.runIfDirty.bind(U);Y.i=v,Y.id=v.uid,U.scheduler=()=>Rl(Y),pr(v,!0),M()},ae=(v,A,P)=>{A.component=v;const F=v.vnode.props;v.vnode=A,v.next=null,nT(v,A.props,F,P),oT(v,A.children,P),yn(),Ch(v),vn()},_e=(v,A,P,F,O,x,j,B,U=!1)=>{const M=v&&v.children,Y=v?v.shapeFlag:0,q=A.children,{patchFlag:J,shapeFlag:te}=A;if(J>0){if(J&128){or(M,q,P,F,O,x,j,B,U);return}else if(J&256){kt(M,q,P,F,O,x,j,B,U);return}}te&8?(Y&16&&cr(M,O,x),q!==M&&d(P,q)):Y&16?te&16?or(M,q,P,F,O,x,j,B,U):cr(M,O,x,!0):(Y&8&&d(P,""),te&16&&m(q,P,F,O,x,j,B,U))},kt=(v,A,P,F,O,x,j,B,U)=>{v=v||Zr,A=A||Zr;const M=v.length,Y=A.length,q=Math.min(M,Y);let J;for(J=0;J<q;J++){const te=A[J]=U?Ln(A[J]):Kt(A[J]);N(v[J],te,P,null,O,x,j,B,U)}M>Y?cr(v,O,x,!0,!1,q):m(A,P,F,O,x,j,B,U,q)},or=(v,A,P,F,O,x,j,B,U)=>{let M=0;const Y=A.length;let q=v.length-1,J=Y-1;for(;M<=q&&M<=J;){const te=v[M],Z=A[M]=U?Ln(A[M]):Kt(A[M]);if(Bs(te,Z))N(te,Z,P,null,O,x,j,B,U);else break;M++}for(;M<=q&&M<=J;){const te=v[q],Z=A[J]=U?Ln(A[J]):Kt(A[J]);if(Bs(te,Z))N(te,Z,P,null,O,x,j,B,U);else break;q--,J--}if(M>q){if(M<=J){const te=J+1,Z=te<Y?A[te].el:F;for(;M<=J;)N(null,A[M]=U?Ln(A[M]):Kt(A[M]),P,Z,O,x,j,B,U),M++}}else if(M>J)for(;M<=q;)qe(v[M],O,x,!0),M++;else{const te=M,Z=M,ce=new Map;for(M=Z;M<=J;M++){const Qe=A[M]=U?Ln(A[M]):Kt(A[M]);Qe.key!=null&&ce.set(Qe.key,M)}let de,Ke=0;const Ge=J-Z+1;let bt=!1,tt=0;const Rn=new Array(Ge);for(M=0;M<Ge;M++)Rn[M]=0;for(M=te;M<=q;M++){const Qe=v[M];if(Ke>=Ge){qe(Qe,O,x,!0);continue}let St;if(Qe.key!=null)St=ce.get(Qe.key);else for(de=Z;de<=J;de++)if(Rn[de-Z]===0&&Bs(Qe,A[de])){St=de;break}St===void 0?qe(Qe,O,x,!0):(Rn[St-Z]=M+1,St>=tt?tt=St:bt=!0,N(Qe,A[St],P,null,O,x,j,B,U),Ke++)}const Ss=bt?uT(Rn):Zr;for(de=Ss.length-1,M=Ge-1;M>=0;M--){const Qe=Z+M,St=A[Qe],Bi=A[Qe+1],Br=Qe+1<Y?Bi.el||Bi.placeholder:F;Rn[M]===0?N(null,St,P,Br,O,x,j,B,U):bt&&(de<0||M!==Ss[de]?sn(St,P,Br,2):de--)}}},sn=(v,A,P,F,O=null)=>{const{el:x,type:j,transition:B,children:U,shapeFlag:M}=v;if(M&6){sn(v.component.subTree,A,P,F);return}if(M&128){v.suspense.move(A,P,F);return}if(M&64){j.move(v,A,P,qt);return}if(j===Le){r(x,A,P);for(let q=0;q<U.length;q++)sn(U[q],A,P,F);r(v.anchor,A,P);return}if(j===uc){Q(v,A,P);return}if(F!==2&&M&1&&B)if(F===0)B.beforeEnter(x),r(x,A,P),Tt(()=>B.enter(x),O);else{const{leave:q,delayLeave:J,afterLeave:te}=B,Z=()=>{v.ctx.isUnmounted?s(x):r(x,A,P)},ce=()=>{x._isLeaving&&x[Iv](!0),q(x,()=>{Z(),te&&te()})};J?J(x,Z,ce):ce()}else r(x,A,P)},qe=(v,A,P,F=!1,O=!1)=>{const{type:x,props:j,ref:B,children:U,dynamicChildren:M,shapeFlag:Y,patchFlag:q,dirs:J,cacheIndex:te}=v;if(q===-2&&(O=!1),B!=null&&(yn(),Ys(B,null,P,v,!0),vn()),te!=null&&(A.renderCache[te]=void 0),Y&256){A.ctx.deactivate(v);return}const Z=Y&1&&J,ce=!ns(v);let de;if(ce&&(de=j&&j.onVnodeBeforeUnmount)&&Ht(de,A,v),Y&6)ar(v.component,P,F);else{if(Y&128){v.suspense.unmount(P,F);return}Z&&dr(v,null,A,"beforeUnmount"),Y&64?v.type.remove(v,A,P,qt,F):M&&!M.hasOnce&&(x!==Le||q>0&&q&64)?cr(M,A,P,!1,!0):(x===Le&&q&384||!O&&Y&16)&&cr(U,A,P),F&&He(v)}(ce&&(de=j&&j.onVnodeUnmounted)||Z)&&Tt(()=>{de&&Ht(de,A,v),Z&&dr(v,null,A,"unmounted")},P)},He=v=>{const{type:A,el:P,anchor:F,transition:O}=v;if(A===Le){ja(P,F);return}if(A===uc){H(v);return}const x=()=>{s(P),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(v.shapeFlag&1&&O&&!O.persisted){const{leave:j,delayLeave:B}=O,U=()=>j(P,x);B?B(v.el,x,U):U()}else x()},ja=(v,A)=>{let P;for(;v!==A;)P=_(v),s(v),v=P;s(A)},ar=(v,A,P)=>{const{bum:F,scope:O,job:x,subTree:j,um:B,m:U,a:M}=v;Lh(U),Lh(M),F&&go(F),O.stop(),x&&(x.flags|=8,qe(j,v,A,P)),B&&Tt(B,A),Tt(()=>{v.isUnmounted=!0},A)},cr=(v,A,P,F=!1,O=!1,x=0)=>{for(let j=x;j<v.length;j++)qe(v[j],A,P,F,O)},on=v=>{if(v.shapeFlag&6)return on(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const A=_(v.anchor||v.el),P=A&&A[Tv];return P?_(P):A};let As=!1;const Ui=(v,A,P)=>{v==null?A._vnode&&qe(A._vnode,null,null,!0):N(A._vnode||null,v,A,null,null,null,P),A._vnode=v,As||(As=!0,Ch(),bp(),As=!1)},qt={p:N,um:qe,m:sn,r:He,mt:ft,mc:m,pc:_e,pbc:E,n:on,o:t};return{render:Ui,hydrate:void 0,createApp:jv(Ui)}}function lc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function pr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function lT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Kp(t,e,n=!1){const r=t.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Ln(s[i]),c.el=a.el),!n&&c.patchFlag!==-2&&Kp(a,c)),c.type===ya&&c.patchFlag!==-1&&(c.el=a.el),c.type===En&&!c.el&&(c.el=a.el)}}function uT(t){const e=t.slice(),n=[0];let r,s,i,a,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)c=i+a>>1,t[n[c]]<h?i=c+1:a=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function Gp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Gp(e)}function Lh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Qp=t=>t.__isSuspense;function hT(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):vv(t)}const Le=Symbol.for("v-fgt"),ya=Symbol.for("v-txt"),En=Symbol.for("v-cmt"),uc=Symbol.for("v-stc"),ti=[];let Et=null;function ge(t=!1){ti.push(Et=t?null:[])}function fT(){ti.pop(),Et=ti[ti.length-1]||null}let di=1;function Fh(t,e=!1){di+=t,t<0&&Et&&e&&(Et.hasOnce=!0)}function Jp(t){return t.dynamicChildren=di>0?Et||Zr:null,fT(),di>0&&Et&&Et.push(t),t}function Se(t,e,n,r,s,i){return Jp(be(t,e,n,r,s,i,!0))}function Un(t,e,n,r,s){return Jp(wt(t,e,n,r,s,!0))}function Dl(t){return t?t.__v_isVNode===!0:!1}function Bs(t,e){return t.type===e.type&&t.key===e.key}const Xp=({key:t})=>t??null,yo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?je(t)||xe(t)||le(t)?{i:lt,r:t,k:e,f:!!n}:t:null);function be(t,e=null,n=null,r=0,s=null,i=t===Le?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Xp(e),ref:e&&yo(e),scopeId:Rp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:lt};return c?(Ol(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=je(n)?8:16),di>0&&!a&&Et&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Et.push(l),l}const wt=dT;function dT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Nv)&&(t=En),Dl(t)){const c=ls(t,e,!0);return n&&Ol(c,n),di>0&&!i&&Et&&(c.shapeFlag&6?Et[Et.indexOf(t)]=c:Et.push(c)),c.patchFlag=-2,c}if(wT(t)&&(t=t.__vccOpts),e){e=pT(e);let{class:c,style:l}=e;c&&!je(c)&&(e.class=yl(c)),Pe(l)&&(pa(l)&&!re(l)&&(l=ut({},l)),e.style=ms(l))}const a=je(t)?1:Qp(t)?128:Ev(t)?64:Pe(t)?4:le(t)?2:0;return be(t,e,n,r,s,a,i,!0)}function pT(t){return t?pa(t)||$p(t)?ut({},t):t:null}function ls(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=t,h=e?gT(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Xp(h),ref:e&&e.ref?n&&i?re(i)?i.concat(yo(e)):[i,yo(e)]:yo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Le?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ls(t.ssContent),ssFallback:t.ssFallback&&ls(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Cl(d,l.clone(d)),d}function Hs(t=" ",e=0){return wt(ya,null,t,e)}function Lo(t="",e=!1){return e?(ge(),Un(En,null,t)):wt(En,null,t)}function Kt(t){return t==null||typeof t=="boolean"?wt(En):re(t)?wt(Le,null,t.slice()):Dl(t)?Ln(t):wt(ya,null,String(t))}function Ln(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ls(t)}function Ol(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ol(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!$p(e)?e._ctx=lt:s===3&&lt&&(lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else le(e)?(e={default:e,_ctx:lt},n=32):(e=String(e),r&64?(n=16,e=[Hs(e)]):n=8);t.children=e,t.shapeFlag|=n}function gT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=yl([e.class,r.class]));else if(s==="style")e.style=ms([e.style,r.style]);else if(ca(s)){const i=e[s],a=r[s];a&&i!==a&&!(re(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Ht(t,e,n,r=null){en(t,e,7,[n,r])}const mT=xp();let _T=0;function yT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||mT,i={uid:_T++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new sp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qp(r,s),emitsOptions:Fp(r,s),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:r.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Qv.bind(null,i),t.ce&&t.ce(i),i}let mt=null;const Yp=()=>mt||lt;let Fo,Lc;{const t=ha(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Fo=e("__VUE_INSTANCE_SETTERS__",n=>mt=n),Lc=e("__VUE_SSR_SETTERS__",n=>pi=n)}const Ri=t=>{const e=mt;return Fo(t),t.scope.on(),()=>{t.scope.off(),Fo(e)}},Uh=()=>{mt&&mt.scope.off(),Fo(null)};function Zp(t){return t.vnode.shapeFlag&4}let pi=!1;function vT(t,e=!1,n=!1){e&&Lc(e);const{props:r,children:s}=t.vnode,i=Zp(t);tT(t,r,i,e),iT(t,s,n||e);const a=i?TT(t,e):void 0;return e&&Lc(!1),a}function TT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,xv);const{setup:r}=n;if(r){yn();const s=t.setupContext=r.length>1?IT(t):null,i=Ri(t),a=bi(r,t,0,[t.props,s]),c=Jd(a);if(vn(),i(),(c||t.sp)&&!ns(t)&&Cp(t),c){if(a.then(Uh,Uh),e)return a.then(l=>{Bh(t,l)}).catch(l=>{ga(l,t,0)});t.asyncDep=a}else Bh(t,a)}else eg(t)}function Bh(t,e,n){le(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pe(e)&&(t.setupState=Ep(e)),eg(t)}function eg(t,e,n){const r=t.type;t.render||(t.render=r.render||Gt);{const s=Ri(t);yn();try{Mv(t)}finally{vn(),s()}}}const ET={get(t,e){return at(t,"get",""),t[e]}};function IT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ET),slots:t.slots,emit:t.emit,expose:e}}function va(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ep(bl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Zs)return Zs[n](t)},has(e,n){return n in e||n in Zs}})):t.proxy}function wT(t){return le(t)&&"__vccOpts"in t}const tg=(t,e)=>pv(t,e,pi),AT="3.5.25";/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fc;const $h=typeof window<"u"&&window.trustedTypes;if($h)try{Fc=$h.createPolicy("vue",{createHTML:t=>t})}catch{}const ng=Fc?t=>Fc.createHTML(t):t=>t,bT="http://www.w3.org/2000/svg",ST="http://www.w3.org/1998/Math/MathML",un=typeof document<"u"?document:null,jh=un&&un.createElement("template"),RT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?un.createElementNS(bT,t):e==="mathml"?un.createElementNS(ST,t):n?un.createElement(t,{is:n}):un.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>un.createTextNode(t),createComment:t=>un.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>un.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{jh.innerHTML=ng(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=jh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},CT=Symbol("_vtc");function PT(t,e,n){const r=t[CT];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const qh=Symbol("_vod"),kT=Symbol("_vsh"),VT=Symbol(""),DT=/(?:^|;)\s*display\s*:/;function OT(t,e,n){const r=t.style,s=je(n);let i=!1;if(n&&!s){if(e)if(je(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&vo(r,c,"")}else for(const a in e)n[a]==null&&vo(r,a,"");for(const a in n)a==="display"&&(i=!0),vo(r,a,n[a])}else if(s){if(e!==n){const a=r[VT];a&&(n+=";"+a),r.cssText=n,i=DT.test(n)}}else e&&t.removeAttribute("style");qh in t&&(t[qh]=i?r.display:"",t[kT]&&(r.display="none"))}const Hh=/\s*!important$/;function vo(t,e,n){if(re(n))n.forEach(r=>vo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=NT(t,e);Hh.test(n)?t.setProperty(Vr(r),n.replace(Hh,""),"important"):t[r]=n}}const zh=["Webkit","Moz","ms"],hc={};function NT(t,e){const n=hc[e];if(n)return n;let r=Xn(e);if(r!=="filter"&&r in t)return hc[e]=r;r=Zd(r);for(let s=0;s<zh.length;s++){const i=zh[s]+r;if(i in t)return hc[e]=i}return e}const Wh="http://www.w3.org/1999/xlink";function Kh(t,e,n,r,s,i=Fy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Wh,e.slice(6,e.length)):t.setAttributeNS(Wh,e,n):n==null||i&&!tp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Lt(n)?String(n):n)}function Gh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ng(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=tp(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function _r(t,e,n,r){t.addEventListener(e,n,r)}function xT(t,e,n,r){t.removeEventListener(e,n,r)}const Qh=Symbol("_vei");function MT(t,e,n,r,s=null){const i=t[Qh]||(t[Qh]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=LT(e);if(r){const h=i[e]=BT(r,s);_r(t,c,h,l)}else a&&(xT(t,c,a,l),i[e]=void 0)}}const Jh=/(?:Once|Passive|Capture)$/;function LT(t){let e;if(Jh.test(t)){e={};let r;for(;r=t.match(Jh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Vr(t.slice(2)),e]}let fc=0;const FT=Promise.resolve(),UT=()=>fc||(FT.then(()=>fc=0),fc=Date.now());function BT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;en($T(r,n.value),e,5,[r])};return n.value=t,n.attached=UT(),n}function $T(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Xh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,jT=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?PT(t,r,a):e==="style"?OT(t,n,r):ca(e)?gl(e)||MT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):qT(t,e,r,a))?(Gh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Kh(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!je(r))?Gh(t,Xn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Kh(t,e,r,a))};function qT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Xh(e)&&le(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Xh(e)&&je(n)?!1:e in t}const Uo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>go(e,n):e};function HT(t){t.target.composing=!0}function Yh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const rs=Symbol("_assign");function Zh(t,e,n){return e&&(t=t.trim()),n&&(t=_l(t)),t}const zT={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[rs]=Uo(s);const i=r||s.props&&s.props.type==="number";_r(t,e?"change":"input",a=>{a.target.composing||t[rs](Zh(t.value,n,i))}),(n||i)&&_r(t,"change",()=>{t.value=Zh(t.value,n,i)}),e||(_r(t,"compositionstart",HT),_r(t,"compositionend",Yh),_r(t,"change",Yh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[rs]=Uo(a),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?_l(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},$s={created(t,{value:e},n){t.checked=ko(e,n.props.value),t[rs]=Uo(n),_r(t,"change",()=>{t[rs](WT(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[rs]=Uo(r),e!==n&&(t.checked=ko(e,r.props.value))}};function WT(t){return"_value"in t?t._value:t.value}const KT=ut({patchProp:jT},RT);let ef;function GT(){return ef||(ef=aT(KT))}const QT=((...t)=>{const e=GT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=XT(r);if(!s)return;const i=e._component;!le(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,JT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function JT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function XT(t){return je(t)?document.querySelector(t):t}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let rg;const Ta=t=>rg=t,sg=Symbol();function Uc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ni;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ni||(ni={}));function YT(){const t=ip(!0),e=t.run(()=>Sl({}));let n=[],r=[];const s=bl({install(i){Ta(s),s._a=i,i.provide(sg,s),i.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const ig=()=>{};function tf(t,e,n,r=ig){t.add(e);const s=()=>{t.delete(e)&&r()};return!n&&op()&&By(s),s}function Kr(t,...e){t.forEach(n=>{n(...e)})}const ZT=t=>t(),nf=Symbol(),dc=Symbol();function Bc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Uc(s)&&Uc(r)&&t.hasOwnProperty(n)&&!xe(r)&&!mn(r)?t[n]=Bc(s,r):t[n]=r}return t}const eE=Symbol();function tE(t){return!Uc(t)||!Object.prototype.hasOwnProperty.call(t,eE)}const{assign:Nn}=Object;function nE(t){return!!(xe(t)&&t.effect)}function rE(t,e,n,r){const{state:s,actions:i,getters:a}=e,c=n.state.value[t];let l;function h(){c||(n.state.value[t]=s?s():{});const d=uv(n.state.value[t]);return Nn(d,i,Object.keys(a||{}).reduce((p,_)=>(p[_]=bl(tg(()=>{Ta(n);const b=n._s.get(t);return a[_].call(b,b)})),p),{}))}return l=og(t,h,e,n,r,!0),l}function og(t,e,n={},r,s,i){let a;const c=Nn({actions:{}},n),l={deep:!0};let h,d,p=new Set,_=new Set,b;const k=r.state.value[t];!i&&!k&&(r.state.value[t]={}),Sl({});let N;function L(m){let y;h=d=!1,typeof m=="function"?(m(r.state.value[t]),y={type:ni.patchFunction,storeId:t,events:b}):(Bc(r.state.value[t],m),y={type:ni.patchObject,payload:m,storeId:t,events:b});const E=N=Symbol();wp().then(()=>{N===E&&(h=!0)}),d=!0,Kr(p,y,r.state.value[t])}const z=i?function(){const{state:y}=n,E=y?y():{};this.$patch(w=>{Nn(w,E)})}:ig;function K(){a.stop(),p.clear(),_.clear(),r._s.delete(t)}const Q=(m,y="")=>{if(nf in m)return m[dc]=y,m;const E=function(){Ta(r);const w=Array.from(arguments),S=new Set,T=new Set;function ft(ae){S.add(ae)}function jt(ae){T.add(ae)}Kr(_,{args:w,name:E[dc],store:oe,after:ft,onError:jt});let De;try{De=m.apply(this&&this.$id===t?this:oe,w)}catch(ae){throw Kr(T,ae),ae}return De instanceof Promise?De.then(ae=>(Kr(S,ae),ae)).catch(ae=>(Kr(T,ae),Promise.reject(ae))):(Kr(S,De),De)};return E[nf]=!0,E[dc]=y,E},H={_p:r,$id:t,$onAction:tf.bind(null,_),$patch:L,$reset:z,$subscribe(m,y={}){const E=tf(p,m,y.detached,()=>w()),w=a.run(()=>_o(()=>r.state.value[t],S=>{(y.flush==="sync"?d:h)&&m({storeId:t,type:ni.direct,events:b},S)},Nn({},l,y)));return E},$dispose:K},oe=da(H);r._s.set(t,oe);const I=(r._a&&r._a.runWithContext||ZT)(()=>r._e.run(()=>(a=ip()).run(()=>e({action:Q}))));for(const m in I){const y=I[m];if(xe(y)&&!nE(y)||mn(y))i||(k&&tE(y)&&(xe(y)?y.value=k[m]:Bc(y,k[m])),r.state.value[t][m]=y);else if(typeof y=="function"){const E=Q(y,m);I[m]=E,c.actions[m]=y}}return Nn(oe,I),Nn(ve(oe),I),Object.defineProperty(oe,"$state",{get:()=>r.state.value[t],set:m=>{L(y=>{Nn(y,m)})}}),r._p.forEach(m=>{Nn(oe,a.run(()=>m({store:oe,app:r._a,pinia:r,options:c})))}),k&&i&&n.hydrate&&n.hydrate(oe.$state,k),h=!0,d=!0,oe}/*! #__NO_SIDE_EFFECTS__ */function sE(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(a,c){const l=Hv();return a=a||(l?ei(sg,null):null),a&&Ta(a),a=rg,a._s.has(t)||(s?og(t,e,r,a):rE(t,r,a)),a._s.get(t)}return i.$id=t,i}function iE(t,e){if(t==null)return;let n=t;for(let r=0;r<e.length;r++){if(n===void 0||n[e[r]]===void 0)return;if(n===null||n[e[r]]===null)return null;n=n[e[r]]}return n}function Nl(t,e,n){if(n.length===0)return e;const r=n[0];return n.length>1&&(e=Nl(typeof t!="object"||t===null||!Object.prototype.hasOwnProperty.call(t,r)?Number.isInteger(Number(n[1]))?[]:{}:t[r],e,Array.prototype.slice.call(n,1))),Number.isInteger(Number(r))&&Array.isArray(t)?t.slice()[r]:Object.assign({},t,{[r]:e})}function ag(t,e){if(t==null||e.length===0)return t;if(e.length===1){if(t==null)return t;if(Number.isInteger(e[0])&&Array.isArray(t))return Array.prototype.slice.call(t,0).splice(e[0],1);const n={};for(const r in t)n[r]=t[r];return delete n[e[0]],n}if(t[e[0]]==null){if(Number.isInteger(e[0])&&Array.isArray(t))return Array.prototype.concat.call([],t);const n={};for(const r in t)n[r]=t[r];return n}return Nl(t,ag(t[e[0]],Array.prototype.slice.call(e,1)),[e[0]])}function cg(t,e){return e.map(n=>n.split(".")).map(n=>[n,iE(t,n)]).filter(n=>n[1]!==void 0).reduce((n,r)=>Nl(n,r[1],r[0]),{})}function lg(t,e){return e.map(n=>n.split(".")).reduce((n,r)=>ag(n,r),t)}function rf(t,{storage:e,serializer:n,key:r,debug:s,pick:i,omit:a,beforeHydrate:c,afterHydrate:l},h,d=!0){try{d&&(c==null||c(h));const p=e.getItem(r);if(p){const _=n.deserialize(p),b=i?cg(_,i):_,k=a?lg(b,a):b;t.$patch(k)}d&&(l==null||l(h))}catch(p){s&&console.error("[pinia-plugin-persistedstate]",p)}}function sf(t,{storage:e,serializer:n,key:r,debug:s,pick:i,omit:a}){try{const c=i?cg(t,i):t,l=a?lg(c,a):c,h=n.serialize(l);e.setItem(r,h)}catch(c){s&&console.error("[pinia-plugin-persistedstate]",c)}}function oE(t,e){return typeof t=="function"?t(e):typeof t=="string"?t:e}function aE(t,e,n){const{pinia:r,store:s,options:{persist:i=n}}=t;if(!i)return;// v8 ignore if -- @preserve
if(!(s.$id in r.state.value)){const c=r._s.get(s.$id.replace("__hot:",""));c&&Promise.resolve().then(()=>c.$persist());return}const a=(Array.isArray(i)?i:i===!0?[{}]:[i]).map(e);s.$hydrate=({runHooks:c=!0}={})=>{a.forEach(l=>{rf(s,l,t,c)})},s.$persist=()=>{a.forEach(c=>{sf(s.$state,c)})},a.forEach(c=>{rf(s,c,t),s.$subscribe((l,h)=>sf(h,c),{detached:!0})})}function cE(t={}){return function(e){aE(e,n=>{const r=oE(n.key,e.store.$id);return{key:(t.key?t.key:s=>s)(r),debug:n.debug??t.debug??!1,serializer:n.serializer??t.serializer??{serialize:s=>JSON.stringify(s),deserialize:s=>JSON.parse(s)},storage:n.storage??t.storage??window.localStorage,beforeHydrate:n.beforeHydrate??t.beforeHydrate,afterHydrate:n.afterHydrate??t.afterHydrate,pick:n.pick,omit:n.omit}},t.auto??!1)}}var lE=cE();const Dr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},uE={},hE={class:"carafe"};function fE(t,e){return ge(),Se("div",hE,[mo(t.$slots,"top",{},void 0,!0),mo(t.$slots,"mid",{},void 0,!0),mo(t.$slots,"bottom",{},void 0,!0)])}const dE=Dr(uE,[["render",fE],["__scopeId","data-v-8709b092"]]),pE={},gE={class:"mug"};function mE(t,e){return ge(),Se("div",gE,[mo(t.$slots,"default")])}const _E=Dr(pE,[["render",mE]]),of=["Hot","Cold"],af=[{id:"b1",name:"Black Tea",color:"#8B4513"},{id:"b2",name:"Green Tea",color:"#C8E6C9"},{id:"b3",name:"Coffee",color:"#6F4E37"}],cf=[{id:"s1",name:"No Syrup",color:"#c6c6c6"},{id:"s2",name:"Vanilla",color:"#FFEFD5"},{id:"s3",name:"Caramel",color:"#DAA520"},{id:"s4",name:"Hazelnut",color:"#6B4423"}],lf=[{id:"c1",name:"No Cream",color:"transparent"},{id:"c2",name:"Milk",color:"AliceBlue"},{id:"c3",name:"Cream",color:"#F5F5DC"},{id:"c4",name:"Half & Half",color:"#FFFACD"}],yE=()=>{};var uf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},vE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},hg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,c=a?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let _=(c&15)<<2|h>>6,b=h&63;l||(b=64,a||(_=64)),r.push(n[d],n[p],n[_],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ug(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new TE;const _=i<<2|c>>4;if(r.push(_),h!==64){const b=c<<4&240|h>>2;if(r.push(b),p!==64){const k=h<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class TE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const EE=function(t){const e=ug(t);return hg.encodeByteArray(e,!0)},Bo=function(t){return EE(t).replace(/\./g,"")},fg=function(t){try{return hg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=()=>IE().__FIREBASE_DEFAULTS__,AE=()=>{if(typeof process>"u"||typeof uf>"u")return;const t=uf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fg(t[1]);return e&&JSON.parse(e)},Ea=()=>{try{return yE()||wE()||AE()||bE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dg=t=>{var e,n;return(n=(e=Ea())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},SE=t=>{const e=dg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},pg=()=>{var t;return(t=Ea())===null||t===void 0?void 0:t.config},gg=t=>{var e;return(e=Ea())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function mg(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Bo(JSON.stringify(n)),Bo(JSON.stringify(a)),""].join(".")}const ri={};function PE(){const t={prod:[],emulator:[]};for(const e of Object.keys(ri))ri[e]?t.emulator.push(e):t.prod.push(e);return t}function kE(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let hf=!1;function _g(t,e){if(typeof window>"u"||typeof document>"u"||!_s(window.location.host)||ri[t]===e||ri[t]||hf)return;ri[t]=e;function n(_){return`__firebase__banner__${_}`}const r="__firebase__banner",i=PE().prod.length>0;function a(){const _=document.getElementById(r);_&&_.remove()}function c(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function l(_,b){_.setAttribute("width","24"),_.setAttribute("id",b),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{hf=!0,a()},_}function d(_,b){_.setAttribute("id",b),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function p(){const _=kE(r),b=n("text"),k=document.getElementById(b)||document.createElement("span"),N=n("learnmore"),L=document.getElementById(N)||document.createElement("a"),z=n("preprendIcon"),K=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const Q=_.element;c(Q),d(L,N);const H=h();l(K,z),Q.append(K,k,L,H),document.body.appendChild(Q)}i?(k.innerText="Preview backend disconnected.",K.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(K.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function VE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function DE(){var t;const e=(t=Ea())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function OE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function yg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function NE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xE(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ME(){return!DE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vg(){try{return typeof indexedDB=="object"}catch{return!1}}function Tg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function LE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE="FirebaseError";class $t extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=FE,Object.setPrototypeOf(this,$t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Or.prototype.create)}}class Or{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?UE(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new $t(s,c,r)}}function UE(t,e){return t.replace(BE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const BE=/\{\$([^}]+)}/g;function $E(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(ff(i)&&ff(a)){if(!Yn(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ff(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function jE(t,e){const n=new qE(t,e);return n.subscribe.bind(n)}class qE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");HE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=pc),s.error===void 0&&(s.error=pc),s.complete===void 0&&(s.complete=pc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function HE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE=1e3,WE=2,KE=14400*1e3,GE=.5;function df(t,e=zE,n=WE){const r=e*Math.pow(n,t),s=Math.round(GE*r*(Math.random()-.5)*2);return Math.min(KE,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t){return t&&t._delegate?t._delegate:t}class Ut{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new RE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(XE(e))try{this.getOrInitializeService({instanceIdentifier:mr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mr){return this.instances.has(e)}getOptions(e=mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:JE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=mr){return this.component?this.component.multipleInstances?e:mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function JE(t){return t===mr?void 0:t}function XE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new QE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const ZE={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},eI=he.INFO,tI={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},nI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=tI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ia{constructor(e){this.name=e,this._logLevel=eI,this._logHandler=nI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const rI=(t,e)=>e.some(n=>t instanceof n);let pf,gf;function sI(){return pf||(pf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iI(){return gf||(gf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Eg=new WeakMap,$c=new WeakMap,Ig=new WeakMap,gc=new WeakMap,xl=new WeakMap;function oI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(zn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Eg.set(n,t)}).catch(()=>{}),xl.set(e,t),e}function aI(t){if($c.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});$c.set(t,e)}let jc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $c.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ig.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cI(t){jc=t(jc)}function lI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(mc(this),e,...n);return Ig.set(r,e.sort?e.sort():[e]),zn(r)}:iI().includes(t)?function(...e){return t.apply(mc(this),e),zn(Eg.get(this))}:function(...e){return zn(t.apply(mc(this),e))}}function uI(t){return typeof t=="function"?lI(t):(t instanceof IDBTransaction&&aI(t),rI(t,sI())?new Proxy(t,jc):t)}function zn(t){if(t instanceof IDBRequest)return oI(t);if(gc.has(t))return gc.get(t);const e=uI(t);return e!==t&&(gc.set(t,e),xl.set(e,t)),e}const mc=t=>xl.get(t);function wg(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),c=zn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(zn(a.result),l.oldVersion,l.newVersion,zn(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const hI=["get","getKey","getAll","getAllKeys","count"],fI=["put","add","delete","clear"],_c=new Map;function mf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_c.get(e))return _c.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=fI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||hI.includes(n)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return _c.set(e,i),i}cI(t=>({...t,get:(e,n,r)=>mf(e,n)||t.get(e,n,r),has:(e,n)=>!!mf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qc="@firebase/app",_f="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new Ia("@firebase/app"),gI="@firebase/app-compat",mI="@firebase/analytics-compat",_I="@firebase/analytics",yI="@firebase/app-check-compat",vI="@firebase/app-check",TI="@firebase/auth",EI="@firebase/auth-compat",II="@firebase/database",wI="@firebase/data-connect",AI="@firebase/database-compat",bI="@firebase/functions",SI="@firebase/functions-compat",RI="@firebase/installations",CI="@firebase/installations-compat",PI="@firebase/messaging",kI="@firebase/messaging-compat",VI="@firebase/performance",DI="@firebase/performance-compat",OI="@firebase/remote-config",NI="@firebase/remote-config-compat",xI="@firebase/storage",MI="@firebase/storage-compat",LI="@firebase/firestore",FI="@firebase/ai",UI="@firebase/firestore-compat",BI="firebase",$I="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc="[DEFAULT]",jI={[qc]:"fire-core",[gI]:"fire-core-compat",[_I]:"fire-analytics",[mI]:"fire-analytics-compat",[vI]:"fire-app-check",[yI]:"fire-app-check-compat",[TI]:"fire-auth",[EI]:"fire-auth-compat",[II]:"fire-rtdb",[wI]:"fire-data-connect",[AI]:"fire-rtdb-compat",[bI]:"fire-fn",[SI]:"fire-fn-compat",[RI]:"fire-iid",[CI]:"fire-iid-compat",[PI]:"fire-fcm",[kI]:"fire-fcm-compat",[VI]:"fire-perf",[DI]:"fire-perf-compat",[OI]:"fire-rc",[NI]:"fire-rc-compat",[xI]:"fire-gcs",[MI]:"fire-gcs-compat",[LI]:"fire-fst",[UI]:"fire-fst-compat",[FI]:"fire-vertex","fire-js":"fire-js",[BI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=new Map,qI=new Map,zc=new Map;function yf(t,e){try{t.container.addComponent(e)}catch(n){In.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function tn(t){const e=t.name;if(zc.has(e))return In.debug(`There were multiple attempts to register component ${e}.`),!1;zc.set(e,t);for(const n of $o.values())yf(n,t);for(const n of qI.values())yf(n,t);return!0}function Nr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Dt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wn=new Or("app","Firebase",HI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=$I;function Ag(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Hc,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Wn.create("bad-app-name",{appName:String(s)});if(n||(n=pg()),!n)throw Wn.create("no-options");const i=$o.get(s);if(i){if(Yn(n,i.options)&&Yn(r,i.config))return i;throw Wn.create("duplicate-app",{appName:s})}const a=new YE(s);for(const l of zc.values())a.addComponent(l);const c=new zI(n,r,a);return $o.set(s,c),c}function Ml(t=Hc){const e=$o.get(t);if(!e&&t===Hc&&pg())return Ag();if(!e)throw Wn.create("no-app",{appName:t});return e}function Pt(t,e,n){var r;let s=(r=jI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),In.warn(c.join(" "));return}tn(new Ut(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI="firebase-heartbeat-database",KI=1,gi="firebase-heartbeat-store";let yc=null;function bg(){return yc||(yc=wg(WI,KI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(gi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Wn.create("idb-open",{originalErrorMessage:t.message})})),yc}async function GI(t){try{const n=(await bg()).transaction(gi),r=await n.objectStore(gi).get(Sg(t));return await n.done,r}catch(e){if(e instanceof $t)In.warn(e.message);else{const n=Wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});In.warn(n.message)}}}async function vf(t,e){try{const r=(await bg()).transaction(gi,"readwrite");await r.objectStore(gi).put(e,Sg(t)),await r.done}catch(n){if(n instanceof $t)In.warn(n.message);else{const r=Wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});In.warn(r.message)}}}function Sg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=1024,JI=30;class XI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ZI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Tf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>JI){const a=ew(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){In.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Tf(),{heartbeatsToSend:r,unsentEntries:s}=YI(this._heartbeatsCache.heartbeats),i=Bo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return In.warn(n),""}}}function Tf(){return new Date().toISOString().substring(0,10)}function YI(t,e=QI){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Ef(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ef(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ZI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vg()?Tg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await GI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return vf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return vf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ef(t){return Bo(JSON.stringify({version:2,heartbeats:t})).length}function ew(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(t){tn(new Ut("platform-logger",e=>new dI(e),"PRIVATE")),tn(new Ut("heartbeat",e=>new XI(e),"PRIVATE")),Pt(qc,_f,t),Pt(qc,_f,"esm2017"),Pt("fire-js","")}tw("");var nw="firebase",rw="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt(nw,rw,"app");const Rg="@firebase/installations",Ll="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=1e4,Pg=`w:${Ll}`,kg="FIS_v2",sw="https://firebaseinstallations.googleapis.com/v1",iw=3600*1e3,ow="installations",aw="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Sr=new Or(ow,aw,cw);function Vg(t){return t instanceof $t&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg({projectId:t}){return`${sw}/projects/${t}/installations`}function Og(t){return{token:t.token,requestStatus:2,expiresIn:uw(t.expiresIn),creationTime:Date.now()}}async function Ng(t,e){const r=(await e.json()).error;return Sr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function xg({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function lw(t,{refreshToken:e}){const n=xg(t);return n.append("Authorization",hw(e)),n}async function Mg(t){const e=await t();return e.status>=500&&e.status<600?t():e}function uw(t){return Number(t.replace("s","000"))}function hw(t){return`${kg} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fw({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Dg(t),s=xg(t),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:n,authVersion:kg,appId:t.appId,sdkVersion:Pg},c={method:"POST",headers:s,body:JSON.stringify(a)},l=await Mg(()=>fetch(r,c));if(l.ok){const h=await l.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:Og(h.authToken)}}else throw await Ng("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw=/^[cdef][\w-]{21}$/,Wc="";function gw(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=mw(t);return pw.test(n)?n:Wc}catch{return Wc}}function mw(t){return dw(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=new Map;function Ug(t,e){const n=wa(t);Bg(n,e),_w(n,e)}function Bg(t,e){const n=Fg.get(t);if(n)for(const r of n)r(e)}function _w(t,e){const n=yw();n&&n.postMessage({key:t,fid:e}),vw()}let yr=null;function yw(){return!yr&&"BroadcastChannel"in self&&(yr=new BroadcastChannel("[Firebase] FID Change"),yr.onmessage=t=>{Bg(t.data.key,t.data.fid)}),yr}function vw(){Fg.size===0&&yr&&(yr.close(),yr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw="firebase-installations-database",Ew=1,Rr="firebase-installations-store";let vc=null;function Fl(){return vc||(vc=wg(Tw,Ew,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Rr)}}})),vc}async function jo(t,e){const n=wa(t),s=(await Fl()).transaction(Rr,"readwrite"),i=s.objectStore(Rr),a=await i.get(n);return await i.put(e,n),await s.done,(!a||a.fid!==e.fid)&&Ug(t,e.fid),e}async function $g(t){const e=wa(t),r=(await Fl()).transaction(Rr,"readwrite");await r.objectStore(Rr).delete(e),await r.done}async function Aa(t,e){const n=wa(t),s=(await Fl()).transaction(Rr,"readwrite"),i=s.objectStore(Rr),a=await i.get(n),c=e(a);return c===void 0?await i.delete(n):await i.put(c,n),await s.done,c&&(!a||a.fid!==c.fid)&&Ug(t,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ul(t){let e;const n=await Aa(t.appConfig,r=>{const s=Iw(r),i=ww(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Wc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Iw(t){const e=t||{fid:gw(),registrationStatus:0};return jg(e)}function ww(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Sr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Aw(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:bw(t)}:{installationEntry:e}}async function Aw(t,e){try{const n=await fw(t,e);return jo(t.appConfig,n)}catch(n){throw Vg(n)&&n.customData.serverCode===409?await $g(t.appConfig):await jo(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function bw(t){let e=await If(t.appConfig);for(;e.registrationStatus===1;)await Lg(100),e=await If(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ul(t);return r||n}return e}function If(t){return Aa(t,e=>{if(!e)throw Sr.create("installation-not-found");return jg(e)})}function jg(t){return Sw(t)?{fid:t.fid,registrationStatus:0}:t}function Sw(t){return t.registrationStatus===1&&t.registrationTime+Cg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rw({appConfig:t,heartbeatServiceProvider:e},n){const r=Cw(t,n),s=lw(t,n),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:Pg,appId:t.appId}},c={method:"POST",headers:s,body:JSON.stringify(a)},l=await Mg(()=>fetch(r,c));if(l.ok){const h=await l.json();return Og(h)}else throw await Ng("Generate Auth Token",l)}function Cw(t,{fid:e}){return`${Dg(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bl(t,e=!1){let n;const r=await Aa(t.appConfig,i=>{if(!qg(i))throw Sr.create("not-registered");const a=i.authToken;if(!e&&Vw(a))return i;if(a.requestStatus===1)return n=Pw(t,e),i;{if(!navigator.onLine)throw Sr.create("app-offline");const c=Ow(i);return n=kw(t,c),c}});return n?await n:r.authToken}async function Pw(t,e){let n=await wf(t.appConfig);for(;n.authToken.requestStatus===1;)await Lg(100),n=await wf(t.appConfig);const r=n.authToken;return r.requestStatus===0?Bl(t,e):r}function wf(t){return Aa(t,e=>{if(!qg(e))throw Sr.create("not-registered");const n=e.authToken;return Nw(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function kw(t,e){try{const n=await Rw(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await jo(t.appConfig,r),n}catch(n){if(Vg(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await $g(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await jo(t.appConfig,r)}throw n}}function qg(t){return t!==void 0&&t.registrationStatus===2}function Vw(t){return t.requestStatus===2&&!Dw(t)}function Dw(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+iw}function Ow(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Nw(t){return t.requestStatus===1&&t.requestTime+Cg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xw(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ul(e);return r?r.catch(console.error):Bl(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mw(t,e=!1){const n=t;return await Lw(n),(await Bl(n,e)).token}async function Lw(t){const{registrationPromise:e}=await Ul(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(t){if(!t||!t.options)throw Tc("App Configuration");if(!t.name)throw Tc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Tc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Tc(t){return Sr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg="installations",Uw="installations-internal",Bw=t=>{const e=t.getProvider("app").getImmediate(),n=Fw(e),r=Nr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},$w=t=>{const e=t.getProvider("app").getImmediate(),n=Nr(e,Hg).getImmediate();return{getId:()=>xw(n),getToken:s=>Mw(n,s)}};function jw(){tn(new Ut(Hg,Bw,"PUBLIC")),tn(new Ut(Uw,$w,"PRIVATE"))}jw();Pt(Rg,Ll);Pt(Rg,Ll,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo="analytics",qw="firebase_id",Hw="origin",zw=60*1e3,Ww="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",$l="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt=new Ia("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},At=new Or("analytics","Analytics",Kw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(t){if(!t.startsWith($l)){const e=At.create("invalid-gtag-resource",{gtagURL:t});return yt.warn(e.message),""}return t}function zg(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Qw(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Jw(t,e){const n=Qw("firebase-js-sdk-policy",{createScriptURL:Gw}),r=document.createElement("script"),s=`${$l}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Xw(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Yw(t,e,n,r,s,i){const a=r[s];try{if(a)await e[a];else{const l=(await zg(n)).find(h=>h.measurementId===s);l&&await e[l.appId]}}catch(c){yt.error(c)}t("config",s,i)}async function Zw(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const c=await zg(n);for(const l of a){const h=c.find(p=>p.measurementId===l),d=h&&e[h.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){yt.error(i)}}function eA(t,e,n,r){async function s(i,...a){try{if(i==="event"){const[c,l]=a;await Zw(t,e,n,c,l)}else if(i==="config"){const[c,l]=a;await Yw(t,e,n,r,c,l)}else if(i==="consent"){const[c,l]=a;t("consent",c,l)}else if(i==="get"){const[c,l,h]=a;t("get",c,l,h)}else if(i==="set"){const[c]=a;t("set",c)}else t(i,...a)}catch(c){yt.error(c)}}return s}function tA(t,e,n,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=eA(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function nA(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes($l)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA=30,sA=1e3;class iA{constructor(e={},n=sA){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Wg=new iA;function oA(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function aA(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:oA(r)},i=Ww.replace("{app-id}",n),a=await fetch(i,s);if(a.status!==200&&a.status!==304){let c="";try{const l=await a.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw At.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function cA(t,e=Wg,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw At.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw At.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new hA;return setTimeout(async()=>{c.abort()},zw),Kg({appId:r,apiKey:s,measurementId:i},a,c,e)}async function Kg(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=Wg){var i;const{appId:a,measurementId:c}=t;try{await lA(r,e)}catch(l){if(c)return yt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:a,measurementId:c};throw l}try{const l=await aA(t);return s.deleteThrottleMetadata(a),l}catch(l){const h=l;if(!uA(h)){if(s.deleteThrottleMetadata(a),c)return yt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:c};throw l}const d=Number((i=h==null?void 0:h.customData)===null||i===void 0?void 0:i.httpStatus)===503?df(n,s.intervalMillis,rA):df(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(a,p),yt.debug(`Calling attemptFetch again in ${d} millis`),Kg(t,p,r,s)}}function lA(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(At.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function uA(t){if(!(t instanceof $t)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class hA{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function fA(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,a=Object.assign(Object.assign({},r),{send_to:i});t("event",n,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dA(){if(vg())try{await Tg()}catch(t){return yt.warn(At.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return yt.warn(At.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function pA(t,e,n,r,s,i,a){var c;const l=cA(t);l.then(b=>{n[b.measurementId]=b.appId,t.options.measurementId&&b.measurementId!==t.options.measurementId&&yt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${b.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(b=>yt.error(b)),e.push(l);const h=dA().then(b=>{if(b)return r.getId()}),[d,p]=await Promise.all([l,h]);nA(i)||Jw(i,d.measurementId),s("js",new Date);const _=(c=a==null?void 0:a.config)!==null&&c!==void 0?c:{};return _[Hw]="firebase",_.update=!0,p!=null&&(_[qw]=p),s("config",d.measurementId,_),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e){this.app=e}_delete(){return delete si[this.app.options.appId],Promise.resolve()}}let si={},Af=[];const bf={};let Ec="dataLayer",mA="gtag",Sf,Gg,Rf=!1;function _A(){const t=[];if(yg()&&t.push("This is a browser extension environment."),LE()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=At.create("invalid-analytics-context",{errorInfo:e});yt.warn(n.message)}}function yA(t,e,n){_A();const r=t.options.appId;if(!r)throw At.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)yt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw At.create("no-api-key");if(si[r]!=null)throw At.create("already-exists",{id:r});if(!Rf){Xw(Ec);const{wrappedGtag:i,gtagCore:a}=tA(si,Af,bf,Ec,mA);Gg=i,Sf=a,Rf=!0}return si[r]=pA(t,Af,bf,e,Sf,Ec,n),new gA(t)}function vA(t=Ml()){t=Ze(t);const e=Nr(t,qo);return e.isInitialized()?e.getImmediate():TA(t)}function TA(t,e={}){const n=Nr(t,qo);if(n.isInitialized()){const s=n.getImmediate();if(Yn(e,n.getOptions()))return s;throw At.create("already-initialized")}return n.initialize({options:e})}function EA(t,e,n,r){t=Ze(t),fA(Gg,si[t.app.options.appId],e,n,r).catch(s=>yt.error(s))}const Cf="@firebase/analytics",Pf="0.10.17";function IA(){tn(new Ut(qo,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return yA(r,s,n)},"PUBLIC")),tn(new Ut("analytics-internal",t,"PRIVATE")),Pt(Cf,Pf),Pt(Cf,Pf,"esm2017");function t(e){try{const n=e.getProvider(qo).getImmediate();return{logEvent:(r,s,i)=>EA(n,r,s,i)}}catch(n){throw At.create("interop-component-reg-failed",{reason:n})}}}IA();var kf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kn,Qg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,m){function y(){}y.prototype=m.prototype,I.D=m.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(E,w,S){for(var T=Array(arguments.length-2),ft=2;ft<arguments.length;ft++)T[ft-2]=arguments[ft];return m.prototype[w].apply(E,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,m,y){y||(y=0);var E=Array(16);if(typeof m=="string")for(var w=0;16>w;++w)E[w]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(w=0;16>w;++w)E[w]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=I.g[0],y=I.g[1],w=I.g[2];var S=I.g[3],T=m+(S^y&(w^S))+E[0]+3614090360&4294967295;m=y+(T<<7&4294967295|T>>>25),T=S+(w^m&(y^w))+E[1]+3905402710&4294967295,S=m+(T<<12&4294967295|T>>>20),T=w+(y^S&(m^y))+E[2]+606105819&4294967295,w=S+(T<<17&4294967295|T>>>15),T=y+(m^w&(S^m))+E[3]+3250441966&4294967295,y=w+(T<<22&4294967295|T>>>10),T=m+(S^y&(w^S))+E[4]+4118548399&4294967295,m=y+(T<<7&4294967295|T>>>25),T=S+(w^m&(y^w))+E[5]+1200080426&4294967295,S=m+(T<<12&4294967295|T>>>20),T=w+(y^S&(m^y))+E[6]+2821735955&4294967295,w=S+(T<<17&4294967295|T>>>15),T=y+(m^w&(S^m))+E[7]+4249261313&4294967295,y=w+(T<<22&4294967295|T>>>10),T=m+(S^y&(w^S))+E[8]+1770035416&4294967295,m=y+(T<<7&4294967295|T>>>25),T=S+(w^m&(y^w))+E[9]+2336552879&4294967295,S=m+(T<<12&4294967295|T>>>20),T=w+(y^S&(m^y))+E[10]+4294925233&4294967295,w=S+(T<<17&4294967295|T>>>15),T=y+(m^w&(S^m))+E[11]+2304563134&4294967295,y=w+(T<<22&4294967295|T>>>10),T=m+(S^y&(w^S))+E[12]+1804603682&4294967295,m=y+(T<<7&4294967295|T>>>25),T=S+(w^m&(y^w))+E[13]+4254626195&4294967295,S=m+(T<<12&4294967295|T>>>20),T=w+(y^S&(m^y))+E[14]+2792965006&4294967295,w=S+(T<<17&4294967295|T>>>15),T=y+(m^w&(S^m))+E[15]+1236535329&4294967295,y=w+(T<<22&4294967295|T>>>10),T=m+(w^S&(y^w))+E[1]+4129170786&4294967295,m=y+(T<<5&4294967295|T>>>27),T=S+(y^w&(m^y))+E[6]+3225465664&4294967295,S=m+(T<<9&4294967295|T>>>23),T=w+(m^y&(S^m))+E[11]+643717713&4294967295,w=S+(T<<14&4294967295|T>>>18),T=y+(S^m&(w^S))+E[0]+3921069994&4294967295,y=w+(T<<20&4294967295|T>>>12),T=m+(w^S&(y^w))+E[5]+3593408605&4294967295,m=y+(T<<5&4294967295|T>>>27),T=S+(y^w&(m^y))+E[10]+38016083&4294967295,S=m+(T<<9&4294967295|T>>>23),T=w+(m^y&(S^m))+E[15]+3634488961&4294967295,w=S+(T<<14&4294967295|T>>>18),T=y+(S^m&(w^S))+E[4]+3889429448&4294967295,y=w+(T<<20&4294967295|T>>>12),T=m+(w^S&(y^w))+E[9]+568446438&4294967295,m=y+(T<<5&4294967295|T>>>27),T=S+(y^w&(m^y))+E[14]+3275163606&4294967295,S=m+(T<<9&4294967295|T>>>23),T=w+(m^y&(S^m))+E[3]+4107603335&4294967295,w=S+(T<<14&4294967295|T>>>18),T=y+(S^m&(w^S))+E[8]+1163531501&4294967295,y=w+(T<<20&4294967295|T>>>12),T=m+(w^S&(y^w))+E[13]+2850285829&4294967295,m=y+(T<<5&4294967295|T>>>27),T=S+(y^w&(m^y))+E[2]+4243563512&4294967295,S=m+(T<<9&4294967295|T>>>23),T=w+(m^y&(S^m))+E[7]+1735328473&4294967295,w=S+(T<<14&4294967295|T>>>18),T=y+(S^m&(w^S))+E[12]+2368359562&4294967295,y=w+(T<<20&4294967295|T>>>12),T=m+(y^w^S)+E[5]+4294588738&4294967295,m=y+(T<<4&4294967295|T>>>28),T=S+(m^y^w)+E[8]+2272392833&4294967295,S=m+(T<<11&4294967295|T>>>21),T=w+(S^m^y)+E[11]+1839030562&4294967295,w=S+(T<<16&4294967295|T>>>16),T=y+(w^S^m)+E[14]+4259657740&4294967295,y=w+(T<<23&4294967295|T>>>9),T=m+(y^w^S)+E[1]+2763975236&4294967295,m=y+(T<<4&4294967295|T>>>28),T=S+(m^y^w)+E[4]+1272893353&4294967295,S=m+(T<<11&4294967295|T>>>21),T=w+(S^m^y)+E[7]+4139469664&4294967295,w=S+(T<<16&4294967295|T>>>16),T=y+(w^S^m)+E[10]+3200236656&4294967295,y=w+(T<<23&4294967295|T>>>9),T=m+(y^w^S)+E[13]+681279174&4294967295,m=y+(T<<4&4294967295|T>>>28),T=S+(m^y^w)+E[0]+3936430074&4294967295,S=m+(T<<11&4294967295|T>>>21),T=w+(S^m^y)+E[3]+3572445317&4294967295,w=S+(T<<16&4294967295|T>>>16),T=y+(w^S^m)+E[6]+76029189&4294967295,y=w+(T<<23&4294967295|T>>>9),T=m+(y^w^S)+E[9]+3654602809&4294967295,m=y+(T<<4&4294967295|T>>>28),T=S+(m^y^w)+E[12]+3873151461&4294967295,S=m+(T<<11&4294967295|T>>>21),T=w+(S^m^y)+E[15]+530742520&4294967295,w=S+(T<<16&4294967295|T>>>16),T=y+(w^S^m)+E[2]+3299628645&4294967295,y=w+(T<<23&4294967295|T>>>9),T=m+(w^(y|~S))+E[0]+4096336452&4294967295,m=y+(T<<6&4294967295|T>>>26),T=S+(y^(m|~w))+E[7]+1126891415&4294967295,S=m+(T<<10&4294967295|T>>>22),T=w+(m^(S|~y))+E[14]+2878612391&4294967295,w=S+(T<<15&4294967295|T>>>17),T=y+(S^(w|~m))+E[5]+4237533241&4294967295,y=w+(T<<21&4294967295|T>>>11),T=m+(w^(y|~S))+E[12]+1700485571&4294967295,m=y+(T<<6&4294967295|T>>>26),T=S+(y^(m|~w))+E[3]+2399980690&4294967295,S=m+(T<<10&4294967295|T>>>22),T=w+(m^(S|~y))+E[10]+4293915773&4294967295,w=S+(T<<15&4294967295|T>>>17),T=y+(S^(w|~m))+E[1]+2240044497&4294967295,y=w+(T<<21&4294967295|T>>>11),T=m+(w^(y|~S))+E[8]+1873313359&4294967295,m=y+(T<<6&4294967295|T>>>26),T=S+(y^(m|~w))+E[15]+4264355552&4294967295,S=m+(T<<10&4294967295|T>>>22),T=w+(m^(S|~y))+E[6]+2734768916&4294967295,w=S+(T<<15&4294967295|T>>>17),T=y+(S^(w|~m))+E[13]+1309151649&4294967295,y=w+(T<<21&4294967295|T>>>11),T=m+(w^(y|~S))+E[4]+4149444226&4294967295,m=y+(T<<6&4294967295|T>>>26),T=S+(y^(m|~w))+E[11]+3174756917&4294967295,S=m+(T<<10&4294967295|T>>>22),T=w+(m^(S|~y))+E[2]+718787259&4294967295,w=S+(T<<15&4294967295|T>>>17),T=y+(S^(w|~m))+E[9]+3951481745&4294967295,I.g[0]=I.g[0]+m&4294967295,I.g[1]=I.g[1]+(w+(T<<21&4294967295|T>>>11))&4294967295,I.g[2]=I.g[2]+w&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,m){m===void 0&&(m=I.length);for(var y=m-this.blockSize,E=this.B,w=this.h,S=0;S<m;){if(w==0)for(;S<=y;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<m;)if(E[w++]=I.charCodeAt(S++),w==this.blockSize){s(this,E),w=0;break}}else for(;S<m;)if(E[w++]=I[S++],w==this.blockSize){s(this,E),w=0;break}}this.h=w,this.o+=m},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var m=1;m<I.length-8;++m)I[m]=0;var y=8*this.o;for(m=I.length-8;m<I.length;++m)I[m]=y&255,y/=256;for(this.u(I),I=Array(16),m=y=0;4>m;++m)for(var E=0;32>E;E+=8)I[y++]=this.g[m]>>>E&255;return I};function i(I,m){var y=c;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=m(I)}function a(I,m){this.h=m;for(var y=[],E=!0,w=I.length-1;0<=w;w--){var S=I[w]|0;E&&S==m||(y[w]=S,E=!1)}this.g=y}var c={};function l(I){return-128<=I&&128>I?i(I,function(m){return new a([m|0],0>m?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return L(h(-I));for(var m=[],y=1,E=0;I>=y;E++)m[E]=I/y|0,y*=4294967296;return new a(m,0)}function d(I,m){if(I.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(I.charAt(0)=="-")return L(d(I.substring(1),m));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(m,8)),E=p,w=0;w<I.length;w+=8){var S=Math.min(8,I.length-w),T=parseInt(I.substring(w,w+S),m);8>S?(S=h(Math.pow(m,S)),E=E.j(S).add(h(T))):(E=E.j(y),E=E.add(h(T)))}return E}var p=l(0),_=l(1),b=l(16777216);t=a.prototype,t.m=function(){if(N(this))return-L(this).m();for(var I=0,m=1,y=0;y<this.g.length;y++){var E=this.i(y);I+=(0<=E?E:4294967296+E)*m,m*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(k(this))return"0";if(N(this))return"-"+L(this).toString(I);for(var m=h(Math.pow(I,6)),y=this,E="";;){var w=H(y,m).g;y=z(y,w.j(m));var S=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=w,k(y))return S+E;for(;6>S.length;)S="0"+S;E=S+E}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function k(I){if(I.h!=0)return!1;for(var m=0;m<I.g.length;m++)if(I.g[m]!=0)return!1;return!0}function N(I){return I.h==-1}t.l=function(I){return I=z(this,I),N(I)?-1:k(I)?0:1};function L(I){for(var m=I.g.length,y=[],E=0;E<m;E++)y[E]=~I.g[E];return new a(y,~I.h).add(_)}t.abs=function(){return N(this)?L(this):this},t.add=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],E=0,w=0;w<=m;w++){var S=E+(this.i(w)&65535)+(I.i(w)&65535),T=(S>>>16)+(this.i(w)>>>16)+(I.i(w)>>>16);E=T>>>16,S&=65535,T&=65535,y[w]=T<<16|S}return new a(y,y[y.length-1]&-2147483648?-1:0)};function z(I,m){return I.add(L(m))}t.j=function(I){if(k(this)||k(I))return p;if(N(this))return N(I)?L(this).j(L(I)):L(L(this).j(I));if(N(I))return L(this.j(L(I)));if(0>this.l(b)&&0>I.l(b))return h(this.m()*I.m());for(var m=this.g.length+I.g.length,y=[],E=0;E<2*m;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(var w=0;w<I.g.length;w++){var S=this.i(E)>>>16,T=this.i(E)&65535,ft=I.i(w)>>>16,jt=I.i(w)&65535;y[2*E+2*w]+=T*jt,K(y,2*E+2*w),y[2*E+2*w+1]+=S*jt,K(y,2*E+2*w+1),y[2*E+2*w+1]+=T*ft,K(y,2*E+2*w+1),y[2*E+2*w+2]+=S*ft,K(y,2*E+2*w+2)}for(E=0;E<m;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=m;E<2*m;E++)y[E]=0;return new a(y,0)};function K(I,m){for(;(I[m]&65535)!=I[m];)I[m+1]+=I[m]>>>16,I[m]&=65535,m++}function Q(I,m){this.g=I,this.h=m}function H(I,m){if(k(m))throw Error("division by zero");if(k(I))return new Q(p,p);if(N(I))return m=H(L(I),m),new Q(L(m.g),L(m.h));if(N(m))return m=H(I,L(m)),new Q(L(m.g),m.h);if(30<I.g.length){if(N(I)||N(m))throw Error("slowDivide_ only works with positive integers.");for(var y=_,E=m;0>=E.l(I);)y=oe(y),E=oe(E);var w=Te(y,1),S=Te(E,1);for(E=Te(E,2),y=Te(y,2);!k(E);){var T=S.add(E);0>=T.l(I)&&(w=w.add(y),S=T),E=Te(E,1),y=Te(y,1)}return m=z(I,w.j(m)),new Q(w,m)}for(w=p;0<=I.l(m);){for(y=Math.max(1,Math.floor(I.m()/m.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),S=h(y),T=S.j(m);N(T)||0<T.l(I);)y-=E,S=h(y),T=S.j(m);k(S)&&(S=_),w=w.add(S),I=z(I,T)}return new Q(w,I)}t.A=function(I){return H(this,I).h},t.and=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],E=0;E<m;E++)y[E]=this.i(E)&I.i(E);return new a(y,this.h&I.h)},t.or=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],E=0;E<m;E++)y[E]=this.i(E)|I.i(E);return new a(y,this.h|I.h)},t.xor=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],E=0;E<m;E++)y[E]=this.i(E)^I.i(E);return new a(y,this.h^I.h)};function oe(I){for(var m=I.g.length+1,y=[],E=0;E<m;E++)y[E]=I.i(E)<<1|I.i(E-1)>>>31;return new a(y,I.h)}function Te(I,m){var y=m>>5;m%=32;for(var E=I.g.length-y,w=[],S=0;S<E;S++)w[S]=0<m?I.i(S+y)>>>m|I.i(S+y+1)<<32-m:I.i(S+y);return new a(w,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Qg=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Kn=a}).apply(typeof kf<"u"?kf:typeof self<"u"?self:typeof window<"u"?window:{});var io=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jg,zs,Xg,To,Kc,Yg,Zg,em;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof io=="object"&&io];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var R=o[g];if(!(R in f))break e;f=f[R]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,g=!1,R={next:function(){if(!g&&f<o.length){var C=f++;return{value:u(C,o[C]),done:!1}}return g=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,g),o.apply(u,R)}}return function(){return o.apply(u,arguments)}}function _(o,u,f){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,_.apply(null,arguments)}function b(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function k(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,R,C){for(var $=Array(arguments.length-2),we=2;we<arguments.length;we++)$[we-2]=arguments[we];return u.prototype[R].apply(g,$)}}function N(o){const u=o.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function L(o,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(l(g)){const R=o.length||0,C=g.length||0;o.length=R+C;for(let $=0;$<C;$++)o[R+$]=g[$]}else o.push(g)}}class z{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function K(o){return/^[\s\xa0]*$/.test(o)}function Q(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function H(o){return H[" "](o),o}H[" "]=function(){};var oe=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function Te(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function I(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function m(o){const u={};for(const f in o)u[f]=o[f];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,u){let f,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(f in g)o[f]=g[f];for(let C=0;C<y.length;C++)f=y[C],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function w(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function S(o){c.setTimeout(()=>{throw o},0)}function T(){var o=kt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ft{constructor(){this.h=this.g=null}add(u,f){const g=jt.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var jt=new z(()=>new De,o=>o.reset());class De{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,_e=!1,kt=new ft,or=()=>{const o=c.Promise.resolve(void 0);ae=()=>{o.then(sn)}};var sn=()=>{for(var o;o=T();){try{o.h.call(o.g)}catch(f){S(f)}var u=jt;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}_e=!1};function qe(){this.s=this.s,this.C=this.C}qe.prototype.s=!1,qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function He(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}He.prototype.h=function(){this.defaultPrevented=!0};var ja=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return o})();function ar(o,u){if(He.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(oe){e:{try{H(u.nodeName);var R=!0;break e}catch{}R=!1}R||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:cr[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&ar.aa.h.call(this)}}k(ar,He);var cr={2:"touch",3:"pen",4:"mouse"};ar.prototype.h=function(){ar.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var on="closure_listenable_"+(1e6*Math.random()|0),As=0;function Ui(o,u,f,g,R){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=R,this.key=++As,this.da=this.fa=!1}function qt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function bs(o){this.src=o,this.g={},this.h=0}bs.prototype.add=function(o,u,f,g,R){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var $=A(o,u,g,R);return-1<$?(u=o[$],f||(u.fa=!1)):(u=new Ui(u,this.src,C,!!g,R),u.fa=f,o.push(u)),u};function v(o,u){var f=u.type;if(f in o.g){var g=o.g[f],R=Array.prototype.indexOf.call(g,u,void 0),C;(C=0<=R)&&Array.prototype.splice.call(g,R,1),C&&(qt(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function A(o,u,f,g){for(var R=0;R<o.length;++R){var C=o[R];if(!C.da&&C.listener==u&&C.capture==!!f&&C.ha==g)return R}return-1}var P="closure_lm_"+(1e6*Math.random()|0),F={};function O(o,u,f,g,R){if(Array.isArray(u)){for(var C=0;C<u.length;C++)O(o,u[C],f,g,R);return null}return f=te(f),o&&o[on]?o.K(u,f,h(g)?!!g.capture:!1,R):x(o,u,f,!1,g,R)}function x(o,u,f,g,R,C){if(!u)throw Error("Invalid event type");var $=h(R)?!!R.capture:!!R,we=q(o);if(we||(o[P]=we=new bs(o)),f=we.add(u,f,g,$,C),f.proxy)return f;if(g=j(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)ja||(R=$),R===void 0&&(R=!1),o.addEventListener(u.toString(),g,R);else if(o.attachEvent)o.attachEvent(M(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function j(){function o(f){return u.call(o.src,o.listener,f)}const u=Y;return o}function B(o,u,f,g,R){if(Array.isArray(u))for(var C=0;C<u.length;C++)B(o,u[C],f,g,R);else g=h(g)?!!g.capture:!!g,f=te(f),o&&o[on]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],f=A(C,f,g,R),-1<f&&(qt(C[f]),Array.prototype.splice.call(C,f,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=q(o))&&(u=o.g[u.toString()],o=-1,u&&(o=A(u,f,g,R)),(f=-1<o?u[o]:null)&&U(f))}function U(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[on])v(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(M(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=q(u))?(v(f,o),f.h==0&&(f.src=null,u[P]=null)):qt(o)}}}function M(o){return o in F?F[o]:F[o]="on"+o}function Y(o,u){if(o.da)o=!0;else{u=new ar(u,this);var f=o.listener,g=o.ha||o.src;o.fa&&U(o),o=f.call(g,u)}return o}function q(o){return o=o[P],o instanceof bs?o:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function te(o){return typeof o=="function"?o:(o[J]||(o[J]=function(u){return o.handleEvent(u)}),o[J])}function Z(){qe.call(this),this.i=new bs(this),this.M=this,this.F=null}k(Z,qe),Z.prototype[on]=!0,Z.prototype.removeEventListener=function(o,u,f,g){B(this,o,u,f,g)};function ce(o,u){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new He(u,o);else if(u instanceof He)u.target=u.target||o;else{var R=u;u=new He(g,o),E(u,R)}if(R=!0,f)for(var C=f.length-1;0<=C;C--){var $=u.g=f[C];R=de($,g,!0,u)&&R}if($=u.g=o,R=de($,g,!0,u)&&R,R=de($,g,!1,u)&&R,f)for(C=0;C<f.length;C++)$=u.g=f[C],R=de($,g,!1,u)&&R}Z.prototype.N=function(){if(Z.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],g=0;g<f.length;g++)qt(f[g]);delete o.g[u],o.h--}}this.F=null},Z.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},Z.prototype.L=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function de(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,C=0;C<u.length;++C){var $=u[C];if($&&!$.da&&$.capture==f){var we=$.listener,Je=$.ha||$.src;$.fa&&v(o.i,$),R=we.call(Je,g)!==!1&&R}}return R&&!g.defaultPrevented}function Ke(o,u,f){if(typeof o=="function")f&&(o=_(o,f));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Ge(o){o.g=Ke(()=>{o.g=null,o.i&&(o.i=!1,Ge(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class bt extends qe{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ge(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tt(o){qe.call(this),this.h=o,this.g={}}k(tt,qe);var Rn=[];function Ss(o){Te(o.g,function(u,f){this.g.hasOwnProperty(f)&&U(u)},o),o.g={}}tt.prototype.N=function(){tt.aa.N.call(this),Ss(this)},tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qe=c.JSON.stringify,St=c.JSON.parse,Bi=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Br(){}Br.prototype.h=null;function Ou(o){return o.h||(o.h=o.i())}function Nu(){}var Rs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function qa(){He.call(this,"d")}k(qa,He);function Ha(){He.call(this,"c")}k(Ha,He);var lr={},xu=null;function $i(){return xu=xu||new Z}lr.La="serverreachability";function Mu(o){He.call(this,lr.La,o)}k(Mu,He);function Cs(o){const u=$i();ce(u,new Mu(u))}lr.STAT_EVENT="statevent";function Lu(o,u){He.call(this,lr.STAT_EVENT,o),this.stat=u}k(Lu,He);function dt(o){const u=$i();ce(u,new Lu(u,o))}lr.Ma="timingevent";function Fu(o,u){He.call(this,lr.Ma,o),this.size=u}k(Fu,He);function Ps(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function ks(){this.g=!0}ks.prototype.xa=function(){this.g=!1};function oy(o,u,f,g,R,C){o.info(function(){if(o.g)if(C)for(var $="",we=C.split("&"),Je=0;Je<we.length;Je++){var ye=we[Je].split("=");if(1<ye.length){var nt=ye[0];ye=ye[1];var rt=nt.split("_");$=2<=rt.length&&rt[1]=="type"?$+(nt+"="+ye+"&"):$+(nt+"=redacted&")}}else $=null;else $=C;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+u+`
`+f+`
`+$})}function ay(o,u,f,g,R,C,$){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+u+`
`+f+`
`+C+" "+$})}function $r(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+ly(o,f)+(g?" "+g:"")})}function cy(o,u){o.info(function(){return"TIMEOUT: "+u})}ks.prototype.info=function(){};function ly(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var R=g[1];if(Array.isArray(R)&&!(1>R.length)){var C=R[0];if(C!="noop"&&C!="stop"&&C!="close")for(var $=1;$<R.length;$++)R[$]=""}}}}return Qe(f)}catch{return u}}var ji={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Uu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},za;function qi(){}k(qi,Br),qi.prototype.g=function(){return new XMLHttpRequest},qi.prototype.i=function(){return{}},za=new qi;function Cn(o,u,f,g){this.j=o,this.i=u,this.l=f,this.R=g||1,this.U=new tt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bu}function Bu(){this.i=null,this.g="",this.h=!1}var $u={},Wa={};function Ka(o,u,f){o.L=1,o.v=Ki(an(u)),o.m=f,o.P=!0,ju(o,null)}function ju(o,u){o.F=Date.now(),Hi(o),o.A=an(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),nh(f.i,"t",g),o.C=0,f=o.j.J,o.h=new Bu,o.g=Th(o.j,f?u:null,!o.m),0<o.O&&(o.M=new bt(_(o.Y,o,o.g),o.O)),u=o.U,f=o.g,g=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Rn[0]=R.toString()),R=Rn);for(var C=0;C<R.length;C++){var $=O(f,R[C],g||u.handleEvent,!1,u.h||u);if(!$)break;u.g[$.key]=$}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Cs(),oy(o.i,o.u,o.A,o.l,o.R,o.m)}Cn.prototype.ca=function(o){o=o.target;const u=this.M;u&&cn(o)==3?u.j():this.Y(o)},Cn.prototype.Y=function(o){try{if(o==this.g)e:{const rt=cn(this.g);var u=this.g.Ba();const Hr=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||lh(this.g)))){this.J||rt!=4||u==7||(u==8||0>=Hr?Cs(3):Cs(2)),Ga(this);var f=this.g.Z();this.X=f;t:if(qu(this)){var g=lh(this.g);o="";var R=g.length,C=cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ur(this),Vs(this);var $="";break t}this.h.i=new c.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(C&&u==R-1)});g.length=0,this.h.g+=o,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=f==200,ay(this.i,this.u,this.A,this.l,this.R,rt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var we,Je=this.g;if((we=Je.g?Je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(we)){var ye=we;break t}}ye=null}if(f=ye)$r(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Qa(this,f);else{this.o=!1,this.s=3,dt(12),ur(this),Vs(this);break e}}if(this.P){f=!0;let Vt;for(;!this.J&&this.C<$.length;)if(Vt=uy(this,$),Vt==Wa){rt==4&&(this.s=4,dt(14),f=!1),$r(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==$u){this.s=4,dt(15),$r(this.i,this.l,$,"[Invalid Chunk]"),f=!1;break}else $r(this.i,this.l,Vt,null),Qa(this,Vt);if(qu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||$.length!=0||this.h.h||(this.s=1,dt(16),f=!1),this.o=this.o&&f,!f)$r(this.i,this.l,$,"[Invalid Chunked Response]"),ur(this),Vs(this);else if(0<$.length&&!this.W){this.W=!0;var nt=this.j;nt.g==this&&nt.ba&&!nt.M&&(nt.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),tc(nt),nt.M=!0,dt(11))}}else $r(this.i,this.l,$,null),Qa(this,$);rt==4&&ur(this),this.o&&!this.J&&(rt==4?mh(this.j,this):(this.o=!1,Hi(this)))}else Ry(this.g),f==400&&0<$.indexOf("Unknown SID")?(this.s=3,dt(12)):(this.s=0,dt(13)),ur(this),Vs(this)}}}catch{}finally{}};function qu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function uy(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?Wa:(f=Number(u.substring(f,g)),isNaN(f)?$u:(g+=1,g+f>u.length?Wa:(u=u.slice(g,g+f),o.C=g+f,u)))}Cn.prototype.cancel=function(){this.J=!0,ur(this)};function Hi(o){o.S=Date.now()+o.I,Hu(o,o.I)}function Hu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Ps(_(o.ba,o),u)}function Ga(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Cn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(cy(this.i,this.A),this.L!=2&&(Cs(),dt(17)),ur(this),this.s=2,Vs(this)):Hu(this,this.S-o)};function Vs(o){o.j.G==0||o.J||mh(o.j,o)}function ur(o){Ga(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Ss(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Qa(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||Ja(f.h,o))){if(!o.K&&Ja(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Zi(f),Xi(f);else break e;ec(f),dt(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ps(_(f.Za,f),6e3));if(1>=Ku(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else fr(f,11)}else if((o.K||f.g==o)&&Zi(f),!K(u))for(R=f.Da.g.parse(u),u=0;u<R.length;u++){let ye=R[u];if(f.T=ye[0],ye=ye[1],f.G==2)if(ye[0]=="c"){f.K=ye[1],f.ia=ye[2];const nt=ye[3];nt!=null&&(f.la=nt,f.j.info("VER="+f.la));const rt=ye[4];rt!=null&&(f.Aa=rt,f.j.info("SVER="+f.Aa));const Hr=ye[5];Hr!=null&&typeof Hr=="number"&&0<Hr&&(g=1.5*Hr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Vt=o.g;if(Vt){const to=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(to){var C=g.h;C.g||to.indexOf("spdy")==-1&&to.indexOf("quic")==-1&&to.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Xa(C,C.h),C.h=null))}if(g.D){const nc=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;nc&&(g.ya=nc,ke(g.I,g.D,nc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var $=o;if(g.qa=vh(g,g.J?g.ia:null,g.W),$.K){Gu(g.h,$);var we=$,Je=g.L;Je&&(we.I=Je),we.B&&(Ga(we),Hi(we)),g.g=$}else ph(g);0<f.i.length&&Yi(f)}else ye[0]!="stop"&&ye[0]!="close"||fr(f,7);else f.G==3&&(ye[0]=="stop"||ye[0]=="close"?ye[0]=="stop"?fr(f,7):Za(f):ye[0]!="noop"&&f.l&&f.l.ta(ye),f.v=0)}}Cs(4)}catch{}}var hy=class{constructor(o,u){this.g=o,this.map=u}};function zu(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Wu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ku(o){return o.h?1:o.g?o.g.size:0}function Ja(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Xa(o,u){o.g?o.g.add(u):o.h=u}function Gu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}zu.prototype.cancel=function(){if(this.i=Qu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Qu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return N(o.i)}function fy(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],f=o.length,g=0;g<f;g++)u.push(o[g]);return u}u=[],f=0;for(g in o)u[f++]=o[g];return u}function dy(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const g in o)u[f++]=g;return u}}}function Ju(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=dy(o),g=fy(o),R=g.length,C=0;C<R;C++)u.call(void 0,g[C],f&&f[C],o)}var Xu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function py(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),R=null;if(0<=g){var C=o[f].substring(0,g);R=o[f].substring(g+1)}else C=o[f];u(C,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function hr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof hr){this.h=o.h,zi(this,o.j),this.o=o.o,this.g=o.g,Wi(this,o.s),this.l=o.l;var u=o.i,f=new Ns;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Yu(this,f),this.m=o.m}else o&&(u=String(o).match(Xu))?(this.h=!1,zi(this,u[1]||"",!0),this.o=Ds(u[2]||""),this.g=Ds(u[3]||"",!0),Wi(this,u[4]),this.l=Ds(u[5]||"",!0),Yu(this,u[6]||"",!0),this.m=Ds(u[7]||"")):(this.h=!1,this.i=new Ns(null,this.h))}hr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Os(u,Zu,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Os(u,Zu,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Os(f,f.charAt(0)=="/"?_y:my,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Os(f,vy)),o.join("")};function an(o){return new hr(o)}function zi(o,u,f){o.j=f?Ds(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Wi(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Yu(o,u,f){u instanceof Ns?(o.i=u,Ty(o.i,o.h)):(f||(u=Os(u,yy)),o.i=new Ns(u,o.h))}function ke(o,u,f){o.i.set(u,f)}function Ki(o){return ke(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Ds(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Os(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,gy),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function gy(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Zu=/[#\/\?@]/g,my=/[#\?:]/g,_y=/[#\?]/g,yy=/[#\?@]/g,vy=/#/g;function Ns(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Pn(o){o.g||(o.g=new Map,o.h=0,o.i&&py(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Ns.prototype,t.add=function(o,u){Pn(this),this.i=null,o=jr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function eh(o,u){Pn(o),u=jr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function th(o,u){return Pn(o),u=jr(o,u),o.g.has(u)}t.forEach=function(o,u){Pn(this),this.g.forEach(function(f,g){f.forEach(function(R){o.call(u,R,g,this)},this)},this)},t.na=function(){Pn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const R=o[g];for(let C=0;C<R.length;C++)f.push(u[g])}return f},t.V=function(o){Pn(this);let u=[];if(typeof o=="string")th(this,o)&&(u=u.concat(this.g.get(jr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},t.set=function(o,u){return Pn(this),this.i=null,o=jr(this,o),th(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function nh(o,u,f){eh(o,u),0<f.length&&(o.i=null,o.g.set(jr(o,u),N(f)),o.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const C=encodeURIComponent(String(g)),$=this.V(g);for(g=0;g<$.length;g++){var R=C;$[g]!==""&&(R+="="+encodeURIComponent(String($[g]))),o.push(R)}}return this.i=o.join("&")};function jr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Ty(o,u){u&&!o.j&&(Pn(o),o.i=null,o.g.forEach(function(f,g){var R=g.toLowerCase();g!=R&&(eh(this,g),nh(this,R,f))},o)),o.j=u}function Ey(o,u){const f=new ks;if(c.Image){const g=new Image;g.onload=b(kn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=b(kn,f,"TestLoadImage: error",!1,u,g),g.onabort=b(kn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=b(kn,f,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function Iy(o,u){const f=new ks,g=new AbortController,R=setTimeout(()=>{g.abort(),kn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(C=>{clearTimeout(R),C.ok?kn(f,"TestPingServer: ok",!0,u):kn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),kn(f,"TestPingServer: error",!1,u)})}function kn(o,u,f,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(f)}catch{}}function wy(){this.g=new Bi}function Ay(o,u,f){const g=f||"";try{Ju(o,function(R,C){let $=R;h(R)&&($=Qe(R)),u.push(g+C+"="+encodeURIComponent($))})}catch(R){throw u.push(g+"type="+encodeURIComponent("_badmap")),R}}function Gi(o){this.l=o.Ub||null,this.j=o.eb||!1}k(Gi,Br),Gi.prototype.g=function(){return new Qi(this.l,this.j)},Gi.prototype.i=(function(o){return function(){return o}})({});function Qi(o,u){Z.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Qi,Z),t=Qi.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Ms(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xs(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ms(this)),this.g&&(this.readyState=3,Ms(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;rh(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function rh(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?xs(this):Ms(this),this.readyState==3&&rh(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,xs(this))},t.Qa=function(o){this.g&&(this.response=o,xs(this))},t.ga=function(){this.g&&xs(this)};function xs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Ms(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Ms(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function sh(o){let u="";return Te(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Ya(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=sh(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):ke(o,u,f))}function Ne(o){Z.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Ne,Z);var by=/^https?$/i,Sy=["POST","PUT"];t=Ne.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():za.g(),this.v=this.o?Ou(this.o):Ou(za),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){ih(this,C);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)f.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())f.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),R=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Sy,u,void 0))||g||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,$]of f)this.g.setRequestHeader(C,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ch(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){ih(this,C)}};function ih(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,oh(o),Ji(o)}function oh(o){o.A||(o.A=!0,ce(o,"complete"),ce(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ce(this,"complete"),ce(this,"abort"),Ji(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ji(this,!0)),Ne.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ah(this):this.bb())},t.bb=function(){ah(this)};function ah(o){if(o.h&&typeof a<"u"&&(!o.v[1]||cn(o)!=4||o.Z()!=2)){if(o.u&&cn(o)==4)Ke(o.Ea,0,o);else if(ce(o,"readystatechange"),cn(o)==4){o.h=!1;try{const $=o.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=$===0){var R=String(o.D).match(Xu)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),g=!by.test(R?R.toLowerCase():"")}f=g}if(f)ce(o,"complete"),ce(o,"success");else{o.m=6;try{var C=2<cn(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",oh(o)}}finally{Ji(o)}}}}function Ji(o,u){if(o.g){ch(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ce(o,"ready");try{f.onreadystatechange=g}catch{}}}function ch(o){o.I&&(c.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function cn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<cn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),St(u)}};function lh(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Ry(o){const u={};o=(o.g&&2<=cn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(K(o[g]))continue;var f=w(o[g]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=u[R]||[];u[R]=C,C.push(f)}I(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ls(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function uh(o){this.Aa=0,this.i=[],this.j=new ks,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ls("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ls("baseRetryDelayMs",5e3,o),this.cb=Ls("retryDelaySeedMs",1e4,o),this.Wa=Ls("forwardChannelMaxRetries",2,o),this.wa=Ls("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new zu(o&&o.concurrentRequestLimit),this.Da=new wy,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=uh.prototype,t.la=8,t.G=1,t.connect=function(o,u,f,g){dt(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=vh(this,null,this.W),Yi(this)};function Za(o){if(hh(o),o.G==3){var u=o.U++,f=an(o.I);if(ke(f,"SID",o.K),ke(f,"RID",u),ke(f,"TYPE","terminate"),Fs(o,f),u=new Cn(o,o.j,u),u.L=2,u.v=Ki(an(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=Th(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Hi(u)}yh(o)}function Xi(o){o.g&&(tc(o),o.g.cancel(),o.g=null)}function hh(o){Xi(o),o.u&&(c.clearTimeout(o.u),o.u=null),Zi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Yi(o){if(!Wu(o.h)&&!o.s){o.s=!0;var u=o.Ga;ae||or(),_e||(ae(),_e=!0),kt.add(u,o),o.B=0}}function Cy(o,u){return Ku(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Ps(_(o.Ga,o,u),_h(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new Cn(this,this.j,o);let C=this.o;if(this.S&&(C?(C=m(C),E(C,this.S)):C=this.S),this.m!==null||this.O||(R.H=C,C=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=dh(this,R,u),f=an(this.I),ke(f,"RID",o),ke(f,"CVER",22),this.D&&ke(f,"X-HTTP-Session-Id",this.D),Fs(this,f),C&&(this.O?u="headers="+encodeURIComponent(String(sh(C)))+"&"+u:this.m&&Ya(f,this.m,C)),Xa(this.h,R),this.Ua&&ke(f,"TYPE","init"),this.P?(ke(f,"$req",u),ke(f,"SID","null"),R.T=!0,Ka(R,f,null)):Ka(R,f,u),this.G=2}}else this.G==3&&(o?fh(this,o):this.i.length==0||Wu(this.h)||fh(this))};function fh(o,u){var f;u?f=u.l:f=o.U++;const g=an(o.I);ke(g,"SID",o.K),ke(g,"RID",f),ke(g,"AID",o.T),Fs(o,g),o.m&&o.o&&Ya(g,o.m,o.o),f=new Cn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=dh(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Xa(o.h,f),Ka(f,g,u)}function Fs(o,u){o.H&&Te(o.H,function(f,g){ke(u,g,f)}),o.l&&Ju({},function(f,g){ke(u,g,f)})}function dh(o,u,f){f=Math.min(o.i.length,f);var g=o.l?_(o.l.Na,o.l,o):null;e:{var R=o.i;let C=-1;for(;;){const $=["count="+f];C==-1?0<f?(C=R[0].g,$.push("ofs="+C)):C=0:$.push("ofs="+C);let we=!0;for(let Je=0;Je<f;Je++){let ye=R[Je].g;const nt=R[Je].map;if(ye-=C,0>ye)C=Math.max(0,R[Je].g-100),we=!1;else try{Ay(nt,$,"req"+ye+"_")}catch{g&&g(nt)}}if(we){g=$.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,g}function ph(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ae||or(),_e||(ae(),_e=!0),kt.add(u,o),o.v=0}}function ec(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Ps(_(o.Fa,o),_h(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,gh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Ps(_(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,dt(10),Xi(this),gh(this))};function tc(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function gh(o){o.g=new Cn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=an(o.qa);ke(u,"RID","rpc"),ke(u,"SID",o.K),ke(u,"AID",o.T),ke(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&ke(u,"TO",o.ja),ke(u,"TYPE","xmlhttp"),Fs(o,u),o.m&&o.o&&Ya(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Ki(an(u)),f.m=null,f.P=!0,ju(f,o)}t.Za=function(){this.C!=null&&(this.C=null,Xi(this),ec(this),dt(19))};function Zi(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function mh(o,u){var f=null;if(o.g==u){Zi(o),tc(o),o.g=null;var g=2}else if(Ja(o.h,u))f=u.D,Gu(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var R=o.B;g=$i(),ce(g,new Fu(g,f)),Yi(o)}else ph(o);else if(R=u.s,R==3||R==0&&0<u.X||!(g==1&&Cy(o,u)||g==2&&ec(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),R){case 1:fr(o,5);break;case 4:fr(o,10);break;case 3:fr(o,6);break;default:fr(o,2)}}}function _h(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function fr(o,u){if(o.j.info("Error code "+u),u==2){var f=_(o.fb,o),g=o.Xa;const R=!g;g=new hr(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||zi(g,"https"),Ki(g),R?Ey(g.toString(),f):Iy(g.toString(),f)}else dt(2);o.G=0,o.l&&o.l.sa(u),yh(o),hh(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function yh(o){if(o.G=0,o.ka=[],o.l){const u=Qu(o.h);(u.length!=0||o.i.length!=0)&&(L(o.ka,u),L(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function vh(o,u,f){var g=f instanceof hr?an(f):new hr(f);if(g.g!="")u&&(g.g=u+"."+g.g),Wi(g,g.s);else{var R=c.location;g=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var C=new hr(null);g&&zi(C,g),u&&(C.g=u),R&&Wi(C,R),f&&(C.l=f),g=C}return f=o.D,u=o.ya,f&&u&&ke(g,f,u),ke(g,"VER",o.la),Fs(o,g),g}function Th(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Ne(new Gi({eb:f})):new Ne(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Eh(){}t=Eh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function eo(){}eo.prototype.g=function(o,u){return new vt(o,u)};function vt(o,u){Z.call(this),this.g=new uh(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!K(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!K(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new qr(this)}k(vt,Z),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){Za(this.g)},vt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Qe(o),o=f);u.i.push(new hy(u.Ya++,o)),u.G==3&&Yi(u)},vt.prototype.N=function(){this.g.l=null,delete this.j,Za(this.g),delete this.g,vt.aa.N.call(this)};function Ih(o){qa.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}k(Ih,qa);function wh(){Ha.call(this),this.status=1}k(wh,Ha);function qr(o){this.g=o}k(qr,Eh),qr.prototype.ua=function(){ce(this.g,"a")},qr.prototype.ta=function(o){ce(this.g,new Ih(o))},qr.prototype.sa=function(o){ce(this.g,new wh)},qr.prototype.ra=function(){ce(this.g,"b")},eo.prototype.createWebChannel=eo.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,em=function(){return new eo},Zg=function(){return $i()},Yg=lr,Kc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ji.NO_ERROR=0,ji.TIMEOUT=8,ji.HTTP_ERROR=6,To=ji,Uu.COMPLETE="complete",Xg=Uu,Nu.EventType=Rs,Rs.OPEN="a",Rs.CLOSE="b",Rs.ERROR="c",Rs.MESSAGE="d",Z.prototype.listen=Z.prototype.K,zs=Nu,Ne.prototype.listenOnce=Ne.prototype.L,Ne.prototype.getLastError=Ne.prototype.Ka,Ne.prototype.getLastErrorCode=Ne.prototype.Ba,Ne.prototype.getStatus=Ne.prototype.Z,Ne.prototype.getResponseJson=Ne.prototype.Oa,Ne.prototype.getResponseText=Ne.prototype.oa,Ne.prototype.send=Ne.prototype.ea,Ne.prototype.setWithCredentials=Ne.prototype.Ha,Jg=Ne}).apply(typeof io<"u"?io:typeof self<"u"?self:typeof window<"u"?window:{});const Vf="@firebase/firestore",Df="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vs="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new Ia("@firebase/firestore");function Qr(){return Cr.logLevel}function W(t,...e){if(Cr.logLevel<=he.DEBUG){const n=e.map(jl);Cr.debug(`Firestore (${vs}): ${t}`,...n)}}function wn(t,...e){if(Cr.logLevel<=he.ERROR){const n=e.map(jl);Cr.error(`Firestore (${vs}): ${t}`,...n)}}function Zn(t,...e){if(Cr.logLevel<=he.WARN){const n=e.map(jl);Cr.warn(`Firestore (${vs}): ${t}`,...n)}}function jl(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,tm(t,r,n)}function tm(t,e,n){let r=`FIRESTORE (${vs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw wn(r),new Error(r)}function Ie(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||tm(e,s,r)}function ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends $t{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(ot.UNAUTHENTICATED)))}shutdown(){}}class AA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class bA{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ie(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Gn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Gn,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Gn)}}),0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ie(typeof r.accessToken=="string",31837,{l:r}),new nm(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string",2055,{h:e}),new ot(e)}}class SA{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class RA{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new SA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(ot.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Of{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Dt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ie(this.o===void 0,3512);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,W("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Of(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Ie(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Of(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=PA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function Gc(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ue(r,s);{const i=rm(),a=kA(i.encode(Nf(t,n)),i.encode(Nf(e,n)));return a!==0?a:ue(r,s)}}n+=r>65535?2:1}return ue(t.length,e.length)}function Nf(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function kA(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ue(t[n],e[n]);return ue(t.length,e.length)}function us(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf="__name__";class Wt{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ee(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Wt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wt?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Wt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ue(e.length,n.length)}static compareSegments(e,n){const r=Wt.isNumericId(e),s=Wt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Wt.extractNumericId(e).compare(Wt.extractNumericId(n)):Gc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Kn.fromString(e.substring(4,e.length-2))}}class Ce extends Wt{construct(e,n,r){return new Ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Ce(n)}static emptyPath(){return new Ce([])}}const VA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends Wt{construct(e,n,r){return new Ye(e,n,r)}static isValidIdentifier(e){return VA.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===xf}static keyField(){return new Ye([xf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new G(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new G(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new G(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new G(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Ce.fromString(e))}static fromName(e){return new X(Ce.fromString(e).popFirst(5))}static empty(){return new X(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Ce(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(t,e,n){if(!n)throw new G(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function DA(t,e,n,r){if(e===!0&&r===!0)throw new G(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Mf(t){if(!X.isDocumentKey(t))throw new G(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Lf(t){if(X.isDocumentKey(t))throw new G(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function im(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function ba(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee(12329,{type:typeof t})}function Qn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ba(t);throw new G(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(t,e){const n={typeString:t};return e&&(n.value=e),n}function Pi(t,e){if(!im(t))throw new G(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(s&&typeof a!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new G(V.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=-62135596800,Uf=1e6;class Ve{static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Uf);return new Ve(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Ff)throw new G(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Uf}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ve._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Pi(e,Ve._jsonSchema))return new Ve(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ff;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ve._jsonSchemaVersion="firestore/timestamp/1.0",Ve._jsonSchema={type:Be("string",Ve._jsonSchemaVersion),seconds:Be("number"),nanoseconds:Be("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new Ve(0,0))}static max(){return new se(new Ve(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=-1;function OA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new Ve(n+1,0):new Ve(n,r));return new er(s,X.empty(),e)}function NA(t){return new er(t.readTime,t.key,mi)}class er{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new er(se.min(),X.empty(),mi)}static max(){return new er(se.max(),X.empty(),mi)}}function xA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class LA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ts(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==MA)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new D(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof D?n:D.resolve(n)}catch(n){return D.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):D.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):D.reject(n)}static resolve(e){return new D(((n,r)=>{n(e)}))}static reject(e){return new D(((n,r)=>{r(e)}))}static waitFor(e){return new D(((n,r)=>{let s=0,i=0,a=!1;e.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&n()}),(l=>r(l)))})),a=!0,i===s&&n()}))}static or(e){let n=D.resolve(!1);for(const r of e)n=n.next((s=>s?D.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new D(((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next((d=>{a[h]=d,++c,c===i&&r(a)}),(d=>s(d)))}}))}static doWhile(e,n){return new D(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function FA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Es(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Sa.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=-1;function Ra(t){return t==null}function Ho(t){return t===0&&1/t==-1/0}function UA(t){return typeof t=="number"&&Number.isInteger(t)&&!Ho(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om="";function BA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Bf(e)),e=$A(t.get(n),e);return Bf(e)}function $A(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case om:n+="";break;default:n+=i}}return n}function Bf(t){return t+om+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function am(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new Oe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oo(this.root,e,this.comparator,!1)}getReverseIterator(){return new oo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oo(this.root,e,this.comparator,!0)}}class oo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=s??Xe.EMPTY,this.right=i??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Xe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Xe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new jf(this.data.getIterator())}getIteratorFrom(e){return new jf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class jf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new ze(Ye.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return us(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new cm("Invalid base64 string: "+i):i}})(e);return new et(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const jA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tr(t){if(Ie(!!t,39018),typeof t=="string"){let e=0;const n=jA.exec(t);if(Ie(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function nr(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm="server_timestamp",um="__type__",hm="__previous_value__",fm="__local_write_time__";function zl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[um])===null||n===void 0?void 0:n.stringValue)===lm}function Ca(t){const e=t.mapValue.fields[hm];return zl(e)?Ca(e):e}function _i(t){const e=tr(t.mapValue.fields[fm].timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e,n,r,s,i,a,c,l,h,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=d}}const zo="(default)";class yi{constructor(e,n){this.projectId=e,this.database=n||zo}static empty(){return new yi("","")}get isDefaultDatabase(){return this.database===zo}isEqual(e){return e instanceof yi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm="__type__",HA="__max__",ao={mapValue:{}},pm="__vector__",Wo="value";function rr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zl(t)?4:WA(t)?9007199254740991:zA(t)?10:11:ee(28295,{value:t})}function nn(t,e){if(t===e)return!0;const n=rr(t);if(n!==rr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _i(t).isEqual(_i(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=tr(s.timestampValue),c=tr(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return nr(s.bytesValue).isEqual(nr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return Me(s.geoPointValue.latitude)===Me(i.geoPointValue.latitude)&&Me(s.geoPointValue.longitude)===Me(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Me(s.integerValue)===Me(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Me(s.doubleValue),c=Me(i.doubleValue);return a===c?Ho(a)===Ho(c):isNaN(a)&&isNaN(c)}return!1})(t,e);case 9:return us(t.arrayValue.values||[],e.arrayValue.values||[],nn);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if($f(a)!==$f(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!nn(a[l],c[l])))return!1;return!0})(t,e);default:return ee(52216,{left:t})}}function vi(t,e){return(t.values||[]).find((n=>nn(n,e)))!==void 0}function hs(t,e){if(t===e)return 0;const n=rr(t),r=rr(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=Me(i.integerValue||i.doubleValue),l=Me(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return qf(t.timestampValue,e.timestampValue);case 4:return qf(_i(t),_i(e));case 5:return Gc(t.stringValue,e.stringValue);case 6:return(function(i,a){const c=nr(i),l=nr(a);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=ue(c[h],l[h]);if(d!==0)return d}return ue(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=ue(Me(i.latitude),Me(a.latitude));return c!==0?c:ue(Me(i.longitude),Me(a.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return Hf(t.arrayValue,e.arrayValue);case 10:return(function(i,a){var c,l,h,d;const p=i.fields||{},_=a.fields||{},b=(c=p[Wo])===null||c===void 0?void 0:c.arrayValue,k=(l=_[Wo])===null||l===void 0?void 0:l.arrayValue,N=ue(((h=b==null?void 0:b.values)===null||h===void 0?void 0:h.length)||0,((d=k==null?void 0:k.values)===null||d===void 0?void 0:d.length)||0);return N!==0?N:Hf(b,k)})(t.mapValue,e.mapValue);case 11:return(function(i,a){if(i===ao.mapValue&&a===ao.mapValue)return 0;if(i===ao.mapValue)return 1;if(a===ao.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const _=Gc(l[p],d[p]);if(_!==0)return _;const b=hs(c[l[p]],h[d[p]]);if(b!==0)return b}return ue(l.length,d.length)})(t.mapValue,e.mapValue);default:throw ee(23264,{le:n})}}function qf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=tr(t),r=tr(e),s=ue(n.seconds,r.seconds);return s!==0?s:ue(n.nanos,r.nanos)}function Hf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=hs(n[s],r[s]);if(i)return i}return ue(n.length,r.length)}function fs(t){return Qc(t)}function Qc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=tr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return nr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return X.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Qc(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Qc(n.fields[a])}`;return s+"}"})(t.mapValue):ee(61005,{value:t})}function Eo(t){switch(rr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ca(t);return e?16+Eo(e):16;case 5:return 2*t.stringValue.length;case 6:return nr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Eo(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return xr(r.fields,((i,a)=>{s+=i.length+Eo(a)})),s})(t.mapValue);default:throw ee(13486,{value:t})}}function zf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Jc(t){return!!t&&"integerValue"in t}function Wl(t){return!!t&&"arrayValue"in t}function Wf(t){return!!t&&"nullValue"in t}function Kf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Io(t){return!!t&&"mapValue"in t}function zA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[dm])===null||n===void 0?void 0:n.stringValue)===pm}function ii(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=ii(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ii(t.arrayValue.values[n]);return e}return Object.assign({},t)}function WA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===HA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Io(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ii(n)}setAll(e){let n=Ye.emptyPath(),r={},s=[];e.forEach(((a,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}a?r[c.lastSegment()]=ii(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Io(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Io(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){xr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Rt(ii(this.value))}}function gm(t){const e=[];return xr(t.fields,((n,r)=>{const s=new Ye([n]);if(Io(r)){const i=gm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Ot(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n,r,s,i,a,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new ct(e,0,se.min(),se.min(),se.min(),Rt.empty(),0)}static newFoundDocument(e,n,r,s){return new ct(e,1,n,se.min(),r,s,0)}static newNoDocument(e,n){return new ct(e,2,n,se.min(),se.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,se.min(),se.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n){this.position=e,this.inclusive=n}}function Gf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(a.referenceValue),n.key):r=hs(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Qf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n="asc"){this.field=e,this.dir=n}}function KA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{}class Ue extends mm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new QA(e,n,r):n==="array-contains"?new YA(e,r):n==="in"?new ZA(e,r):n==="not-in"?new eb(e,r):n==="array-contains-any"?new tb(e,r):new Ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new JA(e,r):new XA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(hs(n,this.value)):n!==null&&rr(this.value)===rr(n)&&this.matchesComparison(hs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bt extends mm{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new Bt(e,n)}matches(e){return _m(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function _m(t){return t.op==="and"}function ym(t){return GA(t)&&_m(t)}function GA(t){for(const e of t.filters)if(e instanceof Bt)return!1;return!0}function Xc(t){if(t instanceof Ue)return t.field.canonicalString()+t.op.toString()+fs(t.value);if(ym(t))return t.filters.map((e=>Xc(e))).join(",");{const e=t.filters.map((n=>Xc(n))).join(",");return`${t.op}(${e})`}}function vm(t,e){return t instanceof Ue?(function(r,s){return s instanceof Ue&&r.op===s.op&&r.field.isEqual(s.field)&&nn(r.value,s.value)})(t,e):t instanceof Bt?(function(r,s){return s instanceof Bt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&vm(a,s.filters[c])),!0):!1})(t,e):void ee(19439)}function Tm(t){return t instanceof Ue?(function(n){return`${n.field.canonicalString()} ${n.op} ${fs(n.value)}`})(t):t instanceof Bt?(function(n){return n.op.toString()+" {"+n.getFilters().map(Tm).join(" ,")+"}"})(t):"Filter"}class QA extends Ue{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class JA extends Ue{constructor(e,n){super(e,"in",n),this.keys=Em("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class XA extends Ue{constructor(e,n){super(e,"not-in",n),this.keys=Em("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Em(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((r=>X.fromName(r.referenceValue)))}class YA extends Ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Wl(n)&&vi(n.arrayValue,this.value)}}class ZA extends Ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&vi(this.value.arrayValue,n)}}class eb extends Ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(vi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!vi(this.value.arrayValue,n)}}class tb extends Ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Wl(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>vi(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,n=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Pe=null}}function Jf(t,e=null,n=[],r=[],s=null,i=null,a=null){return new nb(t,e,n,r,s,i,a)}function Kl(t){const e=ie(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Xc(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Ra(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>fs(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>fs(r))).join(",")),e.Pe=n}return e.Pe}function Gl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!KA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!vm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Qf(t.startAt,e.startAt)&&Qf(t.endAt,e.endAt)}function Yc(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function rb(t,e,n,r,s,i,a,c){return new ki(t,e,n,r,s,i,a,c)}function Ql(t){return new ki(t)}function Xf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Im(t){return t.collectionGroup!==null}function oi(t){const e=ie(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ze(Ye.comparator);return a.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Go(i,r))})),n.has(Ye.keyField().canonicalString())||e.Te.push(new Go(Ye.keyField(),r))}return e.Te}function Qt(t){const e=ie(t);return e.Ie||(e.Ie=sb(e,oi(t))),e.Ie}function sb(t,e){if(t.limitType==="F")return Jf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Go(s.field,i)}));const n=t.endAt?new Ko(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ko(t.startAt.position,t.startAt.inclusive):null;return Jf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Zc(t,e){const n=t.filters.concat([e]);return new ki(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function el(t,e,n){return new ki(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Pa(t,e){return Gl(Qt(t),Qt(e))&&t.limitType===e.limitType}function wm(t){return`${Kl(Qt(t))}|lt:${t.limitType}`}function Jr(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>Tm(s))).join(", ")}]`),Ra(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>fs(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>fs(s))).join(",")),`Target(${r})`})(Qt(t))}; limitType=${t.limitType})`}function ka(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of oi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(a,c,l){const h=Gf(a,c,l);return a.inclusive?h<=0:h<0})(r.startAt,oi(r),s)||r.endAt&&!(function(a,c,l){const h=Gf(a,c,l);return a.inclusive?h>=0:h>0})(r.endAt,oi(r),s))})(t,e)}function ib(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Am(t){return(e,n)=>{let r=!1;for(const s of oi(t)){const i=ob(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function ob(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):(function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?hs(l,h):ee(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){xr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return am(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab=new Oe(X.comparator);function An(){return ab}const bm=new Oe(X.comparator);function Ws(...t){let e=bm;for(const n of t)e=e.insert(n.key,n);return e}function Sm(t){let e=bm;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function vr(){return ai()}function Rm(){return ai()}function ai(){return new Mr((t=>t.toString()),((t,e)=>t.isEqual(e)))}const cb=new Oe(X.comparator),lb=new ze(X.comparator);function fe(...t){let e=lb;for(const n of t)e=e.add(n);return e}const ub=new ze(ue);function hb(){return ub}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ho(e)?"-0":e}}function Cm(t){return{integerValue:""+t}}function fb(t,e){return UA(e)?Cm(e):Jl(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(){this._=void 0}}function db(t,e,n){return t instanceof Qo?(function(s,i){const a={fields:{[um]:{stringValue:lm},[fm]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&zl(i)&&(i=Ca(i)),i&&(a.fields[hm]=i),{mapValue:a}})(n,e):t instanceof Ti?km(t,e):t instanceof Ei?Vm(t,e):(function(s,i){const a=Pm(s,i),c=Yf(a)+Yf(s.Ee);return Jc(a)&&Jc(s.Ee)?Cm(c):Jl(s.serializer,c)})(t,e)}function pb(t,e,n){return t instanceof Ti?km(t,e):t instanceof Ei?Vm(t,e):n}function Pm(t,e){return t instanceof Jo?(function(r){return Jc(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Qo extends Va{}class Ti extends Va{constructor(e){super(),this.elements=e}}function km(t,e){const n=Dm(e);for(const r of t.elements)n.some((s=>nn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Ei extends Va{constructor(e){super(),this.elements=e}}function Vm(t,e){let n=Dm(e);for(const r of t.elements)n=n.filter((s=>!nn(s,r)));return{arrayValue:{values:n}}}class Jo extends Va{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Yf(t){return Me(t.integerValue||t.doubleValue)}function Dm(t){return Wl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function gb(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Ti&&s instanceof Ti||r instanceof Ei&&s instanceof Ei?us(r.elements,s.elements,nn):r instanceof Jo&&s instanceof Jo?nn(r.Ee,s.Ee):r instanceof Qo&&s instanceof Qo})(t.transform,e.transform)}class mb{constructor(e,n){this.version=e,this.transformResults=n}}class _n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _n}static exists(e){return new _n(void 0,e)}static updateTime(e){return new _n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Da{}function Om(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new xm(t.key,_n.none()):new Vi(t.key,t.data,_n.none());{const n=t.data,r=Rt.empty();let s=new ze(Ye.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Lr(t.key,r,new Ot(s.toArray()),_n.none())}}function _b(t,e,n){t instanceof Vi?(function(s,i,a){const c=s.value.clone(),l=ed(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(t,e,n):t instanceof Lr?(function(s,i,a){if(!wo(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=ed(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Nm(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,n)}function ci(t,e,n,r){return t instanceof Vi?(function(i,a,c,l){if(!wo(i.precondition,a))return c;const h=i.value.clone(),d=td(i.fieldTransforms,l,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(t,e,n,r):t instanceof Lr?(function(i,a,c,l){if(!wo(i.precondition,a))return c;const h=td(i.fieldTransforms,l,a),d=a.data;return d.setAll(Nm(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,a,c){return wo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(t,e,n)}function yb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Pm(r.transform,s||null);i!=null&&(n===null&&(n=Rt.empty()),n.set(r.field,i))}return n||null}function Zf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&us(r,s,((i,a)=>gb(i,a)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vi extends Da{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Lr extends Da{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Nm(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function ed(t,e,n){const r=new Map;Ie(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,pb(a,c,n[s]))}return r}function td(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,db(i,a,e))}return r}class xm extends Da{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vb extends Da{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&_b(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ci(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ci(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Rm();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=n.has(s.key)?null:c;const l=Om(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(se.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),fe())}isEqual(e){return this.batchId===e.batchId&&us(this.mutations,e.mutations,((n,r)=>Zf(n,r)))&&us(this.baseMutations,e.baseMutations,((n,r)=>Zf(n,r)))}}class Xl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ie(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return cb})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Xl(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe,pe;function wb(t){switch(t){case V.OK:return ee(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return ee(15467,{code:t})}}function Mm(t){if(t===void 0)return wn("GRPC error has no .code"),V.UNKNOWN;switch(t){case Fe.OK:return V.OK;case Fe.CANCELLED:return V.CANCELLED;case Fe.UNKNOWN:return V.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return V.INTERNAL;case Fe.UNAVAILABLE:return V.UNAVAILABLE;case Fe.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Fe.NOT_FOUND:return V.NOT_FOUND;case Fe.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Fe.ABORTED:return V.ABORTED;case Fe.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Fe.DATA_LOSS:return V.DATA_LOSS;default:return ee(39323,{code:t})}}(pe=Fe||(Fe={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab=new Kn([4294967295,4294967295],0);function nd(t){const e=rm().encode(t),n=new Qg;return n.update(e),new Uint8Array(n.digest())}function rd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Kn([n,r],0),new Kn([s,i],0)]}class Yl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ks(`Invalid padding: ${n}`);if(r<0)throw new Ks(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ks(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ks(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Kn.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(Kn.fromNumber(r)));return s.compare(Ab)===1&&(s=new Kn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=nd(e),[r,s]=rd(n);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Yl(i,s,n);return r.forEach((c=>a.insert(c))),a}insert(e){if(this.fe===0)return;const n=nd(e),[r,s]=rd(n);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ks extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Di.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Oa(se.min(),s,new Oe(ue),An(),fe())}}class Di{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Di(r,n,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class Lm{constructor(e,n){this.targetId=e,this.De=n}}class Fm{constructor(e,n,r=et.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class sd{constructor(){this.ve=0,this.Ce=id(),this.Fe=et.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=fe(),n=fe(),r=fe();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ee(38017,{changeType:i})}})),new Di(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=id()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ie(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class bb{constructor(e){this.We=e,this.Ge=new Map,this.ze=An(),this.je=co(),this.Je=co(),this.He=new Oe(ue)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,(n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:ee(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach(((r,s)=>{this.nt(s)&&n(s)}))}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(Yc(i))if(r===0){const a=new X(i.path);this.Xe(n,a,ct.newNoDocument(a,se.min()))}else Ie(r===1,20013,{expectedCount:r});else{const a=this.ot(n);if(a!==r){const c=this._t(e),l=c?this.ut(c,e,a):1;if(l!==0){this.rt(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,h)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,c;try{a=nr(r).toUint8Array()}catch(l){if(l instanceof cm)return Zn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Yl(a,s,i)}catch(l){return Zn(l instanceof Ks?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.fe===0?null:c}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(n,i,null),s++)})),s}Pt(e){const n=new Map;this.Ge.forEach(((i,a)=>{const c=this.st(a);if(c){if(i.current&&Yc(c.target)){const l=new X(c.target.path);this.Tt(l).has(a)||this.It(a,l)||this.Xe(a,l,ct.newNoDocument(l,e))}i.Ne&&(n.set(a,i.Le()),i.ke())}}));let r=fe();this.Je.forEach(((i,a)=>{let c=!0;a.forEachWhile((l=>{const h=this.st(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.ze.forEach(((i,a)=>a.setReadTime(e)));const s=new Oa(e,n,this.He,this.ze,r);return this.ze=An(),this.je=co(),this.Je=co(),this.He=new Oe(ue),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new sd,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new ze(ue),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new ze(ue),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new sd),this.We.getRemoteKeysForTarget(e).forEach((n=>{this.Xe(e,n,null)}))}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function co(){return new Oe(X.comparator)}function id(){return new Oe(X.comparator)}const Sb={asc:"ASCENDING",desc:"DESCENDING"},Rb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Cb={and:"AND",or:"OR"};class Pb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function tl(t,e){return t.useProto3Json||Ra(e)?e:{value:e}}function Xo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Um(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function kb(t,e){return Xo(t,e.toTimestamp())}function Jt(t){return Ie(!!t,49232),se.fromTimestamp((function(n){const r=tr(n);return new Ve(r.seconds,r.nanos)})(t))}function Zl(t,e){return nl(t,e).canonicalString()}function nl(t,e){const n=(function(s){return new Ce(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function Bm(t){const e=Ce.fromString(t);return Ie(zm(e),10190,{key:e.toString()}),e}function rl(t,e){return Zl(t.databaseId,e.path)}function Ic(t,e){const n=Bm(e);if(n.get(1)!==t.databaseId.projectId)throw new G(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(jm(n))}function $m(t,e){return Zl(t.databaseId,e)}function Vb(t){const e=Bm(t);return e.length===4?Ce.emptyPath():jm(e)}function sl(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function jm(t){return Ie(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function od(t,e,n){return{name:rl(t,e),fields:n.value.mapValue.fields}}function Db(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ee(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,d){return h.useProto3Json?(Ie(d===void 0||typeof d=="string",58123),et.fromBase64String(d||"")):(Ie(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),et.fromUint8Array(d||new Uint8Array))})(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(h){const d=h.code===void 0?V.UNKNOWN:Mm(h.code);return new G(d,h.message||"")})(a);n=new Fm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ic(t,r.document.name),i=Jt(r.document.updateTime),a=r.document.createTime?Jt(r.document.createTime):se.min(),c=new Rt({mapValue:{fields:r.document.fields}}),l=ct.newFoundDocument(s,i,a,c),h=r.targetIds||[],d=r.removedTargetIds||[];n=new Ao(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ic(t,r.document),i=r.readTime?Jt(r.readTime):se.min(),a=ct.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Ao([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ic(t,r.document),i=r.removedTargetIds||[];n=new Ao([],i,s,null)}else{if(!("filter"in e))return ee(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Ib(s,i),c=r.targetId;n=new Lm(c,a)}}return n}function Ob(t,e){let n;if(e instanceof Vi)n={update:od(t,e.key,e.value)};else if(e instanceof xm)n={delete:rl(t,e.key)};else if(e instanceof Lr)n={update:od(t,e.key,e.data),updateMask:jb(e.fieldMask)};else{if(!(e instanceof vb))return ee(16599,{Rt:e.type});n={verify:rl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof Qo)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ti)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ei)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Jo)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw ee(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:kb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee(27497)})(t,e.precondition)),n}function Nb(t,e){return t&&t.length>0?(Ie(e!==void 0,14353),t.map((n=>(function(s,i){let a=s.updateTime?Jt(s.updateTime):Jt(i);return a.isEqual(se.min())&&(a=Jt(i)),new mb(a,s.transformResults||[])})(n,e)))):[]}function xb(t,e){return{documents:[$m(t,e.path)]}}function Mb(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=$m(t,s);const i=(function(h){if(h.length!==0)return Hm(Bt.create(h,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((d=>(function(_){return{field:Xr(_.field),direction:Ub(_.dir)}})(d)))})(e.orderBy);a&&(n.structuredQuery.orderBy=a);const c=tl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Vt:n,parent:s}}function Lb(t){let e=Vb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ie(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=(function(p){const _=qm(p);return _ instanceof Bt&&ym(_)?_.getFilters():[_]})(n.where));let a=[];n.orderBy&&(a=(function(p){return p.map((_=>(function(k){return new Go(Yr(k.field),(function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(k.direction))})(_)))})(n.orderBy));let c=null;n.limit&&(c=(function(p){let _;return _=typeof p=="object"?p.value:p,Ra(_)?null:_})(n.limit));let l=null;n.startAt&&(l=(function(p){const _=!!p.before,b=p.values||[];return new Ko(b,_)})(n.startAt));let h=null;return n.endAt&&(h=(function(p){const _=!p.before,b=p.values||[];return new Ko(b,_)})(n.endAt)),rb(e,s,a,i,c,"F",l,h)}function Fb(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function qm(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Yr(n.unaryFilter.field);return Ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Yr(n.unaryFilter.field);return Ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Yr(n.unaryFilter.field);return Ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Yr(n.unaryFilter.field);return Ue.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Ue.create(Yr(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Bt.create(n.compositeFilter.filters.map((r=>qm(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee(1026)}})(n.compositeFilter.op))})(t):ee(30097,{filter:t})}function Ub(t){return Sb[t]}function Bb(t){return Rb[t]}function $b(t){return Cb[t]}function Xr(t){return{fieldPath:t.canonicalString()}}function Yr(t){return Ye.fromServerFormat(t.fieldPath)}function Hm(t){return t instanceof Ue?(function(n){if(n.op==="=="){if(Kf(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NAN"}};if(Wf(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Kf(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NOT_NAN"}};if(Wf(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xr(n.field),op:Bb(n.op),value:n.value}}})(t):t instanceof Bt?(function(n){const r=n.getFilters().map((s=>Hm(s)));return r.length===1?r[0]:{compositeFilter:{op:$b(n.op),filters:r}}})(t):ee(54877,{filter:t})}function jb(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function zm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n,r,s,i=se.min(),a=se.min(),c=et.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e){this.gt=e}}function Hb(t){const e=Lb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?el(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(){this.Dn=new Wb}addToCollectionParentIndex(e,n){return this.Dn.add(n),D.resolve()}getCollectionParents(e,n){return D.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return D.resolve()}deleteFieldIndex(e,n){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,n){return D.resolve()}getDocumentsMatchingTarget(e,n){return D.resolve(null)}getIndexType(e,n){return D.resolve(0)}getFieldIndexes(e,n){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,n){return D.resolve(er.min())}getMinOffsetFromCollectionGroup(e,n){return D.resolve(er.min())}updateCollectionGroup(e,n,r){return D.resolve()}updateIndexEntries(e,n){return D.resolve()}}class Wb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ze(Ce.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ze(Ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Wm=41943040;class _t{static withCacheSize(e){return new _t(e,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t.DEFAULT_COLLECTION_PERCENTILE=10,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_t.DEFAULT=new _t(Wm,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_t.DISABLED=new _t(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new ds(0)}static ur(){return new ds(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd="LruGarbageCollector",Kb=1048576;function ld([t,e],[n,r]){const s=ue(t,n);return s===0?ue(e,r):s}class Gb{constructor(e){this.Tr=e,this.buffer=new ze(ld),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();ld(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Qb{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){W(cd,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Es(n)?W(cd,"Ignoring IndexedDB error during garbage collection: ",n):await Ts(n)}await this.Rr(3e5)}))}}class Jb{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return D.resolve(Sa.ue);const r=new Gb(n);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(ad)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ad):this.pr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,a,c,l,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(h=Date.now(),Qr()<=he.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-d}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function Xb(t,e){return new Jb(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(){this.changes=new Mr((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?D.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&ci(r.mutation,s,Ot.empty(),Ve.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,fe()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=fe()){const s=vr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let a=Ws();return i.forEach(((c,l)=>{a=a.insert(c,l.overlayedDocument)})),a}))))}getOverlayedDocuments(e,n){const r=vr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,fe())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,c)=>{n.set(a,c)}))}))}computeViews(e,n,r,s){let i=An();const a=ai(),c=(function(){return ai()})();return n.forEach(((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Lr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),ci(d.mutation,h,d.mutation.getFieldMask(),Ve.now())):a.set(h.key,Ot.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((h,d)=>a.set(h,d))),n.forEach(((h,d)=>{var p;return c.set(h,new Zb(d,(p=a.get(h))!==null&&p!==void 0?p:null))})),c)))}recalculateAndSaveOverlays(e,n){const r=ai();let s=new Oe(((a,c)=>a-c)),i=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((a=>{for(const c of a)c.keys().forEach((l=>{const h=n.get(l);if(h===null)return;let d=r.get(l)||Ot.empty();d=c.applyToLocalView(h,d),r.set(l,d);const p=(s.get(c.batchId)||fe()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=Rm();d.forEach((_=>{if(!i.has(_)){const b=Om(n.get(_),r.get(_));b!==null&&p.set(_,b),i=i.add(_)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return D.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(a){return X.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Im(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):D.resolve(vr());let c=mi,l=i;return a.next((h=>D.forEach(h,((d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?D.resolve():this.remoteDocumentCache.getEntry(e,d).next((_=>{l=l.insert(d,_)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,l,h,fe()))).next((d=>({batchId:c,changes:Sm(d)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next((r=>{let s=Ws();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=Ws();return this.indexManager.getCollectionParents(e,i).next((c=>D.forEach(c,(l=>{const h=(function(p,_){return new ki(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((d=>{d.forEach(((p,_)=>{a=a.insert(p,_)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((a=>{i.forEach(((l,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,ct.newInvalidDocument(d)))}));let c=Ws();return a.forEach(((l,h)=>{const d=i.get(l);d!==void 0&&ci(d.mutation,h,Ot.empty(),Ve.now()),ka(n,h)&&(c=c.insert(l,h))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return D.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Jt(s.createTime)}})(n)),D.resolve()}getNamedQuery(e,n){return D.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,(function(s){return{name:s.name,query:Hb(s.bundledQuery),readTime:Jt(s.readTime)}})(n)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(){this.overlays=new Oe(X.comparator),this.kr=new Map}getOverlay(e,n){return D.resolve(this.overlays.get(n))}getOverlays(e,n){const r=vr();return D.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.wt(e,n,i)})),D.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),D.resolve()}getOverlaysForCollection(e,n,r){const s=vr(),i=n.length+1,a=new X(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return D.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Oe(((h,d)=>h-d));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=vr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=vr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,d)=>c.set(h,d))),!(c.size()>=s)););return D.resolve(c)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Eb(n,r));let i=this.kr.get(n);i===void 0&&(i=fe(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(){this.sessionToken=et.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(){this.qr=new ze(We.Qr),this.$r=new ze(We.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new We(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Wr(new We(e,n))}Gr(e,n){e.forEach((r=>this.removeReference(r,n)))}zr(e){const n=new X(new Ce([])),r=new We(n,e),s=new We(n,e+1),i=[];return this.$r.forEachInRange([r,s],(a=>{this.Wr(a),i.push(a.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new X(new Ce([])),r=new We(n,e),s=new We(n,e+1);let i=fe();return this.$r.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const n=new We(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return X.comparator(e.key,n.key)||ue(e.Hr,n.Hr)}static Ur(e,n){return ue(e.Hr,n.Hr)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new ze(We.Qr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Tb(i,n,r,s);this.mutationQueue.push(a);for(const c of s)this.Yr=this.Yr.add(new We(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return D.resolve(a)}lookupMutationBatch(e,n){return D.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?Hl:this.er-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new We(n,0),s=new We(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(a=>{const c=this.Zr(a.Hr);i.push(c)})),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ze(ue);return n.forEach((s=>{const i=new We(s,0),a=new We(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],(c=>{r=r.add(c.Hr)}))})),D.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const a=new We(new X(i),0);let c=new ze(ue);return this.Yr.forEachWhile((l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Hr)),!0)}),a),D.resolve(this.ei(c))}ei(e){const n=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Ie(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return D.forEach(n.mutations,(s=>{const i=new We(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,n){const r=new We(n,0),s=this.Yr.firstAfterOrEqual(r);return D.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e){this.ni=e,this.docs=(function(){return new Oe(X.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return D.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let r=An();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))})),D.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=An();const a=n.path,c=new X(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||xA(NA(d),r)<=0||(s.has(d.key)||ka(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ee(9500)}ri(e,n){return D.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new o0(this)}getSize(e){return D.resolve(this.size)}}class o0 extends Yb{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),D.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e){this.persistence=e,this.ii=new Mr((n=>Kl(n)),Gl),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.si=0,this.oi=new eu,this.targetCount=0,this._i=ds.ar()}forEachTarget(e,n){return this.ii.forEach(((r,s)=>n(s))),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),D.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new ds(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,D.resolve()}updateTargetData(e,n){return this.hr(n),D.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach(((a,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),D.waitFor(i).next((()=>s))}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return D.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),D.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),D.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),D.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return D.resolve(r)}containsKey(e,n){return D.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,n){this.ai={},this.overlays={},this.ui=new Sa(0),this.ci=!1,this.ci=!0,this.li=new r0,this.referenceDelegate=e(this),this.hi=new a0(this),this.indexManager=new zb,this.remoteDocumentCache=(function(s){return new i0(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new qb(n),this.Ti=new t0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new n0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new s0(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const s=new c0(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,n){return D.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,n))))}}class c0 extends LA{constructor(e){super(),this.currentSequenceNumber=e}}class tu{constructor(e){this.persistence=e,this.Ai=new eu,this.Ri=null}static Vi(e){return new tu(e)}get mi(){if(this.Ri)return this.Ri;throw ee(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),D.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),D.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.mi,(r=>{const s=X.fromPath(r);return this.fi(e,s).next((i=>{i||n.removeEntry(s,se.min())}))})).next((()=>(this.Ri=null,n.apply(e))))}updateLimboDocument(e,n){return this.fi(e,n).next((r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())}))}Pi(e){return 0}fi(e,n){return D.or([()=>D.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Yo{constructor(e,n){this.persistence=e,this.gi=new Mr((r=>BA(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Xb(this,n)}static Vi(e,n){return new Yo(e,n)}Ii(){}di(e){return D.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}yr(e){let n=0;return this.gr(e,(r=>{n++})).next((()=>n))}gr(e,n){return D.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?D.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(a=>this.Sr(e,a,n).next((c=>{c||(r++,i.removeEntry(a,se.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),D.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),D.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),D.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Eo(e.data.value)),n}Sr(e,n,r){return D.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return D.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=fe(),s=fe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new nu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return ME()?8:FA(ht())>0?6:4})()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ys(e,n,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new l0;return this.ws(e,n,a).next((c=>{if(i.result=c,this.Rs)return this.Ss(e,n,a,c.size)}))})).next((()=>i.result))}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(Qr()<=he.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Jr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),D.resolve()):(Qr()<=he.DEBUG&&W("QueryEngine","Query:",Jr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Qr()<=he.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Jr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qt(n))):D.resolve())}ps(e,n){if(Xf(n))return D.resolve(null);let r=Qt(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=el(n,null,"F"),r=Qt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=fe(...i);return this.gs.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const h=this.bs(n,c);return this.Ds(n,h,a,l.readTime)?this.ps(e,el(n,null,"F")):this.vs(e,h,n,l)}))))})))))}ys(e,n,r,s){return Xf(n)||s.isEqual(se.min())?D.resolve(null):this.gs.getDocuments(e,r).next((i=>{const a=this.bs(n,i);return this.Ds(n,a,r,s)?D.resolve(null):(Qr()<=he.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Jr(n)),this.vs(e,a,n,OA(s,mi)).next((c=>c)))}))}bs(e,n){let r=new ze(Am(e));return n.forEach(((s,i)=>{ka(e,i)&&(r=r.add(i))})),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return Qr()<=he.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Jr(n)),this.gs.getDocumentsMatchingQuery(e,n,er.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru="LocalStore",h0=3e8;class f0{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new Oe(ue),this.Ms=new Mr((i=>Kl(i)),Gl),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new e0(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Fs)))}}function d0(t,e,n,r){return new f0(t,e,n,r)}async function Gm(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let l=fe();for(const h of s){a.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next((h=>({Bs:h,removedBatchIds:a,addedBatchIds:c})))}))}))}function p0(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return(function(c,l,h,d){const p=h.batch,_=p.keys();let b=D.resolve();return _.forEach((k=>{b=b.next((()=>d.getEntry(l,k))).next((N=>{const L=h.docVersions.get(k);Ie(L!==null,48541),N.version.compareTo(L)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),d.addEntry(N)))}))})),b.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=fe();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function Qm(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.hi.getLastRemoteSnapshotVersion(n)))}function g0(t,e){const n=ie(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const c=[];e.targetChanges.forEach(((d,p)=>{const _=s.get(p);if(!_)return;c.push(n.hi.removeMatchingKeys(i,d.removedDocuments,p).next((()=>n.hi.addMatchingKeys(i,d.addedDocuments,p))));let b=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(et.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):d.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(d.resumeToken,r)),s=s.insert(p,b),(function(N,L,z){return N.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=h0?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0})(_,b,d)&&c.push(n.hi.updateTargetData(i,b))}));let l=An(),h=fe();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))})),c.push(m0(i,a,e.documentUpdates).next((d=>{l=d.Ls,h=d.ks}))),!r.isEqual(se.min())){const d=n.hi.getLastRemoteSnapshotVersion(i).next((p=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(d)}return D.waitFor(c).next((()=>a.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,h))).next((()=>l))})).then((i=>(n.Fs=s,i)))}function m0(t,e,n){let r=fe(),s=fe();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let a=An();return n.forEach(((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):W(ru,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{Ls:a,ks:s}}))}function _0(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Hl),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function y0(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.hi.getTargetData(r,e).next((i=>i?(s=i,D.resolve(s)):n.hi.allocateTargetId(r).next((a=>(s=new qn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r}))}async function il(t,e,n){const r=ie(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!Es(a))throw a;W(ru,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function ud(t,e,n){const r=ie(t);let s=se.min(),i=fe();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(l,h,d){const p=ie(l),_=p.Ms.get(d);return _!==void 0?D.resolve(p.Fs.get(_)):p.hi.getTargetData(h,d)})(r,a,Qt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,n?s:se.min(),n?i:fe()))).next((c=>(v0(r,ib(e),c),{documents:c,qs:i})))))}function v0(t,e,n){let r=t.xs.get(e)||se.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.xs.set(e,r)}class hd{constructor(){this.activeTargetIds=hb()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class T0{constructor(){this.Fo=new hd,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new hd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd="ConnectivityMonitor";class dd{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){W(fd,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){W(fd,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lo=null;function ol(){return lo===null?lo=(function(){return 268435456+Math.round(2147483648*Math.random())})():lo++,"0x"+lo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc="RestConnection",I0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class w0{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===zo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const a=ol(),c=this.Go(e,n.toUriEncodedString());W(wc,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,i);const{host:h}=new URL(c),d=_s(h);return this.jo(e,c,l,r,d).then((p=>(W(wc,`Received RPC '${e}' ${a}: `,p),p)),(p=>{throw Zn(wc,`RPC '${e}' ${a} failed with error: `,p,"url: ",c,"request:",r),p}))}Jo(e,n,r,s,i,a){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+vs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,n){const r=I0[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="WebChannelConnection";class b0 extends w0{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const a=ol();return new Promise(((c,l)=>{const h=new Jg;h.setWithCredentials(!0),h.listenOnce(Xg.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case To.NO_ERROR:const p=h.getResponseJson();W(st,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),c(p);break;case To.TIMEOUT:W(st,`RPC '${e}' ${a} timed out`),l(new G(V.DEADLINE_EXCEEDED,"Request time out"));break;case To.HTTP_ERROR:const _=h.getStatus();if(W(st,`RPC '${e}' ${a} failed with status:`,_,"response text:",h.getResponseText()),_>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const k=b==null?void 0:b.error;if(k&&k.status&&k.message){const N=(function(z){const K=z.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(K)>=0?K:V.UNKNOWN})(k.status);l(new G(N,k.message))}else l(new G(V.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new G(V.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{W(st,`RPC '${e}' ${a} completed.`)}}));const d=JSON.stringify(s);W(st,`RPC '${e}' ${a} sending request:`,s),h.send(n,"POST",d,r,15)}))}P_(e,n,r){const s=ol(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=em(),c=Zg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");W(st,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=a.createWebChannel(d,l);this.T_(p);let _=!1,b=!1;const k=new A0({Ho:L=>{b?W(st,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(_||(W(st,`Opening RPC '${e}' stream ${s} transport.`),p.open(),_=!0),W(st,`RPC '${e}' stream ${s} sending:`,L),p.send(L))},Yo:()=>p.close()}),N=(L,z,K)=>{L.listen(z,(Q=>{try{K(Q)}catch(H){setTimeout((()=>{throw H}),0)}}))};return N(p,zs.EventType.OPEN,(()=>{b||(W(st,`RPC '${e}' stream ${s} transport opened.`),k.s_())})),N(p,zs.EventType.CLOSE,(()=>{b||(b=!0,W(st,`RPC '${e}' stream ${s} transport closed`),k.__(),this.I_(p))})),N(p,zs.EventType.ERROR,(L=>{b||(b=!0,Zn(st,`RPC '${e}' stream ${s} transport errored. Name:`,L.name,"Message:",L.message),k.__(new G(V.UNAVAILABLE,"The operation could not be completed")))})),N(p,zs.EventType.MESSAGE,(L=>{var z;if(!b){const K=L.data[0];Ie(!!K,16349);const Q=K,H=(Q==null?void 0:Q.error)||((z=Q[0])===null||z===void 0?void 0:z.error);if(H){W(st,`RPC '${e}' stream ${s} received error:`,H);const oe=H.status;let Te=(function(y){const E=Fe[y];if(E!==void 0)return Mm(E)})(oe),I=H.message;Te===void 0&&(Te=V.INTERNAL,I="Unknown error status: "+oe+" with message "+H.message),b=!0,k.__(new G(Te,I)),p.close()}else W(st,`RPC '${e}' stream ${s} received:`,K),k.a_(K)}})),N(c,Yg.STAT_EVENT,(L=>{L.stat===Kc.PROXY?W(st,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===Kc.NOPROXY&&W(st,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{k.o_()}),0),k}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((n=>n===e))}}function Ac(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(t){return new Pb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd="PersistentStream";class Xm{constructor(e,n,r,s,i,a,c,l){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Jm(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(wn(n.toString()),wn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===n&&this.W_(r,s)}),(r=>{e((()=>{const s=new G(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return W(pd,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget((()=>this.b_===e?n():(W(pd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class S0 extends Xm{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=Db(this.serializer,e),r=(function(i){if(!("targetChange"in i))return se.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?se.min():a.readTime?Jt(a.readTime):se.min()})(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=sl(this.serializer),n.addTarget=(function(i,a){let c;const l=a.target;if(c=Yc(l)?{documents:xb(i,l)}:{query:Mb(i,l).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Um(i,a.resumeToken);const h=tl(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(se.min())>0){c.readTime=Xo(i,a.snapshotVersion.toTimestamp());const h=tl(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const r=Fb(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=sl(this.serializer),n.removeTarget=e,this.k_(n)}}class R0 extends Xm{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return Ie(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ie(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ie(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=Nb(e.writeResults,e.commitTime),r=Jt(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=sl(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>Ob(this.serializer,r)))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{}class P0 extends C0{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new G(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,nl(n,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(V.UNKNOWN,i.toString())}))}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Jo(e,nl(n,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new G(V.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class k0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(wn(n),this._a=!1):W("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr="RemoteStore";class V0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{Fr(this)&&(W(Pr,"Restarting streams for network reachability change."),await(async function(l){const h=ie(l);h.Ia.add(4),await Oi(h),h.Aa.set("Unknown"),h.Ia.delete(4),await xa(h)})(this))}))})),this.Aa=new k0(r,s)}}async function xa(t){if(Fr(t))for(const e of t.da)await e(!0)}async function Oi(t){for(const e of t.da)await e(!1)}function Ym(t,e){const n=ie(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),au(n)?ou(n):Is(n).x_()&&iu(n,e))}function su(t,e){const n=ie(t),r=Is(n);n.Ta.delete(e),r.x_()&&Zm(n,e),n.Ta.size===0&&(r.x_()?r.B_():Fr(n)&&n.Aa.set("Unknown"))}function iu(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Is(t).H_(e)}function Zm(t,e){t.Ra.$e(e),Is(t).Y_(e)}function ou(t){t.Ra=new bb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Is(t).start(),t.Aa.aa()}function au(t){return Fr(t)&&!Is(t).M_()&&t.Ta.size>0}function Fr(t){return ie(t).Ia.size===0}function e_(t){t.Ra=void 0}async function D0(t){t.Aa.set("Online")}async function O0(t){t.Ta.forEach(((e,n)=>{iu(t,e)}))}async function N0(t,e){e_(t),au(t)?(t.Aa.la(e),ou(t)):t.Aa.set("Unknown")}async function x0(t,e,n){if(t.Aa.set("Online"),e instanceof Fm&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ta.delete(c),s.Ra.removeTarget(c))})(t,e)}catch(r){W(Pr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Zo(t,r)}else if(e instanceof Ao?t.Ra.Ye(e):e instanceof Lm?t.Ra.it(e):t.Ra.et(e),!n.isEqual(se.min()))try{const r=await Qm(t.localStore);n.compareTo(r)>=0&&await(function(i,a){const c=i.Ra.Pt(a);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.Ta.get(h);d&&i.Ta.set(h,d.withResumeToken(l.resumeToken,a))}})),c.targetMismatches.forEach(((l,h)=>{const d=i.Ta.get(l);if(!d)return;i.Ta.set(l,d.withResumeToken(et.EMPTY_BYTE_STRING,d.snapshotVersion)),Zm(i,l);const p=new qn(d.target,l,h,d.sequenceNumber);iu(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){W(Pr,"Failed to raise snapshot:",r),await Zo(t,r)}}async function Zo(t,e,n){if(!Es(e))throw e;t.Ia.add(1),await Oi(t),t.Aa.set("Offline"),n||(n=()=>Qm(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{W(Pr,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await xa(t)}))}function t_(t,e){return e().catch((n=>Zo(t,n,e)))}async function Ma(t){const e=ie(t),n=sr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Hl;for(;M0(e);)try{const s=await _0(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,L0(e,s)}catch(s){await Zo(e,s)}n_(e)&&r_(e)}function M0(t){return Fr(t)&&t.Pa.length<10}function L0(t,e){t.Pa.push(e);const n=sr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function n_(t){return Fr(t)&&!sr(t).M_()&&t.Pa.length>0}function r_(t){sr(t).start()}async function F0(t){sr(t).na()}async function U0(t){const e=sr(t);for(const n of t.Pa)e.X_(n.mutations)}async function B0(t,e,n){const r=t.Pa.shift(),s=Xl.from(r,e,n);await t_(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Ma(t)}async function $0(t,e){e&&sr(t).Z_&&await(async function(r,s){if((function(a){return wb(a)&&a!==V.ABORTED})(s.code)){const i=r.Pa.shift();sr(r).N_(),await t_(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Ma(r)}})(t,e),n_(t)&&r_(t)}async function gd(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),W(Pr,"RemoteStore received new credentials");const r=Fr(n);n.Ia.add(3),await Oi(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await xa(n)}async function j0(t,e){const n=ie(t);e?(n.Ia.delete(2),await xa(n)):e||(n.Ia.add(2),await Oi(n),n.Aa.set("Unknown"))}function Is(t){return t.Va||(t.Va=(function(n,r,s){const i=ie(n);return i.ia(),new S0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:D0.bind(null,t),e_:O0.bind(null,t),n_:N0.bind(null,t),J_:x0.bind(null,t)}),t.da.push((async e=>{e?(t.Va.N_(),au(t)?ou(t):t.Aa.set("Unknown")):(await t.Va.stop(),e_(t))}))),t.Va}function sr(t){return t.ma||(t.ma=(function(n,r,s){const i=ie(n);return i.ia(),new R0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:F0.bind(null,t),n_:$0.bind(null,t),ea:U0.bind(null,t),ta:B0.bind(null,t)}),t.da.push((async e=>{e?(t.ma.N_(),await Ma(t)):(await t.ma.stop(),t.Pa.length>0&&(W(Pr,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))}))),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,c=new cu(e,n,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lu(t,e){if(wn("AsyncQueue",`${e}: ${t}`),Es(t))return new G(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{static emptySet(e){return new ss(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=Ws(),this.sortedSet=new Oe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ss)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ss;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(){this.fa=new Oe(X.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):ee(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal(((n,r)=>{e.push(r)})),e}}class ps{constructor(e,n,r,s,i,a,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach((c=>{a.push({type:0,doc:c})})),new ps(e,n,ss.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class H0{constructor(){this.queries=_d(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=ie(n),i=s.queries;s.queries=_d(),i.forEach(((a,c)=>{for(const l of c.wa)l.onError(r)}))})(this,new G(V.ABORTED,"Firestore shutting down"))}}function _d(){return new Mr((t=>wm(t)),Pa)}async function s_(t,e){const n=ie(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new q0,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const c=lu(a,`Initialization of query '${Jr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&uu(n)}async function i_(t,e){const n=ie(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function z0(t,e){const n=ie(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const c of a.wa)c.Ca(s)&&(r=!0);a.ya=s}}r&&uu(n)}function W0(t,e,n){const r=ie(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function uu(t){t.Da.forEach((e=>{e.next()}))}var al,yd;(yd=al||(al={})).Fa="default",yd.Cache="cache";class o_{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ps(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==al.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e){this.key=e}}class c_{constructor(e){this.key=e}}class K0{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=fe(),this.mutatedKeys=fe(),this.Xa=Am(e),this.eu=new ss(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new md,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,p)=>{const _=s.get(d),b=ka(this.query,p)?p:null,k=!!_&&this.mutatedKeys.has(_.key),N=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let L=!1;_&&b?_.data.isEqual(b.data)?k!==N&&(r.track({type:3,doc:b}),L=!0):this.iu(_,b)||(r.track({type:2,doc:b}),L=!0,(l&&this.Xa(b,l)>0||h&&this.Xa(b,h)<0)&&(c=!0)):!_&&b?(r.track({type:0,doc:b}),L=!0):_&&!b&&(r.track({type:1,doc:_}),L=!0,(l||h)&&(c=!0)),L&&(b?(a=a.add(b),i=N?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{eu:a,ru:r,Ds:c,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((d,p)=>(function(b,k){const N=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{At:L})}};return N(b)-N(k)})(d.type,p.type)||this.Xa(d.doc,p.doc))),this.su(r),s=s!=null&&s;const c=n&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,h=l!==this.Ya;return this.Ya=l,a.length!==0||h?{snapshot:new ps(this.query,e.eu,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new md,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((n=>this.Ha=this.Ha.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ha=this.Ha.delete(n))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=fe(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const n=[];return e.forEach((r=>{this.Za.has(r)||n.push(new c_(r))})),this.Za.forEach((r=>{e.has(r)||n.push(new a_(r))})),n}uu(e){this.Ha=e.qs,this.Za=fe();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return ps.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const hu="SyncEngine";class G0{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Q0{constructor(e){this.key=e,this.lu=!1}}class J0{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Mr((c=>wm(c)),Pa),this.Tu=new Map,this.Iu=new Set,this.du=new Oe(X.comparator),this.Eu=new Map,this.Au=new eu,this.Ru={},this.Vu=new Map,this.mu=ds.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function X0(t,e,n=!0){const r=p_(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await l_(r,e,n,!0),s}async function Y0(t,e){const n=p_(t);await l_(n,e,!0,!1)}async function l_(t,e,n,r){const s=await y0(t.localStore,Qt(e)),i=s.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await Z0(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&Ym(t.remoteStore,s),c}async function Z0(t,e,n,r,s){t.gu=(p,_,b)=>(async function(N,L,z,K){let Q=L.view.nu(z);Q.Ds&&(Q=await ud(N.localStore,L.query,!1).then((({documents:I})=>L.view.nu(I,Q))));const H=K&&K.targetChanges.get(L.targetId),oe=K&&K.targetMismatches.get(L.targetId)!=null,Te=L.view.applyChanges(Q,N.isPrimaryClient,H,oe);return Td(N,L.targetId,Te._u),Te.snapshot})(t,p,_,b);const i=await ud(t.localStore,e,!0),a=new K0(e,i.qs),c=a.nu(i.documents),l=Di.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(c,t.isPrimaryClient,l);Td(t,n,h._u);const d=new G0(e,n,a);return t.Pu.set(e,d),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),h.snapshot}async function eS(t,e,n){const r=ie(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((a=>!Pa(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await il(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&su(r.remoteStore,s.targetId),cl(r,s.targetId)})).catch(Ts)):(cl(r,s.targetId),await il(r.localStore,s.targetId,!0))}async function tS(t,e){const n=ie(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),su(n.remoteStore,r.targetId))}async function nS(t,e,n){const r=lS(t);try{const s=await(function(a,c){const l=ie(a),h=Ve.now(),d=c.reduce(((b,k)=>b.add(k.key)),fe());let p,_;return l.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let k=An(),N=fe();return l.Os.getEntries(b,d).next((L=>{k=L,k.forEach(((z,K)=>{K.isValidDocument()||(N=N.add(z))}))})).next((()=>l.localDocuments.getOverlayedDocuments(b,k))).next((L=>{p=L;const z=[];for(const K of c){const Q=yb(K,p.get(K.key).overlayedDocument);Q!=null&&z.push(new Lr(K.key,Q,gm(Q.value.mapValue),_n.exists(!0)))}return l.mutationQueue.addMutationBatch(b,h,z,c)})).next((L=>{_=L;const z=L.applyToLocalDocumentSet(p,N);return l.documentOverlayCache.saveOverlays(b,L.batchId,z)}))})).then((()=>({batchId:_.batchId,changes:Sm(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,l){let h=a.Ru[a.currentUser.toKey()];h||(h=new Oe(ue)),h=h.insert(c,l),a.Ru[a.currentUser.toKey()]=h})(r,s.batchId,n),await Ni(r,s.changes),await Ma(r.remoteStore)}catch(s){const i=lu(s,"Failed to persist write");n.reject(i)}}async function u_(t,e){const n=ie(t);try{const r=await g0(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=n.Eu.get(i);a&&(Ie(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?Ie(a.lu,14607):s.removedDocuments.size>0&&(Ie(a.lu,42227),a.lu=!1))})),await Ni(n,r,e)}catch(r){await Ts(r)}}function vd(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const l=ie(a);l.onlineState=c;let h=!1;l.queries.forEach(((d,p)=>{for(const _ of p.wa)_.va(c)&&(h=!0)})),h&&uu(l)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function rS(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new Oe(X.comparator);a=a.insert(i,ct.newNoDocument(i,se.min()));const c=fe().add(i),l=new Oa(se.min(),new Map,new Oe(ue),a,c);await u_(r,l),r.du=r.du.remove(i),r.Eu.delete(e),fu(r)}else await il(r.localStore,e,!1).then((()=>cl(r,e,n))).catch(Ts)}async function sS(t,e){const n=ie(t),r=e.batch.batchId;try{const s=await p0(n.localStore,e);f_(n,r,null),h_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ni(n,s)}catch(s){await Ts(s)}}async function iS(t,e,n){const r=ie(t);try{const s=await(function(a,c){const l=ie(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next((p=>(Ie(p!==null,37113),d=p.keys(),l.mutationQueue.removeMutationBatch(h,p)))).next((()=>l.mutationQueue.performConsistencyCheck(h))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d))).next((()=>l.localDocuments.getDocuments(h,d)))}))})(r.localStore,e);f_(r,e,n),h_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ni(r,s)}catch(s){await Ts(s)}}function h_(t,e){(t.Vu.get(e)||[]).forEach((n=>{n.resolve()})),t.Vu.delete(e)}function f_(t,e,n){const r=ie(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function cl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach((r=>{t.Au.containsKey(r)||d_(t,r)}))}function d_(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(su(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),fu(t))}function Td(t,e,n){for(const r of n)r instanceof a_?(t.Au.addReference(r.key,e),oS(t,r)):r instanceof c_?(W(hu,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||d_(t,r.key)):ee(19791,{yu:r})}function oS(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(W(hu,"New document in limbo: "+n),t.Iu.add(r),fu(t))}function fu(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new X(Ce.fromString(e)),r=t.mu.next();t.Eu.set(r,new Q0(n)),t.du=t.du.insert(n,r),Ym(t.remoteStore,new qn(Qt(Ql(n.path)),r,"TargetPurposeLimboResolution",Sa.ue))}}async function Ni(t,e,n){const r=ie(t),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,l)=>{a.push(r.gu(l,e,n).then((h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=nu.Es(l.targetId,h);i.push(p)}})))})),await Promise.all(a),r.hu.J_(s),await(async function(l,h){const d=ie(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>D.forEach(h,(_=>D.forEach(_.Is,(b=>d.persistence.referenceDelegate.addReference(p,_.targetId,b))).next((()=>D.forEach(_.ds,(b=>d.persistence.referenceDelegate.removeReference(p,_.targetId,b)))))))))}catch(p){if(!Es(p))throw p;W(ru,"Failed to update sequence numbers: "+p)}for(const p of h){const _=p.targetId;if(!p.fromCache){const b=d.Fs.get(_),k=b.snapshotVersion,N=b.withLastLimboFreeSnapshotVersion(k);d.Fs=d.Fs.insert(_,N)}}})(r.localStore,i))}async function aS(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){W(hu,"User change. New user:",e.toKey());const r=await Gm(n.localStore,e);n.currentUser=e,(function(i,a){i.Vu.forEach((c=>{c.forEach((l=>{l.reject(new G(V.CANCELLED,a))}))})),i.Vu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ni(n,r.Bs)}}function cS(t,e){const n=ie(t),r=n.Eu.get(e);if(r&&r.lu)return fe().add(r.key);{let s=fe();const i=n.Tu.get(e);if(!i)return s;for(const a of i){const c=n.Pu.get(a);s=s.unionWith(c.view.tu)}return s}}function p_(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=u_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rS.bind(null,e),e.hu.J_=z0.bind(null,e.eventManager),e.hu.pu=W0.bind(null,e.eventManager),e}function lS(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iS.bind(null,e),e}class ea{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Na(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return d0(this.persistence,new u0,e.initialUser,this.serializer)}Du(e){return new Km(tu.Vi,this.serializer)}bu(e){return new T0}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ea.provider={build:()=>new ea};class uS extends ea{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){Ie(this.persistence.referenceDelegate instanceof Yo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Qb(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?_t.withCacheSize(this.cacheSizeBytes):_t.DEFAULT;return new Km((r=>Yo.Vi(r,n)),this.serializer)}}class ll{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=aS.bind(null,this.syncEngine),await j0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new H0})()}createDatastore(e){const n=Na(e.databaseInfo.databaseId),r=(function(i){return new b0(i)})(e.databaseInfo);return(function(i,a,c,l){return new P0(i,a,c,l)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,a,c){return new V0(r,s,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>vd(this.syncEngine,n,0)),(function(){return dd.C()?new dd:new E0})())}createSyncEngine(e,n){return(function(s,i,a,c,l,h,d){const p=new J0(s,i,a,c,l,h);return d&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=ie(s);W(Pr,"RemoteStore shutting down."),i.Ia.add(5),await Oi(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ll.provider={build:()=>new ll};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):wn("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir="FirestoreClient";class hS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=ql.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{W(ir,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(W(ir,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=lu(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function bc(t,e){t.asyncQueue.verifyOperationInProgress(),W(ir,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Gm(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Zn("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then((()=>{W("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Zn("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),t._offlineComponents=e}async function Ed(t,e){t.asyncQueue.verifyOperationInProgress();const n=await fS(t);W(ir,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>gd(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>gd(e.remoteStore,s))),t._onlineComponents=e}async function fS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W(ir,"Using user provided OfflineComponentProvider");try{await bc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Zn("Error using user provided cache. Falling back to memory cache: "+n),await bc(t,new ea)}}else W(ir,"Using default OfflineComponentProvider"),await bc(t,new uS(void 0));return t._offlineComponents}async function m_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W(ir,"Using user provided OnlineComponentProvider"),await Ed(t,t._uninitializedComponentsProvider._online)):(W(ir,"Using default OnlineComponentProvider"),await Ed(t,new ll))),t._onlineComponents}function dS(t){return m_(t).then((e=>e.syncEngine))}async function ul(t){const e=await m_(t),n=e.eventManager;return n.onListen=X0.bind(null,e.syncEngine),n.onUnlisten=eS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Y0.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=tS.bind(null,e.syncEngine),n}function pS(t,e,n={}){const r=new Gn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,l,h){const d=new g_({next:_=>{d.Ou(),a.enqueueAndForget((()=>i_(i,p))),_.fromCache&&l.source==="server"?h.reject(new G(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),p=new o_(c,d,{includeMetadataChanges:!0,ka:!0});return s_(i,p)})(await ul(t),t.asyncQueue,e,n,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_="firestore.googleapis.com",wd=!0;class Ad{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=y_,this.ssl=wd}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:wd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Wm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Kb)throw new G(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=__((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new G(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new G(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new G(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class La{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ad({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ad(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new wA;switch(r.type){case"firstParty":return new RA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Id.get(n);r&&(W("ComponentProvider","Removing Datastore"),Id.delete(n),r.terminate())})(this),Promise.resolve()}}function gS(t,e,n,r={}){var s;t=Qn(t,La);const i=_s(e),a=t._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i&&(mg(`https://${l}`),_g("Firestore",!0)),a.host!==y_&&a.host!==l&&Zn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:l,ssl:i,emulatorOptions:r});if(!Yn(h,c)&&(t._setSettings(h),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=ot.MOCK_USER;else{d=CE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const _=r.mockUserToken.sub||r.mockUserToken.user_id;if(!_)throw new G(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ot(_)}t._authCredentials=new AA(new nm(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ur(this.firestore,e,this._query)}}class $e{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $e(this.firestore,e,this._key)}toJSON(){return{type:$e._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Pi(n,$e._jsonSchema))return new $e(e,r||null,new X(Ce.fromString(n.referencePath)))}}$e._jsonSchemaVersion="firestore/documentReference/1.0",$e._jsonSchema={type:Be("string",$e._jsonSchemaVersion),referencePath:Be("string")};class Jn extends Ur{constructor(e,n,r){super(e,n,Ql(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $e(this.firestore,null,new X(e))}withConverter(e){return new Jn(this.firestore,e,this._path)}}function uo(t,e,...n){if(t=Ze(t),sm("collection","path",e),t instanceof La){const r=Ce.fromString(e,...n);return Lf(r),new Jn(t,null,r)}{if(!(t instanceof $e||t instanceof Jn))throw new G(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return Lf(r),new Jn(t.firestore,null,r)}}function ho(t,e,...n){if(t=Ze(t),arguments.length===1&&(e=ql.newId()),sm("doc","path",e),t instanceof La){const r=Ce.fromString(e,...n);return Mf(r),new $e(t,null,new X(r))}{if(!(t instanceof $e||t instanceof Jn))throw new G(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return Mf(r),new $e(t.firestore,t instanceof Jn?t.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd="AsyncQueue";class Sd{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Jm(this,"async_queue_retry"),this.oc=()=>{const r=Ac();r&&W(bd,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=Ac();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Ac();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const n=new Gn;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Es(e))throw e;W(bd,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const n=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,wn("INTERNAL UNHANDLED ERROR: ",Rd(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=cu.createAndSchedule(this,e,n,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&ee(47125,{hc:Rd(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Rd(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class Ii extends La{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Sd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Sd(e),this._firestoreClient=void 0,await e}}}function mS(t,e){const n=typeof t=="object"?t:Ml(),r=typeof t=="string"?t:zo,s=Nr(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=SE("firestore");i&&gS(s,...i)}return s}function du(t){if(t._terminated)throw new G(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||_S(t),t._firestoreClient}function _S(t){var e,n,r;const s=t._freezeSettings(),i=(function(c,l,h,d){return new qA(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,__(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new hS(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&(function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ct(et.fromBase64String(e))}catch(n){throw new G(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ct(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ct._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Pi(e,Ct._jsonSchema))return Ct.fromBase64String(e.bytes)}}Ct._jsonSchemaVersion="firestore/bytes/1.0",Ct._jsonSchema={type:Be("string",Ct._jsonSchemaVersion),bytes:Be("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xt._jsonSchemaVersion}}static fromJSON(e){if(Pi(e,Xt._jsonSchema))return new Xt(e.latitude,e.longitude)}}Xt._jsonSchemaVersion="firestore/geoPoint/1.0",Xt._jsonSchema={type:Be("string",Xt._jsonSchemaVersion),latitude:Be("number"),longitude:Be("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Yt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Pi(e,Yt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Yt(e.vectorValues);throw new G(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Yt._jsonSchemaVersion="firestore/vectorValue/1.0",Yt._jsonSchema={type:Be("string",Yt._jsonSchemaVersion),vectorValues:Be("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=/^__.*__$/;class vS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Vi(e,this.data,n,this.fieldTransforms)}}function T_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{Ec:t})}}class gu{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new gu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return ta(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(T_(this.Ec)&&yS.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class TS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Na(e)}Dc(e,n,r,s=!1){return new gu({Ec:e,methodName:n,bc:r,path:Ye.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function E_(t){const e=t._freezeSettings(),n=Na(t._databaseId);return new TS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ES(t,e,n,r,s,i={}){const a=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);A_("Data must be an object, but it was:",a,r);const c=I_(r,a);let l,h;if(i.merge)l=new Ot(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const _=wS(e,p,n);if(!a.contains(_))throw new G(V.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);bS(d,_)||d.push(_)}l=new Ot(d),h=a.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,h=a.fieldTransforms;return new vS(new Rt(c),l,h)}function IS(t,e,n,r=!1){return mu(n,t.Dc(r?4:3,e))}function mu(t,e){if(w_(t=Ze(t)))return A_("Unsupported field value:",e,t),I_(t,e);if(t instanceof v_)return(function(r,s){if(!T_(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const c of r){let l=mu(c,s.yc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return fb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ve.fromDate(r);return{timestampValue:Xo(s.serializer,i)}}if(r instanceof Ve){const i=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Xo(s.serializer,i)}}if(r instanceof Xt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ct)return{bytesValue:Um(s.serializer,r._byteString)};if(r instanceof $e){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Zl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Yt)return(function(a,c){return{mapValue:{fields:{[dm]:{stringValue:pm},[Wo]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw c.wc("VectorValues must only contain numeric values.");return Jl(c.serializer,h)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${ba(r)}`)})(t,e)}function I_(t,e){const n={};return am(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xr(t,((r,s)=>{const i=mu(s,e.Vc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function w_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof Xt||t instanceof Ct||t instanceof $e||t instanceof v_||t instanceof Yt)}function A_(t,e,n){if(!w_(n)||!im(n)){const r=ba(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function wS(t,e,n){if((e=Ze(e))instanceof pu)return e._internalPath;if(typeof e=="string")return b_(t,e);throw ta("Field path arguments must be of type string or ",t,!1,void 0,n)}const AS=new RegExp("[~\\*/\\[\\]]");function b_(t,e,n){if(e.search(AS)>=0)throw ta(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new pu(...e.split("."))._internalPath}catch{throw ta(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ta(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new G(V.INVALID_ARGUMENT,c+t+l)}function bS(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(_u("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class SS extends S_{data(){return super.data()}}function _u(t,e){return typeof e=="string"?b_(t,e):e instanceof pu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yu{}class RS extends yu{}function CS(t,e,...n){let r=[];e instanceof yu&&r.push(e),r=r.concat(n),(function(i){const a=i.filter((l=>l instanceof vu)).length,c=i.filter((l=>l instanceof Fa)).length;if(a>1||a>0&&c>0)throw new G(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class Fa extends RS{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Fa(e,n,r)}_apply(e){const n=this._parse(e);return C_(e._query,n),new Ur(e.firestore,e.converter,Zc(e._query,n))}_parse(e){const n=E_(e.firestore);return(function(i,a,c,l,h,d,p){let _;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new G(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){kd(p,d);const k=[];for(const N of p)k.push(Pd(l,i,N));_={arrayValue:{values:k}}}else _=Pd(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||kd(p,d),_=IS(c,a,p,d==="in"||d==="not-in");return Ue.create(h,d,_)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function PS(t,e,n){const r=e,s=_u("where",t);return Fa._create(s,r,n)}class vu extends yu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new vu(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:Bt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)C_(a,l),a=Zc(a,l)})(e._query,n),new Ur(e.firestore,e.converter,Zc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Pd(t,e,n){if(typeof(n=Ze(n))=="string"){if(n==="")throw new G(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Im(e)&&n.indexOf("/")!==-1)throw new G(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ce.fromString(n));if(!X.isDocumentKey(r))throw new G(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zf(t,new X(r))}if(n instanceof $e)return zf(t,n._key);throw new G(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ba(n)}.`)}function kd(t,e){if(!Array.isArray(t)||t.length===0)throw new G(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function C_(t,e){const n=(function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new G(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class kS{convertValue(e,n="none"){switch(rr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(nr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return xr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Wo].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>Me(a.doubleValue)));return new Yt(i)}convertGeoPoint(e){return new Xt(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ca(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_i(e));default:return null}}convertTimestamp(e){const n=tr(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ce.fromString(e);Ie(zm(r),9688,{name:e});const s=new yi(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(n)||wn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Gs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wr extends S_{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new bo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(_u("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new G(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=wr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}wr._jsonSchemaVersion="firestore/documentSnapshot/1.0",wr._jsonSchema={type:Be("string",wr._jsonSchemaVersion),bundleSource:Be("string","DocumentSnapshot"),bundleName:Be("string"),bundle:Be("string")};class bo extends wr{data(e={}){return super.data(e)}}class Ar{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Gs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new bo(this._firestore,this._userDataWriter,r.key,r,new Gs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const l=new bo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Gs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new bo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Gs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:DS(c.type),doc:l,oldIndex:h,newIndex:d}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new G(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ar._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ql.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function DS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:t})}}Ar._jsonSchemaVersion="firestore/querySnapshot/1.0",Ar._jsonSchema={type:Be("string",Ar._jsonSchemaVersion),bundleSource:Be("string","QuerySnapshot"),bundleName:Be("string"),bundle:Be("string")};class Tu extends kS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ct(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,n)}}function Sc(t){t=Qn(t,Ur);const e=Qn(t.firestore,Ii),n=du(e),r=new Tu(e);return R_(t._query),pS(n,t._query).then((s=>new Ar(e,r,t,s)))}function fo(t,e,n){t=Qn(t,$e);const r=Qn(t.firestore,Ii),s=VS(t.converter,e);return NS(r,[ES(E_(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,_n.none())])}function OS(t,...e){var n,r,s;t=Ze(t);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Cd(e[a])||(i=e[a++]);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Cd(e[a])){const p=e[a];e[a]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[a+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[a+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,h,d;if(t instanceof $e)h=Qn(t.firestore,Ii),d=Ql(t._key.path),l={next:p=>{e[a]&&e[a](xS(h,t,p))},error:e[a+1],complete:e[a+2]};else{const p=Qn(t,Ur);h=Qn(p.firestore,Ii),d=p._query;const _=new Tu(h);l={next:b=>{e[a]&&e[a](new Ar(h,_,p,b))},error:e[a+1],complete:e[a+2]},R_(t._query)}return(function(_,b,k,N){const L=new g_(N),z=new o_(b,L,k);return _.asyncQueue.enqueueAndForget((async()=>s_(await ul(_),z))),()=>{L.Ou(),_.asyncQueue.enqueueAndForget((async()=>i_(await ul(_),z)))}})(du(h),d,c,l)}function NS(t,e){return(function(r,s){const i=new Gn;return r.asyncQueue.enqueueAndForget((async()=>nS(await dS(r),s,i))),i.promise})(du(t),e)}function xS(t,e,n){const r=n.docs.get(e._key),s=new Tu(t);return new wr(t,s,e._key,r,new Gs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){vs=s})(ys),tn(new Ut("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Ii(new bA(r.getProvider("auth-internal")),new CA(a,r.getProvider("app-check-internal")),(function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new G(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yi(h.options.projectId,d)})(a,s),a);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),Pt(Vf,Df,e),Pt(Vf,Df,"esm2017")})();const MS={apiKey:"AIzaSyCAsjZXqJk9vCHynhhq8DjcpFBk98JYXD8",authDomain:"cis371-dfa68.firebaseapp.com",projectId:"cis371-dfa68",storageBucket:"cis371-dfa68.firebasestorage.app",messagingSenderId:"223771499102",appId:"1:223771499102:web:7163f21d5e7996f94772cf",measurementId:"G-T3F71NBZDH"},Eu=Ag(MS);vA(Eu);const Vn=mS(Eu),xi=sE("BeverageStore",{state:()=>({temps:of,currentTemp:of[0],bases:[],currentBase:null,syrups:[],currentSyrup:null,creamers:[],currentCreamer:null,beverages:[],currentBeverage:null,currentName:"",user:null,snapshotUnsubscribe:null}),actions:{init(){const t=uo(Vn,"bases");Sc(t).then(r=>{r.empty?(af.forEach(s=>{const i=ho(Vn,`bases/${s.id}`);fo(i,{name:s.name,color:s.color}).then(()=>{console.log(`New base with ID ${s.id} inserted`)}).catch(a=>{console.error("Error adding document: ",a)})}),this.bases=af):this.bases=r.docs.map(s=>({id:s.id,name:s.data().name,color:s.data().color})),this.currentBase=this.bases[0],console.log("getting bases: ",this.bases)}).catch(r=>{console.error("Error getting documents:",r)});const e=uo(Vn,"syrups");Sc(e).then(r=>{r.empty?(cf.forEach(s=>{const i=ho(Vn,`syrups/${s.id}`);fo(i,{name:s.name,color:s.color}).then(()=>{console.log(`New syrup with ID ${s.id} inserted`)}).catch(a=>{console.error("Error adding document: ",a)})}),this.syrups=cf):(this.syrups=r.docs.map(s=>({id:s.id,name:s.data().name,color:s.data().color})),console.log("getting syrups: ",this.syrups)),this.currentSyrup=this.syrups[0]}).catch(r=>{console.error("Error getting syrups:",r)});const n=uo(Vn,"creamers");Sc(n).then(r=>{r.empty?(lf.forEach(s=>{const i=ho(Vn,`creamers/${s.id}`);fo(i,{name:s.name,color:s.color}).then(()=>{console.log(`New creamer with ID ${s.id} inserted`)}).catch(a=>{console.error("Error adding document: ",a)})}),this.creamers=lf):(this.creamers=r.docs.map(s=>({id:s.id,name:s.data().name,color:s.data().color})),console.log("getting creamers: ",this.creamers)),this.currentCreamer=this.creamers[0]}).catch(r=>{console.error("Error getting creamers:",r)})},showBeverage(){this.currentBeverage&&(this.currentName=this.currentBeverage.name,this.currentTemp=this.currentBeverage.temp,this.currentBase=this.currentBeverage.base,this.currentSyrup=this.currentBeverage.syrup,this.currentCreamer=this.currentBeverage.creamer,console.log("currentBeverage changed",this.currentBase,this.currentCreamer,this.currentSyrup))},setUser(t){if(this.snapshotUnsubscribe&&(this.snapshotUnsubscribe(),this.snapshotUnsubscribe=null),this.user=t,!t){this.beverages=[],this.currentBeverage=null;return}const e=CS(uo(Vn,"beverages"),PS("uid","==",t.uid));this.snapshotUnsubscribe=OS(e,n=>{if(this.beverages=n.docs.map(r=>({id:r.id,...r.data()})),this.currentBeverage){const r=this.beverages.find(s=>{var i;return s.id===((i=this.currentBeverage)==null?void 0:i.id)});r?this.currentBeverage=r:this.currentBeverage=null}},n=>{console.error("Error listening to beverages:",n)})},async makeBeverage(){if(!this.user)return"No user logged in, please sign in first.";if(!this.currentName.trim()||!this.currentBase||!this.currentCreamer||!this.currentSyrup)return"Please complete all beverage options and the name before making a beverage.";const t=`beverage-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,e={id:t,uid:this.user.uid,name:this.currentName.trim(),temp:this.currentTemp,base:{...this.currentBase},syrup:{...this.currentSyrup},creamer:{...this.currentCreamer}};try{return await fo(ho(Vn,"beverages",t),e),this.beverages=[...this.beverages,e],this.currentBeverage=e,this.currentName="",`Beverage ${e.name} made successfully!`}catch(n){return console.error("Error making beverage:",n),"Error making beverage. Please try again."}}}}),LS=Si({__name:"Syrup",setup(t){const e=xi();return(n,r)=>{var s;return ge(),Se("div",{class:"syrup",style:ms({"--texture-color":(s=me(e).currentSyrup)==null?void 0:s.color})},null,4)}}}),FS=Dr(LS,[["__scopeId","data-v-2fa3a41a"]]),US=Si({__name:"Base",setup(t){const e=xi();return(n,r)=>{var s;return ge(),Se("div",{class:"baseBeverage",style:ms({backgroundColor:(s=me(e).currentBase)==null?void 0:s.color})},null,4)}}}),BS=Dr(US,[["__scopeId","data-v-8cc1f7b4"]]),$S={class:"froth"},jS=Si({__name:"Creamer",setup(t){const e=xi();return(n,r)=>(ge(),Se("div",$S,[(ge(),Se(Le,null,Fn(5,()=>{var s;return be("div",{class:"foam",style:ms({backgroundColor:(s=me(e).currentCreamer)==null?void 0:s.color})},null,4)}),64))]))}}),qS=Dr(jS,[["__scopeId","data-v-84d3ef89"]]),HS={},zS={id:"steam"},WS={class:"stream"};function KS(t,e){return ge(),Se("div",zS,[(ge(),Se(Le,null,Fn(3,()=>be("div",WS)),64))])}const GS=Dr(HS,[["render",KS]]),QS={},JS={id:"condensation"},XS={class:"flake"};function YS(t,e){return ge(),Se("div",JS,[(ge(),Se(Le,null,Fn(3,()=>be("div",XS)),64))])}const ZS=Dr(QS,[["render",YS]]),eR=Si({__name:"Beverage",props:{isIced:{type:Boolean}},setup(t){const e=xi();return(n,r)=>(ge(),Un(_E,null,{default:js(()=>[t.isIced?(ge(),Un(ZS,{key:0})):(ge(),Un(GS,{key:1})),wt(dE,null,{top:js(()=>{var s;return[((s=me(e).currentCreamer)==null?void 0:s.color)!=="transparent"?(ge(),Un(qS,{key:0})):Lo("",!0)]}),mid:js(()=>{var s;return[((s=me(e).currentSyrup)==null?void 0:s.color)!=="transparent"?(ge(),Un(FS,{key:0})):Lo("",!0)]}),bottom:js(()=>[wt(BS)]),_:1})]),_:1}))}});function Iu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function P_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tR=P_,k_=new Or("auth","Firebase",P_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=new Ia("@firebase/auth");function nR(t,...e){na.logLevel<=he.WARN&&na.warn(`Auth (${ys}): ${t}`,...e)}function So(t,...e){na.logLevel<=he.ERROR&&na.error(`Auth (${ys}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(t,...e){throw Au(t,...e)}function Mt(t,...e){return Au(t,...e)}function wu(t,e,n){const r=Object.assign(Object.assign({},tR()),{[e]:n});return new Or("auth","Firebase",r).create(e,{appName:t.name})}function br(t){return wu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function rR(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&rn(t,"argument-error"),wu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Au(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return k_.create(t,...e)}function ne(t,e,...n){if(!t)throw Au(e,...n)}function pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw So(e),new Error(e)}function bn(t,e){t||pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sR(){return Vd()==="http:"||Vd()==="https:"}function Vd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sR()||yg()||"connection"in navigator)?navigator.onLine:!0}function oR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n){this.shortDelay=e,this.longDelay=n,bn(n>e,"Short delay should be less than long delay!"),this.isMobile=VE()||NE()}get(){return iR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(t,e){bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lR=new Mi(3e4,6e4);function Su(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ws(t,e,n,r,s={}){return D_(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Ci(Object.assign({key:t.config.apiKey},a)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},i);return OE()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&_s(t.emulatorConfig.host)&&(h.credentials="include"),V_.fetch()(await O_(t,t.config.apiHost,n,c),h)})}async function D_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},aR),e);try{const s=new hR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw po(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw po(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw po(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw po(t,"user-disabled",a);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw wu(t,d,h);rn(t,d)}}catch(s){if(s instanceof $t)throw s;rn(t,"network-request-failed",{message:String(s)})}}async function uR(t,e,n,r,s={}){const i=await ws(t,e,n,r,s);return"mfaPendingCredential"in i&&rn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function O_(t,e,n,r){const s=`${e}${n}?${r}`,i=t,a=i.config.emulator?bu(t.config,s):`${t.config.apiScheme}://${s}`;return cR.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class hR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Mt(this.auth,"network-request-failed")),lR.get())})}}function po(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Mt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fR(t,e){return ws(t,"POST","/v1/accounts:delete",e)}async function ra(t,e){return ws(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dR(t,e=!1){const n=Ze(t),r=await n.getIdToken(e),s=Ru(r);ne(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:li(Rc(s.auth_time)),issuedAtTime:li(Rc(s.iat)),expirationTime:li(Rc(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Rc(t){return Number(t)*1e3}function Ru(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return So("JWT malformed, contained fewer than 3 sections"),null;try{const s=fg(n);return s?JSON.parse(s):(So("Failed to decode base64 JWT payload"),null)}catch(s){return So("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Dd(t){const e=Ru(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof $t&&pR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function pR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=li(this.lastLoginAt),this.creationTime=li(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await wi(t,ra(n,{idToken:r}));ne(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?N_(i.providerUserInfo):[],c=_R(t.providerData,a),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new fl(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function mR(t){const e=Ze(t);await sa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _R(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function N_(t){return t.map(e=>{var{providerId:n}=e,r=Iu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yR(t,e){const n=await D_(t,{},async()=>{const r=Ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=await O_(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&_s(t.emulatorConfig.host)&&(l.credentials="include"),V_.fetch()(a,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function vR(t,e){return ws(t,"POST","/v2/accounts:revokeToken",Su(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const n=Dd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await yR(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new is;return r&&(ne(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ne(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new is,this.toJSON())}_performRefresh(){return pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Iu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new fl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await wi(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dR(this,e)}reload(){return mR(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Nt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await sa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dt(this.auth.app))return Promise.reject(br(this.auth));const e=await this.getIdToken();return await wi(this,fR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,c,l,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(s=n.email)!==null&&s!==void 0?s:void 0,b=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,k=(a=n.photoURL)!==null&&a!==void 0?a:void 0,N=(c=n.tenantId)!==null&&c!==void 0?c:void 0,L=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,z=(h=n.createdAt)!==null&&h!==void 0?h:void 0,K=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:Q,emailVerified:H,isAnonymous:oe,providerData:Te,stsTokenManager:I}=n;ne(Q&&I,e,"internal-error");const m=is.fromJSON(this.name,I);ne(typeof Q=="string",e,"internal-error"),Dn(p,e.name),Dn(_,e.name),ne(typeof H=="boolean",e,"internal-error"),ne(typeof oe=="boolean",e,"internal-error"),Dn(b,e.name),Dn(k,e.name),Dn(N,e.name),Dn(L,e.name),Dn(z,e.name),Dn(K,e.name);const y=new Nt({uid:Q,auth:e,email:_,emailVerified:H,displayName:p,isAnonymous:oe,photoURL:k,phoneNumber:b,tenantId:N,stsTokenManager:m,createdAt:z,lastLoginAt:K});return Te&&Array.isArray(Te)&&(y.providerData=Te.map(E=>Object.assign({},E))),L&&(y._redirectEventId=L),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new is;s.updateFromServerResponse(n);const i=new Nt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await sa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ne(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?N_(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new is;c.updateFromIdToken(r);const l=new Nt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new fl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od=new Map;function gn(t){bn(t instanceof Function,"Expected a class definition");let e=Od.get(t);return e?(bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Od.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}x_.type="NONE";const Nd=x_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(t,e,n){return`firebase:${t}:${e}:${n}`}class os{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ro(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ro("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ra(this.auth,{idToken:e}).catch(()=>{});return n?Nt._fromGetAccountInfoResponse(this.auth,n,e):null}return Nt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new os(gn(Nd),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||gn(Nd);const a=Ro(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const d=await h._get(a);if(d){let p;if(typeof d=="string"){const _=await ra(e,{idToken:d}).catch(()=>{});if(!_)break;p=await Nt._fromGetAccountInfoResponse(e,_,d)}else p=Nt._fromJSON(e,d);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new os(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new os(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(U_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(M_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($_(e))return"Blackberry";if(j_(e))return"Webos";if(L_(e))return"Safari";if((e.includes("chrome/")||F_(e))&&!e.includes("edge/"))return"Chrome";if(B_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function M_(t=ht()){return/firefox\//i.test(t)}function L_(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function F_(t=ht()){return/crios\//i.test(t)}function U_(t=ht()){return/iemobile/i.test(t)}function B_(t=ht()){return/android/i.test(t)}function $_(t=ht()){return/blackberry/i.test(t)}function j_(t=ht()){return/webos/i.test(t)}function Cu(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function TR(t=ht()){var e;return Cu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ER(){return xE()&&document.documentMode===10}function q_(t=ht()){return Cu(t)||B_(t)||j_(t)||$_(t)||/windows phone/i.test(t)||U_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(t,e=[]){let n;switch(t){case"Browser":n=xd(ht());break;case"Worker":n=`${xd(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ys}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wR(t,e={}){return ws(t,"GET","/v2/passwordPolicy",Su(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR=6;class bR{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:AR,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Md(this),this.idTokenSubscription=new Md(this),this.beforeStateQueue=new IR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=k_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await os.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ra(this,{idToken:e}),r=await Nt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Dt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await sa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dt(this.app))return Promise.reject(br(this));const n=e?Ze(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dt(this.app)?Promise.reject(br(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dt(this.app)?Promise.reject(br(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wR(this),n=new bR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Or("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await vR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gn(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await os.create(this,[gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=H_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&nR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ua(t){return Ze(t)}class Md{constructor(e){this.auth=e,this.observer=null,this.addObserver=jE(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function RR(t){Pu=t}function CR(t){return Pu.loadJS(t)}function PR(){return Pu.gapiScript}function kR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VR(t,e){const n=Nr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Yn(i,e??{}))return s;rn(s,"already-initialized")}return n.initialize({options:e})}function DR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function OR(t,e,n){const r=Ua(t);ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=z_(e),{host:a,port:c}=NR(e),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},d=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ne(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ne(Yn(h,r.config.emulator)&&Yn(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,_s(a)?(mg(`${i}//${a}${l}`),_g("Auth",!0)):xR()}function z_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function NR(t){const e=z_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ld(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Ld(a)}}}function Ld(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function xR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pn("not implemented")}_getIdTokenResponse(e){return pn("not implemented")}_linkToIdToken(e,n){return pn("not implemented")}_getReauthenticationResolver(e){return pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(t,e){return uR(t,"POST","/v1/accounts:signInWithIdp",Su(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR="http://localhost";class kr extends W_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new kr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Iu(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new kr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return as(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,as(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,as(e,n)}buildRequest(){const e={requestUri:MR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ci(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li extends ku{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Li{constructor(){super("facebook.com")}static credential(e){return kr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends Li{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return kr._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dn.credential(n,r)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Li{constructor(){super("github.com")}static credential(e){return kr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Li{constructor(){super("twitter.com")}static credential(e,n){return kr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.TWITTER_SIGN_IN_METHOD="twitter.com";jn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Nt._fromIdTokenResponse(e,r,s),a=Fd(r);return new gs({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Fd(r);return new gs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Fd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia extends $t{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ia.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ia(e,n,r,s)}}function K_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ia._fromErrorAndOperation(t,i,e,r):i})}async function LR(t,e,n=!1){const r=await wi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FR(t,e,n=!1){const{auth:r}=t;if(Dt(r.app))return Promise.reject(br(r));const s="reauthenticate";try{const i=await wi(t,K_(r,s,e,t),n);ne(i.idToken,r,"internal-error");const a=Ru(i.idToken);ne(a,r,"internal-error");const{sub:c}=a;return ne(t.uid===c,r,"user-mismatch"),gs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&rn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UR(t,e,n=!1){if(Dt(t.app))return Promise.reject(br(t));const r="signIn",s=await K_(t,r,e),i=await gs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function BR(t,e,n,r){return Ze(t).onIdTokenChanged(e,n,r)}function $R(t,e,n){return Ze(t).beforeAuthStateChanged(e,n)}function jR(t,e,n,r){return Ze(t).onAuthStateChanged(e,n,r)}function qR(t){return Ze(t).signOut()}const oa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(oa,"1"),this.storage.removeItem(oa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR=1e3,zR=10;class Q_ extends G_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=q_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);ER()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,zR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},HR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Q_.type="LOCAL";const WR=Q_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_ extends G_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}J_.type="SESSION";const X_=J_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ba(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(n.origin,i)),l=await KR(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ba.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=Vu("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const _=p;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(){return window}function QR(t){Zt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(){return typeof Zt().WorkerGlobalScope<"u"&&typeof Zt().importScripts=="function"}async function JR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function YR(){return Y_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_="firebaseLocalStorageDb",ZR=1,aa="firebaseLocalStorage",ey="fbase_key";class Fi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $a(t,e){return t.transaction([aa],e?"readwrite":"readonly").objectStore(aa)}function eC(){const t=indexedDB.deleteDatabase(Z_);return new Fi(t).toPromise()}function dl(){const t=indexedDB.open(Z_,ZR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(aa,{keyPath:ey})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(aa)?e(r):(r.close(),await eC(),e(await dl()))})})}async function Ud(t,e,n){const r=$a(t,!0).put({[ey]:e,value:n});return new Fi(r).toPromise()}async function tC(t,e){const n=$a(t,!1).get(e),r=await new Fi(n).toPromise();return r===void 0?null:r.value}function Bd(t,e){const n=$a(t,!0).delete(e);return new Fi(n).toPromise()}const nC=800,rC=3;class ty{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>rC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Y_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ba._getInstance(YR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await JR(),!this.activeServiceWorker)return;this.sender=new GR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||XR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dl();return await Ud(e,oa,"1"),await Bd(e,oa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ud(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>tC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=$a(s,!1).getAll();return new Fi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ty.type="LOCAL";const sC=ty;new Mi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(t,e){return e?gn(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du extends W_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return as(e,this._buildIdpRequest())}_linkToIdToken(e,n){return as(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return as(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function iC(t){return UR(t.auth,new Du(t),t.bypassAuthState)}function oC(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),FR(n,new Du(t),t.bypassAuthState)}async function aC(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),LR(n,new Du(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iC;case"linkViaPopup":case"linkViaRedirect":return aC;case"reauthViaPopup":case"reauthViaRedirect":return oC;default:rn(this.auth,"internal-error")}}resolve(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC=new Mi(2e3,1e4);async function lC(t,e,n){if(Dt(t.app))return Promise.reject(Mt(t,"operation-not-supported-in-this-environment"));const r=Ua(t);rR(t,e,ku);const s=ny(r,n);return new Tr(r,"signInViaPopup",e,s).executeNotNull()}class Tr extends ry{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Tr.currentPopupAction&&Tr.currentPopupAction.cancel(),Tr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){bn(this.filter.length===1,"Popup operations only handle one event");const e=Vu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cC.get())};e()}}Tr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC="pendingRedirect",Co=new Map;class hC extends ry{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Co.get(this.auth._key());if(!e){try{const r=await fC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Co.set(this.auth._key(),e)}return this.bypassAuthState||Co.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fC(t,e){const n=gC(e),r=pC(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function dC(t,e){Co.set(t._key(),e)}function pC(t){return gn(t._redirectPersistence)}function gC(t){return Ro(uC,t.config.apiKey,t.name)}async function mC(t,e,n=!1){if(Dt(t.app))return Promise.reject(br(t));const r=Ua(t),s=ny(r,e),a=await new hC(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C=600*1e3;class yC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!sy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Mt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_C&&this.cachedEventUids.clear(),this.cachedEventUids.has($d(e))}saveEventToCache(e){this.cachedEventUids.add($d(e)),this.lastProcessedEventTime=Date.now()}}function $d(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function sy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TC(t,e={}){return ws(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IC=/^https?/;async function wC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TC(t);for(const n of e)try{if(AC(n))return}catch{}rn(t,"unauthorized-domain")}function AC(t){const e=hl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!IC.test(n))return!1;if(EC.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=new Mi(3e4,6e4);function jd(){const t=Zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function SC(t){return new Promise((e,n)=>{var r,s,i;function a(){jd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jd(),n(Mt(t,"network-request-failed"))},timeout:bC.get()})}if(!((s=(r=Zt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Zt().gapi)===null||i===void 0)&&i.load)a();else{const c=kR("iframefcb");return Zt()[c]=()=>{gapi.load?a():n(Mt(t,"network-request-failed"))},CR(`${PR()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Po=null,e})}let Po=null;function RC(t){return Po=Po||SC(t),Po}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=new Mi(5e3,15e3),PC="__/auth/iframe",kC="emulator/auth/iframe",VC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OC(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bu(e,kC):`https://${t.config.authDomain}/${PC}`,r={apiKey:e.apiKey,appName:t.name,v:ys},s=DC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ci(r).slice(1)}`}async function NC(t){const e=await RC(t),n=Zt().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:OC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Mt(t,"network-request-failed"),c=Zt().setTimeout(()=>{i(a)},CC.get());function l(){Zt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MC=500,LC=600,FC="_blank",UC="http://localhost";class qd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BC(t,e,n,r=MC,s=LC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},xC),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ht().toLowerCase();n&&(c=F_(h)?FC:n),M_(h)&&(e=e||UC,l.scrollbars="yes");const d=Object.entries(l).reduce((_,[b,k])=>`${_}${b}=${k},`,"");if(TR(h)&&c!=="_self")return $C(e||"",c),new qd(null);const p=window.open(e||"",c,d);ne(p,t,"popup-blocked");try{p.focus()}catch{}return new qd(p)}function $C(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC="__/auth/handler",qC="emulator/auth/handler",HC=encodeURIComponent("fac");async function Hd(t,e,n,r,s,i){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ys,eventId:s};if(e instanceof ku){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",$E(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof Li){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),h=l?`#${HC}=${encodeURIComponent(l)}`:"";return`${zC(t)}?${Ci(c).slice(1)}${h}`}function zC({config:t}){return t.emulator?bu(t,qC):`https://${t.authDomain}/${jC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="webStorageSupport";class WC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=X_,this._completeRedirectFn=mC,this._overrideRedirectResult=dC}async _openPopup(e,n,r,s){var i;bn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Hd(e,n,r,hl(),s);return BC(e,a,Vu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Hd(e,n,r,hl(),s);return QR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(bn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await NC(e),r=new yC(e);return n.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cc,{type:Cc},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Cc];a!==void 0&&n(!!a),rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=wC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return q_()||L_()||Cu()}}const KC=WC;var zd="@firebase/auth",Wd="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function JC(t){tn(new Ut("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;ne(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:H_(t)},h=new SR(r,s,i,l);return DR(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),tn(new Ut("auth-internal",e=>{const n=Ua(e.getProvider("auth").getImmediate());return(r=>new GC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pt(zd,Wd,QC(t)),Pt(zd,Wd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC=300,YC=gg("authIdTokenMaxAge")||XC;let Kd=null;const ZC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>YC)return;const s=n==null?void 0:n.token;Kd!==s&&(Kd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function eP(t=Ml()){const e=Nr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=VR(t,{popupRedirectResolver:KC,persistence:[sC,WR,X_]}),r=gg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=ZC(i.toString());$R(n,a,()=>a(n.currentUser)),BR(n,c=>a(c))}}const s=dg("auth");return s&&OR(n,`http://${s}`),n}function tP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}RR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Mt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",tP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});JC("Browser");const nP=["id","value"],rP=["id","value"],sP=["id","value"],iP=["id","value"],oP={class:"auth-row"},aP={key:0},cP={key:1,class:"user-info"},lP={class:"user-label"},uP=["disabled"],hP=["disabled"],fP={key:0,class:"status-message"},dP={key:0,style:{"margin-top":"20px"}},pP={key:0,class:"no-beverages"},gP=["id","value"],mP=["for"],_P=Si({__name:"App",setup(t){const e=xi();e.init();const n=Sl(""),r=eP(Eu);let s=null;const i=h=>{n.value=h,setTimeout(()=>{n.value=""},5e3)},a=async()=>{try{const h=new dn;await lC(r,h)}catch(h){console.error("Error signing in:",h),i(`Sign in error: ${h.message||"Unknown error"}`)}},c=async()=>{try{await qR(r),i("Signed out successfully")}catch(h){console.error("Error signing out:",h),i(`Sign out error: ${h.message||"Unknown error"}`)}},l=async()=>{const h=await e.makeBeverage();i(h)};return Vp(()=>{s=jR(r,h=>{e.setUser(h)})}),Pl(()=>{s&&s()}),(h,d)=>(ge(),Se(Le,null,[be("div",null,[wt(eR,{isIced:me(e).currentTemp==="Cold"},null,8,["isIced"]),be("ul",null,[be("li",null,[(ge(!0),Se(Le,null,Fn(me(e).temps,p=>(ge(),Se("label",{key:p},[Wr(be("input",{type:"radio",name:"temperature",id:`r${p}`,value:p,"onUpdate:modelValue":d[0]||(d[0]=_=>me(e).currentTemp=_)},null,8,nP),[[$s,me(e).currentTemp]]),Hs(" "+On(p),1)]))),128))])]),be("ul",null,[be("li",null,[(ge(!0),Se(Le,null,Fn(me(e).bases,p=>(ge(),Se("label",{key:p.id},[Wr(be("input",{type:"radio",name:"bases",id:`r${p.id}`,value:p,"onUpdate:modelValue":d[1]||(d[1]=_=>me(e).currentBase=_)},null,8,rP),[[$s,me(e).currentBase]]),Hs(" "+On(p.name),1)]))),128))])]),be("ul",null,[be("li",null,[(ge(!0),Se(Le,null,Fn(me(e).syrups,p=>(ge(),Se("label",{key:p.id},[Wr(be("input",{type:"radio",name:"syrups",id:`r${p.id}`,value:p,"onUpdate:modelValue":d[2]||(d[2]=_=>me(e).currentSyrup=_)},null,8,sP),[[$s,me(e).currentSyrup]]),Hs(" "+On(p.name),1)]))),128))])]),be("ul",null,[be("li",null,[(ge(!0),Se(Le,null,Fn(me(e).creamers,p=>(ge(),Se("label",{key:p.id},[Wr(be("input",{type:"radio",name:"creamers",id:`r${p.id}`,value:p,"onUpdate:modelValue":d[3]||(d[3]=_=>me(e).currentCreamer=_)},null,8,iP),[[$s,me(e).currentCreamer]]),Hs(" "+On(p.name),1)]))),128))])]),be("div",oP,[me(e).user?(ge(),Se("div",cP,[be("span",lP," Signed in as: "+On(me(e).user.displayName||me(e).user.email),1),be("button",{onClick:c},"Sign out")])):(ge(),Se("div",aP,[be("button",{onClick:a},"Sign in with Google")]))]),Wr(be("input",{"onUpdate:modelValue":d[4]||(d[4]=p=>me(e).currentName=p),type:"text",placeholder:"Beverage Name",disabled:!me(e).user},null,8,uP),[[zT,me(e).currentName]]),be("button",{onClick:l,disabled:!me(e).user}," 🍺 Make Beverage ",8,hP),n.value?(ge(),Se("p",fP,On(n.value),1)):Lo("",!0)]),me(e).user?(ge(),Se("div",dP,[me(e).beverages.length===0?(ge(),Se("h3",pP," No saved beverages ")):(ge(!0),Se(Le,{key:1},Fn(me(e).beverages,p=>(ge(),Se("div",{key:p.id,class:"beverage-item"},[Wr(be("input",{type:"radio",id:p.id,value:p,"onUpdate:modelValue":d[5]||(d[5]=_=>me(e).currentBeverage=_),onChange:d[6]||(d[6]=_=>me(e).showBeverage())},null,40,gP),[[$s,me(e).currentBeverage]]),be("label",{for:p.id},On(p.name),9,mP)]))),128))])):Lo("",!0)],64))}}),iy=YT();iy.use(lE);QT(_P).use(iy).mount("#app");

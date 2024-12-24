const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CalendarView-jd4HIVaZ.js","assets/CalendarView-AsKKBJCj.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ah(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Fe={},ki=[],Nn=()=>{},nw=()=>!1,vl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),lh=t=>t.startsWith("onUpdate:"),ft=Object.assign,ch=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},sw=Object.prototype.hasOwnProperty,De=(t,e)=>sw.call(t,e),ae=Array.isArray,Di=t=>Ro(t)==="[object Map]",er=t=>Ro(t)==="[object Set]",Vf=t=>Ro(t)==="[object Date]",pe=t=>typeof t=="function",et=t=>typeof t=="string",gn=t=>typeof t=="symbol",$e=t=>t!==null&&typeof t=="object",M_=t=>($e(t)||pe(t))&&pe(t.then)&&pe(t.catch),V_=Object.prototype.toString,Ro=t=>V_.call(t),iw=t=>Ro(t).slice(8,-1),L_=t=>Ro(t)==="[object Object]",uh=t=>et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fr=ah(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),El=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},rw=/-(\w)/g,an=El(t=>t.replace(rw,(e,n)=>n?n.toUpperCase():"")),ow=/\B([A-Z])/g,Ms=El(t=>t.replace(ow,"-$1").toLowerCase()),Tl=El(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ec=El(t=>t?`on${Tl(t)}`:""),vs=(t,e)=>!Object.is(t,e),Ta=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},F_=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Ma=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Lf;const wl=()=>Lf||(Lf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function hh(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=et(s)?uw(s):hh(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(et(t)||$e(t))return t}const aw=/;(?![^(]*\))/g,lw=/:([^]+)/,cw=/\/\*[^]*?\*\//g;function uw(t){const e={};return t.replace(cw,"").split(aw).forEach(n=>{if(n){const s=n.split(lw);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Il(t){let e="";if(et(t))e=t;else if(ae(t))for(let n=0;n<t.length;n++){const s=Il(t[n]);s&&(e+=s+" ")}else if($e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const hw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",dw=ah(hw);function U_(t){return!!t||t===""}function fw(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Co(t[s],e[s]);return n}function Co(t,e){if(t===e)return!0;let n=Vf(t),s=Vf(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=gn(t),s=gn(e),n||s)return t===e;if(n=ae(t),s=ae(e),n||s)return n&&s?fw(t,e):!1;if(n=$e(t),s=$e(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Co(t[o],e[o]))return!1}}return String(t)===String(e)}function dh(t,e){return t.findIndex(n=>Co(n,e))}const B_=t=>!!(t&&t.__v_isRef===!0),Qn=t=>et(t)?t:t==null?"":ae(t)||$e(t)&&(t.toString===V_||!pe(t.toString))?B_(t)?Qn(t.value):JSON.stringify(t,$_,2):String(t),$_=(t,e)=>B_(e)?$_(t,e.value):Di(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Tc(s,r)+" =>"]=i,n),{})}:er(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Tc(n))}:gn(e)?Tc(e):$e(e)&&!ae(e)&&!L_(e)?String(e):e,Tc=(t,e="")=>{var n;return gn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ft;class j_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ft,!e&&Ft&&(this.index=(Ft.scopes||(Ft.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ft;try{return Ft=this,e()}finally{Ft=n}}}on(){Ft=this}off(){Ft=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function H_(t){return new j_(t)}function fh(){return Ft}function W_(t,e=!1){Ft&&Ft.cleanups.push(t)}let Be;const wc=new WeakSet;class q_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ft&&Ft.active&&Ft.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wc.has(this)&&(wc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||z_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ff(this),G_(this);const e=Be,n=pn;Be=this,pn=!0;try{return this.fn()}finally{Q_(this),Be=e,pn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)_h(e);this.deps=this.depsTail=void 0,Ff(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){su(this)&&this.run()}get dirty(){return su(this)}}let K_=0,Ur,Br;function z_(t,e=!1){if(t.flags|=8,e){t.next=Br,Br=t;return}t.next=Ur,Ur=t}function ph(){K_++}function mh(){if(--K_>0)return;if(Br){let e=Br;for(Br=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ur;){let e=Ur;for(Ur=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function G_(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Q_(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),_h(s),pw(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function su(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Y_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Y_(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ro))return;t.globalVersion=ro;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!su(t)){t.flags&=-3;return}const n=Be,s=pn;Be=t,pn=!0;try{G_(t);const i=t.fn(t._value);(e.version===0||vs(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{Be=n,pn=s,Q_(t),t.flags&=-3}}function _h(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)_h(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function pw(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let pn=!0;const X_=[];function Vs(){X_.push(pn),pn=!1}function Ls(){const t=X_.pop();pn=t===void 0?!0:t}function Ff(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Be;Be=void 0;try{e()}finally{Be=n}}}let ro=0;class mw{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class gh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Be||!pn||Be===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Be)n=this.activeLink=new mw(Be,this),Be.deps?(n.prevDep=Be.depsTail,Be.depsTail.nextDep=n,Be.depsTail=n):Be.deps=Be.depsTail=n,J_(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Be.depsTail,n.nextDep=void 0,Be.depsTail.nextDep=n,Be.depsTail=n,Be.deps===n&&(Be.deps=s)}return n}trigger(e){this.version++,ro++,this.notify(e)}notify(e){ph();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{mh()}}}function J_(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)J_(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Va=new WeakMap,Js=Symbol(""),iu=Symbol(""),oo=Symbol("");function St(t,e,n){if(pn&&Be){let s=Va.get(t);s||Va.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new gh),i.map=s,i.key=n),i.track()}}function Kn(t,e,n,s,i,r){const o=Va.get(t);if(!o){ro++;return}const a=c=>{c&&c.trigger()};if(ph(),e==="clear")o.forEach(a);else{const c=ae(t),u=c&&uh(n);if(c&&n==="length"){const h=Number(s);o.forEach((f,m)=>{(m==="length"||m===oo||!gn(m)&&m>=h)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(oo)),e){case"add":c?u&&a(o.get("length")):(a(o.get(Js)),Di(t)&&a(o.get(iu)));break;case"delete":c||(a(o.get(Js)),Di(t)&&a(o.get(iu)));break;case"set":Di(t)&&a(o.get(Js));break}}mh()}function _w(t,e){const n=Va.get(t);return n&&n.get(e)}function Ti(t){const e=Ce(t);return e===t?e:(St(e,"iterate",oo),on(t)?e:e.map(Pt))}function Al(t){return St(t=Ce(t),"iterate",oo),t}const gw={__proto__:null,[Symbol.iterator](){return Ic(this,Symbol.iterator,Pt)},concat(...t){return Ti(this).concat(...t.map(e=>ae(e)?Ti(e):e))},entries(){return Ic(this,"entries",t=>(t[1]=Pt(t[1]),t))},every(t,e){return $n(this,"every",t,e,void 0,arguments)},filter(t,e){return $n(this,"filter",t,e,n=>n.map(Pt),arguments)},find(t,e){return $n(this,"find",t,e,Pt,arguments)},findIndex(t,e){return $n(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return $n(this,"findLast",t,e,Pt,arguments)},findLastIndex(t,e){return $n(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return $n(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ac(this,"includes",t)},indexOf(...t){return Ac(this,"indexOf",t)},join(t){return Ti(this).join(t)},lastIndexOf(...t){return Ac(this,"lastIndexOf",t)},map(t,e){return $n(this,"map",t,e,void 0,arguments)},pop(){return wr(this,"pop")},push(...t){return wr(this,"push",t)},reduce(t,...e){return Uf(this,"reduce",t,e)},reduceRight(t,...e){return Uf(this,"reduceRight",t,e)},shift(){return wr(this,"shift")},some(t,e){return $n(this,"some",t,e,void 0,arguments)},splice(...t){return wr(this,"splice",t)},toReversed(){return Ti(this).toReversed()},toSorted(t){return Ti(this).toSorted(t)},toSpliced(...t){return Ti(this).toSpliced(...t)},unshift(...t){return wr(this,"unshift",t)},values(){return Ic(this,"values",Pt)}};function Ic(t,e,n){const s=Al(t),i=s[e]();return s!==t&&!on(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const yw=Array.prototype;function $n(t,e,n,s,i,r){const o=Al(t),a=o!==t&&!on(t),c=o[e];if(c!==yw[e]){const f=c.apply(t,r);return a?Pt(f):f}let u=n;o!==t&&(a?u=function(f,m){return n.call(this,Pt(f),m,t)}:n.length>2&&(u=function(f,m){return n.call(this,f,m,t)}));const h=c.call(o,u,s);return a&&i?i(h):h}function Uf(t,e,n,s){const i=Al(t);let r=n;return i!==t&&(on(t)?n.length>3&&(r=function(o,a,c){return n.call(this,o,a,c,t)}):r=function(o,a,c){return n.call(this,o,Pt(a),c,t)}),i[e](r,...s)}function Ac(t,e,n){const s=Ce(t);St(s,"iterate",oo);const i=s[e](...n);return(i===-1||i===!1)&&Eh(n[0])?(n[0]=Ce(n[0]),s[e](...n)):i}function wr(t,e,n=[]){Vs(),ph();const s=Ce(t)[e].apply(t,n);return mh(),Ls(),s}const vw=ah("__proto__,__v_isRef,__isVue"),Z_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(gn));function Ew(t){gn(t)||(t=String(t));const e=Ce(this);return St(e,"has",t),e.hasOwnProperty(t)}class eg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Nw:ig:r?sg:ng).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=ae(e);if(!i){let c;if(o&&(c=gw[n]))return c;if(n==="hasOwnProperty")return Ew}const a=Reflect.get(e,n,Je(e)?e:s);return(gn(n)?Z_.has(n):vw(n))||(i||St(e,"get",n),r)?a:Je(a)?o&&uh(n)?a:a.value:$e(a)?i?og(a):So(a):a}}class tg extends eg{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const c=ni(r);if(!on(s)&&!ni(s)&&(r=Ce(r),s=Ce(s)),!ae(e)&&Je(r)&&!Je(s))return c?!1:(r.value=s,!0)}const o=ae(e)&&uh(n)?Number(n)<e.length:De(e,n),a=Reflect.set(e,n,s,Je(e)?e:i);return e===Ce(i)&&(o?vs(s,r)&&Kn(e,"set",n,s):Kn(e,"add",n,s)),a}deleteProperty(e,n){const s=De(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Kn(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!gn(n)||!Z_.has(n))&&St(e,"has",n),s}ownKeys(e){return St(e,"iterate",ae(e)?"length":Js),Reflect.ownKeys(e)}}class Tw extends eg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ww=new tg,Iw=new Tw,Aw=new tg(!0);const ru=t=>t,la=t=>Reflect.getPrototypeOf(t);function bw(t,e,n){return function(...s){const i=this.__v_raw,r=Ce(i),o=Di(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=i[t](...s),h=n?ru:e?ou:Pt;return!e&&St(r,"iterate",c?iu:Js),{next(){const{value:f,done:m}=u.next();return m?{value:f,done:m}:{value:a?[h(f[0]),h(f[1])]:h(f),done:m}},[Symbol.iterator](){return this}}}}function ca(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Rw(t,e){const n={get(i){const r=this.__v_raw,o=Ce(r),a=Ce(i);t||(vs(i,a)&&St(o,"get",i),St(o,"get",a));const{has:c}=la(o),u=e?ru:t?ou:Pt;if(c.call(o,i))return u(r.get(i));if(c.call(o,a))return u(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&St(Ce(i),"iterate",Js),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=Ce(r),a=Ce(i);return t||(vs(i,a)&&St(o,"has",i),St(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,c=Ce(a),u=e?ru:t?ou:Pt;return!t&&St(c,"iterate",Js),a.forEach((h,f)=>i.call(r,u(h),u(f),o))}};return ft(n,t?{add:ca("add"),set:ca("set"),delete:ca("delete"),clear:ca("clear")}:{add(i){!e&&!on(i)&&!ni(i)&&(i=Ce(i));const r=Ce(this);return la(r).has.call(r,i)||(r.add(i),Kn(r,"add",i,i)),this},set(i,r){!e&&!on(r)&&!ni(r)&&(r=Ce(r));const o=Ce(this),{has:a,get:c}=la(o);let u=a.call(o,i);u||(i=Ce(i),u=a.call(o,i));const h=c.call(o,i);return o.set(i,r),u?vs(r,h)&&Kn(o,"set",i,r):Kn(o,"add",i,r),this},delete(i){const r=Ce(this),{has:o,get:a}=la(r);let c=o.call(r,i);c||(i=Ce(i),c=o.call(r,i)),a&&a.call(r,i);const u=r.delete(i);return c&&Kn(r,"delete",i,void 0),u},clear(){const i=Ce(this),r=i.size!==0,o=i.clear();return r&&Kn(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=bw(i,t,e)}),n}function yh(t,e){const n=Rw(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(De(n,i)&&i in s?n:s,i,r)}const Cw={get:yh(!1,!1)},Sw={get:yh(!1,!0)},Pw={get:yh(!0,!1)};const ng=new WeakMap,sg=new WeakMap,ig=new WeakMap,Nw=new WeakMap;function kw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dw(t){return t.__v_skip||!Object.isExtensible(t)?0:kw(iw(t))}function So(t){return ni(t)?t:vh(t,!1,ww,Cw,ng)}function rg(t){return vh(t,!1,Aw,Sw,sg)}function og(t){return vh(t,!0,Iw,Pw,ig)}function vh(t,e,n,s,i){if(!$e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Dw(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Es(t){return ni(t)?Es(t.__v_raw):!!(t&&t.__v_isReactive)}function ni(t){return!!(t&&t.__v_isReadonly)}function on(t){return!!(t&&t.__v_isShallow)}function Eh(t){return t?!!t.__v_raw:!1}function Ce(t){const e=t&&t.__v_raw;return e?Ce(e):t}function Th(t){return!De(t,"__v_skip")&&Object.isExtensible(t)&&F_(t,"__v_skip",!0),t}const Pt=t=>$e(t)?So(t):t,ou=t=>$e(t)?og(t):t;function Je(t){return t?t.__v_isRef===!0:!1}function nt(t){return lg(t,!1)}function ag(t){return lg(t,!0)}function lg(t,e){return Je(t)?t:new Ow(t,e)}class Ow{constructor(e,n){this.dep=new gh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ce(e),this._value=n?e:Pt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||on(e)||ni(e);e=s?e:Ce(e),vs(e,n)&&(this._rawValue=e,this._value=s?e:Pt(e),this.dep.trigger())}}function ce(t){return Je(t)?t.value:t}function Wn(t){return pe(t)?t():ce(t)}const xw={get:(t,e,n)=>e==="__v_raw"?t:ce(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Je(i)&&!Je(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function cg(t){return Es(t)?t:new Proxy(t,xw)}function Mw(t){const e=ae(t)?new Array(t.length):{};for(const n in t)e[n]=Lw(t,n);return e}class Vw{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return _w(Ce(this._object),this._key)}}function Lw(t,e,n){const s=t[e];return Je(s)?s:new Vw(t,e,n)}class Fw{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new gh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ro-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Be!==this)return z_(this,!0),!0}get value(){const e=this.dep.track();return Y_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Uw(t,e,n=!1){let s,i;return pe(t)?s=t:(s=t.get,i=t.set),new Fw(s,i,n)}const ua={},La=new WeakMap;let qs;function Bw(t,e=!1,n=qs){if(n){let s=La.get(n);s||La.set(n,s=[]),s.push(t)}}function $w(t,e,n=Fe){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:c}=n,u=x=>i?x:on(x)||i===!1||i===0?zn(x,1):zn(x);let h,f,m,_,T=!1,R=!1;if(Je(t)?(f=()=>t.value,T=on(t)):Es(t)?(f=()=>u(t),T=!0):ae(t)?(R=!0,T=t.some(x=>Es(x)||on(x)),f=()=>t.map(x=>{if(Je(x))return x.value;if(Es(x))return u(x);if(pe(x))return c?c(x,2):x()})):pe(t)?e?f=c?()=>c(t,2):t:f=()=>{if(m){Vs();try{m()}finally{Ls()}}const x=qs;qs=h;try{return c?c(t,3,[_]):t(_)}finally{qs=x}}:f=Nn,e&&i){const x=f,F=i===!0?1/0:i;f=()=>zn(x(),F)}const S=fh(),M=()=>{h.stop(),S&&S.active&&ch(S.effects,h)};if(r&&e){const x=e;e=(...F)=>{x(...F),M()}}let U=R?new Array(t.length).fill(ua):ua;const O=x=>{if(!(!(h.flags&1)||!h.dirty&&!x))if(e){const F=h.run();if(i||T||(R?F.some((G,I)=>vs(G,U[I])):vs(F,U))){m&&m();const G=qs;qs=h;try{const I=[F,U===ua?void 0:R&&U[0]===ua?[]:U,_];c?c(e,3,I):e(...I),U=F}finally{qs=G}}}else h.run()};return a&&a(O),h=new q_(f),h.scheduler=o?()=>o(O,!1):O,_=x=>Bw(x,!1,h),m=h.onStop=()=>{const x=La.get(h);if(x){if(c)c(x,4);else for(const F of x)F();La.delete(h)}},e?s?O(!0):U=h.run():o?o(O.bind(null,!0),!0):h.run(),M.pause=h.pause.bind(h),M.resume=h.resume.bind(h),M.stop=M,M}function zn(t,e=1/0,n){if(e<=0||!$e(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Je(t))zn(t.value,e,n);else if(ae(t))for(let s=0;s<t.length;s++)zn(t[s],e,n);else if(er(t)||Di(t))t.forEach(s=>{zn(s,e,n)});else if(L_(t)){for(const s in t)zn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&zn(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Po(t,e,n,s){try{return s?t(...s):t()}catch(i){bl(i,e,n)}}function On(t,e,n,s){if(pe(t)){const i=Po(t,e,n,s);return i&&M_(i)&&i.catch(r=>{bl(r,e,n)}),i}if(ae(t)){const i=[];for(let r=0;r<t.length;r++)i.push(On(t[r],e,n,s));return i}}function bl(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Fe;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](t,c,u)===!1)return}a=a.parent}if(r){Vs(),Po(r,null,10,[t,c,u]),Ls();return}}jw(t,n,i,s,o)}function jw(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Ut=[];let Rn=-1;const Oi=[];let fs=null,Ai=0;const ug=Promise.resolve();let Fa=null;function Rl(t){const e=Fa||ug;return t?e.then(this?t.bind(this):t):e}function Hw(t){let e=Rn+1,n=Ut.length;for(;e<n;){const s=e+n>>>1,i=Ut[s],r=ao(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function wh(t){if(!(t.flags&1)){const e=ao(t),n=Ut[Ut.length-1];!n||!(t.flags&2)&&e>=ao(n)?Ut.push(t):Ut.splice(Hw(e),0,t),t.flags|=1,hg()}}function hg(){Fa||(Fa=ug.then(fg))}function Ww(t){ae(t)?Oi.push(...t):fs&&t.id===-1?fs.splice(Ai+1,0,t):t.flags&1||(Oi.push(t),t.flags|=1),hg()}function Bf(t,e,n=Rn+1){for(;n<Ut.length;n++){const s=Ut[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Ut.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function dg(t){if(Oi.length){const e=[...new Set(Oi)].sort((n,s)=>ao(n)-ao(s));if(Oi.length=0,fs){fs.push(...e);return}for(fs=e,Ai=0;Ai<fs.length;Ai++){const n=fs[Ai];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}fs=null,Ai=0}}const ao=t=>t.id==null?t.flags&2?-1:1/0:t.id;function fg(t){try{for(Rn=0;Rn<Ut.length;Rn++){const e=Ut[Rn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Po(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Rn<Ut.length;Rn++){const e=Ut[Rn];e&&(e.flags&=-2)}Rn=-1,Ut.length=0,dg(),Fa=null,(Ut.length||Oi.length)&&fg()}}let ot=null,pg=null;function Ua(t){const e=ot;return ot=t,pg=t&&t.type.__scopeId||null,e}function Zs(t,e=ot,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Zf(-1);const r=Ua(e);let o;try{o=t(...i)}finally{Ua(r),s._d&&Zf(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ts(t,e){if(ot===null)return t;const n=Nl(ot),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,c=Fe]=e[i];r&&(pe(r)&&(r={mounted:r,updated:r}),r.deep&&zn(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Hs(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let c=a.dir[s];c&&(Vs(),On(c,n,8,[t.el,a,t,e]),Ls())}}const mg=Symbol("_vte"),qw=t=>t.__isTeleport,$r=t=>t&&(t.disabled||t.disabled===""),$f=t=>t&&(t.defer||t.defer===""),jf=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Hf=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,au=(t,e)=>{const n=t&&t.to;return et(n)?e?e(n):null:n},_g={name:"Teleport",__isTeleport:!0,process(t,e,n,s,i,r,o,a,c,u){const{mc:h,pc:f,pbc:m,o:{insert:_,querySelector:T,createText:R,createComment:S}}=u,M=$r(e.props);let{shapeFlag:U,children:O,dynamicChildren:x}=e;if(t==null){const F=e.el=R(""),G=e.anchor=R("");_(F,n,s),_(G,n,s);const I=(v,b)=>{U&16&&(i&&i.isCE&&(i.ce._teleportTarget=v),h(O,v,b,i,r,o,a,c))},y=()=>{const v=e.target=au(e.props,T),b=gg(v,e,R,_);v&&(o!=="svg"&&jf(v)?o="svg":o!=="mathml"&&Hf(v)&&(o="mathml"),M||(I(v,b),wa(e,!1)))};M&&(I(n,G),wa(e,!0)),$f(e.props)?Lt(()=>{y(),e.el.__isMounted=!0},r):y()}else{if($f(e.props)&&!t.el.__isMounted){Lt(()=>{_g.process(t,e,n,s,i,r,o,a,c,u),delete t.el.__isMounted},r);return}e.el=t.el,e.targetStart=t.targetStart;const F=e.anchor=t.anchor,G=e.target=t.target,I=e.targetAnchor=t.targetAnchor,y=$r(t.props),v=y?n:G,b=y?F:I;if(o==="svg"||jf(G)?o="svg":(o==="mathml"||Hf(G))&&(o="mathml"),x?(m(t.dynamicChildren,x,v,i,r,o,a),Ch(t,e,!0)):c||f(t,e,v,b,i,r,o,a,!1),M)y?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):ha(e,n,F,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const C=e.target=au(e.props,T);C&&ha(e,C,null,u,0)}else y&&ha(e,G,I,u,1);wa(e,M)}},remove(t,e,n,{um:s,o:{remove:i}},r){const{shapeFlag:o,children:a,anchor:c,targetStart:u,targetAnchor:h,target:f,props:m}=t;if(f&&(i(u),i(h)),r&&i(c),o&16){const _=r||!$r(m);for(let T=0;T<a.length;T++){const R=a[T];s(R,e,n,_,!!R.dynamicChildren)}}},move:ha,hydrate:Kw};function ha(t,e,n,{o:{insert:s},m:i},r=2){r===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:u,props:h}=t,f=r===2;if(f&&s(o,e,n),(!f||$r(h))&&c&16)for(let m=0;m<u.length;m++)i(u[m],e,n,2);f&&s(a,e,n)}function Kw(t,e,n,s,i,r,{o:{nextSibling:o,parentNode:a,querySelector:c,insert:u,createText:h}},f){const m=e.target=au(e.props,c);if(m){const _=$r(e.props),T=m._lpa||m.firstChild;if(e.shapeFlag&16)if(_)e.anchor=f(o(t),e,a(t),n,s,i,r),e.targetStart=T,e.targetAnchor=T&&o(T);else{e.anchor=o(t);let R=T;for(;R;){if(R&&R.nodeType===8){if(R.data==="teleport start anchor")e.targetStart=R;else if(R.data==="teleport anchor"){e.targetAnchor=R,m._lpa=e.targetAnchor&&o(e.targetAnchor);break}}R=o(R)}e.targetAnchor||gg(m,e,h,u),f(T&&o(T),e,m,n,s,i,r)}wa(e,_)}return e.anchor&&o(e.anchor)}const lx=_g;function wa(t,e){const n=t.ctx;if(n&&n.ut){let s,i;for(e?(s=t.el,i=t.anchor):(s=t.targetStart,i=t.targetAnchor);s&&s!==i;)s.nodeType===1&&s.setAttribute("data-v-owner",n.uid),s=s.nextSibling;n.ut()}}function gg(t,e,n,s){const i=e.targetStart=n(""),r=e.targetAnchor=n("");return i[mg]=r,t&&(s(i,t),s(r,t)),r}function Ih(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ih(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function In(t,e){return pe(t)?ft({name:t.name},e,{setup:t}):t}function yg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ba(t,e,n,s,i=!1){if(ae(t)){t.forEach((T,R)=>Ba(T,e&&(ae(e)?e[R]:e),n,s,i));return}if(xi(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ba(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Nl(s.component):s.el,o=i?null:r,{i:a,r:c}=t,u=e&&e.r,h=a.refs===Fe?a.refs={}:a.refs,f=a.setupState,m=Ce(f),_=f===Fe?()=>!1:T=>De(m,T);if(u!=null&&u!==c&&(et(u)?(h[u]=null,_(u)&&(f[u]=null)):Je(u)&&(u.value=null)),pe(c))Po(c,a,12,[o,h]);else{const T=et(c),R=Je(c);if(T||R){const S=()=>{if(t.f){const M=T?_(c)?f[c]:h[c]:c.value;i?ae(M)&&ch(M,r):ae(M)?M.includes(r)||M.push(r):T?(h[c]=[r],_(c)&&(f[c]=h[c])):(c.value=[r],t.k&&(h[t.k]=c.value))}else T?(h[c]=o,_(c)&&(f[c]=o)):R&&(c.value=o,t.k&&(h[t.k]=o))};o?(S.id=-1,Lt(S,n)):S()}}}wl().requestIdleCallback;wl().cancelIdleCallback;const xi=t=>!!t.type.__asyncLoader,vg=t=>t.type.__isKeepAlive;function zw(t,e){Eg(t,"a",e)}function Gw(t,e){Eg(t,"da",e)}function Eg(t,e,n=ht){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Cl(e,s,n),n){let i=n.parent;for(;i&&i.parent;)vg(i.parent.vnode)&&Qw(s,e,n,i),i=i.parent}}function Qw(t,e,n,s){const i=Cl(e,t,s,!0);wg(()=>{ch(s[e],i)},n)}function Cl(t,e,n=ht,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Vs();const a=No(n),c=On(e,n,t,o);return a(),Ls(),c});return s?i.unshift(r):i.push(r),r}}const ns=t=>(e,n=ht)=>{(!uo||t==="sp")&&Cl(t,(...s)=>e(...s),n)},Yw=ns("bm"),Tg=ns("m"),Xw=ns("bu"),Jw=ns("u"),Zw=ns("bum"),wg=ns("um"),Ig=ns("sp"),e0=ns("rtg"),t0=ns("rtc");function n0(t,e=ht){Cl("ec",t,e)}const s0="components";function Ah(t,e){return r0(s0,t,!0,e)||t}const i0=Symbol.for("v-ndc");function r0(t,e,n=!0,s=!1){const i=ot||ht;if(i){const r=i.type;{const a=K0(r,!1);if(a&&(a===e||a===an(e)||a===Tl(an(e))))return r}const o=Wf(i[t]||r[t],e)||Wf(i.appContext[t],e);return!o&&s?r:o}}function Wf(t,e){return t&&(t[e]||t[an(e)]||t[Tl(an(e))])}function o0(t,e,n,s){let i;const r=n,o=ae(t);if(o||et(t)){const a=o&&Es(t);let c=!1;a&&(c=!on(t),t=Al(t)),i=new Array(t.length);for(let u=0,h=t.length;u<h;u++)i[u]=e(c?Pt(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,r)}else if($e(t))if(t[Symbol.iterator])i=Array.from(t,(a,c)=>e(a,c,void 0,r));else{const a=Object.keys(t);i=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const h=a[c];i[c]=e(t[h],h,c,r)}}else i=[];return i}function qf(t,e,n={},s,i){if(ot.ce||ot.parent&&xi(ot.parent)&&ot.parent.ce)return e!=="default"&&(n.name=e),Ae(),yn(Bt,null,[qe("slot",n,s)],64);let r=t[e];r&&r._c&&(r._d=!1),Ae();const o=r&&Ag(r(n)),a=n.key||o&&o.key,c=yn(Bt,{key:(a&&!gn(a)?a:`_${e}`)+(!o&&s?"_fb":"")},o||[],o&&t._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),r&&r._c&&(r._d=!0),c}function Ag(t){return t.some(e=>co(e)?!(e.type===Ps||e.type===Bt&&!Ag(e.children)):!0)?t:null}const lu=t=>t?qg(t)?Nl(t):lu(t.parent):null,jr=ft(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>lu(t.parent),$root:t=>lu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>bh(t),$forceUpdate:t=>t.f||(t.f=()=>{wh(t.update)}),$nextTick:t=>t.n||(t.n=Rl.bind(t.proxy)),$watch:t=>S0.bind(t)}),bc=(t,e)=>t!==Fe&&!t.__isScriptSetup&&De(t,e),a0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(bc(s,e))return o[e]=1,s[e];if(i!==Fe&&De(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&De(u,e))return o[e]=3,r[e];if(n!==Fe&&De(n,e))return o[e]=4,n[e];cu&&(o[e]=0)}}const h=jr[e];let f,m;if(h)return e==="$attrs"&&St(t.attrs,"get",""),h(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==Fe&&De(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,De(m,e))return m[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return bc(i,e)?(i[e]=n,!0):s!==Fe&&De(s,e)?(s[e]=n,!0):De(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Fe&&De(t,o)||bc(e,o)||(a=r[0])&&De(a,o)||De(s,o)||De(jr,o)||De(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:De(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Kf(t){return ae(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let cu=!0;function l0(t){const e=bh(t),n=t.proxy,s=t.ctx;cu=!1,e.beforeCreate&&zf(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:c,inject:u,created:h,beforeMount:f,mounted:m,beforeUpdate:_,updated:T,activated:R,deactivated:S,beforeDestroy:M,beforeUnmount:U,destroyed:O,unmounted:x,render:F,renderTracked:G,renderTriggered:I,errorCaptured:y,serverPrefetch:v,expose:b,inheritAttrs:C,components:P,directives:A,filters:pt}=e;if(u&&c0(u,s,null),o)for(const he in o){const _e=o[he];pe(_e)&&(s[he]=_e.bind(n))}if(i){const he=i.call(n,n);$e(he)&&(t.data=So(he))}if(cu=!0,r)for(const he in r){const _e=r[he],zt=pe(_e)?_e.bind(n,n):pe(_e.get)?_e.get.bind(n,n):Nn,cn=!pe(_e)&&pe(_e.set)?_e.set.bind(n):Nn,nn=gt({get:zt,set:cn});Object.defineProperty(s,he,{enumerable:!0,configurable:!0,get:()=>nn.value,set:Ge=>nn.value=Ge})}if(a)for(const he in a)bg(a[he],s,n,he);if(c){const he=pe(c)?c.call(n):c;Reflect.ownKeys(he).forEach(_e=>{Ia(_e,he[_e])})}h&&zf(h,t,"c");function Ue(he,_e){ae(_e)?_e.forEach(zt=>he(zt.bind(n))):_e&&he(_e.bind(n))}if(Ue(Yw,f),Ue(Tg,m),Ue(Xw,_),Ue(Jw,T),Ue(zw,R),Ue(Gw,S),Ue(n0,y),Ue(t0,G),Ue(e0,I),Ue(Zw,U),Ue(wg,x),Ue(Ig,v),ae(b))if(b.length){const he=t.exposed||(t.exposed={});b.forEach(_e=>{Object.defineProperty(he,_e,{get:()=>n[_e],set:zt=>n[_e]=zt})})}else t.exposed||(t.exposed={});F&&t.render===Nn&&(t.render=F),C!=null&&(t.inheritAttrs=C),P&&(t.components=P),A&&(t.directives=A),v&&yg(t)}function c0(t,e,n=Nn){ae(t)&&(t=uu(t));for(const s in t){const i=t[s];let r;$e(i)?"default"in i?r=Jt(i.from||s,i.default,!0):r=Jt(i.from||s):r=Jt(i),Je(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function zf(t,e,n){On(ae(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function bg(t,e,n,s){let i=s.includes(".")?Fg(n,s):()=>n[s];if(et(t)){const r=e[t];pe(r)&&ws(i,r)}else if(pe(t))ws(i,t.bind(n));else if($e(t))if(ae(t))t.forEach(r=>bg(r,e,n,s));else{const r=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(r)&&ws(i,r,t)}}function bh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(u=>$a(c,u,o,!0)),$a(c,e,o)),$e(e)&&r.set(e,c),c}function $a(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&$a(t,r,n,!0),i&&i.forEach(o=>$a(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=u0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const u0={data:Gf,props:Qf,emits:Qf,methods:kr,computed:kr,beforeCreate:Vt,created:Vt,beforeMount:Vt,mounted:Vt,beforeUpdate:Vt,updated:Vt,beforeDestroy:Vt,beforeUnmount:Vt,destroyed:Vt,unmounted:Vt,activated:Vt,deactivated:Vt,errorCaptured:Vt,serverPrefetch:Vt,components:kr,directives:kr,watch:d0,provide:Gf,inject:h0};function Gf(t,e){return e?t?function(){return ft(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function h0(t,e){return kr(uu(t),uu(e))}function uu(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Vt(t,e){return t?[...new Set([].concat(t,e))]:e}function kr(t,e){return t?ft(Object.create(null),t,e):e}function Qf(t,e){return t?ae(t)&&ae(e)?[...new Set([...t,...e])]:ft(Object.create(null),Kf(t),Kf(e??{})):e}function d0(t,e){if(!t)return e;if(!e)return t;const n=ft(Object.create(null),t);for(const s in e)n[s]=Vt(t[s],e[s]);return n}function Rg(){return{app:null,config:{isNativeTag:nw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let f0=0;function p0(t,e){return function(s,i=null){pe(s)||(s=ft({},s)),i!=null&&!$e(i)&&(i=null);const r=Rg(),o=new WeakSet,a=[];let c=!1;const u=r.app={_uid:f0++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:G0,get config(){return r.config},set config(h){},use(h,...f){return o.has(h)||(h&&pe(h.install)?(o.add(h),h.install(u,...f)):pe(h)&&(o.add(h),h(u,...f))),u},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),u},component(h,f){return f?(r.components[h]=f,u):r.components[h]},directive(h,f){return f?(r.directives[h]=f,u):r.directives[h]},mount(h,f,m){if(!c){const _=u._ceVNode||qe(s,i);return _.appContext=r,m===!0?m="svg":m===!1&&(m=void 0),f&&e?e(_,h):t(_,h,m),c=!0,u._container=h,h.__vue_app__=u,Nl(_.component)}},onUnmount(h){a.push(h)},unmount(){c&&(On(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,f){return r.provides[h]=f,u},runWithContext(h){const f=ei;ei=u;try{return h()}finally{ei=f}}};return u}}let ei=null;function Ia(t,e){if(ht){let n=ht.provides;const s=ht.parent&&ht.parent.provides;s===n&&(n=ht.provides=Object.create(s)),n[t]=e}}function Jt(t,e,n=!1){const s=ht||ot;if(s||ei){const i=ei?ei._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&pe(e)?e.call(s&&s.proxy):e}}function m0(){return!!(ht||ot||ei)}const Cg={},Sg=()=>Object.create(Cg),Pg=t=>Object.getPrototypeOf(t)===Cg;function _0(t,e,n,s=!1){const i={},r=Sg();t.propsDefaults=Object.create(null),Ng(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:rg(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function g0(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=Ce(i),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let f=0;f<h.length;f++){let m=h[f];if(Sl(t.emitsOptions,m))continue;const _=e[m];if(c)if(De(r,m))_!==r[m]&&(r[m]=_,u=!0);else{const T=an(m);i[T]=hu(c,a,T,_,t,!1)}else _!==r[m]&&(r[m]=_,u=!0)}}}else{Ng(t,e,i,r)&&(u=!0);let h;for(const f in a)(!e||!De(e,f)&&((h=Ms(f))===f||!De(e,h)))&&(c?n&&(n[f]!==void 0||n[h]!==void 0)&&(i[f]=hu(c,a,f,void 0,t,!0)):delete i[f]);if(r!==a)for(const f in r)(!e||!De(e,f))&&(delete r[f],u=!0)}u&&Kn(t.attrs,"set","")}function Ng(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Fr(c))continue;const u=e[c];let h;i&&De(i,h=an(c))?!r||!r.includes(h)?n[h]=u:(a||(a={}))[h]=u:Sl(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(r){const c=Ce(n),u=a||Fe;for(let h=0;h<r.length;h++){const f=r[h];n[f]=hu(i,c,f,u[f],t,!De(u,f))}}return o}function hu(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=De(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&pe(c)){const{propsDefaults:u}=i;if(n in u)s=u[n];else{const h=No(i);s=u[n]=c.call(null,e),h()}}else s=c;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Ms(n))&&(s=!0))}return s}const y0=new WeakMap;function kg(t,e,n=!1){const s=n?y0:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let c=!1;if(!pe(t)){const h=f=>{c=!0;const[m,_]=kg(f,e,!0);ft(o,m),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!r&&!c)return $e(t)&&s.set(t,ki),ki;if(ae(r))for(let h=0;h<r.length;h++){const f=an(r[h]);Yf(f)&&(o[f]=Fe)}else if(r)for(const h in r){const f=an(h);if(Yf(f)){const m=r[h],_=o[f]=ae(m)||pe(m)?{type:m}:ft({},m),T=_.type;let R=!1,S=!0;if(ae(T))for(let M=0;M<T.length;++M){const U=T[M],O=pe(U)&&U.name;if(O==="Boolean"){R=!0;break}else O==="String"&&(S=!1)}else R=pe(T)&&T.name==="Boolean";_[0]=R,_[1]=S,(R||De(_,"default"))&&a.push(f)}}const u=[o,a];return $e(t)&&s.set(t,u),u}function Yf(t){return t[0]!=="$"&&!Fr(t)}const Dg=t=>t[0]==="_"||t==="$stable",Rh=t=>ae(t)?t.map(Cn):[Cn(t)],v0=(t,e,n)=>{if(e._n)return e;const s=Zs((...i)=>Rh(e(...i)),n);return s._c=!1,s},Og=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Dg(i))continue;const r=t[i];if(pe(r))e[i]=v0(i,r,s);else if(r!=null){const o=Rh(r);e[i]=()=>o}}},xg=(t,e)=>{const n=Rh(e);t.slots.default=()=>n},Mg=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},E0=(t,e,n)=>{const s=t.slots=Sg();if(t.vnode.shapeFlag&32){const i=e._;i?(Mg(s,e,n),n&&F_(s,"_",i,!0)):Og(e,s)}else e&&xg(t,e)},T0=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Fe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Mg(i,e,n):(r=!e.$stable,Og(e,i)),o=e}else e&&(xg(t,e),o={default:1});if(r)for(const a in i)!Dg(a)&&o[a]==null&&delete i[a]},Lt=M0;function w0(t){return I0(t)}function I0(t,e){const n=wl();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:c,setText:u,setElementText:h,parentNode:f,nextSibling:m,setScopeId:_=Nn,insertStaticContent:T}=t,R=(E,w,k,B=null,V=null,H=null,Q=void 0,K=null,q=!!w.dynamicChildren)=>{if(E===w)return;E&&!Ir(E,w)&&(B=L(E),Ge(E,V,H,!0),E=null),w.patchFlag===-2&&(q=!1,w.dynamicChildren=null);const{type:W,ref:re,shapeFlag:J}=w;switch(W){case Pl:S(E,w,k,B);break;case Ps:M(E,w,k,B);break;case Sc:E==null&&U(w,k,B,Q);break;case Bt:P(E,w,k,B,V,H,Q,K,q);break;default:J&1?F(E,w,k,B,V,H,Q,K,q):J&6?A(E,w,k,B,V,H,Q,K,q):(J&64||J&128)&&W.process(E,w,k,B,V,H,Q,K,q,ee)}re!=null&&V&&Ba(re,E&&E.ref,H,w||E,!w)},S=(E,w,k,B)=>{if(E==null)s(w.el=a(w.children),k,B);else{const V=w.el=E.el;w.children!==E.children&&u(V,w.children)}},M=(E,w,k,B)=>{E==null?s(w.el=c(w.children||""),k,B):w.el=E.el},U=(E,w,k,B)=>{[E.el,E.anchor]=T(E.children,w,k,B,E.el,E.anchor)},O=({el:E,anchor:w},k,B)=>{let V;for(;E&&E!==w;)V=m(E),s(E,k,B),E=V;s(w,k,B)},x=({el:E,anchor:w})=>{let k;for(;E&&E!==w;)k=m(E),i(E),E=k;i(w)},F=(E,w,k,B,V,H,Q,K,q)=>{w.type==="svg"?Q="svg":w.type==="math"&&(Q="mathml"),E==null?G(w,k,B,V,H,Q,K,q):v(E,w,V,H,Q,K,q)},G=(E,w,k,B,V,H,Q,K)=>{let q,W;const{props:re,shapeFlag:J,transition:se,dirs:te}=E;if(q=E.el=o(E.type,H,re&&re.is,re),J&8?h(q,E.children):J&16&&y(E.children,q,null,B,V,Rc(E,H),Q,K),te&&Hs(E,null,B,"created"),I(q,E,E.scopeId,Q,B),re){for(const Pe in re)Pe!=="value"&&!Fr(Pe)&&r(q,Pe,null,re[Pe],H,B);"value"in re&&r(q,"value",null,re.value,H),(W=re.onVnodeBeforeMount)&&bn(W,B,E)}te&&Hs(E,null,B,"beforeMount");const le=A0(V,se);le&&se.beforeEnter(q),s(q,w,k),((W=re&&re.onVnodeMounted)||le||te)&&Lt(()=>{W&&bn(W,B,E),le&&se.enter(q),te&&Hs(E,null,B,"mounted")},V)},I=(E,w,k,B,V)=>{if(k&&_(E,k),B)for(let H=0;H<B.length;H++)_(E,B[H]);if(V){let H=V.subTree;if(w===H||Bg(H.type)&&(H.ssContent===w||H.ssFallback===w)){const Q=V.vnode;I(E,Q,Q.scopeId,Q.slotScopeIds,V.parent)}}},y=(E,w,k,B,V,H,Q,K,q=0)=>{for(let W=q;W<E.length;W++){const re=E[W]=K?ps(E[W]):Cn(E[W]);R(null,re,w,k,B,V,H,Q,K)}},v=(E,w,k,B,V,H,Q)=>{const K=w.el=E.el;let{patchFlag:q,dynamicChildren:W,dirs:re}=w;q|=E.patchFlag&16;const J=E.props||Fe,se=w.props||Fe;let te;if(k&&Ws(k,!1),(te=se.onVnodeBeforeUpdate)&&bn(te,k,w,E),re&&Hs(w,E,k,"beforeUpdate"),k&&Ws(k,!0),(J.innerHTML&&se.innerHTML==null||J.textContent&&se.textContent==null)&&h(K,""),W?b(E.dynamicChildren,W,K,k,B,Rc(w,V),H):Q||_e(E,w,K,null,k,B,Rc(w,V),H,!1),q>0){if(q&16)C(K,J,se,k,V);else if(q&2&&J.class!==se.class&&r(K,"class",null,se.class,V),q&4&&r(K,"style",J.style,se.style,V),q&8){const le=w.dynamicProps;for(let Pe=0;Pe<le.length;Pe++){const be=le[Pe],wt=J[be],at=se[be];(at!==wt||be==="value")&&r(K,be,wt,at,V,k)}}q&1&&E.children!==w.children&&h(K,w.children)}else!Q&&W==null&&C(K,J,se,k,V);((te=se.onVnodeUpdated)||re)&&Lt(()=>{te&&bn(te,k,w,E),re&&Hs(w,E,k,"updated")},B)},b=(E,w,k,B,V,H,Q)=>{for(let K=0;K<w.length;K++){const q=E[K],W=w[K],re=q.el&&(q.type===Bt||!Ir(q,W)||q.shapeFlag&70)?f(q.el):k;R(q,W,re,null,B,V,H,Q,!0)}},C=(E,w,k,B,V)=>{if(w!==k){if(w!==Fe)for(const H in w)!Fr(H)&&!(H in k)&&r(E,H,w[H],null,V,B);for(const H in k){if(Fr(H))continue;const Q=k[H],K=w[H];Q!==K&&H!=="value"&&r(E,H,K,Q,V,B)}"value"in k&&r(E,"value",w.value,k.value,V)}},P=(E,w,k,B,V,H,Q,K,q)=>{const W=w.el=E?E.el:a(""),re=w.anchor=E?E.anchor:a("");let{patchFlag:J,dynamicChildren:se,slotScopeIds:te}=w;te&&(K=K?K.concat(te):te),E==null?(s(W,k,B),s(re,k,B),y(w.children||[],k,re,V,H,Q,K,q)):J>0&&J&64&&se&&E.dynamicChildren?(b(E.dynamicChildren,se,k,V,H,Q,K),(w.key!=null||V&&w===V.subTree)&&Ch(E,w,!0)):_e(E,w,k,re,V,H,Q,K,q)},A=(E,w,k,B,V,H,Q,K,q)=>{w.slotScopeIds=K,E==null?w.shapeFlag&512?V.ctx.activate(w,k,B,Q,q):pt(w,k,B,V,H,Q,q):jt(E,w,q)},pt=(E,w,k,B,V,H,Q)=>{const K=E.component=$0(E,B,V);if(vg(E)&&(K.ctx.renderer=ee),j0(K,!1,Q),K.asyncDep){if(V&&V.registerDep(K,Ue,Q),!E.el){const q=K.subTree=qe(Ps);M(null,q,w,k)}}else Ue(K,E,w,k,V,H,Q)},jt=(E,w,k)=>{const B=w.component=E.component;if(O0(E,w,k))if(B.asyncDep&&!B.asyncResolved){he(B,w,k);return}else B.next=w,B.update();else w.el=E.el,B.vnode=w},Ue=(E,w,k,B,V,H,Q)=>{const K=()=>{if(E.isMounted){let{next:J,bu:se,u:te,parent:le,vnode:Pe}=E;{const It=Vg(E);if(It){J&&(J.el=Pe.el,he(E,J,Q)),It.asyncDep.then(()=>{E.isUnmounted||K()});return}}let be=J,wt;Ws(E,!1),J?(J.el=Pe.el,he(E,J,Q)):J=Pe,se&&Ta(se),(wt=J.props&&J.props.onVnodeBeforeUpdate)&&bn(wt,le,J,Pe),Ws(E,!0);const at=Cc(E),mt=E.subTree;E.subTree=at,R(mt,at,f(mt.el),L(mt),E,V,H),J.el=at.el,be===null&&x0(E,at.el),te&&Lt(te,V),(wt=J.props&&J.props.onVnodeUpdated)&&Lt(()=>bn(wt,le,J,Pe),V)}else{let J;const{el:se,props:te}=w,{bm:le,m:Pe,parent:be,root:wt,type:at}=E,mt=xi(w);if(Ws(E,!1),le&&Ta(le),!mt&&(J=te&&te.onVnodeBeforeMount)&&bn(J,be,w),Ws(E,!0),se&&Ve){const It=()=>{E.subTree=Cc(E),Ve(se,E.subTree,E,V,null)};mt&&at.__asyncHydrate?at.__asyncHydrate(se,E,It):It()}else{wt.ce&&wt.ce._injectChildStyle(at);const It=E.subTree=Cc(E);R(null,It,k,B,E,V,H),w.el=It.el}if(Pe&&Lt(Pe,V),!mt&&(J=te&&te.onVnodeMounted)){const It=w;Lt(()=>bn(J,be,It),V)}(w.shapeFlag&256||be&&xi(be.vnode)&&be.vnode.shapeFlag&256)&&E.a&&Lt(E.a,V),E.isMounted=!0,w=k=B=null}};E.scope.on();const q=E.effect=new q_(K);E.scope.off();const W=E.update=q.run.bind(q),re=E.job=q.runIfDirty.bind(q);re.i=E,re.id=E.uid,q.scheduler=()=>wh(re),Ws(E,!0),W()},he=(E,w,k)=>{w.component=E;const B=E.vnode.props;E.vnode=w,E.next=null,g0(E,w.props,B,k),T0(E,w.children,k),Vs(),Bf(E),Ls()},_e=(E,w,k,B,V,H,Q,K,q=!1)=>{const W=E&&E.children,re=E?E.shapeFlag:0,J=w.children,{patchFlag:se,shapeFlag:te}=w;if(se>0){if(se&128){cn(W,J,k,B,V,H,Q,K,q);return}else if(se&256){zt(W,J,k,B,V,H,Q,K,q);return}}te&8?(re&16&&Ht(W,V,H),J!==W&&h(k,J)):re&16?te&16?cn(W,J,k,B,V,H,Q,K,q):Ht(W,V,H,!0):(re&8&&h(k,""),te&16&&y(J,k,B,V,H,Q,K,q))},zt=(E,w,k,B,V,H,Q,K,q)=>{E=E||ki,w=w||ki;const W=E.length,re=w.length,J=Math.min(W,re);let se;for(se=0;se<J;se++){const te=w[se]=q?ps(w[se]):Cn(w[se]);R(E[se],te,k,null,V,H,Q,K,q)}W>re?Ht(E,V,H,!0,!1,J):y(w,k,B,V,H,Q,K,q,J)},cn=(E,w,k,B,V,H,Q,K,q)=>{let W=0;const re=w.length;let J=E.length-1,se=re-1;for(;W<=J&&W<=se;){const te=E[W],le=w[W]=q?ps(w[W]):Cn(w[W]);if(Ir(te,le))R(te,le,k,null,V,H,Q,K,q);else break;W++}for(;W<=J&&W<=se;){const te=E[J],le=w[se]=q?ps(w[se]):Cn(w[se]);if(Ir(te,le))R(te,le,k,null,V,H,Q,K,q);else break;J--,se--}if(W>J){if(W<=se){const te=se+1,le=te<re?w[te].el:B;for(;W<=se;)R(null,w[W]=q?ps(w[W]):Cn(w[W]),k,le,V,H,Q,K,q),W++}}else if(W>se)for(;W<=J;)Ge(E[W],V,H,!0),W++;else{const te=W,le=W,Pe=new Map;for(W=le;W<=se;W++){const xt=w[W]=q?ps(w[W]):Cn(w[W]);xt.key!=null&&Pe.set(xt.key,W)}let be,wt=0;const at=se-le+1;let mt=!1,It=0;const os=new Array(at);for(W=0;W<at;W++)os[W]=0;for(W=te;W<=J;W++){const xt=E[W];if(wt>=at){Ge(xt,V,H,!0);continue}let sn;if(xt.key!=null)sn=Pe.get(xt.key);else for(be=le;be<=se;be++)if(os[be-le]===0&&Ir(xt,w[be])){sn=be;break}sn===void 0?Ge(xt,V,H,!0):(os[sn-le]=W+1,sn>=It?It=sn:mt=!0,R(xt,w[sn],k,null,V,H,Q,K,q),wt++)}const mi=mt?b0(os):ki;for(be=mi.length-1,W=at-1;W>=0;W--){const xt=le+W,sn=w[xt],_i=xt+1<re?w[xt+1].el:B;os[W]===0?R(null,sn,k,_i,V,H,Q,K,q):mt&&(be<0||W!==mi[be]?nn(sn,k,_i,2):be--)}}},nn=(E,w,k,B,V=null)=>{const{el:H,type:Q,transition:K,children:q,shapeFlag:W}=E;if(W&6){nn(E.component.subTree,w,k,B);return}if(W&128){E.suspense.move(w,k,B);return}if(W&64){Q.move(E,w,k,ee);return}if(Q===Bt){s(H,w,k);for(let J=0;J<q.length;J++)nn(q[J],w,k,B);s(E.anchor,w,k);return}if(Q===Sc){O(E,w,k);return}if(B!==2&&W&1&&K)if(B===0)K.beforeEnter(H),s(H,w,k),Lt(()=>K.enter(H),V);else{const{leave:J,delayLeave:se,afterLeave:te}=K,le=()=>s(H,w,k),Pe=()=>{J(H,()=>{le(),te&&te()})};se?se(H,le,Pe):Pe()}else s(H,w,k)},Ge=(E,w,k,B=!1,V=!1)=>{const{type:H,props:Q,ref:K,children:q,dynamicChildren:W,shapeFlag:re,patchFlag:J,dirs:se,cacheIndex:te}=E;if(J===-2&&(V=!1),K!=null&&Ba(K,null,k,E,!0),te!=null&&(w.renderCache[te]=void 0),re&256){w.ctx.deactivate(E);return}const le=re&1&&se,Pe=!xi(E);let be;if(Pe&&(be=Q&&Q.onVnodeBeforeUnmount)&&bn(be,w,E),re&6)An(E.component,k,B);else{if(re&128){E.suspense.unmount(k,B);return}le&&Hs(E,null,w,"beforeUnmount"),re&64?E.type.remove(E,w,k,ee,B):W&&!W.hasOnce&&(H!==Bt||J>0&&J&64)?Ht(W,w,k,!1,!0):(H===Bt&&J&384||!V&&re&16)&&Ht(q,w,k),B&&Qe(E)}(Pe&&(be=Q&&Q.onVnodeUnmounted)||le)&&Lt(()=>{be&&bn(be,w,E),le&&Hs(E,null,w,"unmounted")},k)},Qe=E=>{const{type:w,el:k,anchor:B,transition:V}=E;if(w===Bt){rs(k,B);return}if(w===Sc){x(E);return}const H=()=>{i(k),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(E.shapeFlag&1&&V&&!V.persisted){const{leave:Q,delayLeave:K}=V,q=()=>Q(k,H);K?K(E.el,H,q):q()}else H()},rs=(E,w)=>{let k;for(;E!==w;)k=m(E),i(E),E=k;i(w)},An=(E,w,k)=>{const{bum:B,scope:V,job:H,subTree:Q,um:K,m:q,a:W}=E;Xf(q),Xf(W),B&&Ta(B),V.stop(),H&&(H.flags|=8,Ge(Q,E,w,k)),K&&Lt(K,w),Lt(()=>{E.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Ht=(E,w,k,B=!1,V=!1,H=0)=>{for(let Q=H;Q<E.length;Q++)Ge(E[Q],w,k,B,V)},L=E=>{if(E.shapeFlag&6)return L(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const w=m(E.anchor||E.el),k=w&&w[mg];return k?m(k):w};let Z=!1;const X=(E,w,k)=>{E==null?w._vnode&&Ge(w._vnode,null,null,!0):R(w._vnode||null,E,w,null,null,null,k),w._vnode=E,Z||(Z=!0,Bf(),dg(),Z=!1)},ee={p:R,um:Ge,m:nn,r:Qe,mt:pt,mc:y,pc:_e,pbc:b,n:L,o:t};let Ee,Ve;return{render:X,hydrate:Ee,createApp:p0(X,Ee)}}function Rc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ws({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function A0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ch(t,e,n=!1){const s=t.children,i=e.children;if(ae(s)&&ae(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=ps(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Ch(o,a)),a.type===Pl&&(a.el=o.el)}}function b0(t){const e=t.slice(),n=[0];let s,i,r,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(i=n[n.length-1],t[i]<u){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<u?r=a+1:o=a;u<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Vg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Vg(e)}function Xf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const R0=Symbol.for("v-scx"),C0=()=>Jt(R0);function ws(t,e,n){return Lg(t,e,n)}function Lg(t,e,n=Fe){const{immediate:s,deep:i,flush:r,once:o}=n,a=ft({},n),c=e&&s||!e&&r!=="post";let u;if(uo){if(r==="sync"){const _=C0();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=Nn,_.resume=Nn,_.pause=Nn,_}}const h=ht;a.call=(_,T,R)=>On(_,h,T,R);let f=!1;r==="post"?a.scheduler=_=>{Lt(_,h&&h.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(_,T)=>{T?_():wh(_)}),a.augmentJob=_=>{e&&(_.flags|=4),f&&(_.flags|=2,h&&(_.id=h.uid,_.i=h))};const m=$w(t,e,a);return uo&&(u?u.push(m):c&&m()),m}function S0(t,e,n){const s=this.proxy,i=et(t)?t.includes(".")?Fg(s,t):()=>s[t]:t.bind(s,s);let r;pe(e)?r=e:(r=e.handler,n=e);const o=No(this),a=Lg(i,r.bind(s),n);return o(),a}function Fg(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const P0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${an(e)}Modifiers`]||t[`${Ms(e)}Modifiers`];function N0(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Fe;let i=n;const r=e.startsWith("update:"),o=r&&P0(s,e.slice(7));o&&(o.trim&&(i=n.map(h=>et(h)?h.trim():h)),o.number&&(i=n.map(Ma)));let a,c=s[a=Ec(e)]||s[a=Ec(an(e))];!c&&r&&(c=s[a=Ec(Ms(e))]),c&&On(c,t,6,i);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,On(u,t,6,i)}}function Ug(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!pe(t)){const c=u=>{const h=Ug(u,e,!0);h&&(a=!0,ft(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?($e(t)&&s.set(t,null),null):(ae(r)?r.forEach(c=>o[c]=null):ft(o,r),$e(t)&&s.set(t,o),o)}function Sl(t,e){return!t||!vl(e)?!1:(e=e.slice(2).replace(/Once$/,""),De(t,e[0].toLowerCase()+e.slice(1))||De(t,Ms(e))||De(t,e))}function Cc(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:c,render:u,renderCache:h,props:f,data:m,setupState:_,ctx:T,inheritAttrs:R}=t,S=Ua(t);let M,U;try{if(n.shapeFlag&4){const x=i||s,F=x;M=Cn(u.call(F,x,h,f,_,m,T)),U=a}else{const x=e;M=Cn(x.length>1?x(f,{attrs:a,slots:o,emit:c}):x(f,null)),U=e.props?a:k0(a)}}catch(x){Hr.length=0,bl(x,t,1),M=qe(Ps)}let O=M;if(U&&R!==!1){const x=Object.keys(U),{shapeFlag:F}=O;x.length&&F&7&&(r&&x.some(lh)&&(U=D0(U,r)),O=Bi(O,U,!1,!0))}return n.dirs&&(O=Bi(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&Ih(O,n.transition),M=O,Ua(S),M}const k0=t=>{let e;for(const n in t)(n==="class"||n==="style"||vl(n))&&((e||(e={}))[n]=t[n]);return e},D0=(t,e)=>{const n={};for(const s in t)(!lh(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function O0(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:c}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Jf(s,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const m=h[f];if(o[m]!==s[m]&&!Sl(u,m))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Jf(s,o,u):!0:!!o;return!1}function Jf(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Sl(n,r))return!0}return!1}function x0({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Bg=t=>t.__isSuspense;function M0(t,e){e&&e.pendingBranch?ae(t)?e.effects.push(...t):e.effects.push(t):Ww(t)}const Bt=Symbol.for("v-fgt"),Pl=Symbol.for("v-txt"),Ps=Symbol.for("v-cmt"),Sc=Symbol.for("v-stc"),Hr=[];let Yt=null;function Ae(t=!1){Hr.push(Yt=t?null:[])}function V0(){Hr.pop(),Yt=Hr[Hr.length-1]||null}let lo=1;function Zf(t,e=!1){lo+=t,t<0&&Yt&&e&&(Yt.hasOnce=!0)}function $g(t){return t.dynamicChildren=lo>0?Yt||ki:null,V0(),lo>0&&Yt&&Yt.push(t),t}function Xe(t,e,n,s,i,r){return $g(ue(t,e,n,s,i,r,!0))}function yn(t,e,n,s,i){return $g(qe(t,e,n,s,i,!0))}function co(t){return t?t.__v_isVNode===!0:!1}function Ir(t,e){return t.type===e.type&&t.key===e.key}const jg=({key:t})=>t??null,Aa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?et(t)||Je(t)||pe(t)?{i:ot,r:t,k:e,f:!!n}:t:null);function ue(t,e=null,n=null,s=0,i=null,r=t===Bt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&jg(e),ref:e&&Aa(e),scopeId:pg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ot};return a?(Sh(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=et(n)?8:16),lo>0&&!o&&Yt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Yt.push(c),c}const qe=L0;function L0(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===i0)&&(t=Ps),co(t)){const a=Bi(t,e,!0);return n&&Sh(a,n),lo>0&&!r&&Yt&&(a.shapeFlag&6?Yt[Yt.indexOf(t)]=a:Yt.push(a)),a.patchFlag=-2,a}if(z0(t)&&(t=t.__vccOpts),e){e=F0(e);let{class:a,style:c}=e;a&&!et(a)&&(e.class=Il(a)),$e(c)&&(Eh(c)&&!ae(c)&&(c=ft({},c)),e.style=hh(c))}const o=et(t)?1:Bg(t)?128:qw(t)?64:$e(t)?4:pe(t)?2:0;return ue(t,e,n,s,i,o,r,!0)}function F0(t){return t?Eh(t)||Pg(t)?ft({},t):t:null}function Bi(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:c}=t,u=e?Hg(i||{},e):i,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&jg(u),ref:e&&e.ref?n&&r?ae(r)?r.concat(Aa(e)):[r,Aa(e)]:Aa(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Bt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Bi(t.ssContent),ssFallback:t.ssFallback&&Bi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&Ih(h,c.clone(h)),h}function ba(t=" ",e=0){return qe(Pl,null,t,e)}function Qt(t="",e=!1){return e?(Ae(),yn(Ps,null,t)):qe(Ps,null,t)}function Cn(t){return t==null||typeof t=="boolean"?qe(Ps):ae(t)?qe(Bt,null,t.slice()):co(t)?ps(t):qe(Pl,null,String(t))}function ps(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Bi(t)}function Sh(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ae(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Sh(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Pg(e)?e._ctx=ot:i===3&&ot&&(ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:ot},n=32):(e=String(e),s&64?(n=16,e=[ba(e)]):n=8);t.children=e,t.shapeFlag|=n}function Hg(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Il([e.class,s.class]));else if(i==="style")e.style=hh([e.style,s.style]);else if(vl(i)){const r=e[i],o=s[i];o&&r!==o&&!(ae(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function bn(t,e,n,s=null){On(t,e,7,[n,s])}const U0=Rg();let B0=0;function $0(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||U0,r={uid:B0++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new j_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kg(s,i),emitsOptions:Ug(s,i),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:s.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=N0.bind(null,r),t.ce&&t.ce(r),r}let ht=null;const Wg=()=>ht||ot;let ja,du;{const t=wl(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};ja=e("__VUE_INSTANCE_SETTERS__",n=>ht=n),du=e("__VUE_SSR_SETTERS__",n=>uo=n)}const No=t=>{const e=ht;return ja(t),t.scope.on(),()=>{t.scope.off(),ja(e)}},ep=()=>{ht&&ht.scope.off(),ja(null)};function qg(t){return t.vnode.shapeFlag&4}let uo=!1;function j0(t,e=!1,n=!1){e&&du(e);const{props:s,children:i}=t.vnode,r=qg(t);_0(t,s,r,e),E0(t,i,n);const o=r?H0(t,e):void 0;return e&&du(!1),o}function H0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,a0);const{setup:s}=n;if(s){Vs();const i=t.setupContext=s.length>1?q0(t):null,r=No(t),o=Po(s,t,0,[t.props,i]),a=M_(o);if(Ls(),r(),(a||t.sp)&&!xi(t)&&yg(t),a){if(o.then(ep,ep),e)return o.then(c=>{tp(t,c,e)}).catch(c=>{bl(c,t,0)});t.asyncDep=o}else tp(t,o,e)}else Kg(t,e)}function tp(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:$e(e)&&(t.setupState=cg(e)),Kg(t,n)}let np;function Kg(t,e,n){const s=t.type;if(!t.render){if(!e&&np&&!s.render){const i=s.template||bh(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=ft(ft({isCustomElement:r,delimiters:a},o),c);s.render=np(i,u)}}t.render=s.render||Nn}{const i=No(t);Vs();try{l0(t)}finally{Ls(),i()}}}const W0={get(t,e){return St(t,"get",""),t[e]}};function q0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,W0),slots:t.slots,emit:t.emit,expose:e}}function Nl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(cg(Th(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in jr)return jr[n](t)},has(e,n){return n in e||n in jr}})):t.proxy}function K0(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function z0(t){return pe(t)&&"__vccOpts"in t}const gt=(t,e)=>Uw(t,e,uo);function zg(t,e,n){const s=arguments.length;return s===2?$e(e)&&!ae(e)?co(e)?qe(t,null,[e]):qe(t,e):qe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&co(n)&&(n=[n]),qe(t,e,n))}const G0="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fu;const sp=typeof window<"u"&&window.trustedTypes;if(sp)try{fu=sp.createPolicy("vue",{createHTML:t=>t})}catch{}const Gg=fu?t=>fu.createHTML(t):t=>t,Q0="http://www.w3.org/2000/svg",Y0="http://www.w3.org/1998/Math/MathML",qn=typeof document<"u"?document:null,ip=qn&&qn.createElement("template"),X0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?qn.createElementNS(Q0,t):e==="mathml"?qn.createElementNS(Y0,t):n?qn.createElement(t,{is:n}):qn.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>qn.createTextNode(t),createComment:t=>qn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>qn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{ip.innerHTML=Gg(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=ip.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},J0=Symbol("_vtc");function Z0(t,e,n){const s=t[J0];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ha=Symbol("_vod"),Qg=Symbol("_vsh"),cx={beforeMount(t,{value:e},{transition:n}){t[Ha]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ar(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Ar(t,!0),s.enter(t)):s.leave(t,()=>{Ar(t,!1)}):Ar(t,e))},beforeUnmount(t,{value:e}){Ar(t,e)}};function Ar(t,e){t.style.display=e?t[Ha]:"none",t[Qg]=!e}const eI=Symbol(""),tI=/(^|;)\s*display\s*:/;function nI(t,e,n){const s=t.style,i=et(n);let r=!1;if(n&&!i){if(e)if(et(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ra(s,a,"")}else for(const o in e)n[o]==null&&Ra(s,o,"");for(const o in n)o==="display"&&(r=!0),Ra(s,o,n[o])}else if(i){if(e!==n){const o=s[eI];o&&(n+=";"+o),s.cssText=n,r=tI.test(n)}}else e&&t.removeAttribute("style");Ha in t&&(t[Ha]=r?s.display:"",t[Qg]&&(s.display="none"))}const rp=/\s*!important$/;function Ra(t,e,n){if(ae(n))n.forEach(s=>Ra(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=sI(t,e);rp.test(n)?t.setProperty(Ms(s),n.replace(rp,""),"important"):t[s]=n}}const op=["Webkit","Moz","ms"],Pc={};function sI(t,e){const n=Pc[e];if(n)return n;let s=an(e);if(s!=="filter"&&s in t)return Pc[e]=s;s=Tl(s);for(let i=0;i<op.length;i++){const r=op[i]+s;if(r in t)return Pc[e]=r}return e}const ap="http://www.w3.org/1999/xlink";function lp(t,e,n,s,i,r=dw(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ap,e.slice(6,e.length)):t.setAttributeNS(ap,e,n):n==null||r&&!U_(n)?t.removeAttribute(e):t.setAttribute(e,r?"":gn(n)?String(n):n)}function cp(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Gg(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=U_(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function _s(t,e,n,s){t.addEventListener(e,n,s)}function iI(t,e,n,s){t.removeEventListener(e,n,s)}const up=Symbol("_vei");function rI(t,e,n,s,i=null){const r=t[up]||(t[up]={}),o=r[e];if(s&&o)o.value=s;else{const[a,c]=oI(e);if(s){const u=r[e]=cI(s,i);_s(t,a,u,c)}else o&&(iI(t,a,o,c),r[e]=void 0)}}const hp=/(?:Once|Passive|Capture)$/;function oI(t){let e;if(hp.test(t)){e={};let s;for(;s=t.match(hp);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ms(t.slice(2)),e]}let Nc=0;const aI=Promise.resolve(),lI=()=>Nc||(aI.then(()=>Nc=0),Nc=Date.now());function cI(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;On(uI(s,n.value),e,5,[s])};return n.value=t,n.attached=lI(),n}function uI(t,e){if(ae(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const dp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,hI=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Z0(t,s,o):e==="style"?nI(t,n,s):vl(e)?lh(e)||rI(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dI(t,e,s,o))?(cp(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&lp(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!et(s))?cp(t,an(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),lp(t,e,s,o))};function dI(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&dp(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return dp(e)&&et(n)?!1:e in t}const $i=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ae(e)?n=>Ta(e,n):e};function fI(t){t.target.composing=!0}function fp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Yn=Symbol("_assign"),Is={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Yn]=$i(i);const r=s||i.props&&i.props.type==="number";_s(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Ma(a)),t[Yn](a)}),n&&_s(t,"change",()=>{t.value=t.value.trim()}),e||(_s(t,"compositionstart",fI),_s(t,"compositionend",fp),_s(t,"change",fp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[Yn]=$i(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Ma(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===c)||(t.value=c))}},ux={deep:!0,created(t,e,n){t[Yn]=$i(n),_s(t,"change",()=>{const s=t._modelValue,i=ho(t),r=t.checked,o=t[Yn];if(ae(s)){const a=dh(s,i),c=a!==-1;if(r&&!c)o(s.concat(i));else if(!r&&c){const u=[...s];u.splice(a,1),o(u)}}else if(er(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(Yg(t,r))})},mounted:pp,beforeUpdate(t,e,n){t[Yn]=$i(n),pp(t,e,n)}};function pp(t,{value:e,oldValue:n},s){t._modelValue=e;let i;if(ae(e))i=dh(e,s.props.value)>-1;else if(er(e))i=e.has(s.props.value);else{if(e===n)return;i=Co(e,Yg(t,!0))}t.checked!==i&&(t.checked=i)}const hx={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=er(e);_s(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ma(ho(o)):ho(o));t[Yn](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,Rl(()=>{t._assigning=!1})}),t[Yn]=$i(s)},mounted(t,{value:e}){mp(t,e)},beforeUpdate(t,e,n){t[Yn]=$i(n)},updated(t,{value:e}){t._assigning||mp(t,e)}};function mp(t,e){const n=t.multiple,s=ae(e);if(!(n&&!s&&!er(e))){for(let i=0,r=t.options.length;i<r;i++){const o=t.options[i],a=ho(o);if(n)if(s){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=dh(e,a)>-1}else o.selected=e.has(a);else if(Co(ho(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ho(t){return"_value"in t?t._value:t.value}function Yg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const pI=["ctrl","shift","alt","meta"],mI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>pI.some(n=>t[`${n}Key`]&&!e.includes(n))},Ph=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=mI[e[o]];if(a&&a(i,e))return}return t(i,...r)})},_I={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},_p=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=i=>{if(!("key"in i))return;const r=Ms(i.key);if(e.some(o=>o===r||_I[o]===r))return t(i)})},gI=ft({patchProp:hI},X0);let gp;function yI(){return gp||(gp=w0(gI))}const vI=(...t)=>{const e=yI().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=TI(s);if(!i)return;const r=e._component;!pe(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,EI(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function EI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function TI(t){return et(t)?document.querySelector(t):t}var wI=!1;/*!
 * pinia v2.2.8
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let Xg;const kl=t=>Xg=t,Jg=Symbol();function pu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Wr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Wr||(Wr={}));function II(){const t=H_(!0),e=t.run(()=>nt({}));let n=[],s=[];const i=Th({install(r){kl(i),i._a=r,r.provide(Jg,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!wI?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Zg=()=>{};function yp(t,e,n,s=Zg){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&fh()&&W_(i),i}function wi(t,...e){t.slice().forEach(n=>{n(...e)})}const AI=t=>t(),vp=Symbol(),kc=Symbol();function mu(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];pu(i)&&pu(s)&&t.hasOwnProperty(n)&&!Je(s)&&!Es(s)?t[n]=mu(i,s):t[n]=s}return t}const bI=Symbol();function RI(t){return!pu(t)||!t.hasOwnProperty(bI)}const{assign:ds}=Object;function CI(t){return!!(Je(t)&&t.effect)}function SI(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=i?i():{});const h=Mw(n.state.value[t]);return ds(h,r,Object.keys(o||{}).reduce((f,m)=>(f[m]=Th(gt(()=>{kl(n);const _=n._s.get(t);return o[m].call(_,_)})),f),{}))}return c=ey(t,u,e,n,s,!0),c}function ey(t,e,n={},s,i,r){let o;const a=ds({actions:{}},n),c={deep:!0};let u,h,f=[],m=[],_;const T=s.state.value[t];!r&&!T&&(s.state.value[t]={}),nt({});let R;function S(y){let v;u=h=!1,typeof y=="function"?(y(s.state.value[t]),v={type:Wr.patchFunction,storeId:t,events:_}):(mu(s.state.value[t],y),v={type:Wr.patchObject,payload:y,storeId:t,events:_});const b=R=Symbol();Rl().then(()=>{R===b&&(u=!0)}),h=!0,wi(f,v,s.state.value[t])}const M=r?function(){const{state:v}=n,b=v?v():{};this.$patch(C=>{ds(C,b)})}:Zg;function U(){o.stop(),f=[],m=[],s._s.delete(t)}const O=(y,v="")=>{if(vp in y)return y[kc]=v,y;const b=function(){kl(s);const C=Array.from(arguments),P=[],A=[];function pt(he){P.push(he)}function jt(he){A.push(he)}wi(m,{args:C,name:b[kc],store:F,after:pt,onError:jt});let Ue;try{Ue=y.apply(this&&this.$id===t?this:F,C)}catch(he){throw wi(A,he),he}return Ue instanceof Promise?Ue.then(he=>(wi(P,he),he)).catch(he=>(wi(A,he),Promise.reject(he))):(wi(P,Ue),Ue)};return b[vp]=!0,b[kc]=v,b},x={_p:s,$id:t,$onAction:yp.bind(null,m),$patch:S,$reset:M,$subscribe(y,v={}){const b=yp(f,y,v.detached,()=>C()),C=o.run(()=>ws(()=>s.state.value[t],P=>{(v.flush==="sync"?h:u)&&y({storeId:t,type:Wr.direct,events:_},P)},ds({},c,v)));return b},$dispose:U},F=So(x);s._s.set(t,F);const I=(s._a&&s._a.runWithContext||AI)(()=>s._e.run(()=>(o=H_()).run(()=>e({action:O}))));for(const y in I){const v=I[y];if(Je(v)&&!CI(v)||Es(v))r||(T&&RI(v)&&(Je(v)?v.value=T[y]:mu(v,T[y])),s.state.value[t][y]=v);else if(typeof v=="function"){const b=O(v,y);I[y]=b,a.actions[y]=v}}return ds(F,I),ds(Ce(F),I),Object.defineProperty(F,"$state",{get:()=>s.state.value[t],set:y=>{S(v=>{ds(v,y)})}}),s._p.forEach(y=>{ds(F,o.run(()=>y({store:F,app:s._a,pinia:s,options:a})))}),T&&r&&n.hydrate&&n.hydrate(F.$state,T),u=!0,h=!0,F}/*! #__NO_SIDE_EFFECTS__ */function ty(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,c){const u=m0();return a=a||(u?Jt(Jg,null):null),a&&kl(a),a=Xg,a._s.has(s)||(r?ey(s,e,i,a):SI(s,i,a)),a._s.get(s)}return o.$id=s,o}const PI="https://www.ryan-fam.com/assets/crest-VUu5A_g-.png";/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const bi=typeof document<"u";function ny(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function NI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&ny(t.default)}const ke=Object.assign;function Dc(t,e){const n={};for(const s in e){const i=e[s];n[s]=vn(i)?i.map(t):t(i)}return n}const qr=()=>{},vn=Array.isArray,sy=/#/g,kI=/&/g,DI=/\//g,OI=/=/g,xI=/\?/g,iy=/\+/g,MI=/%5B/g,VI=/%5D/g,ry=/%5E/g,LI=/%60/g,oy=/%7B/g,FI=/%7C/g,ay=/%7D/g,UI=/%20/g;function Nh(t){return encodeURI(""+t).replace(FI,"|").replace(MI,"[").replace(VI,"]")}function BI(t){return Nh(t).replace(oy,"{").replace(ay,"}").replace(ry,"^")}function _u(t){return Nh(t).replace(iy,"%2B").replace(UI,"+").replace(sy,"%23").replace(kI,"%26").replace(LI,"`").replace(oy,"{").replace(ay,"}").replace(ry,"^")}function $I(t){return _u(t).replace(OI,"%3D")}function jI(t){return Nh(t).replace(sy,"%23").replace(xI,"%3F")}function HI(t){return t==null?"":jI(t).replace(DI,"%2F")}function fo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const WI=/\/$/,qI=t=>t.replace(WI,"");function Oc(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=QI(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:fo(o)}}function KI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ep(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function zI(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&ji(e.matched[s],n.matched[i])&&ly(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ji(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ly(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!GI(t[n],e[n]))return!1;return!0}function GI(t,e){return vn(t)?Tp(t,e):vn(e)?Tp(e,t):t===e}function Tp(t,e){return vn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function QI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const us={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var po;(function(t){t.pop="pop",t.push="push"})(po||(po={}));var Kr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Kr||(Kr={}));function YI(t){if(!t)if(bi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),qI(t)}const XI=/^[^#]+#/;function JI(t,e){return t.replace(XI,"#")+e}function ZI(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Dl=()=>({left:window.scrollX,top:window.scrollY});function eA(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=ZI(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function wp(t,e){return(history.state?history.state.position-e:-1)+t}const gu=new Map;function tA(t,e){gu.set(t,e)}function nA(t){const e=gu.get(t);return gu.delete(t),e}let sA=()=>location.protocol+"//"+location.host;function cy(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),Ep(c,"")}return Ep(n,t)+s+i}function iA(t,e,n,s){let i=[],r=[],o=null;const a=({state:m})=>{const _=cy(t,location),T=n.value,R=e.value;let S=0;if(m){if(n.value=_,e.value=m,o&&o===T){o=null;return}S=R?m.position-R.position:0}else s(_);i.forEach(M=>{M(n.value,T,{delta:S,type:po.pop,direction:S?S>0?Kr.forward:Kr.back:Kr.unknown})})};function c(){o=n.value}function u(m){i.push(m);const _=()=>{const T=i.indexOf(m);T>-1&&i.splice(T,1)};return r.push(_),_}function h(){const{history:m}=window;m.state&&m.replaceState(ke({},m.state,{scroll:Dl()}),"")}function f(){for(const m of r)m();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function Ip(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Dl():null}}function rA(t){const{history:e,location:n}=window,s={value:cy(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,u,h){const f=t.indexOf("#"),m=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:sA()+t+c;try{e[h?"replaceState":"pushState"](u,"",m),i.value=u}catch(_){console.error(_),n[h?"replace":"assign"](m)}}function o(c,u){const h=ke({},e.state,Ip(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});r(c,h,!0),s.value=c}function a(c,u){const h=ke({},i.value,e.state,{forward:c,scroll:Dl()});r(h.current,h,!0);const f=ke({},Ip(s.value,c,null),{position:h.position+1},u);r(c,f,!1),s.value=c}return{location:s,state:i,push:a,replace:o}}function oA(t){t=YI(t);const e=rA(t),n=iA(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ke({location:"",base:t,go:s,createHref:JI.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function aA(t){return typeof t=="string"||t&&typeof t=="object"}function uy(t){return typeof t=="string"||typeof t=="symbol"}const hy=Symbol("");var Ap;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ap||(Ap={}));function Hi(t,e){return ke(new Error,{type:t,[hy]:!0},e)}function jn(t,e){return t instanceof Error&&hy in t&&(e==null||!!(t.type&e))}const bp="[^/]+?",lA={sensitive:!1,strict:!1,start:!0,end:!0},cA=/[.+*?^${}()[\]/\\]/g;function uA(t,e){const n=ke({},lA,e),s=[];let i=n.start?"^":"";const r=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let f=0;f<u.length;f++){const m=u[f];let _=40+(n.sensitive?.25:0);if(m.type===0)f||(i+="/"),i+=m.value.replace(cA,"\\$&"),_+=40;else if(m.type===1){const{value:T,repeatable:R,optional:S,regexp:M}=m;r.push({name:T,repeatable:R,optional:S});const U=M||bp;if(U!==bp){_+=10;try{new RegExp(`(${U})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${T}" (${U}): `+x.message)}}let O=R?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;f||(O=S&&u.length<2?`(?:/${O})`:"/"+O),S&&(O+="?"),i+=O,_+=20,S&&(_+=-8),R&&(_+=-20),U===".*"&&(_+=-50)}h.push(_)}s.push(h)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(u){const h=u.match(o),f={};if(!h)return null;for(let m=1;m<h.length;m++){const _=h[m]||"",T=r[m-1];f[T.name]=_&&T.repeatable?_.split("/"):_}return f}function c(u){let h="",f=!1;for(const m of t){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const _ of m)if(_.type===0)h+=_.value;else if(_.type===1){const{value:T,repeatable:R,optional:S}=_,M=T in u?u[T]:"";if(vn(M)&&!R)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const U=vn(M)?M.join("/"):M;if(!U)if(S)m.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${T}"`);h+=U}}return h||"/"}return{re:o,score:s,keys:r,parse:a,stringify:c}}function hA(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function dy(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=hA(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Rp(s))return 1;if(Rp(i))return-1}return i.length-s.length}function Rp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const dA={type:0,value:""},fA=/[a-zA-Z0-9_]/;function pA(t){if(!t)return[[]];if(t==="/")return[[dA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,c,u="",h="";function f(){u&&(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):m();break;case 4:m(),n=s;break;case 1:c==="("?n=2:fA.test(c)?m():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),i}function mA(t,e,n){const s=uA(pA(t.path),n),i=ke(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function _A(t,e){const n=[],s=new Map;e=Np({strict:!1,end:!0,sensitive:!1},e);function i(f){return s.get(f)}function r(f,m,_){const T=!_,R=Sp(f);R.aliasOf=_&&_.record;const S=Np(e,f),M=[R];if("alias"in f){const x=typeof f.alias=="string"?[f.alias]:f.alias;for(const F of x)M.push(Sp(ke({},R,{components:_?_.record.components:R.components,path:F,aliasOf:_?_.record:R})))}let U,O;for(const x of M){const{path:F}=x;if(m&&F[0]!=="/"){const G=m.record.path,I=G[G.length-1]==="/"?"":"/";x.path=m.record.path+(F&&I+F)}if(U=mA(x,m,S),_?_.alias.push(U):(O=O||U,O!==U&&O.alias.push(U),T&&f.name&&!Pp(U)&&o(f.name)),fy(U)&&c(U),R.children){const G=R.children;for(let I=0;I<G.length;I++)r(G[I],U,_&&_.children[I])}_=_||U}return O?()=>{o(O)}:qr}function o(f){if(uy(f)){const m=s.get(f);m&&(s.delete(f),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(f);m>-1&&(n.splice(m,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const m=vA(f,n);n.splice(m,0,f),f.record.name&&!Pp(f)&&s.set(f.record.name,f)}function u(f,m){let _,T={},R,S;if("name"in f&&f.name){if(_=s.get(f.name),!_)throw Hi(1,{location:f});S=_.record.name,T=ke(Cp(m.params,_.keys.filter(O=>!O.optional).concat(_.parent?_.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),f.params&&Cp(f.params,_.keys.map(O=>O.name))),R=_.stringify(T)}else if(f.path!=null)R=f.path,_=n.find(O=>O.re.test(R)),_&&(T=_.parse(R),S=_.record.name);else{if(_=m.name?s.get(m.name):n.find(O=>O.re.test(m.path)),!_)throw Hi(1,{location:f,currentLocation:m});S=_.record.name,T=ke({},m.params,f.params),R=_.stringify(T)}const M=[];let U=_;for(;U;)M.unshift(U.record),U=U.parent;return{name:S,path:R,params:T,matched:M,meta:yA(M)}}t.forEach(f=>r(f));function h(){n.length=0,s.clear()}return{addRoute:r,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:i}}function Cp(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Sp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:gA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function gA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Pp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function yA(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function Np(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function vA(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;dy(t,e[r])<0?s=r:n=r+1}const i=EA(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function EA(t){let e=t;for(;e=e.parent;)if(fy(e)&&dy(t,e)===0)return e}function fy({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function TA(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(iy," "),o=r.indexOf("="),a=fo(o<0?r:r.slice(0,o)),c=o<0?null:fo(r.slice(o+1));if(a in e){let u=e[a];vn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function kp(t){let e="";for(let n in t){const s=t[n];if(n=$I(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(vn(s)?s.map(r=>r&&_u(r)):[s&&_u(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function wA(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=vn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const IA=Symbol(""),Dp=Symbol(""),kh=Symbol(""),Dh=Symbol(""),yu=Symbol("");function br(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ms(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,c)=>{const u=m=>{m===!1?c(Hi(4,{from:n,to:e})):m instanceof Error?c(m):aA(m)?c(Hi(2,{from:e,to:m})):(o&&s.enterCallbacks[i]===o&&typeof m=="function"&&o.push(m),a())},h=r(()=>t.call(s&&s.instances[i],e,n,u));let f=Promise.resolve(h);t.length<3&&(f=f.then(u)),f.catch(m=>c(m))})}function xc(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(ny(c)){const h=(c.__vccOpts||c)[e];h&&r.push(ms(h,n,s,o,a,i))}else{let u=c();r.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=NI(h)?h.default:h;o.mods[a]=h,o.components[a]=f;const _=(f.__vccOpts||f)[e];return _&&ms(_,n,s,o,a,i)()}))}}return r}function Op(t){const e=Jt(kh),n=Jt(Dh),s=gt(()=>{const c=ce(t.to);return e.resolve(c)}),i=gt(()=>{const{matched:c}=s.value,{length:u}=c,h=c[u-1],f=n.matched;if(!h||!f.length)return-1;const m=f.findIndex(ji.bind(null,h));if(m>-1)return m;const _=xp(c[u-2]);return u>1&&xp(h)===_&&f[f.length-1].path!==_?f.findIndex(ji.bind(null,c[u-2])):m}),r=gt(()=>i.value>-1&&CA(n.params,s.value.params)),o=gt(()=>i.value>-1&&i.value===n.matched.length-1&&ly(n.params,s.value.params));function a(c={}){if(RA(c)){const u=e[ce(t.replace)?"replace":"push"](ce(t.to)).catch(qr);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:gt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}function AA(t){return t.length===1?t[0]:t}const bA=In({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Op,setup(t,{slots:e}){const n=So(Op(t)),{options:s}=Jt(kh),i=gt(()=>({[Mp(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Mp(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&AA(e.default(n));return t.custom?r:zg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),zr=bA;function RA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function CA(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!vn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function xp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Mp=(t,e,n)=>t??e??n,SA=In({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Jt(yu),i=gt(()=>t.route||s.value),r=Jt(Dp,0),o=gt(()=>{let u=ce(r);const{matched:h}=i.value;let f;for(;(f=h[u])&&!f.components;)u++;return u}),a=gt(()=>i.value.matched[o.value]);Ia(Dp,gt(()=>o.value+1)),Ia(IA,a),Ia(yu,i);const c=nt();return ws(()=>[c.value,a.value,t.name],([u,h,f],[m,_,T])=>{h&&(h.instances[f]=u,_&&_!==h&&u&&u===m&&(h.leaveGuards.size||(h.leaveGuards=_.leaveGuards),h.updateGuards.size||(h.updateGuards=_.updateGuards))),u&&h&&(!_||!ji(h,_)||!m)&&(h.enterCallbacks[f]||[]).forEach(R=>R(u))},{flush:"post"}),()=>{const u=i.value,h=t.name,f=a.value,m=f&&f.components[h];if(!m)return Vp(n.default,{Component:m,route:u});const _=f.props[h],T=_?_===!0?u.params:typeof _=="function"?_(u):_:null,S=zg(m,ke({},T,e,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(f.instances[h]=null)},ref:c}));return Vp(n.default,{Component:S,route:u})||S}}});function Vp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const py=SA;function PA(t){const e=_A(t.routes,t),n=t.parseQuery||TA,s=t.stringifyQuery||kp,i=t.history,r=br(),o=br(),a=br(),c=ag(us);let u=us;bi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Dc.bind(null,L=>""+L),f=Dc.bind(null,HI),m=Dc.bind(null,fo);function _(L,Z){let X,ee;return uy(L)?(X=e.getRecordMatcher(L),ee=Z):ee=L,e.addRoute(ee,X)}function T(L){const Z=e.getRecordMatcher(L);Z&&e.removeRoute(Z)}function R(){return e.getRoutes().map(L=>L.record)}function S(L){return!!e.getRecordMatcher(L)}function M(L,Z){if(Z=ke({},Z||c.value),typeof L=="string"){const w=Oc(n,L,Z.path),k=e.resolve({path:w.path},Z),B=i.createHref(w.fullPath);return ke(w,k,{params:m(k.params),hash:fo(w.hash),redirectedFrom:void 0,href:B})}let X;if(L.path!=null)X=ke({},L,{path:Oc(n,L.path,Z.path).path});else{const w=ke({},L.params);for(const k in w)w[k]==null&&delete w[k];X=ke({},L,{params:f(w)}),Z.params=f(Z.params)}const ee=e.resolve(X,Z),Ee=L.hash||"";ee.params=h(m(ee.params));const Ve=KI(s,ke({},L,{hash:BI(Ee),path:ee.path})),E=i.createHref(Ve);return ke({fullPath:Ve,hash:Ee,query:s===kp?wA(L.query):L.query||{}},ee,{redirectedFrom:void 0,href:E})}function U(L){return typeof L=="string"?Oc(n,L,c.value.path):ke({},L)}function O(L,Z){if(u!==L)return Hi(8,{from:Z,to:L})}function x(L){return I(L)}function F(L){return x(ke(U(L),{replace:!0}))}function G(L){const Z=L.matched[L.matched.length-1];if(Z&&Z.redirect){const{redirect:X}=Z;let ee=typeof X=="function"?X(L):X;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=U(ee):{path:ee},ee.params={}),ke({query:L.query,hash:L.hash,params:ee.path!=null?{}:L.params},ee)}}function I(L,Z){const X=u=M(L),ee=c.value,Ee=L.state,Ve=L.force,E=L.replace===!0,w=G(X);if(w)return I(ke(U(w),{state:typeof w=="object"?ke({},Ee,w.state):Ee,force:Ve,replace:E}),Z||X);const k=X;k.redirectedFrom=Z;let B;return!Ve&&zI(s,ee,X)&&(B=Hi(16,{to:k,from:ee}),nn(ee,ee,!0,!1)),(B?Promise.resolve(B):b(k,ee)).catch(V=>jn(V)?jn(V,2)?V:cn(V):_e(V,k,ee)).then(V=>{if(V){if(jn(V,2))return I(ke({replace:E},U(V.to),{state:typeof V.to=="object"?ke({},Ee,V.to.state):Ee,force:Ve}),Z||k)}else V=P(k,ee,!0,E,Ee);return C(k,ee,V),V})}function y(L,Z){const X=O(L,Z);return X?Promise.reject(X):Promise.resolve()}function v(L){const Z=rs.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(L):L()}function b(L,Z){let X;const[ee,Ee,Ve]=NA(L,Z);X=xc(ee.reverse(),"beforeRouteLeave",L,Z);for(const w of ee)w.leaveGuards.forEach(k=>{X.push(ms(k,L,Z))});const E=y.bind(null,L,Z);return X.push(E),Ht(X).then(()=>{X=[];for(const w of r.list())X.push(ms(w,L,Z));return X.push(E),Ht(X)}).then(()=>{X=xc(Ee,"beforeRouteUpdate",L,Z);for(const w of Ee)w.updateGuards.forEach(k=>{X.push(ms(k,L,Z))});return X.push(E),Ht(X)}).then(()=>{X=[];for(const w of Ve)if(w.beforeEnter)if(vn(w.beforeEnter))for(const k of w.beforeEnter)X.push(ms(k,L,Z));else X.push(ms(w.beforeEnter,L,Z));return X.push(E),Ht(X)}).then(()=>(L.matched.forEach(w=>w.enterCallbacks={}),X=xc(Ve,"beforeRouteEnter",L,Z,v),X.push(E),Ht(X))).then(()=>{X=[];for(const w of o.list())X.push(ms(w,L,Z));return X.push(E),Ht(X)}).catch(w=>jn(w,8)?w:Promise.reject(w))}function C(L,Z,X){a.list().forEach(ee=>v(()=>ee(L,Z,X)))}function P(L,Z,X,ee,Ee){const Ve=O(L,Z);if(Ve)return Ve;const E=Z===us,w=bi?history.state:{};X&&(ee||E?i.replace(L.fullPath,ke({scroll:E&&w&&w.scroll},Ee)):i.push(L.fullPath,Ee)),c.value=L,nn(L,Z,X,E),cn()}let A;function pt(){A||(A=i.listen((L,Z,X)=>{if(!An.listening)return;const ee=M(L),Ee=G(ee);if(Ee){I(ke(Ee,{replace:!0,force:!0}),ee).catch(qr);return}u=ee;const Ve=c.value;bi&&tA(wp(Ve.fullPath,X.delta),Dl()),b(ee,Ve).catch(E=>jn(E,12)?E:jn(E,2)?(I(ke(U(E.to),{force:!0}),ee).then(w=>{jn(w,20)&&!X.delta&&X.type===po.pop&&i.go(-1,!1)}).catch(qr),Promise.reject()):(X.delta&&i.go(-X.delta,!1),_e(E,ee,Ve))).then(E=>{E=E||P(ee,Ve,!1),E&&(X.delta&&!jn(E,8)?i.go(-X.delta,!1):X.type===po.pop&&jn(E,20)&&i.go(-1,!1)),C(ee,Ve,E)}).catch(qr)}))}let jt=br(),Ue=br(),he;function _e(L,Z,X){cn(L);const ee=Ue.list();return ee.length?ee.forEach(Ee=>Ee(L,Z,X)):console.error(L),Promise.reject(L)}function zt(){return he&&c.value!==us?Promise.resolve():new Promise((L,Z)=>{jt.add([L,Z])})}function cn(L){return he||(he=!L,pt(),jt.list().forEach(([Z,X])=>L?X(L):Z()),jt.reset()),L}function nn(L,Z,X,ee){const{scrollBehavior:Ee}=t;if(!bi||!Ee)return Promise.resolve();const Ve=!X&&nA(wp(L.fullPath,0))||(ee||!X)&&history.state&&history.state.scroll||null;return Rl().then(()=>Ee(L,Z,Ve)).then(E=>E&&eA(E)).catch(E=>_e(E,L,Z))}const Ge=L=>i.go(L);let Qe;const rs=new Set,An={currentRoute:c,listening:!0,addRoute:_,removeRoute:T,clearRoutes:e.clearRoutes,hasRoute:S,getRoutes:R,resolve:M,options:t,push:x,replace:F,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Ue.add,isReady:zt,install(L){const Z=this;L.component("RouterLink",zr),L.component("RouterView",py),L.config.globalProperties.$router=Z,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>ce(c)}),bi&&!Qe&&c.value===us&&(Qe=!0,x(i.location).catch(Ee=>{}));const X={};for(const Ee in us)Object.defineProperty(X,Ee,{get:()=>c.value[Ee],enumerable:!0});L.provide(kh,Z),L.provide(Dh,rg(X)),L.provide(yu,c);const ee=L.unmount;rs.add(L),L.unmount=function(){rs.delete(L),rs.size<1&&(u=us,A&&A(),A=null,c.value=us,Qe=!1,he=!1),ee()}}};function Ht(L){return L.reduce((Z,X)=>Z.then(()=>v(X)),Promise.resolve())}return An}function NA(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(u=>ji(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>ji(u,c))||i.push(c))}return[n,s,i]}function kA(t){return Jt(Dh)}const DA={class:"greetings"},OA={class:"title"},xA=In({__name:"HeaderMessage",props:{msg:{}},setup(t){const e=t;return(n,s)=>(Ae(),Xe("div",DA,[ue("h1",OA,Qn(e.msg),1)]))}}),ko=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},MA=ko(xA,[["__scopeId","data-v-9e4b7a2c"]]),VA={class:"app-header"},LA={class:"app-header__wrapper"},FA={class:"app-header__text-wrapper"},UA={class:"app-header__nav-wrapper"},BA=In({__name:"App",setup(t){return(e,n)=>(Ae(),Xe(Bt,null,[ue("header",VA,[ue("div",LA,[n[0]||(n[0]=ue("img",{alt:"Ryan Family Crest",class:"logo",src:PI,width:"125",height:"125"},null,-1)),ue("div",FA,[qe(MA,{msg:"Ryan Fam"})])]),ue("div",UA,[ue("nav",null,[qe(ce(zr),{to:"/bulletin"},{default:Zs(()=>n[1]||(n[1]=[ba("Bulletin")])),_:1}),qe(ce(zr),{to:"/calendar"},{default:Zs(()=>n[2]||(n[2]=[ba("Calendar")])),_:1}),qe(ce(zr),{to:"/about"},{default:Zs(()=>n[3]||(n[3]=[ba("About")])),_:1})])])]),qe(ce(py))],64))}}),$A=ko(BA,[["__scopeId","data-v-ab0a7410"]]),jA="modulepreload",HA=function(t){return"https://www.ryan-fam.com/"+t},Lp={},Fp=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=HA(c),c in Lp)return;Lp[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":jA,u||(f.as="script"),f.crossOrigin="",f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),u)return new Promise((m,_)=>{f.addEventListener("load",m),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};let WA=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");var Up={};/**
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
 */const my={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const Y=function(t,e){if(!t)throw tr(e)},tr=function(t){return new Error("Firebase Database ("+my.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const _y=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},qA=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ol={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,h=r>>2,f=(r&3)<<4|a>>4;let m=(a&15)<<2|u>>6,_=u&63;c||(_=64,o||(m=64)),s.push(n[h],n[f],n[m],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_y(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||u==null||f==null)throw new KA;const m=r<<2|a>>4;if(s.push(m),u!==64){const _=a<<4&240|u>>2;if(s.push(_),f!==64){const T=u<<6&192|f;s.push(T)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class KA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gy=function(t){const e=_y(t);return Ol.encodeByteArray(e,!0)},Wa=function(t){return gy(t).replace(/\./g,"")},qa=function(t){try{return Ol.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function zA(t){return yy(void 0,t)}function yy(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!GA(n)||(t[n]=yy(t[n],e[n]));return t}function GA(t){return t!=="__proto__"}/**
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
 */function QA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const YA=()=>QA().__FIREBASE_DEFAULTS__,XA=()=>{if(typeof process>"u"||typeof Up>"u")return;const t=Up.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},JA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qa(t[1]);return e&&JSON.parse(e)},xl=()=>{try{return YA()||XA()||JA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ZA=t=>{var e,n;return(n=(e=xl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},eb=t=>{const e=ZA(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},vy=()=>{var t;return(t=xl())===null||t===void 0?void 0:t.config},tb=t=>{var e;return(e=xl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class mo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function nb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Wa(JSON.stringify(n)),Wa(JSON.stringify(o)),""].join(".")}/**
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
 */function En(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Oh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(En())}function sb(){var t;const e=(t=xl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ib(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ey(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ty(){return my.NODE_ADMIN===!0}function ob(){return!sb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function wy(){try{return typeof indexedDB=="object"}catch{return!1}}function ab(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const lb="FirebaseError";class ss extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=lb,Object.setPrototypeOf(this,ss.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nr.prototype.create)}}class nr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?cb(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ss(i,a,s)}}function cb(t,e){return t.replace(ub,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ub=/\{\$([^}]+)}/g;/**
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
 */function _o(t){return JSON.parse(t)}function yt(t){return JSON.stringify(t)}/**
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
 */const Iy=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=_o(qa(r[0])||""),n=_o(qa(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},hb=function(t){const e=Iy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},db=function(t){const e=Iy(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function is(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Wi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Bp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ka(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function vu(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if($p(r)&&$p(o)){if(!vu(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function $p(t){return t!==null&&typeof t=="object"}/**
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
 */function xh(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class fb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)s[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,h;for(let f=0;f<80;f++){f<40?f<20?(u=a^r&(o^a),h=1518500249):(u=r^o^a,h=1859775393):f<60?(u=r&o|a&(r|o),h=2400959708):(u=r^o^a,h=3395469782);const m=(i<<5|i>>>27)+u+c+h+s[f]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function pb(t,e){const n=new mb(t,e);return n.subscribe.bind(n)}class mb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");_b(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Mc),i.error===void 0&&(i.error=Mc),i.complete===void 0&&(i.complete=Mc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _b(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Mc(){}function gb(t,e){return`${t} failed: ${e} argument `}/**
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
 */const yb=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,Y(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ml=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Kt(t){return t&&t._delegate?t._delegate:t}class Tn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ks="[DEFAULT]";/**
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
 */class vb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new mo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Tb(e))try{this.getOrInitializeService({instanceIdentifier:Ks})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ks){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ks){return this.instances.has(e)}getOptions(e=Ks){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Eb(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ks){return this.component?this.component.multipleInstances?e:Ks:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Eb(t){return t===Ks?void 0:t}function Tb(t){return t.instantiationMode==="EAGER"}/**
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
 */class wb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const Ib={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},Ab=ge.INFO,bb={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},Rb=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=bb[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Do{constructor(e){this.name=e,this._logLevel=Ab,this._logHandler=Rb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ib[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const Cb=(t,e)=>e.some(n=>t instanceof n);let jp,Hp;function Sb(){return jp||(jp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pb(){return Hp||(Hp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ay=new WeakMap,Eu=new WeakMap,by=new WeakMap,Vc=new WeakMap,Mh=new WeakMap;function Nb(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(As(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ay.set(n,t)}).catch(()=>{}),Mh.set(e,t),e}function kb(t){if(Eu.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Eu.set(t,e)}let Tu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Eu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||by.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return As(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Db(t){Tu=t(Tu)}function Ob(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Lc(this),e,...n);return by.set(s,e.sort?e.sort():[e]),As(s)}:Pb().includes(t)?function(...e){return t.apply(Lc(this),e),As(Ay.get(this))}:function(...e){return As(t.apply(Lc(this),e))}}function xb(t){return typeof t=="function"?Ob(t):(t instanceof IDBTransaction&&kb(t),Cb(t,Sb())?new Proxy(t,Tu):t)}function As(t){if(t instanceof IDBRequest)return Nb(t);if(Vc.has(t))return Vc.get(t);const e=xb(t);return e!==t&&(Vc.set(t,e),Mh.set(e,t)),e}const Lc=t=>Mh.get(t);function Mb(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=As(o);return s&&o.addEventListener("upgradeneeded",c=>{s(As(o.result),c.oldVersion,c.newVersion,As(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Vb=["get","getKey","getAll","getAllKeys","count"],Lb=["put","add","delete","clear"],Fc=new Map;function Wp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fc.get(e))return Fc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Lb.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Vb.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return Fc.set(e,r),r}Db(t=>({...t,get:(e,n,s)=>Wp(e,n)||t.get(e,n,s),has:(e,n)=>!!Wp(e,n)||t.has(e,n)}));/**
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
 */class Fb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ub(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ub(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wu="@firebase/app",qp="0.10.13";/**
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
 */const Zn=new Do("@firebase/app"),Bb="@firebase/app-compat",$b="@firebase/analytics-compat",jb="@firebase/analytics",Hb="@firebase/app-check-compat",Wb="@firebase/app-check",qb="@firebase/auth",Kb="@firebase/auth-compat",zb="@firebase/database",Gb="@firebase/data-connect",Qb="@firebase/database-compat",Yb="@firebase/functions",Xb="@firebase/functions-compat",Jb="@firebase/installations",Zb="@firebase/installations-compat",eR="@firebase/messaging",tR="@firebase/messaging-compat",nR="@firebase/performance",sR="@firebase/performance-compat",iR="@firebase/remote-config",rR="@firebase/remote-config-compat",oR="@firebase/storage",aR="@firebase/storage-compat",lR="@firebase/firestore",cR="@firebase/vertexai-preview",uR="@firebase/firestore-compat",hR="firebase",dR="10.14.1";/**
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
 */const Iu="[DEFAULT]",fR={[wu]:"fire-core",[Bb]:"fire-core-compat",[jb]:"fire-analytics",[$b]:"fire-analytics-compat",[Wb]:"fire-app-check",[Hb]:"fire-app-check-compat",[qb]:"fire-auth",[Kb]:"fire-auth-compat",[zb]:"fire-rtdb",[Gb]:"fire-data-connect",[Qb]:"fire-rtdb-compat",[Yb]:"fire-fn",[Xb]:"fire-fn-compat",[Jb]:"fire-iid",[Zb]:"fire-iid-compat",[eR]:"fire-fcm",[tR]:"fire-fcm-compat",[nR]:"fire-perf",[sR]:"fire-perf-compat",[iR]:"fire-rc",[rR]:"fire-rc-compat",[oR]:"fire-gcs",[aR]:"fire-gcs-compat",[lR]:"fire-fst",[uR]:"fire-fst-compat",[cR]:"fire-vertex","fire-js":"fire-js",[hR]:"fire-js-all"};/**
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
 */const za=new Map,pR=new Map,Au=new Map;function Kp(t,e){try{t.container.addComponent(e)}catch(n){Zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xn(t){const e=t.name;if(Au.has(e))return Zn.debug(`There were multiple attempts to register component ${e}.`),!1;Au.set(e,t);for(const n of za.values())Kp(n,t);for(const n of pR.values())Kp(n,t);return!0}function mR(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Dr(t){return t.settings!==void 0}/**
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
 */const _R={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bs=new nr("app","Firebase",_R);/**
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
 */class gR{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bs.create("app-deleted",{appName:this._name})}}/**
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
 */const sr=dR;function Ry(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Iu,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw bs.create("bad-app-name",{appName:String(i)});if(n||(n=vy()),!n)throw bs.create("no-options");const r=za.get(i);if(r){if(vu(n,r.options)&&vu(s,r.config))return r;throw bs.create("duplicate-app",{appName:i})}const o=new wb(i);for(const c of Au.values())o.addComponent(c);const a=new gR(n,s,o);return za.set(i,a),a}function Cy(t=Iu){const e=za.get(t);if(!e&&t===Iu&&vy())return Ry();if(!e)throw bs.create("no-app",{appName:t});return e}function Zt(t,e,n){var s;let i=(s=fR[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zn.warn(a.join(" "));return}xn(new Tn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const yR="firebase-heartbeat-database",vR=1,go="firebase-heartbeat-store";let Uc=null;function Sy(){return Uc||(Uc=Mb(yR,vR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(go)}catch(n){console.warn(n)}}}}).catch(t=>{throw bs.create("idb-open",{originalErrorMessage:t.message})})),Uc}async function ER(t){try{const n=(await Sy()).transaction(go),s=await n.objectStore(go).get(Py(t));return await n.done,s}catch(e){if(e instanceof ss)Zn.warn(e.message);else{const n=bs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zn.warn(n.message)}}}async function zp(t,e){try{const s=(await Sy()).transaction(go,"readwrite");await s.objectStore(go).put(e,Py(t)),await s.done}catch(n){if(n instanceof ss)Zn.warn(n.message);else{const s=bs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zn.warn(s.message)}}}function Py(t){return`${t.name}!${t.options.appId}`}/**
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
 */const TR=1024,wR=30*24*60*60*1e3;class IR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bR(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Gp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=wR}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Zn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gp(),{heartbeatsToSend:s,unsentEntries:i}=AR(this._heartbeatsCache.heartbeats),r=Wa(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Zn.warn(n),""}}}function Gp(){return new Date().toISOString().substring(0,10)}function AR(t,e=TR){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Qp(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class bR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wy()?ab().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ER(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Qp(t){return Wa(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function RR(t){xn(new Tn("platform-logger",e=>new Fb(e),"PRIVATE")),xn(new Tn("heartbeat",e=>new IR(e),"PRIVATE")),Zt(wu,qp,t),Zt(wu,qp,"esm2017"),Zt("fire-js","")}RR("");var CR="firebase",SR="10.14.1";/**
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
 */Zt(CR,SR,"app");var Yp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ti,Ny;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function v(){}v.prototype=y.prototype,I.D=y.prototype,I.prototype=new v,I.prototype.constructor=I,I.C=function(b,C,P){for(var A=Array(arguments.length-2),pt=2;pt<arguments.length;pt++)A[pt-2]=arguments[pt];return y.prototype[C].apply(b,A)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,y,v){v||(v=0);var b=Array(16);if(typeof y=="string")for(var C=0;16>C;++C)b[C]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(C=0;16>C;++C)b[C]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=I.g[0],v=I.g[1],C=I.g[2];var P=I.g[3],A=y+(P^v&(C^P))+b[0]+3614090360&4294967295;y=v+(A<<7&4294967295|A>>>25),A=P+(C^y&(v^C))+b[1]+3905402710&4294967295,P=y+(A<<12&4294967295|A>>>20),A=C+(v^P&(y^v))+b[2]+606105819&4294967295,C=P+(A<<17&4294967295|A>>>15),A=v+(y^C&(P^y))+b[3]+3250441966&4294967295,v=C+(A<<22&4294967295|A>>>10),A=y+(P^v&(C^P))+b[4]+4118548399&4294967295,y=v+(A<<7&4294967295|A>>>25),A=P+(C^y&(v^C))+b[5]+1200080426&4294967295,P=y+(A<<12&4294967295|A>>>20),A=C+(v^P&(y^v))+b[6]+2821735955&4294967295,C=P+(A<<17&4294967295|A>>>15),A=v+(y^C&(P^y))+b[7]+4249261313&4294967295,v=C+(A<<22&4294967295|A>>>10),A=y+(P^v&(C^P))+b[8]+1770035416&4294967295,y=v+(A<<7&4294967295|A>>>25),A=P+(C^y&(v^C))+b[9]+2336552879&4294967295,P=y+(A<<12&4294967295|A>>>20),A=C+(v^P&(y^v))+b[10]+4294925233&4294967295,C=P+(A<<17&4294967295|A>>>15),A=v+(y^C&(P^y))+b[11]+2304563134&4294967295,v=C+(A<<22&4294967295|A>>>10),A=y+(P^v&(C^P))+b[12]+1804603682&4294967295,y=v+(A<<7&4294967295|A>>>25),A=P+(C^y&(v^C))+b[13]+4254626195&4294967295,P=y+(A<<12&4294967295|A>>>20),A=C+(v^P&(y^v))+b[14]+2792965006&4294967295,C=P+(A<<17&4294967295|A>>>15),A=v+(y^C&(P^y))+b[15]+1236535329&4294967295,v=C+(A<<22&4294967295|A>>>10),A=y+(C^P&(v^C))+b[1]+4129170786&4294967295,y=v+(A<<5&4294967295|A>>>27),A=P+(v^C&(y^v))+b[6]+3225465664&4294967295,P=y+(A<<9&4294967295|A>>>23),A=C+(y^v&(P^y))+b[11]+643717713&4294967295,C=P+(A<<14&4294967295|A>>>18),A=v+(P^y&(C^P))+b[0]+3921069994&4294967295,v=C+(A<<20&4294967295|A>>>12),A=y+(C^P&(v^C))+b[5]+3593408605&4294967295,y=v+(A<<5&4294967295|A>>>27),A=P+(v^C&(y^v))+b[10]+38016083&4294967295,P=y+(A<<9&4294967295|A>>>23),A=C+(y^v&(P^y))+b[15]+3634488961&4294967295,C=P+(A<<14&4294967295|A>>>18),A=v+(P^y&(C^P))+b[4]+3889429448&4294967295,v=C+(A<<20&4294967295|A>>>12),A=y+(C^P&(v^C))+b[9]+568446438&4294967295,y=v+(A<<5&4294967295|A>>>27),A=P+(v^C&(y^v))+b[14]+3275163606&4294967295,P=y+(A<<9&4294967295|A>>>23),A=C+(y^v&(P^y))+b[3]+4107603335&4294967295,C=P+(A<<14&4294967295|A>>>18),A=v+(P^y&(C^P))+b[8]+1163531501&4294967295,v=C+(A<<20&4294967295|A>>>12),A=y+(C^P&(v^C))+b[13]+2850285829&4294967295,y=v+(A<<5&4294967295|A>>>27),A=P+(v^C&(y^v))+b[2]+4243563512&4294967295,P=y+(A<<9&4294967295|A>>>23),A=C+(y^v&(P^y))+b[7]+1735328473&4294967295,C=P+(A<<14&4294967295|A>>>18),A=v+(P^y&(C^P))+b[12]+2368359562&4294967295,v=C+(A<<20&4294967295|A>>>12),A=y+(v^C^P)+b[5]+4294588738&4294967295,y=v+(A<<4&4294967295|A>>>28),A=P+(y^v^C)+b[8]+2272392833&4294967295,P=y+(A<<11&4294967295|A>>>21),A=C+(P^y^v)+b[11]+1839030562&4294967295,C=P+(A<<16&4294967295|A>>>16),A=v+(C^P^y)+b[14]+4259657740&4294967295,v=C+(A<<23&4294967295|A>>>9),A=y+(v^C^P)+b[1]+2763975236&4294967295,y=v+(A<<4&4294967295|A>>>28),A=P+(y^v^C)+b[4]+1272893353&4294967295,P=y+(A<<11&4294967295|A>>>21),A=C+(P^y^v)+b[7]+4139469664&4294967295,C=P+(A<<16&4294967295|A>>>16),A=v+(C^P^y)+b[10]+3200236656&4294967295,v=C+(A<<23&4294967295|A>>>9),A=y+(v^C^P)+b[13]+681279174&4294967295,y=v+(A<<4&4294967295|A>>>28),A=P+(y^v^C)+b[0]+3936430074&4294967295,P=y+(A<<11&4294967295|A>>>21),A=C+(P^y^v)+b[3]+3572445317&4294967295,C=P+(A<<16&4294967295|A>>>16),A=v+(C^P^y)+b[6]+76029189&4294967295,v=C+(A<<23&4294967295|A>>>9),A=y+(v^C^P)+b[9]+3654602809&4294967295,y=v+(A<<4&4294967295|A>>>28),A=P+(y^v^C)+b[12]+3873151461&4294967295,P=y+(A<<11&4294967295|A>>>21),A=C+(P^y^v)+b[15]+530742520&4294967295,C=P+(A<<16&4294967295|A>>>16),A=v+(C^P^y)+b[2]+3299628645&4294967295,v=C+(A<<23&4294967295|A>>>9),A=y+(C^(v|~P))+b[0]+4096336452&4294967295,y=v+(A<<6&4294967295|A>>>26),A=P+(v^(y|~C))+b[7]+1126891415&4294967295,P=y+(A<<10&4294967295|A>>>22),A=C+(y^(P|~v))+b[14]+2878612391&4294967295,C=P+(A<<15&4294967295|A>>>17),A=v+(P^(C|~y))+b[5]+4237533241&4294967295,v=C+(A<<21&4294967295|A>>>11),A=y+(C^(v|~P))+b[12]+1700485571&4294967295,y=v+(A<<6&4294967295|A>>>26),A=P+(v^(y|~C))+b[3]+2399980690&4294967295,P=y+(A<<10&4294967295|A>>>22),A=C+(y^(P|~v))+b[10]+4293915773&4294967295,C=P+(A<<15&4294967295|A>>>17),A=v+(P^(C|~y))+b[1]+2240044497&4294967295,v=C+(A<<21&4294967295|A>>>11),A=y+(C^(v|~P))+b[8]+1873313359&4294967295,y=v+(A<<6&4294967295|A>>>26),A=P+(v^(y|~C))+b[15]+4264355552&4294967295,P=y+(A<<10&4294967295|A>>>22),A=C+(y^(P|~v))+b[6]+2734768916&4294967295,C=P+(A<<15&4294967295|A>>>17),A=v+(P^(C|~y))+b[13]+1309151649&4294967295,v=C+(A<<21&4294967295|A>>>11),A=y+(C^(v|~P))+b[4]+4149444226&4294967295,y=v+(A<<6&4294967295|A>>>26),A=P+(v^(y|~C))+b[11]+3174756917&4294967295,P=y+(A<<10&4294967295|A>>>22),A=C+(y^(P|~v))+b[2]+718787259&4294967295,C=P+(A<<15&4294967295|A>>>17),A=v+(P^(C|~y))+b[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(C+(A<<21&4294967295|A>>>11))&4294967295,I.g[2]=I.g[2]+C&4294967295,I.g[3]=I.g[3]+P&4294967295}s.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var v=y-this.blockSize,b=this.B,C=this.h,P=0;P<y;){if(C==0)for(;P<=v;)i(this,I,P),P+=this.blockSize;if(typeof I=="string"){for(;P<y;)if(b[C++]=I.charCodeAt(P++),C==this.blockSize){i(this,b),C=0;break}}else for(;P<y;)if(b[C++]=I[P++],C==this.blockSize){i(this,b),C=0;break}}this.h=C,this.o+=y},s.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var v=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=v&255,v/=256;for(this.u(I),I=Array(16),y=v=0;4>y;++y)for(var b=0;32>b;b+=8)I[v++]=this.g[y]>>>b&255;return I};function r(I,y){var v=a;return Object.prototype.hasOwnProperty.call(v,I)?v[I]:v[I]=y(I)}function o(I,y){this.h=y;for(var v=[],b=!0,C=I.length-1;0<=C;C--){var P=I[C]|0;b&&P==y||(v[C]=P,b=!1)}this.g=v}var a={};function c(I){return-128<=I&&128>I?r(I,function(y){return new o([y|0],0>y?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return f;if(0>I)return S(u(-I));for(var y=[],v=1,b=0;I>=v;b++)y[b]=I/v|0,v*=4294967296;return new o(y,0)}function h(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return S(h(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(y,8)),b=f,C=0;C<I.length;C+=8){var P=Math.min(8,I.length-C),A=parseInt(I.substring(C,C+P),y);8>P?(P=u(Math.pow(y,P)),b=b.j(P).add(u(A))):(b=b.j(v),b=b.add(u(A)))}return b}var f=c(0),m=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(R(this))return-S(this).m();for(var I=0,y=1,v=0;v<this.g.length;v++){var b=this.i(v);I+=(0<=b?b:4294967296+b)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(T(this))return"0";if(R(this))return"-"+S(this).toString(I);for(var y=u(Math.pow(I,6)),v=this,b="";;){var C=x(v,y).g;v=M(v,C.j(y));var P=((0<v.g.length?v.g[0]:v.h)>>>0).toString(I);if(v=C,T(v))return P+b;for(;6>P.length;)P="0"+P;b=P+b}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function T(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function R(I){return I.h==-1}t.l=function(I){return I=M(this,I),R(I)?-1:T(I)?0:1};function S(I){for(var y=I.g.length,v=[],b=0;b<y;b++)v[b]=~I.g[b];return new o(v,~I.h).add(m)}t.abs=function(){return R(this)?S(this):this},t.add=function(I){for(var y=Math.max(this.g.length,I.g.length),v=[],b=0,C=0;C<=y;C++){var P=b+(this.i(C)&65535)+(I.i(C)&65535),A=(P>>>16)+(this.i(C)>>>16)+(I.i(C)>>>16);b=A>>>16,P&=65535,A&=65535,v[C]=A<<16|P}return new o(v,v[v.length-1]&-2147483648?-1:0)};function M(I,y){return I.add(S(y))}t.j=function(I){if(T(this)||T(I))return f;if(R(this))return R(I)?S(this).j(S(I)):S(S(this).j(I));if(R(I))return S(this.j(S(I)));if(0>this.l(_)&&0>I.l(_))return u(this.m()*I.m());for(var y=this.g.length+I.g.length,v=[],b=0;b<2*y;b++)v[b]=0;for(b=0;b<this.g.length;b++)for(var C=0;C<I.g.length;C++){var P=this.i(b)>>>16,A=this.i(b)&65535,pt=I.i(C)>>>16,jt=I.i(C)&65535;v[2*b+2*C]+=A*jt,U(v,2*b+2*C),v[2*b+2*C+1]+=P*jt,U(v,2*b+2*C+1),v[2*b+2*C+1]+=A*pt,U(v,2*b+2*C+1),v[2*b+2*C+2]+=P*pt,U(v,2*b+2*C+2)}for(b=0;b<y;b++)v[b]=v[2*b+1]<<16|v[2*b];for(b=y;b<2*y;b++)v[b]=0;return new o(v,0)};function U(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function O(I,y){this.g=I,this.h=y}function x(I,y){if(T(y))throw Error("division by zero");if(T(I))return new O(f,f);if(R(I))return y=x(S(I),y),new O(S(y.g),S(y.h));if(R(y))return y=x(I,S(y)),new O(S(y.g),y.h);if(30<I.g.length){if(R(I)||R(y))throw Error("slowDivide_ only works with positive integers.");for(var v=m,b=y;0>=b.l(I);)v=F(v),b=F(b);var C=G(v,1),P=G(b,1);for(b=G(b,2),v=G(v,2);!T(b);){var A=P.add(b);0>=A.l(I)&&(C=C.add(v),P=A),b=G(b,1),v=G(v,1)}return y=M(I,C.j(y)),new O(C,y)}for(C=f;0<=I.l(y);){for(v=Math.max(1,Math.floor(I.m()/y.m())),b=Math.ceil(Math.log(v)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),P=u(v),A=P.j(y);R(A)||0<A.l(I);)v-=b,P=u(v),A=P.j(y);T(P)&&(P=m),C=C.add(P),I=M(I,A)}return new O(C,I)}t.A=function(I){return x(this,I).h},t.and=function(I){for(var y=Math.max(this.g.length,I.g.length),v=[],b=0;b<y;b++)v[b]=this.i(b)&I.i(b);return new o(v,this.h&I.h)},t.or=function(I){for(var y=Math.max(this.g.length,I.g.length),v=[],b=0;b<y;b++)v[b]=this.i(b)|I.i(b);return new o(v,this.h|I.h)},t.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),v=[],b=0;b<y;b++)v[b]=this.i(b)^I.i(b);return new o(v,this.h^I.h)};function F(I){for(var y=I.g.length+1,v=[],b=0;b<y;b++)v[b]=I.i(b)<<1|I.i(b-1)>>>31;return new o(v,I.h)}function G(I,y){var v=y>>5;y%=32;for(var b=I.g.length-v,C=[],P=0;P<b;P++)C[P]=0<y?I.i(P+v)>>>y|I.i(P+v+1)<<32-y:I.i(P+v);return new o(C,I.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Ny=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,ti=o}).apply(typeof Yp<"u"?Yp:typeof self<"u"?self:typeof window<"u"?window:{});var da=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ky,Or,Dy,Ca,bu,Oy,xy,My;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,p){return l==Array.prototype||l==Object.prototype||(l[d]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof da=="object"&&da];for(var d=0;d<l.length;++d){var p=l[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var s=n(this);function i(l,d){if(d)e:{var p=s;l=l.split(".");for(var g=0;g<l.length-1;g++){var N=l[g];if(!(N in p))break e;p=p[N]}l=l[l.length-1],g=p[l],d=d(g),d!=g&&d!=null&&e(p,l,{configurable:!0,writable:!0,value:d})}}function r(l,d){l instanceof String&&(l+="");var p=0,g=!1,N={next:function(){if(!g&&p<l.length){var D=p++;return{value:d(D,l[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(l){return l||function(){return r(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function u(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,p){return l.call.apply(l.bind,arguments)}function f(l,d,p){if(!l)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,g),l.apply(d,N)}}return function(){return l.apply(d,arguments)}}function m(l,d,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function _(l,d){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),l.apply(this,g)}}function T(l,d){function p(){}p.prototype=d.prototype,l.aa=d.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(g,N,D){for(var z=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)z[Le-2]=arguments[Le];return d.prototype[N].apply(g,z)}}function R(l){const d=l.length;if(0<d){const p=Array(d);for(let g=0;g<d;g++)p[g]=l[g];return p}return[]}function S(l,d){for(let p=1;p<arguments.length;p++){const g=arguments[p];if(c(g)){const N=l.length||0,D=g.length||0;l.length=N+D;for(let z=0;z<D;z++)l[N+z]=g[z]}else l.push(g)}}class M{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function U(l){return/^[\s\xa0]*$/.test(l)}function O(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function x(l){return x[" "](l),l}x[" "]=function(){};var F=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function G(l,d,p){for(const g in l)d.call(p,l[g],g,l)}function I(l,d){for(const p in l)d.call(void 0,l[p],p,l)}function y(l){const d={};for(const p in l)d[p]=l[p];return d}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(l,d){let p,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(p in g)l[p]=g[p];for(let D=0;D<v.length;D++)p=v[D],Object.prototype.hasOwnProperty.call(g,p)&&(l[p]=g[p])}}function C(l){var d=1;l=l.split(":");const p=[];for(;0<d&&l.length;)p.push(l.shift()),d--;return l.length&&p.push(l.join(":")),p}function P(l){a.setTimeout(()=>{throw l},0)}function A(){var l=zt;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class pt{constructor(){this.h=this.g=null}add(d,p){const g=jt.get();g.set(d,p),this.h?this.h.next=g:this.g=g,this.h=g}}var jt=new M(()=>new Ue,l=>l.reset());class Ue{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let he,_e=!1,zt=new pt,cn=()=>{const l=a.Promise.resolve(void 0);he=()=>{l.then(nn)}};var nn=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(p){P(p)}var d=jt;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}_e=!1};function Ge(){this.s=this.s,this.C=this.C}Ge.prototype.s=!1,Ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Qe(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}Qe.prototype.h=function(){this.defaultPrevented=!0};var rs=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return l}();function An(l,d){if(Qe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,g=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(F){e:{try{x(d.nodeName);var N=!0;break e}catch{}N=!1}N||(d=null)}}else p=="mouseover"?d=l.fromElement:p=="mouseout"&&(d=l.toElement);this.relatedTarget=d,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ht[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&An.aa.h.call(this)}}T(An,Qe);var Ht={2:"touch",3:"pen",4:"mouse"};An.prototype.h=function(){An.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var L="closure_listenable_"+(1e6*Math.random()|0),Z=0;function X(l,d,p,g,N){this.listener=l,this.proxy=null,this.src=d,this.type=p,this.capture=!!g,this.ha=N,this.key=++Z,this.da=this.fa=!1}function ee(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ee(l){this.src=l,this.g={},this.h=0}Ee.prototype.add=function(l,d,p,g,N){var D=l.toString();l=this.g[D],l||(l=this.g[D]=[],this.h++);var z=E(l,d,g,N);return-1<z?(d=l[z],p||(d.fa=!1)):(d=new X(d,this.src,D,!!g,N),d.fa=p,l.push(d)),d};function Ve(l,d){var p=d.type;if(p in l.g){var g=l.g[p],N=Array.prototype.indexOf.call(g,d,void 0),D;(D=0<=N)&&Array.prototype.splice.call(g,N,1),D&&(ee(d),l.g[p].length==0&&(delete l.g[p],l.h--))}}function E(l,d,p,g){for(var N=0;N<l.length;++N){var D=l[N];if(!D.da&&D.listener==d&&D.capture==!!p&&D.ha==g)return N}return-1}var w="closure_lm_"+(1e6*Math.random()|0),k={};function B(l,d,p,g,N){if(Array.isArray(d)){for(var D=0;D<d.length;D++)B(l,d[D],p,g,N);return null}return p=se(p),l&&l[L]?l.K(d,p,u(g)?!!g.capture:!!g,N):V(l,d,p,!1,g,N)}function V(l,d,p,g,N,D){if(!d)throw Error("Invalid event type");var z=u(N)?!!N.capture:!!N,Le=re(l);if(Le||(l[w]=Le=new Ee(l)),p=Le.add(d,p,g,z,D),p.proxy)return p;if(g=H(),p.proxy=g,g.src=l,g.listener=p,l.addEventListener)rs||(N=z),N===void 0&&(N=!1),l.addEventListener(d.toString(),g,N);else if(l.attachEvent)l.attachEvent(q(d.toString()),g);else if(l.addListener&&l.removeListener)l.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function H(){function l(p){return d.call(l.src,l.listener,p)}const d=W;return l}function Q(l,d,p,g,N){if(Array.isArray(d))for(var D=0;D<d.length;D++)Q(l,d[D],p,g,N);else g=u(g)?!!g.capture:!!g,p=se(p),l&&l[L]?(l=l.i,d=String(d).toString(),d in l.g&&(D=l.g[d],p=E(D,p,g,N),-1<p&&(ee(D[p]),Array.prototype.splice.call(D,p,1),D.length==0&&(delete l.g[d],l.h--)))):l&&(l=re(l))&&(d=l.g[d.toString()],l=-1,d&&(l=E(d,p,g,N)),(p=-1<l?d[l]:null)&&K(p))}function K(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[L])Ve(d.i,l);else{var p=l.type,g=l.proxy;d.removeEventListener?d.removeEventListener(p,g,l.capture):d.detachEvent?d.detachEvent(q(p),g):d.addListener&&d.removeListener&&d.removeListener(g),(p=re(d))?(Ve(p,l),p.h==0&&(p.src=null,d[w]=null)):ee(l)}}}function q(l){return l in k?k[l]:k[l]="on"+l}function W(l,d){if(l.da)l=!0;else{d=new An(d,this);var p=l.listener,g=l.ha||l.src;l.fa&&K(l),l=p.call(g,d)}return l}function re(l){return l=l[w],l instanceof Ee?l:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function se(l){return typeof l=="function"?l:(l[J]||(l[J]=function(d){return l.handleEvent(d)}),l[J])}function te(){Ge.call(this),this.i=new Ee(this),this.M=this,this.F=null}T(te,Ge),te.prototype[L]=!0,te.prototype.removeEventListener=function(l,d,p,g){Q(this,l,d,p,g)};function le(l,d){var p,g=l.F;if(g)for(p=[];g;g=g.F)p.push(g);if(l=l.M,g=d.type||d,typeof d=="string")d=new Qe(d,l);else if(d instanceof Qe)d.target=d.target||l;else{var N=d;d=new Qe(g,l),b(d,N)}if(N=!0,p)for(var D=p.length-1;0<=D;D--){var z=d.g=p[D];N=Pe(z,g,!0,d)&&N}if(z=d.g=l,N=Pe(z,g,!0,d)&&N,N=Pe(z,g,!1,d)&&N,p)for(D=0;D<p.length;D++)z=d.g=p[D],N=Pe(z,g,!1,d)&&N}te.prototype.N=function(){if(te.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var p=l.g[d],g=0;g<p.length;g++)ee(p[g]);delete l.g[d],l.h--}}this.F=null},te.prototype.K=function(l,d,p,g){return this.i.add(String(l),d,!1,p,g)},te.prototype.L=function(l,d,p,g){return this.i.add(String(l),d,!0,p,g)};function Pe(l,d,p,g){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var N=!0,D=0;D<d.length;++D){var z=d[D];if(z&&!z.da&&z.capture==p){var Le=z.listener,_t=z.ha||z.src;z.fa&&Ve(l.i,z),N=Le.call(_t,g)!==!1&&N}}return N&&!g.defaultPrevented}function be(l,d,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function wt(l){l.g=be(()=>{l.g=null,l.i&&(l.i=!1,wt(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class at extends Ge{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:wt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mt(l){Ge.call(this),this.h=l,this.g={}}T(mt,Ge);var It=[];function os(l){G(l.g,function(d,p){this.g.hasOwnProperty(p)&&K(d)},l),l.g={}}mt.prototype.N=function(){mt.aa.N.call(this),os(this)},mt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mi=a.JSON.stringify,xt=a.JSON.parse,sn=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function _i(){}_i.prototype.h=null;function Wd(l){return l.h||(l.h=l.i())}function qd(){}var ur={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function oc(){Qe.call(this,"d")}T(oc,Qe);function ac(){Qe.call(this,"c")}T(ac,Qe);var Us={},Kd=null;function zo(){return Kd=Kd||new te}Us.La="serverreachability";function zd(l){Qe.call(this,Us.La,l)}T(zd,Qe);function hr(l){const d=zo();le(d,new zd(d))}Us.STAT_EVENT="statevent";function Gd(l,d){Qe.call(this,Us.STAT_EVENT,l),this.stat=d}T(Gd,Qe);function Mt(l){const d=zo();le(d,new Gd(d,l))}Us.Ma="timingevent";function Qd(l,d){Qe.call(this,Us.Ma,l),this.size=d}T(Qd,Qe);function dr(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function fr(){this.g=!0}fr.prototype.xa=function(){this.g=!1};function OT(l,d,p,g,N,D){l.info(function(){if(l.g)if(D)for(var z="",Le=D.split("&"),_t=0;_t<Le.length;_t++){var Re=Le[_t].split("=");if(1<Re.length){var At=Re[0];Re=Re[1];var bt=At.split("_");z=2<=bt.length&&bt[1]=="type"?z+(At+"="+Re+"&"):z+(At+"=redacted&")}}else z=null;else z=D;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+d+`
`+p+`
`+z})}function xT(l,d,p,g,N,D,z){l.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+d+`
`+p+`
`+D+" "+z})}function gi(l,d,p,g){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+VT(l,p)+(g?" "+g:"")})}function MT(l,d){l.info(function(){return"TIMEOUT: "+d})}fr.prototype.info=function(){};function VT(l,d){if(!l.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var g=p[l];if(!(2>g.length)){var N=g[1];if(Array.isArray(N)&&!(1>N.length)){var D=N[0];if(D!="noop"&&D!="stop"&&D!="close")for(var z=1;z<N.length;z++)N[z]=""}}}}return mi(p)}catch{return d}}var Go={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Yd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},lc;function Qo(){}T(Qo,_i),Qo.prototype.g=function(){return new XMLHttpRequest},Qo.prototype.i=function(){return{}},lc=new Qo;function as(l,d,p,g){this.j=l,this.i=d,this.l=p,this.R=g||1,this.U=new mt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Xd}function Xd(){this.i=null,this.g="",this.h=!1}var Jd={},cc={};function uc(l,d,p){l.L=1,l.v=Zo(Un(d)),l.m=p,l.P=!0,Zd(l,null)}function Zd(l,d){l.F=Date.now(),Yo(l),l.A=Un(l.v);var p=l.A,g=l.R;Array.isArray(g)||(g=[String(g)]),pf(p.i,"t",g),l.C=0,p=l.j.J,l.h=new Xd,l.g=Df(l.j,p?d:null,!l.m),0<l.O&&(l.M=new at(m(l.Y,l,l.g),l.O)),d=l.U,p=l.g,g=l.ca;var N="readystatechange";Array.isArray(N)||(N&&(It[0]=N.toString()),N=It);for(var D=0;D<N.length;D++){var z=B(p,N[D],g||d.handleEvent,!1,d.h||d);if(!z)break;d.g[z.key]=z}d=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),hr(),OT(l.i,l.u,l.A,l.l,l.R,l.m)}as.prototype.ca=function(l){l=l.target;const d=this.M;d&&Bn(l)==3?d.j():this.Y(l)},as.prototype.Y=function(l){try{if(l==this.g)e:{const bt=Bn(this.g);var d=this.g.Ba();const Ei=this.g.Z();if(!(3>bt)&&(bt!=3||this.g&&(this.h.h||this.g.oa()||Tf(this.g)))){this.J||bt!=4||d==7||(d==8||0>=Ei?hr(3):hr(2)),hc(this);var p=this.g.Z();this.X=p;t:if(ef(this)){var g=Tf(this.g);l="";var N=g.length,D=Bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Bs(this),pr(this);var z="";break t}this.h.i=new a.TextDecoder}for(d=0;d<N;d++)this.h.h=!0,l+=this.h.i.decode(g[d],{stream:!(D&&d==N-1)});g.length=0,this.h.g+=l,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=p==200,xT(this.i,this.u,this.A,this.l,this.R,bt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Le,_t=this.g;if((Le=_t.g?_t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(Le)){var Re=Le;break t}}Re=null}if(p=Re)gi(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,dc(this,p);else{this.o=!1,this.s=3,Mt(12),Bs(this),pr(this);break e}}if(this.P){p=!0;let un;for(;!this.J&&this.C<z.length;)if(un=LT(this,z),un==cc){bt==4&&(this.s=4,Mt(14),p=!1),gi(this.i,this.l,null,"[Incomplete Response]");break}else if(un==Jd){this.s=4,Mt(15),gi(this.i,this.l,z,"[Invalid Chunk]"),p=!1;break}else gi(this.i,this.l,un,null),dc(this,un);if(ef(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),bt!=4||z.length!=0||this.h.h||(this.s=1,Mt(16),p=!1),this.o=this.o&&p,!p)gi(this.i,this.l,z,"[Invalid Chunked Response]"),Bs(this),pr(this);else if(0<z.length&&!this.W){this.W=!0;var At=this.j;At.g==this&&At.ba&&!At.M&&(At.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),yc(At),At.M=!0,Mt(11))}}else gi(this.i,this.l,z,null),dc(this,z);bt==4&&Bs(this),this.o&&!this.J&&(bt==4?Sf(this.j,this):(this.o=!1,Yo(this)))}else ew(this.g),p==400&&0<z.indexOf("Unknown SID")?(this.s=3,Mt(12)):(this.s=0,Mt(13)),Bs(this),pr(this)}}}catch{}finally{}};function ef(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function LT(l,d){var p=l.C,g=d.indexOf(`
`,p);return g==-1?cc:(p=Number(d.substring(p,g)),isNaN(p)?Jd:(g+=1,g+p>d.length?cc:(d=d.slice(g,g+p),l.C=g+p,d)))}as.prototype.cancel=function(){this.J=!0,Bs(this)};function Yo(l){l.S=Date.now()+l.I,tf(l,l.I)}function tf(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=dr(m(l.ba,l),d)}function hc(l){l.B&&(a.clearTimeout(l.B),l.B=null)}as.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(MT(this.i,this.A),this.L!=2&&(hr(),Mt(17)),Bs(this),this.s=2,pr(this)):tf(this,this.S-l)};function pr(l){l.j.G==0||l.J||Sf(l.j,l)}function Bs(l){hc(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,os(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function dc(l,d){try{var p=l.j;if(p.G!=0&&(p.g==l||fc(p.h,l))){if(!l.K&&fc(p.h,l)&&p.G==3){try{var g=p.Da.g.parse(d)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)ra(p),sa(p);else break e;gc(p),Mt(18)}}else p.za=N[1],0<p.za-p.T&&37500>N[2]&&p.F&&p.v==0&&!p.C&&(p.C=dr(m(p.Za,p),6e3));if(1>=rf(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else js(p,11)}else if((l.K||p.g==l)&&ra(p),!U(d))for(N=p.Da.g.parse(d),d=0;d<N.length;d++){let Re=N[d];if(p.T=Re[0],Re=Re[1],p.G==2)if(Re[0]=="c"){p.K=Re[1],p.ia=Re[2];const At=Re[3];At!=null&&(p.la=At,p.j.info("VER="+p.la));const bt=Re[4];bt!=null&&(p.Aa=bt,p.j.info("SVER="+p.Aa));const Ei=Re[5];Ei!=null&&typeof Ei=="number"&&0<Ei&&(g=1.5*Ei,p.L=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const un=l.g;if(un){const aa=un.g?un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(aa){var D=g.h;D.g||aa.indexOf("spdy")==-1&&aa.indexOf("quic")==-1&&aa.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(pc(D,D.h),D.h=null))}if(g.D){const vc=un.g?un.g.getResponseHeader("X-HTTP-Session-Id"):null;vc&&(g.ya=vc,je(g.I,g.D,vc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),g=p;var z=l;if(g.qa=kf(g,g.J?g.ia:null,g.W),z.K){of(g.h,z);var Le=z,_t=g.L;_t&&(Le.I=_t),Le.B&&(hc(Le),Yo(Le)),g.g=z}else Rf(g);0<p.i.length&&ia(p)}else Re[0]!="stop"&&Re[0]!="close"||js(p,7);else p.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?js(p,7):_c(p):Re[0]!="noop"&&p.l&&p.l.ta(Re),p.v=0)}}hr(4)}catch{}}var FT=class{constructor(l,d){this.g=l,this.map=d}};function nf(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sf(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function rf(l){return l.h?1:l.g?l.g.size:0}function fc(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function pc(l,d){l.g?l.g.add(d):l.h=d}function of(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}nf.prototype.cancel=function(){if(this.i=af(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function af(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const p of l.g.values())d=d.concat(p.D);return d}return R(l.i)}function UT(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var d=[],p=l.length,g=0;g<p;g++)d.push(l[g]);return d}d=[],p=0;for(g in l)d[p++]=l[g];return d}function BT(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var d=[];l=l.length;for(var p=0;p<l;p++)d.push(p);return d}d=[],p=0;for(const g in l)d[p++]=g;return d}}}function lf(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var p=BT(l),g=UT(l),N=g.length,D=0;D<N;D++)d.call(void 0,g[D],p&&p[D],l)}var cf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $T(l,d){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var g=l[p].indexOf("="),N=null;if(0<=g){var D=l[p].substring(0,g);N=l[p].substring(g+1)}else D=l[p];d(D,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function $s(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof $s){this.h=l.h,Xo(this,l.j),this.o=l.o,this.g=l.g,Jo(this,l.s),this.l=l.l;var d=l.i,p=new gr;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),uf(this,p),this.m=l.m}else l&&(d=String(l).match(cf))?(this.h=!1,Xo(this,d[1]||"",!0),this.o=mr(d[2]||""),this.g=mr(d[3]||"",!0),Jo(this,d[4]),this.l=mr(d[5]||"",!0),uf(this,d[6]||"",!0),this.m=mr(d[7]||"")):(this.h=!1,this.i=new gr(null,this.h))}$s.prototype.toString=function(){var l=[],d=this.j;d&&l.push(_r(d,hf,!0),":");var p=this.g;return(p||d=="file")&&(l.push("//"),(d=this.o)&&l.push(_r(d,hf,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(_r(p,p.charAt(0)=="/"?WT:HT,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",_r(p,KT)),l.join("")};function Un(l){return new $s(l)}function Xo(l,d,p){l.j=p?mr(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function Jo(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function uf(l,d,p){d instanceof gr?(l.i=d,zT(l.i,l.h)):(p||(d=_r(d,qT)),l.i=new gr(d,l.h))}function je(l,d,p){l.i.set(d,p)}function Zo(l){return je(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function mr(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function _r(l,d,p){return typeof l=="string"?(l=encodeURI(l).replace(d,jT),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function jT(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var hf=/[#\/\?@]/g,HT=/[#\?:]/g,WT=/[#\?]/g,qT=/[#\?@]/g,KT=/#/g;function gr(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function ls(l){l.g||(l.g=new Map,l.h=0,l.i&&$T(l.i,function(d,p){l.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=gr.prototype,t.add=function(l,d){ls(this),this.i=null,l=yi(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(d),this.h+=1,this};function df(l,d){ls(l),d=yi(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function ff(l,d){return ls(l),d=yi(l,d),l.g.has(d)}t.forEach=function(l,d){ls(this),this.g.forEach(function(p,g){p.forEach(function(N){l.call(d,N,g,this)},this)},this)},t.na=function(){ls(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let g=0;g<d.length;g++){const N=l[g];for(let D=0;D<N.length;D++)p.push(d[g])}return p},t.V=function(l){ls(this);let d=[];if(typeof l=="string")ff(this,l)&&(d=d.concat(this.g.get(yi(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)d=d.concat(l[p])}return d},t.set=function(l,d){return ls(this),this.i=null,l=yi(this,l),ff(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function pf(l,d,p){df(l,d),0<p.length&&(l.i=null,l.g.set(yi(l,d),R(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var g=d[p];const D=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var N=D;z[g]!==""&&(N+="="+encodeURIComponent(String(z[g]))),l.push(N)}}return this.i=l.join("&")};function yi(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function zT(l,d){d&&!l.j&&(ls(l),l.i=null,l.g.forEach(function(p,g){var N=g.toLowerCase();g!=N&&(df(this,g),pf(this,N,p))},l)),l.j=d}function GT(l,d){const p=new fr;if(a.Image){const g=new Image;g.onload=_(cs,p,"TestLoadImage: loaded",!0,d,g),g.onerror=_(cs,p,"TestLoadImage: error",!1,d,g),g.onabort=_(cs,p,"TestLoadImage: abort",!1,d,g),g.ontimeout=_(cs,p,"TestLoadImage: timeout",!1,d,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=l}else d(!1)}function QT(l,d){const p=new fr,g=new AbortController,N=setTimeout(()=>{g.abort(),cs(p,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:g.signal}).then(D=>{clearTimeout(N),D.ok?cs(p,"TestPingServer: ok",!0,d):cs(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(N),cs(p,"TestPingServer: error",!1,d)})}function cs(l,d,p,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(p)}catch{}}function YT(){this.g=new sn}function XT(l,d,p){const g=p||"";try{lf(l,function(N,D){let z=N;u(N)&&(z=mi(N)),d.push(g+D+"="+encodeURIComponent(z))})}catch(N){throw d.push(g+"type="+encodeURIComponent("_badmap")),N}}function ea(l){this.l=l.Ub||null,this.j=l.eb||!1}T(ea,_i),ea.prototype.g=function(){return new ta(this.l,this.j)},ea.prototype.i=function(l){return function(){return l}}({});function ta(l,d){te.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(ta,te),t=ta.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,vr(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yr(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,vr(this)),this.g&&(this.readyState=3,vr(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;mf(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function mf(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?yr(this):vr(this),this.readyState==3&&mf(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,yr(this))},t.Qa=function(l){this.g&&(this.response=l,yr(this))},t.ga=function(){this.g&&yr(this)};function yr(l){l.readyState=4,l.l=null,l.j=null,l.v=null,vr(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=d.next();return l.join(`\r
`)};function vr(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ta.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function _f(l){let d="";return G(l,function(p,g){d+=g,d+=":",d+=p,d+=`\r
`}),d}function mc(l,d,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=_f(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):je(l,d,p))}function Ye(l){te.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(Ye,te);var JT=/^https?$/i,ZT=["POST","PUT"];t=Ye.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():lc.g(),this.v=this.o?Wd(this.o):Wd(lc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(D){gf(this,D);return}if(l=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)p.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())p.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(D=>D.toLowerCase()=="content-type"),N=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(ZT,d,void 0))||g||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,z]of p)this.g.setRequestHeader(D,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ef(this),this.u=!0,this.g.send(l),this.u=!1}catch(D){gf(this,D)}};function gf(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,yf(l),na(l)}function yf(l){l.A||(l.A=!0,le(l,"complete"),le(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,le(this,"complete"),le(this,"abort"),na(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),na(this,!0)),Ye.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?vf(this):this.bb())},t.bb=function(){vf(this)};function vf(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Bn(l)!=4||l.Z()!=2)){if(l.u&&Bn(l)==4)be(l.Ea,0,l);else if(le(l,"readystatechange"),Bn(l)==4){l.h=!1;try{const z=l.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var g;if(g=z===0){var N=String(l.D).match(cf)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),g=!JT.test(N?N.toLowerCase():"")}p=g}if(p)le(l,"complete"),le(l,"success");else{l.m=6;try{var D=2<Bn(l)?l.g.statusText:""}catch{D=""}l.l=D+" ["+l.Z()+"]",yf(l)}}finally{na(l)}}}}function na(l,d){if(l.g){Ef(l);const p=l.g,g=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||le(l,"ready");try{p.onreadystatechange=g}catch{}}}function Ef(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Bn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Bn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),xt(d)}};function Tf(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function ew(l){const d={};l=(l.g&&2<=Bn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<l.length;g++){if(U(l[g]))continue;var p=C(l[g]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const D=d[N]||[];d[N]=D,D.push(p)}I(d,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Er(l,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||d}function wf(l){this.Aa=0,this.i=[],this.j=new fr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Er("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Er("baseRetryDelayMs",5e3,l),this.cb=Er("retryDelaySeedMs",1e4,l),this.Wa=Er("forwardChannelMaxRetries",2,l),this.wa=Er("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new nf(l&&l.concurrentRequestLimit),this.Da=new YT,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=wf.prototype,t.la=8,t.G=1,t.connect=function(l,d,p,g){Mt(0),this.W=l,this.H=d||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.I=kf(this,null,this.W),ia(this)};function _c(l){if(If(l),l.G==3){var d=l.U++,p=Un(l.I);if(je(p,"SID",l.K),je(p,"RID",d),je(p,"TYPE","terminate"),Tr(l,p),d=new as(l,l.j,d),d.L=2,d.v=Zo(Un(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=Df(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Yo(d)}Nf(l)}function sa(l){l.g&&(yc(l),l.g.cancel(),l.g=null)}function If(l){sa(l),l.u&&(a.clearTimeout(l.u),l.u=null),ra(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function ia(l){if(!sf(l.h)&&!l.s){l.s=!0;var d=l.Ga;he||cn(),_e||(he(),_e=!0),zt.add(d,l),l.B=0}}function tw(l,d){return rf(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=dr(m(l.Ga,l,d),Pf(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const N=new as(this,this.j,l);let D=this.o;if(this.S&&(D?(D=y(D),b(D,this.S)):D=this.S),this.m!==null||this.O||(N.H=D,D=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(d+=g,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=bf(this,N,d),p=Un(this.I),je(p,"RID",l),je(p,"CVER",22),this.D&&je(p,"X-HTTP-Session-Id",this.D),Tr(this,p),D&&(this.O?d="headers="+encodeURIComponent(String(_f(D)))+"&"+d:this.m&&mc(p,this.m,D)),pc(this.h,N),this.Ua&&je(p,"TYPE","init"),this.P?(je(p,"$req",d),je(p,"SID","null"),N.T=!0,uc(N,p,null)):uc(N,p,d),this.G=2}}else this.G==3&&(l?Af(this,l):this.i.length==0||sf(this.h)||Af(this))};function Af(l,d){var p;d?p=d.l:p=l.U++;const g=Un(l.I);je(g,"SID",l.K),je(g,"RID",p),je(g,"AID",l.T),Tr(l,g),l.m&&l.o&&mc(g,l.m,l.o),p=new as(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),d&&(l.i=d.D.concat(l.i)),d=bf(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),pc(l.h,p),uc(p,g,d)}function Tr(l,d){l.H&&G(l.H,function(p,g){je(d,g,p)}),l.l&&lf({},function(p,g){je(d,g,p)})}function bf(l,d,p){p=Math.min(l.i.length,p);var g=l.l?m(l.l.Na,l.l,l):null;e:{var N=l.i;let D=-1;for(;;){const z=["count="+p];D==-1?0<p?(D=N[0].g,z.push("ofs="+D)):D=0:z.push("ofs="+D);let Le=!0;for(let _t=0;_t<p;_t++){let Re=N[_t].g;const At=N[_t].map;if(Re-=D,0>Re)D=Math.max(0,N[_t].g-100),Le=!1;else try{XT(At,z,"req"+Re+"_")}catch{g&&g(At)}}if(Le){g=z.join("&");break e}}}return l=l.i.splice(0,p),d.D=l,g}function Rf(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;he||cn(),_e||(he(),_e=!0),zt.add(d,l),l.v=0}}function gc(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=dr(m(l.Fa,l),Pf(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Cf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=dr(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Mt(10),sa(this),Cf(this))};function yc(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Cf(l){l.g=new as(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Un(l.qa);je(d,"RID","rpc"),je(d,"SID",l.K),je(d,"AID",l.T),je(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&je(d,"TO",l.ja),je(d,"TYPE","xmlhttp"),Tr(l,d),l.m&&l.o&&mc(d,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=Zo(Un(d)),p.m=null,p.P=!0,Zd(p,l)}t.Za=function(){this.C!=null&&(this.C=null,sa(this),gc(this),Mt(19))};function ra(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Sf(l,d){var p=null;if(l.g==d){ra(l),yc(l),l.g=null;var g=2}else if(fc(l.h,d))p=d.D,of(l.h,d),g=1;else return;if(l.G!=0){if(d.o)if(g==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var N=l.B;g=zo(),le(g,new Qd(g,p)),ia(l)}else Rf(l);else if(N=d.s,N==3||N==0&&0<d.X||!(g==1&&tw(l,d)||g==2&&gc(l)))switch(p&&0<p.length&&(d=l.h,d.i=d.i.concat(p)),N){case 1:js(l,5);break;case 4:js(l,10);break;case 3:js(l,6);break;default:js(l,2)}}}function Pf(l,d){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*d}function js(l,d){if(l.j.info("Error code "+d),d==2){var p=m(l.fb,l),g=l.Xa;const N=!g;g=new $s(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Xo(g,"https"),Zo(g),N?GT(g.toString(),p):QT(g.toString(),p)}else Mt(2);l.G=0,l.l&&l.l.sa(d),Nf(l),If(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Mt(2)):(this.j.info("Failed to ping google.com"),Mt(1))};function Nf(l){if(l.G=0,l.ka=[],l.l){const d=af(l.h);(d.length!=0||l.i.length!=0)&&(S(l.ka,d),S(l.ka,l.i),l.h.i.length=0,R(l.i),l.i.length=0),l.l.ra()}}function kf(l,d,p){var g=p instanceof $s?Un(p):new $s(p);if(g.g!="")d&&(g.g=d+"."+g.g),Jo(g,g.s);else{var N=a.location;g=N.protocol,d=d?d+"."+N.hostname:N.hostname,N=+N.port;var D=new $s(null);g&&Xo(D,g),d&&(D.g=d),N&&Jo(D,N),p&&(D.l=p),g=D}return p=l.D,d=l.ya,p&&d&&je(g,p,d),je(g,"VER",l.la),Tr(l,g),g}function Df(l,d,p){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Ye(new ea({eb:p})):new Ye(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Of(){}t=Of.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function oa(){}oa.prototype.g=function(l,d){return new Gt(l,d)};function Gt(l,d){te.call(this),this.g=new wf(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!U(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!U(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new vi(this)}T(Gt,te),Gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Gt.prototype.close=function(){_c(this.g)},Gt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=mi(l),l=p);d.i.push(new FT(d.Ya++,l)),d.G==3&&ia(d)},Gt.prototype.N=function(){this.g.l=null,delete this.j,_c(this.g),delete this.g,Gt.aa.N.call(this)};function xf(l){oc.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const p in d){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}T(xf,oc);function Mf(){ac.call(this),this.status=1}T(Mf,ac);function vi(l){this.g=l}T(vi,Of),vi.prototype.ua=function(){le(this.g,"a")},vi.prototype.ta=function(l){le(this.g,new xf(l))},vi.prototype.sa=function(l){le(this.g,new Mf)},vi.prototype.ra=function(){le(this.g,"b")},oa.prototype.createWebChannel=oa.prototype.g,Gt.prototype.send=Gt.prototype.o,Gt.prototype.open=Gt.prototype.m,Gt.prototype.close=Gt.prototype.close,My=function(){return new oa},xy=function(){return zo()},Oy=Us,bu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Go.NO_ERROR=0,Go.TIMEOUT=8,Go.HTTP_ERROR=6,Ca=Go,Yd.COMPLETE="complete",Dy=Yd,qd.EventType=ur,ur.OPEN="a",ur.CLOSE="b",ur.ERROR="c",ur.MESSAGE="d",te.prototype.listen=te.prototype.K,Or=qd,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,ky=Ye}).apply(typeof da<"u"?da:typeof self<"u"?self:typeof window<"u"?window:{});const Xp="@firebase/firestore";/**
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
 */class Ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ct.UNAUTHENTICATED=new Ct(null),Ct.GOOGLE_CREDENTIALS=new Ct("google-credentials-uid"),Ct.FIRST_PARTY=new Ct("first-party-uid"),Ct.MOCK_USER=new Ct("mock-user");/**
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
 */let ir="10.14.0";/**
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
 */const si=new Do("@firebase/firestore");function Rr(){return si.logLevel}function ne(t,...e){if(si.logLevel<=ge.DEBUG){const n=e.map(Vh);si.debug(`Firestore (${ir}): ${t}`,...n)}}function es(t,...e){if(si.logLevel<=ge.ERROR){const n=e.map(Vh);si.error(`Firestore (${ir}): ${t}`,...n)}}function qi(t,...e){if(si.logLevel<=ge.WARN){const n=e.map(Vh);si.warn(`Firestore (${ir}): ${t}`,...n)}}function Vh(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function de(t="Unexpected state"){const e=`FIRESTORE (${ir}) INTERNAL ASSERTION FAILED: `+t;throw es(e),new Error(e)}function xe(t,e){t||de()}function me(t,e){return t}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends ss{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Xn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Vy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ct.UNAUTHENTICATED))}shutdown(){}}class NR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kR{constructor(e){this.t=e,this.currentUser=Ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){xe(this.o===void 0);let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Xn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Xn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Xn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(xe(typeof s.accessToken=="string"),new Vy(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string"),new Ct(e)}}class DR{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=Ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class OR{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new DR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class MR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){xe(this.o===void 0);const s=r=>{r.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string"),this.R=n.token,new xR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function VR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Ly{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=VR(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function Se(t,e){return t<e?-1:t>e?1:0}function Ki(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class st{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ie($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new st(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class fe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new fe(e)}static min(){return new fe(new st(0,0))}static max(){return new fe(new st(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class yo{constructor(e,n,s){n===void 0?n=0:n>e.length&&de(),s===void 0?s=e.length-n:s>e.length-n&&de(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return yo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yo?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ze extends yo{construct(e,n,s){return new ze(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ie($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new ze(n)}static emptyPath(){return new ze([])}}const LR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends yo{construct(e,n,s){return new vt(e,n,s)}static isValidIdentifier(e){return LR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new vt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new ie($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ie($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ie($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new ie($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(n)}static emptyPath(){return new vt([])}}/**
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
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(ze.fromString(e))}static fromName(e){return new oe(ze.fromString(e).popFirst(5))}static empty(){return new oe(ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ze.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new ze(e.slice()))}}function FR(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=fe.fromTimestamp(s===1e9?new st(n+1,0):new st(n,s));return new Ns(i,oe.empty(),e)}function UR(t){return new Ns(t.readTime,t.key,-1)}class Ns{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ns(fe.min(),oe.empty(),-1)}static max(){return new Ns(fe.max(),oe.empty(),-1)}}function BR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:Se(t.largestBatchId,e.largestBatchId))}/**
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
 */const $R="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Oo(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==$R)throw t;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,s)=>{n(e)})}static reject(e){return new j((n,s)=>{s(e)})}static waitFor(e){return new j((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=j.resolve(!1);for(const s of e)n=n.next(i=>i?j.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new j((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const u=c;n(e[u]).next(h=>{o[u]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(e,n){return new j((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function HR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function xo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Lh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ie(s),this.se=s=>n.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Lh.oe=-1;function Vl(t){return t==null}function Ga(t){return t===0&&1/t==-1/0}function WR(t){return typeof t=="number"&&Number.isInteger(t)&&!Ga(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Jp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ui(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Fy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */let it=class Ru{constructor(e,n){this.comparator=e,this.root=n||Rs.EMPTY}insert(e,n){return new Ru(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Rs.BLACK,null,null))}remove(e){return new Ru(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Rs.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fa(this.root,e,this.comparator,!1)}getReverseIterator(){return new fa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fa(this.root,e,this.comparator,!0)}},fa=class{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Rs=class Hn{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Hn.RED,this.left=i??Hn.EMPTY,this.right=r??Hn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Hn(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Hn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Hn.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Hn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Hn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw de();const e=this.left.check();if(e!==this.right.check())throw de();return e+(this.isRed()?0:1)}};Rs.EMPTY=null,Rs.RED=!0,Rs.BLACK=!1;Rs.EMPTY=new class{constructor(){this.size=0}get key(){throw de()}get value(){throw de()}get color(){throw de()}get left(){throw de()}get right(){throw de()}copy(e,n,s,i,r){return this}insert(e,n,s){return new Rs(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Et{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zp(this.data.getIterator())}getIteratorFrom(e){return new Zp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Et)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Et(this.comparator);return n.data=e,n}}class Zp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Xt{constructor(e){this.fields=e,e.sort(vt.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new Et(vt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ki(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Uy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Uy("Invalid base64 string: "+r):r}}(e);return new Tt(n)}static fromUint8Array(e){const n=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new Tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const qR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ks(t){if(xe(!!t),typeof t=="string"){let e=0;const n=qR.exec(t);if(xe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ze(t.seconds),nanos:Ze(t.nanos)}}function Ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ii(t){return typeof t=="string"?Tt.fromBase64String(t):Tt.fromUint8Array(t)}/**
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
 */function Fh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Uh(t){const e=t.mapValue.fields.__previous_value__;return Fh(e)?Uh(e):e}function vo(t){const e=ks(t.mapValue.fields.__local_write_time__.timestampValue);return new st(e.seconds,e.nanos)}/**
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
 */class KR{constructor(e,n,s,i,r,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Eo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Eo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Eo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const pa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ri(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Fh(t)?4:GR(t)?9007199254740991:zR(t)?10:11:de()}function Mn(t,e){if(t===e)return!0;const n=ri(t);if(n!==ri(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vo(t).isEqual(vo(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=ks(i.timestampValue),a=ks(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return ii(i.bytesValue).isEqual(ii(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return Ze(i.geoPointValue.latitude)===Ze(r.geoPointValue.latitude)&&Ze(i.geoPointValue.longitude)===Ze(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Ze(i.integerValue)===Ze(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=Ze(i.doubleValue),a=Ze(r.doubleValue);return o===a?Ga(o)===Ga(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ki(t.arrayValue.values||[],e.arrayValue.values||[],Mn);case 10:case 11:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(Jp(o)!==Jp(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Mn(o[c],a[c])))return!1;return!0}(t,e);default:return de()}}function To(t,e){return(t.values||[]).find(n=>Mn(n,e))!==void 0}function zi(t,e){if(t===e)return 0;const n=ri(t),s=ri(e);if(n!==s)return Se(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Se(t.booleanValue,e.booleanValue);case 2:return function(r,o){const a=Ze(r.integerValue||r.doubleValue),c=Ze(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return em(t.timestampValue,e.timestampValue);case 4:return em(vo(t),vo(e));case 5:return Se(t.stringValue,e.stringValue);case 6:return function(r,o){const a=ii(r),c=ii(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=Se(a[u],c[u]);if(h!==0)return h}return Se(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const a=Se(Ze(r.latitude),Ze(o.latitude));return a!==0?a:Se(Ze(r.longitude),Ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return tm(t.arrayValue,e.arrayValue);case 10:return function(r,o){var a,c,u,h;const f=r.fields||{},m=o.fields||{},_=(a=f.value)===null||a===void 0?void 0:a.arrayValue,T=(c=m.value)===null||c===void 0?void 0:c.arrayValue,R=Se(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((h=T==null?void 0:T.values)===null||h===void 0?void 0:h.length)||0);return R!==0?R:tm(_,T)}(t.mapValue,e.mapValue);case 11:return function(r,o){if(r===pa.mapValue&&o===pa.mapValue)return 0;if(r===pa.mapValue)return 1;if(o===pa.mapValue)return-1;const a=r.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const m=Se(c[f],h[f]);if(m!==0)return m;const _=zi(a[c[f]],u[h[f]]);if(_!==0)return _}return Se(c.length,h.length)}(t.mapValue,e.mapValue);default:throw de()}}function em(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Se(t,e);const n=ks(t),s=ks(e),i=Se(n.seconds,s.seconds);return i!==0?i:Se(n.nanos,s.nanos)}function tm(t,e){const n=t.values||[],s=e.values||[];for(let i=0;i<n.length&&i<s.length;++i){const r=zi(n[i],s[i]);if(r)return r}return Se(n.length,s.length)}function Gi(t){return Cu(t)}function Cu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=ks(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ii(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return oe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",i=!0;for(const r of n.values||[])i?i=!1:s+=",",s+=Cu(r);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${Cu(n.fields[o])}`;return i+"}"}(t.mapValue):de()}function Su(t){return!!t&&"integerValue"in t}function Bh(t){return!!t&&"arrayValue"in t}function nm(t){return!!t&&"nullValue"in t}function sm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Sa(t){return!!t&&"mapValue"in t}function zR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Gr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ui(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Gr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Gr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function GR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Wt{constructor(e){this.value=e}static empty(){return new Wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Sa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gr(n)}setAll(e){let n=vt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Gr(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Sa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Sa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){ui(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Wt(Gr(this.value))}}function By(t){const e=[];return ui(t.fields,(n,s)=>{const i=new vt([n]);if(Sa(s)){const r=By(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Xt(e)}/**
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
 */class Nt{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Nt(e,0,fe.min(),fe.min(),fe.min(),Wt.empty(),0)}static newFoundDocument(e,n,s,i){return new Nt(e,1,n,fe.min(),s,i,0)}static newNoDocument(e,n){return new Nt(e,2,n,fe.min(),fe.min(),Wt.empty(),0)}static newUnknownDocument(e,n){return new Nt(e,3,n,fe.min(),fe.min(),Wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qa{constructor(e,n){this.position=e,this.inclusive=n}}function im(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=oe.comparator(oe.fromName(o.referenceValue),n.key):s=zi(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function rm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Mn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ya{constructor(e,n="asc"){this.field=e,this.dir=n}}function QR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class $y{}class rt extends $y{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new XR(e,n,s):n==="array-contains"?new eC(e,s):n==="in"?new tC(e,s):n==="not-in"?new nC(e,s):n==="array-contains-any"?new sC(e,s):new rt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new JR(e,s):new ZR(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(zi(n,this.value)):n!==null&&ri(this.value)===ri(n)&&this.matchesComparison(zi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vn extends $y{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Vn(e,n)}matches(e){return jy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function jy(t){return t.op==="and"}function Hy(t){return YR(t)&&jy(t)}function YR(t){for(const e of t.filters)if(e instanceof Vn)return!1;return!0}function Pu(t){if(t instanceof rt)return t.field.canonicalString()+t.op.toString()+Gi(t.value);if(Hy(t))return t.filters.map(e=>Pu(e)).join(",");{const e=t.filters.map(n=>Pu(n)).join(",");return`${t.op}(${e})`}}function Wy(t,e){return t instanceof rt?function(s,i){return i instanceof rt&&s.op===i.op&&s.field.isEqual(i.field)&&Mn(s.value,i.value)}(t,e):t instanceof Vn?function(s,i){return i instanceof Vn&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&Wy(o,i.filters[a]),!0):!1}(t,e):void de()}function qy(t){return t instanceof rt?function(n){return`${n.field.canonicalString()} ${n.op} ${Gi(n.value)}`}(t):t instanceof Vn?function(n){return n.op.toString()+" {"+n.getFilters().map(qy).join(" ,")+"}"}(t):"Filter"}class XR extends rt{constructor(e,n,s){super(e,n,s),this.key=oe.fromName(s.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class JR extends rt{constructor(e,n){super(e,"in",n),this.keys=Ky("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ZR extends rt{constructor(e,n){super(e,"not-in",n),this.keys=Ky("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ky(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>oe.fromName(s.referenceValue))}class eC extends rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Bh(n)&&To(n.arrayValue,this.value)}}class tC extends rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&To(this.value.arrayValue,n)}}class nC extends rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(To(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!To(this.value.arrayValue,n)}}class sC extends rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Bh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>To(this.value.arrayValue,s))}}/**
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
 */class iC{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ue=null}}function om(t,e=null,n=[],s=[],i=null,r=null,o=null){return new iC(t,e,n,s,i,r,o)}function $h(t){const e=me(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Pu(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Vl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Gi(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Gi(s)).join(",")),e.ue=n}return e.ue}function jh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!QR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Wy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!rm(t.startAt,e.startAt)&&rm(t.endAt,e.endAt)}function Nu(t){return oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ll{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function rC(t,e,n,s,i,r,o,a){return new Ll(t,e,n,s,i,r,o,a)}function Fl(t){return new Ll(t)}function am(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function oC(t){return t.collectionGroup!==null}function Qr(t){const e=me(t);if(e.ce===null){e.ce=[];const n=new Set;for(const r of e.explicitOrderBy)e.ce.push(r),n.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Et(vt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(r=>{n.has(r.canonicalString())||r.isKeyField()||e.ce.push(new Ya(r,s))}),n.has(vt.keyField().canonicalString())||e.ce.push(new Ya(vt.keyField(),s))}return e.ce}function kn(t){const e=me(t);return e.le||(e.le=aC(e,Qr(t))),e.le}function aC(t,e){if(t.limitType==="F")return om(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new Ya(i.field,r)});const n=t.endAt?new Qa(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Qa(t.startAt.position,t.startAt.inclusive):null;return om(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function ku(t,e,n){return new Ll(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ul(t,e){return jh(kn(t),kn(e))&&t.limitType===e.limitType}function zy(t){return`${$h(kn(t))}|lt:${t.limitType}`}function Ri(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(i=>qy(i)).join(", ")}]`),Vl(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(i=>Gi(i)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(i=>Gi(i)).join(",")),`Target(${s})`}(kn(t))}; limitType=${t.limitType})`}function Bl(t,e){return e.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):oe.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(t,e)&&function(s,i){for(const r of Qr(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(s,i){return!(s.startAt&&!function(o,a,c){const u=im(o,a,c);return o.inclusive?u<=0:u<0}(s.startAt,Qr(s),i)||s.endAt&&!function(o,a,c){const u=im(o,a,c);return o.inclusive?u>=0:u>0}(s.endAt,Qr(s),i))}(t,e)}function lC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Gy(t){return(e,n)=>{let s=!1;for(const i of Qr(t)){const r=cC(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function cC(t,e,n){const s=t.field.isKeyField()?oe.comparator(e.key,n.key):function(r,o,a){const c=o.data.field(r),u=a.data.field(r);return c!==null&&u!==null?zi(c,u):de()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return de()}}/**
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
 */class rr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ui(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Fy(this.inner)}size(){return this.innerSize}}/**
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
 */const uC=new it(oe.comparator);function ts(){return uC}const Qy=new it(oe.comparator);function xr(...t){let e=Qy;for(const n of t)e=e.insert(n.key,n);return e}function Yy(t){let e=Qy;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Qs(){return Yr()}function Xy(){return Yr()}function Yr(){return new rr(t=>t.toString(),(t,e)=>t.isEqual(e))}const hC=new it(oe.comparator),dC=new Et(oe.comparator);function ye(...t){let e=dC;for(const n of t)e=e.add(n);return e}const fC=new Et(Se);function pC(){return fC}/**
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
 */function Hh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ga(e)?"-0":e}}function Jy(t){return{integerValue:""+t}}function mC(t,e){return WR(e)?Jy(e):Hh(t,e)}/**
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
 */class $l{constructor(){this._=void 0}}function _C(t,e,n){return t instanceof Xa?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Fh(r)&&(r=Uh(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof wo?ev(t,e):t instanceof Io?tv(t,e):function(i,r){const o=Zy(i,r),a=lm(o)+lm(i.Pe);return Su(o)&&Su(i.Pe)?Jy(a):Hh(i.serializer,a)}(t,e)}function gC(t,e,n){return t instanceof wo?ev(t,e):t instanceof Io?tv(t,e):n}function Zy(t,e){return t instanceof Ja?function(s){return Su(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}class Xa extends $l{}class wo extends $l{constructor(e){super(),this.elements=e}}function ev(t,e){const n=nv(e);for(const s of t.elements)n.some(i=>Mn(i,s))||n.push(s);return{arrayValue:{values:n}}}class Io extends $l{constructor(e){super(),this.elements=e}}function tv(t,e){let n=nv(e);for(const s of t.elements)n=n.filter(i=>!Mn(i,s));return{arrayValue:{values:n}}}class Ja extends $l{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function lm(t){return Ze(t.integerValue||t.doubleValue)}function nv(t){return Bh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function yC(t,e){return t.field.isEqual(e.field)&&function(s,i){return s instanceof wo&&i instanceof wo||s instanceof Io&&i instanceof Io?Ki(s.elements,i.elements,Mn):s instanceof Ja&&i instanceof Ja?Mn(s.Pe,i.Pe):s instanceof Xa&&i instanceof Xa}(t.transform,e.transform)}class vC{constructor(e,n){this.version=e,this.transformResults=n}}class mn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new mn}static exists(e){return new mn(void 0,e)}static updateTime(e){return new mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class jl{}function sv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Wh(t.key,mn.none()):new Mo(t.key,t.data,mn.none());{const n=t.data,s=Wt.empty();let i=new Et(vt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Fs(t.key,s,new Xt(i.toArray()),mn.none())}}function EC(t,e,n){t instanceof Mo?function(i,r,o){const a=i.value.clone(),c=um(i.fieldTransforms,r,o.transformResults);a.setAll(c),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Fs?function(i,r,o){if(!Pa(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=um(i.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(iv(i)),c.setAll(a),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Xr(t,e,n,s){return t instanceof Mo?function(r,o,a,c){if(!Pa(r.precondition,o))return a;const u=r.value.clone(),h=hm(r.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,s):t instanceof Fs?function(r,o,a,c){if(!Pa(r.precondition,o))return a;const u=hm(r.fieldTransforms,c,o),h=o.data;return h.setAll(iv(r)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(f=>f.field))}(t,e,n,s):function(r,o,a){return Pa(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function TC(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Zy(s.transform,i||null);r!=null&&(n===null&&(n=Wt.empty()),n.set(s.field,r))}return n||null}function cm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Ki(s,i,(r,o)=>yC(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Mo extends jl{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Fs extends jl{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function iv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function um(t,e,n){const s=new Map;xe(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,gC(o,a,n[i]))}return s}function hm(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,_C(r,o,e))}return s}class Wh extends jl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wC extends jl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class IC{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&EC(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Xr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Xr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Xy();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=sv(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(fe.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&Ki(this.mutations,e.mutations,(n,s)=>cm(n,s))&&Ki(this.baseMutations,e.baseMutations,(n,s)=>cm(n,s))}}class qh{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){xe(e.mutations.length===s.length);let i=function(){return hC}();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new qh(e,n,s,i)}}/**
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
 */class AC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class bC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var tt,Te;function RC(t){switch(t){default:return de();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function rv(t){if(t===void 0)return es("GRPC error has no .code"),$.UNKNOWN;switch(t){case tt.OK:return $.OK;case tt.CANCELLED:return $.CANCELLED;case tt.UNKNOWN:return $.UNKNOWN;case tt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case tt.INTERNAL:return $.INTERNAL;case tt.UNAVAILABLE:return $.UNAVAILABLE;case tt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case tt.NOT_FOUND:return $.NOT_FOUND;case tt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case tt.ABORTED:return $.ABORTED;case tt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case tt.DATA_LOSS:return $.DATA_LOSS;default:return de()}}(Te=tt||(tt={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function CC(){return new TextEncoder}/**
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
 */const SC=new ti([4294967295,4294967295],0);function dm(t){const e=CC().encode(t),n=new Ny;return n.update(e),new Uint8Array(n.digest())}function fm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new ti([n,s],0),new ti([i,r],0)]}class Kh{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Mr(`Invalid padding: ${n}`);if(s<0)throw new Mr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Mr(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Mr(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ti.fromNumber(this.Ie)}Ee(e,n,s){let i=e.add(n.multiply(ti.fromNumber(s)));return i.compare(SC)===1&&(i=new ti([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=dm(e),[s,i]=fm(n);for(let r=0;r<this.hashCount;r++){const o=this.Ee(s,i,r);if(!this.de(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Kh(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=dm(e),[s,i]=fm(n);for(let r=0;r<this.hashCount;r++){const o=this.Ee(s,i,r);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Mr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Hl{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Vo.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Hl(fe.min(),i,new it(Se),ts(),ye())}}class Vo{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Vo(s,n,ye(),ye(),ye())}}/**
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
 */class Na{constructor(e,n,s,i){this.Re=e,this.removedTargetIds=n,this.key=s,this.Ve=i}}class ov{constructor(e,n){this.targetId=e,this.me=n}}class av{constructor(e,n,s=Tt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class pm{constructor(){this.fe=0,this.ge=_m(),this.pe=Tt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ye(),n=ye(),s=ye();return this.ge.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:de()}}),new Vo(this.pe,this.ye,e,n,s)}Ce(){this.we=!1,this.ge=_m()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,xe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class PC{constructor(e){this.Le=e,this.Be=new Map,this.ke=ts(),this.qe=mm(),this.Qe=new it(Se)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const s=this.Ge(n);switch(e.state){case 0:this.ze(n)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),s.De(e.resumeToken));break;default:de()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((s,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,s=e.me.count,i=this.Je(n);if(i){const r=i.target;if(Nu(r))if(s===0){const o=new oe(r.path);this.Ue(n,o,Nt.newNoDocument(o,fe.min()))}else xe(s===1);else{const o=this.Ye(n);if(o!==s){const a=this.Ze(e),c=a?this.Xe(a,e,o):1;if(c!==0){this.je(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=n;let o,a;try{o=ii(s).toUint8Array()}catch(c){if(c instanceof Uy)return qi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Kh(o,i,r)}catch(c){return qi(c instanceof Mr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ie===0?null:a}Xe(e,n,s){return n.me.count===s-this.nt(e,n.targetId)?0:2}nt(e,n){const s=this.Le.getRemoteKeysForTarget(n);let i=0;return s.forEach(r=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,r,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((r,o)=>{const a=this.Je(o);if(a){if(r.current&&Nu(a.target)){const c=new oe(a.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,Nt.newNoDocument(c,e))}r.be&&(n.set(o,r.ve()),r.Ce())}});let s=ye();this.qe.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.ke.forEach((r,o)=>o.setReadTime(e));const i=new Hl(e,n,this.Qe,this.ke,s);return this.ke=ts(),this.qe=mm(),this.Qe=new it(Se),i}$e(e,n){if(!this.ze(e))return;const s=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,s),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,s){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),s&&(this.ke=this.ke.insert(n,s))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new pm,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Et(Se),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ne("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new pm),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function mm(){return new it(oe.comparator)}function _m(){return new it(oe.comparator)}const NC={asc:"ASCENDING",desc:"DESCENDING"},kC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},DC={and:"AND",or:"OR"};class OC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Du(t,e){return t.useProto3Json||Vl(e)?e:{value:e}}function Za(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function xC(t,e){return Za(t,e.toTimestamp())}function Dn(t){return xe(!!t),fe.fromTimestamp(function(n){const s=ks(n);return new st(s.seconds,s.nanos)}(t))}function zh(t,e){return Ou(t,e).canonicalString()}function Ou(t,e){const n=function(i){return new ze(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function cv(t){const e=ze.fromString(t);return xe(pv(e)),e}function xu(t,e){return zh(t.databaseId,e.path)}function Bc(t,e){const n=cv(e);if(n.get(1)!==t.databaseId.projectId)throw new ie($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ie($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oe(hv(n))}function uv(t,e){return zh(t.databaseId,e)}function MC(t){const e=cv(t);return e.length===4?ze.emptyPath():hv(e)}function Mu(t){return new ze(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function hv(t){return xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function gm(t,e,n){return{name:xu(t,e),fields:n.value.mapValue.fields}}function VC(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:de()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(u,h){return u.useProto3Json?(xe(h===void 0||typeof h=="string"),Tt.fromBase64String(h||"")):(xe(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Tt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?$.UNKNOWN:rv(u.code);return new ie(h,u.message||"")}(o);n=new av(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Bc(t,s.document.name),r=Dn(s.document.updateTime),o=s.document.createTime?Dn(s.document.createTime):fe.min(),a=new Wt({mapValue:{fields:s.document.fields}}),c=Nt.newFoundDocument(i,r,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];n=new Na(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Bc(t,s.document),r=s.readTime?Dn(s.readTime):fe.min(),o=Nt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Na([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Bc(t,s.document),r=s.removedTargetIds||[];n=new Na([],r,i,null)}else{if(!("filter"in e))return de();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new bC(i,r),a=s.targetId;n=new ov(a,o)}}return n}function LC(t,e){let n;if(e instanceof Mo)n={update:gm(t,e.key,e.value)};else if(e instanceof Wh)n={delete:xu(t,e.key)};else if(e instanceof Fs)n={update:gm(t,e.key,e.data),updateMask:KC(e.fieldMask)};else{if(!(e instanceof wC))return de();n={verify:xu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,o){const a=o.transform;if(a instanceof Xa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof wo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Io)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ja)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw de()}(0,s))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:xC(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:de()}(t,e.precondition)),n}function FC(t,e){return t&&t.length>0?(xe(e!==void 0),t.map(n=>function(i,r){let o=i.updateTime?Dn(i.updateTime):Dn(r);return o.isEqual(fe.min())&&(o=Dn(r)),new vC(o,i.transformResults||[])}(n,e))):[]}function UC(t,e){return{documents:[uv(t,e.path)]}}function BC(t,e){const n={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=uv(t,i);const r=function(u){if(u.length!==0)return fv(Vn.create(u,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const o=function(u){if(u.length!==0)return u.map(h=>function(m){return{field:Ci(m.field),direction:HC(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Du(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:i}}function $C(t){let e=MC(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){xe(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let r=[];n.where&&(r=function(f){const m=dv(f);return m instanceof Vn&&Hy(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(T){return new Ya(Si(T.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Vl(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(f){const m=!!f.before,_=f.values||[];return new Qa(_,m)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const m=!f.before,_=f.values||[];return new Qa(_,m)}(n.endAt)),rC(e,i,o,r,a,"F",c,u)}function jC(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function dv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Si(n.unaryFilter.field);return rt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=Si(n.unaryFilter.field);return rt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Si(n.unaryFilter.field);return rt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Si(n.unaryFilter.field);return rt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return de()}}(t):t.fieldFilter!==void 0?function(n){return rt.create(Si(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return de()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Vn.create(n.compositeFilter.filters.map(s=>dv(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return de()}}(n.compositeFilter.op))}(t):de()}function HC(t){return NC[t]}function WC(t){return kC[t]}function qC(t){return DC[t]}function Ci(t){return{fieldPath:t.canonicalString()}}function Si(t){return vt.fromServerFormat(t.fieldPath)}function fv(t){return t instanceof rt?function(n){if(n.op==="=="){if(sm(n.value))return{unaryFilter:{field:Ci(n.field),op:"IS_NAN"}};if(nm(n.value))return{unaryFilter:{field:Ci(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(sm(n.value))return{unaryFilter:{field:Ci(n.field),op:"IS_NOT_NAN"}};if(nm(n.value))return{unaryFilter:{field:Ci(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ci(n.field),op:WC(n.op),value:n.value}}}(t):t instanceof Vn?function(n){const s=n.getFilters().map(i=>fv(i));return s.length===1?s[0]:{compositeFilter:{op:qC(n.op),filters:s}}}(t):de()}function KC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function pv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class gs{constructor(e,n,s,i,r=fe.min(),o=fe.min(),a=Tt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new gs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new gs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class zC{constructor(e){this.ct=e}}function GC(t){const e=$C({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ku(e,e.limit,"L"):e}/**
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
 */class QC{constructor(){this.un=new YC}addToCollectionParentIndex(e,n){return this.un.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Ns.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Ns.min())}updateCollectionGroup(e,n,s){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class YC{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Et(ze.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Et(ze.comparator)).toArray()}}/**
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
 */class Qi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Qi(0)}static kn(){return new Qi(-1)}}/**
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
 */class XC{constructor(){this.changes=new rr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?j.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class JC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class ZC{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Xr(s.mutation,i,Xt.empty(),st.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ye()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ye()){const i=Qs();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=xr();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Qs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ye()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=ts();const o=Yr(),a=function(){return Yr()}();return n.forEach((c,u)=>{const h=s.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof Fs)?r=r.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Xr(h.mutation,u,h.mutation.getFieldMask(),st.now())):o.set(u.key,Xt.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var f;return a.set(u,new JC(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Yr();let i=new it((o,a)=>o-a),r=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=s.get(c)||Xt.empty();h=a.applyToLocalView(u,h),s.set(c,h);const f=(i.get(a.batchId)||ye()).add(c);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,f=Xy();h.forEach(m=>{if(!r.has(m)){const _=sv(n.get(m),s.get(m));_!==null&&f.set(m,_),r=r.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return j.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,i){return function(o){return oe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):oC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,i):this.getDocumentsMatchingCollectionQuery(e,n,s,i)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):j.resolve(Qs());let a=-1,c=r;return o.next(u=>j.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),r.get(h)?j.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{c=c.insert(h,m)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,c,u,ye())).next(h=>({batchId:a,changes:Yy(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next(s=>{let i=xr();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s,i){const r=n.collectionGroup;let o=xr();return this.indexManager.getCollectionParents(e,r).next(a=>j.forEach(a,c=>{const u=function(f,m){return new Ll(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,s,i).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r,i))).next(o=>{r.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Nt.newInvalidDocument(h)))});let a=xr();return o.forEach((c,u)=>{const h=r.get(c);h!==void 0&&Xr(h.mutation,u,Xt.empty(),st.now()),Bl(n,u)&&(a=a.insert(c,u))}),a})}}/**
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
 */class eS{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return j.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Dn(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:GC(i.bundledQuery),readTime:Dn(i.readTime)}}(n)),j.resolve()}}/**
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
 */class tS{constructor(){this.overlays=new it(oe.comparator),this.Ir=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Qs();return j.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ht(e,n,r)}),j.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.Ir.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Ir.delete(s)),j.resolve()}getOverlaysForCollection(e,n,s){const i=Qs(),r=n.length+1,o=new oe(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new it((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=r.get(u.largestBatchId);h===null&&(h=Qs(),r=r.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Qs(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return j.resolve(a)}ht(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(s.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new AC(n,s));let r=this.Ir.get(n);r===void 0&&(r=ye(),this.Ir.set(n,r)),this.Ir.set(n,r.add(s.key))}}/**
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
 */class nS{constructor(){this.sessionToken=Tt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class Gh{constructor(){this.Tr=new Et(ct.Er),this.dr=new Et(ct.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const s=new ct(e,n);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Vr(new ct(e,n))}mr(e,n){e.forEach(s=>this.removeReference(s,n))}gr(e){const n=new oe(new ze([])),s=new ct(n,e),i=new ct(n,e+1),r=[];return this.dr.forEachInRange([s,i],o=>{this.Vr(o),r.push(o.key)}),r}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new oe(new ze([])),s=new ct(n,e),i=new ct(n,e+1);let r=ye();return this.dr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new ct(e,0),s=this.Tr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ct{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return oe.comparator(e.key,n.key)||Se(e.wr,n.wr)}static Ar(e,n){return Se(e.wr,n.wr)||oe.comparator(e.key,n.key)}}/**
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
 */class sS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Et(ct.Er)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new IC(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new ct(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.vr(s),r=i<0?0:i;return j.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ct(n,0),i=new ct(n,Number.POSITIVE_INFINITY),r=[];return this.br.forEachInRange([s,i],o=>{const a=this.Dr(o.wr);r.push(a)}),j.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Et(Se);return n.forEach(i=>{const r=new ct(i,0),o=new ct(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([r,o],a=>{s=s.add(a.wr)})}),j.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;oe.isDocumentKey(r)||(r=r.child(""));const o=new ct(new oe(r),0);let a=new Et(Se);return this.br.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.wr)),!0)},o),j.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(s=>{const i=this.Dr(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){xe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return j.forEach(n.mutations,i=>{const r=new ct(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=s})}On(e){}containsKey(e,n){const s=new ct(n,0),i=this.br.firstAfterOrEqual(s);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class iS{constructor(e){this.Mr=e,this.docs=function(){return new it(oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return j.resolve(s?s.document.mutableCopy():Nt.newInvalidDocument(n))}getEntries(e,n){let s=ts();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Nt.newInvalidDocument(i))}),j.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=ts();const o=n.path,a=new oe(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||BR(UR(h),s)<=0||(i.has(h.key)||Bl(n,h))&&(r=r.insert(h.key,h.mutableCopy()))}return j.resolve(r)}getAllFromCollectionGroup(e,n,s,i){de()}Or(e,n){return j.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new rS(this)}getSize(e){return j.resolve(this.size)}}class rS extends XC{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(s)}),j.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class oS{constructor(e){this.persistence=e,this.Nr=new rr(n=>$h(n),jh),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Gh,this.targetCount=0,this.kr=Qi.Bn()}forEachTarget(e,n){return this.Nr.forEach((s,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Lr&&(this.Lr=n),j.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Qi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Kn(n),j.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Nr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),j.waitFor(r).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const s=this.Nr.get(n)||null;return j.resolve(s)}addMatchingKeys(e,n,s){return this.Br.Rr(n,s),j.resolve()}removeMatchingKeys(e,n,s){this.Br.mr(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Br.yr(n);return j.resolve(s)}containsKey(e,n){return j.resolve(this.Br.containsKey(n))}}/**
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
 */class aS{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Lh(0),this.Kr=!1,this.Kr=!0,this.$r=new nS,this.referenceDelegate=e(this),this.Ur=new oS(this),this.indexManager=new QC,this.remoteDocumentCache=function(i){return new iS(i)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new zC(n),this.Gr=new eS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new tS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.qr[e.toKey()];return s||(s=new sS(n,this.referenceDelegate),this.qr[e.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,s){ne("MemoryPersistence","Starting transaction:",e);const i=new lS(this.Qr.next());return this.referenceDelegate.zr(),s(i).next(r=>this.referenceDelegate.jr(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Hr(e,n){return j.or(Object.values(this.qr).map(s=>()=>s.containsKey(e,n)))}}class lS extends jR{constructor(e){super(),this.currentSequenceNumber=e}}class Qh{constructor(e){this.persistence=e,this.Jr=new Gh,this.Yr=null}static Zr(e){return new Qh(e)}get Xr(){if(this.Yr)return this.Yr;throw de()}addReference(e,n,s){return this.Jr.addReference(s,n),this.Xr.delete(s.toString()),j.resolve()}removeReference(e,n,s){return this.Jr.removeReference(s,n),this.Xr.add(s.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),j.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Xr.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Xr,s=>{const i=oe.fromPath(s);return this.ei(e,i).next(r=>{r||n.removeEntry(i,fe.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(s=>{s?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return j.or([()=>j.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Yh{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.$i=s,this.Ui=i}static Wi(e,n){let s=ye(),i=ye();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Yh(e,n.fromCache,s,i)}}/**
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
 */class cS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class uS{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ob()?8:HR(En())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,s,i){const r={result:null};return this.Yi(e,n).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.Zi(e,n,i,s).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new cS;return this.Xi(e,n,o).next(a=>{if(r.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>r.result)}es(e,n,s,i){return s.documentReadCount<this.ji?(Rr()<=ge.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",Ri(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),j.resolve()):(Rr()<=ge.DEBUG&&ne("QueryEngine","Query:",Ri(n),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Hi*i?(Rr()<=ge.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",Ri(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,kn(n))):j.resolve())}Yi(e,n){if(am(n))return j.resolve(null);let s=kn(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ku(n,null,"F"),s=kn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=ye(...r);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.ts(n,a);return this.ns(n,u,o,c.readTime)?this.Yi(e,ku(n,null,"F")):this.rs(e,u,n,c)}))})))}Zi(e,n,s,i){return am(n)||i.isEqual(fe.min())?j.resolve(null):this.Ji.getDocuments(e,s).next(r=>{const o=this.ts(n,r);return this.ns(n,o,s,i)?j.resolve(null):(Rr()<=ge.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ri(n)),this.rs(e,o,n,FR(i,-1)).next(a=>a))})}ts(e,n){let s=new Et(Gy(e));return n.forEach((i,r)=>{Bl(e,r)&&(s=s.add(r))}),s}ns(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Xi(e,n,s){return Rr()<=ge.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",Ri(n)),this.Ji.getDocumentsMatchingQuery(e,n,Ns.min(),s)}rs(e,n,s,i){return this.Ji.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class hS{constructor(e,n,s,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new it(Se),this._s=new rr(r=>$h(r),jh),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(s)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ZC(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function dS(t,e,n,s){return new hS(t,e,n,s)}async function mv(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.ls(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=ye();for(const u of i){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of r){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(s,c).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:a}))})})}function fS(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const f=u.batch,m=f.keys();let _=j.resolve();return m.forEach(T=>{_=_.next(()=>h.getEntry(c,T)).next(R=>{const S=u.docVersions.get(T);xe(S!==null),R.version.compareTo(S)<0&&(f.applyToRemoteDocument(R,u),R.isValidDocument()&&(R.setReadTime(u.commitVersion),h.addEntry(R)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(c,f))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=ye();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function _v(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function pS(t,e){const n=me(t),s=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const m=i.get(f);if(!m)return;a.push(n.Ur.removeMatchingKeys(r,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(r,h.addedDocuments,f)));let _=m.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(Tt.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,s)),i=i.insert(f,_),function(R,S,M){return R.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(m,_,h)&&a.push(n.Ur.updateTargetData(r,_))});let c=ts(),u=ye();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(mS(r,o,e.documentUpdates).next(h=>{c=h.Ps,u=h.Is})),!s.isEqual(fe.min())){const h=n.Ur.getLastRemoteSnapshotVersion(r).next(f=>n.Ur.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return j.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(n.os=i,r))}function mS(t,e,n){let s=ye(),i=ye();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=ts();return n.forEach((a,c)=>{const u=r.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(fe.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):ne("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Ps:o,Is:i}})}function _S(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function gS(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ur.getTargetData(s,e).next(r=>r?(i=r,j.resolve(i)):n.Ur.allocateTargetId(s).next(o=>(i=new gs(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Ur.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.os.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(s.targetId,s),n._s.set(e,s.targetId)),s})}async function Vu(t,e,n){const s=me(t),i=s.os.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!xo(o))throw o;ne("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.os=s.os.remove(e),s._s.delete(i.target)}function ym(t,e,n){const s=me(t);let i=fe.min(),r=ye();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const f=me(c),m=f._s.get(h);return m!==void 0?j.resolve(f.os.get(m)):f.Ur.getTargetData(u,h)}(s,o,kn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.ss.getDocumentsMatchingQuery(o,e,n?i:fe.min(),n?r:ye())).next(a=>(yS(s,lC(e),a),{documents:a,Ts:r})))}function yS(t,e,n){let s=t.us.get(e)||fe.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.us.set(e,s)}class vm{constructor(){this.activeTargetIds=pC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vS{constructor(){this.so=new vm,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,s){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new vm,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ES{_o(e){}shutdown(){}}/**
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
 */class Em{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ma=null;function $c(){return ma===null?ma=function(){return 268435456+Math.round(2147483648*Math.random())}():ma++,"0x"+ma.toString(16)}/**
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
 */const TS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class wS{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Rt="WebChannelConnection";class IS extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+n.host,this.vo=`projects/${i}/databases/${r}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get Fo(){return!1}Mo(n,s,i,r,o){const a=$c(),c=this.xo(n,s.toUriEncodedString());ne("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,r,o),this.No(n,c,u,i).then(h=>(ne("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw qi("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",c,"request:",i),h})}Lo(n,s,i,r,o,a){return this.Mo(n,s,i,r,o)}Oo(n,s,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ir}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>n[o]=r),i&&i.headers.forEach((r,o)=>n[o]=r)}xo(n,s){const i=TS[n];return`${this.Do}/v1/${s}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,s,i){const r=$c();return new Promise((o,a)=>{const c=new ky;c.setWithCredentials(!0),c.listenOnce(Dy.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ca.NO_ERROR:const h=c.getResponseJson();ne(Rt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(h)),o(h);break;case Ca.TIMEOUT:ne(Rt,`RPC '${e}' ${r} timed out`),a(new ie($.DEADLINE_EXCEEDED,"Request time out"));break;case Ca.HTTP_ERROR:const f=c.getStatus();if(ne(Rt,`RPC '${e}' ${r} failed with status:`,f,"response text:",c.getResponseText()),f>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const T=function(S){const M=S.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(M)>=0?M:$.UNKNOWN}(_.status);a(new ie(T,_.message))}else a(new ie($.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new ie($.UNAVAILABLE,"Connection failed."));break;default:de()}}finally{ne(Rt,`RPC '${e}' ${r} completed.`)}});const u=JSON.stringify(i);ne(Rt,`RPC '${e}' ${r} sending request:`,i),c.send(n,"POST",u,s,15)})}Bo(e,n,s){const i=$c(),r=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=My(),a=xy(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const h=r.join("");ne(Rt,`Creating RPC '${e}' stream ${i}: ${h}`,c);const f=o.createWebChannel(h,c);let m=!1,_=!1;const T=new wS({Io:S=>{_?ne(Rt,`Not sending because RPC '${e}' stream ${i} is closed:`,S):(m||(ne(Rt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),ne(Rt,`RPC '${e}' stream ${i} sending:`,S),f.send(S))},To:()=>f.close()}),R=(S,M,U)=>{S.listen(M,O=>{try{U(O)}catch(x){setTimeout(()=>{throw x},0)}})};return R(f,Or.EventType.OPEN,()=>{_||(ne(Rt,`RPC '${e}' stream ${i} transport opened.`),T.yo())}),R(f,Or.EventType.CLOSE,()=>{_||(_=!0,ne(Rt,`RPC '${e}' stream ${i} transport closed`),T.So())}),R(f,Or.EventType.ERROR,S=>{_||(_=!0,qi(Rt,`RPC '${e}' stream ${i} transport errored:`,S),T.So(new ie($.UNAVAILABLE,"The operation could not be completed")))}),R(f,Or.EventType.MESSAGE,S=>{var M;if(!_){const U=S.data[0];xe(!!U);const O=U,x=O.error||((M=O[0])===null||M===void 0?void 0:M.error);if(x){ne(Rt,`RPC '${e}' stream ${i} received error:`,x);const F=x.status;let G=function(v){const b=tt[v];if(b!==void 0)return rv(b)}(F),I=x.message;G===void 0&&(G=$.INTERNAL,I="Unknown error status: "+F+" with message "+x.message),_=!0,T.So(new ie(G,I)),f.close()}else ne(Rt,`RPC '${e}' stream ${i} received:`,U),T.bo(U)}}),R(a,Oy.STAT_EVENT,S=>{S.stat===bu.PROXY?ne(Rt,`RPC '${e}' stream ${i} detected buffering proxy`):S.stat===bu.NOPROXY&&ne(Rt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{T.wo()},0),T}}function jc(){return typeof document<"u"?document:null}/**
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
 */function Wl(t){return new OC(t,!0)}/**
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
 */class gv{constructor(e,n,s=1e3,i=1.5,r=6e4){this.ui=e,this.timerId=n,this.ko=s,this.qo=i,this.Qo=r,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-s);i>0&&ne("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class yv{constructor(e,n,s,i,r,o,a,c){this.ui=e,this.Ho=s,this.Jo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new gv(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(es(n.toString()),es("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Yo===n&&this.P_(s,i)},s=>{e(()=>{const i=new ie($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(i)})})}P_(e,n){const s=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{s(()=>this.I_(i))}),this.stream.onMessage(i=>{s(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ne("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AS extends yv{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=VC(this.serializer,e),s=function(r){if(!("targetChange"in r))return fe.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?fe.min():o.readTime?Dn(o.readTime):fe.min()}(e);return this.listener.d_(n,s)}A_(e){const n={};n.database=Mu(this.serializer),n.addTarget=function(r,o){let a;const c=o.target;if(a=Nu(c)?{documents:UC(r,c)}:{query:BC(r,c)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=lv(r,o.resumeToken);const u=Du(r,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(fe.min())>0){a.readTime=Za(r,o.snapshotVersion.toTimestamp());const u=Du(r,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const s=jC(this.serializer,e);s&&(n.labels=s),this.a_(n)}R_(e){const n={};n.database=Mu(this.serializer),n.removeTarget=e,this.a_(n)}}class bS extends yv{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return xe(!!e.streamToken),this.lastStreamToken=e.streamToken,xe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=FC(e.writeResults,e.commitTime),s=Dn(e.commitTime);return this.listener.g_(s,n)}p_(){const e={};e.database=Mu(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>LC(this.serializer,s))};this.a_(n)}}/**
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
 */class RS extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new ie($.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Mo(e,Ou(n,s),i,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new ie($.UNKNOWN,r.toString())})}Lo(e,n,s,i,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Ou(n,s),i,o,a,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ie($.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class CS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(es(n),this.D_=!1):ne("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class SS{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=r,this.k_._o(o=>{s.enqueueAndForget(async()=>{hi(this)&&(ne("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=me(c);u.L_.add(4),await Lo(u),u.q_.set("Unknown"),u.L_.delete(4),await ql(u)}(this))})}),this.q_=new CS(s,i)}}async function ql(t){if(hi(t))for(const e of t.B_)await e(!0)}async function Lo(t){for(const e of t.B_)await e(!1)}function vv(t,e){const n=me(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),ed(n)?Zh(n):or(n).r_()&&Jh(n,e))}function Xh(t,e){const n=me(t),s=or(n);n.N_.delete(e),s.r_()&&Ev(n,e),n.N_.size===0&&(s.r_()?s.o_():hi(n)&&n.q_.set("Unknown"))}function Jh(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}or(t).A_(e)}function Ev(t,e){t.Q_.xe(e),or(t).R_(e)}function Zh(t){t.Q_=new PC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),or(t).start(),t.q_.v_()}function ed(t){return hi(t)&&!or(t).n_()&&t.N_.size>0}function hi(t){return me(t).L_.size===0}function Tv(t){t.Q_=void 0}async function PS(t){t.q_.set("Online")}async function NS(t){t.N_.forEach((e,n)=>{Jh(t,e)})}async function kS(t,e){Tv(t),ed(t)?(t.q_.M_(e),Zh(t)):t.q_.set("Unknown")}async function DS(t,e,n){if(t.q_.set("Online"),e instanceof av&&e.state===2&&e.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(s){ne("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await el(t,s)}else if(e instanceof Na?t.Q_.Ke(e):e instanceof ov?t.Q_.He(e):t.Q_.We(e),!n.isEqual(fe.min()))try{const s=await _v(t.localStore);n.compareTo(s)>=0&&await function(r,o){const a=r.Q_.rt(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=r.N_.get(u);h&&r.N_.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=r.N_.get(c);if(!h)return;r.N_.set(c,h.withResumeToken(Tt.EMPTY_BYTE_STRING,h.snapshotVersion)),Ev(r,c);const f=new gs(h.target,c,u,h.sequenceNumber);Jh(r,f)}),r.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){ne("RemoteStore","Failed to raise snapshot:",s),await el(t,s)}}async function el(t,e,n){if(!xo(e))throw e;t.L_.add(1),await Lo(t),t.q_.set("Offline"),n||(n=()=>_v(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ne("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await ql(t)})}function wv(t,e){return e().catch(n=>el(t,n,e))}async function Kl(t){const e=me(t),n=Ds(e);let s=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;OS(e);)try{const i=await _S(e.localStore,s);if(i===null){e.O_.length===0&&n.o_();break}s=i.batchId,xS(e,i)}catch(i){await el(e,i)}Iv(e)&&Av(e)}function OS(t){return hi(t)&&t.O_.length<10}function xS(t,e){t.O_.push(e);const n=Ds(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Iv(t){return hi(t)&&!Ds(t).n_()&&t.O_.length>0}function Av(t){Ds(t).start()}async function MS(t){Ds(t).p_()}async function VS(t){const e=Ds(t);for(const n of t.O_)e.m_(n.mutations)}async function LS(t,e,n){const s=t.O_.shift(),i=qh.from(s,e,n);await wv(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Kl(t)}async function FS(t,e){e&&Ds(t).V_&&await async function(s,i){if(function(o){return RC(o)&&o!==$.ABORTED}(i.code)){const r=s.O_.shift();Ds(s).s_(),await wv(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Kl(s)}}(t,e),Iv(t)&&Av(t)}async function Tm(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),ne("RemoteStore","RemoteStore received new credentials");const s=hi(n);n.L_.add(3),await Lo(n),s&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await ql(n)}async function US(t,e){const n=me(t);e?(n.L_.delete(2),await ql(n)):e||(n.L_.add(2),await Lo(n),n.q_.set("Unknown"))}function or(t){return t.K_||(t.K_=function(n,s,i){const r=me(n);return r.w_(),new AS(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{Eo:PS.bind(null,t),Ro:NS.bind(null,t),mo:kS.bind(null,t),d_:DS.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),ed(t)?Zh(t):t.q_.set("Unknown")):(await t.K_.stop(),Tv(t))})),t.K_}function Ds(t){return t.U_||(t.U_=function(n,s,i){const r=me(n);return r.w_(),new bS(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:MS.bind(null,t),mo:FS.bind(null,t),f_:VS.bind(null,t),g_:LS.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Kl(t)):(await t.U_.stop(),t.O_.length>0&&(ne("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class td{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new td(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nd(t,e){if(es("AsyncQueue",`${e}: ${t}`),xo(t))return new ie($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Mi{constructor(e){this.comparator=e?(n,s)=>e(n,s)||oe.comparator(n.key,s.key):(n,s)=>oe.comparator(n.key,s.key),this.keyedMap=xr(),this.sortedSet=new it(this.comparator)}static emptySet(e){return new Mi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Mi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Mi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class wm{constructor(){this.W_=new it(oe.comparator)}track(e){const n=e.doc.key,s=this.W_.get(n);s?e.type!==0&&s.type===3?this.W_=this.W_.insert(n,e):e.type===3&&s.type!==1?this.W_=this.W_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.W_=this.W_.remove(n):e.type===1&&s.type===2?this.W_=this.W_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):de():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,s)=>{e.push(s)}),e}}class Yi{constructor(e,n,s,i,r,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Yi(e,n,Mi.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ul(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class BS{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class $S{constructor(){this.queries=Im(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,s){const i=me(n),r=i.queries;i.queries=Im(),r.forEach((o,a)=>{for(const c of a.j_)c.onError(s)})})(this,new ie($.ABORTED,"Firestore shutting down"))}}function Im(){return new rr(t=>zy(t),Ul)}async function sd(t,e){const n=me(t);let s=3;const i=e.query;let r=n.queries.get(i);r?!r.H_()&&e.J_()&&(s=2):(r=new BS,s=e.J_()?0:1);try{switch(s){case 0:r.z_=await n.onListen(i,!0);break;case 1:r.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=nd(o,`Initialization of query '${Ri(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.j_.push(e),e.Z_(n.onlineState),r.z_&&e.X_(r.z_)&&rd(n)}async function id(t,e){const n=me(t),s=e.query;let i=3;const r=n.queries.get(s);if(r){const o=r.j_.indexOf(e);o>=0&&(r.j_.splice(o,1),r.j_.length===0?i=e.J_()?0:1:!r.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function jS(t,e){const n=me(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.j_)a.X_(i)&&(s=!0);o.z_=i}}s&&rd(n)}function HS(t,e,n){const s=me(t),i=s.queries.get(e);if(i)for(const r of i.j_)r.onError(n);s.queries.delete(e)}function rd(t){t.Y_.forEach(e=>{e.next()})}var Lu,Am;(Am=Lu||(Lu={})).ea="default",Am.Cache="cache";class od{constructor(e,n,s){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Yi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const s=n!=="Offline";return(!this.options._a||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Yi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Lu.Cache}}/**
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
 */class bv{constructor(e){this.key=e}}class Rv{constructor(e){this.key=e}}class WS{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ye(),this.mutatedKeys=ye(),this.Aa=Gy(e),this.Ra=new Mi(this.Aa)}get Va(){return this.Ta}ma(e,n){const s=n?n.fa:new wm,i=n?n.Ra:this.Ra;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const m=i.get(h),_=Bl(this.query,f)?f:null,T=!!m&&this.mutatedKeys.has(m.key),R=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let S=!1;m&&_?m.data.isEqual(_.data)?T!==R&&(s.track({type:3,doc:_}),S=!0):this.ga(m,_)||(s.track({type:2,doc:_}),S=!0,(c&&this.Aa(_,c)>0||u&&this.Aa(_,u)<0)&&(a=!0)):!m&&_?(s.track({type:0,doc:_}),S=!0):m&&!_&&(s.track({type:1,doc:m}),S=!0,(c||u)&&(a=!0)),S&&(_?(o=o.add(_),r=R?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Ra:o,fa:s,ns:a,mutatedKeys:r}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,i){const r=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(_,T){const R=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de()}};return R(_)-R(T)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(s),i=i!=null&&i;const a=n&&!i?this.ya():[],c=this.da.size===0&&this.current&&!i?1:0,u=c!==this.Ea;return this.Ea=c,o.length!==0||u?{snapshot:new Yi(this.query,e.Ra,r,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new wm,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ye(),this.Ra.forEach(s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))});const n=[];return e.forEach(s=>{this.da.has(s)||n.push(new Rv(s))}),this.da.forEach(s=>{e.has(s)||n.push(new bv(s))}),n}ba(e){this.Ta=e.Ts,this.da=ye();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Yi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class qS{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class KS{constructor(e){this.key=e,this.va=!1}}class zS{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new rr(a=>zy(a),Ul),this.Ma=new Map,this.xa=new Set,this.Oa=new it(oe.comparator),this.Na=new Map,this.La=new Gh,this.Ba={},this.ka=new Map,this.qa=Qi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function GS(t,e,n=!0){const s=Dv(t);let i;const r=s.Fa.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.Da()):i=await Cv(s,e,n,!0),i}async function QS(t,e){const n=Dv(t);await Cv(n,e,!0,!1)}async function Cv(t,e,n,s){const i=await gS(t.localStore,kn(e)),r=i.targetId,o=t.sharedClientState.addLocalQueryTarget(r,n);let a;return s&&(a=await YS(t,e,r,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&vv(t.remoteStore,i),a}async function YS(t,e,n,s,i){t.Ka=(f,m,_)=>async function(R,S,M,U){let O=S.view.ma(M);O.ns&&(O=await ym(R.localStore,S.query,!1).then(({documents:I})=>S.view.ma(I,O)));const x=U&&U.targetChanges.get(S.targetId),F=U&&U.targetMismatches.get(S.targetId)!=null,G=S.view.applyChanges(O,R.isPrimaryClient,x,F);return Rm(R,S.targetId,G.wa),G.snapshot}(t,f,m,_);const r=await ym(t.localStore,e,!0),o=new WS(e,r.Ts),a=o.ma(r.documents),c=Vo.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,c);Rm(t,n,u.wa);const h=new qS(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function XS(t,e,n){const s=me(t),i=s.Fa.get(e),r=s.Ma.get(i.targetId);if(r.length>1)return s.Ma.set(i.targetId,r.filter(o=>!Ul(o,e))),void s.Fa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await Vu(s.localStore,i.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(i.targetId),n&&Xh(s.remoteStore,i.targetId),Fu(s,i.targetId)}).catch(Oo)):(Fu(s,i.targetId),await Vu(s.localStore,i.targetId,!0))}async function JS(t,e){const n=me(t),s=n.Fa.get(e),i=n.Ma.get(s.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Xh(n.remoteStore,s.targetId))}async function ZS(t,e,n){const s=o1(t);try{const i=await function(o,a){const c=me(o),u=st.now(),h=a.reduce((_,T)=>_.add(T.key),ye());let f,m;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let T=ts(),R=ye();return c.cs.getEntries(_,h).next(S=>{T=S,T.forEach((M,U)=>{U.isValidDocument()||(R=R.add(M))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,T)).next(S=>{f=S;const M=[];for(const U of a){const O=TC(U,f.get(U.key).overlayedDocument);O!=null&&M.push(new Fs(U.key,O,By(O.value.mapValue),mn.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,M,a)}).next(S=>{m=S;const M=S.applyToLocalDocumentSet(f,R);return c.documentOverlayCache.saveOverlays(_,S.batchId,M)})}).then(()=>({batchId:m.batchId,changes:Yy(f)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.Ba[o.currentUser.toKey()];u||(u=new it(Se)),u=u.insert(a,c),o.Ba[o.currentUser.toKey()]=u}(s,i.batchId,n),await Fo(s,i.changes),await Kl(s.remoteStore)}catch(i){const r=nd(i,"Failed to persist write");n.reject(r)}}async function Sv(t,e){const n=me(t);try{const s=await pS(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.Na.get(r);o&&(xe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?xe(o.va):i.removedDocuments.size>0&&(xe(o.va),o.va=!1))}),await Fo(n,s,e)}catch(s){await Oo(s)}}function bm(t,e,n){const s=me(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.Fa.forEach((r,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=me(o);c.onlineState=a;let u=!1;c.queries.forEach((h,f)=>{for(const m of f.j_)m.Z_(a)&&(u=!0)}),u&&rd(c)}(s.eventManager,e),i.length&&s.Ca.d_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function e1(t,e,n){const s=me(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Na.get(e),r=i&&i.key;if(r){let o=new it(oe.comparator);o=o.insert(r,Nt.newNoDocument(r,fe.min()));const a=ye().add(r),c=new Hl(fe.min(),new Map,new it(Se),o,a);await Sv(s,c),s.Oa=s.Oa.remove(r),s.Na.delete(e),ad(s)}else await Vu(s.localStore,e,!1).then(()=>Fu(s,e,n)).catch(Oo)}async function t1(t,e){const n=me(t),s=e.batch.batchId;try{const i=await fS(n.localStore,e);Nv(n,s,null),Pv(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Fo(n,i)}catch(i){await Oo(i)}}async function n1(t,e,n){const s=me(t);try{const i=await function(o,a){const c=me(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(f=>(xe(f!==null),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(s.localStore,e);Nv(s,e,n),Pv(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Fo(s,i)}catch(i){await Oo(i)}}function Pv(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Nv(t,e,n){const s=me(t);let i=s.Ba[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.Ba[s.currentUser.toKey()]=i}}function Fu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Ma.get(e))t.Fa.delete(s),n&&t.Ca.$a(s,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(s=>{t.La.containsKey(s)||kv(t,s)})}function kv(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Xh(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),ad(t))}function Rm(t,e,n){for(const s of n)s instanceof bv?(t.La.addReference(s.key,e),s1(t,s)):s instanceof Rv?(ne("SyncEngine","Document no longer in limbo: "+s.key),t.La.removeReference(s.key,e),t.La.containsKey(s.key)||kv(t,s.key)):de()}function s1(t,e){const n=e.key,s=n.path.canonicalString();t.Oa.get(n)||t.xa.has(s)||(ne("SyncEngine","New document in limbo: "+n),t.xa.add(s),ad(t))}function ad(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new oe(ze.fromString(e)),s=t.qa.next();t.Na.set(s,new KS(n)),t.Oa=t.Oa.insert(n,s),vv(t.remoteStore,new gs(kn(Fl(n.path)),s,"TargetPurposeLimboResolution",Lh.oe))}}async function Fo(t,e,n){const s=me(t),i=[],r=[],o=[];s.Fa.isEmpty()||(s.Fa.forEach((a,c)=>{o.push(s.Ka(c,e,n).then(u=>{var h;if((u||n)&&s.isPrimaryClient){const f=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;s.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){i.push(u);const f=Yh.Wi(c.targetId,u);r.push(f)}}))}),await Promise.all(o),s.Ca.d_(i),await async function(c,u){const h=me(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>j.forEach(u,m=>j.forEach(m.$i,_=>h.persistence.referenceDelegate.addReference(f,m.targetId,_)).next(()=>j.forEach(m.Ui,_=>h.persistence.referenceDelegate.removeReference(f,m.targetId,_)))))}catch(f){if(!xo(f))throw f;ne("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const m=f.targetId;if(!f.fromCache){const _=h.os.get(m),T=_.snapshotVersion,R=_.withLastLimboFreeSnapshotVersion(T);h.os=h.os.insert(m,R)}}}(s.localStore,r))}async function i1(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){ne("SyncEngine","User change. New user:",e.toKey());const s=await mv(n.localStore,e);n.currentUser=e,function(r,o){r.ka.forEach(a=>{a.forEach(c=>{c.reject(new ie($.CANCELLED,o))})}),r.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Fo(n,s.hs)}}function r1(t,e){const n=me(t),s=n.Na.get(e);if(s&&s.va)return ye().add(s.key);{let i=ye();const r=n.Ma.get(e);if(!r)return i;for(const o of r){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function Dv(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=r1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=e1.bind(null,e),e.Ca.d_=jS.bind(null,e.eventManager),e.Ca.$a=HS.bind(null,e.eventManager),e}function o1(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=t1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=n1.bind(null,e),e}class tl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wl(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return dS(this.persistence,new uS,e.initialUser,this.serializer)}Ga(e){return new aS(Qh.Zr,this.serializer)}Wa(e){return new vS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}tl.provider={build:()=>new tl};class Uu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>bm(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=i1.bind(null,this.syncEngine),await US(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $S}()}createDatastore(e){const n=Wl(e.databaseInfo.databaseId),s=function(r){return new IS(r)}(e.databaseInfo);return function(r,o,a,c){return new RS(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,i,r,o,a){return new SS(s,i,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>bm(this.syncEngine,n,0),function(){return Em.D()?new Em:new ES}())}createSyncEngine(e,n){return function(i,r,o,a,c,u,h){const f=new zS(i,r,o,a,c,u);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const r=me(i);ne("RemoteStore","RemoteStore shutting down."),r.L_.add(5),await Lo(r),r.k_.shutdown(),r.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Uu.provider={build:()=>new Uu};/**
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
 */class ld{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):es("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class a1{constructor(e,n,s,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Ct.UNAUTHENTICATED,this.clientId=Ly.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,async o=>{ne("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(ne("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=nd(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Hc(t,e){t.asyncQueue.verifyOperationInProgress(),ne("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await mv(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Cm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await l1(t);ne("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(s=>Tm(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Tm(e.remoteStore,i)),t._onlineComponents=e}async function l1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ne("FirestoreClient","Using user provided OfflineComponentProvider");try{await Hc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===$.FAILED_PRECONDITION||i.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;qi("Error using user provided cache. Falling back to memory cache: "+n),await Hc(t,new tl)}}else ne("FirestoreClient","Using default OfflineComponentProvider"),await Hc(t,new tl);return t._offlineComponents}async function Ov(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ne("FirestoreClient","Using user provided OnlineComponentProvider"),await Cm(t,t._uninitializedComponentsProvider._online)):(ne("FirestoreClient","Using default OnlineComponentProvider"),await Cm(t,new Uu))),t._onlineComponents}function c1(t){return Ov(t).then(e=>e.syncEngine)}async function nl(t){const e=await Ov(t),n=e.eventManager;return n.onListen=GS.bind(null,e.syncEngine),n.onUnlisten=XS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=QS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=JS.bind(null,e.syncEngine),n}function u1(t,e,n={}){const s=new Xn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,u){const h=new ld({next:m=>{h.Za(),o.enqueueAndForget(()=>id(r,f));const _=m.docs.has(a);!_&&m.fromCache?u.reject(new ie($.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&c&&c.source==="server"?u.reject(new ie($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new od(Fl(a.path),h,{includeMetadataChanges:!0,_a:!0});return sd(r,f)}(await nl(t),t.asyncQueue,e,n,s)),s.promise}function h1(t,e,n={}){const s=new Xn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,u){const h=new ld({next:m=>{h.Za(),o.enqueueAndForget(()=>id(r,f)),m.fromCache&&c.source==="server"?u.reject(new ie($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new od(a,h,{includeMetadataChanges:!0,_a:!0});return sd(r,f)}(await nl(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function xv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Sm=new Map;/**
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
 */function Mv(t,e,n){if(!n)throw new ie($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function d1(t,e,n,s){if(e===!0&&s===!0)throw new ie($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Pm(t){if(!oe.isDocumentKey(t))throw new ie($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Nm(t){if(oe.isDocumentKey(t))throw new ie($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function cd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de()}function en(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=cd(t);throw new ie($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class km{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ie($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}d1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xv((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zl{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new km({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new km(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new PR;switch(s.type){case"firstParty":return new OR(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ie($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Sm.get(n);s&&(ne("ComponentProvider","Removing Datastore"),Sm.delete(n),s.terminate())}(this),Promise.resolve()}}function f1(t,e,n,s={}){var i;const r=(t=en(t,zl))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&qi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=Ct.MOCK_USER;else{a=nb(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new ie($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ct(u)}t._authCredentials=new NR(new Vy(a,c))}}/**
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
 */class Uo{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Uo(this.firestore,e,this._query)}}class $t{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $t(this.firestore,e,this._key)}}class Cs extends Uo{constructor(e,n,s){super(e,n,Fl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $t(this.firestore,null,new oe(e))}withConverter(e){return new Cs(this.firestore,e,this._path)}}function Vv(t,e,...n){if(t=Kt(t),Mv("collection","path",e),t instanceof zl){const s=ze.fromString(e,...n);return Nm(s),new Cs(t,null,s)}{if(!(t instanceof $t||t instanceof Cs))throw new ie($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ze.fromString(e,...n));return Nm(s),new Cs(t.firestore,null,s)}}function Wc(t,e,...n){if(t=Kt(t),arguments.length===1&&(e=Ly.newId()),Mv("doc","path",e),t instanceof zl){const s=ze.fromString(e,...n);return Pm(s),new $t(t,null,new oe(s))}{if(!(t instanceof $t||t instanceof Cs))throw new ie($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ze.fromString(e,...n));return Pm(s),new $t(t.firestore,t instanceof Cs?t.converter:null,new oe(s))}}/**
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
 */class Dm{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new gv(this,"async_queue_retry"),this.Vu=()=>{const s=jc();s&&ne("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=e;const n=jc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=jc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Xn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!xo(e))throw e;ne("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(s=>{this.Eu=s,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw es("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.du=!1,s))));return this.mu=n,n}enqueueAfterDelay(e,n,s){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=td.createAndSchedule(this,e,n,s,r=>this.yu(r));return this.Tu.push(i),i}fu(){this.Eu&&de()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Om(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const i=n;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Os extends zl{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Dm,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Dm(e),this._firestoreClient=void 0,await e}}}function p1(t,e){const n=typeof t=="object"?t:Cy(),s=typeof t=="string"?t:"(default)",i=mR(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=eb("firestore");r&&f1(i,...r)}return i}function Gl(t){if(t._terminated)throw new ie($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||m1(t),t._firestoreClient}function m1(t){var e,n,s;const i=t._freezeSettings(),r=function(a,c,u,h){return new KR(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,xv(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new a1(t._authCredentials,t._appCheckCredentials,t._queue,r,t._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Xi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xi(Tt.fromBase64String(e))}catch(n){throw new ie($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xi(Tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ql{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ud{constructor(e){this._methodName=e}}/**
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
 */class Yl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}}/**
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
 */class hd{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0}(this._values,e._values)}}/**
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
 */const _1=/^__.*__$/;class g1{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Fs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Mo(e,this.data,n,this.fieldTransforms)}}class Lv{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Fs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Fv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de()}}class dd{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.vu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new dd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:s,xu:!1});return i.Ou(e),i}Nu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:s,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return sl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Fv(this.Cu)&&_1.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class y1{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Wl(e)}Qu(e,n,s,i=!1){return new dd({Cu:e,methodName:n,qu:s,path:vt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Uv(t){const e=t._freezeSettings(),n=Wl(t._databaseId);return new y1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function v1(t,e,n,s,i,r={}){const o=t.Qu(r.merge||r.mergeFields?2:0,e,n,i);fd("Data must be an object, but it was:",o,s);const a=Bv(s,o);let c,u;if(r.merge)c=new Xt(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const f of r.mergeFields){const m=Bu(e,f,n);if(!o.contains(m))throw new ie($.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);jv(h,m)||h.push(m)}c=new Xt(h),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new g1(new Wt(a),c,u)}class Xl extends ud{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Xl}}function E1(t,e,n,s){const i=t.Qu(1,e,n);fd("Data must be an object, but it was:",i,s);const r=[],o=Wt.empty();ui(s,(c,u)=>{const h=pd(e,c,n);u=Kt(u);const f=i.Nu(h);if(u instanceof Xl)r.push(h);else{const m=Jl(u,f);m!=null&&(r.push(h),o.set(h,m))}});const a=new Xt(r);return new Lv(o,a,i.fieldTransforms)}function T1(t,e,n,s,i,r){const o=t.Qu(1,e,n),a=[Bu(e,s,n)],c=[i];if(r.length%2!=0)throw new ie($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<r.length;m+=2)a.push(Bu(e,r[m])),c.push(r[m+1]);const u=[],h=Wt.empty();for(let m=a.length-1;m>=0;--m)if(!jv(u,a[m])){const _=a[m];let T=c[m];T=Kt(T);const R=o.Nu(_);if(T instanceof Xl)u.push(_);else{const S=Jl(T,R);S!=null&&(u.push(_),h.set(_,S))}}const f=new Xt(u);return new Lv(h,f,o.fieldTransforms)}function Jl(t,e){if($v(t=Kt(t)))return fd("Unsupported field value:",e,t),Bv(t,e);if(t instanceof ud)return function(s,i){if(!Fv(i.Cu))throw i.Bu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const a of s){let c=Jl(a,i.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}}(t,e)}return function(s,i){if((s=Kt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return mC(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=st.fromDate(s);return{timestampValue:Za(i.serializer,r)}}if(s instanceof st){const r=new st(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Za(i.serializer,r)}}if(s instanceof Yl)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Xi)return{bytesValue:lv(i.serializer,s._byteString)};if(s instanceof $t){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:zh(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof hd)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.Bu("VectorValues must only contain numeric values.");return Hh(a.serializer,c)})}}}}}}(s,i);throw i.Bu(`Unsupported field value: ${cd(s)}`)}(t,e)}function Bv(t,e){const n={};return Fy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ui(t,(s,i)=>{const r=Jl(i,e.Mu(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function $v(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof st||t instanceof Yl||t instanceof Xi||t instanceof $t||t instanceof ud||t instanceof hd)}function fd(t,e,n){if(!$v(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const s=cd(n);throw s==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+s)}}function Bu(t,e,n){if((e=Kt(e))instanceof Ql)return e._internalPath;if(typeof e=="string")return pd(t,e);throw sl("Field path arguments must be of type string or ",t,!1,void 0,n)}const w1=new RegExp("[~\\*/\\[\\]]");function pd(t,e,n){if(e.search(w1)>=0)throw sl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ql(...e.split("."))._internalPath}catch{throw sl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function sl(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new ie($.INVALID_ARGUMENT,a+t+c)}function jv(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Hv{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new $t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new I1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Wv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class I1 extends Hv{data(){return super.data()}}function Wv(t,e){return typeof e=="string"?pd(t,e):e instanceof Ql?e._internalPath:e._delegate._internalPath}/**
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
 */function qv(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ie($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class A1{convertValue(e,n="none"){switch(ri(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ii(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw de()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return ui(e,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertVectorValue(e){var n,s,i;const r=(i=(s=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||s===void 0?void 0:s.values)===null||i===void 0?void 0:i.map(o=>Ze(o.doubleValue));return new hd(r)}convertGeoPoint(e){return new Yl(Ze(e.latitude),Ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Uh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(vo(e));default:return null}}convertTimestamp(e){const n=ks(e);return new st(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ze.fromString(e);xe(pv(s));const i=new Eo(s.get(1),s.get(3)),r=new oe(s.popFirst(5));return i.isEqual(n)||es(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function b1(t,e,n){let s;return s=t?t.toFirestore(e):e,s}/**
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
 */class Vr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Kv extends Hv{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ka(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Wv("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ka extends Kv{data(e={}){return super.data(e)}}class zv{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Vr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ka(this._firestore,this._userDataWriter,s.key,s,new Vr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ie($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new ka(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Vr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const c=new ka(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Vr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:R1(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function R1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return de()}}/**
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
 */function Gv(t){t=en(t,$t);const e=en(t.firestore,Os);return u1(Gl(e),t._key).then(n=>Qv(e,t,n))}class md extends A1{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $t(this.firestore,null,n)}}function C1(t){t=en(t,Uo);const e=en(t.firestore,Os),n=Gl(e),s=new md(e);return qv(t._query),h1(n,t._query).then(i=>new zv(e,s,t,i))}function S1(t,e,n){t=en(t,$t);const s=en(t.firestore,Os),i=b1(t.converter,e);return gd(s,[v1(Uv(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,mn.none())])}function P1(t,e,n,...s){t=en(t,$t);const i=en(t.firestore,Os),r=Uv(i);let o;return o=typeof(e=Kt(e))=="string"||e instanceof Ql?T1(r,"updateDoc",t._key,e,n,s):E1(r,"updateDoc",t._key,e),gd(i,[o.toMutation(t._key,mn.exists(!0))])}function N1(t){return gd(en(t.firestore,Os),[new Wh(t._key,mn.none())])}function _d(t,...e){var n,s,i;t=Kt(t);let r={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Om(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges,source:r.source};if(Om(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(s=f.error)===null||s===void 0?void 0:s.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let c,u,h;if(t instanceof $t)u=en(t.firestore,Os),h=Fl(t._key.path),c={next:f=>{e[o]&&e[o](Qv(u,t,f))},error:e[o+1],complete:e[o+2]};else{const f=en(t,Uo);u=en(f.firestore,Os),h=f._query;const m=new md(u);c={next:_=>{e[o]&&e[o](new zv(u,m,f,_))},error:e[o+1],complete:e[o+2]},qv(t._query)}return function(m,_,T,R){const S=new ld(R),M=new od(_,S,T);return m.asyncQueue.enqueueAndForget(async()=>sd(await nl(m),M)),()=>{S.Za(),m.asyncQueue.enqueueAndForget(async()=>id(await nl(m),M))}}(Gl(u),h,a,c)}function gd(t,e){return function(s,i){const r=new Xn;return s.asyncQueue.enqueueAndForget(async()=>ZS(await c1(s),i,r)),r.promise}(Gl(t),e)}function Qv(t,e,n){const s=n.docs.get(e._key),i=new md(t);return new Kv(t,i,e._key,s,new Vr(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ir=i})(sr),xn(new Tn("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new Os(new kR(s.getProvider("auth-internal")),new MR(s.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ie($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Eo(u.options.projectId,h)}(o,i),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Zt(Xp,"4.7.3",e),Zt(Xp,"4.7.3","esm2017")})();const Yv=Ry({apiKey:"AIzaSyBQ6izD-t26QvAFhHV9SvmNy1cdt9fLaz8",authDomain:"ryan-fam.firebaseapp.com",projectId:"ryan-fam",storageBucket:"ryan-fam.firebasestorage.app",messagingSenderId:"750155303707",appId:"1:750155303707:web:d16ef825d3c2a14e93a1be"}),Jr=p1(Yv);var Da=(t=>(t.CALENDAR="calendar-events",t.BULLETIN="bulletins",t))(Da||{});const _x=Vv(Jr,"calendar-events"),k1=Vv(Jr,"bulletins");function Xv(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Jv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const D1=Jv,Zv=new nr("auth","Firebase",Jv());/**
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
 */const il=new Do("@firebase/auth");function O1(t,...e){il.logLevel<=ge.WARN&&il.warn(`Auth (${sr}): ${t}`,...e)}function Oa(t,...e){il.logLevel<=ge.ERROR&&il.error(`Auth (${sr}): ${t}`,...e)}/**
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
 */function xm(t,...e){throw yd(t,...e)}function eE(t,...e){return yd(t,...e)}function tE(t,e,n){const s=Object.assign(Object.assign({},D1()),{[e]:n});return new nr("auth","Firebase",s).create(e,{appName:t.name})}function xa(t){return tE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yd(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Zv.create(t,...e)}function Ne(t,e,...n){if(!t)throw yd(e,...n)}function Zr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oa(e),new Error(e)}function rl(t,e){t||Zr(e)}function x1(){return Mm()==="http:"||Mm()==="https:"}function Mm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function M1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(x1()||rb()||"connection"in navigator)?navigator.onLine:!0}function V1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Bo{constructor(e,n){this.shortDelay=e,this.longDelay=n,rl(n>e,"Short delay should be less than long delay!"),this.isMobile=Oh()||Ey()}get(){return M1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function L1(t,e){rl(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class nE{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const F1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const U1=new Bo(3e4,6e4);function sE(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zl(t,e,n,s,i={}){return iE(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=xh(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},r);return ib()||(u.referrerPolicy="no-referrer"),nE.fetch()(rE(t,t.config.apiHost,n,a),u)})}async function iE(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},F1),e);try{const i=new B1(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw _a(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw _a(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw _a(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw _a(t,"user-disabled",o);const h=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw tE(t,h,u);xm(t,h)}}catch(i){if(i instanceof ss)throw i;xm(t,"network-request-failed",{message:String(i)})}}function rE(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?L1(t.config,i):`${t.config.apiScheme}://${i}`}class B1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(eE(this.auth,"network-request-failed")),U1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _a(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=eE(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function $1(t,e){return Zl(t,"POST","/v1/accounts:delete",e)}async function oE(t,e){return Zl(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function eo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function j1(t,e=!1){const n=Kt(t),s=await n.getIdToken(e),i=aE(s);Ne(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:eo(qc(i.auth_time)),issuedAtTime:eo(qc(i.iat)),expirationTime:eo(qc(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function qc(t){return Number(t)*1e3}function aE(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Oa("JWT malformed, contained fewer than 3 sections"),null;try{const i=qa(n);return i?JSON.parse(i):(Oa("Failed to decode base64 JWT payload"),null)}catch(i){return Oa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Vm(t){const e=aE(t);return Ne(e,"internal-error"),Ne(typeof e.exp<"u","internal-error"),Ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function $u(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ss&&H1(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function H1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class W1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ju{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=eo(this.lastLoginAt),this.creationTime=eo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ol(t){var e;const n=t.auth,s=await t.getIdToken(),i=await $u(t,oE(n,{idToken:s}));Ne(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?lE(r.providerUserInfo):[],a=K1(t.providerData,o),c=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ju(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function q1(t){const e=Kt(t);await ol(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function K1(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function lE(t){return t.map(e=>{var{providerId:n}=e,s=Xv(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function z1(t,e){const n=await iE(t,{},async()=>{const s=xh({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=rE(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",nE.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function G1(t,e){return Zl(t,"POST","/v2/accounts:revokeToken",sE(t,e))}/**
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
 */class Vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ne(e.idToken,"internal-error"),Ne(typeof e.idToken<"u","internal-error"),Ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ne(e.length!==0,"internal-error");const n=Vm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await z1(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Vi;return s&&(Ne(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(Ne(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(Ne(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vi,this.toJSON())}_performRefresh(){return Zr("not implemented")}}/**
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
 */function hs(t,e){Ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ys{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Xv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new W1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ju(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await $u(this,this.stsTokenManager.getToken(this.auth,e));return Ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return j1(this,e)}reload(){return q1(this)}_assign(e){this!==e&&(Ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ys(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ol(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dr(this.auth.app))return Promise.reject(xa(this.auth));const e=await this.getIdToken();return await $u(this,$1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,c,u,h;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,M=(u=n.createdAt)!==null&&u!==void 0?u:void 0,U=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:O,emailVerified:x,isAnonymous:F,providerData:G,stsTokenManager:I}=n;Ne(O&&I,e,"internal-error");const y=Vi.fromJSON(this.name,I);Ne(typeof O=="string",e,"internal-error"),hs(f,e.name),hs(m,e.name),Ne(typeof x=="boolean",e,"internal-error"),Ne(typeof F=="boolean",e,"internal-error"),hs(_,e.name),hs(T,e.name),hs(R,e.name),hs(S,e.name),hs(M,e.name),hs(U,e.name);const v=new ys({uid:O,auth:e,email:m,emailVerified:x,displayName:f,isAnonymous:F,photoURL:T,phoneNumber:_,tenantId:R,stsTokenManager:y,createdAt:M,lastLoginAt:U});return G&&Array.isArray(G)&&(v.providerData=G.map(b=>Object.assign({},b))),S&&(v._redirectEventId=S),v}static async _fromIdTokenResponse(e,n,s=!1){const i=new Vi;i.updateFromServerResponse(n);const r=new ys({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ol(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];Ne(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?lE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new Vi;a.updateFromIdToken(s);const c=new ys({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new ju(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,u),c}}/**
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
 */const Lm=new Map;function Ys(t){rl(t instanceof Function,"Expected a class definition");let e=Lm.get(t);return e?(rl(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Lm.set(t,e),e)}/**
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
 */class cE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cE.type="NONE";const Fm=cE;/**
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
 */function Kc(t,e,n){return`firebase:${t}:${e}:${n}`}class Li{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Kc(this.userKey,i.apiKey,r),this.fullPersistenceKey=Kc("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ys._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Li(Ys(Fm),e,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||Ys(Fm);const o=Kc(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const f=ys._fromJSON(e,h);u!==r&&(a=f),r=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Li(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new Li(r,e,s))}}/**
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
 */function Um(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(J1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Q1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(eP(e))return"Blackberry";if(tP(e))return"Webos";if(Y1(e))return"Safari";if((e.includes("chrome/")||X1(e))&&!e.includes("edge/"))return"Chrome";if(Z1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Q1(t=En()){return/firefox\//i.test(t)}function Y1(t=En()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function X1(t=En()){return/crios\//i.test(t)}function J1(t=En()){return/iemobile/i.test(t)}function Z1(t=En()){return/android/i.test(t)}function eP(t=En()){return/blackberry/i.test(t)}function tP(t=En()){return/webos/i.test(t)}/**
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
 */function uE(t,e=[]){let n;switch(t){case"Browser":n=Um(En());break;case"Worker":n=`${Um(En())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${sr}/${s}`}/**
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
 */class nP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function sP(t,e={}){return Zl(t,"GET","/v2/passwordPolicy",sE(t,e))}/**
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
 */const iP=6;class rP{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:iP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class oP{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bm(this),this.idTokenSubscription=new Bm(this),this.beforeStateQueue=new nP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ys(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Li.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await oE(this,{idToken:e}),s=await ys._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Dr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ol(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=V1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dr(this.app))return Promise.reject(xa(this));const n=e?Kt(e):null;return n&&Ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dr(this.app)?Promise.reject(xa(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dr(this.app)?Promise.reject(xa(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ys(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sP(this),n=new rP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new nr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await G1(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ys(e)||this._popupRedirectResolver;Ne(n,this,"argument-error"),this.redirectPersistenceManager=await Li.create(this,[Ys(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ne(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&O1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function aP(t){return Kt(t)}class Bm{constructor(e){this.auth=e,this.observer=null,this.addObserver=pb(n=>this.observer=n)}get next(){return Ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function lP(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ys);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}new Bo(3e4,6e4);/**
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
 */new Bo(2e3,1e4);/**
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
 */new Bo(3e4,6e4);/**
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
 */new Bo(5e3,15e3);var $m="@firebase/auth",jm="1.7.9";/**
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
 */class cP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function uP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hP(t){xn(new Tn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;Ne(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uE(t)},u=new oP(s,i,r,c);return lP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),xn(new Tn("auth-internal",e=>{const n=aP(e.getProvider("auth").getImmediate());return(s=>new cP(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt($m,jm,uP(t)),Zt($m,jm,"esm2017")}/**
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
 */const dP=5*60;tb("authIdTokenMaxAge");hP("Browser");/**
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
 */const fP=new Map,pP={activated:!1,tokenObservers:[]};function wn(t){return fP.get(t)||Object.assign({},pP)}const Hm={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class mP{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new mo,this.pending.promise.catch(n=>{}),await _P(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new mo,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function _P(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const gP={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},al=new nr("appCheck","AppCheck",gP);function hE(t){if(!wn(t).activated)throw al.create("use-before-activation",{appName:t.name})}/**
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
 */const yP="firebase-app-check-database",vP=1,Hu="firebase-app-check-store";let ga=null;function EP(){return ga||(ga=new Promise((t,e)=>{try{const n=indexedDB.open(yP,vP);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(al.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(Hu,{keyPath:"compositeKey"})}}}catch(n){e(al.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ga)}function TP(t,e){return wP(IP(t),e)}async function wP(t,e){const s=(await EP()).transaction(Hu,"readwrite"),r=s.objectStore(Hu).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=c=>{o()},s.onerror=c=>{var u;a(al.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function IP(t){return`${t.options.appId}-${t.name}`}/**
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
 */const Wu=new Do("@firebase/app-check");function Wm(t,e){return wy()?TP(t,e).catch(n=>{Wu.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const AP={error:"UNKNOWN_ERROR"};function bP(t){return Ol.encodeString(JSON.stringify(t),!1)}async function qu(t,e=!1){const n=t.app;hE(n);const s=wn(n);let i=s.token,r;if(i&&!Lr(i)&&(s.token=void 0,i=void 0),!i){const c=await s.cachedTokenPromise;c&&(Lr(c)?i=c:await Wm(n,void 0))}if(!e&&i&&Lr(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await wn(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?Wu.warn(c.message):Wu.error(c),r=c}let a;return i?r?Lr(i)?a={token:i.token,internalError:r}:a=Km(r):(a={token:i.token},s.token=i,await Wm(n,i)):a=Km(r),o&&PP(n,a),a}async function RP(t){const e=t.app;hE(e);const{provider:n}=wn(e);{const{token:s}=await n.getToken();return{token:s}}}function CP(t,e,n,s){const{app:i}=t,r=wn(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Lr(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),qm(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>qm(t))}function dE(t,e){const n=wn(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function qm(t){const{app:e}=t,n=wn(e);let s=n.tokenRefresher;s||(s=SP(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function SP(t){const{app:e}=t;return new mP(async()=>{const n=wn(e);let s;if(n.token?s=await qu(t,!0):s=await qu(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=wn(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},Hm.RETRIAL_MIN_WAIT,Hm.RETRIAL_MAX_WAIT)}function PP(t,e){const n=wn(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function Lr(t){return t.expireTimeMillis-Date.now()>0}function Km(t){return{token:bP(AP),error:t}}/**
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
 */class NP{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=wn(this.app);for(const n of e)dE(this.app,n.next);return Promise.resolve()}}function kP(t,e){return new NP(t,e)}function DP(t){return{getToken:e=>qu(t,e),getLimitedUseToken:()=>RP(t),addTokenListener:e=>CP(t,"INTERNAL",e),removeTokenListener:e=>dE(t.app,e)}}const OP="@firebase/app-check",xP="0.8.8",MP="app-check",zm="app-check-internal";function VP(){xn(new Tn(MP,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return kP(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(zm).initialize()})),xn(new Tn(zm,t=>{const e=t.getProvider("app-check").getImmediate();return DP(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Zt(OP,xP)}VP();const fE=Symbol("firebaseApp");function pE(t){return Wg()&&Jt(fE,null)||Cy(t)}const Sn=()=>{};function vd(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function LP(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function di(t){return!!t&&typeof t=="object"}const FP=Object.prototype;function UP(t){return di(t)&&Object.getPrototypeOf(t)===FP}function Ed(t){return di(t)&&t.type==="document"}function BP(t){return di(t)&&t.type==="collection"}function $P(t){return Ed(t)||BP(t)}function jP(t){return di(t)&&t.type==="query"}function HP(t){return di(t)&&"ref"in t}function WP(t){return di(t)&&typeof t.bucket=="string"}function qP(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const KP=Symbol.for("v-scx");function zP(){return!!Jt(KP,0)}var Gm={};const Qm="@firebase/database",Ym="1.0.8";/**
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
 */let mE="";function GP(t){mE=t}/**
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
 */class QP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),yt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:_o(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class YP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return is(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const _E=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new QP(e)}}catch{}return new YP},Xs=_E("localStorage"),XP=_E("sessionStorage");/**
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
 */const Fi=new Do("@firebase/database"),JP=function(){let t=1;return function(){return t++}}(),gE=function(t){const e=yb(t),n=new fb;n.update(e);const s=n.digest();return Ol.encodeByteArray(s)},$o=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=$o.apply(null,s):typeof s=="object"?e+=yt(s):e+=s,e+=" "}return e};let to=null,Xm=!0;const ZP=function(t,e){Y(!e,"Can't turn on custom loggers persistently."),Fi.logLevel=ge.VERBOSE,to=Fi.log.bind(Fi)},kt=function(...t){if(Xm===!0&&(Xm=!1,to===null&&XP.get("logging_enabled")===!0&&ZP()),to){const e=$o.apply(null,t);to(e)}},jo=function(t){return function(...e){kt(t,...e)}},Ku=function(...t){const e="FIREBASE INTERNAL ERROR: "+$o(...t);Fi.error(e)},oi=function(...t){const e=`FIREBASE FATAL ERROR: ${$o(...t)}`;throw Fi.error(e),new Error(e)},tn=function(...t){const e="FIREBASE WARNING: "+$o(...t);Fi.warn(e)},eN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&tn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},yE=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},tN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ji="[MIN_NAME]",ai="[MAX_NAME]",ar=function(t,e){if(t===e)return 0;if(t===Ji||e===ai)return-1;if(e===Ji||t===ai)return 1;{const n=Jm(t),s=Jm(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},nN=function(t,e){return t===e?0:t<e?-1:1},Cr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+yt(e))},Td=function(t){if(typeof t!="object"||t===null)return yt(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=yt(e[s]),n+=":",n+=Td(t[e[s]]);return n+="}",n},vE=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function ln(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const EE=function(t){Y(!yE(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(i?1:0),u.reverse();const h=u.join("");let f="";for(c=0;c<64;c+=8){let m=parseInt(h.substr(c,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},sN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},iN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},rN=new RegExp("^-?(0*)\\d{1,10}$"),oN=-2147483648,aN=2147483647,Jm=function(t){if(rN.test(t)){const e=Number(t);if(e>=oN&&e<=aN)return e}return null},Ho=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw tn("Exception was thrown by user callback.",n),e},Math.floor(0))}},lN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},no=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class cN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){tn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class uN{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(kt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',tn(e)}}/**
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
 */const wd="5",TE="v",wE="s",IE="r",AE="f",bE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,RE="ls",CE="p",zu="ac",SE="websocket",PE="long_polling";/**
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
 */class hN{constructor(e,n,s,i,r=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Xs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Xs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function dN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function NE(t,e,n){Y(typeof e=="string","typeof type must == string"),Y(typeof n=="object","typeof params must == object");let s;if(e===SE)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===PE)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);dN(t)&&(n.ns=t.namespace);const i=[];return ln(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class fN{constructor(){this.counters_={}}incrementCounter(e,n=1){is(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return zA(this.counters_)}}/**
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
 */const zc={},Gc={};function Id(t){const e=t.toString();return zc[e]||(zc[e]=new fN),zc[e]}function pN(t,e){const n=t.toString();return Gc[n]||(Gc[n]=e()),Gc[n]}/**
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
 */class mN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ho(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Zm="start",_N="close",gN="pLPCommand",yN="pRTLPCB",kE="id",DE="pw",OE="ser",vN="cb",EN="seg",TN="ts",wN="d",IN="dframe",xE=1870,ME=30,AN=xE-ME,bN=25e3,RN=3e4;class Pi{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=jo(e),this.stats_=Id(n),this.urlFn=c=>(this.appCheckToken&&(c[zu]=this.appCheckToken),NE(n,PE,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new mN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(RN)),tN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ad((...r)=>{const[o,a,c,u,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Zm)this.id=a,this.password=c;else if(o===_N)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Zm]="t",s[OE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[vN]=this.scriptTagHolder.uniqueCallbackIdentifier),s[TE]=wd,this.transportSessionId&&(s[wE]=this.transportSessionId),this.lastSessionId&&(s[RE]=this.lastSessionId),this.applicationId&&(s[CE]=this.applicationId),this.appCheckToken&&(s[zu]=this.appCheckToken),typeof location<"u"&&location.hostname&&bE.test(location.hostname)&&(s[IE]=AE);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Pi.forceAllow_=!0}static forceDisallow(){Pi.forceDisallow_=!0}static isAvailable(){return Pi.forceAllow_?!0:!Pi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!sN()&&!iN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=yt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=gy(n),i=vE(s,AN);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[IN]="t",s[kE]=e,s[DE]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=yt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ad{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=JP(),window[gN+this.uniqueCallbackIdentifier]=e,window[yN+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ad.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){kt("frame writing exception"),a.stack&&kt(a.stack),kt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||kt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[kE]=this.myID,e[DE]=this.myPW,e[OE]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ME+s.length<=xE;){const o=this.pendingSegs.shift();s=s+"&"+EN+i+"="+o.seg+"&"+TN+i+"="+o.ts+"&"+wN+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(bN)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{kt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const CN=16384,SN=45e3;let ll=null;typeof MozWebSocket<"u"?ll=MozWebSocket:typeof WebSocket<"u"&&(ll=WebSocket);class hn{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=jo(this.connId),this.stats_=Id(n),this.connURL=hn.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[TE]=wd,typeof location<"u"&&location.hostname&&bE.test(location.hostname)&&(o[IE]=AE),n&&(o[wE]=n),s&&(o[RE]=s),i&&(o[zu]=i),r&&(o[CE]=r),NE(e,SE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Xs.set("previous_websocket_failure",!0);try{let s;Ty(),this.mySock=new ll(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){hn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ll!==null&&!hn.forceDisallow_}static previouslyFailed(){return Xs.isInMemoryStorage||Xs.get("previous_websocket_failure")===!0}markConnectionHealthy(){Xs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=_o(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Y(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=yt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=vE(n,CN);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(SN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}hn.responsesRequiredToBeHealthy=2;hn.healthyTimeout=3e4;/**
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
 */class Ao{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Pi,hn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=hn&&hn.isAvailable();let s=n&&!hn.previouslyFailed();if(e.webSocketOnly&&(n||tn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[hn];else{const i=this.transports_=[];for(const r of Ao.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ao.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ao.globalTransportInitialized_=!1;/**
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
 */const PN=6e4,NN=5e3,kN=10*1024,DN=100*1024,Qc="t",e_="d",ON="s",t_="r",xN="e",n_="o",s_="a",i_="n",r_="p",MN="h";class VN{constructor(e,n,s,i,r,o,a,c,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=jo("c:"+this.id+":"),this.transportManager_=new Ao(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=no(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>DN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>kN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Qc in e){const n=e[Qc];n===s_?this.upgradeIfSecondaryHealthy_():n===t_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===n_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Cr("t",e),s=Cr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:r_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:s_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:i_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Cr("t",e),s=Cr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Cr(Qc,e);if(e_ in e){const s=e[e_];if(n===MN){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===i_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ON?this.onConnectionShutdown_(s):n===t_?this.onReset_(s):n===xN?Ku("Server Error: "+s):n===n_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ku("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),wd!==s&&tn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),no(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(PN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):no(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(NN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:r_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Xs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class VE{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class LE{constructor(e){this.allowedEvents_=e,this.listeners_={},Y(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){Y(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class cl extends LE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Oh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new cl}getInitialEvent(e){return Y(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const o_=32,a_=768;class Ke{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Me(){return new Ke("")}function we(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function xs(t){return t.pieces_.length-t.pieceNum_}function We(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ke(t.pieces_,e)}function FE(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function LN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function UE(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function BE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ke(e,0)}function dt(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Ke)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Ke(n,0)}function ve(t){return t.pieceNum_>=t.pieces_.length}function rn(t,e){const n=we(t),s=we(e);if(n===null)return e;if(n===s)return rn(We(t),We(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function $E(t,e){if(xs(t)!==xs(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function dn(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(xs(t)>xs(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class FN{constructor(e,n){this.errorPrefix_=n,this.parts_=UE(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ml(this.parts_[s]);jE(this)}}function UN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ml(e),jE(t)}function BN(t){const e=t.parts_.pop();t.byteLength_-=Ml(e),t.parts_.length>0&&(t.byteLength_-=1)}function jE(t){if(t.byteLength_>a_)throw new Error(t.errorPrefix_+"has a key path longer than "+a_+" bytes ("+t.byteLength_+").");if(t.parts_.length>o_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+o_+") or object contains a cycle "+zs(t))}function zs(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class bd extends LE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new bd}getInitialEvent(e){return Y(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Sr=1e3,$N=60*5*1e3,l_=30*1e3,jN=1.3,HN=3e4,WN="server_kill",c_=3;class Jn extends VE{constructor(e,n,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Jn.nextPersistentConnectionId_++,this.log_=jo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Sr,this.maxReconnectDelay_=$N,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Ty())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");bd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&cl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(yt(r)),Y(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new mo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),Y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Y(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,u=a.s;Jn.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&is(e,"w")){const s=Wi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();tn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||db(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=l_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=hb(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),Y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+yt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ku("Unrecognized action received from server: "+yt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Y(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Sr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Sr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>HN&&(this.reconnectDelay_=Sr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Jn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},u=function(f){Y(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?kt("getToken() completed but was canceled"):(kt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new VN(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{tn(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(WN)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&tn(f),c())}}}interrupt(e){kt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){kt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Bp(this.interruptReasons_)&&(this.reconnectDelay_=Sr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Td(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Ke(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){kt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=c_&&(this.reconnectDelay_=l_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){kt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=c_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+mE.replace(/\./g,"-")]=1,Oh()?e["framework.cordova"]=1:Ey()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=cl.getInstance().currentlyOnline();return Bp(this.interruptReasons_)&&e}}Jn.nextPersistentConnectionId_=0;Jn.nextConnectionId_=0;/**
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
 */class Ie{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Ie(e,n)}}/**
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
 */class ec{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Ie(Ji,e),i=new Ie(Ji,n);return this.compare(s,i)!==0}minPost(){return Ie.MIN}}/**
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
 */let ya;class HE extends ec{static get __EMPTY_NODE(){return ya}static set __EMPTY_NODE(e){ya=e}compare(e,n){return ar(e.name,n.name)}isDefinedOn(e){throw tr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ie.MIN}maxPost(){return new Ie(ai,ya)}makePost(e,n){return Y(typeof e=="string","KeyIndex indexValue must always be a string."),new Ie(e,ya)}toString(){return".key"}}const Ui=new HE;/**
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
 */class va{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ut{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ut.RED,this.left=i??qt.EMPTY_NODE,this.right=r??qt.EMPTY_NODE}copy(e,n,s,i,r){return new ut(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return qt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return qt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ut.RED=!0;ut.BLACK=!1;class qN{copy(e,n,s,i,r){return this}insert(e,n,s){return new ut(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class qt{constructor(e,n=qt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new qt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ut.BLACK,null,null))}remove(e){return new qt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ut.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new va(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new va(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new va(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new va(this.root_,null,this.comparator_,!0,e)}}qt.EMPTY_NODE=new qN;/**
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
 */function KN(t,e){return ar(t.name,e.name)}function Rd(t,e){return ar(t,e)}/**
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
 */let Gu;function zN(t){Gu=t}const WE=function(t){return typeof t=="number"?"number:"+EE(t):"string:"+t},qE=function(t){if(t.isLeafNode()){const e=t.val();Y(typeof e=="string"||typeof e=="number"||typeof e=="object"&&is(e,".sv"),"Priority must be a string or number.")}else Y(t===Gu||t.isEmpty(),"priority of unexpected type.");Y(t===Gu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let u_;class lt{constructor(e,n=lt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,Y(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),qE(this.priorityNode_)}static set __childrenNodeConstructor(e){u_=e}static get __childrenNodeConstructor(){return u_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new lt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:lt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ve(e)?this:we(e)===".priority"?this.priorityNode_:lt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:lt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=we(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(Y(s!==".priority"||xs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,lt.__childrenNodeConstructor.EMPTY_NODE.updateChild(We(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+WE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=EE(this.value_):e+=this.value_,this.lazyHash_=gE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===lt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof lt.__childrenNodeConstructor?-1:(Y(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=lt.VALUE_TYPE_ORDER.indexOf(n),r=lt.VALUE_TYPE_ORDER.indexOf(s);return Y(i>=0,"Unknown leaf type: "+n),Y(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}lt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let KE,zE;function GN(t){KE=t}function QN(t){zE=t}class YN extends ec{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?ar(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ie.MIN}maxPost(){return new Ie(ai,new lt("[PRIORITY-POST]",zE))}makePost(e,n){const s=KE(e);return new Ie(n,new lt("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ot=new YN;/**
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
 */const XN=Math.log(2);class JN{constructor(e){const n=r=>parseInt(Math.log(r)/XN,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ul=function(t,e,n,s){t.sort(e);const i=function(c,u){const h=u-c;let f,m;if(h===0)return null;if(h===1)return f=t[c],m=n?n(f):f,new ut(m,f.node,ut.BLACK,null,null);{const _=parseInt(h/2,10)+c,T=i(c,_),R=i(_+1,u);return f=t[_],m=n?n(f):f,new ut(m,f.node,ut.BLACK,T,R)}},r=function(c){let u=null,h=null,f=t.length;const m=function(T,R){const S=f-T,M=f;f-=T;const U=i(S+1,M),O=t[S],x=n?n(O):O;_(new ut(x,O.node,R,null,U))},_=function(T){u?(u.left=T,u=T):(h=T,u=T)};for(let T=0;T<c.count;++T){const R=c.nextBitIsOne(),S=Math.pow(2,c.count-(T+1));R?m(S,ut.BLACK):(m(S,ut.BLACK),m(S,ut.RED))}return h},o=new JN(t.length),a=r(o);return new qt(s||e,a)};/**
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
 */let Yc;const Ii={};class Gn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return Y(Ii&&Ot,"ChildrenNode.ts has not been loaded"),Yc=Yc||new Gn({".priority":Ii},{".priority":Ot}),Yc}get(e){const n=Wi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof qt?n:null}hasIndex(e){return is(this.indexSet_,e.toString())}addIndex(e,n){Y(e!==Ui,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(Ie.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=ul(s,e.getCompare()):a=Ii;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const h=Object.assign({},this.indexes_);return h[c]=a,new Gn(h,u)}addToIndexes(e,n){const s=Ka(this.indexes_,(i,r)=>{const o=Wi(this.indexSet_,r);if(Y(o,"Missing index implementation for "+r),i===Ii)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(Ie.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),ul(a,o.getCompare())}else return Ii;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new Ie(e.name,a))),c.insert(e,e.node)}});return new Gn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ka(this.indexes_,i=>{if(i===Ii)return i;{const r=n.get(e.name);return r?i.remove(new Ie(e.name,r)):i}});return new Gn(s,this.indexSet_)}}/**
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
 */let Pr;class Oe{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&qE(this.priorityNode_),this.children_.isEmpty()&&Y(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Pr||(Pr=new Oe(new qt(Rd),null,Gn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Pr}updatePriority(e){return this.children_.isEmpty()?this:new Oe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Pr:n}}getChild(e){const n=we(e);return n===null?this:this.getImmediateChild(n).getChild(We(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(Y(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Ie(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Pr:this.priorityNode_;return new Oe(i,o,r)}}updateChild(e,n){const s=we(e);if(s===null)return n;{Y(we(e)!==".priority"||xs(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(We(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Ot,(o,a)=>{n[o]=a.val(e),s++,r&&Oe.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+WE(this.getPriority().val())+":"),this.forEachChild(Ot,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":gE(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new Ie(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ie(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ie(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Ie.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Ie.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Wo?-1:0}withIndex(e){if(e===Ui||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Oe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ui||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ot),i=n.getIterator(Ot);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ui?null:this.indexMap_.get(e.toString())}}Oe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ZN extends Oe{constructor(){super(new qt(Rd),Oe.EMPTY_NODE,Gn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Oe.EMPTY_NODE}isEmpty(){return!1}}const Wo=new ZN;Object.defineProperties(Ie,{MIN:{value:new Ie(Ji,Oe.EMPTY_NODE)},MAX:{value:new Ie(ai,Wo)}});HE.__EMPTY_NODE=Oe.EMPTY_NODE;lt.__childrenNodeConstructor=Oe;zN(Wo);QN(Wo);/**
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
 */const ek=!0;function Dt(t,e=null){if(t===null)return Oe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),Y(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new lt(n,Dt(e))}if(!(t instanceof Array)&&ek){const n=[];let s=!1;if(ln(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=Dt(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new Ie(o,c)))}}),n.length===0)return Oe.EMPTY_NODE;const r=ul(n,KN,o=>o.name,Rd);if(s){const o=ul(n,Ot.getCompare());return new Oe(r,Dt(e),new Gn({".priority":o},{".priority":Ot}))}else return new Oe(r,Dt(e),Gn.Default)}else{let n=Oe.EMPTY_NODE;return ln(t,(s,i)=>{if(is(t,s)&&s.substring(0,1)!=="."){const r=Dt(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Dt(e))}}GN(Dt);/**
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
 */class tk extends ec{constructor(e){super(),this.indexPath_=e,Y(!ve(e)&&we(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?ar(e.name,n.name):r}makePost(e,n){const s=Dt(e),i=Oe.EMPTY_NODE.updateChild(this.indexPath_,s);return new Ie(n,i)}maxPost(){const e=Oe.EMPTY_NODE.updateChild(this.indexPath_,Wo);return new Ie(ai,e)}toString(){return UE(this.indexPath_,0).join("/")}}/**
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
 */class nk extends ec{compare(e,n){const s=e.node.compareTo(n.node);return s===0?ar(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ie.MIN}maxPost(){return Ie.MAX}makePost(e,n){const s=Dt(e);return new Ie(n,s)}toString(){return".value"}}const sk=new nk;/**
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
 */function ik(t){return{type:"value",snapshotNode:t}}function rk(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ok(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function h_(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function ak(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Cd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ot}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return Y(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Y(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ji}hasEnd(){return this.endSet_}getIndexEndValue(){return Y(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Y(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ai}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return Y(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ot}copy(){const e=new Cd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function d_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ot?n="$priority":t.index_===sk?n="$value":t.index_===Ui?n="$key":(Y(t.index_ instanceof tk,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=yt(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=yt(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+yt(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=yt(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+yt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function f_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ot&&(e.i=t.index_.toString()),e}/**
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
 */class hl extends VE{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=jo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(Y(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=hl.getListenId_(e,s),a={};this.listens_[o]=a;const c=d_(e._queryParams);this.restRequest_(r+".json",c,(u,h)=>{let f=h;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(r,f,!1,s),Wi(this.listens_,o)===a){let m;u?u===401?m="permission_denied":m="rest_error:"+u:m="ok",i(m,null)}})}unlisten(e,n){const s=hl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=d_(e._queryParams),s=e._path.toString(),i=new mo;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+xh(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=_o(a.responseText)}catch{tn("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&tn("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class lk{constructor(){this.rootNode_=Oe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function dl(){return{value:null,children:new Map}}function GE(t,e,n){if(ve(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=we(e);t.children.has(s)||t.children.set(s,dl());const i=t.children.get(s);e=We(e),GE(i,e,n)}}function Qu(t,e,n){t.value!==null?n(e,t.value):ck(t,(s,i)=>{const r=new Ke(e.toString()+"/"+s);Qu(i,r,n)})}function ck(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class uk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ln(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const p_=10*1e3,hk=30*1e3,dk=5*60*1e3;class fk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new uk(e);const s=p_+(hk-p_)*Math.random();no(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;ln(e,(i,r)=>{r>0&&is(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),no(this.reportStats_.bind(this),Math.floor(Math.random()*2*dk))}}/**
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
 */var Pn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Pn||(Pn={}));function QE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function YE(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function XE(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class fl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Pn.ACK_USER_WRITE,this.source=QE()}operationForChild(e){if(ve(this.path)){if(this.affectedTree.value!=null)return Y(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ke(e));return new fl(Me(),n,this.revert)}}else return Y(we(this.path)===e,"operationForChild called for unrelated child."),new fl(We(this.path),this.affectedTree,this.revert)}}/**
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
 */class li{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Pn.OVERWRITE}operationForChild(e){return ve(this.path)?new li(this.source,Me(),this.snap.getImmediateChild(e)):new li(this.source,We(this.path),this.snap)}}/**
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
 */class bo{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Pn.MERGE}operationForChild(e){if(ve(this.path)){const n=this.children.subtree(new Ke(e));return n.isEmpty()?null:n.value?new li(this.source,Me(),n.value):new bo(this.source,Me(),n)}else return Y(we(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new bo(this.source,We(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Sd{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ve(e))return this.isFullyInitialized()&&!this.filtered_;const n=we(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function pk(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(ak(o.childName,o.snapshotNode))}),Nr(t,i,"child_removed",e,s,n),Nr(t,i,"child_added",e,s,n),Nr(t,i,"child_moved",r,s,n),Nr(t,i,"child_changed",e,s,n),Nr(t,i,"value",e,s,n),i}function Nr(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,c)=>_k(t,a,c)),o.forEach(a=>{const c=mk(t,a,r);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,t.query_))})})}function mk(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function _k(t,e,n){if(e.childName==null||n.childName==null)throw tr("Should only compare child_ events.");const s=new Ie(e.childName,e.snapshotNode),i=new Ie(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function JE(t,e){return{eventCache:t,serverCache:e}}function so(t,e,n,s){return JE(new Sd(e,n,s),t.serverCache)}function ZE(t,e,n,s){return JE(t.eventCache,new Sd(e,n,s))}function Yu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ci(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Xc;const gk=()=>(Xc||(Xc=new qt(nN)),Xc);class He{constructor(e,n=gk()){this.value=e,this.children=n}static fromObject(e){let n=new He(null);return ln(e,(s,i)=>{n=n.set(new Ke(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Me(),value:this.value};if(ve(e))return null;{const s=we(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(We(e),n);return r!=null?{path:dt(new Ke(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ve(e))return this;{const n=we(e),s=this.children.get(n);return s!==null?s.subtree(We(e)):new He(null)}}set(e,n){if(ve(e))return new He(n,this.children);{const s=we(e),r=(this.children.get(s)||new He(null)).set(We(e),n),o=this.children.insert(s,r);return new He(this.value,o)}}remove(e){if(ve(e))return this.children.isEmpty()?new He(null):new He(null,this.children);{const n=we(e),s=this.children.get(n);if(s){const i=s.remove(We(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new He(null):new He(this.value,r)}else return this}}get(e){if(ve(e))return this.value;{const n=we(e),s=this.children.get(n);return s?s.get(We(e)):null}}setTree(e,n){if(ve(e))return n;{const s=we(e),r=(this.children.get(s)||new He(null)).setTree(We(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new He(this.value,o)}}fold(e){return this.fold_(Me(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(dt(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Me(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ve(e))return null;{const r=we(e),o=this.children.get(r);return o?o.findOnPath_(We(e),dt(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Me(),n)}foreachOnPath_(e,n,s){if(ve(e))return this;{this.value&&s(n,this.value);const i=we(e),r=this.children.get(i);return r?r.foreachOnPath_(We(e),dt(n,i),s):new He(null)}}foreach(e){this.foreach_(Me(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(dt(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class _n{constructor(e){this.writeTree_=e}static empty(){return new _n(new He(null))}}function io(t,e,n){if(ve(e))return new _n(new He(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=rn(i,e);return r=r.updateChild(o,n),new _n(t.writeTree_.set(i,r))}else{const i=new He(n),r=t.writeTree_.setTree(e,i);return new _n(r)}}}function m_(t,e,n){let s=t;return ln(n,(i,r)=>{s=io(s,dt(e,i),r)}),s}function __(t,e){if(ve(e))return _n.empty();{const n=t.writeTree_.setTree(e,new He(null));return new _n(n)}}function Xu(t,e){return fi(t,e)!=null}function fi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(rn(n.path,e)):null}function g_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ot,(s,i)=>{e.push(new Ie(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new Ie(s,i.value))}),e}function Ss(t,e){if(ve(e))return t;{const n=fi(t,e);return n!=null?new _n(new He(n)):new _n(t.writeTree_.subtree(e))}}function Ju(t){return t.writeTree_.isEmpty()}function Zi(t,e){return eT(Me(),t.writeTree_,e)}function eT(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(Y(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=eT(dt(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(dt(t,".priority"),s)),n}}/**
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
 */function tT(t,e){return oT(e,t)}function yk(t,e,n,s,i){Y(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=io(t.visibleWrites,e,n)),t.lastWriteId=s}function vk(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Ek(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);Y(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Tk(a,s.path)?i=!1:dn(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return wk(t),!0;if(s.snap)t.visibleWrites=__(t.visibleWrites,s.path);else{const a=s.children;ln(a,c=>{t.visibleWrites=__(t.visibleWrites,dt(s.path,c))})}return!0}else return!1}function Tk(t,e){if(t.snap)return dn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&dn(dt(t.path,n),e))return!0;return!1}function wk(t){t.visibleWrites=nT(t.allWrites,Ik,Me()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Ik(t){return t.visible}function nT(t,e,n){let s=_n.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)dn(n,o)?(a=rn(n,o),s=io(s,a,r.snap)):dn(o,n)&&(a=rn(o,n),s=io(s,Me(),r.snap.getChild(a)));else if(r.children){if(dn(n,o))a=rn(n,o),s=m_(s,a,r.children);else if(dn(o,n))if(a=rn(o,n),ve(a))s=m_(s,Me(),r.children);else{const c=Wi(r.children,we(a));if(c){const u=c.getChild(We(a));s=io(s,Me(),u)}}}else throw tr("WriteRecord should have .snap or .children")}}return s}function sT(t,e,n,s,i){if(!s&&!i){const r=fi(t.visibleWrites,e);if(r!=null)return r;{const o=Ss(t.visibleWrites,e);if(Ju(o))return n;if(n==null&&!Xu(o,Me()))return null;{const a=n||Oe.EMPTY_NODE;return Zi(o,a)}}}else{const r=Ss(t.visibleWrites,e);if(!i&&Ju(r))return n;if(!i&&n==null&&!Xu(r,Me()))return null;{const o=function(u){return(u.visible||i)&&(!s||!~s.indexOf(u.writeId))&&(dn(u.path,e)||dn(e,u.path))},a=nT(t.allWrites,o,e),c=n||Oe.EMPTY_NODE;return Zi(a,c)}}}function Ak(t,e,n){let s=Oe.EMPTY_NODE;const i=fi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ot,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Ss(t.visibleWrites,e);return n.forEachChild(Ot,(o,a)=>{const c=Zi(Ss(r,new Ke(o)),a);s=s.updateImmediateChild(o,c)}),g_(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ss(t.visibleWrites,e);return g_(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function bk(t,e,n,s,i){Y(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=dt(e,n);if(Xu(t.visibleWrites,r))return null;{const o=Ss(t.visibleWrites,r);return Ju(o)?i.getChild(n):Zi(o,i.getChild(n))}}function Rk(t,e,n,s){const i=dt(e,n),r=fi(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Ss(t.visibleWrites,i);return Zi(o,s.getNode().getImmediateChild(n))}else return null}function Ck(t,e){return fi(t.visibleWrites,e)}function Sk(t,e,n,s,i,r,o){let a;const c=Ss(t.visibleWrites,e),u=fi(c,Me());if(u!=null)a=u;else if(n!=null)a=Zi(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),m=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=m.getNext();for(;_&&h.length<i;)f(_,s)!==0&&h.push(_),_=m.getNext();return h}else return[]}function Pk(){return{visibleWrites:_n.empty(),allWrites:[],lastWriteId:-1}}function Zu(t,e,n,s){return sT(t.writeTree,t.treePath,e,n,s)}function iT(t,e){return Ak(t.writeTree,t.treePath,e)}function y_(t,e,n,s){return bk(t.writeTree,t.treePath,e,n,s)}function pl(t,e){return Ck(t.writeTree,dt(t.treePath,e))}function Nk(t,e,n,s,i,r){return Sk(t.writeTree,t.treePath,e,n,s,i,r)}function Pd(t,e,n){return Rk(t.writeTree,t.treePath,e,n)}function rT(t,e){return oT(dt(t.treePath,e),t.writeTree)}function oT(t,e){return{treePath:t,writeTree:e}}/**
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
 */class kk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;Y(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),Y(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,h_(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ok(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,rk(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,h_(s,e.snapshotNode,i.oldSnap));else throw tr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Dk{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const aT=new Dk;class Nd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Sd(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Pd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ci(this.viewCache_),r=Nk(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function Ok(t,e){Y(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),Y(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function xk(t,e,n,s,i){const r=new kk;let o,a;if(n.type===Pn.OVERWRITE){const u=n;u.source.fromUser?o=eh(t,e,u.path,u.snap,s,i,r):(Y(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!ve(u.path),o=ml(t,e,u.path,u.snap,s,i,a,r))}else if(n.type===Pn.MERGE){const u=n;u.source.fromUser?o=Vk(t,e,u.path,u.children,s,i,r):(Y(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=th(t,e,u.path,u.children,s,i,a,r))}else if(n.type===Pn.ACK_USER_WRITE){const u=n;u.revert?o=Uk(t,e,u.path,s,i,r):o=Lk(t,e,u.path,u.affectedTree,s,i,r)}else if(n.type===Pn.LISTEN_COMPLETE)o=Fk(t,e,n.path,s,r);else throw tr("Unknown operation type: "+n.type);const c=r.getChanges();return Mk(e,o,c),{viewCache:o,changes:c}}function Mk(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Yu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(ik(Yu(e)))}}function lT(t,e,n,s,i,r){const o=e.eventCache;if(pl(s,n)!=null)return e;{let a,c;if(ve(n))if(Y(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ci(e),h=u instanceof Oe?u:Oe.EMPTY_NODE,f=iT(s,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const u=Zu(s,ci(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=we(n);if(u===".priority"){Y(xs(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const f=y_(s,n,h,c);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=We(n);let f;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const m=y_(s,n,o.getNode(),c);m!=null?f=o.getNode().getImmediateChild(u).updateChild(h,m):f=o.getNode().getImmediateChild(u)}else f=Pd(s,u,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),u,f,h,i,r):a=o.getNode()}}return so(e,a,o.isFullyInitialized()||ve(n),t.filter.filtersNodes())}}function ml(t,e,n,s,i,r,o,a){const c=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(ve(n))u=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const _=c.getNode().updateChild(n,s);u=h.updateFullNode(c.getNode(),_,null)}else{const _=we(n);if(!c.isCompleteForPath(n)&&xs(n)>1)return e;const T=We(n),S=c.getNode().getImmediateChild(_).updateChild(T,s);_===".priority"?u=h.updatePriority(c.getNode(),S):u=h.updateChild(c.getNode(),_,S,T,aT,null)}const f=ZE(e,u,c.isFullyInitialized()||ve(n),h.filtersNodes()),m=new Nd(i,f,r);return lT(t,f,n,i,m,a)}function eh(t,e,n,s,i,r,o){const a=e.eventCache;let c,u;const h=new Nd(i,e,r);if(ve(n))u=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=so(e,u,!0,t.filter.filtersNodes());else{const f=we(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),s),c=so(e,u,a.isFullyInitialized(),a.isFiltered());else{const m=We(n),_=a.getNode().getImmediateChild(f);let T;if(ve(m))T=s;else{const R=h.getCompleteChild(f);R!=null?FE(m)===".priority"&&R.getChild(BE(m)).isEmpty()?T=R:T=R.updateChild(m,s):T=Oe.EMPTY_NODE}if(_.equals(T))c=e;else{const R=t.filter.updateChild(a.getNode(),f,T,m,h,o);c=so(e,R,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function v_(t,e){return t.eventCache.isCompleteForChild(e)}function Vk(t,e,n,s,i,r,o){let a=e;return s.foreach((c,u)=>{const h=dt(n,c);v_(e,we(h))&&(a=eh(t,a,h,u,i,r,o))}),s.foreach((c,u)=>{const h=dt(n,c);v_(e,we(h))||(a=eh(t,a,h,u,i,r,o))}),a}function E_(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function th(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;ve(n)?u=s:u=new He(null).setTree(n,s);const h=e.serverCache.getNode();return u.children.inorderTraversal((f,m)=>{if(h.hasChild(f)){const _=e.serverCache.getNode().getImmediateChild(f),T=E_(t,_,m);c=ml(t,c,new Ke(f),T,i,r,o,a)}}),u.children.inorderTraversal((f,m)=>{const _=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!h.hasChild(f)&&!_){const T=e.serverCache.getNode().getImmediateChild(f),R=E_(t,T,m);c=ml(t,c,new Ke(f),R,i,r,o,a)}}),c}function Lk(t,e,n,s,i,r,o){if(pl(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(ve(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ml(t,e,n,c.getNode().getChild(n),i,r,a,o);if(ve(n)){let u=new He(null);return c.getNode().forEachChild(Ui,(h,f)=>{u=u.set(new Ke(h),f)}),th(t,e,n,u,i,r,a,o)}else return e}else{let u=new He(null);return s.foreach((h,f)=>{const m=dt(n,h);c.isCompleteForPath(m)&&(u=u.set(h,c.getNode().getChild(m)))}),th(t,e,n,u,i,r,a,o)}}function Fk(t,e,n,s,i){const r=e.serverCache,o=ZE(e,r.getNode(),r.isFullyInitialized()||ve(n),r.isFiltered());return lT(t,o,n,s,aT,i)}function Uk(t,e,n,s,i,r){let o;if(pl(s,n)!=null)return e;{const a=new Nd(s,e,i),c=e.eventCache.getNode();let u;if(ve(n)||we(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Zu(s,ci(e));else{const f=e.serverCache.getNode();Y(f instanceof Oe,"serverChildren would be complete if leaf node"),h=iT(s,f)}h=h,u=t.filter.updateFullNode(c,h,r)}else{const h=we(n);let f=Pd(s,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=c.getImmediateChild(h)),f!=null?u=t.filter.updateChild(c,h,f,We(n),a,r):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(c,h,Oe.EMPTY_NODE,We(n),a,r):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Zu(s,ci(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||pl(s,Me())!=null,so(e,u,o,t.filter.filtersNodes())}}function Bk(t,e){const n=ci(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ve(e)&&!n.getImmediateChild(we(e)).isEmpty())?n.getChild(e):null}function T_(t,e,n,s){e.type===Pn.MERGE&&e.source.queryId!==null&&(Y(ci(t.viewCache_),"We should always have a full cache before handling merges"),Y(Yu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=xk(t.processor_,i,e,n,s);return Ok(t.processor_,r.viewCache),Y(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,$k(t,r.changes,r.viewCache.eventCache.getNode())}function $k(t,e,n,s){const i=t.eventRegistrations_;return pk(t.eventGenerator_,e,n,i)}/**
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
 */let w_;function jk(t){Y(!w_,"__referenceConstructor has already been defined"),w_=t}function kd(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return Y(r!=null,"SyncTree gave us an op for an invalid query."),T_(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(T_(o,e,n,s));return r}}function Dd(t,e){let n=null;for(const s of t.views.values())n=n||Bk(s,e);return n}/**
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
 */let I_;function Hk(t){Y(!I_,"__referenceConstructor has already been defined"),I_=t}class A_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new He(null),this.pendingWriteTree_=Pk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Wk(t,e,n,s,i){return yk(t.pendingWriteTree_,e,n,s,i),i?nc(t,new li(QE(),e,n)):[]}function Ni(t,e,n=!1){const s=vk(t.pendingWriteTree_,e);if(Ek(t.pendingWriteTree_,e)){let r=new He(null);return s.snap!=null?r=r.set(Me(),!0):ln(s.children,o=>{r=r.set(new Ke(o),!0)}),nc(t,new fl(s.path,r,n))}else return[]}function tc(t,e,n){return nc(t,new li(YE(),e,n))}function qk(t,e,n){const s=He.fromObject(n);return nc(t,new bo(YE(),e,s))}function Kk(t,e,n,s){const i=dT(t,s);if(i!=null){const r=fT(i),o=r.path,a=r.queryId,c=rn(o,e),u=new li(XE(a),c,n);return pT(t,o,u)}else return[]}function zk(t,e,n,s){const i=dT(t,s);if(i){const r=fT(i),o=r.path,a=r.queryId,c=rn(o,e),u=He.fromObject(n),h=new bo(XE(a),c,u);return pT(t,o,h)}else return[]}function cT(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=rn(o,e),u=Dd(a,c);if(u)return u});return sT(i,e,r,n,!0)}function nc(t,e){return uT(e,t.syncPointTree_,null,tT(t.pendingWriteTree_,Me()))}function uT(t,e,n,s){if(ve(t.path))return hT(t,e,n,s);{const i=e.get(Me());n==null&&i!=null&&(n=Dd(i,Me()));let r=[];const o=we(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const u=n?n.getImmediateChild(o):null,h=rT(s,o);r=r.concat(uT(a,c,u,h))}return i&&(r=r.concat(kd(i,t,s,n))),r}}function hT(t,e,n,s){const i=e.get(Me());n==null&&i!=null&&(n=Dd(i,Me()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,u=rT(s,o),h=t.operationForChild(o);h&&(r=r.concat(hT(h,a,c,u)))}),i&&(r=r.concat(kd(i,t,s,n))),r}function dT(t,e){return t.tagToQueryMap.get(e)}function fT(t){const e=t.indexOf("$");return Y(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ke(t.substr(0,e))}}function pT(t,e,n){const s=t.syncPointTree_.get(e);Y(s,"Missing sync point for query tag that we're tracking");const i=tT(t.pendingWriteTree_,e);return kd(s,n,i,null)}/**
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
 */class Od{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Od(n)}node(){return this.node_}}class xd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=dt(this.path_,e);return new xd(this.syncTree_,n)}node(){return cT(this.syncTree_,this.path_)}}const Gk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},b_=function(t,e,n){if(!t||typeof t!="object")return t;if(Y(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Qk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Yk(t[".sv"],e);Y(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Qk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:Y(!1,"Unexpected server value: "+t)}},Yk=function(t,e,n){t.hasOwnProperty("increment")||Y(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&Y(!1,"Unexpected increment value: "+s);const i=e.node();if(Y(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Xk=function(t,e,n,s){return Md(e,new xd(n,t),s)},Jk=function(t,e,n){return Md(t,new Od(e),n)};function Md(t,e,n){const s=t.getPriority().val(),i=b_(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=b_(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new lt(a,Dt(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new lt(i))),o.forEachChild(Ot,(a,c)=>{const u=Md(c,e.getImmediateChild(a),n);u!==c&&(r=r.updateImmediateChild(a,u))}),r}}/**
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
 */class Vd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ld(t,e){let n=e instanceof Ke?e:new Ke(e),s=t,i=we(n);for(;i!==null;){const r=Wi(s.node.children,i)||{children:{},childCount:0};s=new Vd(i,s,r),n=We(n),i=we(n)}return s}function lr(t){return t.node.value}function mT(t,e){t.node.value=e,nh(t)}function _T(t){return t.node.childCount>0}function Zk(t){return lr(t)===void 0&&!_T(t)}function sc(t,e){ln(t.node.children,(n,s)=>{e(new Vd(n,t,s))})}function gT(t,e,n,s){n&&!s&&e(t),sc(t,i=>{gT(i,e,!0,s)}),n&&s&&e(t)}function eD(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function qo(t){return new Ke(t.parent===null?t.name:qo(t.parent)+"/"+t.name)}function nh(t){t.parent!==null&&tD(t.parent,t.name,t)}function tD(t,e,n){const s=Zk(n),i=is(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,nh(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,nh(t))}/**
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
 */const nD=/[\[\].#$\/\u0000-\u001F\u007F]/,sD=/[\[\].#$\u0000-\u001F\u007F]/,Jc=10*1024*1024,yT=function(t){return typeof t=="string"&&t.length!==0&&!nD.test(t)},iD=function(t){return typeof t=="string"&&t.length!==0&&!sD.test(t)},rD=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),iD(t)},vT=function(t,e,n){const s=n instanceof Ke?new FN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+zs(s));if(typeof e=="function")throw new Error(t+"contains a function "+zs(s)+" with contents = "+e.toString());if(yE(e))throw new Error(t+"contains "+e.toString()+" "+zs(s));if(typeof e=="string"&&e.length>Jc/3&&Ml(e)>Jc)throw new Error(t+"contains a string greater than "+Jc+" utf8 bytes "+zs(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ln(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!yT(o)))throw new Error(t+" contains an invalid key ("+o+") "+zs(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);UN(s,o),vT(t,a,s),BN(s)}),i&&r)throw new Error(t+' contains ".value" child '+zs(s)+" in addition to actual children.")}},oD=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!yT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!rD(n))throw new Error(gb(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class aD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function lD(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!$E(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function pi(t,e,n){lD(t,n),cD(t,s=>dn(s,e)||dn(e,s))}function cD(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(uD(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function uD(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();to&&kt("event: "+n.toString()),Ho(s)}}}/**
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
 */const hD="repo_interrupt",dD=25;class fD{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new aD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=dl(),this.transactionQueueTree_=new Vd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function pD(t,e,n){if(t.stats_=Id(t.repoInfo_),t.forceRestClient_||lN())t.server_=new hl(t.repoInfo_,(s,i,r,o)=>{R_(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>C_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{yt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Jn(t.repoInfo_,e,(s,i,r,o)=>{R_(t,s,i,r,o)},s=>{C_(t,s)},s=>{_D(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=pN(t.repoInfo_,()=>new fk(t.stats_,t.server_)),t.infoData_=new lk,t.infoSyncTree_=new A_({startListening:(s,i,r,o)=>{let a=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(a=tc(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Fd(t,"connected",!1),t.serverSyncTree_=new A_({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,c)=>{const u=o(a,c);pi(t.eventQueue_,s._path,u)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function mD(t){const n=t.infoData_.getNode(new Ke(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ET(t){return Gk({timestamp:mD(t)})}function R_(t,e,n,s,i){t.dataUpdateCount++;const r=new Ke(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=Ka(n,u=>Dt(u));o=zk(t.serverSyncTree_,r,c,i)}else{const c=Dt(n);o=Kk(t.serverSyncTree_,r,c,i)}else if(s){const c=Ka(n,u=>Dt(u));o=qk(t.serverSyncTree_,r,c)}else{const c=Dt(n);o=tc(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Bd(t,r)),pi(t.eventQueue_,a,o)}function C_(t,e){Fd(t,"connected",e),e===!1&&yD(t)}function _D(t,e){ln(e,(n,s)=>{Fd(t,n,s)})}function Fd(t,e,n){const s=new Ke("/.info/"+e),i=Dt(n);t.infoData_.updateSnapshot(s,i);const r=tc(t.infoSyncTree_,s,i);pi(t.eventQueue_,s,r)}function gD(t){return t.nextWriteId_++}function yD(t){TT(t,"onDisconnectEvents");const e=ET(t),n=dl();Qu(t.onDisconnect_,Me(),(i,r)=>{const o=Xk(i,r,t.serverSyncTree_,e);GE(n,i,o)});let s=[];Qu(n,Me(),(i,r)=>{s=s.concat(tc(t.serverSyncTree_,i,r));const o=wD(t,i);Bd(t,o)}),t.onDisconnect_=dl(),pi(t.eventQueue_,Me(),s)}function vD(t){t.persistentConnection_&&t.persistentConnection_.interrupt(hD)}function TT(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),kt(n,...e)}function wT(t,e,n){return cT(t.serverSyncTree_,e,n)||Oe.EMPTY_NODE}function Ud(t,e=t.transactionQueueTree_){if(e||ic(t,e),lr(e)){const n=AT(t,e);Y(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&ED(t,qo(e),n)}else _T(e)&&sc(e,n=>{Ud(t,n)})}function ED(t,e,n){const s=n.map(u=>u.currentWriteId),i=wT(t,e,s);let r=i;const o=i.hash();for(let u=0;u<n.length;u++){const h=n[u];Y(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=rn(e,h.path);r=r.updateChild(f,h.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,u=>{TT(t,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,h=h.concat(Ni(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();ic(t,Ld(t.transactionQueueTree_,e)),Ud(t,t.transactionQueueTree_),pi(t.eventQueue_,e,h);for(let m=0;m<f.length;m++)Ho(f[m])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{tn("transaction at "+c.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}Bd(t,e)}},o)}function Bd(t,e){const n=IT(t,e),s=qo(n),i=AT(t,n);return TD(t,i,s),s}function TD(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=rn(n,c.path);let h=!1,f;if(Y(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,f=c.abortReason,i=i.concat(Ni(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=dD)h=!0,f="maxretry",i=i.concat(Ni(t.serverSyncTree_,c.currentWriteId,!0));else{const m=wT(t,c.path,o);c.currentInputSnapshot=m;const _=e[a].update(m.val());if(_!==void 0){vT("transaction failed: Data returned ",_,c.path);let T=Dt(_);typeof _=="object"&&_!=null&&is(_,".priority")||(T=T.updatePriority(m.getPriority()));const S=c.currentWriteId,M=ET(t),U=Jk(T,m,M);c.currentOutputSnapshotRaw=T,c.currentOutputSnapshotResolved=U,c.currentWriteId=gD(t),o.splice(o.indexOf(S),1),i=i.concat(Wk(t.serverSyncTree_,c.path,U,c.currentWriteId,c.applyLocally)),i=i.concat(Ni(t.serverSyncTree_,S,!0))}else h=!0,f="nodata",i=i.concat(Ni(t.serverSyncTree_,c.currentWriteId,!0))}pi(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(f),!1,null))))}ic(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Ho(s[a]);Ud(t,t.transactionQueueTree_)}function IT(t,e){let n,s=t.transactionQueueTree_;for(n=we(e);n!==null&&lr(s)===void 0;)s=Ld(s,n),e=We(e),n=we(e);return s}function AT(t,e){const n=[];return bT(t,e,n),n.sort((s,i)=>s.order-i.order),n}function bT(t,e,n){const s=lr(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);sc(e,i=>{bT(t,i,n)})}function ic(t,e){const n=lr(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,mT(e,n.length>0?n:void 0)}sc(e,s=>{ic(t,s)})}function wD(t,e){const n=qo(IT(t,e)),s=Ld(t.transactionQueueTree_,e);return eD(s,i=>{Zc(t,i)}),Zc(t,s),gT(s,i=>{Zc(t,i)}),n}function Zc(t,e){const n=lr(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(Y(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(Y(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ni(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?mT(e,void 0):n.length=r+1,pi(t.eventQueue_,qo(e),i);for(let o=0;o<s.length;o++)Ho(s[o])}}/**
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
 */function ID(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function AD(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):tn(`Invalid query segment '${n}' in query '${t}'`)}return e}const S_=function(t,e){const n=bD(t),s=n.namespace;n.domain==="firebase.com"&&oi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&oi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||eN();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new hN(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Ke(n.pathString)}},bD=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(i=ID(t.substring(h,f)));const m=AD(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const T=e.indexOf(".");s=e.substring(0,T).toLowerCase(),n=e.substring(T+1),r=s}"ns"in m&&(r=m.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class $d{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ve(this._path)?null:FE(this._path)}get ref(){return new cr(this._repo,this._path)}get _queryIdentifier(){const e=f_(this._queryParams),n=Td(e);return n==="{}"?"default":n}get _queryObject(){return f_(this._queryParams)}isEqual(e){if(e=Kt(e),!(e instanceof $d))return!1;const n=this._repo===e._repo,s=$E(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+LN(this._path)}}class cr extends $d{constructor(e,n){super(e,n,new Cd,!1)}get parent(){const e=BE(this._path);return e===null?null:new cr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}jk(cr);Hk(cr);/**
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
 */const RD="FIREBASE_DATABASE_EMULATOR_HOST",sh={};let CD=!1;function SD(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||oi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),kt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=S_(r,i),a=o.repoInfo,c;typeof process<"u"&&Gm&&(c=Gm[RD]),c?(r=`http://${c}?ns=${a.namespace}`,o=S_(r,i),a=o.repoInfo):o.repoInfo.secure;const u=new uN(t.name,t.options,e);oD("Invalid Firebase Database URL",o),ve(o.path)||oi("Database URL must point to the root of a Firebase Database (not including a child path).");const h=ND(a,t,u,new cN(t.name,n));return new kD(h,t)}function PD(t,e){const n=sh[e];(!n||n[t.key]!==t)&&oi(`Database ${e}(${t.repoInfo_}) has already been deleted.`),vD(t),delete n[t.key]}function ND(t,e,n,s){let i=sh[e.name];i||(i={},sh[e.name]=i);let r=i[t.toURLString()];return r&&oi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new fD(t,CD,n,s),i[t.toURLString()]=r,r}class kD{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(pD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new cr(this._repo,Me())),this._rootInternal}_delete(){return this._rootInternal!==null&&(PD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&oi("Cannot call "+e+" on a deleted database.")}}/**
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
 */function DD(t){GP(sr),xn(new Tn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return SD(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Zt(Qm,Ym,t),Zt(Qm,Ym,"esm2017")}Jn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Jn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};DD();/**
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
 */const RT="firebasestorage.googleapis.com",OD="storageBucket",xD=2*60*1e3,MD=10*60*1e3;/**
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
 */class Fn extends ss{constructor(e,n,s=0){super(eu(e),`Firebase Storage: ${n} (${eu(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Fn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return eu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ln;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ln||(Ln={}));function eu(t){return"storage/"+t}function VD(){const t="An unknown error occurred, please check the error payload for server response.";return new Fn(Ln.UNKNOWN,t)}function LD(){return new Fn(Ln.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function FD(){return new Fn(Ln.CANCELED,"User canceled the upload/download.")}function UD(t){return new Fn(Ln.INVALID_URL,"Invalid URL '"+t+"'.")}function BD(t){return new Fn(Ln.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function P_(t){return new Fn(Ln.INVALID_ARGUMENT,t)}function CT(){return new Fn(Ln.APP_DELETED,"The Firebase app was deleted.")}function $D(t){return new Fn(Ln.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class fn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=fn.makeFromUrl(e,n)}catch{return new fn(e,"")}if(s.path==="")return s;throw BD(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(x){x.path_=decodeURIComponent(x.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${f}/${h}/b/${i}/o${m}`,"i"),T={bucket:1,path:3},R=n===RT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",M=new RegExp(`^https?://${R}/${i}/${S}`,"i"),O=[{regex:a,indices:c,postModify:r},{regex:_,indices:T,postModify:u},{regex:M,indices:{bucket:1,path:2},postModify:u}];for(let x=0;x<O.length;x++){const F=O[x],G=F.regex.exec(e);if(G){const I=G[F.indices.bucket];let y=G[F.indices.path];y||(y=""),s=new fn(I,y),F.postModify(s);break}}if(s==null)throw UD(e);return s}}class jD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function HD(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let u=!1;function h(...S){u||(u=!0,e.apply(null,S))}function f(S){i=setTimeout(()=>{i=null,t(_,c())},S)}function m(){r&&clearTimeout(r)}function _(S,...M){if(u){m();return}if(S){m(),h.call(null,S,...M);return}if(c()||o){m(),h.call(null,S,...M);return}s<64&&(s*=2);let O;a===1?(a=2,O=0):O=(s+Math.random())*1e3,f(O)}let T=!1;function R(S){T||(T=!0,m(),!u&&(i!==null?(S||(a=2),clearTimeout(i),f(0)):S||(a=1)))}return f(0),r=setTimeout(()=>{o=!0,R(!0)},n),R}function WD(t){t(!1)}/**
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
 */function qD(t){return t!==void 0}function N_(t,e,n,s){if(s<e)throw P_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw P_(`Invalid value for '${t}'. Expected ${n} or less.`)}function KD(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}var _l;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(_l||(_l={}));/**
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
 */function zD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
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
 */class GD{constructor(e,n,s,i,r,o,a,c,u,h,f,m=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,T)=>{this.resolve_=_,this.reject_=T,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Ea(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===_l.NO_ERROR,c=r.getStatus();if(!a||zD(c,this.additionalRetryCodes_)&&this.retry){const h=r.getErrorCode()===_l.ABORT;s(!1,new Ea(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new Ea(u,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());qD(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=VD();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?CT():FD();o(c)}else{const c=LD();o(c)}};this.canceled_?n(!1,new Ea(!1,null,!0)):this.backoffId_=HD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&WD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ea{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function QD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function YD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function XD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function JD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ZD(t,e,n,s,i,r,o=!0){const a=KD(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return XD(u,e),QD(u,n),YD(u,r),JD(u,s),new GD(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function eO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function tO(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class gl{constructor(e,n){this._service=e,n instanceof fn?this._location=n:this._location=fn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new gl(e,n)}get root(){const e=new fn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return tO(this._location.path)}get storage(){return this._service}get parent(){const e=eO(this._location.path);if(e===null)return null;const n=new fn(this._location.bucket,e);return new gl(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw $D(e)}}function k_(t,e){const n=e==null?void 0:e[OD];return n==null?null:fn.makeFromBucketSpec(n,t)}class nO{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=RT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=xD,this._maxUploadRetryTime=MD,this._requests=new Set,i!=null?this._bucket=fn.makeFromBucketSpec(i,this._host):this._bucket=k_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=fn.makeFromBucketSpec(this._url,e):this._bucket=k_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){N_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){N_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new gl(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new jD(CT());{const o=ZD(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const D_="@firebase/storage",O_="0.13.2";/**
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
 */const sO="storage";function iO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new nO(n,s,i,e,sr)}function rO(){xn(new Tn(sO,iO,"PUBLIC").setMultipleInstances(!0)),Zt(D_,O_,""),Zt(D_,O_,"esm2017")}rO();const tu=new WeakMap;function ST(t,e){return tu.has(e)||tu.set(e,{f:{},r:{},s:{},u:{}}),tu.get(e)}function oO(t,e,n,s){if(!t)return n;const[i,r]=PT(t);if(!i)return n;const o=ST(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function aO(t,e,n,s){if(!t)return;const[i,r]=PT(t);if(!i)return;const o=ST(void 0,s)[i],a=e||r;if(a)return n.then(c=>{o[a]=c}).catch(Sn),a}function PT(t){return $P(t)||jP(t)?["f",t.path]:HP(t)?["r",t.toString()]:WP(t)?["s",t.toString()]:[]}const nu=new WeakMap;function lO(t,e,n){const s=pE();nu.has(s)||nu.set(s,new Map);const i=nu.get(s),r=aO(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):Sn}const cO={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function ih(t,e,n,s){if(!UP(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((a,c)=>{const u=n[c];return a[u.path]=u.data(),a},{});function o(a,c,u,h){c=c||{};const[f,m]=h;Object.getOwnPropertyNames(a).forEach(_=>{const T=Object.getOwnPropertyDescriptor(a,_);T&&!T.enumerable&&Object.defineProperty(f,_,T)});for(const _ in a){const T=a[_];if(T==null||T instanceof Date||T instanceof st||T instanceof Yl)f[_]=T;else if(Ed(T)){const R=u+_;f[_]=R in n?c[_]:T.path,m[R]=T.converter?T:T.withConverter(s.converter)}else if(Array.isArray(T)){f[_]=Array(T.length);for(let R=0;R<T.length;R++){const S=T[R];S&&S.path in r&&(f[_][R]=r[S.path])}o(T,c[_]||f[_],u+_+".",[f[_],m])}else di(T)?(f[_]={},o(T,c[_],u+_+".",[f[_],m])):f[_]=T}}return o(t,e,"",i),i}const jd={reset:!1,wait:!0,maxRefDepth:2,converter:cO,snapshotOptions:{serverTimestamps:"estimate"}};function yl(t){for(const e in t)t[e].unsub()}function rh(t,e,n,s,i,r,o,a,c){const[u,h]=ih(s.data(t.snapshotOptions),vd(e,n),i,t);r.set(e,n,u),oh(t,e,n,i,h,r,o,a,c)}function uO({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},a){const c=Object.create(null);let u=Sn;return a.once?Gv(t).then(h=>{h.exists()?rh(a,e,n,h,c,o,s,i,r):(o.set(e,n,null),i())}).catch(r):u=_d(t,h=>{h.exists()?rh(a,e,n,h,c,o,s,i,r):(o.set(e,n,null),i())},r),()=>{u(),yl(c)}}function oh(t,e,n,s,i,r,o,a,c){const u=Object.keys(i);if(Object.keys(s).filter(R=>u.indexOf(R)<0).forEach(R=>{s[R].unsub(),delete s[R]}),!u.length||++o>t.maxRefDepth)return a(n);let f=0;const m=u.length,_=Object.create(null);function T(R){R in _&&++f>=m&&a(n)}u.forEach(R=>{const S=s[R],M=i[R],U=`${n}.${R}`;if(_[U]=!0,S)if(S.path!==M.path)S.unsub();else return;s[R]={data:()=>vd(e,U),unsub:uO({ref:M,target:e,path:U,depth:o,ops:r,resolve:T.bind(null,U),reject:c},t),path:M.path}})}function hO(t,e,n,s,i,r){const o=Object.assign({},jd,r),{snapshotListenOptions:a,snapshotOptions:c,wait:u,once:h}=o,f="value";let m=nt(u?[]:t.value);u||n.set(t,f,[]);const _=s;let T,R=Sn;const S=[],M={added:({newIndex:O,doc:x})=>{S.splice(O,0,Object.create(null));const F=S[O],[G,I]=ih(x.data(c),void 0,F,o);n.add(Wn(m),O,G),oh(o,m,`${f}.${O}`,F,I,n,0,s.bind(null,x),i)},modified:({oldIndex:O,newIndex:x,doc:F})=>{const G=Wn(m),I=S[O],y=G[O],[v,b]=ih(F.data(c),y,I,o);S.splice(x,0,I),n.remove(G,O),n.add(G,x,v),oh(o,m,`${f}.${x}`,I,b,n,0,s,i)},removed:({oldIndex:O})=>{const x=Wn(m);n.remove(x,O),yl(S.splice(O,1)[0])}};function U(O){const x=O.docChanges(a);if(!T&&x.length){T=!0;let F=0;const G=x.length,I=Object.create(null);for(let y=0;y<G;y++)I[x[y].doc.id]=!0;s=y=>{y&&y.id in I&&++F>=G&&(u&&(n.set(t,f,Wn(m)),m=t),_(Wn(m)),s=Sn)}}x.forEach(F=>{M[F.type](F)}),x.length||(u&&(n.set(t,f,Wn(m)),m=t),s(Wn(m)))}return h?C1(e).then(U).catch(i):R=_d(e,U,i),O=>{if(R(),O){const x=typeof O=="function"?O():[];n.set(t,f,x)}S.forEach(yl)}}function dO(t,e,n,s,i,r){const o=Object.assign({},jd,r),a="value",c=Object.create(null);s=qP(s,()=>vd(t,a));let u=Sn;function h(f){f.exists()?rh(o,t,a,f,c,n,0,s,i):(n.set(t,a,null),s(null))}return o.once?Gv(e).then(h).catch(i):u=_d(e,h,i),f=>{if(u(),f){const m=typeof f=="function"?f():null;n.set(t,a,m)}yl(c)}}const x_=Symbol();function fO(t,e){let n=Sn;const s=Object.assign({},jd,e),i=Wn(t),r=s.target||nt();zP()&&(s.once=!0);const o=oO(i,s.ssrKey,x_,pE()),a=o!==x_;a&&(r.value=o);let c=!a;const u=nt(!1),h=nt(),f=ag(),m=fh();let _=Sn;function T(){let M=Wn(t);const U=new Promise((O,x)=>{if(n(s.reset),!M)return n=Sn,O(null);u.value=c,c=!0,M.converter||(M=M.withConverter(s.converter)),n=(Ed(M)?dO:hO)(r,M,pO,O,x,s)}).catch(O=>(f.value===U&&(h.value=O),Promise.reject(O))).finally(()=>{f.value===U&&(u.value=!1)});f.value=U}let R=Sn;(Je(t)||typeof t=="function")&&(R=ws(t,T)),T(),i&&(_=lO(f.value,i,s.ssrKey)),Wg()&&Ig(()=>f.value),m&&W_(S);function S(M=s.reset){R(),_(),n(M)}return Object.defineProperties(r,{error:{get:()=>h},data:{get:()=>r},pending:{get:()=>u},promise:{get:()=>f},stop:{get:()=>S}})}const pO={set:(t,e,n)=>LP(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function mO(t,e){return fO(t,{target:nt([]),...e})}function _O(t,{firebaseApp:e,modules:n=[]}){t.provide(fE,e);for(const s of n)s(e,t)}const rc=ty("bulletin",()=>{const t=nt([]),e=nt({title:"",body:"",author:"Somebody"}),n=()=>{e.value.title="",e.value.body="",e.value.author=""},s=()=>{const F=e.value;m(F)},i=F=>{const G=t.value.find(I=>I.id===F);if(!G)throw`Cannot find bulletin with id ${F}`;return G},r=nt({}),o=F=>{r.value={id:F.id,title:F.title,body:F.body,author:F.author,lastEdited:F.lastEdited,created:F.created}},a=()=>{if(!r.value)return;const F=r.value;_(F)},c=F=>{if(!t.value.find(I=>I.id===F)){console.error("No bulletin found with id",F);return}T(F)},u=()=>{r.value=null},h=F=>({id:F.id,title:F.title??"Untitled",body:F.body??"",author:F.author??"",created:F.created,lastEdited:F.lastEdited}),f=mO(k1);ws(f,F=>{const G=[];F.forEach(I=>{G.push(h(I))}),t.value=[...G]},{deep:!0});async function m(F){const G={id:WA(),title:F.title,body:F.body??"",author:F.author,created:new Date,lastEdited:new Date},I=Wc(Jr,Da.BULLETIN,G.id);await S1(I,G)}async function _(F){if(!F.id){console.error("Cannot update bulletin with no id.");return}const G={id:F.id,title:F.title,body:F.body??"",author:F.author,created:F.created,lastEdited:new Date},I=Wc(Jr,Da.BULLETIN,G.id);await P1(I,G)}async function T(F){await N1(Wc(Jr,Da.BULLETIN,F))}const R={show:nt(!1),title:nt("Create New Bulletin")},S={show:nt(!1),title:nt("Edit Bulletin")};return{bulletins:t,newBulletin:e,bulletinBeingEdited:r,initializeNewBulletin:n,finalizeAndAddNewBulletin:s,getBulletinById:i,saveBulletinChanges:a,deleteBulletinById:c,resetBulletinBeingEdited:u,modalNew:R,modalEdit:S,openModalNew:F=>{R.title.value=F,R.show.value=!0},closeModalNew:()=>{R.show.value=!1},openModalEdit:(F,G)=>{o(G),S.title.value=F,S.show.value=!0},closeModalEdit:()=>{S.show.value=!1}}}),gO=["id"],yO={class:"my-modal__inner"},vO={class:"my-modal__header"},EO={key:0,class:"my-modal__footer"},TO={key:1,class:"my-modal__footer my-modal__footer--buttons"},NT=In({__name:"MyModal",props:{open:{type:Boolean},showClose:{type:Boolean},showSave:{type:Boolean},showDelete:{type:Boolean},showDiscard:{type:Boolean},disableScroll:{type:Boolean},title:{},onSave:{type:Function},onDelete:{type:Function},onDiscard:{type:Function},onClose:{type:Function},onOpen:{type:Function}},emits:["close"],setup(t,{emit:e}){const n=t,s=e,i=nt(null),r=gt(()=>`dialog-${n.title}`),o=()=>{i.value&&i.value.showModal(),n.onOpen&&n.onOpen()},a=()=>{i.value&&i.value.close(),n.onClose&&n.onClose()},c=()=>{a(),n.onDelete&&n.onDelete()},u=()=>{a(),n.onDiscard&&n.onDiscard()},h=()=>{a(),n.onSave&&n.onSave()},f=_=>{s("close"),_.target===i.value&&a()};Tg(()=>{n.open&&o()}),ws(()=>n.open,_=>{_&&o(),_||a()});const m=gt(()=>({"my-modal__content":!0,"my-modal__content--disable-scroll":n.disableScroll}));return(_,T)=>{const R=Ah("unicon");return Ae(),Xe("dialog",{id:r.value,ref_key:"dialog",ref:i,class:"my-modal",onClick:Ph(f,["prevent"])},[ue("div",yO,[ue("div",vO,[ue("h2",null,Qn(_.title),1),_.showClose?(Ae(),Xe("button",{key:0,class:"my-modal__close",onClick:a},[T[0]||(T[0]=ue("span",{class:"sr-only"},"Close",-1)),qe(R,{name:"times",fill:"white"})])):Qt("",!0)]),ue("div",{class:Il(m.value)},[qf(_.$slots,"default")],2),_.$slots.footer?(Ae(),Xe("div",EO,[qf(_.$slots,"footer")])):_.showDelete||_.showDiscard||_.showSave?(Ae(),Xe("div",TO,[_.showDelete?(Ae(),Xe("button",{key:0,class:"my-modal__delete",onClick:c},"Delete")):Qt("",!0),_.showDiscard?(Ae(),Xe("button",{key:1,class:"my-modal__discard",onClick:u}," Discard ")):Qt("",!0),_.showSave?(Ae(),Xe("button",{key:2,class:"my-modal__save",onClick:h},"Save")):Qt("",!0)])):Qt("",!0)])],8,gO)}}}),wO={class:"bulletin-control"},IO={class:"bulletin-control"},AO={class:"bulletin-control"},bO=In({__name:"EditBulletinModal",setup(t){const e=rc(),n=()=>{e.saveBulletinChanges(),e.resetBulletinBeingEdited()},s=()=>{e.resetBulletinBeingEdited()},i=()=>{if(!e.bulletinBeingEdited||!e.bulletinBeingEdited.id){console.error("Something went wrong - tried to delete a bulletin that doesn't exist.");return}e.deleteBulletinById(e.bulletinBeingEdited.id),e.resetBulletinBeingEdited()};return(r,o)=>(Ae(),yn(NT,{title:ce(e).modalEdit.title,open:ce(e).modalEdit.show,onClose:ce(e).closeModalEdit,onSave:n,onDelete:i,onDiscard:s,showClose:"",showDelete:"",showDiscard:"",showSave:"",class:"bulletin-modal"},{default:Zs(()=>[ce(e).bulletinBeingEdited?(Ae(),Xe("div",{key:0,class:"bulletin-modal__container",onClick:o[3]||(o[3]=Ph(()=>{},["stop"]))},[ue("div",wO,[o[4]||(o[4]=ue("label",{for:"bulletin-title"},"Title:",-1)),Ts(ue("input",{name:"bulletin-title","onUpdate:modelValue":o[0]||(o[0]=a=>ce(e).bulletinBeingEdited.title=a)},null,512),[[Is,ce(e).bulletinBeingEdited.title]])]),ue("div",IO,[o[5]||(o[5]=ue("label",{for:"bulletin-author"},"Author:",-1)),Ts(ue("input",{name:"bulletin-author","onUpdate:modelValue":o[1]||(o[1]=a=>ce(e).bulletinBeingEdited.author=a)},null,512),[[Is,ce(e).bulletinBeingEdited.author]])]),ue("div",AO,[o[6]||(o[6]=ue("label",{for:"bulletin-body"},"Body:",-1)),Ts(ue("textarea",{name:"bulletin-body","onUpdate:modelValue":o[2]||(o[2]=a=>ce(e).bulletinBeingEdited.body=a)},null,512),[[Is,ce(e).bulletinBeingEdited.body]])])])):Qt("",!0)]),_:1},8,["title","open","onClose"]))}}),RO=ko(bO,[["__scopeId","data-v-96a4a15b"]]),Hd=ty("login",()=>{const t=nt(""),e=nt(!1),n=nt(!1),s=nt(!1),i=()=>{o()},r=()=>{s.value=!s.value},o=()=>{if(n.value)return;const c=(Number(t.value)<<Number(t.value[2])).toString();Number(c[0])-Number(c[1])*(Number(c[2])+Number(c[3]))*Math.sqrt(Number(c[4]))===-11&&Number(((Number(t.value[1])+Number(c[0]))*Number(c[2])*Number(t.value[2])/Number(c[2]+c[4])).toString().substring(0,4))===2.27?e.value=!0:(n.value=!0,setTimeout(function(){n.value=!1},3e3))};return{pw:t,proxyVerify:i,pwAccepted:e,strike:n,showInput:s,toggleShowInput:r}}),CO={class:"simple-login"},SO={class:"simple-login__password"},PO={key:0},kT=In({__name:"SimpleLogin",setup(t){const e=Hd();return(n,s)=>{const i=Ah("unicon");return Ae(),Xe("div",CO,[s[7]||(s[7]=ue("h1",{class:"simple-login__message"},"Please enter the Ryan Fam password below:",-1)),ue("div",SO,[s[6]||(s[6]=ue("div",{class:"simple-login__filler"},null,-1)),!ce(e).strike&&!ce(e).showInput?Ts((Ae(),Xe("input",{key:0,type:"password","onUpdate:modelValue":s[0]||(s[0]=r=>ce(e).pw=r),onKeyup:s[1]||(s[1]=_p(r=>ce(e).proxyVerify(),["enter"]))},null,544)),[[Is,ce(e).pw]]):Qt("",!0),!ce(e).strike&&ce(e).showInput?Ts((Ae(),Xe("input",{key:1,type:"text","onUpdate:modelValue":s[2]||(s[2]=r=>ce(e).pw=r),onKeyup:s[3]||(s[3]=_p(r=>ce(e).proxyVerify(),["enter"]))},null,544)),[[Is,ce(e).pw]]):Qt("",!0),ce(e).strike?Qt("",!0):(Ae(),Xe("button",{key:2,class:"simple-login__show",onClick:s[4]||(s[4]=r=>ce(e).toggleShowInput())},[qe(i,{name:"eye",fill:"var(--ryan-fam-blue)",height:"24px",width:"24px"})]))]),ce(e).strike?(Ae(),Xe("span",PO,"Try again in a moment.")):Qt("",!0),ue("button",{onClick:s[5]||(s[5]=r=>ce(e).proxyVerify()),class:"simple-login__submit"},"Submit")])}}}),NO={key:0},kO={key:1,class:"bulletin-page-view"},DO={class:"bulletin-page"},OO=In({__name:"BulletinPageView",setup(t){const e=rc(),n=Hd(),s=kA(),i=gt(()=>e.getBulletinById(s.params.id)),r=()=>{e.openModalEdit(`Edit ${i.value.title}`,i.value)};return(o,a)=>(Ae(),Xe("main",null,[ce(n).pwAccepted?(Ae(),Xe("div",kO,[ce(e).modalEdit.show?(Ae(),yn(RO,{key:0})):Qt("",!0),ue("div",DO,[ue("h1",null,Qn(i.value.title),1),ue("sub",null,"by "+Qn(i.value.author),1),ue("p",null,Qn(i.value.body),1)]),ue("div",null,[ue("button",{onClick:r},"Edit")])])):(Ae(),Xe("div",NO,[qe(kT)]))]))}}),xO=ko(OO,[["__scopeId","data-v-30373c2e"]]),MO={class:"bulletin-card"},VO={class:"bulletin-card__title"},LO={class:"bulletin-card__body"},FO=In({__name:"BulletinCard",props:{bulletin:{}},setup(t){const e=t,n=gt(()=>`/bulletin/${e.bulletin.id}`);return(s,i)=>(Ae(),yn(ce(zr),{to:n.value},{default:Zs(()=>[ue("div",MO,[ue("h1",VO,Qn(e.bulletin.title),1),ue("sub",null,"by "+Qn(e.bulletin.author),1),ue("p",LO,Qn(e.bulletin.body),1)])]),_:1},8,["to"]))}}),UO={class:"bulletin-control"},BO={class:"bulletin-control"},$O={class:"bulletin-control"},jO=In({__name:"NewBulletinModal",setup(t){const e=rc(),n=()=>{e.finalizeAndAddNewBulletin(),e.closeModalNew()};return(s,i)=>(Ae(),yn(NT,{title:ce(e).modalNew.title,open:ce(e).modalNew.show,onClose:ce(e).closeModalNew,onSave:n,showClose:"",showDiscard:"",showSave:"",class:"bulletin-modal"},{default:Zs(()=>[ue("div",{class:"bulletin-modal__container",onClick:i[3]||(i[3]=Ph(()=>{},["stop"]))},[ue("div",UO,[i[4]||(i[4]=ue("label",{for:"bulletin-title"},"Title:",-1)),Ts(ue("input",{name:"bulletin-title","onUpdate:modelValue":i[0]||(i[0]=r=>ce(e).newBulletin.title=r)},null,512),[[Is,ce(e).newBulletin.title]])]),ue("div",BO,[i[5]||(i[5]=ue("label",{for:"bulletin-author"},"Author:",-1)),Ts(ue("input",{name:"bulletin-author","onUpdate:modelValue":i[1]||(i[1]=r=>ce(e).newBulletin.author=r)},null,512),[[Is,ce(e).newBulletin.author]])]),ue("div",$O,[i[6]||(i[6]=ue("label",{for:"bulletin-body"},"Body:",-1)),Ts(ue("textarea",{name:"bulletin-body","onUpdate:modelValue":i[2]||(i[2]=r=>ce(e).newBulletin.body=r)},null,512),[[Is,ce(e).newBulletin.body]])])])]),_:1},8,["title","open","onClose"]))}}),HO=ko(jO,[["__scopeId","data-v-db7a5c2c"]]),WO={key:0},qO={key:1,class:"bulletin-view"},KO={class:"bulletin-view__cards"},zO=In({__name:"BulletinView",setup(t){const e=rc(),n=Hd(),s=gt(()=>[...e.bulletins].sort((r,o)=>r.created<o.created?1:-1)),i=()=>{e.initializeNewBulletin(),e.openModalNew("Create a new bulletin")};return(r,o)=>{const a=Ah("unicon");return Ae(),Xe("main",null,[ce(n).pwAccepted?(Ae(),Xe("div",qO,[ce(e).modalNew.show?(Ae(),yn(HO,{key:0})):Qt("",!0),ue("div",KO,[ue("button",{class:"bulletin-view__card bulletin-view__card--add",onClick:o[0]||(o[0]=c=>i()),title:"Add a new bulletin"},[qe(a,{name:"plus-circle",fill:"var(--ryan-fam-blue)",height:"48px",width:"48px"})]),(Ae(!0),Xe(Bt,null,o0(s.value,c=>(Ae(),yn(FO,{class:"bulletin-view__card",key:c.id,bulletin:c,title:"Click to read more"},null,8,["bulletin"]))),128))])])):(Ae(),Xe("div",WO,[qe(kT)]))])}}}),GO=PA({history:oA("https://www.ryan-fam.com/"),routes:[{path:"/bulletin",name:"bulletin",component:zO},{path:"/bulletin/:id",name:"bulletin-page",component:xO},{path:"/calendar",name:"calendar",component:()=>Fp(()=>import("./CalendarView-jd4HIVaZ.js"),__vite__mapDeps([0,1]))},{path:"/about",name:"about",component:()=>Fp(()=>import("./AboutView-BmPTFuI_.js"),[])}]});function QO(t,e){return function(n){if(Array.isArray(n))return n}(t)||function(n,s){if(!(!(Symbol.iterator in Object(n))&&Object.prototype.toString.call(n)!=="[object Arguments]")){var i=[],r=!0,o=!1,a=void 0;try{for(var c,u=n[Symbol.iterator]();!(r=(c=u.next()).done)&&(i.push(c.value),!s||i.length!==s);r=!0);}catch(h){o=!0,a=h}finally{try{r||u.return==null||u.return()}finally{if(o)throw a}}return i}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Gs={name:"Unicon",inheritAttrs:!1,props:{name:{type:String,default:""},iconStyle:{type:String,default:"line"},width:{type:[String,Number],default:24},height:{type:[String,Number],default:24},fill:{type:String,default:"inherit"},hoverFill:{type:String,default:null},viewBox:{type:String,default:"0 0 24 24"}},lib:[],add(t){Array.isArray(t)?this.lib=t:this.lib.push(t)},data(){return{localFill:this.fill}},computed:{icon(){const t=this.$options.lib.find(e=>e.name===this.name&&e.style===this.iconStyle);return t?t.path:void console.error(`Name '${this.name}' of the icon is not correct`)}},watch:{fill(t){this.localFill=t}},methods:{onHover(){this.hoverFill&&(this.localFill=this.hoverFill)},onLeave(){this.hoverFill&&(this.localFill=this.fill)}}};const YO={class:"unicon"};(function(t,e){e===void 0&&(e={});var n=e.insertAt;if(typeof document<"u"){var s=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&s.firstChild?s.insertBefore(i,s.firstChild):s.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}})(`
.unicon {
  display: inline-block;
}
.unicon svg {
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}
.uim-primary {
  opacity: 1;
}
.uim-secondary {
  opacity: 0.7;
}
.uim-tertiary {
  opacity: 0.5;
}
.uim-quaternary {
  opacity: 0.25;
}
.uim-quinary {
  opacity: 0;
}
`),Gs.render=function(t,e,n,s,i,r){return Ae(),yn(Bt,null,[Qt(" eslint-disable vue/no-v-html "),qe("div",YO,[(Ae(),yn("svg",Hg({xmlns:"http://www.w3.org/2000/svg",width:n.width,height:n.height,viewBox:n.viewBox,fill:i.localFill},t.$attrs,{onClick:e[1]||(e[1]=o=>t.$emit("click")),onMouseover:e[2]||(e[2]=(...o)=>r.onHover&&r.onHover(...o)),onMouseout:e[3]||(e[3]=(...o)=>r.onLeave&&r.onLeave(...o)),innerHTML:r.icon}),null,16,["width","height","viewBox","fill","innerHTML"]))])],2112)},Gs.__file="src/components/Unicon.vue";var DT={install:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};t.component(Gs.name,Gs);for(var n=0,s=Object.entries(e);n<s.length;n++){var i=QO(s[n],2),r=i[0],o=i[1];Gs.props[r]&&(Gs.props[r].default=o)}},add:function(t){Gs.add(t)}};const XO={name:"angle-up",style:"line",path:'<path d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"/>'},JO={name:"check",style:"line",path:'<path d="M18.71,7.21a1,1,0,0,0-1.42,0L9.84,14.67,6.71,11.53A1,1,0,1,0,5.29,13l3.84,3.84a1,1,0,0,0,1.42,0l8.16-8.16A1,1,0,0,0,18.71,7.21Z"/>'},ZO={name:"clock",style:"line",path:'<path d="M15.09814,12.63379,13,11.42285V7a1,1,0,0,0-2,0v5a.99985.99985,0,0,0,.5.86621l2.59814,1.5a1.00016,1.00016,0,1,0,1-1.73242ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z"/>'},ex={name:"eye",style:"line",path:'<path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"/>'},tx={name:"grin",style:"line",path:'<path d="M9,11a1,1,0,1,0-1-1A1,1,0,0,0,9,11Zm3-9A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm3-7H9a1,1,0,0,0-1,1,4,4,0,0,0,8,0A1,1,0,0,0,15,13Zm-3,3a2,2,0,0,1-1.73-1h3.46A2,2,0,0,1,12,16Zm3-7a1,1,0,1,0,1,1A1,1,0,0,0,15,9Z"/>'},nx={name:"heart",style:"line",path:'<path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>'},sx={name:"info-circle",style:"line",path:'<path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"/>'},ix={name:"plus-circle",style:"line",path:'<path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z"/>'},rx={name:"schedule",style:"line",path:'<path d="M12,14a1,1,0,1,0-1-1A1,1,0,0,0,12,14Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,14Zm-5,4a1,1,0,1,0-1-1A1,1,0,0,0,12,18Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,18ZM7,14a1,1,0,1,0-1-1A1,1,0,0,0,7,14ZM19,4H18V3a1,1,0,0,0-2,0V4H8V3A1,1,0,0,0,6,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V10H20ZM20,8H4V7A1,1,0,0,1,5,6H19a1,1,0,0,1,1,1ZM7,18a1,1,0,1,0-1-1A1,1,0,0,0,7,18Z"/>'},ox={name:"times",style:"line",path:'<path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/>'},ax={name:"x",style:"line",path:'<path d="M8,19a3,3,0,0,1-3-3V8A3,3,0,0,1,8,5,1,1,0,0,0,8,3,5,5,0,0,0,3,8v8a5,5,0,0,0,5,5,1,1,0,0,0,0-2Zm7.71-3.29a1,1,0,0,0,0-1.42L13.41,12l2.3-2.29a1,1,0,0,0-1.42-1.42L12,10.59,9.71,8.29A1,1,0,0,0,8.29,9.71L10.59,12l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l2.29,2.3a1,1,0,0,0,1.42,0ZM16,3a1,1,0,0,0,0,2,3,3,0,0,1,3,3v8a3,3,0,0,1-3,3,1,1,0,0,0,0,2,5,5,0,0,0,5-5V8A5,5,0,0,0,16,3Z"/>'};DT.add([JO,ZO,ax,ox,rx,nx,tx,sx,XO,ix,ex]);const Ko=vI($A);Ko.use(DT);Ko.use(II());Ko.use(_O,{firebaseApp:Yv});Ko.use(GO);Ko.mount("#app");export{hx as A,Qt as B,ko as C,zg as D,Tg as E,Bt as F,Ah as G,cx as H,qe as I,Hd as J,kT as K,lx as T,NT as _,_x as a,Wc as b,gt as c,ty as d,Da as e,Jr as f,P1 as g,N1 as h,In as i,yn as j,Zs as k,ue as l,Ph as m,WA as n,Ae as o,Ts as p,ce as q,nt as r,S1 as s,ux as t,mO as u,Is as v,ws as w,Xe as x,o0 as y,Qn as z};

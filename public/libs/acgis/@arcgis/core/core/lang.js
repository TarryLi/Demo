/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{a as t,i as e}from"../chunks/maybe.js";let n;function r(t){return"function"==typeof n[t]?n[t]=n[t](globalThis):n[t]}n=globalThis.dojoConfig?.has||globalThis.esriConfig?.has?{...globalThis.dojoConfig?.has,...globalThis.esriConfig?.has}:{},r.add=(t,e,o,a)=>((a||void 0===n[t])&&(n[t]=e),o&&r(t)),r.cache=n,r.add("esri-deprecation-warnings",!0),(()=>{r.add("host-webworker",void 0!==globalThis.WorkerGlobalScope&&self instanceof globalThis.WorkerGlobalScope);const t="undefined"!=typeof window&&"undefined"!=typeof location&&"undefined"!=typeof document&&window.location===location&&window.document===document;if(r.add("host-browser",t),r.add("host-node","object"==typeof globalThis.process&&globalThis.process.versions?.node&&globalThis.process.versions.v8),r.add("dom",t),r("host-browser")){const t=navigator,e=t.userAgent,n=t.appVersion,o=parseFloat(n);if(r.add("wp",parseFloat(e.split("Windows Phone")[1])||void 0),r.add("msapp",parseFloat(e.split("MSAppHost/")[1])||void 0),r.add("khtml",n.includes("Konqueror")?o:void 0),r.add("edge",parseFloat(e.split("Edge/")[1])||void 0),r.add("opr",parseFloat(e.split("OPR/")[1])||void 0),r.add("webkit",!r("wp")&&!r("edge")&&parseFloat(e.split("WebKit/")[1])||void 0),r.add("chrome",!r("edge")&&!r("opr")&&parseFloat(e.split("Chrome/")[1])||void 0),r.add("android",!r("wp")&&parseFloat(e.split("Android ")[1])||void 0),r.add("safari",!n.includes("Safari")||r("wp")||r("chrome")||r("android")||r("edge")||r("opr")?void 0:parseFloat(n.split("Version/")[1])),r.add("mac",n.includes("Macintosh")),!r("wp")&&e.match(/(iPhone|iPod|iPad)/)){const t=RegExp.$1.replace(/P/,"p"),n=e.match(/OS ([\d_]+)/)?RegExp.$1:"1",o=parseFloat(n.replace(/_/,".").replace(/_/g,""));r.add(t,o),r.add("ios",o)}r.add("trident",parseFloat(n.split("Trident/")[1])||void 0),r("webkit")||(!e.includes("Gecko")||r("wp")||r("khtml")||r("trident")||r("edge")||r.add("mozilla",o),r("mozilla")&&r.add("ff",parseFloat(e.split("Firefox/")[1]||e.split("Minefield/")[1])||void 0))}})(),(()=>{if(globalThis.navigator){const t=navigator.userAgent,e=/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i.test(t),n=/iPhone/i.test(t);e&&r.add("esri-mobile",e),n&&r.add("esri-iPhone",n),r.add("esri-geolocation",!!navigator.geolocation)}r.add("esri-canvas-svg-support",!r("trident")),r.add("esri-wasm","WebAssembly"in globalThis),r.add("esri-shared-array-buffer",(()=>{const t="SharedArrayBuffer"in globalThis,e=!1===globalThis.crossOriginIsolated;return t&&!e})),r.add("wasm-simd",(()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])))),r.add("esri-atomics","Atomics"in globalThis),r.add("esri-workers","Worker"in globalThis),r.add("web-feat:cache","caches"in globalThis),r.add("esri-workers-arraybuffer-transfer",!r("safari")||Number(r("safari"))>=12),r.add("featurelayer-simplify-thresholds",[.5,.5,.5,.5]),r.add("featurelayer-simplify-payload-size-factors",[1,1,4]),r.add("featurelayer-snapshot-enabled",!0),r.add("featurelayer-snapshot-point-min-threshold",8e4),r.add("featurelayer-snapshot-point-max-threshold",4e5),r.add("featurelayer-snapshot-point-coverage",.1),r.add("featurelayer-advanced-symbols",!1),r.add("featurelayer-pbf",!0),r.add("featurelayer-pbf-statistics",!1),r.add("feature-layers-workers",!0),r.add("feature-polyline-generalization-factor",1),r.add("mapview-transitions-duration",200),r.add("mapview-srswitch-adjust-rotation-scale-threshold",24e6),r.add("mapserver-pbf-enabled",!1),r.add("mapimagelayer-popup-identify-max-tolerance",20),r.add("heatmap-allow-raster-fallback",!0),r.add("heatmap-force-raster",!1),r("host-webworker")||r("host-browser")&&(r.add("esri-csp-restrictions",(()=>{try{new Function}catch{return!0}return!1})),r.add("esri-image-decode",(()=>{if("decode"in new Image){const t=new Image;return t.src='data:image/svg+xml;charset=UTF-8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>',void t.decode().then((()=>{r.add("esri-image-decode",!0,!0,!0)})).catch((()=>{r.add("esri-image-decode",!1,!0,!0)}))}return!1})),r.add("esri-url-encodes-apostrophe",(()=>{const t=window.document.createElement("a");return t.href="?'",t.href.includes("?%27")})))})();class o{constructor(t=1){this._seed=t}set seed(t){this._seed=null==t?Math.random()*o._m:t}getInt(){return this._seed=(o._a*this._seed+o._c)%o._m,this._seed}getFloat(){return this.getInt()/(o._m-1)}getIntRange(t,e){return Math.round(this.getFloatRange(t,e))}getFloatRange(t,e){const n=e-t;return t+this.getInt()/o._m*n}}function a(t){if(!t)return;const e=t.length;return e>0?t[e-1]:void 0}function i(t){return t}function s(t,e=i){return function(t,e=i){if(!t||0===t.length)return;let n=t[0],r=e(n);for(let o=1;o<t.length;++o){const a=t[o],i=Number(e(a));i>r&&(r=i,n=a)}return n}(t,(t=>-e(t)))}function c(t,e){return e?t.filter(((t,n,r)=>r.findIndex(e.bind(null,t))===n)):t.filter(((t,e,n)=>n.indexOf(t)===e))}function l(e,n,r){if(t(e)&&t(n))return!0;if(t(e)||t(n)||e.length!==n.length)return!1;if(r){for(let t=0;t<e.length;t++)if(!r(e[t],n[t]))return!1}else for(let t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function f(t,e){let n=t.length!==e.length;t.length=e.length;for(let r=0;r<e.length;++r)t[r]!==e[r]&&(t[r]=e[r],n=!0);return n}function u(t,e,n){let r,o;return n?(r=e.filter((e=>!t.some((t=>n(t,e))))),o=t.filter((t=>!e.some((e=>n(e,t)))))):(r=e.filter((e=>!t.includes(e))),o=t.filter((t=>!e.includes(t)))),{added:r,removed:o}}function d(t){return t&&"number"==typeof t.length}function h(t,e){const n=t.length;if(0===n)return[];const r=[];for(let o=0;o<n;o+=e)r.push(t.slice(o,o+e));return r}o._m=2147483647,o._a=48271,o._c=0;const p=!!Array.prototype.fill;function g(t,e){if(p)return new Array(t).fill(e);const n=new Array(t);for(let r=0;r<t;r++)n[r]=e;return n}function m(t,e){void 0===e&&(e=t,t=0);const n=new Array(e-t);for(let r=t;r<e;r++)n[r-t]=r;return n}function y(t,e,n){const r=t.length;let o=0,a=r-1;for(;o<a;){const n=o+Math.floor((a-o)/2);e>t[n]?o=n+1:a=n}const i=t[o];return n?e>=t[r-1]?-1:i===e?o:o-1:i===e?o:-1}function b(t,e,n){if(!t||0===t.length)return;const r=t.length-1,o=t[0];if(e<=n(o))return o;const a=t[r];if(e>=n(a))return a;let i=0,s=0,c=r;for(;i<c;){s=i+Math.floor((c-i)/2);const o=t[s],a=n(o);if(a===e)return o;if(e<a){if(s>0){const r=t[s-1],i=n(r);if(e>i)return e-i>=a-e?o:r}c=s}else{if(s<r){const r=t[s+1],i=n(r);if(e<i)return e-a>=i-e?r:o}i=s+1}}return t[s]}function w(t){return t.reduce(((t,e)=>t.concat(e||[])),[])}class v{constructor(){this.last=0}}const A=new v;function O(t,e,n,r){r=r||A;const o=Math.max(0,r.last-10);for(let a=o;a<n;++a)if(t[a]===e)return r.last=a,a;const a=Math.min(o,n);for(let n=0;n<a;++n)if(t[n]===e)return r.last=n,n;return-1}function T(t,e,n,r){const o=null==n?t.length:n,a=O(t,e,o,r);if(-1!==a)return t[a]=t[o-1],null==n&&t.pop(),e}const F=new Set;function M(t,e,n=t.length,r=e.length,o,a){if(0===r||0===n)return n;F.clear();for(let t=0;t<r;++t)F.add(e[t]);o=o||A;const i=Math.max(0,o.last-10);for(let e=i;e<n;++e)if(F.has(t[e])&&(a&&a.push(t[e]),F.delete(t[e]),t[e]=t[n-1],--n,--e,0===F.size||0===n))return F.clear(),n;for(let e=0;e<i;++e)if(F.has(t[e])&&(a&&a.push(t[e]),F.delete(t[e]),t[e]=t[n-1],--n,--e,0===F.size||0===n))return F.clear(),n;return F.clear(),n}function j(t,e,n){const r=t.length;if(e>=r)return t.slice(0);const o=P(n),a=new Set,i=[];for(;i.length<e;){const e=Math.floor(o()*r);a.has(e)||(a.add(e),i.push(t[e]))}return i}function P(t){return t?(x.seed=t,()=>x.getFloat()):Math.random}function k(t,e){const n=P(e);for(let e=t.length-1;e>0;e--){const r=Math.floor(n()*(e+1)),o=t[e];t[e]=t[r],t[r]=o}return t}const x=new o;function _(t,e){const n=t.indexOf(e);return-1!==n?(t.splice(n,1),e):null}function I(t,e){if(t.forEach)t.forEach(e);else for(let n=0;n<t.length;n++)e(t[n],n,t)}function E(t,e,n){if(t.slice)return t.slice(e,n);void 0===e?e=0:(e<0&&(e+=t.length),e=Math.min(t.length,Math.max(0,e))),void 0===n?n=t.length:(n<0&&(n+=t.length),n=Math.min(t.length,Math.max(0,n)));const r=Math.max(0,n-e),o=new(0,t.constructor)(r);for(let n=0;n<r;n++)o[n]=t[e+n];return o}function S(t){return t instanceof ArrayBuffer||t&&t.constructor&&"ArrayBuffer"===t.constructor.name}function N(t){return t instanceof Uint8Array||t&&t.constructor&&"Uint8Array"===t.constructor.name}function z(t){return t instanceof Int16Array||t&&t.constructor&&"Int16Array"===t.constructor.name}function U(t){return t instanceof Uint16Array||t&&t.constructor&&"Uint16Array"===t.constructor.name}function C(t){return t instanceof Int32Array||t&&t.constructor&&"Int32Array"===t.constructor.name}function R(t){return t instanceof Uint32Array||t&&t.constructor&&"Uint32Array"===t.constructor.name}function B(t){return t instanceof Float32Array||t&&t.constructor&&"Float32Array"===t.constructor.name}function D(t){return t instanceof Float64Array||t&&t.constructor&&"Float64Array"===t.constructor.name}function W(t){const e=new Array(t.length);for(let n=0;n<t.length;n++)e[n]=t[n];return e}function G(e){return t(e)?0:128+e.buffer.byteLength+64}function V(t,e){let n;if(e)for(n in t)t.hasOwnProperty(n)&&(void 0===t[n]?delete t[n]:t[n]instanceof Object&&V(t[n],!0));else for(n in t)t.hasOwnProperty(n)&&void 0===t[n]&&delete t[n];return t}function q(t){if(!t||"object"!=typeof t||"function"==typeof t)return t;const n=Q(t);if(e(n))return n;if(L(t))return t.clone();if($(t))return t.map(q);if(H(t))return t.clone();const r={};for(const e of Object.getOwnPropertyNames(t))r[e]=q(t[e]);return r}function K(t){if(!t||"object"!=typeof t||"function"==typeof t)return t;const n=Q(t);if(e(n))return n;if($(t)){let e=!0;const n=t.map((t=>{const n=K(t);return null!=t&&null==n&&(e=!1),n}));return e?n:null}if(L(t))return t.clone();if(!H(t)){const e=new(0,Object.getPrototypeOf(t).constructor);for(const n of Object.getOwnPropertyNames(t)){const r=t[n],o=K(r);if(null!=r&&null==o)return null;e[n]=o}return e}return null}function L(t){return"function"==typeof t.clone}function $(t){return"function"==typeof t.map&&"function"==typeof t.forEach}function H(t){return"function"==typeof t.notifyChange&&"function"==typeof t.watch}function J(t){if("[object Object]"!==Object.prototype.toString.call(t))return!1;const e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function Q(t){if((e=t)instanceof Int8Array||e&&e.constructor&&"Int8Array"===e.constructor.name||N(t)||function(t){return t instanceof Uint8ClampedArray||t&&t.constructor&&"Uint8ClampedArray"===t.constructor.name}(t)||z(t)||U(t)||C(t)||R(t)||B(t)||D(t))return E(t);var e;if(t instanceof Date)return new Date(t.getTime());if(t instanceof ArrayBuffer)return t.slice(0,t.byteLength);if(t instanceof Map){const e=new Map;return t.forEach(((t,n)=>{e.set(n,q(t))})),e}if(t instanceof Set){const e=new Set;return t.forEach((t=>{e.add(q(t))})),e}return null}function X(t,e){return t===e||"number"==typeof t&&isNaN(t)&&"number"==typeof e&&isNaN(e)||"function"==typeof(t||{}).getTime&&"function"==typeof(e||{}).getTime&&t.getTime()===e.getTime()||!1}function Y(t,e){return t===e||(null==t||"string"==typeof t?t===e:"number"==typeof t?t===e||"number"==typeof e&&isNaN(t)&&isNaN(e):t instanceof Date?e instanceof Date&&t.getTime()===e.getTime():Array.isArray(t)?Array.isArray(e)&&l(t,e):t instanceof Set?e instanceof Set&&function(t,e){if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0}(t,e):t instanceof Map?e instanceof Map&&function(t,e){if(t.size!==e.size)return!1;for(const[n,r]of t){const t=e.get(n);if(t!==r||void 0===t&&!e.has(n))return!1}return!0}(t,e):!!J(t)&&J(e)&&function(t,e){if(null===t||null===e)return!1;const n=Object.keys(t);if(null===e||Object.keys(e).length!==n.length)return!1;for(const r of n)if(t[r]!==e[r]||!Object.prototype.hasOwnProperty.call(e,r))return!1;return!0}(t,e))}const Z=function(t={},...e){return r("esri-deprecation-warnings")&&console.warn("[esri.core.lang] 🛑 DEPRECATED - Function: mixin()\n\t🛠️ Replacement: Use Object.assign() directly\n\t⚙️ Version: 4.19"),Object.assign(t,...e)};export{m as A,I as B,b as C,s as D,a as E,k as F,v as P,o as R,_ as a,M as b,B as c,q as clone,D as d,l as e,X as equals,Y as equalsShallow,G as f,V as fixJson,U as g,r as h,O as i,H as isAccessorLike,J as isPlainObject,R as j,d as k,g as l,c as m,Z as mixin,S as n,N as o,j as p,u as q,T as r,E as s,W as t,K as tryClone,Q as tryCloneBuiltInObject,f as u,y as v,w,h as x,z as y,C as z};

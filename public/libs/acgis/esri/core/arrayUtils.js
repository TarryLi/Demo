// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./maybe","./RandomLCG"],function(h,m,y){function q(a){return a}function r(a,b=q){if(a&&0!==a.length){var c=a[0],d=b(c);for(let e=1;e<a.length;++e){const f=a[e],g=Number(b(f));g>d&&(d=g,c=f)}return c}}function t(a,b,c,d){d=d||u;var e=Math.max(0,d.last-10);for(let f=e;f<c;++f)if(a[f]===b)return d.last=f;c=Math.min(e,c);for(e=0;e<c;++e)if(a[e]===b)return d.last=e;return-1}function v(a){return a?(w.seed=a,()=>w.getFloat()):Math.random}const z=!!Array.prototype.fill;let x=function(){this.last=
0};const u=new x,k=new Set,w=new y;h.PositionHint=x;h.binaryFindClosest=function(a,b,c){if(a&&0!==a.length){var d=a.length-1,e=a[0];if(b<=c(e))return e;e=a[d];if(b>=c(e))return e;var f=0;e=0;for(var g=d;f<g;){e=f+Math.floor((g-f)/2);const n=a[e],p=c(n);if(p===b)return n;if(b<p){if(0<e){g=a[e-1];var l=c(g);if(b>l)return b-l>=p-b?n:g}g=e}else{if(e<d&&(f=a[e+1],l=c(f),b<l))return b-p>=l-b?f:n;f=e+1}}return a[e]}};h.binaryIndexOf=function(a,b,c){const d=a.length;let e=0;for(var f=d-1;e<f;){const g=e+
Math.floor((f-e)/2);b>a[g]?e=g+1:f=g}f=a[e];return c?b>=a[d-1]?-1:f===b?e:e-1:f===b?e:-1};h.constant=function(a,b){if(z)return Array(a).fill(b);const c=Array(a);for(let d=0;d<a;d++)c[d]=b;return c};h.difference=function(a,b,c){let d,e;c?(d=b.filter(f=>!a.some(g=>c(g,f))),e=a.filter(f=>!b.some(g=>c(g,f)))):(d=b.filter(f=>!a.includes(f)),e=a.filter(f=>!b.includes(f)));return{added:d,removed:e}};h.equals=function(a,b,c){if(m.isNone(a)&&m.isNone(b))return!0;if(m.isNone(a)||m.isNone(b)||a.length!==b.length)return!1;
if(c)for(let d=0;d<a.length;d++){if(!c(a[d],b[d]))return!1}else for(c=0;c<a.length;c++)if(a[c]!==b[c])return!1;return!0};h.first=function(a){if(a)return 0<a.length?a[0]:void 0};h.flatten=function(a){return a.reduce((b,c)=>b.concat(c||[]),[])};h.indexOf=t;h.intersect=function(a,b,c){return a&&b?c?a.filter(d=>-1<b.findIndex(e=>c(d,e))):a.filter(d=>b.includes(d)):[]};h.isArrayLike=function(a){return a&&"number"===typeof a.length};h.last=function(a){if(a){var b=a.length;return 0<b?a[b-1]:void 0}};h.max=
r;h.min=function(a,b=q){return r(a,c=>-b(c))};h.pickRandom=function(a,b,c){const d=a.length;if(b>=d)return a.slice(0);c=v(c);const e=new Set,f=[];for(;f.length<b;){const g=Math.floor(c()*d);e.has(g)||(e.add(g),f.push(a[g]))}return f};h.range=function(a,b){void 0===b&&(b=a,a=0);const c=Array(b-a);for(let d=a;d<b;d++)c[d-a]=d;return c};h.remove=function(a,b){const c=a.indexOf(b);return-1!==c?(a.splice(c,1),b):null};h.removeUnordered=function(a,b,c,d){const e=null==c?a.length:c;d=t(a,b,e,d);if(-1!==
d)return a[d]=a[e-1],null==c&&a.pop(),b};h.removeUnorderedMany=function(a,b,c=a.length,d=b.length,e,f){if(0===d||0===c)return c;k.clear();for(let g=0;g<d;++g)k.add(b[g]);e=e||u;b=Math.max(0,e.last-10);for(d=b;d<c;++d)if(k.has(a[d])&&(f&&f.push(a[d]),k.delete(a[d]),a[d]=a[c-1],--c,--d,0===k.size||0===c))return k.clear(),c;for(d=0;d<b;++d)if(k.has(a[d])&&(f&&f.push(a[d]),k.delete(a[d]),a[d]=a[c-1],--c,--d,0===k.size||0===c))return k.clear(),c;k.clear();return c};h.shuffle=function(a,b){b=v(b);for(let c=
a.length-1;0<c;c--){const d=Math.floor(b()*(c+1)),e=a[c];a[c]=a[d];a[d]=e}return a};h.splitIntoChunks=function(a,b){const c=a.length;if(0===c)return[];const d=[];for(let e=0;e<c;e+=b)d.push(a.slice(e,e+b));return d};h.unique=function(a,b){return b?a.filter((c,d,e)=>e.findIndex(b.bind(null,c))===d):a.filter((c,d,e)=>e.indexOf(c)===d)};h.update=function(a,b){let c=a.length!==b.length;a.length=b.length;for(let d=0;d<b.length;++d)a[d]!==b[d]&&(a[d]=b[d],c=!0);return c};Object.defineProperties(h,{__esModule:{value:!0},
[Symbol.toStringTag]:{value:"Module"}})});
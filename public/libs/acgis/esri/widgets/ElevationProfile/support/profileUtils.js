// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/arrayUtils ../../../core/mathUtils ../../../core/maybe ../../../core/promiseUtils ../../../geometry/Multipoint ../../../views/support/QueueProcessor ../../../views/support/Scheduler ./constants ./geometryUtils ./ProfileGenerationError ./statisticsUtils ../../support/traversalUtils".split(" "),function(w,t,I,J,x,v,K,L,M,y,z,u,N,O){function A(){A=t._wrapAsyncGenerator(function*(a,b){var c;const {view:m,geometry:d,elevationInfo:n,
providers:k,options:p}=a;if(x.isNone(d)||!z.isValidInputPath(d))throw new u.ProfileGenerationError(u.ProfileGenerationErrorCause.InvalidGeometry);var f=m.spatialReference;const e=k.length;if(0===e)return x.none;var l=Math.round(p.maxTotalSamples/e);if(z.countPoints(d)>l)throw new u.ProfileGenerationError(u.ProfileGenerationErrorCause.TooComplex);var r=yield t._awaitAsyncGenerator(z.densifyPath(d,n,m,f,p,l,b)),h=0;f=Array(e);l=Array(e);for(let g=0;g<e;g++){const q=P(r);f[g]=q;h+=q.samples.length;l[g]=
E({...a,provider:k[g],result:q,densificationResult:r},b)[Symbol.iterator]()}if(h>p.maxTotalSamples)throw new u.ProfileGenerationError(u.ProfileGenerationErrorCause.TooComplex);r=yield t._awaitAsyncGenerator(Promise.all(l.map(g=>{g=g.next();return!0===g.done?Promise.resolve(null):g.value})));v.throwIfAborted(b);for(h=0;h<e;h++)f[h]=r[h];yield f;yield t._awaitAsyncGenerator(v.after(null!=(c=a.delayAfterPreview)?c:y.DELAY_AFTER_PREVIEW_MILLIS,null,b.signal));a=[];try{let g;do for(g=!1,c=0;c<e;c++){const q=
l[c].next();!1===q.done&&(a.push({resultPromise:q.value,index:c}),g=!0)}while(g)}finally{l.forEach(g=>null==g.return?void 0:g.return())}for(const {resultPromise:g,index:q}of a)f[q]=yield t._awaitAsyncGenerator(g),v.throwIfAborted(b),yield f;x.forEachSome(f,g=>{g.progress=1});yield f});return A.apply(this,arguments)}function*E(a,b){var {densificationResult:c}=a;a={...a,abortOptions:b,densificationResult:c};b=O.breadthFirstBinaryPartitioning(0,a.result.samples.length);c=b.slice(0,a.provider.numSamplesForPreview);
yield F(a,c,!0);b=I.splitIntoChunks(b,a.provider.numSamplesPerChunk);for(const m of b)yield F(a,m,!1)}function F(a,b,c){return B.apply(this,arguments)}function B(){B=t._asyncToGenerator(function*({densificationResult:a,result:b,provider:c,queue:m,abortOptions:d,cache:n},k,p){const {densifiedPath:f,pathLength:e}=a;a=b.spatialReference;const {samples:l}=b,r=Array(k.length);for(let h=0;h<k.length;h++)r[h]=l[k[h]].coordinate;try{return yield m.push({geometry:new K({spatialReference:a,points:r,hasZ:f.hasZ}),
provider:c,indices:k,preview:p,result:b,queryOptions:{...y.DEFAULT_ELEVATION_PROFILE_QUERY_OPTIONS,minDemResolution:p?Math.round(e/c.numSamplesForPreview):Math.round(e/l.length),cache:n}},d),{...b}}catch(h){return v.isAbortError(h)?null:y.ERROR_RESULT}});return B.apply(this,arguments)}function Q(a){return C.apply(this,arguments)}function C(){C=t._asyncToGenerator(function*({geometry:a,provider:b,indices:c,preview:m,result:d,queryOptions:n}){if(0!==c.length){a=(yield R(b,a,n)).geometry;var {hasZ:k,
points:p}=a;n=n.noDataValue;({samples:a}=d);for(b=0;b<c.length;b++){const f=a[c[b]];if(f.isHole)continue;const e=k?p[b][2]:null;null===e||e===n?f.sampledZ=null:(d.hasZ=!0,f.sampledZ=e);f.sampled=!0}G(a);d.progress=m?0:d.progress+c.length/a.length;d.statistics=N.getStatistics(d.samples,d.spatialReference)}});return C.apply(this,arguments)}function G(a){const b=a.length-1;var c=0;for(let f=1;f<=b;f++)if(a[f].sampled||f===b){a:{var m=a,d=c;c=f;if(1===c-d)break a;var n=m[d],k=n.sampledZ,p=m[c];const e=
p.sampledZ;if(x.isNone(k)||x.isNone(e))for(k=d+1;k<c;k++)m[k].sampledZ=null;else for(n=n.distance,p=p.distance-n,d+=1;d<c;d++){const l=m[d];l.sampledZ=J.lerp(k,e,(l.distance-n)/p)}}c=f}}function P({densifiedPath:a,distances:b}){const c=a.spatialReference;a=a.paths;const m=a.length;var d=2*(m-1);d=a.reduce((e,l)=>e+l.length,0)+d;const n=Array(d);let k=0;d=null;let p=0;const f=(e,l,r,h)=>{n[k++]=H(e,r);n[k++]=H(l,h)};for(let e=0;e<m;e++){const l=a[e],r=b[e];for(let h=0;h<l.length;h++){const g=l[h],
q=r[h];d&&0===h&&f(d,g,p,q);n[k++]={coordinate:g,distance:q,sampledZ:null,sampled:!1,isHole:!1};d=g;p=q}}return{progress:0,samples:n,hasZ:!1,statistics:null,spatialReference:c}}function H(a,b){return{coordinate:a,distance:b,sampledZ:null,sampled:!0,isHole:!0}}function R(a,b,c){return D.apply(this,arguments)}function D(){D=t._asyncToGenerator(function*(a,b,c){try{return yield a.queryElevation(b,c)}catch(m){throw new u.ProfileGenerationError(u.ProfileGenerationErrorCause.ElevationQueryError);}});return D.apply(this,
arguments)}w.createProfileQueue=function(a){return new L.QueueProcessor({priority:M.TaskPriority.ELEVATION_PROFILE,concurrency:1,scheduler:a,process:function(){var b=t._asyncToGenerator(function*(c){v.throwIfAborted(c.queryOptions);try{yield Q(c)}catch(m){v.throwIfNotAbortError(m)}});return function(c){return b.apply(this,arguments)}}()})};w.generateProfile=E;w.generateProfiles=function(a,b){return A.apply(this,arguments)};w.interpolateElevations=G;Object.defineProperties(w,{__esModule:{value:!0},
[Symbol.toStringTag]:{value:"Module"}})});
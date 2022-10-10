// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/mathUtils ../../../core/maybe ../../../core/promiseUtils ../../../core/unitUtils ../../../chunks/vec2 ../../../chunks/vec3 ../../../geometry/Polyline ../../../geometry/projection ../../../geometry/SpatialReference ../../../geometry/support/geodesicUtils ./ProfileGenerationError".split(" "),function(P,r,Q,R,l,y,F,G,S,z,u,H,t,v){function A(){A=Q._asyncToGenerator(function*(a,b,c,e,f,d,g){var h=a.spatialReference;const k=
h.isGeographic||h.isWebMercator;var m=yield new Promise((n,p)=>P(["../../../geometry/geometryEngineAsync"],n,p));y.throwIfAborted(g);let q=0;k||(q=yield m.planarLength(a,"meters"),y.throwIfAborted(g));m=1/F.getMetersPerUnitForSR(e);if(k||q>=f.geodesicDistanceThreshold){yield u.initializeProjection([{source:h,dest:e},{source:h,dest:H.WGS84}],g);g=T(a);h=t.geodesicLengths([g],"meters")[0];f=Math.max(f.samplingDistance,h/f.densificationMaxSamples);if(I(a,h,f)>d)throw new v.ProfileGenerationError(v.ProfileGenerationErrorCause.TooComplex);
g=B(g,b,c);({densifiedPath:a,distances:b}=U(g,f,m))}else{yield u.initializeProjection([{source:h,dest:e}],g);h=q;f=Math.max(f.samplingDistance,h/f.densificationMaxSamples);if(I(a,h,f)>d)throw new v.ProfileGenerationError(v.ProfileGenerationErrorCause.TooComplex);a=B(a,b,c);({densifiedPath:a,distances:b}=V(a,f,m));y.throwIfAborted(g)}a=u.project(a,e);return{densifiedPath:a,pathLength:h*m,distances:b}});return A.apply(this,arguments)}function B(a,b,c){if(l.isNone(b))return J(a);const e=a.spatialReference,
f=b.mode;b=l.unwrapOr(b.offset,0);let d=null;switch(c.type){case "2d":d=W(a,f,b);break;case "3d":d=X(a,f,b,c)}return l.isNone(d)?J(a):new z({hasZ:!0,hasM:!1,spatialReference:e,paths:K(a.paths,d)})}function W({hasZ:a},b,c){switch(b){case "absolute-height":return a?([e,f,d])=>[e,f,d+c]:([e,f])=>[e,f,c];default:return null}}function X({spatialReference:a,hasZ:b},c,e,{elevationProvider:f}){switch(c){case "on-the-ground":return([d,g])=>[d,g,l.unwrapOr(f.getElevation(d,g,0,a,"ground"),0)];case "absolute-height":return b?
([d,g,h])=>[d,g,h+e]:([d,g])=>[d,g,e];case "relative-to-ground":return b?([d,g,h])=>[d,g,h+l.unwrapOr(f.getElevation(d,g,h,a,"ground"),0)+e]:([d,g])=>[d,g,l.unwrapOr(f.getElevation(d,g,0,a,"ground"),0)+e];case "relative-to-scene":return b?([d,g,h])=>[d,g,h+l.unwrapOr(f.getElevation(d,g,h,a,"scene"),0)+e]:([d,g])=>[d,g,l.unwrapOr(f.getElevation(d,g,0,a,"scene"),0)+e];default:return null}}function J(a){return a.hasZ?new z({hasZ:!1,hasM:!1,spatialReference:a.spatialReference,paths:K(a.paths,([b,c])=>
[b,c])}):a}function K(a,b){const c=a.length,e=Array(c);for(let f=0;f<c;++f){const d=a[f],g=d.length,h=Array(d.length);e[f]=h;for(let k=0;k<g;++k)h[k]=b(d[k])}return e}function L(a){return l.isSome(a)&&"polyline"===a.type}function M(a,b,c,e,f){const {spatialReference:d,hasZ:g}=a,h={from:null,to:null,distance:0,azimuth:0,reverseAzimuth:0,spatialReference:d,metersPerSR:F.getMetersPerUnitForSR(d)},k=Array(a.paths.length),m=Array(a.paths.length);let q=0;for(let p=0;p<a.paths.length;++p){const C=a.paths[p],
D=[],E=[];var n=0;for(let w=1;w<C.length;++w){const N=C[w],x=e(h,C[w-1],N);for(;n<x.distance;n+=b)D.push(f(x,n)),E.push((q+n)*c);n-=x.distance;q+=x.distance;D.push(N);E.push(q*c)}k[p]=D;m[p]=E}return{densifiedPath:new z({spatialReference:d,hasZ:g,paths:k}),distances:m}}function V(a,b,c){const {hasZ:e}=a;return M(a,b,c,Y,e?Z:aa)}function U(a,b,c){const {hasZ:e}=a;return M(a,b,c,ba,e?ca:da)}function ba(a,b,c){a.distance=0;t.inverseGeodeticSolver(a,b,c,a.spatialReference);a.from=b;a.to=c;return a}function Y(a,
b,c){a.from=b;a.to=c;a.distance=G.distance(c,b)*a.metersPerSR;return a}function da({from:a,azimuth:b,spatialReference:c},e){return t.directGeodeticSolver([0,0],a,b,e,c)}function ca({from:a,to:b,azimuth:c,distance:e,spatialReference:f},d){b=[0,0,R.lerp(a[2],b[2],d/e)];t.directGeodeticSolver(b,a,c,d,f);return b}function aa({from:a,to:b,distance:c},e){return G.lerp([0,0],a,b,e/c)}function Z({from:a,to:b,distance:c},e){return S.lerp([0,0,0],a,b,e/c)}function T(a){return t.isSupported(a.spatialReference)?
a:u.project(a,H.WGS84)}function O(a){return a.paths.reduce((b,c)=>b+c.length,0)}function I(a,b,c){return O(a)+Math.floor(b/c)+Math.max(0,a.paths.reduce(e=>1+e,0)-1)}r.countPoints=O;r.densifyPath=function(a,b,c,e,f,d,g){return A.apply(this,arguments)};r.isPolyline=L;r.isValidInputPath=function(a){return L(a)&&0<a.paths.length&&a.paths.every(b=>2<=b.length)};r.toAbsoluteHeightElevation=B;Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../geometry ../../../Ground ../../../core/Logger ../../../core/maybe ../../../core/promiseUtils ../../../core/unitUtils ../../Mesh ../../projection ../MeshComponent ../MeshVertexAttributes ../../Point".split(" "),function(y,z,W,F,G,A,H,I,J,K,L,M,N){function t(){t=z._asyncToGenerator(function*(a,c,b){if(B(a)||a instanceof F){var d;a=yield(yield O(a)).createElevationSampler(c,{demResolution:null!=(d=null==b?void 0:b.demResolution)?d:"finest-contiguous"});
return C(a,c,{material:null==b?void 0:b.material})}return"string"===typeof(null==b?void 0:b.demResolution)?(P.error("create()","demResolution must be a number when used directly with a sampler"),null):C(a,c,{material:null==b?void 0:b.material,demResolution:null==b?void 0:b.demResolution})});return t.apply(this,arguments)}function C(a,c,b){var d,D,e=I.getMetersPerUnitForSR(c.spatialReference);e=(null!=(d=b.demResolution)?d:a.demResolution.min)/e;d=Math.round(c.width/e);e=Math.round(c.height/e);const k=
d+1,u=e+1,m=new Float64Array(k*u*3),v=new Float32Array(k*u*2);let q=0,E=0;const g=new Uint32Array(d*e*6);let h=0,l=0;const Q=!a.spatialReference.equals(c.spatialReference);r.spatialReference=c.spatialReference;const {xmin:R,ymin:S,height:T,width:U}=c;for(let n=0;n<u;n++){const w=S+n/e*T;for(let p=0;p<k;p++){var f=R+p/d*U;m[q++]=f;m[q++]=w;Q?(r.x=f,r.y=w,f=K.project(r,a.spatialReference),m[q++]=A.unwrapOr(a.elevationAt(f.x,f.y),0)):m[q++]=A.unwrapOr(a.elevationAt(f,w),0);f=p/d;const V=n/e;v[E++]=f;
v[E++]=V;n!==e&&p!==d&&(g[l++]=h+1,g[l++]=h+k+1,g[l++]=h+k,g[l++]=h,g[l++]=h+1,g[l++]=h+k);h++}}return new J({vertexAttributes:new M.MeshVertexAttributes({position:m,uv:v}),components:[new L({faces:g,shading:"smooth",material:null!=(D=null==b?void 0:b.material)?D:null})],spatialReference:c.spatialReference})}function O(a){return x.apply(this,arguments)}function x(){x=z._asyncToGenerator(function*(a){if(B(a))return a.load();yield a.load();yield H.eachAlways(a.layers.map(c=>c.load()));return a});return x.apply(this,
arguments)}function B(a){return"type"in a&&("elevation"===a.type||"base-elevation"===a.type)}const P=G.getLogger("esri.geometry.support.meshUtils.elevation"),r=new N;y.create=function(a,c,b){return t.apply(this,arguments)};Object.defineProperties(y,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
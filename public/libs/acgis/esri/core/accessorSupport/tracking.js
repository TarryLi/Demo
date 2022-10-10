// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../has","../Logger","./utils","./tracking/Flags"],function(e,B,y,q,h){function r(a){if(void 0!==k)k.onObservableAccessed(a)}function t(a,b,d){if(l)return m(a,b,d);k=a;f.push(a);a=b.call(d);u();return a}function m(a,b,d){const c=l;l=!0;k=a;f.push(a);a=null;try{a=b.call(d)}catch(g){n&&z.error(g)}u();l=c;return a}function u(){const a=f.pop();k=0<f.length?f[f.length-1]:void 0;if(void 0!==a)a.onTrackingEnd()}function v(a,b){if(!(b.flags&h.Flags.DepTrackingInitialized)){var d=n;n=!1;
b.flags&h.Flags.AutoTracked?m(b,b.metadata.get,a):w(a,b);n=d}}function w(a,b){b.flags&h.Flags.ExplicitlyTracking||(b.flags|=h.Flags.ExplicitlyTracking,m(b,()=>{var d=b.metadata.dependsOn||A;for(const c of d)if("string"!==typeof c||c.includes(".")){d=q.pathToArray(c);for(let g=0,p=a;g<d.length&&null!=p&&"object"===typeof p;++g)p=x(p,d[g],g!==d.length-1)}else x(a,c,!1)}),b.flags&=~h.Flags.ExplicitlyTracking)}function x(a,b,d){b="?"===b[b.length-1]?b.slice(0,-1):b;if(null!=a.getItemAt||Array.isArray(a)){var c=
parseInt(b,10);if(!isNaN(c))return Array.isArray(a)?a[c]:a.getItemAt(c)}c=q.getProperties(a);if(c=null==c?void 0:c.properties.get(b))r(c),v(a,c);return d?a[b]:void 0}let f=[],k=void 0;const z=y.getLogger("esri.core.Accessor");let l=!1,n=!1;const A=[];e.initializeDependencyTracking=v;e.resetGlobalTarget=function(){f=[]};e.runTracked=t;e.runTrackedNoThrow=m;e.runUntracked=function(a,b){return t(void 0,a,b)};e.trackAccess=r;e.trackExplicitDependencies=w;Object.defineProperties(e,{__esModule:{value:!0},
[Symbol.toStringTag]:{value:"Module"}})});
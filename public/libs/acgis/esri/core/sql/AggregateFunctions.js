// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(d){function e(a){let c=0;for(let b=0;b<a.length;b++)c+=a[b];return c/a.length}function f(a){const c=e(a),b=a.length;let g=0;for(const k of a)g+=(k-c)**2;return 1<b?g/(b-1):0}const h={min:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.min.apply(Math,a[0])},max:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.max.apply(Math,a[0])},avg:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:e(a[0])},sum:{minParams:1,maxParams:1,evaluate:a=>{if(null==a[0])a=
null;else{{a=a[0];let c=0;for(let b=0;b<a.length;b++)c+=a[b];a=c}}return a}},stddev:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.sqrt(f(a[0]))},count:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:a[0].length},var:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:f(a[0])}};d.aggregateFunction=function(a,c){const b=h[a.toLowerCase()];if(null==b)throw Error("Function Not Recognised");if(c.length<b.minParams||c.length>b.maxParams)throw Error(`Invalid Parameter count for call to ${a.toUpperCase()}`);
return b.evaluate(c)};d.isAggregate=function(a,c){a=h[a.toLowerCase()];return null!=a&&c>=a.minParams&&c<=a.maxParams};Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../geometry ../../request ../../geometry/support/jsonUtils ../utils".split(" "),function(e,l,r,m,f,n){function d(){d=l._asyncToGenerator(function*(b,a,g,h){b=n.parseUrl(b);const k=a[0].spatialReference;a={...h,query:{...b.query,f:"json",sr:JSON.stringify(k),target:JSON.stringify({geometryType:f.getJsonType(a[0]),geometries:a}),cutter:JSON.stringify(g)}};a=yield m(b.path+"/cut",a);const {cutIndexes:p,geometries:q=[]}=a.data;return{cutIndexes:p,
geometries:q.map(c=>{c=f.fromJSON(c);c.spatialReference=k;return c})}});return d.apply(this,arguments)}e.cut=function(b,a,g,h){return d.apply(this,arguments)};Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../../geometry/support/jsonUtils","../utils"],function(e,l,m,f,g){function d(){d=l._asyncToGenerator(function*(b,a,h,c){const k=a.spatialReference;b=g.parseUrl(b);a={...b.query,f:"json",sr:JSON.stringify(k.toJSON()),target:JSON.stringify({geometryType:f.getJsonType(a),geometry:a.toJSON()}),reshaper:JSON.stringify(h.toJSON())};c=g.asValidOptions(a,c);return m(b.path+"/reshape",c).then(({data:n})=>f.fromJSON(n.geometry).set({spatialReference:k}))});
return d.apply(this,arguments)}e.reshape=function(b,a,h,c){return d.apply(this,arguments)};Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
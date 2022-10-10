// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../kernel ../../chunks/languageUtils ../featureset/actions/SpatialFilter ../featureset/sources/Empty ../../geometry/Geometry ../../geometry/geometryEngineAsync".split(" "),function(m,t,n,f,p,l,g,h){function k(c,e,d,q){return q(c,e,function(){var r=t._asyncToGenerator(function*(b,u,a){if(2>a.length)throw Error("Missing Parameters");a=f.autoCastFeatureToGeometry(a);if(null===a[0]&&null===a[1])return!1;if(f.isFeatureSet(a[0])){if(a[1]instanceof g)return new p({parentfeatureset:a[0],
relation:d,relationGeom:a[1]});if(null===a[1])return new l({parentfeatureset:a[0]});throw Error("Spatial Relation cannot accept this parameter type");}if(a[0]instanceof g){if(a[1]instanceof g){switch(d){case "esriSpatialRelEnvelopeIntersects":return h.intersects(n.shapeExtent(a[0]),n.shapeExtent(a[1]));case "esriSpatialRelIntersects":return h.intersects(a[0],a[1]);case "esriSpatialRelContains":return h.contains(a[0],a[1]);case "esriSpatialRelOverlaps":return h.overlaps(a[0],a[1]);case "esriSpatialRelWithin":return h.within(a[0],
a[1]);case "esriSpatialRelTouches":return h.touches(a[0],a[1]);case "esriSpatialRelCrosses":return h.crosses(a[0],a[1])}throw Error("Unrecognised Relationship");}if(f.isFeatureSet(a[1]))return new p({parentfeatureset:a[1],relation:d,relationGeom:a[0]});if(null===a[1])return!1;throw Error("Spatial Relation cannot accept this parameter type");}if(null===a[0]){if(f.isFeatureSet(a[1]))return new l({parentfeatureset:a[1]});if(a[1]instanceof g||null===a[1])return!1}else throw Error("Spatial Relation cannot accept this parameter type");
});return function(b,u,a){return r.apply(this,arguments)}}())}m.registerFunctions=function(c){"async"===c.mode&&(c.functions.intersects=function(e,d){return k(e,d,"esriSpatialRelIntersects",c.standardFunctionAsync)},c.functions.envelopeintersects=function(e,d){return k(e,d,"esriSpatialRelEnvelopeIntersects",c.standardFunctionAsync)},c.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),c.functions.contains=function(e,d){return k(e,d,"esriSpatialRelContains",c.standardFunctionAsync)},c.functions.overlaps=
function(e,d){return k(e,d,"esriSpatialRelOverlaps",c.standardFunctionAsync)},c.functions.within=function(e,d){return k(e,d,"esriSpatialRelWithin",c.standardFunctionAsync)},c.functions.touches=function(e,d){return k(e,d,"esriSpatialRelTouches",c.standardFunctionAsync)},c.functions.crosses=function(e,d){return k(e,d,"esriSpatialRelCrosses",c.standardFunctionAsync)},c.functions.relate=function(e,d){return c.standardFunctionAsync(e,d,function(q,r,b){b=f.autoCastFeatureToGeometry(b);f.pcCheck(b,3,3);
if(b[0]instanceof g&&b[1]instanceof g)return h.relate(b[0],b[1],f.toString(b[2]));if(b[0]instanceof g&&null===b[1]||b[1]instanceof g&&null===b[0])return!1;if(f.isFeatureSet(b[0])&&null===b[1])return new l({parentfeatureset:b[0]});if(f.isFeatureSet(b[1])&&null===b[0])return new l({parentfeatureset:b[1]});if(f.isFeatureSet(b[0])&&b[1]instanceof g)return b[0].relate(b[1],f.toString(b[2]));if(f.isFeatureSet(b[1])&&b[0]instanceof g)return b[1].relate(b[0],f.toString(b[2]));if(null===b[0]&&null===b[1])return!1;
throw Error("Illegal Argument");})})};Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
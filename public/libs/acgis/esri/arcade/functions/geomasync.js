// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../kernel ../kernel ../../chunks/languageUtils ./centroid ../../geometry/Extent ../../geometry/Geometry ../../geometry/geometryEngineAsync ../../geometry/Multipoint ../../geometry/Point ../../geometry/Polygon ../../geometry/Polyline ../../geometry/support/jsonUtils ../../core/unitUtils".split(" "),function(y,u,D,l,b,q,v,m,k,z,w,r,t,A,E){function B(c){return 0===D.version.indexOf("4.")?r.fromExtent(c):new r({spatialReference:c.spatialReference,
rings:[[[c.xmin,c.ymin],[c.xmin,c.ymax],[c.xmax,c.ymax],[c.xmax,c.ymin],[c.xmin,c.ymin]]]})}function p(c){b.pcCheck(c,2,2);if(!(c[0]instanceof m&&c[1]instanceof m||c[0]instanceof m&&null===c[1]||c[1]instanceof m&&null===c[0]||null===c[0]&&null===c[1]))throw Error("Illegal Argument");}function C(c,g){return x.apply(this,arguments)}function x(){x=u._asyncToGenerator(function*(c,g){if("polygon"!==c.type&&"polyline"!==c.type&&"extent"!==c.type)return 0;var h=1;if(c.spatialReference.vcsWkid||c.spatialReference.latestVcsWkid){h=
q.getMetersPerVerticalUnitForSR(c.spatialReference);var e=E.getMetersPerUnitForSR(c.spatialReference);h/=e}e=0;if("polyline"===c.type)for(var d of c.paths)for(var a=1;a<d.length;a++)e+=q.segmentLength3d(d[a],d[a-1],h);else if("polygon"===c.type)for(a of c.rings){for(d=1;d<a.length;d++)e+=q.segmentLength3d(a[d],a[d-1],h);if(a[0][0]!==a[a.length-1][0]||a[0][1]!==a[a.length-1][1]||void 0!==a[0][2]&&a[0][2]!==a[a.length-1][2])e+=q.segmentLength3d(a[0],a[a.length-1],h)}else"extent"===c.type&&(e+=2*q.segmentLength3d([c.xmin,
c.ymin,0],[c.xmax,c.ymin,0],h),e+=2*q.segmentLength3d([c.xmin,c.ymin,0],[c.xmin,c.ymax,0],h),e=2*e+4*Math.abs(b.defaultUndefined(c.zmax,0)*h-b.defaultUndefined(c.zmin,0)*h));c=new t({hasZ:!1,hasM:!1,spatialReference:c.spatialReference,paths:[[0,0],[0,e]]});return k.planarLength(c,g)});return x.apply(this,arguments)}y.registerFunctions=function(c){"async"===c.mode&&(c.functions.disjoint=function(g,h){return c.standardFunctionAsync(g,h,function(e,d,a){a=b.autoCastFeatureToGeometry(a);p(a);return null===
a[0]||null===a[1]?!0:k.disjoint(a[0],a[1])})},c.functions.intersects=function(g,h){return c.standardFunctionAsync(g,h,function(e,d,a){a=b.autoCastFeatureToGeometry(a);p(a);return null===a[0]||null===a[1]?!1:k.intersects(a[0],a[1])})},c.functions.touches=function(g,h){return c.standardFunctionAsync(g,h,function(e,d,a){a=b.autoCastFeatureToGeometry(a);p(a);return null===a[0]||null===a[1]?!1:k.touches(a[0],a[1])})},c.functions.crosses=function(g,h){return c.standardFunctionAsync(g,h,function(e,d,a){a=
b.autoCastFeatureToGeometry(a);p(a);return null===a[0]||null===a[1]?!1:k.crosses(a[0],a[1])})},c.functions.within=function(g,h){return c.standardFunctionAsync(g,h,function(e,d,a){a=b.autoCastFeatureToGeometry(a);p(a);return null===a[0]||null===a[1]?!1:k.within(a[0],a[1])})},c.functions.contains=function(g,h){return c.standardFunctionAsync(g,h,function(e,d,a){a=b.autoCastFeatureToGeometry(a);p(a);return null===a[0]||null===a[1]?!1:k.contains(a[0],a[1])})},c.functions.overlaps=function(g,h){return c.standardFunctionAsync(g,
h,function(e,d,a){a=b.autoCastFeatureToGeometry(a);p(a);return null===a[0]||null===a[1]?!1:k.overlaps(a[0],a[1])})},c.functions.equals=function(g,h){return c.standardFunctionAsync(g,h,function(e,d,a){b.pcCheck(a,2,2);return a[0]===a[1]?!0:a[0]instanceof m&&a[1]instanceof m?k.equals(a[0],a[1]):b.isDate(a[0])&&b.isDate(a[1])?a[0].getTime()===a[1].getTime():!1})},c.functions.relate=function(g,h){return c.standardFunctionAsync(g,h,function(e,d,a){a=b.autoCastFeatureToGeometry(a);b.pcCheck(a,3,3);if(a[0]instanceof
m&&a[1]instanceof m)return k.relate(a[0],a[1],b.toString(a[2]));if(a[0]instanceof m&&null===a[1]||a[1]instanceof m&&null===a[0]||null===a[0]&&null===a[1])return!1;throw Error("Illegal Argument");})},c.functions.intersection=function(g,h){return c.standardFunctionAsync(g,h,function(e,d,a){a=b.autoCastFeatureToGeometry(a);p(a);return null===a[0]||null===a[1]?null:k.intersect(a[0],a[1])})},c.functions.union=function(g,h){return c.standardFunctionAsync(g,h,function(e,d,a){a=b.autoCastFeatureToGeometry(a);
e=[];if(0===a.length)throw Error("Function called with wrong number of Parameters");if(1===a.length)if(b.isArray(a[0]))for(a=b.autoCastFeatureToGeometry(a[0]),d=0;d<a.length;d++){if(null!==a[d]){if(!(a[d]instanceof m))throw Error("Illegal Argument");e.push(a[d])}}else if(b.isImmutableArray(a[0]))for(a=b.autoCastFeatureToGeometry(a[0].toArray()),d=0;d<a.length;d++){if(null!==a[d]){if(!(a[d]instanceof m))throw Error("Illegal Argument");e.push(a[d])}}else{if(a[0]instanceof m)return b.fixSpatialReference(l.cloneGeometry(a[0]),
g.spatialReference);if(null===a[0])return null;throw Error("Illegal Argument");}else for(d=0;d<a.length;d++)if(null!==a[d]){if(!(a[d]instanceof m))throw Error("Illegal Argument");e.push(a[d])}return 0===e.length?null:k.union(e)})},c.functions.difference=function(g,h){return c.standardFunctionAsync(g,h,function(e,d,a){a=b.autoCastFeatureToGeometry(a);p(a);return null!==a[0]&&null===a[1]?l.cloneGeometry(a[0]):null===a[0]?null:k.difference(a[0],a[1])})},c.functions.symmetricdifference=function(g,h){return c.standardFunctionAsync(g,
h,function(e,d,a){a=b.autoCastFeatureToGeometry(a);p(a);return null===a[0]&&null===a[1]?null:null===a[0]?l.cloneGeometry(a[1]):null===a[1]?l.cloneGeometry(a[0]):k.symmetricDifference(a[0],a[1])})},c.functions.clip=function(g,h){return c.standardFunctionAsync(g,h,function(e,d,a){a=b.autoCastFeatureToGeometry(a);b.pcCheck(a,2,2);if(!(a[1]instanceof v)&&null!==a[1])throw Error("Illegal Argument");if(null===a[0])return null;if(!(a[0]instanceof m))throw Error("Illegal Argument");return null===a[1]?null:
k.clip(a[0],a[1])})},c.functions.cut=function(g,h){return c.standardFunctionAsync(g,h,function(e,d,a){a=b.autoCastFeatureToGeometry(a);b.pcCheck(a,2,2);if(!(a[1]instanceof t)&&null!==a[1])throw Error("Illegal Argument");if(null===a[0])return[];if(!(a[0]instanceof m))throw Error("Illegal Argument");return null===a[1]?[l.cloneGeometry(a[0])]:k.cut(a[0],a[1])})},c.functions.area=function(g,h){return c.standardFunctionAsync(g,h,function(){var e=u._asyncToGenerator(function*(d,a,f){b.pcCheck(f,1,2);f=
b.autoCastFeatureToGeometry(f);if(null===f[0])return 0;if(b.isFeatureSet(f[0])){f=yield f[0].sumArea(l.convertSquareUnitsToCode(b.defaultUndefined(f[1],-1)),!1,g.abortSignal);if(g.abortSignal.aborted)throw Error("Operation has been cancelled.");return f}if(b.isArray(f[0])||b.isImmutableArray(f[0]))return d=b.autoCastArrayOfPointsToPolygon(f[0],g.spatialReference),null===d?0:k.planarArea(d,l.convertSquareUnitsToCode(b.defaultUndefined(f[1],-1)));if(!(f[0]instanceof m))throw Error("Illegal Argument");
return k.planarArea(f[0],l.convertSquareUnitsToCode(b.defaultUndefined(f[1],-1)))});return function(d,a,f){return e.apply(this,arguments)}}())},c.functions.areageodetic=function(g,h){return c.standardFunctionAsync(g,h,function(){var e=u._asyncToGenerator(function*(d,a,f){b.pcCheck(f,1,2);f=b.autoCastFeatureToGeometry(f);if(null===f[0])return 0;if(b.isFeatureSet(f[0])){f=yield f[0].sumArea(l.convertSquareUnitsToCode(b.defaultUndefined(f[1],-1)),!0,g.abortSignal);if(g.abortSignal.aborted)throw Error("Operation has been cancelled.");
return f}if(b.isArray(f[0])||b.isImmutableArray(f[0]))return d=b.autoCastArrayOfPointsToPolygon(f[0],g.spatialReference),null===d?0:k.geodesicArea(d,l.convertSquareUnitsToCode(b.defaultUndefined(f[1],-1)));if(!(f[0]instanceof m))throw Error("Illegal Argument");return k.geodesicArea(f[0],l.convertSquareUnitsToCode(b.defaultUndefined(f[1],-1)))});return function(d,a,f){return e.apply(this,arguments)}}())},c.functions.length=function(g,h){return c.standardFunctionAsync(g,h,function(){var e=u._asyncToGenerator(function*(d,
a,f){b.pcCheck(f,1,2);f=b.autoCastFeatureToGeometry(f);if(null===f[0])return 0;if(b.isFeatureSet(f[0])){f=yield f[0].sumLength(l.convertLinearUnitsToCode(b.defaultUndefined(f[1],-1)),!1,g.abortSignal);if(g.abortSignal.aborted)throw Error("Operation has been cancelled.");return f}if(b.isArray(f[0])||b.isImmutableArray(f[0]))return d=b.autoCastArrayOfPointsToPolyline(f[0],g.spatialReference),null===d?0:k.planarLength(d,l.convertLinearUnitsToCode(b.defaultUndefined(f[1],-1)));if(!(f[0]instanceof m))throw Error("Illegal Argument");
return k.planarLength(f[0],l.convertLinearUnitsToCode(b.defaultUndefined(f[1],-1)))});return function(d,a,f){return e.apply(this,arguments)}}())},c.functions.length3d=function(g,h){return c.standardFunctionAsync(g,h,function(e,d,a){b.pcCheck(a,1,2);a=b.autoCastFeatureToGeometry(a);if(null===a[0])return 0;if(b.isArray(a[0])||b.isImmutableArray(a[0]))return e=b.autoCastArrayOfPointsToPolyline(a[0],g.spatialReference),null===e?0:!0===e.hasZ?C(e,l.convertLinearUnitsToCode(b.defaultUndefined(a[1],-1))):
k.planarLength(e,l.convertLinearUnitsToCode(b.defaultUndefined(a[1],-1)));if(!(a[0]instanceof m))throw Error("Illegal Argument");return!0===a[0].hasZ?C(a[0],l.convertLinearUnitsToCode(b.defaultUndefined(a[1],-1))):k.planarLength(a[0],l.convertLinearUnitsToCode(b.defaultUndefined(a[1],-1)))})},c.functions.lengthgeodetic=function(g,h){return c.standardFunctionAsync(g,h,function(){var e=u._asyncToGenerator(function*(d,a,f){b.pcCheck(f,1,2);f=b.autoCastFeatureToGeometry(f);if(null===f[0])return 0;if(b.isFeatureSet(f[0])){f=
yield f[0].sumLength(l.convertLinearUnitsToCode(b.defaultUndefined(f[1],-1)),!0,g.abortSignal);if(g.abortSignal.aborted)throw Error("Operation has been cancelled.");return f}if(b.isArray(f[0])||b.isImmutableArray(f[0]))return d=b.autoCastArrayOfPointsToPolyline(f[0],g.spatialReference),null===d?0:k.geodesicLength(d,l.convertLinearUnitsToCode(b.defaultUndefined(f[1],-1)));if(!(f[0]instanceof m))throw Error("Illegal Argument");return k.geodesicLength(f[0],l.convertLinearUnitsToCode(b.defaultUndefined(f[1],
-1)))});return function(d,a,f){return e.apply(this,arguments)}}())},c.functions.distance=function(g,h){return c.standardFunctionAsync(g,h,function(e,d,a){a=b.autoCastFeatureToGeometry(a);b.pcCheck(a,2,3);e=a[0];if(b.isArray(a[0])||b.isImmutableArray(a[0]))e=b.autoCastArrayOfPointsToMultiPoint(a[0],g.spatialReference);d=a[1];if(b.isArray(a[1])||b.isImmutableArray(a[1]))d=b.autoCastArrayOfPointsToMultiPoint(a[1],g.spatialReference);if(!(e instanceof m))throw Error("Illegal Argument");if(!(d instanceof
m))throw Error("Illegal Argument");return k.distance(e,d,l.convertLinearUnitsToCode(b.defaultUndefined(a[2],-1)))})},c.functions.distancegeodetic=function(g,h){return c.standardFunctionAsync(g,h,function(e,d,a){a=b.autoCastFeatureToGeometry(a);b.pcCheck(a,2,3);e=a[0];d=a[1];if(!(e instanceof w))throw Error("Illegal Argument");if(!(d instanceof w))throw Error("Illegal Argument");const f=new t({paths:[],spatialReference:e.spatialReference});f.addPath([e,d]);return k.geodesicLength(f,l.convertLinearUnitsToCode(b.defaultUndefined(a[2],
-1)))})},c.functions.densify=function(g,h){return c.standardFunctionAsync(g,h,function(e,d,a){a=b.autoCastFeatureToGeometry(a);b.pcCheck(a,2,3);if(null===a[0])return null;if(!(a[0]instanceof m))throw Error("Illegal Argument");e=b.toNumber(a[1]);if(isNaN(e))throw Error("Illegal Argument");if(0>=e)throw Error("Illegal Argument");return a[0]instanceof r||a[0]instanceof t?k.densify(a[0],e,l.convertLinearUnitsToCode(b.defaultUndefined(a[2],-1))):a[0]instanceof v?k.densify(B(a[0]),e,l.convertLinearUnitsToCode(b.defaultUndefined(a[2],
-1))):a[0]})},c.functions.densifygeodetic=function(g,h){return c.standardFunctionAsync(g,h,function(e,d,a){a=b.autoCastFeatureToGeometry(a);b.pcCheck(a,2,3);if(null===a[0])return null;if(!(a[0]instanceof m))throw Error("Illegal Argument");e=b.toNumber(a[1]);if(isNaN(e))throw Error("Illegal Argument");if(0>=e)throw Error("Illegal Argument");return a[0]instanceof r||a[0]instanceof t?k.geodesicDensify(a[0],e,l.convertLinearUnitsToCode(b.defaultUndefined(a[2],-1))):a[0]instanceof v?k.geodesicDensify(B(a[0]),
e,l.convertLinearUnitsToCode(b.defaultUndefined(a[2],-1))):a[0]})},c.functions.generalize=function(g,h){return c.standardFunctionAsync(g,h,function(e,d,a){a=b.autoCastFeatureToGeometry(a);b.pcCheck(a,2,4);if(null===a[0])return null;if(!(a[0]instanceof m))throw Error("Illegal Argument");e=b.toNumber(a[1]);if(isNaN(e))throw Error("Illegal Argument");return k.generalize(a[0],e,b.toBoolean(b.defaultUndefined(a[2],!0)),l.convertLinearUnitsToCode(b.defaultUndefined(a[3],-1)))})},c.functions.buffer=function(g,
h){return c.standardFunctionAsync(g,h,function(e,d,a){a=b.autoCastFeatureToGeometry(a);b.pcCheck(a,2,3);if(null===a[0])return null;if(!(a[0]instanceof m))throw Error("Illegal Argument");e=b.toNumber(a[1]);if(isNaN(e))throw Error("Illegal Argument");return 0===e?l.cloneGeometry(a[0]):k.buffer(a[0],e,l.convertLinearUnitsToCode(b.defaultUndefined(a[2],-1)))})},c.functions.buffergeodetic=function(g,h){return c.standardFunctionAsync(g,h,function(e,d,a){a=b.autoCastFeatureToGeometry(a);b.pcCheck(a,2,3);
if(null===a[0])return null;if(!(a[0]instanceof m))throw Error("Illegal Argument");e=b.toNumber(a[1]);if(isNaN(e))throw Error("Illegal Argument");return 0===e?l.cloneGeometry(a[0]):k.geodesicBuffer(a[0],e,l.convertLinearUnitsToCode(b.defaultUndefined(a[2],-1)))})},c.functions.offset=function(g,h){return c.standardFunctionAsync(g,h,function(e,d,a){a=b.autoCastFeatureToGeometry(a);b.pcCheck(a,2,6);if(null===a[0])return null;if(!(a[0]instanceof r||a[0]instanceof t))throw Error("Illegal Argument");e=b.toNumber(a[1]);
if(isNaN(e))throw Error("Illegal Argument");d=b.toNumber(b.defaultUndefined(a[4],10));if(isNaN(d))throw Error("Illegal Argument");const f=b.toNumber(b.defaultUndefined(a[5],0));if(isNaN(f))throw Error("Illegal Argument");return k.offset(a[0],e,l.convertLinearUnitsToCode(b.defaultUndefined(a[2],-1)),b.toString(b.defaultUndefined(a[3],"round")).toLowerCase(),d,f)})},c.functions.rotate=function(g,h){return c.standardFunctionAsync(g,h,function(e,d,a){a=b.autoCastFeatureToGeometry(a);b.pcCheck(a,2,3);
e=a[0];if(null===e)return null;if(!(e instanceof m))throw Error("Illegal Argument");e instanceof v&&(e=r.fromExtent(e));d=b.toNumber(a[1]);if(isNaN(d))throw Error("Illegal Argument");a=b.defaultUndefined(a[2],null);if(null===a)return k.rotate(e,d);if(a instanceof w)return k.rotate(e,d,a);throw Error("Illegal Argument");})},c.functions.centroid=function(g,h){return c.standardFunctionAsync(g,h,function(e,d,a){a=b.autoCastFeatureToGeometry(a);b.pcCheck(a,1,1);if(null===a[0])return null;e=a[0];if(b.isArray(a[0])||
b.isImmutableArray(a[0]))e=b.autoCastArrayOfPointsToMultiPoint(a[0],g.spatialReference);if(null===e)return null;if(!(e instanceof m))throw Error("Illegal Argument");return e instanceof w?b.fixSpatialReference(l.cloneGeometry(a[0]),g.spatialReference):e instanceof r?e.centroid:e instanceof t?q.centroidPolyline(e):e instanceof z?q.centroidMultiPoint(e):e instanceof v?e.center:null})},c.functions.multiparttosinglepart=function(g,h){return c.standardFunctionAsync(g,h,function(){var e=u._asyncToGenerator(function*(d,
a,f){f=b.autoCastFeatureToGeometry(f);b.pcCheck(f,1,1);a=[];if(null===f[0])return null;if(!(f[0]instanceof m))throw Error("Illegal Argument");if(f[0]instanceof w||f[0]instanceof v)return[b.fixSpatialReference(l.cloneGeometry(f[0]),g.spatialReference)];d=yield k.simplify(f[0]);if(d instanceof r){f=[];a=[];for(var n=0;n<d.rings.length;n++)if(d.isClockwise(d.rings[n])){const F=A.fromJSON({rings:[d.rings[n]],hasZ:!0===d.hasZ,hazM:!0===d.hasM,spatialReference:d.spatialReference.toJSON()});f.push(F)}else a.push({ring:d.rings[n],
pt:d.getPoint(n,0)});for(d=0;d<a.length;d++)for(n=0;n<f.length;n++)if(f[n].contains(a[d].pt)){f[n].addRing(a[d].ring);break}return f}if(d instanceof t){f=[];for(a=0;a<d.paths.length;a++)n=A.fromJSON({paths:[d.paths[a]],hasZ:!0===d.hasZ,hazM:!0===d.hasM,spatialReference:d.spatialReference.toJSON()}),f.push(n);return f}if(f[0]instanceof z){d=b.fixSpatialReference(l.cloneGeometry(f[0]),g.spatialReference);for(f=0;f<d.points.length;f++)a.push(d.getPoint(f));return a}return null});return function(d,a,
f){return e.apply(this,arguments)}}())},c.functions.issimple=function(g,h){return c.standardFunctionAsync(g,h,function(e,d,a){a=b.autoCastFeatureToGeometry(a);b.pcCheck(a,1,1);if(null===a[0])return!0;if(!(a[0]instanceof m))throw Error("Illegal Argument");return k.isSimple(a[0])})},c.functions.simplify=function(g,h){return c.standardFunctionAsync(g,h,function(e,d,a){a=b.autoCastFeatureToGeometry(a);b.pcCheck(a,1,1);if(null===a[0])return null;if(!(a[0]instanceof m))throw Error("Illegal Argument");return k.simplify(a[0])})})};
Object.defineProperties(y,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
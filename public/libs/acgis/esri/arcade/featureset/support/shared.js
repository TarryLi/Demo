// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../geometry/Extent","../../../layers/support/Field"],function(c,r,t){function k(a){return a instanceof Date}c.FeatureServiceDatabaseType=void 0;(function(a){a[a.Standardised=0]="Standardised";a[a.StandardisedNoInterval=1]="StandardisedNoInterval";a[a.SqlServer=2]="SqlServer";a[a.Oracle=3]="Oracle";a[a.Postgres=4]="Postgres";a[a.PGDB=5]="PGDB";a[a.FILEGDB=6]="FILEGDB";a[a.NotEvaluated=7]="NotEvaluated"})(c.FeatureServiceDatabaseType||(c.FeatureServiceDatabaseType={}));c.IdState=
void 0;(function(a){a[a.InFeatureSet=0]="InFeatureSet";a[a.NotInFeatureSet=1]="NotInFeatureSet";a[a.Unknown=2]="Unknown"})(c.IdState||(c.IdState={}));c.callback=function(a,b){return function(){try{a.apply(null,arguments)}catch(g){b.reject(g)}}};c.cloneAttributes=function(a){const b={};for(const g in a)b[g]=a[g];return b};c.cloneField=function(a){return t.fromJSON(a.toJSON())};c.convertLinearUnitsToCode=function(a){if(void 0===a)return null;if("number"===typeof a||"number"===typeof a)return a;switch(a.toLowerCase()){case "meters":case "meter":return 9001;
case "miles":case "mile":return 9035;case "kilometers":case "kilometer":case "km":return 9036}return null};c.convertSquareUnitsToCode=function(a){if(void 0===a)return null;if("number"===typeof a)return a;switch(a.toLowerCase()){case "meters":case "meter":return 109404;case "miles":case "mile":return 109413;case "kilometers":case "kilometer":case "km":return 109414}return null};c.defaultMaxRecords=1E3;c.equalityTest=function(a,b){return a===b?!0:k(a)&&k(b)?a.getTime()===b.getTime():!1};c.errback=function(a){return function(b){a.reject(b)}};
c.esriFieldToJson=function(a){return a.toJSON?a.toJSON():a};c.extractServiceUrl=function(a){if(void 0===a)return"";a=a.replace(/\/featureserver\/[0-9]*/i,"/FeatureServer");a=a.replace(/\/mapserver\/[0-9]*/i,"/MapServer");return a=a.split("?")[0]};c.isArray=function(a){return a instanceof Array};c.isBoolean=function(a){return"boolean"===typeof a};c.isDate=k;c.isNumber=function(a){return"number"===typeof a};c.isString=function(a){return"string"===typeof a||a instanceof String};c.layerFieldEsriConstants=
{"small-integer":"esriFieldTypeSmallInteger",integer:"esriFieldTypeInteger",long:"esriFieldTypeLong",single:"esriFieldTypeSingle",double:"esriFieldTypeDouble",string:"esriFieldTypeString",date:"esriFieldTypeDate",oid:"esriFieldTypeOID",geometry:"esriFieldTypeGeometry",blob:"esriFieldTypeBlob",raster:"esriFieldTypeRaster",guid:"esriFieldTypeGUID","global-id":"esriFieldTypeGlobalID",xml:"eesriFieldTypeXML",esriFieldTypeSmallInteger:"esriFieldTypeSmallInteger",esriFieldTypeInteger:"esriFieldTypeInteger",
esriFieldTypeLong:"esriFieldTypeLong",esriFieldTypeSingle:"esriFieldTypeSingle",esriFieldTypeDouble:"esriFieldTypeDouble",esriFieldTypeString:"esriFieldTypeString",esriFieldTypeDate:"esriFieldTypeDate",esriFieldTypeOID:"esriFieldTypeOID",esriFieldTypeGeometry:"esriFieldTypeGeometry",esriFieldTypeBlob:"esriFieldTypeBlob",esriFieldTypeRaster:"esriFieldTypeRaster",esriFieldTypeGUID:"esriFieldTypeGUID",esriFieldTypeGlobalID:"esriFieldTypeGlobalID",esriFieldTypeXML:"eesriFieldTypeXML"};c.layerGeometryEsriConstants=
{point:"point",polygon:"polygon",polyline:"polyline",multipoint:"multipoint",extent:"extent",esriGeometryPoint:"point",esriGeometryPolygon:"polygon",esriGeometryPolyline:"polyline",esriGeometryMultipoint:"multipoint",esriGeometryEnvelope:"extent",envelope:"extent"};c.layerGeometryEsriRestConstants={point:"esriGeometryPoint",polygon:"esriGeometryPolygon",polyline:"esriGeometryPolyline",multipoint:"esriGeometryMultipoint",extent:"esriGeometryEnvelope",esriGeometryPoint:"esriGeometryPoint",esriGeometryPolygon:"esriGeometryPolygon",
esriGeometryPolyline:"esriGeometryPolyline",esriGeometryMultipoint:"esriGeometryMultipoint",esriGeometryEnvelope:"esriGeometryEnvelope",envelope:"esriGeometryEnvelope"};c.sameGeomType=function(a,b){return a===b||"point"===a&&"esriGeometryPoint"===b||"polyline"===a&&"esriGeometryPolyline"===b||"polygon"===a&&"esriGeometryPolygon"===b||"extent"===a&&"esriGeometryEnvelope"===b||"multipoint"===a&&"esriGeometryMultipoint"===b||"point"===b&&"esriGeometryPoint"===a||"polyline"===b&&"esriGeometryPolyline"===
a||"polygon"===b&&"esriGeometryPolygon"===a||"extent"===b&&"esriGeometryEnvelope"===a||"multipoint"===b&&"esriGeometryMultipoint"===a?!0:!1};c.shapeExtent=function(a){if(null===a)return null;switch(a.type){case "polygon":case "multipoint":case "polyline":return a.extent;case "point":return new r({xmin:a.x,ymin:a.y,xmax:a.x,ymax:a.y,spatialReference:a.spatialReference});case "extent":return a}return null};c.stableStringify=function(a,b){b||(b={});"function"===typeof b&&(b={cmp:b});const g="boolean"===
typeof b.cycles?b.cycles:!1,m=b.cmp&&function(u){return function(d){return function(h,e){return u({key:h,value:d[h]},{key:e,value:d[e]})}}}(b.cmp),l=[];return function h(d){d&&d.toJSON&&"function"===typeof d.toJSON&&(d=d.toJSON());if(void 0!==d){if("number"===typeof d)return isFinite(d)?""+d:"null";if("object"!==typeof d)return JSON.stringify(d);var e;if(Array.isArray(d)){var f="[";for(e=0;e<d.length;e++)e&&(f+=","),f+=h(d[e])||"null";return f+"]"}if(null===d)return"null";if(l.includes(d)){if(g)return JSON.stringify("__cycle__");
throw new TypeError("Converting circular structure to JSON");}var v=l.push(d)-1,n=Object.keys(d).sort(m&&m(d));f="";for(e=0;e<n.length;e++){const p=n[e],q=h(d[p]);q&&(f&&(f+=","),f+=JSON.stringify(p)+":"+q)}l.splice(v,1);return"{"+f+"}"}}(a)};c.toEsriGeometryType=function(a){switch(a){case "point":return"esriGeometryPoint";case "polygon":return"esriGeometryPolygon";case "multipoint":return"esriGeometryMultipoint";case "polyline":return"esriGeometryPolyline";default:return"esriGeometryPoint"}};Object.defineProperties(c,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
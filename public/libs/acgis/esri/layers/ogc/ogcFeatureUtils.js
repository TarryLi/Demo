// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../geometry ../../request ../../core/Error ../../core/Logger ../../core/maybe ../../geometry/support/spatialReferenceUtils ../../geometry/support/webMercatorUtils ../graphics/featureConversionUtils ../graphics/OptimizedFeatureSet ../graphics/sources/geojson/geojson ../graphics/sources/support/clientSideDefaults ../support/FieldsIndex ../support/fieldType ../../geometry/SpatialReference".split(" "),function(m,r,ka,t,q,S,h,T,N,A,U,B,V,W,X,v){function C(){C=
r._asyncToGenerator(function*(a,b,c={},f=5){({links:a}=a);a=p(a,"items","application/geo+json")||p(a,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(h.isNone(a))throw new q("ogc-feature-layer:missing-items-page","Missing items url");({data:c}=yield t(a.href,{signal:c.signal,query:{limit:f,...c.customParameters,token:c.apiKey},headers:{accept:"application/geo+json"}}));yield B.validateGeoJSON(c);const e=B.inferLayerProperties(c,{geometryType:b.geometryType});c=b.fields||e.fields||
[];f=null!=b.hasZ?b.hasZ:e.hasZ;a=e.geometryType;const n=b.objectIdField||e.objectIdFieldName||"OBJECTID";b=b.timeInfo;var g=c.find(w=>w.name===n);if(g)g.type="esriFieldTypeOID",g.editable=!1,g.nullable=!1;else{if(!e.objectIdFieldType)throw new q("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");c.unshift({name:n,alias:n,type:"esriFieldTypeOID",editable:!1,nullable:!1})}n!==e.objectIdFieldName&&(g=c.find(w=>w.name===e.objectIdFieldName))&&(g.type=
"esriFieldTypeInteger");c===e.fields&&0<e.unknownFields.length&&y.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:e.unknownFields}});for(var d of c){null==d.name&&(d.name=d.alias);null==d.alias&&(d.alias=d.name);"esriFieldTypeOID"!==d.type&&"esriFieldTypeGlobalID"!==d.type&&(d.editable=null==d.editable?!0:!!d.editable,d.nullable=null==d.nullable?!0:!!d.nullable);if(!d.name)throw new q("ogc-feature-layer:invalid-field-name",
"field name is missing",{field:d});if(!X.kebabDict.jsonValues.includes(d.type))throw new q("ogc-feature-layer:invalid-field-type",`invalid type for field "${d.name}"`,{field:d});}b&&(d=new W(c),b.startTimeField&&((g=d.get(b.startTimeField))?(b.startTimeField=g.name,g.type="esriFieldTypeDate"):b.startTimeField=null),b.endTimeField&&((g=d.get(b.endTimeField))?(b.endTimeField=g.name,g.type="esriFieldTypeDate"):b.endTimeField=null),b.trackIdField&&((d=d.get(b.trackIdField))?b.trackIdField=d.name:(b.trackIdField=
null,y.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:b}}))),b.startTimeField||b.endTimeField||(y.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:b}}),b=null));return{drawingInfo:a?V.createDrawingInfo(a):null,geometryType:a,fields:c,hasZ:!!f,objectIdField:n,timeInfo:b}});return C.apply(this,arguments)}function D(){D=r._asyncToGenerator(function*(a,b={}){({links:a}=
a);a=p(a,"data","application/json")||p(a,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json");if(h.isNone(a))throw new q("ogc-feature-layer:missing-collections-page","Missing collections url");const {apiKey:c,customParameters:f,signal:e}=b;({data:b}=yield t(a.href,{signal:e,headers:{accept:"application/json"},query:{...f,token:c}}));return b});return D.apply(this,arguments)}function E(){E=r._asyncToGenerator(function*(a,b={}){({links:a}=a);a=p(a,"conformance","application/json")||p(a,
"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json");if(h.isNone(a))throw new q("ogc-feature-layer:missing-conformance-page","Missing conformance url");const {apiKey:c,customParameters:f,signal:e}=b;({data:b}=yield t(a.href,{signal:e,headers:{accept:"application/json"},query:{...f,token:c}}));return b});return E.apply(this,arguments)}function F(){F=r._asyncToGenerator(function*(a,b={}){const {apiKey:c,customParameters:f,signal:e}=b;({data:a}=yield t(a,{signal:e,headers:{accept:"application/json"},
query:{...f,token:c}}));return a});return F.apply(this,arguments)}function G(){G=r._asyncToGenerator(function*(a,b={}){a=p(a.links,"service-desc","application/vnd.oai.openapi+json;version\x3d3.0");if(h.isNone(a))return y.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const {apiKey:c,customParameters:f,signal:e}=b;({data:b}=yield t(a.href,{signal:e,headers:{accept:"application/vnd.oai.openapi+json;version\x3d3.0"},query:{...f,token:c}}));
return b});return G.apply(this,arguments)}function H(){H=r._asyncToGenerator(function*(a,b,c){a=yield O(a,b,c);return A.convertToFeatureSet(a)});return H.apply(this,arguments)}function O(a,b,c){return I.apply(this,arguments)}function I(){I=r._asyncToGenerator(function*(a,b,c){const {capabilities:{query:{maxRecordCount:f}},collection:e,layerDefinition:n,queryParameters:{apiKey:g,customParameters:d},spatialReference:w,supportedCrs:P}=a;({links:a}=e);var u=p(a,"items","application/geo+json")||p(a,"http://www.opengis.net/def/rel/ogc/1.0/items",
"application/geo+json");if(h.isNone(u))throw new q("ogc-feature-layer:missing-items-page","Missing items url");const {geometry:Y,num:Q,start:J,timeExtent:Z,where:aa}=b;if(b.objectIds)throw new q("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");a=v.fromJSON(w);b=h.unwrapOr(b.outSpatialReference,a);a=b.isWGS84?null:R(b,P);var k=ba(Y,P),z=ca(Z);const ea=da(aa);({data:k}=yield t(u.href,{...c,query:{...d,...k,crs:a,datetime:z,query:ea,limit:null!=Q?Q:null!=
J&&void 0!==J?10:f,startindex:J,token:g},headers:{accept:"application/geo+json"}}));c=!1;k.links&&(c=!!k.links.find(fa=>"next"===fa.rel));!c&&Number.isInteger(k.numberMatched)&&Number.isInteger(k.numberReturned)&&(c=k.numberReturned<k.numberMatched);const {fields:ha,globalIdField:ia,hasM:ja,hasZ:K,objectIdField:L}=n;u=n.geometryType;k=B.createOptimizedFeatures(k,{geometryType:u,hasZ:K,objectIdField:L});if(!a&&b.isWebMercator)for(var x of k)h.isSome(x.geometry)&&(z=A.convertToGeometry(x.geometry,u,
K,!1),z.spatialReference=v.WGS84,x.geometry=A.convertFromGeometry(N.project(z,b)));for(var l of k)l.objectId=l.attributes[L];x=a||!a&&b.isWebMercator?b.toJSON():T.WGS84;l=new U;l.exceededTransferLimit=c;l.features=k;l.fields=ha;l.geometryType=u;l.globalIdFieldName=ia;l.hasM=ja;l.hasZ=K;l.objectIdFieldName=L;l.spatialReference=x;return l});return I.apply(this,arguments)}function R(a,b){var c,f,e;const {isWebMercator:n,wkid:g}=a;return g?(a=n?null!=(c=null!=(f=null!=(e=b[3857])?e:b[102100])?f:b[102113])?
c:b[900913]:b[a.wkid])?`${"http://www.opengis.net/def/crs/"}${a}`:null:null}function M(a){if(h.isNone(a))return"";const {xmin:b,ymin:c,xmax:f,ymax:e}=a;return`${b},${c},${f},${e}`}function ca(a){if(h.isNone(a))return null;const {start:b,end:c}=a;return`${h.isSome(b)?b.toISOString():".."}/${h.isSome(c)?c.toISOString():".."}`}function da(a){return h.isNone(a)||!a||"1\x3d1"===a?null:a}function ba(a,b){if(!h.isSome(a)||"extent"!==a.type)return null;const {spatialReference:c}=a;if(!c||c.isWGS84)return{bbox:M(a)};
b=R(c,b);return h.isSome(b)?{bbox:M(a),"bbox-crs":b}:c.isWebMercator?{bbox:M(N.project(a,v.WGS84))}:null}function p(a,b,c){return a.find(f=>f.rel===b&&f.type===c)||a.find(f=>f.rel===b&&!f.type)}const y=S.getLogger("esri.layers.graphics.sources.ogcfeature");m.crsDefault="http://www.opengis.net/def/crs/OGC/1.3/CRS84";m.crsPrefix="http://www.opengis.net/def/crs/";m.getCollectionDefinition=function(a,b){return C.apply(this,arguments)};m.getServerCollections=function(a){return D.apply(this,arguments)};
m.getServerConformance=function(a){return E.apply(this,arguments)};m.getServerLandingPage=function(a){return F.apply(this,arguments)};m.getServerOpenApi=function(a){return G.apply(this,arguments)};m.getSpatialReferenceWkid=function(a){a=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(a);a=null==a?void 0:a.groups;if(!a)return null;const {authority:b,code:c}=a;switch(b.toLowerCase()){case "ogc":switch(c.toLowerCase()){case "crs27":return v.GCS_NAD_1927.wkid;
case "crs83":return 4269;case "crs84":case "crs84h":return v.WGS84.wkid;default:return null}case "esri":case "epsg":return a=Number.parseInt(c,10),Number.isNaN(a)?null:a;default:return null}};m.queryFeatureSetJSON=function(a,b,c){return H.apply(this,arguments)};m.queryOptimizedFeatureSet=O;Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
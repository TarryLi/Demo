// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("require exports ../../chunks/_rollupPluginBabelHelpers ../../request ../../core/Error ../../core/maybe ../../core/urlUtils ./arcgisLayerUrl ./lazyLayerLoader".split(" "),function(I,p,k,J,K,m,z,A,L){function q(){q=k._asyncToGenerator(function*(a){var b,c=null==(b=a.properties)?void 0:b.customParameters;b=yield M(a.url,c);a={...a.properties,url:a.url};if(!b.sublayerIds)return null!=b.layerOrTableId&&(a.layerId=b.layerOrTableId,a.sourceJSON=b.sourceJSON),new b.Constructor(a);c=new (yield new Promise((e,
d)=>I(["../GroupLayer"],g=>e(Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"}))),d))).default({title:b.parsedUrl.title});N(c,b,a);return c});return q.apply(this,arguments)}function B(a,b){return a?a.find(c=>c.id===b):null}function N(a,b,c){function e(d,g){d={...c,layerId:d,sublayerTitleMode:"service-name"};m.isSome(g)&&(d.sourceJSON=g);return new b.Constructor(d)}b.sublayerIds.forEach(d=>{d=e(d,B(b.sublayerInfos,d));a.add(d)});b.tableIds.forEach(d=>
{d=e(d,B(b.tableInfos,d));a.tables.add(d)})}function M(a,b){return r.apply(this,arguments)}function r(){r=k._asyncToGenerator(function*(a,b){var c=A.parse(a);m.isNone(c)&&(c=yield O(a,b));if(m.isNone(c))throw new K("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:a});const {serverType:e,sublayer:d}=c;var g={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(e){case "MapServer":var h=null!=d?"FeatureLayer":P(a,b).then(f=>
f?"TileLayer":"MapImageLayer");break;case "ImageServer":h=l(a,{customParameters:b}).then(f=>{const n=f.tileInfo&&f.tileInfo.format;return f.tileInfo?"LERC"!==(null==n?void 0:n.toUpperCase())||f.cacheType&&"elevation"!==f.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"});break;case "SceneServer":h=l(c.url.path,{customParameters:b}).then(f=>{if(f){if("Voxel"===(null==f?void 0:f.layerType))return"VoxelLayer";if(null!=f&&f.layers&&Array.isArray(f.layers)&&0<f.layers.length){var n;
const C={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};f=null==(n=f.layers[0])?void 0:n.layerType;if(null!=C[f])return C[f]}}return"SceneLayer"});break;default:h=g[e]}g="FeatureServer"===e;c={parsedUrl:c,Constructor:null,layerOrTableId:g?d:null,sublayerIds:null,tableIds:null};h=yield h;if({FeatureLayer:!0,SceneLayer:!0}[h]&&null==d)if(a=yield Q(a,e,b),g&&(c.sublayerInfos=a.layerInfos,c.tableInfos=a.tableInfos),
1!==a.layerIds.length+a.tableIds.length)c.sublayerIds=a.layerIds,c.tableIds=a.tableIds;else if(g){var D,E;c.layerOrTableId=null!=(D=a.layerIds[0])?D:a.tableIds[0];c.sourceJSON=null!=(E=a.layerInfos[0])?E:a.tableInfos[0]}c.Constructor=yield R(h);return c});return r.apply(this,arguments)}function O(a,b){return t.apply(this,arguments)}function t(){t=k._asyncToGenerator(function*(a,b){var c;b=yield l(a,{customParameters:b});let e=null,d=null;const g=b.type;"Feature Layer"===g||"Table"===g?(e="FeatureServer",
d=b.id):"indexedVector"===g?e="VectorTileServer":b.hasOwnProperty("mapName")?e="MapServer":b.hasOwnProperty("bandCount")&&b.hasOwnProperty("pixelSizeX")?e="ImageServer":b.hasOwnProperty("maxRecordCount")&&b.hasOwnProperty("allowGeometryUpdates")?e="FeatureServer":b.hasOwnProperty("streamUrls")?e="StreamServer":F(b)?(e="SceneServer",d=b.id):b.hasOwnProperty("layers")&&F(null==(c=b.layers)?void 0:c[0])&&(e="SceneServer");if(!e)return null;c=null!=d?A.parseNonStandardSublayerUrl(a):null;return{title:m.isSome(c)&&
b.name||z.getFilename(a),serverType:e,sublayer:d,url:{path:m.isSome(c)?c.serviceUrl:z.urlToObject(a).path}}});return t.apply(this,arguments)}function F(a){return(null==a?void 0:a.hasOwnProperty("store"))&&a.hasOwnProperty("id")&&"number"===typeof a.id}function Q(a,b,c){return u.apply(this,arguments)}function u(){u=k._asyncToGenerator(function*(a,b,c){var e,d;let g=!1;"FeatureServer"===b?(a=yield G(a,{customParameters:c}),g=!!a.layersJSON,b=a.layersJSON||a.serviceJSON):b=yield l(a,{customParameters:c});
a=null==(e=b)?void 0:e.layers;e=null==(d=b)?void 0:d.tables;return{layerIds:(null==a?void 0:a.map(h=>h.id).reverse())||[],tableIds:(null==e?void 0:e.map(h=>h.id).reverse())||[],layerInfos:g?a:[],tableInfos:g?e:[]}});return u.apply(this,arguments)}function H(a){return!a.type||"Feature Layer"===a.type}function G(a,b){return v.apply(this,arguments)}function v(){v=k._asyncToGenerator(function*(a,b){var c,e;let d=yield l(a,b);d=d||{};d.layers=(null==(c=d.layers)?void 0:c.filter(H))||[];c={serviceJSON:d};
if(10.5>d.currentVersion)return c;a=yield l(a+"/layers",b);c.layersJSON={layers:(null==a?void 0:null==(e=a.layers)?void 0:e.filter(H))||[],tables:(null==a?void 0:a.tables)||[]};return c});return v.apply(this,arguments)}function R(a){return w.apply(this,arguments)}function w(){w=k._asyncToGenerator(function*(a){return(0,L.layerLookupMap[a])()});return w.apply(this,arguments)}function P(a,b){return x.apply(this,arguments)}function x(){x=k._asyncToGenerator(function*(a,b){return(yield l(a,{customParameters:b})).tileInfo});
return x.apply(this,arguments)}function l(a,b){return y.apply(this,arguments)}function y(){y=k._asyncToGenerator(function*(a,b){return(yield J(a,{responseType:"json",query:{f:"json",...null==b?void 0:b.customParameters,token:null==b?void 0:b.apiKey}})).data});return y.apply(this,arguments)}p.fetchFeatureService=G;p.fromUrl=function(a){return q.apply(this,arguments)};Object.defineProperties(p,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
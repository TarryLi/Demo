"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[6458,8642],{69586:(e,a,t)=>{t.d(a,{a:()=>i,c:()=>l});var r=t(32101),n=t(49900);function l(e){return{origin:"portal-item",url:(0,r.mN)(e.itemUrl),portal:e.portal||n.Z.getDefault(),portalItem:e,readResourcePaths:[]}}function i(e){return{origin:"portal-item",messages:[],writtenProperties:[],url:e.itemUrl?(0,r.mN)(e.itemUrl):null,portal:e.portal||n.Z.getDefault(),portalItem:e}}},8642:(e,a,t)=>{t.r(a),t.d(a,{a:()=>m,g:()=>f,l:()=>h,p:()=>p,r:()=>c});var r=t(60991),n=t(67902),l=t(49900),i=t(69586),s=t(71831),o=t(82058);async function c(e){const{data:a}=await(0,o.default)(e,{responseType:"json",query:{f:"json"}});return a}function u(e,a,t){let r=t.layers||[];const n=t.tables||[];"Feature Collection"===e.portalItem.type&&(r.forEach((e=>{"Table"===e?.layerDefinition?.type&&n.push(e)})),r=r.filter((e=>"Table"!==e?.layerDefinition?.type))),r.reverse().forEach((r=>{const n=y(e,a,t,r);e.add(n)})),n.reverse().forEach((r=>{const n=y(e,a,t,r);e.tables.add(n)}))}function y(e,a,t,r){const n=new a({portalItem:e.portalItem.clone(),layerId:r.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){const a={origin:"portal-item",portal:e.portalItem.portal||l.Z.getDefault()};n.read(r,a);const i=t.showLegend;null!=i&&n.read({showLegend:i},a)}return n}function d(e,a){if(!1===e.supportsData)return Promise.resolve(void 0);const t=e.instance;return t.portalItem.fetchData("json",a).catch((()=>null)).then((async e=>{if(function(e){return"stream"!==e.type&&"layerId"in e}(t)){let a,r=!0;return e&&f(e)>0&&(null==t.layerId&&(t.layerId=m(e)),a=function(e,a){const t=e.layers;if(t)for(let e=0;e<t.length;e++)if(t[e].id===a)return t[e];const r=e.tables;if(r)for(let e=0;e<r.length;e++)if(r[e].id===a)return r[e];return null}(e,t.layerId),a&&(1===f(e)&&(r=!1),null!=e.showLegend&&(a.showLegend=e.showLegend))),r&&"service-name"!==t.sublayerTitleMode&&(t.sublayerTitleMode="item-title-and-service-name"),a}return e}))}async function p(e,a){if(null==e?.layers||null==e?.tables){const t=await c(a);(e=e||{}).layers=e.layers||t?.layers,e.tables=e.tables||t?.tables}return e}function m(e){const a=e.layers;if(a&&a.length)return a[0].id;const t=e.tables;return t&&t.length?t[0].id:null}function f(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}const h=Object.freeze(Object.defineProperty({__proto__:null,load:async function(e,a){const t=e.instance.portalItem;if(t&&t.id)return await t.load(a),function(e){const a=e.instance.portalItem;if(!e.supportedTypes.includes(a.type))throw new r.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:a.type,expectedType:e.supportedTypes.join(", ")})}(e),async function(e,a){const t=e.instance,l=t.portalItem,{url:o,title:y}=l,m=(0,i.c)(l);if("group"===t.type)return t.read({title:y},m),function(e,a){let t;const l=e.portalItem.type;switch(l){case"Feature Service":case"Feature Collection":t=n.l.FeatureLayer;break;case"Stream Service":t=n.l.StreamLayer;break;case"Scene Service":t=n.l.SceneLayer;break;default:throw new r.Z("portal:unsupported-item-type-as-group",`The item type '${l}' is not supported as a 'IGroupLayer'`)}let i;return t().then((e=>(i=e,d(a)))).then((async a=>"Feature Service"===l?(a=await p(a,e.portalItem.url),u(e,i,a)):f(a)>0?u(e,i,a):function(e,a){return e.portalItem.url?c(e.portalItem.url).then((t=>{function r(e){return{id:e.id,name:e.name}}t&&u(e,a,{layers:t.layers?.map(r),tables:t.tables?.map(r)})})):Promise.resolve()}(e,i)))}(t,e);o&&t.read({url:o},m);const h=await d(e,a);return h&&t.read(h,m),t.resourceReferences={portalItem:l,paths:m.readResourcePaths},t.read({title:y},m),(0,s.l)(t,m)}(e,a)},preprocessFSItemData:p,getFirstLayerOrTableId:m,getNumLayersAndTables:f},Symbol.toStringTag,{value:"Module"}))},67902:(e,a,t)=>{t.d(a,{l:()=>r});const r={BingMapsLayer:async()=>(await Promise.all([t.e(67),t.e(7963)]).then(t.bind(t,37963))).default,BuildingSceneLayer:async()=>(await Promise.all([t.e(67),t.e(9635),t.e(6748),t.e(6583),t.e(208),t.e(6060),t.e(3064),t.e(1580),t.e(9506),t.e(5967),t.e(5040)]).then(t.bind(t,3439))).default,CSVLayer:async()=>(await Promise.all([t.e(67),t.e(9635),t.e(6748),t.e(6583),t.e(208),t.e(6060),t.e(3064),t.e(1580),t.e(9506),t.e(3525)]).then(t.bind(t,44004))).default,ElevationLayer:async()=>(await Promise.all([t.e(212),t.e(2204)]).then(t.bind(t,72204))).default,FeatureLayer:async()=>(await Promise.all([t.e(67),t.e(9635),t.e(6748),t.e(6583),t.e(208),t.e(6060),t.e(3064),t.e(1580),t.e(9506),t.e(9546)]).then(t.bind(t,9506))).default,GroupLayer:async()=>(await Promise.all([t.e(67),t.e(294)]).then(t.bind(t,60294))).default,GeoRSSLayer:async()=>(await Promise.all([t.e(67),t.e(9635),t.e(2197)]).then(t.bind(t,92197))).default,GeoJSONLayer:async()=>(await Promise.all([t.e(67),t.e(9635),t.e(6748),t.e(6583),t.e(208),t.e(6060),t.e(3064),t.e(9039)]).then(t.bind(t,99039))).default,ImageryLayer:async()=>(await Promise.all([t.e(67),t.e(9635),t.e(6748),t.e(6583),t.e(1580),t.e(4240),t.e(6061),t.e(6497)]).then(t.bind(t,76497))).default,ImageryTileLayer:async()=>(await Promise.all([t.e(67),t.e(1623),t.e(9635),t.e(6748),t.e(6583),t.e(212),t.e(4240),t.e(6061),t.e(4489),t.e(2552)]).then(t.bind(t,32552))).default,IntegratedMeshLayer:async()=>(await Promise.all([t.e(1623),t.e(5967),t.e(156)]).then(t.bind(t,60156))).default,KMLLayer:async()=>(await Promise.all([t.e(67),t.e(9635),t.e(6748),t.e(6583),t.e(208),t.e(1903)]).then(t.bind(t,21903))).default,LineOfSightLayer:async()=>(await Promise.all([t.e(1623),t.e(8191)]).then(t.bind(t,78191))).default,MapImageLayer:async()=>(await Promise.all([t.e(67),t.e(9635),t.e(6748),t.e(6583),t.e(208),t.e(6060),t.e(7050),t.e(605)]).then(t.bind(t,60605))).default,MapNotesLayer:async()=>(await Promise.all([t.e(67),t.e(1623),t.e(9635),t.e(6748),t.e(6583),t.e(208),t.e(6060),t.e(3064),t.e(1580),t.e(9506),t.e(7841)]).then(t.bind(t,41135))).default,OGCFeatureLayer:async()=>(await Promise.all([t.e(67),t.e(9635),t.e(6748),t.e(6583),t.e(208),t.e(6060),t.e(3064),t.e(3958)]).then(t.bind(t,63958))).default,OpenStreetMapLayer:async()=>(await Promise.all([t.e(67),t.e(3799),t.e(6043)]).then(t.bind(t,16043))).default,PointCloudLayer:async()=>(await Promise.all([t.e(6748),t.e(5967),t.e(5032)]).then(t.bind(t,25032))).default,RouteLayer:async()=>(await Promise.all([t.e(67),t.e(1623),t.e(9635),t.e(6748),t.e(6583),t.e(208),t.e(910)]).then(t.bind(t,50910))).default,SceneLayer:async()=>(await Promise.all([t.e(67),t.e(1623),t.e(9635),t.e(6748),t.e(6583),t.e(208),t.e(6060),t.e(3064),t.e(1580),t.e(9506),t.e(5967),t.e(3934)]).then(t.bind(t,84580))).default,StreamLayer:async()=>(await Promise.all([t.e(67),t.e(9635),t.e(6748),t.e(6583),t.e(208),t.e(6060),t.e(3064),t.e(8324)]).then(t.bind(t,58324))).default,TileLayer:async()=>(await Promise.all([t.e(67),t.e(9635),t.e(6748),t.e(6583),t.e(208),t.e(6060),t.e(212),t.e(7050),t.e(611)]).then(t.bind(t,90611))).default,UnknownLayer:async()=>(await t.e(3117).then(t.bind(t,63117))).default,UnsupportedLayer:async()=>(await t.e(8243).then(t.bind(t,88243))).default,VectorTileLayer:async()=>(await Promise.all([t.e(67),t.e(212),t.e(5414),t.e(6611),t.e(6491)]).then(t.bind(t,46491))).default,VoxelLayer:async()=>(await Promise.all([t.e(5967),t.e(49)]).then(t.bind(t,10049))).default,WebTileLayer:async()=>(await Promise.all([t.e(67),t.e(3799)]).then(t.bind(t,3799)).then((e=>e.a))).default,WFSLayer:async()=>(await Promise.all([t.e(67),t.e(1623),t.e(9635),t.e(6748),t.e(6583),t.e(208),t.e(6060),t.e(3064),t.e(4797)]).then(t.bind(t,44797))).default,WMSLayer:async()=>(await Promise.all([t.e(67),t.e(9635),t.e(6748),t.e(3561)]).then(t.bind(t,73561))).default,WMTSLayer:async()=>(await Promise.all([t.e(67),t.e(3799),t.e(2790)]).then(t.bind(t,82790))).default}},60111:(e,a,t)=>{t.d(a,{T:()=>u,a:()=>i,g:()=>c,h:()=>s,r:()=>o});var r=t(1623),n=t(60947),l=t(35132);function i(e,a){if(!s(e,a)){const t=e.typeKeywords;t?t.push(a):e.typeKeywords=[a]}}function s(e,a){return!!e.typeKeywords?.includes(a)}function o(e,a){const t=e.typeKeywords;if(t){const e=t.indexOf(a);e>-1&&t.splice(e,1)}}async function c(e){const a=e.clone().normalize();let t;if(a.length>1)for(const e of a)t?e.width>t.width&&(t=e):t=e;else t=a[0];return async function(e){const a=e.spatialReference;if(a.isWGS84)return e.clone();if(a.isWebMercator)return(0,l.Sx)(e);const t=n.Z.WGS84;return await(0,r.iQ)(a,t),(0,r.iV)(e,t)}(t)}const u={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table"}},36458:(e,a,t)=>{t.r(a),t.d(a,{fromItem:()=>o,selectLayerClassPath:()=>c});var r=t(60991),n=t(67902),l=t(56420),i=t(8642),s=t(60111);function o(e){return!e.portalItem||e.portalItem instanceof l.default||(e={...e,portalItem:new l.default(e.portalItem)}),(a=e.portalItem,a.load().then(c).then(u)).then((a=>{const t={portalItem:e.portalItem,...a.properties};return new(0,a.constructor)(t)}));var a}function c(e){switch(e.type){case"Map Service":return(a=e,(0,i.r)(a.url).then((e=>e.tileInfo))).then((e=>e?{className:"TileLayer"}:{className:"MapImageLayer"}));case"Feature Service":return function(e){return y(e).then((e=>{if("object"==typeof e){const a={};return null!=e.id&&(a.layerId=e.id),{className:"FeatureLayer",properties:a}}return{className:"GroupLayer"}}))}(e);case"Feature Collection":return async function(e){if(await e.load(),(0,s.h)(e,"Map Notes"))return{className:"MapNotesLayer"};if((0,s.h)(e,"Route Layer"))return{className:"RouteLayer"};const a=await e.fetchData();return 1===(0,i.g)(a)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Scene Service":return function(e){return y(e).then((a=>{if("object"==typeof a){const t={};let r;if(null!=a.id?(t.layerId=a.id,r=`${e.url}/layers/${a.id}`):r=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const a={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const t of Object.keys(a))if(e.typeKeywords.includes(t))return{className:a[t]}}return(0,i.r)(r).then((e=>{let a="SceneLayer";const r={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&r[e.layerType]&&(a=r[e.layerType]),{className:a,properties:t}}))}return!1===a?(0,i.r)(e.url).then((e=>"Voxel"===e?.layerType?{className:"VoxelLayer"}:{className:"GroupLayer"})):{className:"GroupLayer"}}))}(e);case"Image Service":return async function(e){await e.load();const a=e.typeKeywords?.map((e=>e.toLowerCase()))??[];if(a.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(a.includes("tiled imagery"))return{className:"ImageryTileLayer"};const t=(await e.fetchData())?.layerType;if("ArcGISTiledImageServiceLayer"===t)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===t)return{className:"ImageryLayer"};const r=(await(0,i.r)(e.url)).cacheType?.toLowerCase();return"map"===r?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e);case"Stream Service":case"Feed":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WFS":return{className:"WFSLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return Promise.reject(new r.Z("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}var a}function u(e){return(0,n.l[e.className])().then((a=>({constructor:a,properties:e.properties})))}function y(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then((()=>e.fetchData())).then((async a=>"Feature Service"===e.type?d(a=await(0,i.p)(a,e.url)):(0,i.g)(a)>0?d(a):(0,i.r)(e.url).then(d)))}function d(e){return 1===(0,i.g)(e)&&{id:(0,i.a)(e)}}t(76506),t(92143),t(31450),t(71552),t(40642),t(73173),t(82058),t(88762),t(32101),t(50406),t(12047),t(21972),t(60474),t(66396),t(17533),t(86656),t(6540),t(91306),t(91055),t(34250),t(19657),t(6906),t(81184),t(33101),t(97714),t(21801),t(73796),t(60947),t(2906),t(91597),t(86787),t(35132),t(89623),t(49900),t(3482),t(67477),t(57251),t(78533),t(74653),t(91091),t(58943),t(74742),t(28239),t(69586),t(71831),t(41864),t(1623),t(82426),t(29794),t(53785),t(95587),t(89914),t(65775),t(84069),t(12381),t(44567),t(98380),t(92896),t(92482),t(92624),t(92847)},71831:(e,a,t)=>{t.d(a,{l:()=>i});var r=t(41864),n=t(50406),l=t(17533);async function i(e,a,t){const i=e&&e.getAtOrigin&&e.getAtOrigin("renderer",a.origin);if(i&&"unique-value"===i.type&&i.styleOrigin){const s=await(0,r.r)(i.populateFromStyle());if((0,n.k_)(t),!1===s.ok){const t=s.error;a&&a.messages&&a.messages.push(new l.W("renderer:style-reference",`Failed to create unique value renderer from style reference: ${t.message}`,{error:t,context:a})),e.clear("renderer",a.origin)}}}}}]);
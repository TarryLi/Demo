"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[6601],{66601:(e,a,r)=>{r.r(a),r.d(a,{fetchFeatureService:()=>f,fromUrl:()=>o});var t=r(82058),n=r(60991),l=r(71252),s=r(32101),i=r(21132),y=r(67902);async function o(e){const a=e.properties?.customParameters,t=await async function(e,a){let r=(0,i.p)(e);if((0,l.a)(r)&&(r=await async function(e,a){const r=await m(e,{customParameters:a});let t=null,n=null;const y=r.type;if("Feature Layer"===y||"Table"===y?(t="FeatureServer",n=r.id):"indexedVector"===y?t="VectorTileServer":r.hasOwnProperty("mapName")?t="MapServer":r.hasOwnProperty("bandCount")&&r.hasOwnProperty("pixelSizeX")?t="ImageServer":r.hasOwnProperty("maxRecordCount")&&r.hasOwnProperty("allowGeometryUpdates")?t="FeatureServer":r.hasOwnProperty("streamUrls")?t="StreamServer":c(r)?(t="SceneServer",n=r.id):r.hasOwnProperty("layers")&&c(r.layers?.[0])&&(t="SceneServer"),!t)return null;const o=null!=n?(0,i.f)(e):null;return{title:(0,l.i)(o)&&r.name||(0,s.vt)(e),serverType:t,sublayer:n,url:{path:(0,l.i)(o)?o.serviceUrl:(0,s.mN)(e).path}}}(e,a)),(0,l.a)(r))throw new n.Z("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:t,sublayer:o}=r;let u;const d={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(t){case"MapServer":u=null!=o?"FeatureLayer":async function(e,a){return(await m(e,{customParameters:a})).tileInfo}(e,a).then((e=>e?"TileLayer":"MapImageLayer"));break;case"ImageServer":u=m(e,{customParameters:a}).then((e=>{const a=e.tileInfo&&e.tileInfo.format;return e.tileInfo?"LERC"!==a?.toUpperCase()||e.cacheType&&"elevation"!==e.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"}));break;case"SceneServer":u=m(r.url.path,{customParameters:a}).then((e=>{if(e){if("Voxel"===e?.layerType)return"VoxelLayer";if(e?.layers&&Array.isArray(e.layers)&&e.layers.length>0){const a={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},r=e.layers[0]?.layerType;if(null!=a[r])return a[r]}}return"SceneLayer"}));break;default:u=d[t]}const b="FeatureServer"===t,h={parsedUrl:r,Constructor:null,layerOrTableId:b?o:null,sublayerIds:null,tableIds:null},w=await u;if({FeatureLayer:!0,SceneLayer:!0}[w]&&null==o){const r=await async function(e,a,r){let t,n=!1;if("FeatureServer"===a){const a=await f(e,{customParameters:r});n=!!a.layersJSON,t=a.layersJSON||a.serviceJSON}else t=await m(e,{customParameters:r});const l=t?.layers,s=t?.tables;return{layerIds:l?.map((e=>e.id)).reverse()||[],tableIds:s?.map((e=>e.id)).reverse()||[],layerInfos:n?l:[],tableInfos:n?s:[]}}(e,t,a);b&&(h.sublayerInfos=r.layerInfos,h.tableInfos=r.tableInfos),1!==r.layerIds.length+r.tableIds.length?(h.sublayerIds=r.layerIds,h.tableIds=r.tableIds):b&&(h.layerOrTableId=r.layerIds[0]??r.tableIds[0],h.sourceJSON=r.layerInfos[0]??r.tableInfos[0])}return h.Constructor=await async function(e){return(0,y.l[e])()}(w),h}(e.url,a),o={...e.properties,url:e.url};if(!t.sublayerIds)return null!=t.layerOrTableId&&(o.layerId=t.layerOrTableId,o.sourceJSON=t.sourceJSON),new t.Constructor(o);const d=new(0,(await Promise.all([r.e(67),r.e(3752)]).then(r.bind(r,60294))).default)({title:t.parsedUrl.title});return function(e,a,r){function t(e,t){const n={...r,layerId:e,sublayerTitleMode:"service-name"};return(0,l.i)(t)&&(n.sourceJSON=t),new a.Constructor(n)}a.sublayerIds.forEach((r=>{const n=t(r,u(a.sublayerInfos,r));e.add(n)})),a.tableIds.forEach((r=>{const n=t(r,u(a.tableInfos,r));e.tables.add(n)}))}(d,t,o),d}function u(e,a){return e?e.find((e=>e.id===a)):null}function c(e){return e?.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}function d(e){return!e.type||"Feature Layer"===e.type}async function f(e,a){let r=await m(e,a);r=r||{},r.layers=r.layers?.filter(d)||[];const t={serviceJSON:r};if(r.currentVersion<10.5)return t;const n=await m(e+"/layers",a);return t.layersJSON={layers:n?.layers?.filter(d)||[],tables:n?.tables||[]},t}async function m(e,a){return(await(0,t.default)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}})).data}r(31450),r(76506),r(71552),r(88762),r(92143),r(40642),r(50406),r(38742)},67902:(e,a,r)=>{r.d(a,{l:()=>t});const t={BingMapsLayer:async()=>(await Promise.all([r.e(67),r.e(7963)]).then(r.bind(r,37963))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(67),r.e(9635),r.e(6748),r.e(6583),r.e(208),r.e(6060),r.e(3064),r.e(1580),r.e(9506),r.e(5967),r.e(5040)]).then(r.bind(r,3439))).default,CSVLayer:async()=>(await Promise.all([r.e(67),r.e(9635),r.e(6748),r.e(6583),r.e(208),r.e(6060),r.e(3064),r.e(1580),r.e(9506),r.e(3525)]).then(r.bind(r,44004))).default,ElevationLayer:async()=>(await Promise.all([r.e(212),r.e(2204)]).then(r.bind(r,72204))).default,FeatureLayer:async()=>(await Promise.all([r.e(67),r.e(9635),r.e(6748),r.e(6583),r.e(208),r.e(6060),r.e(3064),r.e(1580),r.e(9506),r.e(9546)]).then(r.bind(r,9506))).default,GroupLayer:async()=>(await Promise.all([r.e(67),r.e(294)]).then(r.bind(r,60294))).default,GeoRSSLayer:async()=>(await Promise.all([r.e(67),r.e(9635),r.e(2197)]).then(r.bind(r,92197))).default,GeoJSONLayer:async()=>(await Promise.all([r.e(67),r.e(9635),r.e(6748),r.e(6583),r.e(208),r.e(6060),r.e(3064),r.e(9039)]).then(r.bind(r,99039))).default,ImageryLayer:async()=>(await Promise.all([r.e(67),r.e(9635),r.e(6748),r.e(6583),r.e(1580),r.e(4240),r.e(6061),r.e(6497)]).then(r.bind(r,76497))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(67),r.e(1623),r.e(9635),r.e(6748),r.e(6583),r.e(212),r.e(4240),r.e(6061),r.e(4489),r.e(2552)]).then(r.bind(r,32552))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(1623),r.e(5967),r.e(156)]).then(r.bind(r,60156))).default,KMLLayer:async()=>(await Promise.all([r.e(67),r.e(9635),r.e(6748),r.e(6583),r.e(208),r.e(1903)]).then(r.bind(r,21903))).default,LineOfSightLayer:async()=>(await Promise.all([r.e(1623),r.e(8191)]).then(r.bind(r,78191))).default,MapImageLayer:async()=>(await Promise.all([r.e(67),r.e(9635),r.e(6748),r.e(6583),r.e(208),r.e(6060),r.e(7050),r.e(605)]).then(r.bind(r,60605))).default,MapNotesLayer:async()=>(await Promise.all([r.e(67),r.e(1623),r.e(9635),r.e(6748),r.e(6583),r.e(208),r.e(6060),r.e(3064),r.e(1580),r.e(9506),r.e(7841)]).then(r.bind(r,41135))).default,OGCFeatureLayer:async()=>(await Promise.all([r.e(67),r.e(9635),r.e(6748),r.e(6583),r.e(208),r.e(6060),r.e(3064),r.e(3958)]).then(r.bind(r,63958))).default,OpenStreetMapLayer:async()=>(await Promise.all([r.e(67),r.e(3799),r.e(6043)]).then(r.bind(r,16043))).default,PointCloudLayer:async()=>(await Promise.all([r.e(6748),r.e(5967),r.e(5032)]).then(r.bind(r,25032))).default,RouteLayer:async()=>(await Promise.all([r.e(67),r.e(1623),r.e(9635),r.e(6748),r.e(6583),r.e(208),r.e(910)]).then(r.bind(r,50910))).default,SceneLayer:async()=>(await Promise.all([r.e(67),r.e(1623),r.e(9635),r.e(6748),r.e(6583),r.e(208),r.e(6060),r.e(3064),r.e(1580),r.e(9506),r.e(5967),r.e(3934)]).then(r.bind(r,84580))).default,StreamLayer:async()=>(await Promise.all([r.e(67),r.e(9635),r.e(6748),r.e(6583),r.e(208),r.e(6060),r.e(3064),r.e(8324)]).then(r.bind(r,58324))).default,TileLayer:async()=>(await Promise.all([r.e(67),r.e(9635),r.e(6748),r.e(6583),r.e(208),r.e(6060),r.e(212),r.e(7050),r.e(611)]).then(r.bind(r,90611))).default,UnknownLayer:async()=>(await r.e(3117).then(r.bind(r,63117))).default,UnsupportedLayer:async()=>(await r.e(8243).then(r.bind(r,88243))).default,VectorTileLayer:async()=>(await Promise.all([r.e(67),r.e(212),r.e(5414),r.e(6611),r.e(6491)]).then(r.bind(r,46491))).default,VoxelLayer:async()=>(await Promise.all([r.e(5967),r.e(49)]).then(r.bind(r,10049))).default,WebTileLayer:async()=>(await Promise.all([r.e(67),r.e(3799)]).then(r.bind(r,3799)).then((e=>e.a))).default,WFSLayer:async()=>(await Promise.all([r.e(67),r.e(1623),r.e(9635),r.e(6748),r.e(6583),r.e(208),r.e(6060),r.e(3064),r.e(4797)]).then(r.bind(r,44797))).default,WMSLayer:async()=>(await Promise.all([r.e(67),r.e(9635),r.e(6748),r.e(3561)]).then(r.bind(r,73561))).default,WMTSLayer:async()=>(await Promise.all([r.e(67),r.e(3799),r.e(2790)]).then(r.bind(r,82790))).default}}}]);
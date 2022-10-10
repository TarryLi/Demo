// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(e){e.areLabelsVisible=function(a){return!0===a.labelsVisible&&null!=a.labelingInfo&&0<a.labelingInfo.length};e.getLayersForScale=function(a,b){const g=[];if(0<a&&b)for(let c=0;c<b.length;c++)if(!(0<=b[c].parentLayerId&&!g.includes(b[c].parentLayerId)&&b.some(d=>d.id===b[c].parentLayerId))&&0<=b[c].id){let d=!0;const f=b[c].maxScale,h=b[c].minScale;if(0<f||0<h)0<f&&0<h?d=f<=a&&a<=h:0<f?d=f<=a:0<h&&(d=a<=h);d&&g.push(b[c].id)}return g};e.getTileMaxtrixSetFromActiveLayer=
function(a){if(a.activeLayer){const b=a.activeLayer.tileMatrixSet;if(b)return b;if(a=a.activeLayer.tileMatrixSets)return a}return null};e.isBaseLayer=function(a){var b;return"esri.Basemap"===(null==(b=a.parent)?void 0:b.declaredClass)&&a.parent.baseLayers.includes(a)};e.isBasemapSupportedLayer=function(a){a=null==a?void 0:a.type;return"imagery-tile"===a||"tile"===a||"open-street-map"===a||"vector-tile"===a||"web-tile"===a||"wmts"===a};e.isFeatureCollectionLayer=function(a){var b;return"feature"===
(null==a?void 0:a.type)&&!a.url&&"memory"===(null==(b=a.source)?void 0:b.type)};e.isFeatureServiceLayer=function(a){var b;return"feature"===(null==a?void 0:a.type)&&"feature-layer"===(null==(b=a.source)?void 0:b.type)};e.isImageryTileLayer=function(a){return"imagery-tile"===(null==a?void 0:a.type)};e.isTiledLayer=function(a){a=null==a?void 0:a.type;return"base-tile"===a||"tile"===a||"elevation"===a||"imagery-tile"===a||"base-elevation"===a||"open-street-map"===a||"wcs"===a||"web-tile"===a||"wmts"===
a||"vector-tile"===a};e.isVoxelLayer=function(a){return"voxel"===(null==a?void 0:a.type)};e.serializeLayerDefinitions=function(a){const b=/[:;]/,g=[];let c=!1;if(a&&(a.forEach((d,f)=>{g.push([f,d]);!c&&b.test(d)&&(c=!0)}),0<g.length)){if(c){const d={};g.forEach(f=>{d[f[0]]=f[1]});a=JSON.stringify(d)}else{const d=[];g.forEach(f=>{d.push(f[0]+":"+f[1])});a=d.join(";")}return a}return null};e.serializeTimeOptions=function(a){if(a){var b=[];a.forEach((g,c)=>{b.push('"'+c+'":'+JSON.stringify(g))});if(b.length)return"{"+
b.join(",")+"}"}};Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
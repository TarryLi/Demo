// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../Basemap ../config ../core/Collection ../core/Logger ../core/maybe ../core/urlUtils ../core/accessorSupport/ensureType ./basemapDefinitions".split(" "),function(f,k,q,r,F,g,l,G,h){function t(a,b){var c;let d;if("string"===typeof a){if(!(a in h.esriBasemapDefinitions))return b=Object.entries(h.esriBasemapDefinitions).filter(([,e])=>q.apiKey&&!e.classic||!q.apiKey&&e.classic&&!e.deprecated).map(([e])=>`"${e}"`).join(", "),u.warn(`Unable to find basemap definition for: ${a}. Try one of these: ${b}`),
null;b&&(d=b[a]);d||(d=k.fromId(a),b&&(b[a]=d))}else d=G.ensureType(k,a);null!=(c=d)&&c.destroyed&&(u.warn("The provided basemap is already destroyed",{basemap:d}),d=null);return d}function v(a,b){const c=new r;a.forEach(d=>{const e=b.find(m=>w(n(d),n(m)))||d;c.includes(e)?c.push(d):c.push(e)});return c}function x(a){if(y(a.url))return!0;if("vector-tile"===a.type)for(const b in a.sourceNameToSource){const c=a.sourceNameToSource[b];if(y(null==c?void 0:c.sourceUrl))return!0}return!1}function y(a){if(!a)return!1;
a=new l.Url(l.makeAbsolute(a));return H.test(a.authority)}function p(a){return a?!a.loaded&&a.resourceInfo?z(a.resourceInfo.data):{baseLayers:A(a.baseLayers),referenceLayers:A(a.referenceLayers)}:null}function A(a){return(r.isCollection(a)?a.toArray():a).map(n)}function n(a){var b,c;return{type:a.type,url:B("urlTemplate"in a&&a.urlTemplate||a.url||"styleUrl"in a&&a.styleUrl),minScale:"minScale"in a&&null!=a.minScale?a.minScale:0,maxScale:"maxScale"in a&&null!=a.maxScale?a.maxScale:0,opacity:null!=
a.opacity?a.opacity:1,visible:null!=a.visible?!!a.visible:!0,sublayers:"map-image"!==a.type&&"wms"!==a.type||!g.isSome(a.sublayers)?void 0:null==(b=a.sublayers)?void 0:b.map(d=>({id:d.id,visible:d.visible})),activeLayerId:"wmts"===a.type?null==(c=a.activeLayer)?void 0:c.id:void 0}}function z(a){return a?{baseLayers:C(a.baseMapLayers.filter(b=>!b.isReference)),referenceLayers:C(a.baseMapLayers.filter(b=>b.isReference))}:null}function C(a){return a.map(b=>{{let c;switch(b.layerType){case "VectorTileLayer":c=
"vector-tile";break;case "ArcGISTiledMapServiceLayer":c="tile";break;default:c="unknown"}b={type:c,url:B(b.templateUrl||b.urlTemplate||b.styleUrl||b.url),minScale:null!=b.minScale?b.minScale:0,maxScale:null!=b.maxScale?b.maxScale:0,opacity:null!=b.opacity?b.opacity:1,visible:null!=b.visibility?!!b.visibility:!0,sublayers:void 0,activeLayerId:void 0}}return b})}function D(a,b,c){return null!=a!==(null!=b)?"not-equal":a?E(a.baseLayers,b.baseLayers)?E(a.referenceLayers,b.referenceLayers)?"equal":c.mustMatchReferences?
"not-equal":"base-layers-equal":"not-equal":"equal"}function E(a,b){if(a.length!==b.length)return!1;for(let c=0;c<a.length;c++)if(!w(a[c],b[c]))return!1;return!0}function w(a,b){if(a.type!==b.type||a.url!==b.url||a.minScale!==b.minScale||a.maxScale!==b.maxScale||a.visible!==b.visible||a.opacity!==b.opacity)return!1;if(g.isSome(a.activeLayerId)||g.isSome(b.activeLayerId))return a.activeLayerId===b.activeLayerId;if(g.isSome(a.sublayers)||g.isSome(b.sublayers)){if(g.isNone(a.sublayers)||g.isNone(b.sublayers)||
a.sublayers.length!==b.sublayers.length)return!1;for(let c=0;c<a.sublayers.length;c++){const d=a.sublayers.at(c),e=b.sublayers.at(c);if(d.id!==e.id||d.visible!==e.visible)return!1}}return!0}function B(a){return a?l.normalize(a).replace(/^\s*https?:/i,"").toLowerCase():""}const u=F.getLogger("esri.support.basemapUtils"),H=/^(basemaps|ibasemaps).*-api\.arcgis\.com$/i;f.clonePreservingTiledLayers=function(a,b=null){a=t(a);if(!a)return null;const c=new k({id:a.id,title:a.title,baseLayers:a.baseLayers.slice(),
referenceLayers:a.referenceLayers.slice()});b&&(c.baseLayers=v(c.baseLayers,b.baseLayers),c.referenceLayers=v(c.referenceLayers,b.referenceLayers));c.load().catch(()=>{});c.portalItem=a.portalItem;return c};f.contentEquals=function(a,b){if(a===b)return!0;a=p(a);b=p(b);return"equal"===D(a,b,{mustMatchReferences:!0})};f.createCache=function(){return{}};f.destroyCache=function(a){for(const b in a){const c=a[b];!1===(null==c?void 0:c.destroyed)&&c.destroy();delete a[b]}};f.ensureType=t;f.findSpatialReference=
function(a,b){var c,d,e;if(g.isNone(b)||g.isNone(a))return{spatialReference:null,updating:!1};if("not-loaded"===b.loadStatus)return b.load(),{spatialReference:null,updating:!0};if(b.spatialReference)return{spatialReference:b.spatialReference,updating:!1};if(0===b.baseLayers.length)return{spatialReference:null,updating:!1};b=b.baseLayers.getItemAt(0);switch(b.loadStatus){case "not-loaded":b.load();case "loading":return{spatialReference:null,updating:!0};case "failed":return{spatialReference:null,updating:!1}}b=
(("supportedSpatialReferences"in b?b.supportedSpatialReferences:null)||["tileInfo"in b?null==(c=b.tileInfo)?void 0:c.spatialReference:b.spatialReference]).filter(Boolean);return a.spatialReference?{spatialReference:null!=(d=null!=(e=b.find(m=>a.spatialReference.equals(m)))?e:b[0])?d:null,updating:!1}:{spatialReference:b[0],updating:!1}};f.getWellKnownBasemapId=function(a){let b=null;a=p(a);const c=!a.baseLayers.length;for(const e in h.esriBasemapDefinitions){var d=z(h.esriBasemapDefinitions[e]);d=
D(a,d,{mustMatchReferences:c});if("equal"===d){b=e;break}"base-layers-equal"===d&&(b=e)}return b};f.hasDeveloperBasemapLayer=function(a){return!(null==a||!a.baseLayers.concat(a.referenceLayers).some(x))};f.isDeveloperBasemapLayer=x;Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
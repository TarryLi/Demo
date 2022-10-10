/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import t from"../config.js";import r from"../Graphic.js";import s from"../PopupTemplate.js";import o from"../request.js";import i from"../core/Collection.js";import{C as n}from"../chunks/CollectionFlattener.js";import{HandleOwnerMixin as a}from"../core/HandleOwner.js";import{J as l}from"../chunks/jsonMap.js";import{clone as p}from"../core/lang.js";import{a as m,i as u}from"../chunks/maybe.js";import{M as c}from"../chunks/MultiOriginJSONSupport.js";import{throwIfAbortError as y}from"../core/promiseUtils.js";import{watch as d,sync as h}from"../core/reactiveUtils.js";import{urlToObject as f,addQueryParameters as j,Url as b}from"../core/urlUtils.js";import{property as g}from"../core/accessorSupport/decorators/property.js";import{I as x}from"../chunks/ensureType.js";import{r as S}from"../chunks/reader.js";import{subclass as w}from"../core/accessorSupport/decorators/subclass.js";import{w as k}from"../chunks/writer.js";import{a as I}from"../core/JSONSupport.js";import E from"../geometry/Extent.js";import v,{e as N}from"../geometry/SpatialReference.js";import{g as L}from"../chunks/scaleUtils.js";import M from"./Layer.js";import{BlendLayer as U}from"./mixins/BlendLayer.js";import{O as F}from"../chunks/OperationalLayer.js";import{PortalLayer as R}from"./mixins/PortalLayer.js";import{RefreshableLayer as C}from"./mixins/RefreshableLayer.js";import{ScaleRangeLayer as P}from"./mixins/ScaleRangeLayer.js";import{TemporalLayer as A}from"./mixins/TemporalLayer.js";import{i as O}from"../chunks/crsUtils.js";import{d as T}from"../chunks/arcgisLayerUrl.js";import{a as D,u as q}from"../chunks/commonProperties.js";import{E as _}from"../chunks/ExportWMSImageParameters.js";import V from"./support/WMSSublayer.js";import W from"../core/Error.js";import"../chunks/object.js";import"../geometry.js";import"../geometry/Geometry.js";import"../core/Accessor.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../geometry/Multipoint.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../chunks/enumeration.js";import"./support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/common.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils2.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils3.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../chunks/aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../kernel.js";import"../core/Loadable.js";import"../core/Promise.js";import"../chunks/locale.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../core/Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../chunks/Thumbnail.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../chunks/number2.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"../chunks/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../core/Handles.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";import"../chunks/jsonUtils.js";import"../chunks/parser2.js";import"../chunks/mat4f32.js";import"../chunks/mat4.js";import"../chunks/_commonjsHelpers.js";import"../chunks/asyncUtils.js";import"../portal/PortalItem.js";import"../chunks/assets.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../TimeInterval.js";import"./support/TimeInfo.js";import"./support/TimeReference.js";import"../support/timeUtils.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";const B={84:4326,83:4269,27:4267};function $(e){if(!e)return null;const t={idCounter:-1};"string"==typeof e&&(e=(new DOMParser).parseFromString(e,"text/xml"));const r=e.documentElement;if("ServiceExceptionReport"===r.nodeName){const e=Array.prototype.slice.call(r.childNodes).map((e=>e.textContent)).join("\r\n");throw new W("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",e)}const s=J("Capability",r),o=J("Service",r),i=J("Request",s);if(!s||!o||!i)return null;const n=J("Layer",s);if(!n)return null;const a="WMS_Capabilities"===r.nodeName||"WMT_MS_Capabilities"===r.nodeName?r.getAttribute("version"):"1.3.0",l=z("Title",o,"")||z("Name",o,""),p=z("AccessConstraints",o,""),m=/^none$/i.test(p)?"":p,u=z("Abstract",o,""),c=parseInt(z("MaxWidth",o,"5000"),10),y=parseInt(z("MaxHeight",o,"5000"),10),d=Z(i,"GetMap"),h=K(i,"GetMap"),f=te(n,a,t);let j,b,g,x=0;if(Array.prototype.slice.call(s.childNodes).forEach((e=>{"Layer"===e.nodeName&&(0===x?j=e:1===x?(f.name&&(f.name="",f.sublayers.push(te(j,a,t))),f.sublayers.push(te(e,a,t))):f.sublayers.push(te(e,a,t)),x++)})),!f)return null;const S=f.fullExtents;if(b=f.sublayers,b||(b=[]),0===b.length&&b.push(f),g=f.extent,!g){const e=new E(b[0].extent);f.extent=e.toJSON(),g=f.extent}const w=f.spatialReferences.length>0?f.spatialReferences:G(f),k=K(i,"GetFeatureInfo");let I;if(k){const e=Z(i,"GetFeatureInfo");e.includes("text/html")?I="text/html":e.includes("text/plain")&&(I="text/plain")}if(!I){const e=t=>{t&&(t.queryable=!1,t.sublayers&&t.sublayers.forEach((t=>{e(t)})))};e(f)}const v=H(b),N=f.minScale||0,L=f.maxScale||0,M=f.dimensions,U=v.reduce(((e,t)=>e.concat(t.dimensions)),[]),F=M.concat(U).filter(se);let R=null;if(F.length>0){let e=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;F.forEach((r=>{const{extent:s}=r;var o;o=s,Array.isArray(o)&&o.length>0&&o[0]instanceof Date?s.forEach((r=>{e=Math.min(e,r.getTime()),t=Math.max(t,r.getTime())})):s.forEach((r=>{e=Math.min(e,r.min.getTime()),t=Math.max(t,r.max.getTime())}))})),R={startTimeField:null,endTimeField:null,trackIdField:null,timeExtent:[e,t]}}return{copyright:m,description:u,dimensions:M,extent:g,fullExtents:S,featureInfoFormat:I,featureInfoUrl:k,mapUrl:h,maxWidth:c,maxHeight:y,maxScale:L,minScale:N,layers:v,spatialReferences:w,supportedImageFormatTypes:d,timeInfo:R,title:l,version:a}}function G(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers)for(const t of e.sublayers){const e=G(t);if(e.length>0)return e}return[]}function H(e){let t=[];return e.forEach((e=>{t.push(e),e.sublayers&&e.sublayers.length&&(t=t.concat(H(e.sublayers)),delete e.sublayers)})),t}function X(e,t,r){return t.getAttribute(e)??r}function J(e,t){for(let r=0;r<t.childNodes.length;r++){const s=t.childNodes[r];if(re(s)&&s.nodeName===e)return s}return null}function Q(e,t){const r=[];for(let s=0;s<t.childNodes.length;s++){const o=t.childNodes[s];re(o)&&o.nodeName===e&&r.push(o)}return r}function z(e,t,r){const s=J(e,t);return s?s.textContent:r}function Y(e,t,r){if(!e)return null;const s=parseFloat(e.getAttribute("minx")),o=parseFloat(e.getAttribute("miny")),i=parseFloat(e.getAttribute("maxx")),n=parseFloat(e.getAttribute("maxy"));let a,l,p,m;r?(a=isNaN(o)?-Number.MAX_VALUE:o,l=isNaN(s)?-Number.MAX_VALUE:s,p=isNaN(n)?Number.MAX_VALUE:n,m=isNaN(i)?Number.MAX_VALUE:i):(a=isNaN(s)?-Number.MAX_VALUE:s,l=isNaN(o)?-Number.MAX_VALUE:o,p=isNaN(i)?Number.MAX_VALUE:i,m=isNaN(n)?Number.MAX_VALUE:n);const u=new v({wkid:t});return new E({xmin:a,ymin:l,xmax:p,ymax:m,spatialReference:u})}function K(e,t){const r=J(t,e);if(r){const e=J("DCPType",r);if(e){const t=J("HTTP",e);if(t){const e=J("Get",t);if(e){let t=function(e,t,r,s){const o=J("OnlineResource",r);return o?X("xlink:href",o,null):null}(0,0,e);if(t)return t.indexOf("&")===t.length-1&&(t=t.substring(0,t.length-1)),function(e,t){const r=[],s=f(e);for(const e in s.query)s.query.hasOwnProperty(e)&&(t.includes(e.toLowerCase())||r.push(e+"="+s.query[e]));return s.path+(r.length?"?"+r.join("&"):"")}(t,["service","request"])}}}}return null}function Z(e,t){const r=Q("Operation",e);if(0===r.length)return Q("Format",J(t,e)).map((e=>e.textContent));const s=[];return r.forEach((e=>{e.getAttribute("name")===t&&Q("Format",e).forEach((e=>{s.push(e.textContent)}))})),s}function ee(e,t,r){const s=J(t,e);if(!s)return r;const{textContent:o}=s;if(null==o||""===o)return r;const i=Number(o);return isNaN(i)?r:i}function te(e,t,r){if(!e)return null;const s={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},o=J("LatLonBoundingBox",e),i=J("EX_GeographicBoundingBox",e);let n=null;o&&(n=Y(o,4326)),i&&(n=new E(0,0,0,0,new v({wkid:4326})),n.xmin=parseFloat(z("westBoundLongitude",i,"0")),n.ymin=parseFloat(z("southBoundLatitude",i,"0")),n.xmax=parseFloat(z("eastBoundLongitude",i,"0")),n.ymax=parseFloat(z("northBoundLatitude",i,"0"))),o||i||(n=new E(-180,-90,180,90,new v({wkid:4326}))),s.minScale=ee(e,"MaxScaleDenominator",0),s.maxScale=ee(e,"MinScaleDenominator",0);const a=["1.0.0","1.1.0","1.1.1"].includes(t)?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach((e=>{if("Name"===e.nodeName)s.name=e.textContent||"";else if("Title"===e.nodeName)s.title=e.textContent||"";else if("Abstract"===e.nodeName)s.description=e.textContent||"";else if("BoundingBox"===e.nodeName){const r=e.getAttribute(a);if(r&&0===r.indexOf("EPSG:")){const s=parseInt(r.substring(5),10);0===s||isNaN(s)||n||(n="1.3.0"===t?Y(e,s,O(s)):Y(e,s))}const o=r&&r.indexOf(":");if(o&&o>-1){let i=parseInt(r.substring(o+1,r.length),10);0===i||isNaN(i)||(i=B[i]?B[i]:i);const n="1.3.0"===t?Y(e,i,O(i)):Y(e,i);s.fullExtents.push(n)}}else if(e.nodeName===a)e.textContent.split(" ").forEach((e=>{const t=e.includes(":")?parseInt(e.split(":")[1],10):parseInt(e,10);if(0!==t&&!isNaN(t)){const e=B[t]?B[t]:t;s.spatialReferences.includes(e)||s.spatialReferences.push(e)}}));else if("Style"!==e.nodeName||s.legendURL){if("Layer"===e.nodeName){const o=te(e,t,r);o&&(o.parentLayerId=s.id,s.sublayers||(s.sublayers=[]),s.sublayers.push(o))}}else{const t=J("LegendURL",e);if(t){const e=J("OnlineResource",t);e&&(s.legendURL=e.getAttribute("xlink:href"))}}})),s.extent=n?.toJSON(),s.dimensions=Q("Dimension",e).filter((e=>e.getAttribute("name")&&e.getAttribute("units")&&e.textContent)).map((e=>{const t=e.getAttribute("name"),r=e.getAttribute("units"),s=e.textContent,o=e.getAttribute("unitSymbol"),i=e.getAttribute("default"),n="0"!==X("default",e,"0"),a="0"!==X("nearestValue",e,"0"),l="0"!==X("current",e,"0");return se({name:t,units:r})?{name:"time",units:"ISO8601",extent:ne(s),default:ne(i),multipleValues:n,nearestValue:a,current:l}:/^elevation$/i.test((p={name:t,units:r}).name)&&/^(epsg|crs):\d+$/i.test(p.units)?{name:"elevation",units:r,extent:oe(s),unitSymbol:o,default:oe(i),multipleValues:n,nearestValue:a}:{name:t,units:r,extent:ie(s),unitSymbol:o,default:ie(i),multipleValues:n,nearestValue:a};var p})),s}function re(e){return e.nodeType===Node.ELEMENT_NODE}function se(e){return/^time$/i.test(e.name)&&/^iso8601$/i.test(e.units)}function oe(e){if(!e)return null;const t=e.includes("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:parseFloat(t[0]),max:parseFloat(t[1]),resolution:t.length>=3&&"0"!==t[2]?parseFloat(t[2]):void 0}})).filter((e=>e)):r.map((e=>parseFloat(e)))}function ie(e){if(!e)return null;const t=e.includes("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:t[0],max:t[1],resolution:t.length>=3&&"0"!==t[2]?t[2]:void 0}})).filter((e=>e)):r}function ne(e){if(!e)return null;const t=e.includes("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:new Date(t[0]),max:new Date(t[1]),resolution:t.length>=3&&"0"!==t[2]?function(e){const t=e.match(/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i);return t?{years:ae(t[1]),months:ae(t[2]),days:ae(t[3]),hours:ae(t[4]),minutes:ae(t[5]),seconds:ae(t[6])}:null}(t[2]):void 0}})).filter((e=>e)):r.map((e=>new Date(e)))}function ae(e){if(!e)return 0;const t=e.match(/(?:\d+(?:.|,)\d+|\d+)/);if(!t)return 0;const r=t[0].replace(",",".");return Number(r)}function le(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const pe=new Set([102100,3857,102113,900913]),me=new Set([3395,54004]),ue=new l({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});let ce=class extends(a(U(A(C(P(F(R(c(M))))))))){constructor(...e){super(...e),this.allSublayers=new n({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormat=null,this.featureInfoUrl=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.url=null,this.version=null;const t="wms-sublayer";this.own(d((()=>this.sublayers),((e,r)=>{if(r){for(const e of r)e.layer=null;this.handles.remove(t)}if(e){for(const t of e)t.parent=this,t.layer=this;this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))],t)}}),h))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=u(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(y).then((()=>this._fetchService(t)))),Promise.resolve(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return new E({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]})}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("image/png")?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new v(t.spatialReferences[0])}writeSpatialReferences(e,t){const r=this.spatialReference&&this.spatialReference.wkid;e&&r?(t.spatialReferences=e.filter((e=>e!==r)),t.spatialReferences.unshift(r)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return ye(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return ye(t.layers,r)}writeSublayers(e,t,r,s){t.layers=[];const o=new Map,i=e.flatten((({sublayers:e})=>e&&e.toArray())).toArray();i.forEach((e=>{"number"==typeof e.parent.id&&(o.has(e.parent.id)?o.get(e.parent.id).push(e.id):o.set(e.parent.id,[e.id]))})),i.forEach((e=>{const r={sublayer:e,...s},i=e.write({parentLayerId:"number"==typeof e.parent.id?e.parent.id:-1},r);if(o.has(e.id)&&(i.sublayerIds=o.get(e.id)),!e.sublayers&&e.name){const s=e.write({},r);delete s.id,t.layers.push(s)}})),t.visibleLayers=i.filter((e=>e.visible&&!e.sublayers)).map((e=>e.name))}createExportImageParameters(e,t,r,s){const o=s&&s.pixelRatio||1,i=L({extent:e,width:t})*o,n=new _({layer:this,scale:i}),{xmin:a,ymin:l,xmax:p,ymax:u,spatialReference:c}=e,y=function(e,t){let r=e.wkid;return m(t)?r:(!t.includes(r)&&e.latestWkid&&(r=e.latestWkid),pe.has(r)?t.find((e=>pe.has(e)))||t.find((e=>me.has(e)))||102100:r)}(c,this.spatialReferences),d="1.3.0"===this.version&&O(y)?`${l},${a},${u},${p}`:`${a},${l},${p},${u}`,h=n.toJSON();return{bbox:d,["1.3.0"===this.version?"crs":"srs"]:isNaN(y)?void 0:"EPSG:"+y,...h}}async fetchImage(e,t,r,s){const i=this.mapUrl,n=this.createExportImageParameters(e,t,r,s);if(!n.layers){const e=document.createElement("canvas");return e.width=t,e.height=r,e}const a=s?.timeExtent?.start,l=s?.timeExtent?.end,p=u(a)&&u(l)?a.getTime()===l.getTime()?le(a):`${le(a)}/${le(l)}`:void 0,m={responseType:"image",query:this._mixCustomParameters({width:t,height:r,...n,time:p,...this.refreshParameters}),signal:s?.signal};return o(i,m).then((e=>e.data))}fetchFeatureInfo(e,t,o,i,n){const a=L({extent:e,width:t}),l=(p=new _({layer:this,scale:a}).visibleSublayers).length?p.filter((e=>e.popupEnabled&&e.name&&e.queryable)).map((e=>e.name)).join(","):"";var p;if(!this.featureInfoUrl||!l)return null;const m="1.3.0"===this.version?{I:i,J:n}:{x:i,y:n},u={query_layers:l,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:o,...m},c={...this.createExportImageParameters(e,t,o),...u},y=this._mixCustomParameters(c),d=j(this.featureInfoUrl,y),h=document.createElement("iframe");h.src=d,h.style.border="none",h.style.margin="0",h.style.width="100%",h.setAttribute("sandbox","");const f=new s({title:this.title,content:h});return new r({sourceLayer:this,popupTemplate:f})}findSublayerById(e){return this.allSublayers.find((t=>t.id===e))}findSublayerByName(e){return this.allSublayers.find((t=>t.name===e))}serviceSupportsSpatialReference(e){return T(this.url)||this.spatialReferences.some((t=>{const r=900913===t?v.WebMercator:new v({wkid:t});return N(r,e)}))}async _fetchService(e){if(!this.resourceInfo){this.parsedUrl.query&&this.parsedUrl.query.service&&(this.parsedUrl.query.SERVICE=this.parsedUrl.query.service,delete this.parsedUrl.query.service),this.parsedUrl.query&&this.parsedUrl.query.request&&(this.parsedUrl.query.REQUEST=this.parsedUrl.query.request,delete this.parsedUrl.query.request);const t=await o(this.parsedUrl.path,{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...this.parsedUrl.query,...this.customParameters},responseType:"xml",signal:e});this.resourceInfo=$(t.data)}if(this.parsedUrl){const e=new b(this.parsedUrl.path);"https"!==e.scheme||e.port&&"443"!==e.port||t.request.httpsDomains.includes(e.host)||t.request.httpsDomains.push(e.host)}this.read(this.resourceInfo,{origin:"service"})}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t={...this.customParameters,...this.customLayerParameters};for(const r in t)e[r.toLowerCase()]=t[r];return e}};function ye(e,t,r){const s=new Map;e.every((e=>null==e.id))&&(e=p(e)).forEach(((e,t)=>e.id=t));for(const o of e){const e=new V;e.read(o,t),-1===r?.indexOf(e.name)&&(e.visible=!1),s.set(e.id,e)}const o=[];for(const t of e){const e=s.get(t.id);if(null!=t.parentLayerId&&t.parentLayerId>=0){const r=s.get(t.parentLayerId);r.sublayers||(r.sublayers=new i),r.sublayers.unshift(e)}else o.unshift(e)}return o}e([g({readOnly:!0})],ce.prototype,"allSublayers",void 0),e([g({json:{type:Object,write:!0}})],ce.prototype,"customParameters",void 0),e([g({json:{type:Object,write:!0}})],ce.prototype,"customLayerParameters",void 0),e([g({type:String,json:{write:!0}})],ce.prototype,"copyright",void 0),e([g()],ce.prototype,"description",void 0),e([g({readOnly:!0})],ce.prototype,"dimensions",void 0),e([g({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],ce.prototype,"fullExtent",void 0),e([S(["web-document","portal-item"],"fullExtent",["extent"])],ce.prototype,"readFullExtentFromItemOrMap",null),e([k(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],ce.prototype,"writeFullExtent",null),e([g()],ce.prototype,"fullExtents",void 0),e([g({type:String,json:{write:{ignoreOrigin:!0}}})],ce.prototype,"featureInfoFormat",void 0),e([g({type:String,json:{write:{ignoreOrigin:!0}}})],ce.prototype,"featureInfoUrl",void 0),e([g({type:String,json:{origins:{"web-document":{default:"image/png",type:ue.jsonValues,read:{reader:ue.read,source:"format"},write:{writer:ue.write,target:"format"}}}}})],ce.prototype,"imageFormat",void 0),e([S("imageFormat",["supportedImageFormatTypes"])],ce.prototype,"readImageFormat",null),e([g({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],ce.prototype,"imageMaxHeight",void 0),e([g({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],ce.prototype,"imageMaxWidth",void 0),e([g()],ce.prototype,"imageTransparency",void 0),e([g(D)],ce.prototype,"legendEnabled",void 0),e([g({type:["show","hide","hide-children"]})],ce.prototype,"listMode",void 0),e([g({type:String,json:{write:{ignoreOrigin:!0}}})],ce.prototype,"mapUrl",void 0),e([g({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],ce.prototype,"isReference",void 0),e([g({type:["WMS"]})],ce.prototype,"operationalLayerType",void 0),e([g()],ce.prototype,"resourceInfo",void 0),e([g({type:v,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],ce.prototype,"spatialReference",void 0),e([S(["web-document","portal-item"],"spatialReference",["spatialReferences"])],ce.prototype,"readSpatialReferenceFromItemOrDocument",null),e([g({type:[x],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],ce.prototype,"spatialReferences",void 0),e([k(["web-document","portal-item"],"spatialReferences")],ce.prototype,"writeSpatialReferences",null),e([g({type:i.ofType(V),json:{write:{target:"layers",overridePolicy(e,t,r){if(function(e,t){return e.some((e=>{for(const r in e)if(I(e,r,null,t))return!0;return!1}))}(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],ce.prototype,"sublayers",void 0),e([S(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],ce.prototype,"readSublayersFromItemOrMap",null),e([S("service","sublayers",["layers"])],ce.prototype,"readSublayers",null),e([k("sublayers",{layers:{type:[V]},visibleLayers:{type:[String]}})],ce.prototype,"writeSublayers",null),e([g({json:{read:!1},readOnly:!0,value:"wms"})],ce.prototype,"type",void 0),e([g(q)],ce.prototype,"url",void 0),e([g({type:String,json:{write:{ignoreOrigin:!0}}})],ce.prototype,"version",void 0),ce=e([w("esri.layers.WMSLayer")],ce);const de=ce;export{de as default};
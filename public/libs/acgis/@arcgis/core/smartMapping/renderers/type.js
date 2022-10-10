/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"../../renderers/PointCloudClassBreaksRenderer.js";import"../../renderers/PointCloudRenderer.js";import"../../renderers/PointCloudRGBRenderer.js";import"../../renderers/PointCloudStretchRenderer.js";import s from"../../renderers/PointCloudUniqueValueRenderer.js";import"../../renderers/ClassBreaksRenderer.js";import"../../renderers/DictionaryRenderer.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/PieChartRenderer.js";import"../../renderers/Renderer.js";import"../../renderers/SimpleRenderer.js";import e from"../../renderers/UniqueValueRenderer.js";import"../../renderers/support/jsonUtils.js";import o from"../../core/Error.js";import{clone as r}from"../../core/lang.js";import{i as t}from"../../chunks/maybe.js";import{f as i}from"../../chunks/messages.js";import{L as p}from"../../chunks/LegendOptions.js";import{a as n,b as l}from"../../chunks/utils13.js";import{o as m,h as a,v as u,j as c,b as j,p as y,q as d,n as h,d as b}from"../../chunks/utils14.js";import k from"../heuristics/sizeRange.js";import f from"../statistics/uniqueValues.js";import{a as g}from"../../chunks/utils10.js";import{c as S,f as v,g as w,L as U}from"../../chunks/layerUtils2.js";import{cloneScheme as I,getSchemes as T}from"../symbology/type.js";import"../../chunks/tslib.es6.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/ensureType.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/tracking.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/common.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../chunks/PointSizeSplatAlgorithm.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../chunks/writer.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../chunks/reader.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils3.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/aaBoundingRect.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../chunks/locale.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../core/Clonable.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../chunks/Thumbnail.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../renderers/mixins/VisualVariablesMixin.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number2.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../support/actions/ActionBase.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties2.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/symbolConversion.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../chunks/colorRamps.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";import"../../chunks/DictionaryLoader.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/support/HeatmapColorStop.js";import"../../chunks/heatmapUtils.js";import"../../chunks/vec4f64.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/styleUtils2.js";import"../../chunks/numberUtils.js";import"../../intl.js";import"../../chunks/assets.js";import"../../chunks/utils6.js";import"../../chunks/asyncUtils.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser2.js";import"../../chunks/mat4f32.js";import"../../chunks/mat4.js";import"../../chunks/_commonjsHelpers.js";import"../../chunks/ItemCache.js";import"../../symbols/support/cimSymbolUtils.js";import"../../chunks/utils7.js";import"../../chunks/scaleUtils.js";import"../../chunks/spatialStatistics.js";import"../statistics/classBreaks.js";import"../../chunks/statsWorker.js";import"../../chunks/quantizationUtils.js";import"../../chunks/utils11.js";import"../../chunks/generateRendererUtils.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../chunks/loadAll.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/writeUtils.js";import"../../chunks/layerUtils.js";import"../../core/workers/workers.js";import"../../core/workers/Connection.js";import"../../chunks/Queue.js";import"../../core/workers/RemoteClient.js";import"../../core/reactiveUtils.js";import"../../chunks/arcgisLayerUrl.js";import"../../chunks/fieldType.js";import"../../rest/support/Query.js";import"../../TimeExtent.js";import"../../chunks/timeUtils.js";import"../../chunks/DataLayerSource.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../rest/support/StatisticDefinition.js";import"../statistics/support/predominanceUtils.js";import"../../chunks/QueryTask.js";import"../../chunks/executeQueryJSON.js";import"../../chunks/utils5.js";import"../../chunks/query.js";import"../../geometry/support/normalizeUtils.js";import"../../chunks/normalizeUtilsCommon.js";import"../../chunks/pbfQueryUtils.js";import"../../chunks/pbf.js";import"../../chunks/OptimizedGeometry.js";import"../../chunks/OptimizedFeatureSet.js";import"../../chunks/queryZScale.js";import"../../chunks/zscale.js";import"../../rest/support/FeatureSet.js";import"../../chunks/executeForTopCount.js";import"../../chunks/featureConversionUtils.js";import"../../rest/query/support/AttachmentInfo.js";import"../../rest/support/AttachmentQuery.js";import"../../rest/support/RelationshipQuery.js";import"../../rest/support/TopFeaturesQuery.js";import"../../rest/support/TopFilter.js";import"../../chunks/executeForIds.js";import"../statistics/summaryStatistics.js";import"../../views/support/colorUtils.js";import"../heuristics/scaleRange.js";import"../../chunks/colors2.js";import"../../chunks/symbologyUtils.js";import"../../chunks/utils15.js";async function C(s){let e=s.typeScheme,o=null,r=null;const i=await b(s.basemap,s.view);if(o=t(i.basemapId)?i.basemapId:null,r=t(i.basemapTheme)?i.basemapTheme:null,e)return{scheme:I(e),basemapId:o,basemapTheme:r};const p=T({basemap:o,basemapTheme:r,geometryType:s.geometryType,theme:s.theme,worldScale:s.worldScale,view:s.view});return p&&(e=p.primaryScheme,o=p.basemapId,r=p.basemapTheme),{scheme:e,basemapId:o,basemapTheme:r}}function V(s,e){let o;return o=s.label<e.label?-1:s.label>e.label?1:0,o}function M(s,e){let o;return o=s.value<e.value?-1:s.value>e.value?1:0,o}function x(s,e){let o=e.count-s.count;return 0===o&&(o=V(s,e)),o}function E(s,e){let o=e.count-s.count;return 0===o&&(o=M(s,e)),o}function D(s,e,o){let r;"count"===e?(r=E,o&&o.codedValues&&(r=x)):"value"===e&&(r=M,o&&o.codedValues&&(r=V)),r&&s.sort(r)}async function P(s,e){const o=s.uniqueValueInfos,r=await C({basemap:"gray",theme:"point-cloud-class",geometryType:"point",typeScheme:e}),t=r&&r.scheme,i="point-cloud-class"===t.theme,p=i?t.colors:j(t.colors,o.length);return D(o,"value"),o.map(((s,e)=>{const o=s.value;let r=null;return i?(r=p[o],r||(r=p[p.length-1])):r=p[e],{values:[o],color:r,label:s.label}}))}async function R(s){const a=await async function(s){if(!s||!s.layer||!s.field&&!s.valueExpression)throw new o("type-renderer:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");if(s.valueExpression&&!s.view)throw new o("type-renderer:missing-parameters","View is required when 'valueExpression' is specified");const e={...s};e.symbolType=e.symbolType||"2d",e.numTypes=null==e.numTypes?10:e.numTypes,e.defaultSymbolEnabled=null==e.defaultSymbolEnabled||e.defaultSymbolEnabled,e.sortBy=null==e.sortBy?"count":e.sortBy,e.sortEnabled=null==e.sortEnabled||e.sortEnabled,e.statistics=r(e.statistics);const i=S(e.layer,v);if(e.layer=i,!i)throw new o("type-renderer:invalid-parameters","'layer' must be one of these types: "+w(v).join(", "));const p=t(e.signal)?{signal:e.signal}:null;await i.load(p);const n=i.geometryType;if(e.outlineOptimizationEnabled="polygon"===n&&e.outlineOptimizationEnabled,e.sizeOptimizationEnabled=("point"===n||"multipoint"===n||"polyline"===n)&&e.sizeOptimizationEnabled,"mesh"===n)e.symbolType="3d-volumetric",e.colorMixMode=e.colorMixMode||"replace",e.edgesType=e.edgesType||"none";else{if("3d-volumetric-uniform"===e.symbolType&&"point"!==n)throw new o("type-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(e.symbolType.includes("3d-volumetric")&&(!e.view||"3d"!==e.view.type))throw new o("type-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'")}const l=await g({field:e.field,valueExpression:e.valueExpression}),m=u(i,l,"type-renderer:invalid-parameters");if(m)throw m;return e}(s),{layer:c,view:b,signal:U}=a,T={layer:c,field:a.field,valueExpression:a.valueExpression,returnAllCodedValues:a.returnAllCodedValues,view:b,signal:U},[V,M,x]=await Promise.all([null!=a.statistics?a.statistics:f(T),a.outlineOptimizationEnabled?m({layer:c,view:b,signal:U}):null,a.sizeOptimizationEnabled?k({layer:c,view:b,signal:U}):null]);return async function(s,o,r,t){const m=await i("esri/smartMapping/t9n/smartMapping"),a=s.uniqueValueInfos,u=o.layer,c=o.field,b=c?u.getField(c):null,k=b?u.getFieldDomain(b.name):null,f=-1===o.numTypes?a.length:o.numTypes,g=u.geometryType,S=await C({basemap:o.basemap,geometryType:g,typeScheme:o.typeScheme,worldScale:o.symbolType.includes("3d-volumetric"),view:o.view}),v=S.scheme,w=new e({field:c});let U,T=-1;const V={value:null,domain:k,fieldInfo:b};if(a.forEach(((s,e)=>{V.value=s.value,s.label=n(V),null===s.value&&(T=e)})),T>-1&&(U=a.splice(T,1)[0]),!1!==o.sortEnabled&&D(a,o.sortBy,k),b&&"date"===b.type){const s=a.filter(((s,e)=>e<f)).map((s=>s.value));V.dateFormatInterval=l(s)}const M=r&&r.opacity;let x=j(v.colors,a.length);const E=y(v,g),P=d(v,g,M);a.forEach(((s,e)=>{V.value=s.value,s.label=n(V),s.symbol=h(g,{type:o.symbolType,color:x[e],size:E,outline:P,meshInfo:{colorMixMode:o.colorMixMode,edgesType:o.edgesType}})})),o.valueExpression&&(w.valueExpression=o.valueExpression,w.valueExpressionTitle=o.valueExpressionTitle),o.legendOptions&&(w.legendOptions=new p(o.legendOptions)),x=j(v.colors,f);for(let s=0;s<f;s++){const e=a[s];e&&w.addUniqueValueInfo({value:e.value,label:e.label,symbol:h(g,{type:o.symbolType,color:x[s],size:E,outline:P,meshInfo:{colorMixMode:o.colorMixMode,edgesType:o.edgesType}})})}o.defaultSymbolEnabled&&(w.defaultSymbol=h(g,{type:o.symbolType,color:v.noDataColor,size:E,outline:P,meshInfo:{colorMixMode:o.colorMixMode,edgesType:o.edgesType}}),w.defaultLabel=m.other),U&&(U.symbol=h(g,{type:o.symbolType,color:v.noDataColor,size:E,outline:P,meshInfo:{colorMixMode:o.colorMixMode,edgesType:o.edgesType}}),a.push(U));const R=[],z=w.uniqueValueInfos.length===a.length?-1:w.uniqueValueInfos.length;if(z>-1)for(let s=z;s<a.length;s++)R.push({...a[s]});return r&&r.visualVariables&&r.visualVariables.length&&(w.visualVariables=r.visualVariables.map((s=>s.clone()))),t&&t.minSize&&(w.visualVariables?w.visualVariables.push(t.minSize):w.visualVariables=[t.minSize]),{renderer:w,uniqueValueInfos:a,excludedUniqueValueInfos:R,typeScheme:I(v),basemapId:S.basemapId,basemapTheme:S.basemapTheme}}(V,a,M,x)}async function z(e){const i=await async function(s){if(!(s&&s.layer&&s.field))throw new o("type-point-cloud-class-renderer:missing-parameters","'layer' and 'field' parameters are required");const e={...s};e.statistics=r(e.statistics);const i=[U.PointCloudLayer],p=S(e.layer,i);if(e.layer=p,e.density=e.density||25,e.size=e.size||"100%",!c(e.size))throw new o("type-point-cloud-class-renderer:invalid-parameters","Invalid 'size' parameter. It should be a string of the form '100%'");if(!p)throw new o("type-point-cloud-class-renderer:invalid-parameters","'layer' must be one of these types: "+w(i).join(", "));const n=t(e.signal)?{signal:e.signal}:null;await p.load(n);const l=await g({field:e.field}),m=u(p,l,"type-point-cloud-class-renderer:invalid-parameters");if(m)throw m;return e}(e),p=null!=i.statistics?i.statistics:await f({layer:i.layer,field:i.field,signal:i.signal});return{renderer:new s({field:i.field,pointsPerInch:i.density,pointSizeAlgorithm:a(i.size),colorUniqueValueInfos:await P(p,i.typeScheme)})}}export{z as createPCClassRenderer,R as createRenderer};

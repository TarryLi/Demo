/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import"../geometry.js";import r from"../PopupTemplate.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/DictionaryRenderer.js";import"../renderers/DotDensityRenderer.js";import"../renderers/HeatmapRenderer.js";import"../renderers/PieChartRenderer.js";import"../renderers/Renderer.js";import t from"../renderers/SimpleRenderer.js";import o from"../renderers/UniqueValueRenderer.js";import{read as s,r as i,w as p}from"../renderers/support/jsonUtils.js";import n from"../request.js";import{symbolTypesRenderer as m}from"../symbols.js";import l from"../core/Error.js";import{L as a}from"../chunks/Logger.js";import{i as u}from"../chunks/maybe.js";import{M as c}from"../chunks/MultiOriginJSONSupport.js";import{throwIfAbortError as d}from"../core/promiseUtils.js";import{property as j}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import{I as y}from"../chunks/ensureType.js";import{r as h}from"../chunks/reader.js";import{subclass as f,c as b}from"../core/accessorSupport/decorators/subclass.js";import{f as g}from"../chunks/typeUtils.js";import k from"./Layer.js";import{A as S}from"../chunks/ArcGISService.js";import{BlendLayer as v}from"./mixins/BlendLayer.js";import{CustomParametersMixin as I}from"./mixins/CustomParametersMixin.js";import{FeatureEffectLayer as w}from"./mixins/FeatureEffectLayer.js";import{O as U}from"../chunks/OperationalLayer.js";import{PortalLayer as x}from"./mixins/PortalLayer.js";import{RefreshableLayer as R}from"./mixins/RefreshableLayer.js";import{ScaleRangeLayer as D}from"./mixins/ScaleRangeLayer.js";import{TemporalLayer as L}from"./mixins/TemporalLayer.js";import{l as C,a as P,b as F,m as T,p as O,s as M,u as V}from"../chunks/commonProperties.js";import{f as E}from"../chunks/featureReductionUtils.js";import{d as A}from"../chunks/fieldProperties.js";import{fixRendererFields as N,fixTimeInfoFields as _}from"./support/fieldUtils.js";import B from"./support/LabelClass.js";import{r as J}from"../chunks/labelingInfo.js";import{JSONSupport as G}from"../core/JSONSupport.js";import{l as z}from"../chunks/styleUtils.js";import q from"../rest/support/Query.js";import{createPopupTemplate as W}from"../support/popupUtils.js";import{E as Q}from"../chunks/ElevationInfo.js";import H from"../geometry/SpatialReference.js";import K from"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/Accessor.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/writer.js";import"../geometry/Multipoint.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../geometry/support/jsonUtils.js";import"../chunks/jsonMap.js";import"../core/Collection.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../chunks/number2.js";import"../chunks/locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"../chunks/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../chunks/arcadeOnDemand.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/common.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../chunks/opacityUtils.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../chunks/screenUtils.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../Graphic.js";import"../core/Clonable.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils2.js";import"../symbols/edges/Edges3D.js";import"../chunks/materialUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils3.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../chunks/aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../core/urlUtils.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../kernel.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../chunks/Thumbnail.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties2.js";import"../symbols/support/jsonUtils.js";import"../chunks/symbolConversion.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../chunks/DictionaryLoader.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/support/HeatmapColorStop.js";import"../chunks/heatmapUtils.js";import"../chunks/vec4f64.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils2.js";import"../chunks/arcgisLayerUrl.js";import"../chunks/jsonUtils.js";import"../chunks/parser2.js";import"../chunks/mat4f32.js";import"../chunks/mat4.js";import"../chunks/_commonjsHelpers.js";import"./support/FeatureEffect.js";import"./support/FeatureFilter.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../chunks/DataLayerSource.js";import"./support/Field.js";import"../chunks/domains.js";import"./support/CodedValueDomain.js";import"./support/Domain.js";import"./support/InheritedDomain.js";import"./support/RangeDomain.js";import"../chunks/fieldType.js";import"../rest/support/StatisticDefinition.js";import"../chunks/asyncUtils.js";import"../portal/PortalItem.js";import"../chunks/assets.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../TimeInterval.js";import"./support/TimeInfo.js";import"./support/TimeReference.js";import"../support/timeUtils.js";import"../chunks/FeatureReduction.js";import"./support/FeatureReductionBinning.js";import"./support/AggregateField.js";import"./support/OutStatistic.js";import"../chunks/unitConversionUtils.js";import"../chunks/labelUtils.js";import"../chunks/defaultsJSON.js";import"./support/FeatureReductionCluster.js";import"./support/FeatureReductionSelection.js";import"./support/FieldsIndex.js";var X;let Y=X=class extends G{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new X({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};e([j({type:Number,json:{write:!0}})],Y.prototype,"age",void 0),e([j({type:Number,json:{write:!0}})],Y.prototype,"ageReceived",void 0),e([j({type:Number,json:{write:!0}})],Y.prototype,"displayCount",void 0),e([j({type:Number,json:{write:!0}})],Y.prototype,"maxObservations",void 0),Y=X=e([f("esri.layers.support.PurgeOptions")],Y);const Z=Y,$=a.getLogger("esri.layers.StreamLayer"),ee=A();let re=class extends(w(v(L(D(R(S(U(x(c(I(k))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new Z,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=H.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new l("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const r=u(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(d).then((()=>this._fetchService(r)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){N(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,r,i){const p=(r=r.layerDefinition||r).drawingInfo&&r.drawingInfo.renderer||void 0;if(p){const e=s(p,r,i)||void 0;return e||$.error("Failed to create renderer",{rendererDefinition:r.drawingInfo.renderer,layer:this,context:i}),e}if(r.defaultSymbol)return r.types&&r.types.length?new o({defaultSymbol:te(r.defaultSymbol,r,i),field:r.typeIdField,uniqueValueInfos:r.types.map((e=>({id:e.id,symbol:te(e.symbol,e,i)})))}):new t({symbol:te(r.defaultSymbol,r,i)})}createPopupTemplate(e){return W(this,e)}createQuery(){const e=new q;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,r){if(!this.fields)return null;let t=null;return this.fields.some((r=>(r.name===e&&(t=r.domain),!!t))),t}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}async _fetchService(e){if(this.webSocketUrl){if(!this.timeInfo?.trackIdField)throw new l("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new l("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new l("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new l("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else if(!this.sourceJSON){const{data:r}=await n(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=r}return this.sourceJSON={...this.sourceJSON??{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),N(this.renderer,this.fieldsIndex),_(this.timeInfo,this.fieldsIndex),z(this,{origin:"service"})}};e([j({type:String})],re.prototype,"copyright",void 0),e([j({readOnly:!0})],re.prototype,"defaultPopupTemplate",null),e([j({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],re.prototype,"definitionExpression",void 0),e([j({type:String})],re.prototype,"displayField",void 0),e([j({type:Q})],re.prototype,"elevationInfo",void 0),e([j(E)],re.prototype,"featureReduction",void 0),e([j(ee.fields)],re.prototype,"fields",void 0),e([j(ee.fieldsIndex)],re.prototype,"fieldsIndex",void 0),e([j({type:K})],re.prototype,"geometryDefinition",void 0),e([j({type:g.apiValues,json:{read:{reader:g.read}}})],re.prototype,"geometryType",void 0),e([j(C)],re.prototype,"labelsVisible",void 0),e([j({type:[B],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:J},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],re.prototype,"labelingInfo",void 0),e([j(P)],re.prototype,"legendEnabled",void 0),e([j({type:["show","hide"]})],re.prototype,"listMode",void 0),e([j({type:y})],re.prototype,"maxReconnectionAttempts",void 0),e([j({type:y})],re.prototype,"maxReconnectionInterval",void 0),e([j(F)],re.prototype,"maxScale",void 0),e([j(T)],re.prototype,"minScale",void 0),e([j({type:String})],re.prototype,"objectIdField",void 0),e([j({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],re.prototype,"operationalLayerType",void 0),e([j(O)],re.prototype,"popupEnabled",void 0),e([j({type:r,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],re.prototype,"popupTemplate",void 0),e([j({type:Z})],re.prototype,"purgeOptions",void 0),e([j({types:i,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:p,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],re.prototype,"renderer",null),e([h("service","renderer",["drawingInfo.renderer","defaultSymbol"]),h("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],re.prototype,"readRenderer",null),e([j(M)],re.prototype,"screenSizePerspectiveEnabled",void 0),e([j()],re.prototype,"sourceJSON",void 0),e([j({type:H,json:{origins:{service:{read:{source:"spatialReference"}}}}})],re.prototype,"spatialReference",void 0),e([j({json:{read:!1}})],re.prototype,"type",void 0),e([j(V)],re.prototype,"url",void 0),e([j({type:Number})],re.prototype,"updateInterval",void 0),e([j({type:String})],re.prototype,"webSocketUrl",void 0),re=e([f("esri.layers.StreamLayer")],re);const te=b({types:m}),oe=re;export{oe as default};

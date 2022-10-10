/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import"../geometry.js";import t from"../PopupTemplate.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/DictionaryRenderer.js";import"../renderers/DotDensityRenderer.js";import"../renderers/HeatmapRenderer.js";import"../renderers/PieChartRenderer.js";import"../renderers/Renderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import{r as s,w as r}from"../renderers/support/jsonUtils.js";import{M as o}from"../chunks/MultiOriginJSONSupport.js";import{property as i}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import{t as n,f as a}from"../chunks/typeUtils.js";import l from"./Layer.js";import m from"../core/Error.js";import u from"../core/Loadable.js";import{i as c,a as d}from"../chunks/maybe.js";import{q as y,c as j,g as h,a as f,b,d as g,e as S,f as k,h as v}from"../chunks/ogcFeatureUtils.js";import I from"../rest/support/FeatureSet.js";import C from"../geometry/SpatialReference.js";import{APIKeyMixin as D}from"./mixins/APIKeyMixin.js";import{BlendLayer as x}from"./mixins/BlendLayer.js";import{CustomParametersMixin as R}from"./mixins/CustomParametersMixin.js";import{FeatureEffectLayer as F}from"./mixins/FeatureEffectLayer.js";import{O}from"../chunks/OperationalLayer.js";import{OrderedLayer as P}from"./mixins/OrderedLayer.js";import{PortalLayer as U}from"./mixins/PortalLayer.js";import{RefreshableLayer as L}from"./mixins/RefreshableLayer.js";import{ScaleRangeLayer as T}from"./mixins/ScaleRangeLayer.js";import{TemporalLayer as w}from"./mixins/TemporalLayer.js";import{e as E,l as M,a as V,p as A,s as _,u as q}from"../chunks/commonProperties.js";import{f as B}from"../chunks/featureReductionUtils.js";import G from"./support/FeatureType.js";import Q from"./support/Field.js";import{d as z}from"../chunks/fieldProperties.js";import{fixRendererFields as J,fixTimeInfoFields as N}from"./support/fieldUtils.js";import H from"./support/LabelClass.js";import{r as W}from"../chunks/labelingInfo.js";import Z from"../rest/support/Query.js";import{createPopupTemplate as K}from"../support/popupUtils.js";import $ from"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../geometry/Multipoint.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../geometry/support/jsonUtils.js";import"../chunks/jsonMap.js";import"../core/Collection.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../chunks/number2.js";import"../chunks/locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"../chunks/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../chunks/arcadeOnDemand.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/common.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils2.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils3.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../chunks/aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../core/urlUtils.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../kernel.js";import"../request.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../core/Promise.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../core/Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../chunks/Thumbnail.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../Graphic.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties2.js";import"../symbols/support/jsonUtils.js";import"../chunks/symbolConversion.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../chunks/DictionaryLoader.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/support/HeatmapColorStop.js";import"../chunks/heatmapUtils.js";import"../chunks/vec4f64.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils2.js";import"../chunks/featureConversionUtils.js";import"../chunks/OptimizedGeometry.js";import"../chunks/OptimizedFeatureSet.js";import"../chunks/geojson.js";import"../chunks/clientSideDefaults.js";import"../chunks/QueryEngineCapabilities.js";import"../chunks/defaultsJSON.js";import"./support/FieldsIndex.js";import"../chunks/fieldType.js";import"../chunks/domains.js";import"./support/CodedValueDomain.js";import"./support/Domain.js";import"./support/InheritedDomain.js";import"./support/RangeDomain.js";import"../chunks/jsonUtils.js";import"../chunks/parser2.js";import"../chunks/mat4f32.js";import"../chunks/mat4.js";import"../chunks/_commonjsHelpers.js";import"./support/FeatureEffect.js";import"./support/FeatureFilter.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../chunks/DataLayerSource.js";import"../rest/support/StatisticDefinition.js";import"../chunks/asyncUtils.js";import"../portal/PortalItem.js";import"../chunks/assets.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../TimeInterval.js";import"./support/TimeInfo.js";import"./support/TimeReference.js";import"../support/timeUtils.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../chunks/FeatureReduction.js";import"./support/FeatureReductionBinning.js";import"./support/AggregateField.js";import"./support/OutStatistic.js";import"../chunks/labelUtils.js";import"./support/FeatureReductionCluster.js";import"./support/FeatureReductionSelection.js";import"./support/FeatureTemplate.js";let X=class extends u{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getFeatureDefinition(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:s,supportedCrs:r},layer:{apiKey:o,capabilities:i,customParameters:p}}=this;return{capabilities:i,collection:e,layerDefinition:t,queryParameters:{apiKey:o,customParameters:p},spatialReference:s,supportedCrs:r}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then((e=>I.fromJSON(e)))}queryFeaturesJSON(e,t={}){const s=this.getFeatureDefinition();return this.load(t).then((()=>y(s,e,t)))}queryObjectIds(e,t={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator&&!this.featureDefinition.supportedCrs[e.wkid])}_conformsToType(e,t){const s=new RegExp(`^${t}$`,"i");return e.conformsTo.some((e=>s.test(e)))??!1}_getCapabilities(e,t){const s=c(t)?t.components?.parameters:null;return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:s?.limit?.schema?.maximum??s?.limitFeatures?.schema?.maximum??5e3,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}_getExtent(e){const t=e.extent?.spatial;if(!t)return null;const s=t.bbox[0],r=4===s.length,o=s[0],i=s[1],p=r?void 0:s[2];return{xmin:o,ymin:i,xmax:r?s[2]:s[3],ymax:r?s[3]:s[4],zmin:p,zmax:r?void 0:s[5],spatialReference:C.WGS84.toJSON()}}_getStorageSpatialReference(e){const t=e.storageCrs??j,s=h(t);return d(s)?C.WGS84:new C({wkid:s})}_getSupportedSpatialReferences(e,t){const s="#/crs",r=e.crs??[j],o=r.includes(s)?r.filter((e=>e!==s)).concat(t.crs):r,i=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return o.filter((e=>!i.test(e)))}async _loadOGCServices(e,t){const s=c(t)?t.signal:null,{apiKey:r,collectionId:o,customParameters:i,fields:p,geometryType:a,hasZ:l,objectIdField:u,timeInfo:d,url:y}=e,j={fields:p?.map((e=>e.toJSON())),geometryType:n.toJSON(a),hasZ:l,objectIdField:u,timeInfo:d?.toJSON()},I={apiKey:r,customParameters:i,signal:s},C=await f(y,I),[D,x]=await Promise.all([b(C,I),g(C,I)]);if(!this._conformsToType(D,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new m("ogc-feature-layer:no-geojson-support","Server does not support geojson");const R=x.collections.find((e=>e.id===o));if(!R)throw new m("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const F=this._conformsToType(D,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await S(C,I):null,O=await k(R,j,I),P=this._getCapabilities(O.hasZ,F),U=this._getExtent(R),L=this._getStorageSpatialReference(R).toJSON(),T=this._getSupportedSpatialReferences(R,x),w=new RegExp(`^${v}`,"i"),E={};for(const e of T){const t=h(e);c(t)&&(E[t]||(E[t]=e.replace(w,"")))}O.extent=U,this.featureDefinition={capabilities:P,collection:R,layerDefinition:O,queryParameters:{},spatialReference:L,supportedCrs:E}}};e([i()],X.prototype,"featureDefinition",void 0),e([i({constructOnly:!0})],X.prototype,"layer",void 0),e([i()],X.prototype,"type",void 0),X=e([p("esri.layers.graphics.sources.OGCFeatureSource")],X);const Y=z();let ee=class extends(D(R(F(x(P(w(T(O(U(L(o(l)))))))))))){constructor(e){super(e),this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new X({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){this.source?.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then((()=>this._fetchService(e)))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}set renderer(e){J(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return K(this,e)}createQuery(){return new Z}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){let s,r=!1;const o=t?.feature?.attributes,i=this.typeIdField&&o?.[this.typeIdField];return null!=i&&this.types&&(r=this.types.some((t=>t.id==i&&(s=t.domains?.[e],"inherited"===s?.type&&(s=this._getLayerDomain(e)),!0)))),r||s||(s=this._getLayerDomain(e)),s}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(Z.from(e)||this.createQuery(),t))).then((e=>(e?.features?.forEach((e=>{e.layer=e.sourceLayer=this})),e)))}serviceSupportsSpatialReference(e){return this.source?.serviceSupportsSpatialReference(e)??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),J(this.renderer,this.fieldsIndex),N(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};e([i({readOnly:!0,json:{origins:{service:{read:!0}}}})],ee.prototype,"capabilities",void 0),e([i({type:String,json:{write:!0}})],ee.prototype,"collectionId",void 0),e([i({type:String})],ee.prototype,"copyright",void 0),e([i({readOnly:!0})],ee.prototype,"defaultPopupTemplate",null),e([i({type:String})],ee.prototype,"definitionExpression",void 0),e([i({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],ee.prototype,"description",void 0),e([i({type:String})],ee.prototype,"displayField",void 0),e([i(E)],ee.prototype,"elevationInfo",void 0),e([i(B)],ee.prototype,"featureReduction",void 0),e([i({type:[Q],json:{origins:{service:{name:"layerDefinition.fields"}}}})],ee.prototype,"fields",void 0),e([i(Y.fieldsIndex)],ee.prototype,"fieldsIndex",void 0),e([i({readOnly:!0,type:$,json:{origins:{service:{name:"layerDefinition.extent"}}}})],ee.prototype,"fullExtent",void 0),e([i({type:a.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:a.read}}}}})],ee.prototype,"geometryType",void 0),e([i({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],ee.prototype,"hasZ",void 0),e([i({type:Boolean,readOnly:!0})],ee.prototype,"isTable",null),e([i({type:[H],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:W},write:!0}}}})],ee.prototype,"labelingInfo",void 0),e([i(M)],ee.prototype,"labelsVisible",void 0),e([i(V)],ee.prototype,"legendEnabled",void 0),e([i({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],ee.prototype,"objectIdField",void 0),e([i({type:["OGCFeatureLayer"]})],ee.prototype,"operationalLayerType",void 0),e([i(A)],ee.prototype,"popupEnabled",void 0),e([i({type:t,json:{name:"popupInfo",write:!0}})],ee.prototype,"popupTemplate",void 0),e([i({types:s,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:r,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],ee.prototype,"renderer",null),e([i(_)],ee.prototype,"screenSizePerspectiveEnabled",void 0),e([i({readOnly:!0})],ee.prototype,"source",void 0),e([i({readOnly:!0,type:C,json:{origins:{service:{read:!0}}}})],ee.prototype,"spatialReference",void 0),e([i({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],ee.prototype,"title",void 0),e([i({readOnly:!0,json:{read:!1}})],ee.prototype,"type",void 0),e([i({type:String,readOnly:!0})],ee.prototype,"typeIdField",void 0),e([i({type:[G]})],ee.prototype,"types",void 0),e([i(q)],ee.prototype,"url",void 0),ee=e([p("esri.layers.OGCFeatureLayer")],ee);const te=ee;export{te as default};
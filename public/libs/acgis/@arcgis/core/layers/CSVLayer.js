/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import"../geometry.js";import e from"../core/Error.js";import{i as r}from"../chunks/maybe.js";import{urlToObject as o}from"../core/urlUtils.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import{h as i}from"../core/lang.js";import"../chunks/ensureType.js";import{r as p}from"../chunks/reader.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import m from"./FeatureLayer.js";import a from"../core/Loadable.js";import{debounce as l}from"../core/promiseUtils.js";import{open as u}from"../core/workers/workers.js";import c from"../rest/support/FeatureSet.js";import j from"../geometry/Extent.js";import{c as d}from"../chunks/clientSideDefaults.js";import y from"../rest/support/Query.js";import{r as h,w as f}from"../chunks/persistableUrlUtils.js";import b from"../geometry/SpatialReference.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/writer.js";import"../geometry/Multipoint.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../chunks/jsonMap.js";import"../geometry/support/jsonUtils.js";import"../PopupTemplate.js";import"../core/Collection.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"./support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../chunks/number2.js";import"../chunks/locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"../chunks/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../renderers/ClassBreaksRenderer.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/common.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils2.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils3.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../chunks/aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../kernel.js";import"../request.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../core/Promise.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../core/Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../chunks/Thumbnail.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../Graphic.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties2.js";import"../symbols/support/jsonUtils.js";import"../chunks/symbolConversion.js";import"../renderers/DictionaryRenderer.js";import"../chunks/DictionaryLoader.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../renderers/DotDensityRenderer.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../chunks/heatmapUtils.js";import"../chunks/vec4f64.js";import"../renderers/PieChartRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils2.js";import"../renderers/support/jsonUtils.js";import"../core/Handles.js";import"../chunks/MultiOriginJSONSupport.js";import"../core/sql.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/Element.js";import"../form/support/elements.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../chunks/domains.js";import"./support/CodedValueDomain.js";import"./support/Domain.js";import"./support/InheritedDomain.js";import"./support/RangeDomain.js";import"../geometry/HeightModelInfo.js";import"./Layer.js";import"../chunks/FeatureIndex.js";import"../core/HandleOwner.js";import"../core/reactiveUtils.js";import"../chunks/queryZScale.js";import"../chunks/zscale.js";import"./mixins/APIKeyMixin.js";import"../chunks/ArcGISService.js";import"../chunks/arcgisLayerUrl.js";import"./mixins/BlendLayer.js";import"../chunks/jsonUtils.js";import"../chunks/parser2.js";import"../chunks/mat4f32.js";import"../chunks/mat4.js";import"../chunks/_commonjsHelpers.js";import"./mixins/CustomParametersMixin.js";import"./mixins/FeatureEffectLayer.js";import"./support/FeatureEffect.js";import"./support/FeatureFilter.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../chunks/DataLayerSource.js";import"./support/Field.js";import"../chunks/fieldType.js";import"../rest/support/StatisticDefinition.js";import"../chunks/OperationalLayer.js";import"../chunks/commonProperties.js";import"../support/timeUtils.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"./mixins/OrderedLayer.js";import"./mixins/PortalLayer.js";import"../chunks/asyncUtils.js";import"../portal/PortalItem.js";import"../chunks/assets.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"./mixins/RefreshableLayer.js";import"./mixins/ScaleRangeLayer.js";import"./mixins/TemporalLayer.js";import"../TimeInterval.js";import"./support/TimeInfo.js";import"./support/TimeReference.js";import"../chunks/featureReductionUtils.js";import"../chunks/FeatureReduction.js";import"./support/FeatureReductionBinning.js";import"./support/AggregateField.js";import"./support/OutStatistic.js";import"./support/LabelClass.js";import"../chunks/labelUtils.js";import"../chunks/defaultsJSON.js";import"./support/FeatureReductionCluster.js";import"./support/FeatureReductionSelection.js";import"./support/FeatureTemplate.js";import"./support/FeatureType.js";import"../chunks/fieldProperties.js";import"./support/FieldsIndex.js";import"./support/GeometryFieldsInfo.js";import"../chunks/labelingInfo.js";import"./support/LayerFloorInfo.js";import"./support/Relationship.js";import"../chunks/versionUtils.js";import"../chunks/styleUtils.js";import"../rest/support/AttachmentQuery.js";import"../rest/support/RelationshipQuery.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../support/popupUtils.js";import"../core/workers/Connection.js";import"../chunks/Queue.js";import"../core/workers/RemoteClient.js";import"../intl.js";import"../chunks/messages.js";import"../chunks/QueryEngineCapabilities.js";let k=class extends a{constructor(t){super(t),this.type="csv",this.refresh=l((async t=>{await this.load();const{extent:e,timeExtent:r}=await this._connection.invoke("refresh",t);return this.sourceJSON.extent=e,r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}))}load(t){const e=r(t)?t.signal:null;return this.addResolvingPromise(this._startWorker(e)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(t,e={}){await this.load(e);const r=await this._connection.invoke("queryFeatures",t?t.toJSON():null,e);return c.fromJSON(r)}async queryFeaturesJSON(t,e={}){return await this.load(e),this._connection.invoke("queryFeatures",t?t.toJSON():null,e)}async queryFeatureCount(t,e={}){return await this.load(e),this._connection.invoke("queryFeatureCount",t?t.toJSON():null,e)}async queryObjectIds(t,e={}){return await this.load(e),this._connection.invoke("queryObjectIds",t?t.toJSON():null,e)}async queryExtent(t,e={}){await this.load(e);const r=await this._connection.invoke("queryExtent",t?t.toJSON():null,e);return{count:r.count,extent:j.fromJSON(r.extent)}}async querySnapping(t,e={}){return await this.load(e),this._connection.invoke("querySnapping",t,e)}async _startWorker(t){this._connection=await u("CSVSourceWorker",{strategy:i("feature-layers-workers")?"dedicated":"local",signal:t});const{url:e,delimiter:r,fields:o,latitudeField:s,longitudeField:p,spatialReference:n,timeInfo:m}=this.loadOptions,a=await this._connection.invoke("load",{url:e,customParameters:this.customParameters,parsingOptions:{delimiter:r,fields:o?.map((t=>t.toJSON())),latitudeField:s,longitudeField:p,spatialReference:n?.toJSON(),timeInfo:m?.toJSON()}},{signal:t});this.locationInfo=a.locationInfo,this.sourceJSON=a.layerDefinition,this.delimiter=a.delimiter}};function g(t,r){throw new e(r,`CSVLayer (title: ${t.title}, id: ${t.id}) cannot be saved to a portal item`)}t([s()],k.prototype,"type",void 0),t([s()],k.prototype,"loadOptions",void 0),t([s()],k.prototype,"customParameters",void 0),t([s()],k.prototype,"locationInfo",void 0),t([s()],k.prototype,"sourceJSON",void 0),t([s()],k.prototype,"delimiter",void 0),k=t([n("esri.layers.graphics.sources.CSVSource")],k);let S=class extends m{constructor(...t){super(...t),this.capabilities=d(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.portalItem=null,this.spatialReference=b.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(t,e){return"string"==typeof t?{url:t,...e}:t}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(t,e){return null!=e.showLabels?e.showLabels:!!(e.layerDefinition&&e.layerDefinition.drawingInfo&&e.layerDefinition.drawingInfo.labelingInfo)}set url(t){if(!t)return void this._set("url",t);const e=o(t);this._set("url",e.path),e.query&&(this.customParameters={...this.customParameters,...e.query})}async createGraphicsSource(t){const e=new k({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference,timeInfo:this.timeInfo,url:this.url},customParameters:this.customParameters});return this._set("source",e),await e.load({signal:t}),this.read({locationInfo:e.locationInfo,columnDelimiter:e.delimiter},{origin:"service",url:this.parsedUrl}),e}queryFeatures(t,e){return this.load().then((()=>this.source.queryFeatures(y.from(t)||this.createQuery()))).then((t=>{if(t?.features)for(const e of t.features)e.layer=e.sourceLayer=this;return t}))}queryObjectIds(t,e){return this.load().then((()=>this.source.queryObjectIds(y.from(t)||this.createQuery())))}queryFeatureCount(t,e){return this.load().then((()=>this.source.queryFeatureCount(y.from(t)||this.createQuery())))}queryExtent(t,e){return this.load().then((()=>this.source.queryExtent(y.from(t)||this.createQuery())))}write(t,e){return super.write(t,{...e,writeLayerSchema:!0})}clone(){throw new e("csv-layer:clone",`CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`)}async save(t){return g(this,"csv-layer:save")}async saveAs(t,e){return g(this,"csv-layer:save-as")}async hasDataChanged(){try{const{dataChanged:t,updates:e}=await this.source.refresh(this.customParameters);return r(e)&&this.read(e,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),t}catch{}return!1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};t([s({readOnly:!0,json:{read:!1,write:!1}})],S.prototype,"capabilities",void 0),t([s({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],S.prototype,"delimiter",void 0),t([s({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],S.prototype,"editingEnabled",void 0),t([s({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],S.prototype,"fields",void 0),t([s({type:Boolean,readOnly:!0})],S.prototype,"isTable",null),t([p("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],S.prototype,"readWebMapLabelsVisible",null),t([s({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],S.prototype,"latitudeField",void 0),t([s({type:["show","hide"]})],S.prototype,"listMode",void 0),t([s({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],S.prototype,"locationType",void 0),t([s({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],S.prototype,"longitudeField",void 0),t([s({type:["CSV"]})],S.prototype,"operationalLayerType",void 0),t([s()],S.prototype,"outFields",void 0),t([s({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],S.prototype,"path",void 0),t([s({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],S.prototype,"portalItem",void 0),t([s({json:{read:!1},cast:null,type:k,readOnly:!0})],S.prototype,"source",void 0),t([s({json:{read:!1},value:"csv",readOnly:!0})],S.prototype,"type",void 0),t([s({json:{read:h,write:{isRequired:!0,ignoreOrigin:!0,writer:f}}})],S.prototype,"url",null),S=t([n("esri.layers.CSVLayer")],S);const I=S;export{I as default};
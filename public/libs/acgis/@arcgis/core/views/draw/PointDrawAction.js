/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import"../../geometry.js";import{d as t,i as r}from"../../chunks/maybe.js";import"../../chunks/Logger.js";import"../../chunks/ensureType.js";import"../../core/lang.js";import"../../core/accessorSupport/decorators/property.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import e from"./DrawAction.js";import{D as i}from"../../chunks/DrawTool.js";import{C as p,D as n}from"../../chunks/DrawEvents.js";import{V as m}from"../../chunks/InputManager.js";import{S as a}from"../../chunks/keybindings.js";import{c as l}from"../../chunks/screenUtils2.js";import u from"../../geometry/Point.js";import"../../geometry/Extent.js";import"../../chunks/string.js";import"../../chunks/object.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";import"../../core/Evented.js";import"../../core/Handles.js";import"../../core/Collection.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/screenUtils.js";import"../../layers/GraphicsLayer.js";import"../../chunks/GraphicsCollection.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number2.js";import"../../chunks/locale.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../support/actions/ActionBase.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/common.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils3.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/aaBoundingRect.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../core/Clonable.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../chunks/Thumbnail.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../core/HandleOwner.js";import"../../core/reactiveUtils.js";import"../../layers/Layer.js";import"../../layers/mixins/BlendLayer.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser2.js";import"../../chunks/mat4f32.js";import"../../chunks/mat4.js";import"../../chunks/_commonjsHelpers.js";import"../../layers/mixins/ScaleRangeLayer.js";import"../../chunks/ElevationInfo.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../chunks/dehydratedFeatures.js";import"../../chunks/byteSizeEstimations.js";import"../../chunks/quantizationUtils.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/fieldType.js";import"../../chunks/ViewingMode.js";import"../../chunks/SnappingVisualizer2D.js";import"../../chunks/vec2.js";import"../../chunks/vec2f64.js";import"../../chunks/enums2.js";import"../../chunks/settings.js";import"../../chunks/Settings2.js";import"../../chunks/SnappingContext.js";import"../../chunks/RightAngleSnappingHint.js";import"../../chunks/PointSnappingHint.js";import"../../chunks/EditGeometryOperations.js";import"../../chunks/vec4f64.js";import"../../chunks/plane.js";import"../../chunks/sphere.js";import"../../chunks/ray.js";import"../../chunks/vectorStacks.js";import"../../chunks/quatf64.js";import"../../chunks/mat4f64.js";import"../../chunks/mathUtils2.js";import"../../chunks/geometry2dUtils.js";import"../../chunks/SnappingOperation.js";import"../../chunks/Scheduler.js";import"../../chunks/debugFlags.js";import"../../chunks/drawSurfaces.js";import"../../chunks/quantityUtils.js";import"../../chunks/dehydratedFeatureComparison.js";import"../../chunks/elevationInfoUtils.js";import"../../chunks/dragEventPipeline.js";import"../DOMContainer.js";import"../../chunks/domUtils.js";import"../../chunks/projector.js";import"../../chunks/widgetUtils.js";import"../../widgets/Popup.js";import"../../intl.js";import"../../chunks/messages.js";import"../../chunks/assets.js";import"../../chunks/throttle.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../widgets/Feature.js";import"../../widgets/Widget.js";import"../../chunks/uuid.js";import"../../chunks/jsxWidgetSupport.js";import"../../widgets/Attachments.js";import"../../chunks/unitFormatUtils.js";import"../../chunks/Cyclical.js";import"../../widgets/Attachments/AttachmentsViewModel.js";import"../../rest/query/support/AttachmentInfo.js";import"../../rest/support/AttachmentQuery.js";import"../../chunks/messageBundle.js";import"../../chunks/jsxFactory.js";import"../../widgets/Feature/FeatureViewModel.js";import"../../chunks/languageUtils.js";import"../../chunks/datetime.js";import"../../chunks/number.js";import"../../chunks/DataLayerSource.js";import"../../chunks/executeQueryJSON.js";import"../../chunks/utils5.js";import"../../chunks/query.js";import"../../geometry/support/normalizeUtils.js";import"../../chunks/normalizeUtilsCommon.js";import"../../chunks/pbfQueryUtils.js";import"../../chunks/pbf.js";import"../../chunks/OptimizedGeometry.js";import"../../chunks/OptimizedFeatureSet.js";import"../../chunks/queryZScale.js";import"../../chunks/zscale.js";import"../../rest/support/FeatureSet.js";import"../../rest/support/Query.js";import"../../TimeExtent.js";import"../../chunks/timeUtils.js";import"../../rest/support/StatisticDefinition.js";import"../../chunks/featureConversionUtils.js";import"../../rest/support/RelationshipQuery.js";import"../../rest/support/TopFeaturesQuery.js";import"../../rest/support/TopFilter.js";import"../../layers/FeatureLayer.js";import"../../renderers/ClassBreaksRenderer.js";import"../../renderers/Renderer.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../chunks/colorRamps.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";import"../../renderers/mixins/VisualVariablesMixin.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../chunks/compilerUtils.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties2.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/symbolConversion.js";import"../../renderers/DictionaryRenderer.js";import"../../chunks/DictionaryLoader.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/support/HeatmapColorStop.js";import"../../chunks/heatmapUtils.js";import"../../renderers/PieChartRenderer.js";import"../../renderers/SimpleRenderer.js";import"../../renderers/UniqueValueRenderer.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/styleUtils2.js";import"../../renderers/support/jsonUtils.js";import"../../chunks/MultiOriginJSONSupport.js";import"../../core/sql.js";import"../../form/FormTemplate.js";import"../../form/ExpressionInfo.js";import"../../form/elements/GroupElement.js";import"../../form/elements/Element.js";import"../../form/support/elements.js";import"../../form/elements/FieldElement.js";import"../../form/elements/support/inputs.js";import"../../form/elements/inputs/BarcodeScannerInput.js";import"../../form/elements/inputs/TextInput.js";import"../../form/elements/inputs/Input.js";import"../../form/elements/inputs/ComboBoxInput.js";import"../../form/elements/inputs/DateTimePickerInput.js";import"../../form/elements/inputs/RadioButtonsInput.js";import"../../form/elements/inputs/SwitchInput.js";import"../../form/elements/inputs/TextAreaInput.js";import"../../form/elements/inputs/TextBoxInput.js";import"../../geometry/HeightModelInfo.js";import"../../chunks/FeatureIndex.js";import"../../core/workers/workers.js";import"../../core/workers/Connection.js";import"../../chunks/Queue.js";import"../../core/workers/RemoteClient.js";import"../../layers/mixins/APIKeyMixin.js";import"../../chunks/ArcGISService.js";import"../../chunks/arcgisLayerUrl.js";import"../../layers/mixins/CustomParametersMixin.js";import"../../layers/mixins/FeatureEffectLayer.js";import"../../layers/support/FeatureEffect.js";import"../../layers/support/FeatureFilter.js";import"../../chunks/OperationalLayer.js";import"../../chunks/commonProperties.js";import"../../support/timeUtils.js";import"../../layers/mixins/OrderedLayer.js";import"../../layers/mixins/PortalLayer.js";import"../../chunks/asyncUtils.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../layers/mixins/RefreshableLayer.js";import"../../layers/mixins/TemporalLayer.js";import"../../TimeInterval.js";import"../../layers/support/TimeInfo.js";import"../../layers/support/TimeReference.js";import"../../chunks/featureReductionUtils.js";import"../../chunks/FeatureReduction.js";import"../../layers/support/FeatureReductionBinning.js";import"../../layers/support/AggregateField.js";import"../../layers/support/OutStatistic.js";import"../../layers/support/LabelClass.js";import"../../chunks/labelUtils.js";import"../../chunks/defaultsJSON.js";import"../../layers/support/FeatureReductionCluster.js";import"../../layers/support/FeatureReductionSelection.js";import"../../layers/support/FeatureTemplate.js";import"../../layers/support/FeatureType.js";import"../../chunks/fieldProperties.js";import"../../layers/support/FieldsIndex.js";import"../../layers/support/GeometryFieldsInfo.js";import"../../chunks/labelingInfo.js";import"../../layers/support/LayerFloorInfo.js";import"../../layers/support/Relationship.js";import"../../chunks/versionUtils.js";import"../../chunks/styleUtils.js";import"../../support/popupUtils.js";import"../../chunks/Heading.js";import"../../widgets/support/widget.js";import"../../chunks/accessibleHandler.js";import"../../chunks/vmEvent.js";import"../../chunks/themeUtils.js";import"../../chunks/utils13.js";import"../../chunks/numberUtils.js";import"../../chunks/utils6.js";import"../../chunks/ItemCache.js";import"../../symbols/support/cimSymbolUtils.js";import"../../chunks/utils7.js";import"../../widgets/Spinner/SpinnerViewModel.js";import"../../chunks/AnchorElementViewModel.js";import"../../widgets/Popup/PopupViewModel.js";import"../../symbols/support/symbolUtils.js";import"../../chunks/colorUtils2.js";import"../../chunks/mat2df32.js";import"../../chunks/layerViewUtils.js";import"../../chunks/actions.js";import"../../widgets/support/GoTo.js";import"../../chunks/interfaces.js";import"../../geometry/projection.js";import"../../chunks/pe.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/drawUtils.js";import"../interactive/sketch/SketchLabelOptions.js";import"../interactive/sketch/SketchTooltipOptions.js";import"../../chunks/euclideanLengthMeasurementUtils.js";import"../../chunks/measurementUtils2.js";import"../../chunks/quantityFormatUtils.js";import"../../chunks/euclideanAreaMeasurementUtils.js";import"../../chunks/earcut.js";import"../../chunks/triangle.js";import"../../chunks/lineSegment.js";import"../../geometry/geometryEngine.js";import"../../chunks/geometryEngineBase.js";import"../../chunks/hydrated.js";import"../../geometry/support/geodesicUtils.js";let j=class extends e{constructor(s){super(s),this._addVertexOnPointerUp=!1}initialize(){"2d"===this.view.type?this._addViewHandles():this._addDrawTool()}destroy(){"2d"===this.view.type?this._removeViewHandles():this._removeDrawTool(),this.emit("destroy")}complete(){"2d"===this.view.type?this._cursorScreenPoint&&this._completeDrawing():this._drawTool.completeCreateOperation()}_addViewHandles(){this._removeViewHandles(),this._handles.add([this.view.on("pointer-down",(s=>{this._shouldHandlePointerEvent(s)&&(this._abortSnapping(),this._activePointerId=s.pointerId,this._addVertexOnPointerUp=!0,this._cursorScreenPoint=l(s),"touch"===s.pointerType&&this._updateCursor(s.native))}),m.TOOL),this.view.on("pointer-move",(s=>{this._abortSnapping(),this._cursorScreenPoint=l(s),"touch"!==s.pointerType&&this._updateCursor(s.native)}),m.TOOL),this.view.on("pointer-drag",(s=>{this._shouldHandlePointerEvent(s)&&(this._abortSnapping(),this._addVertexOnPointerUp=!1)}),m.TOOL),this.view.on("pointer-up",(s=>{if(this._shouldHandlePointerEvent(s))if(this._abortSnapping(),this._activePointerId=null,this._addVertexOnPointerUp)s.stopPropagation(),this._vertexAddHandler(s);else{const t="touch"===s.pointerType;this._updateCursor(s.native,t)}}),m.TOOL),this.view.on("drag",["Shift"],(s=>{s.stopPropagation()}),m.TOOL),this.view.on("key-down",(s=>{s.key===a.complete&&this._cursorScreenPoint&&(this._abortSnapping(),this._vertexAddHandler(s))}),m.TOOL)],this._viewHandlesKey)}_removeViewHandles(){this._handles.remove(this._viewHandlesKey)}_addDrawTool(){this._drawTool=new i({view:this.view,elevationInfo:this.elevationInfo,hasZ:this.hasZ,geometryType:"point",mode:"click"}),this.view.addAndActivateTool(this._drawTool),this._handles.add([this._drawTool.on("cursor-update",(s=>{1===s.vertices.length&&this.emit("cursor-update",new p(this.view,null,s.vertices[0].vertexIndex,this._drawTool.getVertexCoords()))})),this._drawTool.on("complete",(s=>{this.emit("draw-complete",new n(null,this._drawTool.getVertexCoords())),this._removeDrawTool()}))],this._drawToolHandlesKey)}_removeDrawTool(){this._handles.remove(this._drawToolHandlesKey),this.view.tools.remove(this._drawTool),this._drawTool=t(this._drawTool)}_addVertex(s){const t=this._coordinateHelper.arrayToVector(s);this._isDuplicateOfLastVertex(t)||(this._lastVertexUnsnapped=this._stagedVertexUnsnapped,this._popCursorVertex(),this._editGeometryOperations.appendVertex(t),this.notifyChange("vertices"),this._completeDrawing())}_updateCursor(s,t=!1){if(this._popCursorVertex(),!this._cursorScreenPoint)return;const o=this.getCoordsAndPointFromScreenPoint(this._cursorScreenPoint);r(o)&&!t&&this._pushCursorVertex(o.vertex,(()=>this.emit("cursor-update",new p(this.view,s,this._activeComponent.vertices.length,this.vertices,r(this._stagedVertex)?new u(this._stagedVertex):null))))}_completeDrawing(s){this._activePointerId=null,this._popCursorVertex(),this._abortSnapping(),r(this._snappingManager)&&this._snappingManager.doneSnapping();const t=new n(s,this.vertices);this.emit("draw-complete",t),t.defaultPrevented||this._removeViewHandles()}};j=s([o("esri.views.draw.PointDrawAction")],j);export{j as PointDrawAction};
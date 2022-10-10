/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import t from"../../analysis/LineOfSightAnalysis.js";import o from"../../analysis/LineOfSightAnalysisObserver.js";import e from"../../analysis/LineOfSightAnalysisTarget.js";import i from"../../core/Collection.js";import{c as r,r as n}from"../../chunks/collectionUtils.js";import p from"../../core/Handles.js";import{h as m}from"../../chunks/handleUtils.js";import{d as a,a as l,i as c,f as j,u}from"../../chunks/maybe.js";import{watch as h,syncAndInitial as y,sync as d}from"../../core/reactiveUtils.js";import{property as g}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as b}from"../../core/accessorSupport/decorators/subclass.js";import k from"./LineOfSightTarget.js";import{A as T}from"../../chunks/AnalysisViewModel.js";import"../../chunks/Analysis.js";import"../../core/Accessor.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../core/Clonable.js";import"../../chunks/Identifiable.js";import"../../core/JSONSupport.js";import"../../geometry/projection.js";import"../../chunks/mathUtils.js";import"../../chunks/common.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/projectionEllipsoid.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../chunks/Ellipsoid.js";import"../../chunks/SimpleObservable.js";import"../../chunks/mat4.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../chunks/pe.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/elevationInfoUtils.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/featureReferenceUtils.js";import"../../chunks/persistable.js";import"../../chunks/multiOriginJSONSupportUtils.js";import"../../chunks/uuid.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/ElevationInfo.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number2.js";import"../../chunks/locale.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils3.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../chunks/Thumbnail.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";const f=i.ofType(k);let S=class extends T{constructor(s){super(s),this.analysis=null,this.supportedViewType="3d",this.unsupportedErrorMessage="LineOfSightViewModel is only supported in 3D views.",this._handles=new p,this._vmTargetsToConnection=new Map,this._analysisTargetsToConnection=new Map}initialize(){this._handles.add([this.targets.on("after-add",(s=>this._onViewModelTargetAdded(s.item))),this.targets.on("after-remove",(s=>this._onViewModelTargetRemoved(s.item))),h((()=>this.analysis),(s=>this._onAnalysisChange(s)),y)])}destroy(){this._analysisTargetsToConnection.forEach((s=>s.remove())),this._handles=a(this._handles)}get state(){return this.disabled||!this.ready?"disabled":l(this.tool)?"ready":this.tool.state}get observer(){return c(this.analysis.observer)?this.analysis.observer.position:null}set observer(s){this.analysis.observer=new o({position:s})}get targets(){return this._get("targets")||new f}set targets(s){this._set("targets",n(s,this.targets,f))}continue(){c(this.tool)&&this.tool.continue()}stop(){c(this.tool)&&this.tool.stop()}get testInfo(){return{analysisView:this.analysisView,getAnalysisTargetFromViewModelTarget:s=>j(this._vmTargetsToConnection.get(s),(s=>s.analysisTarget))}}constructAnalysis(){return new t}async onConnectToAnalysisView(s){this._handles.add([s.on("result-changed",(s=>{const t=this._analysisTargetsToConnection.get(s.target);c(s.result)?(t.viewModelTarget.intersectedGraphic=s.result.intersectedGraphic,t.viewModelTarget.intersectedLocation=u(s.result.intersectedLocation),t.viewModelTarget.visible=s.result.visible):(t.viewModelTarget.intersectedGraphic=null,t.viewModelTarget.intersectedLocation=null,t.viewModelTarget.visible=void 0)}))],"view")}onDisconnectFromAnalysisView(){null!=this._handles&&this._handles.remove("view")}_onViewModelTargetAdded(s){if(this._vmTargetsToConnection.get(s))return;const t=new e({position:s.location});this._connectViewModelWithAnalysisTarget(s,t),this.analysis.targets.add(t)}_onViewModelTargetRemoved(s){const t=this._vmTargetsToConnection.get(s);t&&(t.remove(),this.analysis.targets.remove(t.analysisTarget))}_onAnalysisTargetAdded(s){if(this._analysisTargetsToConnection.get(s))return;const t=new k({location:j(s.position,(s=>s.clone()))});this._connectViewModelWithAnalysisTarget(t,s),this.targets.add(t)}_onAnalysisTargetRemoved(s){const t=this._analysisTargetsToConnection.get(s);t&&(t.remove(),this.targets.remove(t.viewModelTarget))}_connectViewModelWithAnalysisTarget(s,t){let o=!1;const e=m([h((()=>t.position),(t=>{o||(o=!0,s.location=j(t,(s=>s.clone())),o=!1)}),d),h((()=>s.location),(s=>{o||(o=!0,t.position=j(s,(s=>s.clone())),o=!1)}),d)]),i={analysisTarget:t,viewModelTarget:s,remove:()=>{e.remove(),this._vmTargetsToConnection.delete(s),this._analysisTargetsToConnection.delete(t)}};this._vmTargetsToConnection.set(s,i),this._analysisTargetsToConnection.set(t,i)}_onAnalysisChange(s){const t="analysis";this._handles.remove(t),this._handles.add([this.analysis.targets.on("after-add",(s=>this._onAnalysisTargetAdded(s.item))),this.analysis.targets.on("after-remove",(s=>this._onAnalysisTargetRemoved(s.item)))],t),this.targets.removeAll(),s.targets.forEach((s=>{this._onAnalysisTargetAdded(s)}))}};s([g({type:t})],S.prototype,"analysis",void 0),s([g({readOnly:!0})],S.prototype,"state",null),s([g()],S.prototype,"observer",null),s([g({type:f,cast:r,nonNullable:!0})],S.prototype,"targets",null),S=s([b("esri.widgets.lineOfSight.LineOfSightViewModel")],S);const v=S;export{v as default};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{i as o}from"../../chunks/maybe.js";import"../../chunks/Logger.js";import"../../chunks/ensureType.js";import"../../core/lang.js";import"../../core/accessorSupport/decorators/property.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";import e from"./CreateWorkflowData.js";import{Edits as r}from"./Edits.js";import i from"./Workflow.js";import{c as p,b as m,d as n,f as a,g as l,a as c,v as u,u as j}from"../../chunks/workflowUtils.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/tracking.js";import"../../core/Accessor.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/HandleOwner.js";import"../../core/Handles.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../core/reactiveUtils.js";import"../../Graphic.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";import"../../PopupTemplate.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number2.js";import"../../chunks/locale.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../support/actions/ActionBase.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/common.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils3.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/aaBoundingRect.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../core/Clonable.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../chunks/Thumbnail.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/diffUtils.js";import"../../chunks/drapedUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../chunks/lengthUtils.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../chunks/compilerUtils.js";import"../../chunks/symbolConversion.js";import"../../symbols/support/symbolUtils.js";import"../../chunks/utils6.js";import"../../chunks/asyncUtils.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser2.js";import"../../chunks/mat4f32.js";import"../../chunks/mat4.js";import"../../chunks/_commonjsHelpers.js";import"../../chunks/assets.js";import"../../chunks/ItemCache.js";import"../../chunks/MemCache.js";import"../../symbols/support/cimSymbolUtils.js";import"../../chunks/utils7.js";import"../../chunks/colorUtils2.js";import"../../chunks/projector.js";import"../../chunks/widgetUtils.js";import"../../chunks/mat2df32.js";import"../../chunks/jsxFactory.js";import"../../chunks/jsxWidgetSupport.js";import"../../chunks/GraphicState.js";import"../../chunks/hitTestSelectUtils.js";var y;let d=y=class extends i{constructor(t){super(t),this.type="create"}static create(t,o,s){const i=new y({data:new e({edits:new r,viewModel:t}),onCommit:async t=>{await s(t.creationInfo.layer,{addFeatures:[t.edits.feature]})}});return i._set("steps",this._createWorkflowSteps(i,o)),i}static _createWorkflowSteps(t,s="awaiting-feature-creation-info"){const{data:e,handles:r}=t,i=new Map,y=p(["awaiting-feature-creation-info","awaiting-feature-to-create","editing-new-feature"],s,{"awaiting-feature-creation-info":()=>({id:"awaiting-feature-creation-info",async setUp(){e.creationInfo=null,e.edits.feature=null,e.viewModel.featureTemplatesViewModel.select(null),r.add(e.viewModel.featureTemplatesViewModel.on("select",(({item:t})=>{e.creationInfo={layer:t.layer,template:t.template},e.viewModel.activeWorkflow.next()})),this.id)},async tearDown(){r.remove(this.id)}}),"awaiting-feature-to-create":()=>({id:"awaiting-feature-to-create",async setUp(){r.add(await n(e.viewModel.sketchViewModel,e.creationInfo,(t=>{e.edits.feature=t,e.viewModel.activeWorkflow.next()}),i),this.id)},async tearDown(){r.remove(this.id)}}),"editing-new-feature":()=>({id:"editing-new-feature",async setUp(){const t=e.edits.feature,s=t.sourceLayer,p=e.viewModel,m=p.sketchViewModel,n=a(p.layerInfos,s)?.formTemplate,{spatialReference:y}=p.view;p.featureFormViewModel.set({feature:t,formTemplate:n,spatialReference:y}),m.allowDeleteKey=!1;const d=l(t);await c(m,t,s,d,i);const h=m.on("update",(async t=>{const e=t.graphics[0];if("complete"===t.state)return c(m,e,s,d,i);await u(m.view,e,t,d,i);const r=e.attributes;if(o(d.rotation)){const{field:t}=d.rotation;p.featureFormViewModel.setValue(t,r[t])}if(o(d.size)){const{field:t}=d.size;p.featureFormViewModel.setValue(t,r[t])}}));r.add([e.viewModel.featureFormViewModel.on("value-change",(async()=>{e.edits.updateAttributes(e.viewModel.featureFormViewModel.getValues()),t.attributes=e.edits.feature.attributes,"3d"===m.view.type&&await j(t,i)})),h],this.id)},async tearDown(t){t.cancelled&&e.viewModel.sketchViewModel.layer.removeAll(),r.remove(this.id)}})});return m(e,y)}};d=y=t([s("esri.widgets.Editor.CreateWorkflow")],d);const h=d;export{h as default};

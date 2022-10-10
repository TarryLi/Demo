/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import{aliasOf as s}from"../core/accessorSupport/decorators/aliasOf.js";import"../core/lang.js";import"../chunks/ensureType.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import r from"./Widget.js";import i from"./Locate/LocateViewModel.js";import{a as p}from"../chunks/accessibleHandler.js";import{m}from"../chunks/messageBundle.js";import{v as l}from"../chunks/vmEvent.js";import{t as n}from"../chunks/jsxFactory.js";import"../chunks/widgetUtils.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/maybe.js";import"../chunks/string.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../chunks/tracking.js";import"../intl.js";import"../chunks/number2.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/messages.js";import"../core/promiseUtils.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../core/Evented.js";import"../core/Accessor.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/Handles.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../PopupTemplate.js";import"../core/JSONSupport.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../layers/support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"../chunks/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../chunks/actions.js";import"./support/GeolocationPositioning.js";import"../Graphic.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/common.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils2.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils3.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../chunks/aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../core/Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../chunks/Thumbnail.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/geolocationUtils.js";import"../chunks/trimExtend.js";import"../rest/support/GeneralizeParameters.js";import"../rest/support/LengthsParameters.js";import"../rest/support/OffsetParameters.js";import"../chunks/project.js";import"../chunks/utils5.js";import"../rest/support/ProjectParameters.js";import"../rest/support/RelationParameters.js";import"../rest/support/TrimExtendParameters.js";import"./support/GoTo.js";let a=class extends r{constructor(o,s){super(o,s),this.geolocationOptions=null,this.goToLocationEnabled=null,this.goToOverride=null,this.graphic=null,this.iconClass="esri-icon-north-navigation",this.label=void 0,this.messages=null,this.messagesCommon=null,this.popupEnabled=null,this.scale=null,this.useHeadingEnabled=null,this.view=null,this.viewModel=new i}cancelLocate(){}locate(){}render(){const o=this.get("viewModel.state"),s="locating"===o,t={"esri-disabled":"disabled"===o,"esri-hidden":"feature-unsupported"===o},e={"esri-icon-loading-indicator":s,"esri-rotating":s,"esri-icon-locate":!s},r="locating"===o?this.messagesCommon.cancel:this.messages.title;return n("div",{bind:this,class:this.classes("esri-locate esri-widget--button esri-widget",t),hidden:"feature-unsupported"===o,onclick:this._locate,onkeydown:this._locate,role:"button",tabIndex:0,"aria-label":r,title:r},n("span",{"aria-hidden":"true",class:this.classes("esri-icon",e)}),n("span",{class:"esri-icon-font-fallback-text"},this.messages.title))}_locate(){const{viewModel:o}=this;"locating"===o.state?o.cancelLocate():o.locate()}};o([s("viewModel.geolocationOptions")],a.prototype,"geolocationOptions",void 0),o([s("viewModel.goToLocationEnabled")],a.prototype,"goToLocationEnabled",void 0),o([s("viewModel.goToOverride")],a.prototype,"goToOverride",void 0),o([s("viewModel.graphic")],a.prototype,"graphic",void 0),o([t()],a.prototype,"iconClass",void 0),o([t({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],a.prototype,"label",void 0),o([t(),m("esri/widgets/Locate/t9n/Locate")],a.prototype,"messages",void 0),o([t(),m("esri/t9n/common")],a.prototype,"messagesCommon",void 0),o([s("viewModel.popupEnabled")],a.prototype,"popupEnabled",void 0),o([s("viewModel.scale")],a.prototype,"scale",void 0),o([s("viewModel.useHeadingEnabled")],a.prototype,"useHeadingEnabled",void 0),o([s("viewModel.view")],a.prototype,"view",void 0),o([t({type:i}),l(["locate","locate-error"])],a.prototype,"viewModel",void 0),o([s("viewModel.cancelLocate")],a.prototype,"cancelLocate",null),o([s("viewModel.locate")],a.prototype,"locate",null),o([p()],a.prototype,"_locate",null),a=o([e("esri.widgets.Locate")],a);const c=a;export{c as default};

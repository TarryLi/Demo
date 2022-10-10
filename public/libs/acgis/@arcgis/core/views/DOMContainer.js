/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{r as s,b as e,e as r}from"../chunks/domUtils.js";import{watch as o,initial as i}from"../core/reactiveUtils.js";import{addFrameTask as p}from"../core/scheduling.js";import{property as n}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import{subclass as m}from"../core/accessorSupport/decorators/subclass.js";import a from"../core/Accessor.js";import l from"../core/Collection.js";import{W as u}from"../core/HandleOwner.js";import{c}from"../chunks/projector.js";import h from"../widgets/Popup.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/maybe.js";import"../chunks/string.js";import"../chunks/handleUtils.js";import"../chunks/watch.js";import"../chunks/ArrayPool.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/tracking.js";import"../chunks/nextTick.js";import"../chunks/metadata.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../core/Handles.js";import"../chunks/widgetUtils.js";import"../intl.js";import"../chunks/number2.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/throttle.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../core/accessorSupport/decorators/cast.js";import"../widgets/Feature.js";import"../widgets/Widget.js";import"../core/Promise.js";import"../chunks/uuid.js";import"../chunks/jsxWidgetSupport.js";import"../widgets/Attachments.js";import"../chunks/unitFormatUtils.js";import"../chunks/byteSizeEstimations.js";import"../chunks/Cyclical.js";import"../chunks/mathUtils.js";import"../chunks/common.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";import"../geometry/SpatialReference.js";import"../core/JSONSupport.js";import"../chunks/writer.js";import"../chunks/Ellipsoid.js";import"../widgets/Attachments/AttachmentsViewModel.js";import"../Graphic.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../PopupTemplate.js";import"../layers/support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"../chunks/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils2.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils3.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../chunks/aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../core/Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../chunks/Thumbnail.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../rest/query/support/AttachmentInfo.js";import"../rest/support/AttachmentQuery.js";import"../chunks/messageBundle.js";import"../chunks/jsxFactory.js";import"../widgets/Feature/FeatureViewModel.js";import"../chunks/languageUtils.js";import"../chunks/datetime.js";import"../chunks/number.js";import"../layers/support/Field.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/fieldType.js";import"../chunks/DataLayerSource.js";import"../chunks/executeQueryJSON.js";import"../chunks/utils5.js";import"../chunks/query.js";import"../geometry/support/normalizeUtils.js";import"../chunks/normalizeUtilsCommon.js";import"../chunks/pbfQueryUtils.js";import"../chunks/pbf.js";import"../chunks/OptimizedGeometry.js";import"../chunks/OptimizedFeatureSet.js";import"../chunks/queryZScale.js";import"../chunks/zscale.js";import"../rest/support/FeatureSet.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../rest/support/StatisticDefinition.js";import"../chunks/featureConversionUtils.js";import"../rest/support/RelationshipQuery.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../layers/FeatureLayer.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties2.js";import"../symbols/support/jsonUtils.js";import"../chunks/symbolConversion.js";import"../renderers/DictionaryRenderer.js";import"../chunks/DictionaryLoader.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../chunks/heatmapUtils.js";import"../chunks/vec4f64.js";import"../renderers/PieChartRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils2.js";import"../renderers/support/jsonUtils.js";import"../chunks/MultiOriginJSONSupport.js";import"../core/sql.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/Element.js";import"../form/support/elements.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../geometry/HeightModelInfo.js";import"../layers/Layer.js";import"../chunks/FeatureIndex.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../chunks/Queue.js";import"../core/workers/RemoteClient.js";import"../layers/mixins/APIKeyMixin.js";import"../chunks/ArcGISService.js";import"../chunks/arcgisLayerUrl.js";import"../layers/mixins/BlendLayer.js";import"../chunks/jsonUtils.js";import"../chunks/parser2.js";import"../chunks/mat4f32.js";import"../chunks/mat4.js";import"../chunks/_commonjsHelpers.js";import"../layers/mixins/CustomParametersMixin.js";import"../layers/mixins/FeatureEffectLayer.js";import"../layers/support/FeatureEffect.js";import"../layers/support/FeatureFilter.js";import"../chunks/OperationalLayer.js";import"../chunks/commonProperties.js";import"../support/timeUtils.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../layers/mixins/OrderedLayer.js";import"../layers/mixins/PortalLayer.js";import"../chunks/asyncUtils.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../layers/mixins/RefreshableLayer.js";import"../layers/mixins/ScaleRangeLayer.js";import"../layers/mixins/TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"../layers/support/TimeReference.js";import"../chunks/featureReductionUtils.js";import"../chunks/FeatureReduction.js";import"../layers/support/FeatureReductionBinning.js";import"../layers/support/AggregateField.js";import"../layers/support/OutStatistic.js";import"../layers/support/LabelClass.js";import"../chunks/labelUtils.js";import"../chunks/defaultsJSON.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/FeatureReductionSelection.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"../chunks/fieldProperties.js";import"../layers/support/FieldsIndex.js";import"../layers/support/GeometryFieldsInfo.js";import"../chunks/labelingInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"../chunks/versionUtils.js";import"../chunks/styleUtils.js";import"../support/popupUtils.js";import"../chunks/Heading.js";import"../widgets/support/widget.js";import"../chunks/accessibleHandler.js";import"../chunks/vmEvent.js";import"../chunks/themeUtils.js";import"../chunks/utils13.js";import"../chunks/numberUtils.js";import"../chunks/utils6.js";import"../chunks/ItemCache.js";import"../symbols/support/cimSymbolUtils.js";import"../chunks/utils7.js";import"../widgets/Spinner/SpinnerViewModel.js";import"../chunks/AnchorElementViewModel.js";import"../widgets/Popup/PopupViewModel.js";import"../symbols/support/symbolUtils.js";import"../chunks/colorUtils2.js";import"../chunks/mat2df32.js";import"../chunks/InputManager.js";import"../chunks/layerViewUtils.js";import"../chunks/actions.js";import"../widgets/support/GoTo.js";let d=class extends a{constructor(){super(...arguments),this.items=new l,this._watchUpdatingTracking=new u,this._callbacks=new Map,this._projector=c(),this._hiddenProjector=c()}get needsRender(){return this.items.length>0}initialize(){const t=document.createElement("div");t.className="esri-overlay-surface",this._set("surface",t),this._hiddenSurface=document.createElement("div"),this._hiddenSurface.setAttribute("style","visibility: hidden;"),t.appendChild(this._hiddenSurface),this._watchUpdatingTracking.addOnCollectionChange((()=>this.items),(t=>{for(const s of t.added){const t=()=>s.render();this._callbacks.set(s,t),this._projector.append(this.surface,t)}for(const s of t.removed){const t=this._projector.detach(this._callbacks.get(s));this.surface.removeChild(t.domNode),this._callbacks.delete(s)}}))}addItem(t){this.items.add(t)}removeItem(t){this.items.remove(t)}destroy(){this.items.removeAll(),this._callbacks.forEach((t=>this._projector.detach(t))),this._callbacks=null,this._projector=null,this._watchUpdatingTracking.destroy()}render(){this._projector.renderNow()}computeBoundingRect(t){const s=this._hiddenSurface,e=this._hiddenProjector;let r=null;const o=()=>(r=t.render(),r);e.append(s,o),e.renderNow();const i={left:0,top:0,right:0,bottom:0};if(r&&r.domNode){const t=r.domNode.getBoundingClientRect();i.left=t.left,i.top=t.top,i.right=t.right,i.bottom=t.bottom}for(e.detach(o);s.firstChild;)s.removeChild(s.firstChild);return i}overlaps(t,s){const e=this.computeBoundingRect(t),r=this.computeBoundingRect(s);return Math.max(e.left,r.left)<=Math.min(e.right,r.right)&&Math.max(e.top,r.top)<=Math.min(e.bottom,r.bottom)}get hasVisibleItems(){return this.items.some((t=>t.visible))}renderCanvas(t){if(!this.items.some((t=>t.visible)))return;const s=t.getContext("2d");s.save(),s.font=`10px ${getComputedStyle(this.surface).fontFamily}`,this.items.forEach((t=>{s.save(),t.renderCanvas(s),s.restore()})),s.restore()}};t([n({readOnly:!0})],d.prototype,"surface",void 0),t([n({readOnly:!0})],d.prototype,"items",void 0),t([n({readOnly:!0})],d.prototype,"needsRender",null),t([n({readOnly:!0})],d.prototype,"_watchUpdatingTracking",void 0),t([n({readOnly:!0,aliasOf:"_watchUpdatingTracking.updating"})],d.prototype,"updating",void 0),d=t([m("esri.views.overlay.ViewOverlay")],d);const j=d,y=[0,0];function k(t){const s=(t.ownerDocument||window.document).defaultView,e=t.getBoundingClientRect();return y[0]=e.left+s.pageXOffset,y[1]=e.top+s.pageYOffset,y}function f(t){t&&(r(t),t.parentNode&&t.parentNode.removeChild(t))}const b=r=>{let a=class extends r{constructor(...t){super(...t),this._freqInfo={freq:16,time:750},this._overlayRenderTaskHandle=null,this.height=0,this.position=null,this.resizing=!1,this.root=null,this.surface=null,this.suspended=!0,this.ui=null,this.userContent=null,this.width=0,this.widthBreakpoint=null,this.handles.add([o((()=>this.cursor),(t=>{const{surface:s}=this;s&&s.setAttribute("data-cursor",t)})),o((()=>this.interacting),(t=>{const{surface:s}=this;s&&s.setAttribute("data-interacting",t.toString())}))])}initialize(){this.handles.add(o((()=>this.ui),((t,s)=>this._handleUIChange(t,s)))),this._wireUI(this.ui),this.handles.add([this.on("focus",(()=>this.notifyChange("focused"))),this.on("blur",(()=>this.notifyChange("focused")))])}destroy(){this.destroyed||(this.ui&&(this.ui.destroy(),this.ui=null),this.popup&&!this.popup.destroyed&&this.popup.destroy(),this.container=null)}set container(t){const e=this._get("container");if(e===t)return;const r="dom-size";if(this.handles.remove(r),this._stopMeasuring(),e&&(e.classList.remove("esri-view"),this._overlayRenderTaskHandle&&(this._overlayRenderTaskHandle.remove(),this._overlayRenderTaskHandle=null),this.overlay.destroy(),this._set("overlay",null),f(this.root),this._set("root",null),s(this.userContent,e),f(this.userContent),this._set("userContent",null)),t){t.classList.add("esri-view");const e=document.createElement("div");e.className="esri-view-user-storage",s(t,e),t.appendChild(e),this._set("userContent",e);const n=document.createElement("div");n.className="esri-view-root",t.insertBefore(n,t.firstChild),this._set("root",n);const m=document.createElement("div");m.className="esri-view-surface",m.setAttribute("role","application"),m.tabIndex=0,n.appendChild(m),this._set("surface",m);const a=new j;n.appendChild(a.surface),this._set("overlay",a),o((()=>a.needsRender),(t=>{t&&!this._overlayRenderTaskHandle?this._overlayRenderTaskHandle=p({render:()=>{this.overlay.render()}}):this._overlayRenderTaskHandle&&(this._overlayRenderTaskHandle.remove(),this._overlayRenderTaskHandle=null)})),this.forceDOMReadyCycle(),this.handles.add(o((()=>this.size),(t=>{const[s,e]=t,r="esri-view-surface--inset-outline";s>=document.body.clientWidth||e>=document.body.clientHeight?m.classList.add(r):m.classList.remove(r)}),i),r),this._set("container",t),this._startMeasuring()}else this._set("width",0),this._set("height",0),this._set("position",null),this._set("suspended",!0),this._set("surface",null),this._set("container",null)}get focused(){const t=document.activeElement===this.surface;return document.hasFocus()&&t}get popup(){return this._get("popup")||new h({view:this})}set popup(t){const s=this._get("popup");s&&s!==t&&s.destroy(),this._set("popup",t)}get size(){return[this.width,this.height]}blur(){this.surface&&this.surface.blur()}focus(){this.surface&&this.surface.focus()}pageToContainer(t,s,e){const r=this.position;return t-=r[0],s-=r[1],e?(e[0]=t,e[1]=s):e=[t,s],e}containerToPage(t,s,e){const r=this.position;return t+=r[0],s+=r[1],e?(e[0]=t,e[1]=s):e=[t,s],e}_handleUIChange(t,s){s&&(this.handles.remove("ui"),s.destroy()),t&&this._wireUI(t),this._set("ui",t)}_wireUI(t){this.handles.remove("ui"),t&&(t.view=this,this.handles.add([o((()=>this.root),(s=>{t.container=s?function(t){const s=document.createElement("div");return t.appendChild(s),s}(s):null}),i),o((()=>this.popup),((s,e)=>{const r="popup";e&&t.remove(e,r),s&&(s.view=t.view,t.add(s,{key:r,position:"manual"}))}),i)],"ui"))}_stopMeasuring(){this.handles.remove("measuring"),this._get("resizing")&&this._set("resizing",!1)}_startMeasuring(){const t=this._freqInfo;t.freq=16,t.time=750,this.handles.add([(()=>{const s=()=>{t.freq=16,t.time=750};return window.addEventListener("resize",s),{remove(){window.removeEventListener("resize",s)}}})(),p({prepare:t=>{const s=this._measure(),e=this._freqInfo;if(e.time+=t.deltaTime,s&&(e.freq=16,this._get("resizing")||this._set("resizing",!0)),e.time<e.freq)return;e.time=0;const r=this._position();e.freq=r||s?16:Math.min(750,2*e.freq),!s&&e.freq>=512&&this._get("resizing")&&this._set("resizing",!1)}})],"measuring"),this._measure(),this._position()}_measure(){const t=this.container,s=t?t.clientWidth:0,e=t?t.clientHeight:0;if(0===s||0===e)return this.suspended||this._set("suspended",!0),!1;const r=this.width,o=this.height;return s===r&&e===o?(this.suspended&&this._set("suspended",!1),!1):(this._set("width",s),this._set("height",e),this.suspended&&this._set("suspended",!1),this.emit("resize",{oldWidth:r,oldHeight:o,width:s,height:e}),!0)}_position(){const t=this.container,s=this.position,e=k(t);return!(s&&e[0]===s[0]&&e[1]===s[1]||(this._set("position",[e[0],e[1]]),0))}forceDOMReadyCycle(){}};return t([n({value:null,cast:t=>e(t)})],a.prototype,"container",null),t([n({readOnly:!0})],a.prototype,"focused",null),t([n({readOnly:!0})],a.prototype,"height",void 0),t([n({type:h})],a.prototype,"popup",null),t([n({type:j})],a.prototype,"overlay",void 0),t([n({readOnly:!0})],a.prototype,"position",void 0),t([n({readOnly:!0})],a.prototype,"resizing",void 0),t([n({readOnly:!0})],a.prototype,"root",void 0),t([n({value:null,readOnly:!0})],a.prototype,"size",null),t([n({readOnly:!0})],a.prototype,"surface",void 0),t([n({readOnly:!0})],a.prototype,"suspended",void 0),t([n()],a.prototype,"ui",void 0),t([n({readOnly:!0})],a.prototype,"userContent",void 0),t([n({readOnly:!0})],a.prototype,"width",void 0),t([n()],a.prototype,"widthBreakpoint",void 0),a=t([m("esri.views.DOMContainer")],a),a};function g(t){return t&&"focus"in t}export{b as DOMContainer,g as isDOMContainer};

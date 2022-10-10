/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import t from"../Color.js";import{clone as s}from"../core/lang.js";import{aliasOf as r}from"../core/accessorSupport/decorators/aliasOf.js";import"../chunks/ensureType.js";import{e}from"../chunks/enumeration.js";import{property as i}from"../core/accessorSupport/decorators/property.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import{collectArcadeFieldNames as n}from"../layers/support/fieldUtils.js";import l from"./Renderer.js";import{VisualVariablesMixin as m}from"./mixins/VisualVariablesMixin.js";import a from"./support/AttributeColorInfo.js";import{JSONSupport as u}from"../core/JSONSupport.js";import j from"../symbols/SimpleFillSymbol.js";import c from"../symbols/SimpleLineSymbol.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/common.js";import"../chunks/maybe.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/jsonMap.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../chunks/tracking.js";import"../chunks/arcadeOnDemand.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/writer.js";import"../core/Accessor.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"./support/AuthoringInfo.js";import"./support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"./visualVariables/ColorVariable.js";import"./visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"./visualVariables/support/ColorStop.js";import"./visualVariables/OpacityVariable.js";import"./visualVariables/support/OpacityStop.js";import"../chunks/opacityUtils.js";import"./visualVariables/RotationVariable.js";import"./visualVariables/SizeVariable.js";import"../chunks/screenUtils.js";import"./visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../Graphic.js";import"../PopupTemplate.js";import"../core/Collection.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../chunks/number2.js";import"../chunks/locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"../chunks/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils2.js";import"../symbols/edges/Edges3D.js";import"../chunks/materialUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils3.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../chunks/aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../core/urlUtils.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../kernel.js";import"../request.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../core/Clonable.js";import"../chunks/lineMarkers.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../chunks/Thumbnail.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";var y;let b=y=class extends u{constructor(){super(...arguments),this.unit=null}clone(){return new y({unit:this.unit})}};o([i({type:String,json:{write:!0}})],b.prototype,"unit",void 0),b=y=o([p("esri.renderers.support.DotDensityLegendOptions")],b);const h=b;var d;let S=d=class extends(m(l)){constructor(o){super(o),this.attributes=null,this.backgroundColor=new t([0,0,0,0]),this.blendDots=!0,this.dotBlendingEnabled=!0,this.dotShape="square",this.dotSize=1,this.legendOptions=null,this.outline=new c,this.dotValue=null,this.referenceDotValue=null,this.referenceScale=null,this.seed=1,this.type="dot-density"}calculateDotValue(o){if(null==this.referenceScale)return this.dotValue;const t=o/this.referenceScale*this.dotValue;return t<1?1:t}getSymbol(){return new j({outline:this.outline})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}getAttributeHash(){return this.attributes&&this.attributes.reduce(((o,t)=>o+t.getAttributeHash()),"")}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new d({attributes:s(this.attributes),backgroundColor:s(this.backgroundColor),dotBlendingEnabled:s(this.dotBlendingEnabled),dotShape:s(this.dotShape),dotSize:s(this.dotSize),dotValue:s(this.dotValue),legendOptions:s(this.legendOptions),outline:s(this.outline),referenceScale:s(this.referenceScale),visualVariables:s(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}getControllerHash(){return`${this.attributes.map((o=>o.field||o.valueExpression||""))}-${this.outline&&JSON.stringify(this.outline.toJSON())||""}`}async collectRequiredFields(o,t){await this.collectVVRequiredFields(o,t);for(const s of this.attributes)s.valueExpression&&await n(o,t,s.valueExpression),s.field&&o.add(s.field)}};o([i({type:[a],json:{write:!0}})],S.prototype,"attributes",void 0),o([i({type:t,json:{write:!0}})],S.prototype,"backgroundColor",void 0),o([i({type:Boolean}),r("dotBlendingEnabled")],S.prototype,"blendDots",void 0),o([i({type:Boolean,json:{write:!0}})],S.prototype,"dotBlendingEnabled",void 0),o([i({type:String,json:{write:!1}})],S.prototype,"dotShape",void 0),o([i({type:Number,json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1}}}})],S.prototype,"dotSize",void 0),o([i({type:h,json:{write:!0}})],S.prototype,"legendOptions",void 0),o([i({type:c,json:{default:null,write:!0}})],S.prototype,"outline",void 0),o([i({type:Number,json:{write:!0}})],S.prototype,"dotValue",void 0),o([i({type:Number}),r("dotValue")],S.prototype,"referenceDotValue",void 0),o([i({type:Number,json:{write:!0}})],S.prototype,"referenceScale",void 0),o([i({type:Number,json:{write:!0}})],S.prototype,"seed",void 0),o([e({dotDensity:"dot-density"})],S.prototype,"type",void 0),S=d=o([p("esri.renderers.DotDensityRenderer")],S);const k=S;export{k as default};

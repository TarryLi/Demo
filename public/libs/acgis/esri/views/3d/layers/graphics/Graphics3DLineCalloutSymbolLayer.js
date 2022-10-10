// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../Color ../../../../core/maybe ../../../../core/screenUtils ../../../../chunks/vec2f64 ../../../../symbols/callouts/calloutUtils ./ElevationAligners ./elevationAlignmentUtils ./ElevationContext ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolLayer ./graphicUtils ./pointUtils ./symbolComplexity ../../webgl-engine/lib/basicInterfaces ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/Material ../../webgl-engine/lib/VertexAttribute ../../webgl-engine/materials/LineCalloutMaterial".split(" "),
function(u,r,v,h,w,z,A,B,k,C,D,n,E,x,F,G,H,I,l,p){n=function(q){function m(a,b){a=q.call(this,a,null,b,J)||this;a._elevationOptions={supportsOffsetAdjustment:!0,supportsOnTheGround:!1};a.ensureDrapedStatus(!1);return a}r._inheritsLoose(m,q);var e=m.prototype;e.doLoad=function(){var a=r._asyncToGenerator(function*(){this._material=new p.LineCalloutMaterial(this.materialParameters);this._context.stage.add(this._material)});return function(){return a.apply(this,arguments)}}();e.destroy=function(){q.prototype.destroy.call(this);
this._context.stage.remove(this._material);this._material=null};e._perInstanceMaterialParameters=function(a){const b=this.materialParameters;b.screenOffset=a.screenOffset||z.ZEROS;b.centerOffsetUnits=a.centerOffsetUnits||"world";return b};e._defaultElevationInfoNoZ=function(){return K};e.createGraphics3DGraphic=function(a){const b=a.renderingInfo;a=a.graphic;const c=this.setGraphicElevationContext(a,new C.ElevationContext,b.elevationOffset||0);var d=b.symbol;const f="on-the-ground"===this._elevationContext.mode&&
("cim"===d.type||!d.symbolLayers.some(g=>"object"===g.type||"text"===g.type));if("label-3d"!==d.type&&f||"point-3d"===d.type&&d.symbolLayers.every(g=>"text"===g.type&&!A.textSymbolLayerSupportsVerticalOffset(g)))return null;d=E.computeCentroid(a.geometry);return h.isNone(d)?null:this._createAs3DShape(d,c,b,a.uid)};e.layerOpacityChanged=function(){if(h.isNone(this._material))return!0;this._material.setParameters(this.materialParameters);return!0};e.layerElevationInfoChanged=function(a,b,c){c=k.elevationModeChangeUpdateType(m.elevationModeChangeTypes,
c,this._elevationContext.mode);if(c!==k.SymbolUpdateType.UPDATE)return c;a.forEach(d=>{const f=b(d);h.isSome(f)&&this.updateGraphicElevationContext(d.graphic,f)});return c};e.slicePlaneEnabledChanged=function(){if(h.isNone(this._material))return!0;this._material.setParameters({hasSlicePlane:this._context.slicePlaneEnabled});return!0};e.physicalBasedRenderingChanged=function(){return!0};e.pixelRatioChanged=function(){return!0};e.setGraphicElevationContext=function(a,b,c=0){a=q.prototype.setGraphicElevationContext.call(this,
a,b);a.addOffsetRenderUnits(c);return a};e.updateGraphicElevationContext=function(a,b){this.setGraphicElevationContext(a,b.elevationContext,b.metadata.elevationOffset);b.needsElevationUpdates=k.needsElevationUpdates2D(b.elevationContext.mode)};e.computeComplexity=function(){return{primitivesPerFeature:2,primitivesPerCoordinate:0,drawCallsPerFeature:0,estimated:!1,memory:F.emptySymbolComplexity.memory}};e._createVertexData=function(a){const {translation:b,centerOffset:c}=a;return[[l.VertexAttribute.POSITION,
b?{size:3,data:[b[0],b[1],b[2]],exclusive:!0}:{size:3,data:[0,0,0],exclusive:!0}],[l.VertexAttribute.NORMAL,{size:3,data:[0,0,1],exclusive:!0}],[l.VertexAttribute.AUXPOS1,c?{size:4,data:[c[0],c[1],c[2],c[3]],exclusive:!0}:{size:4,data:[0,0,0,1],exclusive:!0}]]};e._getOrCreateMaterial=function(a){const b=this._perInstanceMaterialParameters(a),c=p.LineCalloutMaterial.uniqueMaterialIdentifier(b);if(h.isSome(this._material)&&c===this._material.uniqueMaterialIdentifier)return{material:this._material,isUnique:!1};
if(a.materialCollection){let d=a.materialCollection.get(c);h.isNone(d)&&(d=new p.LineCalloutMaterial(b),a.materialCollection.add(c,d));return{material:d,isUnique:!1}}return{material:new p.LineCalloutMaterial(b),isUnique:!0}};e._createAs3DShape=function(a,b,c,d){var f=[new H.Geometry(this._createVertexData(c),L,G.PrimitiveType.Point)];const g=this._getOrCreateMaterial(c);d=x.createStageObjectForHUD(this._context,a,f,[g.material],b,this._context.layer.uid,d);if(null===d)return null;f=new D.Graphics3DObject3DGraphicLayer(this,
d.object,f,g.isUnique?[g.material]:null,null,B.perObjectElevationAligner,b);f.metadata={elevationOffset:c.elevationOffset||0};f.alignedSampledElevation=d.sampledElevation;f.needsElevationUpdates=k.needsElevationUpdates2D(b.mode);x.extendPointGraphicElevationContext(f,a,this._context.elevationProvider);return f};r._createClass(m,[{key:"materialParameters",get:function(){const a=this.symbol;var b=a.callout;const c=h.isSome(b.color)?v.toUnitRGBA(b.color):[0,0,0,0];c[3]*=this._getLayerOpacity();const d=
w.pt2px(b.size||0);let f=null;if(a.verticalOffset){const {screenLength:M,minWorldLength:N,maxWorldLength:y}=a.verticalOffset;f={screenLength:w.pt2px(M),minWorldLength:N||0,maxWorldLength:null!=y?y:Infinity}}b=h.isSome(b.border)&&h.isSome(b.border.color)?v.toUnitRGBA(b.border.color):null;const g="object"===a.symbolLayers.getItemAt(0).type;return{color:c,size:d,verticalOffset:f,screenSizePerspective:this._context.screenSizePerspectiveEnabled?this._context.sharedResources.screenSizePerspectiveSettings:
null,screenOffset:[0,0],centerOffsetUnits:"world",borderColor:b,occlusionTest:!g,shaderPolygonOffset:g?0:void 0,depthHUDAlignStart:"label-3d"===a.type,hasSlicePlane:this._context.slicePlaneEnabled,renderOccluded:I.RenderOccludedFlag.Occlude,__tagStrict:"NoParameters"}}}]);return m}(n.Graphics3DSymbolLayer);n.elevationModeChangeTypes={definedChanged:k.SymbolUpdateType.UPDATE,staysOnTheGround:k.SymbolUpdateType.UPDATE,onTheGroundChanged:k.SymbolUpdateType.RECREATE};const t=new Uint16Array([0]),L=[[l.VertexAttribute.POSITION,
t],[l.VertexAttribute.NORMAL,t],[l.VertexAttribute.AUXPOS1,t]],K={mode:"relative-to-ground",offset:0},J={ignoreDrivers:!0,renderPriority:0,renderPriorityStep:1};u.Graphics3DLineCalloutSymbolLayer=n;Object.defineProperties(u,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
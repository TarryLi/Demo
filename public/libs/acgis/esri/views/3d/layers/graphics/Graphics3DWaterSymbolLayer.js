// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../Color ../../../../core/maybe ../../../../core/unitUtils ../../../../chunks/earcut ../../../../chunks/mat4f64 ../../../../chunks/vec2 ../../../../chunks/vec2f64 ../../../../chunks/vec4 ../../../../chunks/common ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/aaBoundingRect ./ElevationAligners ./elevationAlignmentUtils ./ElevationContext ./Graphics3DDrapedGraphicLayer ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolLayer ./polygonUtils ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/RenderGeometry ../../webgl-engine/materials/WaterMaterial ../../webgl-engine/materials/internal/waterMaterialUtils".split(" "),
function(B,C,H,k,I,D,J,K,v,E,L,m,y,M,q,N,O,P,t,r,Q,R,F,S){const T=["polyline","polygon","extent"];t=function(w){function l(a,b,c,d){return w.call(this,a,b,c,d)||this}C._inheritsLoose(l,w);var h=l.prototype;h.doLoad=function(){var a=C._asyncToGenerator(function*(){});return function(){return a.apply(this,arguments)}}();h.destroy=function(){w.prototype.destroy.call(this);this._context.stage.remove(this._material);this._material=null};h.createGraphics3DGraphic=function(a){a=a.graphic;if(!this._validateGeometry(a.geometry,
T,this.symbolLayer.type))return null;const b=this.setGraphicElevationContext(a,new N.ElevationContext);this.ensureDrapedStatus("on-the-ground"===b.mode);this.ensureMaterial();return this.draped?this._createAsOverlay(a):this._createAs3DShape(a,b,a.uid)};h.ensureMaterial=function(){if(!k.isSome(this._material)){var a=new F.WaterMaterialParameters,b=this.symbolLayer.color;k.isSome(b)&&(a.color=H.toUnitRGBA(b));b=this._getCombinedOpacity(b,{hasIntrinsicColor:!0});a.color=[a.color[0],a.color[1],a.color[2],
b];a.transparent=1>b||this.needsDrivenTransparentPass;a.waveDirection=k.isSome(this.symbolLayer.waveDirection)?l.headingVectorFromAngle(this.symbolLayer.waveDirection):v.fromValues(0,0);b=S.wavePresets[this.symbolLayer.waveStrength+"-"+this.symbolLayer.waterbodySize];a.waveStrength=b.waveStrength;a.waveTextureRepeat=b.textureRepeat;a.waveVelocity=b.waveVelocity;a.flowStrength=b.perturbationStrength;a.hasSlicePlane=this._context.slicePlaneEnabled;a.isDraped=this.draped;this._material=new F.WaterMaterial(a);
this._context.stage.add(this._material)}};h.layerOpacityChanged=function(){if(k.isNone(this._material))return!0;const a=this._material.parameters.color,b=this._getCombinedOpacity(this.symbolLayer.color,{hasIntrinsicColor:!0});this._material.setParameters({color:[a[0],a[1],a[2],b],transparent:1>b||this.needsDrivenTransparentPass});return!0};h.layerElevationInfoChanged=function(a,b,c){const d=this._elevationContext.mode;c=q.elevationModeChangeUpdateType(l.elevationModeChangeTypes,c,d);if(c!==q.SymbolUpdateType.UPDATE)return c;
const e=q.needsElevationUpdates2D(d);return this.updateGraphics3DGraphicElevationInfo(a,b,()=>e)};h.slicePlaneEnabledChanged=function(){k.isSome(this._material)&&this._material.setParameters({hasSlicePlane:this._context.slicePlaneEnabled});return!0};h.physicalBasedRenderingChanged=function(){return!0};h.pixelRatioChanged=function(){return!0};h._createAs3DShape=function(a,b,c){a=r.geometryAsPolygon(a.geometry);if(k.isNone(a))return null;f.renderData=r.geometryToRenderInfo(a,this._context.elevationProvider,
this._context.renderCoordsHelper,b);const d=f.renderData.position.length/3;f.uvCoords=new Float64Array(2*d);f.outNum=0;f.outGeometries=[];f.outTransforms=[];f.outMaterials=[];this._create3DShapeGeometries(f);this._logGeometryCreationWarnings(f.renderData,a.rings,"rings","WaterSymbol3DLayer");if(0===f.outNum)return null;this._createUVCoordsFromVertices(f.uvCoords,f.renderData.mapPosition,d,this._context.elevationProvider.spatialReference);c=new Q.Object3D({geometries:f.outGeometries,materials:f.outMaterials,
transformations:f.outTransforms,castShadow:!1,metadata:{layerUid:this._context.layer.uid,graphicUid:c}});c=new P.Graphics3DObject3DGraphicLayer(this,c,f.outGeometries,null,null,M.perVertexElevationAligner,b);c.alignedSampledElevation=f.renderData.sampledElevation;c.needsElevationUpdates=q.needsElevationUpdates2D(b.mode);return c};h._createUVCoordsFromVertices=function(a,b,c,d){d=I.getMetersPerUnitForSR(d);y.empty(n);for(var e=0;e<c;e++)K.set(G,b[3*e],b[3*e+1]),y.expandPointInPlace(n,G);E.scale(n,
n,d);e=n[1]%l.unitSizeOfTexture;x[0]=n[0]-n[0]%l.unitSizeOfTexture;x[1]=n[1]-e;for(e=0;e<c;e++)a[2*e]=(b[3*e]*d-x[0])/l.unitSizeOfTexture,a[2*e+1]=(b[3*e+1]*d-x[1])/l.unitSizeOfTexture};h._create3DShapeGeometries=function(a){var b=a.renderData.polygons;const c=a.uvCoords;for(const {count:d,index:e,position:z,mapPosition:u,holeIndices:A}of b){if(k.isSome(this._context.clippingExtent)&&(m.empty(p),m.expandWithBuffer(p,u),!m.intersectsClippingArea(p,this._context.clippingExtent)))continue;b=D.earcut(u,
A,3);if(0===b.length)continue;b=new Uint32Array(b);const U=new Float64Array(c.buffer,2*e*c.BYTES_PER_ELEMENT,2*d);b=r.createWaterGeometry({indices:b,attributeData:{position:z,uv0:U,mapPosition:u}});a.outGeometries.push(b);a.outMaterials.push(k.unwrap(this._material));a.outTransforms.push(J.IDENTITY);a.outNum++}};h._createAsOverlay=function(a){const b=r.geometryAsPolygon(a.geometry);if(k.isNone(b))return null;k.unwrap(this._material).renderPriority=this._renderPriority;g.renderData=r.geometryToRenderInfoDraped(b,
this._context.overlaySR);const c=g.renderData.position.length/3;g.uvCoords=new Float64Array(2*c);g.outNum=0;g.outGeometries=[];g.outBoundingBox=m.empty();g.layerUid=this._context.layer.uid;g.graphicsUid=a.uid;this._createAsOverlayWater(g);this._logGeometryCreationWarnings(g.renderData,b.rings,"rings","WaterSymbol3DLayer");if(0===g.outNum)return null;this._createUVCoordsFromVertices(g.uvCoords,g.renderData.position,c,this._context.overlaySR);return 0<g.outNum?new O(this,g.outGeometries,g.outBoundingBox,
this._context.drapeSourceRenderer):null};h._createAsOverlayWater=function(a){const b=a.uvCoords;var c=a.renderData.polygons;for(const {position:e,holeIndices:z,index:u,count:A}of c)if(m.empty(p),m.expandWithBuffer(p,e),m.intersectsClippingArea(p,this._context.clippingExtent)&&(m.expandWithAABB(a.outBoundingBox,p),c=D.earcut(e,z,3),0!==c.length)){c=new Uint32Array(c);var d=new Float64Array(b.buffer,2*u*b.BYTES_PER_ELEMENT,2*A);c=r.createWaterGeometry({indices:c,attributeData:{position:e,uv0:d}});c=
new R.RenderGeometry(c,k.unwrap(this._material),{layerUid:a.layerUid,graphicUid:a.graphicsUid});d=p;E.set(c.boundingSphere,.5*(d[0]+d[3]),.5*(d[1]+d[4]),0,.5*Math.sqrt((d[3]-d[0])*(d[3]-d[0])+(d[4]-d[1])*(d[4]-d[1])));a.outGeometries.push(c);a.outNum++}};l.headingVectorFromAngle=function(a){const b=v.create();a=L.toRadian(a);b[0]=Math.sin(a);b[1]=Math.cos(a);return b};h.test=function(){return{...w.prototype.test.call(this),create3DShape:a=>this._createAs3DShape(a.graphic,a.elevationContext,a.graphicUid),
ensureMaterial:()=>this.ensureMaterial()}};return l}(t.Graphics3DSymbolLayer);t.unitSizeOfTexture=100;t.elevationModeChangeTypes={definedChanged:q.SymbolUpdateType.RECREATE,staysOnTheGround:q.SymbolUpdateType.NONE,onTheGroundChanged:q.SymbolUpdateType.RECREATE};const x=v.create(),n=y.create(),G=v.create(),p=m.create(),f={renderData:null,uvCoords:null,outNum:0,outBoundingBox:null,outGeometries:null,outMaterials:null,outTransforms:null},g={renderData:null,uvCoords:null,outNum:0,outBoundingBox:null,
outGeometries:null,outMaterials:null,outTransforms:null};B.Graphics3DWaterSymbolLayer=t;Object.defineProperties(B,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
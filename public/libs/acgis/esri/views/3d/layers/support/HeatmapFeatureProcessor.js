// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/byteSizeEstimations ../../../../core/Error ../../../../core/HandleOwner ../../../../core/handleUtils ../../../../core/Logger ../../../../core/maybe ../../../../core/reactiveUtils ../../../../core/screenUtils ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/projection ../../../../geometry/support/scaleUtils ../../../../layers/graphics/dehydratedFeatures ../../../../layers/graphics/featureConversionUtils ../../../../layers/graphics/OptimizedFeature ../../../../layers/graphics/OptimizedGeometry ../../../../layers/graphics/data/FeatureStore ../../../../layers/support/fieldUtils ../../../../renderers/support/heatmapUtils ../interfaces ../../terrain/OverlayRenderer ../../webgl-engine/lib/basicInterfaces ../../webgl-engine/lib/DrapedHeatmapRenderer ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/ModelDirtyTypes ../../webgl-engine/lib/RenderGeometry ../../webgl-engine/lib/VertexAttribute ../../webgl-engine/materials/HeatmapDensityMaterial".split(" "),
function(c,r,d,t,u,I,x,J,l,q,y,e,Z,aa,ba,K,L,M,N,O,z,A,P,B,Q,R,S,T,U,C,V,W,D,X,E,F){const w=J.getLogger("esri.views.3d.layers.support.HeatmapFeatureProcessor");c.HeatmapFeatureProcessor=function(G){function v(a){a=G.call(this,a)||this;a.type="heatmap";a.filterVisibility={filterChanged(){},dirty:!1};a.preferredUpdatePolicy=C.UpdatePolicy.ASYNC;a.dataExtent=null;a.drapeSourceType=T.DrapeSourceType.Features;a._renderGeometries=new Map;a._material=new F.HeatmapDensityMaterial({});a._materialWithField=
new F.HeatmapDensityMaterial({isAttributeDriven:!0});a._fieldTotal=0;a._drapeSourceRenderer=null;return a}r._inheritsLoose(v,G);var m=v.prototype;m.initialize=function(){this._featureStore=new Q({geometryType:"esriGeometryPoint",hasZ:this.hasZ,hasM:this.hasM});const {colorBufferFloat:a,textureFloat:f}=this._renderView.capabilities,{floatBufferBlendWorking:h}=this._renderView.renderingContext.driverTest;if(null==f||!f.textureFloat)throw new u("heatmap:missing-texture-float","HeatmapRenderer requires WebGL2 or the WebGL1 extension OES_texture_float.");
if(null==a||!a.textureFloat)throw new u("heatmap:missing-color-buffer-float","HeatmapRenderer requires the WebGL2 extension EXT_color_buffer_float or the WebGL1 extension WEBGL_color_buffer_float.");if(null==a||!a.floatBlend)throw new u("heatmap:missing-float-blend","HeatmapRenderer requires the WebGL extension EXT_float_blend.");if(!h)throw new u("heatmap:missing-float-blend","HeatmapRenderer requires the WebGL extension EXT_float_blend. This device claims support for it, but does not actually support it.");
this._drapeSourceRenderer=this.view.basemapTerrain.overlayManager.registerDrapeSource(this,V.DrapedHeatmapRenderer,this._rendererParameters);this.updatingHandles.addOnCollectionChange(()=>this._loadedPointGraphics,b=>this._onLoadedFeaturesChange(b),q.initial);this.updatingHandles.addWhen(()=>this._materialParameters,b=>this._forEachMaterial(g=>g.setParameters(b)),q.initial);this.updatingHandles.add(()=>this._rendererParameters,b=>this._drapeSourceRenderer.set(b));this.updatingHandles.add(()=>this._heatmapRendererField,
()=>{this._recreate()},q.sync);this.updatingHandles.add(()=>({fieldName:this._heatmapRendererFieldName,numeric:this._heatmapRendererFieldIsNumeric}),({fieldName:b,numeric:g})=>{if(l.isSome(b)&&g){let k=0;this._featureStore.forEach(n=>{var p;return k+=null!=(p=n.attributes[b])?p:0});this._fieldTotal=k}else this._fieldTotal=this._featureStore.numFeatures},q.initial);this.handles.add([q.watch(()=>({fieldName:this._heatmapRendererFieldName,field:this._heatmapRendererField}),({fieldName:b,field:g})=>{if(b&&
!g){var k;w.warn(`Heatmap renderer field '${b}' for layer '${null!=(k=this.layer.title)?k:this.layer.id}' not found`)}}),q.watch(()=>({field:this._heatmapRendererField,numeric:this._heatmapRendererFieldIsNumeric}),({field:b,numeric:g})=>{if(l.isSome(b)&&!g){var k;w.warn(`Heatmap renderer field '${b.name}' for layer '${null!=(k=this.layer.title)?k:this.layer.id}' does not contain numeric values and cannot be used to drive the heatmap density`)}}),x.makeHandle(()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this))])};
m.destroy=function(){this._renderGeometries.clear();this._material=l.disposeMaybe(this._material);this._materialWithField=l.disposeMaybe(this._materialWithField);this._featureStore.clear();this._featureStore=null};m.whenGraphicBounds=function(){var a=r._asyncToGenerator(function*(){return null});return function(){return a.apply(this,arguments)}}();m.computeAttachmentOrigin=function(){return null};m.highlight=function(){return H};m.maskOccludee=function(){return H};m.setObjectIdVisibility=function(){};
m.setup=function(){var a=r._asyncToGenerator(function*(){});return function(){return a.apply(this,arguments)}}();m._onLoadedFeaturesChange=function(a){if(this._featuresArePoints){var {objectIdField:f}=this.layer;this._featureStore.removeManyById(a.removed.map(b=>z.getObjectId(b,f)));this._featureStore.addMany(a.added.map(b=>new P.OptimizedFeature(A.convertFromPoint(new B,b.geometry),b.attributes,l.applySome(b.centroid,g=>A.convertFromPoint(new B,g)),z.getObjectId(b,f))));var h=a.added;a=a.removed;
this._fieldTotal+=this._computeFieldTotalChange(h,a);a=l.mapSome(a,({uid:b})=>{const g=this._renderGeometries.get(b);this._renderGeometries.delete(b);return g});h=h.map(b=>{const g=this._pointGraphicToRenderGeometry(b);this._renderGeometries.set(b.uid,g);return g});0<a.length&&this._drapeSourceRenderer.removeGeometries(a,D.ModelDirty.Geometry.REMOVE);0<h.length&&this._drapeSourceRenderer.addGeometries(h,D.ModelDirty.Geometry.ADD);(0<h.length||0<a.length)&&this._renderView.requestRender()}};m._recreate=
function(){if(this._loadedPointGraphics){var a=this._loadedPointGraphics.toArray();this._onLoadedFeaturesChange({added:a,removed:a})}};m._pointGraphicToRenderGeometry=function(a){const f=this._heatmapRendererFieldName,h=l.isSome(f)?this._materialWithField:this._material,b=M.create();N.projectPointToVector(a.geometry,b,this._overlaySpatialReference);b[2]=U.DRAPED_Z;const g=[[E.VertexAttribute.POSITION,{data:b,size:b.length}]],k=this._heatmapRendererFieldIsNumeric;if(l.isSome(f)){var n;g.push([E.VertexAttribute.FEATUREATTRIBUTE,
{data:[k?null!=(n=a.attributes[f])?n:0:0],size:1}])}a=new X.RenderGeometry(new W.Geometry(g,null,C.PrimitiveType.Point),h,{layerUid:this.layer.uid,graphicUid:a.uid});L.copy(a.boundingSphere,b);return a};m._forEachMaterial=function(a){a(this._material);a(this._materialWithField)};m._computeFieldTotalChange=function(a,f){if(l.isNone(this._heatmapRendererFieldName)||!this._heatmapRendererFieldIsNumeric)return a.length-f.length;const h=this._heatmapRendererFieldName,b=(g,k)=>{var n;return g+(null!=(n=
k.attributes[h])?n:0)};return a.reduce(b,0)-f.reduce(b,0)};m._clampSearchRadius=function(a){112<a&&w.warnOnce("SceneView supports a maximum radius of 112 pt for HeatmapRenderer.");return Math.min(a,112)};r._createClass(v,[{key:"layer",get:function(){return this.owner.layer}},{key:"featureStore",get:function(){return this._featureStore}},{key:"updating",get:function(){return this.updatingHandles.updating}},{key:"updatingRemaining",get:function(){return 0}},{key:"suspendInfo",get:function(){return{}}},
{key:"legendEnabled",get:function(){return!0}},{key:"displayFeatureLimit",get:function(){var a,f,h,b,g,k;const n=null!=(a=null==(f=this.owner)?void 0:null==(h=f.view)?void 0:null==(b=h.resourceController)?void 0:null==(g=b.memoryController)?void 0:g.memoryFactor)?a:1;var p=(a=null==(p=this.owner)?void 0:null==(k=p.view)?void 0:k.qualitySettings)?Math.ceil(a.heatmap.maxTotalNumberOfFeatures*n):0;return{minimumTotalNumberOfFeatures:0,maximumTotalNumberOfFeatures:p,maximumTotalNumberOfPrimitives:2*p,
maximumNumberOfFeatures:p}}},{key:"hasZ",get:function(){return"hasZ"in this.layer&&this.layer.hasZ}},{key:"hasM",get:function(){return"hasM"in this.layer&&this.layer.hasM}},{key:"view",get:function(){return this.owner.view}},{key:"fullOpacity",get:function(){return this.owner.fullOpacity}},{key:"updatePolicy",get:function(){return this.owner.updatePolicy}},{key:"scaleVisibilitySuspended",get:function(){return!1}},{key:"usedMemory",get:function(){var a,f,h,b,g;const k=this.usedMemoryPerFeature*this._featureStore.numFeatures,
{R32F:n}=null==(a=this._renderView)?void 0:null==(f=a.capabilities)?void 0:f.colorBufferFloat;a=null!=n?1:4;f=null!=(h=Math.ceil((null==(b=this._overlayRenderer)?NaN:null==(g=b.overlays[0])?NaN:g.resolution)*this._densityMapPixelRatio))?h:0;h=f*f*a*4;b=l.isSome(this._heatmapRenderer)?y.pt2px(Math.min(this._heatmapRenderer.radius,112)):0;return h+k+b*a*4}},{key:"usedMemoryPerFeature",get:function(){if(0===this._featureStore.numFeatures)return 0;let a=0;this._featureStore.forEach(g=>a+=t.estimateAttributesObjectSize(g.attributes));
a/=this._featureStore.numFeatures;const f=t.estimateNumberByteSize(),h=6*t.estimateFixedArraySize([0,0,0],f),b=6*t.estimateFixedArraySize([0,0],f);return h+b+(this._heatmapRendererFieldIsNumeric?6*f:0)+a}},{key:"unprocessedMemoryEstimate",get:function(){return 0}},{key:"performanceInfo",get:function(){return{core:{visible:this._featureStore.numFeatures,missing:0,pending:0},elevationUpdating:!1,visibilityFrustum:!0,visibilityScale:!0}}},{key:"_overlayRenderer",get:function(){return this.view.basemapTerrain.overlayManager.renderer}},
{key:"_overlaySpatialReference",get:function(){return l.unwrap(this._overlayRenderer.spatialReference)}},{key:"_rendererParameters",get:function(){return{...this._radiusParameter,...this._densityParameters,...this._colorRampParameter,...this._pixelRatioParameter}}},{key:"_materialParameters",get:function(){return{...this._radiusParameter,...this._resolutionForScaleParameter}}},{key:"_densityParameters",get:function(){const a=this._heatmapRenderer;if(l.isNone(a))return null;const {minDensity:f,maxDensity:h}=
a;return{minDensity:f,maxDensity:h,fieldTotal:this._fieldTotal}}},{key:"_radiusParameter",get:function(){return l.applySome(this._heatmapRenderer,({radius:a})=>({searchRadius:y.pt2px(this._clampSearchRadius(a))}))}},{key:"_resolutionForScaleParameter",get:function(){return l.applySome(this._heatmapRenderer,({referenceScale:a})=>({resolutionForScale:0===a?0:O.getResolutionForScale(a,this.view.spatialReference)}))}},{key:"_colorRampParameter",get:function(){return l.applySome(this._heatmapRenderer,
a=>({colorRampData:S.generateGradient(a.colorStops)}))}},{key:"_pixelRatioParameter",get:function(){return{pixelRatio:this._densityMapPixelRatio}}},{key:"_densityMapPixelRatio",get:function(){var a,f,h,b,g,k,n,p;const Y=null!=(a=null==(f=this.owner)?void 0:null==(h=f.view)?void 0:null==(b=h.resourceController)?void 0:null==(g=b.memoryController)?void 0:g.memoryFactor)?a:1;return(null!=(k=null==(n=this.owner)?void 0:null==(p=n.view)?void 0:p.qualitySettings.heatmap.pixelRatio)?k:1)*Math.sqrt(Y)}},
{key:"_renderView",get:function(){return this.view._stage.renderView}},{key:"_featuresArePoints",get:function(){return"point"===this.layer.geometryType}},{key:"_loadedPointGraphics",get:function(){return this.owner.loadedGraphics}},{key:"_heatmapRenderer",get:function(){const a=this.layer.renderer;return"heatmap"===(null==a?void 0:a.type)?a:null}},{key:"_heatmapRendererFieldName",get:function(){return l.applySome(this._heatmapRenderer,a=>a.field)}},{key:"_heatmapRendererField",get:function(){return l.applySome(this._heatmapRendererFieldName,
a=>this.layer.fieldsIndex.get(a))}},{key:"_heatmapRendererFieldIsNumeric",get:function(){const a=this._heatmapRendererField;return l.isNone(a)?!1:R.isNumericField(a)}}]);return v}(I.HandleOwner);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"type",void 0);d.__decorate([e.property({constructOnly:!0})],c.HeatmapFeatureProcessor.prototype,"owner",void 0);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"layer",null);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,
"featureStore",null);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"updating",null);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"updatingRemaining",null);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"suspendInfo",null);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"legendEnabled",null);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"filterVisibility",void 0);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,
"displayFeatureLimit",null);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"preferredUpdatePolicy",void 0);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"hasZ",null);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"hasM",null);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"dataExtent",void 0);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"view",null);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,
"fullOpacity",null);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"updatePolicy",null);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"drapeSourceType",void 0);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"_featureStore",void 0);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"_overlayRenderer",null);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"_overlaySpatialReference",null);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,
"_rendererParameters",null);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"_materialParameters",null);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"_densityParameters",null);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"_radiusParameter",null);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"_resolutionForScaleParameter",null);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"_colorRampParameter",null);d.__decorate([e.property()],
c.HeatmapFeatureProcessor.prototype,"_pixelRatioParameter",null);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"_densityMapPixelRatio",null);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"_renderGeometries",void 0);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"_material",void 0);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"_materialWithField",void 0);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"_renderView",
null);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"_featuresArePoints",null);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"_loadedPointGraphics",null);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"_heatmapRenderer",null);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"_heatmapRendererFieldName",null);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"_heatmapRendererField",null);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,
"_heatmapRendererFieldIsNumeric",null);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"_fieldTotal",void 0);d.__decorate([e.property()],c.HeatmapFeatureProcessor.prototype,"_drapeSourceRenderer",void 0);c.HeatmapFeatureProcessor=d.__decorate([K.subclass("esri.views.3d.layers.support.HeatmapFeatureProcessor")],c.HeatmapFeatureProcessor);const H=x.makeHandle();c.MAX_RADIUS_PT=112;Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
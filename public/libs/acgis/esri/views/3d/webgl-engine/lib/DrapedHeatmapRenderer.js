// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/maybe ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../ViewingMode ../core/shaderTechnique/ShaderTechniqueConfiguration ./glUtil3D ./SortedRenderGeometryRenderer ../shaders/HeatmapTechnique ../../../webgl/enums ../../../webgl/FramebufferObject ../../../webgl/Texture ../../../webgl/Util".split(" "),
function(c,q,g,m,w,h,G,H,I,x,y,z,A,B,r,b,C,D,E){c.DrapedHeatmapRenderer=function(t){function n(a){a=t.call(this,a)||this;a.pixelRatio=1;a._colorRampData=new Uint8ClampedArray(4);a.type="draped-heatmap";a._heatmapParameters=new r.HeatmapPassParameters;return a}q._inheritsLoose(n,t);var p=n.prototype;p.initialize=function(){var a={colorTarget:b.TargetType.TEXTURE,depthStencilTarget:b.DepthStencilTargetType.NONE,width:0,height:0},{capabilities:d}=this.rctx,{R32F:e}=d.colorBufferFloat;({textureFloatLinear:d}=
d.textureFloat);e=null!=e;this._densityMap=new C.FramebufferObject(this.rctx,a,{target:b.TextureType.TEXTURE_2D,pixelFormat:e?b.PixelFormat.RED:b.PixelFormat.RGBA,internalFormat:e?b.SizedPixelFormat.R32F:b.PixelFormat.RGBA,dataType:b.PixelType.FLOAT,samplingMode:d?b.TextureSamplingMode.LINEAR:b.TextureSamplingMode.NEAREST,wrapMode:b.TextureWrapMode.CLAMP_TO_EDGE,width:0,height:0});this._quad=A.createQuadVAO(this.rctx);a=this._colorRampData;this._colorRamp=new D.Texture(this.rctx,{target:b.TextureType.TEXTURE_2D,
pixelFormat:b.PixelFormat.RGBA,dataType:b.PixelType.UNSIGNED_BYTE,samplingMode:b.TextureSamplingMode.LINEAR,wrapMode:b.TextureWrapMode.CLAMP_TO_EDGE,width:a.length/4,height:1},a);this._technique=new r.HeatmapTechnique({rctx:this.rctx,viewingMode:y.ViewingMode.Local},new z.ShaderTechniqueConfiguration);this._heatmapParameters.densityMap=this._densityMap.colorTexture;this.own(w.watch(()=>[this.colorRampData,this.minDensity,this.maxDensity,this.fieldTotal,this.pixelRatio,this.searchRadius],()=>this.rendererContext.notifyContentChanged()))};
p.destroy=function(){this._technique=m.releaseMaybe(this._technique);this._densityMap=m.disposeMaybe(this._densityMap);this._quad=m.disposeMaybe(this._quad);this._colorRamp=m.disposeMaybe(this._colorRamp)};p.render=function(a,d){const e=this._sortedMaterialRenderers,u=e.length;if(!(1>u)){var F=this.rctx.getBoundFramebufferObject(),k=this.rctx.getViewport(),{pixelRatio:f}=this,l=Math.ceil(k.width*f);f=Math.ceil(k.height*f);this._densityMap.resize(l,f);this.rctx.bindFramebuffer(this._densityMap);this.rctx.setViewport(0,
0,l,f);this.rctx.clear(b.ClearBufferBit.COLOR_BUFFER_BIT);l=!1;for(f=0;f<u;f++){const v=e.getItemAt(f);v.material.shouldRender(a)&&(l=l||v.materialRenderer.render(a.pass,d))}this.rctx.bindFramebuffer(F);this.rctx.setViewport(k.x,k.y,k.width,k.height);l&&(this.rctx.bindVAO(this._quad),this.rctx.useProgram(this._technique.program),this._technique.bindPipelineState(this.rctx),this._technique.bindPass(this._heatmapParameters,a.bindParameters),this.rctx.drawArrays(this._technique.primitiveType,0,E.vertexCount(this._quad,
"geometry")))}};q._createClass(n,[{key:"searchRadius",get:function(){return this._heatmapParameters.searchRadius},set:function(a){a!==this._heatmapParameters.searchRadius&&(this._heatmapParameters.searchRadius=a,this.notifyChange("searchRadius"))}},{key:"minDensity",get:function(){return this._heatmapParameters.minDensity},set:function(a){a!==this._heatmapParameters.minDensity&&(this._heatmapParameters.minDensity=a,this.notifyChange("minDensity"))}},{key:"maxDensity",get:function(){return this._heatmapParameters.maxDensity},
set:function(a){a!==this._heatmapParameters.maxDensity&&(this._heatmapParameters.maxDensity=a,this.notifyChange("maxDensity"))}},{key:"fieldTotal",get:function(){return this._heatmapParameters.fieldTotal},set:function(a){this._heatmapParameters.fieldTotal=a;this.notifyChange("fieldTotal")}},{key:"colorRampData",get:function(){return this._colorRampData},set:function(a){const {colorRamp:d}=this._heatmapParameters;if(m.isSome(d)&&a!==this._colorRampData){const e=a.length/4;e!==d.descriptor.width&&d.resize(e,
1);d.setData(a)}this._colorRampData=a}},{key:"_colorRamp",get:function(){return this._heatmapParameters.colorRamp},set:function(a){this._heatmapParameters.colorRamp=a}},{key:"hasHighlights",get:function(){return!1}},{key:"hasWater",get:function(){return!1}},{key:"rendersOccluded",get:function(){return!1}}]);return n}(B.SortedRenderGeometryRenderer);g.__decorate([h.property()],c.DrapedHeatmapRenderer.prototype,"searchRadius",null);g.__decorate([h.property()],c.DrapedHeatmapRenderer.prototype,"minDensity",
null);g.__decorate([h.property()],c.DrapedHeatmapRenderer.prototype,"maxDensity",null);g.__decorate([h.property()],c.DrapedHeatmapRenderer.prototype,"fieldTotal",null);g.__decorate([h.property()],c.DrapedHeatmapRenderer.prototype,"pixelRatio",void 0);g.__decorate([h.property()],c.DrapedHeatmapRenderer.prototype,"colorRampData",null);g.__decorate([h.property()],c.DrapedHeatmapRenderer.prototype,"_colorRampData",void 0);c.DrapedHeatmapRenderer=g.__decorate([x.subclass("esri.views.3d.webgl-engine.lib.DrapedHeatmapRenderer")],
c.DrapedHeatmapRenderer);Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../core/shaderLibrary/ShaderOutputOptions ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../lib/basicInterfaces ../lib/OrderIndependentTransparency ../lib/Program ../lib/RenderSlot ../lib/StencilUtils ../lib/VertexAttribute ../../../../chunks/RibbonLine.glsl ../../../webgl/enums ../../../webgl/renderState".split(" "),function(z,p,r,A,t,B,n,u,g,C,v,c,e,D,w,f){const x=
new Map([[e.VertexAttribute.POSITION,0],[e.VertexAttribute.SUBDIVISIONFACTOR,1],[e.VertexAttribute.UV0,2],[e.VertexAttribute.AUXPOS1,3],[e.VertexAttribute.AUXPOS2,4],[e.VertexAttribute.COLOR,5],[e.VertexAttribute.COLORFEATUREATTRIBUTE,5],[e.VertexAttribute.SIZE,6],[e.VertexAttribute.SIZEFEATUREATTRIBUTE,6],[e.VertexAttribute.OPACITYFEATUREATTRIBUTE,7]]);n=function(k){function h(a,b,d){b=k.call(this,a,b,d)||this;b.stippleTextureRepository=a.stippleTextureRepository;return b}r._inheritsLoose(h,k);var l=
h.prototype;l.initializeProgram=function(a){const b=h.shader.get().build(this.configuration);return new C.Program(a.rctx,b,x)};l.destroy=function(){k.prototype.destroy.call(this);this.stippleTextureRepository.release(this.stipplePattern);this.stippleTextureBind=this.stipplePattern=null};l.bindPass=function(a,b){this.program.bindPass(a,b);this.stipplePattern!==a.stipplePattern&&(a=a.stipplePattern,this.stippleTextureBind=this.stippleTextureRepository.swap(this.stipplePattern,a),this.stipplePattern=
a);if(this.configuration.stippleEnabled){const {pixelSize:d,sdfNormalizer:m,pixels:q}=A.isSome(this.stippleTextureBind)?this.stippleTextureBind(this.program):{pixelSize:1,sdfNormalizer:1,pixels:1};this.program.setUniform1f("stipplePatternSDFNormalizer",m);this.program.setUniform1f("stipplePatternTextureSize",q);this.program.setUniform1f("stipplePatternPixelSize",d);this.program.setUniform1f("stipplePatternPixelSizeInv",1/d)}};l._makePipelineState=function(a,b){const d=this.configuration,m=a===u.TransparencyPassType.NONE,
q=a===u.TransparencyPassType.FrontFace;return f.makePipelineState({blending:d.output===t.ShaderOutput.Color||d.output===t.ShaderOutput.Alpha?m?g.blendingDefault:g.oitBlending(a):null,depthTest:{func:g.oitDepthTest(a)},depthWrite:m?d.writeDepth&&f.defaultDepthWriteParams:g.oitDepthWrite(a),colorWrite:f.defaultColorWriteParams,stencilWrite:d.hasOccludees?c.stencilWriteMaskOn:null,stencilTest:d.hasOccludees?b?c.stencilToolMaskBaseParams:c.stencilBaseAllZerosParams:null,polygonOffset:m||q?d.hasPolygonOffset&&
y:g.OITPolygonOffset})};l.initializePipeline=function(){var a=this.configuration;a.occluder&&(a=a.hasPolygonOffset&&y,this._occluderPipelineTransparent=f.makePipelineState({blending:g.blendingDefault,polygonOffset:a,depthTest:c.depthCompareAlways,depthWrite:null,colorWrite:f.defaultColorWriteParams,stencilWrite:null,stencilTest:c.stencilToolTransparentOccluderParams}),this._occluderPipelineOpaque=f.makePipelineState({blending:g.blendingDefault,polygonOffset:a,depthTest:c.depthCompareAlways,depthWrite:null,
colorWrite:f.defaultColorWriteParams,stencilWrite:c.stencilWriteMaskOff,stencilTest:c.stencilToolMaskOccluderParams}),this._occluderPipelineMaskWrite=f.makePipelineState({blending:null,polygonOffset:a,depthTest:c.depthCompareLess,depthWrite:null,colorWrite:null,stencilWrite:c.stencilWriteMaskOn,stencilTest:c.stencilToolMaskBaseParams}));this._occludeePipelineState=this._makePipelineState(this.configuration.transparencyPassType,!0);return this._makePipelineState(this.configuration.transparencyPassType,
!1)};l.getPipelineState=function(a,b){return b?this._occludeePipelineState:this.configuration.occluder?a===v.RenderSlot.TRANSPARENT_OCCLUDER_MATERIAL?this._occluderPipelineTransparent:a===v.RenderSlot.OCCLUDER_MATERIAL?this._occluderPipelineOpaque:this._occluderPipelineMaskWrite:k.prototype.getPipelineState.call(this,a,b)};r._createClass(h,[{key:"primitiveType",get:function(){return this.configuration.wireframe?w.PrimitiveType.LINES:w.PrimitiveType.TRIANGLE_STRIP}}]);return h}(n.ShaderTechnique);
n.shader=new B.ReloadableShaderModule(D.RibbonLine,()=>new Promise((k,h)=>z(["./RibbonLine.glsl"],k,h)));const y={factor:0,units:-4};p.RibbonLineTechnique=n;p.ribbonVertexAttributeLocations=x;Object.defineProperties(p,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
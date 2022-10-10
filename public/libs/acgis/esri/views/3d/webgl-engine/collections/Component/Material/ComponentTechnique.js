// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../ViewingMode ./ComponentTechniqueConfiguration ./shader/ComponentData.glsl ../../../../../../chunks/ComponentShader.glsl ../../../core/shaderLibrary/ShaderOutputOptions ../../../core/shaderLibrary/util/DoublePrecision.glsl ../../../core/shaderTechnique/ReloadableShaderModule ../../../core/shaderTechnique/ShaderTechnique ../../../lib/basicInterfaces ../../../lib/OrderIndependentTransparency ../../../lib/Program ../../../lib/StencilUtils ../../../../../webgl/renderState".split(" "),
function(t,p,u,v,w,x,y,q,z,A,f,l,g,B,m,h){f=function(k){function d(){return k.apply(this,arguments)||this}u._inheritsLoose(d,k);var e=d.prototype;e.bindDraw=function(b,a){const c=this.program;c.bindDraw(b,a);c.rebindTextures();b.componentParameters.type===x.ComponentDataType.Varying&&b.componentParameters.texture.bind(c,"componentColorTex","componentColorTexInvDim")};e.initializeConfiguration=function(b,a){a.spherical=b.viewingMode===v.ViewingMode.Global;a.doublePrecisionRequiresObfuscation=z.doublePrecisionRequiresObfuscation(b.rctx)};
e.initializeProgram=function(b){const a=d.shader.get(),c=a.build(this.configuration);return new B.Program(b.rctx,c,a.attributeLocations)};e._setPipelineState=function(b){const a=this.configuration,c=a.integratedMeshMode!==w.IntegratedMeshMode.None,n=b===l.TransparencyPassType.NONE,r=b===l.TransparencyPassType.FrontFace;return h.makePipelineState({blending:a.output!==q.ShaderOutput.Color&&a.output!==q.ShaderOutput.Alpha||!a.blendingEnabled?null:n?g.blendingDefault:g.oitBlending(b),culling:h.cullingParams(a.cullFace),
depthTest:{func:g.oitDepthTest(b)},depthWrite:n||r?h.defaultDepthWriteParams:null,colorWrite:h.defaultColorWriteParams,stencilWrite:c||a.hasOccludees?m.stencilWriteMaskOn:null,stencilTest:c?m.replaceBitWhenDepthTestPasses(l.StencilBits.IntegratedMeshMaskExcluded):a.hasOccludees?m.stencilBaseAllZerosParams:null,polygonOffset:n||r?a.hasPolygonOffset?{factor:2,units:2}:null:g.OITPolygonOffset})};e.initializePipeline=function(){return this._setPipelineState(this.configuration.transparencyPassType)};return d}(f.ShaderTechnique);
f.shader=new A.ReloadableShaderModule(y.ComponentShader,()=>new Promise((k,d)=>t(["./shader/ComponentShader.glsl"],k,d)));p.ComponentTechnique=f;Object.defineProperties(p,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
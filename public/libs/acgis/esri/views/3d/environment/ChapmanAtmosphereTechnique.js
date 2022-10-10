// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/ChapmanAtmosphere.glsl ../webgl-engine/core/shaderTechnique/ReloadableShaderModule ../webgl-engine/core/shaderTechnique/ShaderTechnique ../webgl-engine/lib/DefaultVertexAttributeLocations ../webgl-engine/lib/Program ../../webgl/enums ../../webgl/renderState".split(" "),function(h,f,k,l,m,d,n,p,a,b){d=function(e){function c(){return e.apply(this,arguments)||this}k._inheritsLoose(c,e);var g=c.prototype;g.initializeProgram=
function(q){const r=c.shader.get().build(this.configuration);return new p.Program(q.rctx,r,n.Default3D)};g.initializePipeline=function(){return this.configuration.haze?b.makePipelineState({blending:b.separateBlendingParams(a.BlendFactor.ONE,a.BlendFactor.ZERO,a.BlendFactor.ONE_MINUS_SRC_COLOR,a.BlendFactor.ONE),colorWrite:b.defaultColorWriteParams}):b.makePipelineState({blending:b.separateBlendingParams(a.BlendFactor.SRC_ALPHA,a.BlendFactor.ONE,a.BlendFactor.ONE_MINUS_SRC_ALPHA,a.BlendFactor.ONE_MINUS_SRC_ALPHA),
depthTest:{func:a.CompareFunction.LEQUAL},colorWrite:b.defaultColorWriteParams})};return c}(d.ShaderTechnique);d.shader=new m.ReloadableShaderModule(l.ChapmanAtmosphereShader,()=>new Promise((e,c)=>h(["./ChapmanAtmosphere.glsl"],e,c)));f.ChapmanAtmosphereTechnique=d;Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
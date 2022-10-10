// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/Clouds.glsl ../webgl-engine/core/shaderTechnique/ReloadableShaderModule ../webgl-engine/core/shaderTechnique/ShaderTechnique ../webgl-engine/lib/DefaultVertexAttributeLocations ../webgl-engine/lib/Program ../../webgl/enums ../../webgl/renderState".split(" "),function(m,h,n,p,q,c,r,t,b,e){c=function(d){function a(f,g){var k;return k=d.call(this,f,g,()=>k.destroy())||this}n._inheritsLoose(a,d);var l=a.prototype;l.initializeProgram=
function(f){const g=a.shader.get().build(this.configuration);return new t.Program(f.rctx,g,r.Default3D)};l.initializePipeline=function(){return e.makePipelineState({blending:e.separateBlendingParams(b.BlendFactor.ONE,b.BlendFactor.ONE,b.BlendFactor.ZERO,b.BlendFactor.ZERO),depthTest:{func:b.CompareFunction.LEQUAL},colorWrite:e.defaultColorWriteParams})};return a}(c.ShaderTechnique);c.shader=new q.ReloadableShaderModule(p.Clouds,()=>new Promise((d,a)=>m(["./Clouds.glsl"],d,a)));h.CloudsTechnique=c;
Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
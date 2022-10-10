// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/mathUtils ../../../../core/maybe ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../ViewingMode ../core/shaderLibrary/shading/ReadShadowMap.glsl ./glUtil3D ../shaders/ShadowHighlightTechnique ../../../webgl/Util".split(" "),function(h,n,d,e,f,p,q,r,t,k,u){let v=function(){function g(a,b){this._rctx=a;this._viewingMode=b;this._maxOpacity=1;this._passParameters=new k.ShadowHighlightPassParameters;this._drawParameters=
new r.ReadShadowMapBindParameters;this._vao=t.createQuadVAO(this._rctx)}var c=g.prototype;c.render=function(a,b){if(a.shadowMap.enabled&&a.linearDepthTexture&&this.isVisible){var l=this.technique;this._drawParameters.origin=a.camera.center;this._rctx.bindFramebuffer(b);this._rctx.bindTechnique(l,this._passParameters,a).bindDraw(this._drawParameters,a);this._rctx.bindVAO(this._vao);this._rctx.drawArrays(l.primitiveType,0,u.vertexCount(this._vao,"geometry"))}};c.setDefaultOptions=function(a){this._passParameters=
{...this._passParameters,...a};this._updateMaxOpacity()};c.updateParameters=function(a,b){this._passParameters.opacityElevation=1-d.smoothstep(4E4,5E4,a.relativeElevation);a=this._viewingMode===q.ViewingMode.Global?f.normalize(m,a.center):f.set(m,0,0,1);b=f.dot(a,b);this._passParameters.dayNightTerminator=d.smoothstep(0,1,d.clamp(30*b,0,1))};c.dispose=function(){this._vao=e.disposeMaybe(this._vao);this._technique=e.releaseMaybe(this._technique)};c._updateMaxOpacity=function(){this._maxOpacity=Math.max(this._passParameters.shadowOpacity,
this._passParameters.occludedShadowOpacity)*this._passParameters.shadowColor[3]};n._createClass(g,[{key:"technique",get:function(){e.isNone(this._technique)&&(this._technique=new k.ShadowHighlightTechnique({rctx:this._rctx,viewingMode:this._viewingMode}));return this._technique}},{key:"gpuMemoryUsage",get:function(){var a,b;return null!=(a=null==(b=this._vao)?void 0:b.size)?a:0}},{key:"isVisible",get:function(){const {opacityElevation:a,dayNightTerminator:b}=this._passParameters;return.001953125<=
this._maxOpacity*a*b}}]);return g}();const m=p.create();h.ShadowHighlight=v;Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
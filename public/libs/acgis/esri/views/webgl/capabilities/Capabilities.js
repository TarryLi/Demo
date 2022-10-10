// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ./DisjointTimerQuery ./DrawBuffers ./Instancing ./load ./LoseContext ./VertexArrayObjects".split(" "),function(d,f,g,h,k,a,l,m){let n=function(){function b(c,e){this.gl=c;this._textureFloatLinear=this._fragDepth=this._shaderTextureLOD=this._standardDerivatives=this._depthTexture=null;this._disabledExtensions=e.disabledExtensions||{};this._debugWebGLExtensions=e.debugWebGLExtensions||{}}b.prototype.enable=function(c){return this[c]};f._createClass(b,
[{key:"drawBuffers",get:function(){this._drawBuffers||(this._drawBuffers=h.load(this.gl,this._disabledExtensions));return this._drawBuffers}},{key:"instancing",get:function(){this._instancing||(this._instancing=k.load(this.gl));return this._instancing}},{key:"vao",get:function(){this._vertexArrayObject||(this._vertexArrayObject=m.load(this.gl,this._disabledExtensions));return this._vertexArrayObject}},{key:"compressedTextureETC",get:function(){this._compressedTextureETC||(this._compressedTextureETC=
a.loadCompressedTextureETC(this.gl,this._disabledExtensions));return this._compressedTextureETC}},{key:"compressedTextureS3TC",get:function(){this._compressedTextureS3TC||(this._compressedTextureS3TC=a.loadCompressedTextureS3TC(this.gl,this._disabledExtensions));return this._compressedTextureS3TC}},{key:"textureFilterAnisotropic",get:function(){this._textureFilterAnisotropic||(this._textureFilterAnisotropic=a.loadTextureFilterAnisotropicCapability(this.gl,this._disabledExtensions));return this._textureFilterAnisotropic}},
{key:"disjointTimerQuery",get:function(){this._disjointTimerQuery||(this._disjointTimerQuery=g.createDisjointTimerQuery(this.gl,this._disabledExtensions));return this._disjointTimerQuery}},{key:"textureFloat",get:function(){this._textureFloat||(this._textureFloat=a.loadTextureFloat(this.gl,this._disabledExtensions));return this._textureFloat}},{key:"colorBufferFloat",get:function(){this._colorBufferFloat||(this._colorBufferFloat=a.loadColorBufferFloat(this.gl,this._disabledExtensions));return this._colorBufferFloat}},
{key:"blendMinMax",get:function(){this._minMaxBlending||(this._minMaxBlending=a.loadMinMaxBlending(this.gl,this._disabledExtensions));return this._minMaxBlending}},{key:"depthTexture",get:function(){null===this._depthTexture&&(this._depthTexture=a.loadBooleanExtension(this.gl,this._disabledExtensions,"depthTexture",!0,["WEBGL_depth_texture","MOZ_WEBGL_depth_texture","WEBKIT_WEBGL_depth_texture"]));return this._depthTexture}},{key:"standardDerivatives",get:function(){null===this._standardDerivatives&&
(this._standardDerivatives=a.loadBooleanExtension(this.gl,this._disabledExtensions,"standardDerivatives",!0,["OES_standard_derivatives"]));return this._standardDerivatives}},{key:"shaderTextureLOD",get:function(){null===this._shaderTextureLOD&&(this._shaderTextureLOD=a.loadBooleanExtension(this.gl,this._disabledExtensions,"shaderTextureLOD",!0,["EXT_shader_texture_lod"]));return this._shaderTextureLOD}},{key:"fragDepth",get:function(){null===this._fragDepth&&(this._fragDepth=a.loadBooleanExtension(this.gl,
this._disabledExtensions,"fragDepth",!0,["EXT_frag_depth"]));return this._fragDepth}},{key:"loseContext",get:function(){this._loseContext||(this._loseContext=l.load(this.gl,this._debugWebGLExtensions));return this._loseContext}},{key:"textureNorm16",get:function(){this._textureNorm16||(this._textureNorm16=a.loadTextureNorm16(this.gl,this._disabledExtensions));return this._textureNorm16}},{key:"textureFloatLinear",get:function(){null===this._textureFloatLinear&&(this._textureFloatLinear=a.loadBooleanExtension(this.gl,
this._disabledExtensions,"textureFloatLinear",!1,["OES_texture_float_linear"]));return this._textureFloatLinear}}]);return b}();d.Capabilities=n;Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
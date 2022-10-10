// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/maybe","./context-util"],function(f,m,g,e){function h(a){switch(a){case e.ContextType.WEBGL1:return n();case e.ContextType.WEBGL2:return p()}}function n(){if(!k){{const a=new t,b=q(e.ContextType.WEBGL1,a);g.isNone(b)||(a.supportsElementIndexUint=null!==b.getExtension("OES_element_index_uint"),a.supportsStandardDerivatives=null!==b.getExtension("OES_standard_derivatives"),a.supportsInstancedArrays=null!==b.getExtension("ANGLE_instanced_arrays"),
a.supportsTextureFloat=null!==b.getExtension("OES_texture_float"),a.supportsTextureHalfFloat=null!==b.getExtension("OES_texture_half_float"),a.supportsColorBufferFloat=null!==b.getExtension("WEBGL_color_buffer_float"),a.supportsColorBufferFloatBlend=null!==b.getExtension("EXT_float_blend"),a.supportsColorBufferHalfFloat=null!==b.getExtension("EXT_color_buffer_half_float"));k=a}}return k}function p(){if(!l){{const a=new u,b=q(e.ContextType.WEBGL2,a);g.isNone(b)||(a.supportsColorBufferFloat=null!==
b.getExtension("EXT_color_buffer_float"),a.supportsColorBufferFloatBlend=null!==b.getExtension("EXT_float_blend"),a.supportsColorBufferHalfFloat=a.supportsColorBufferFloat||null!==b.getExtension("EXT_color_buffer_half_float"));l=a}}return l}function q(a,b){const d=document.createElement("canvas");if(!d)return null;let c=e.createContext(d,a,{failIfMajorPerformanceCaveat:!0});g.isNone(c)&&(c=e.createContext(d,a),g.isSome(c)&&(b.majorPerformanceCaveat=!0));if(g.isNone(c))return c;if(a===e.ContextType.WEBGL1){if(a=
c.getParameter(c.VERSION),a=null==a?void 0:a.match(/^WebGL\s+([\d.]*)/))a=parseFloat(a[1]),b.available=.94<=a}else b.available=!0;b.maxTextureSize=c.getParameter(c.MAX_TEXTURE_SIZE);b.supportsVertexShaderSamplers=0<c.getParameter(c.MAX_VERTEX_TEXTURE_IMAGE_UNITS);if(a=c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.HIGH_FLOAT))b.supportsHighPrecisionFragment=0<a.precision;return c}let k,l,r=function(){this.majorPerformanceCaveat=this.available=!1;this.maxTextureSize=0;this.supportsColorBufferHalfFloat=
this.supportsColorBufferFloatBlend=this.supportsColorBufferFloat=this.supportsTextureHalfFloat=this.supportsTextureFloat=this.supportsInstancedArrays=this.supportsStandardDerivatives=this.supportsElementIndexUint=this.supportsHighPrecisionFragment=this.supportsVertexShaderSamplers=!1},t=function(a){function b(){var d=a.apply(this,arguments)||this;d.type=e.ContextType.WEBGL1;return d}m._inheritsLoose(b,a);return b}(r),u=function(a){function b(){var d=a.apply(this,arguments)||this;d.type=e.ContextType.WEBGL2;
d.supportsElementIndexUint=!0;d.supportsStandardDerivatives=!0;d.supportsInstancedArrays=!0;d.supportsTextureFloat=!0;d.supportsTextureHalfFloat=!0;return d}m._inheritsLoose(b,a);return b}(r);f.getWebGL1Capabilities=n;f.getWebGL2Capabilities=p;f.getWebGLCapabilities=function(a){for(a=e.getContextTypes(a);1<a.length;){const b=h(a.shift());if(b.available)return b}return h(a.shift())};f.getWebGLVersionCapabilities=h;Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","./brushes","./webgl/enums","./webgl/WGLContainer"],function(e,f,g,h,c){c=function(d){function a(){return d.apply(this,arguments)||this}f._inheritsLoose(a,d);a.prototype.prepareRenderPasses=function(b){const k=b.registerRenderPass({name:"bitmap",brushes:[g.brushes.bitmap],target:()=>this.children,drawPhase:h.WGLDrawPhase.MAP});return[...d.prototype.prepareRenderPasses.call(this,b),k]};f._createClass(a,[{key:"requiresDedicatedFBO",get:function(){return this.children.some(b=>
"additive"===b.blendFunction)}}]);return a}(c);e.BitmapContainer=c;Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
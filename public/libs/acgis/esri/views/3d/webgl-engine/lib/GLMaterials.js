// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/maybe","../core/shaderLibrary/ShaderOutputOptions","./basicInterfaces","./RenderPass"],function(f,h,b,l,c){function g(e){switch(e){case c.RenderPass.MATERIAL:return b.ShaderOutput.Color;case c.RenderPass.MATERIAL_ALPHA:return b.ShaderOutput.Alpha;case c.RenderPass.MATERIAL_DEPTH:return b.ShaderOutput.Depth;case c.RenderPass.MATERIAL_NORMAL:return b.ShaderOutput.Normal;case c.RenderPass.MATERIAL_DEPTH_SHADOWMAP_ALL:return b.ShaderOutput.Shadow;case c.RenderPass.MATERIAL_HIGHLIGHT:return b.ShaderOutput.Highlight;
case c.RenderPass.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT:return b.ShaderOutput.Shadow;case c.RenderPass.MATERIAL_DEPTH_SHADOWMAP_DEFAULT:return b.ShaderOutput.Shadow}}let m=function(){function e(d,a){this._material=d;this._repository=a;this._map=new Map}var k=e.prototype;k.destroy=function(){this._map.forEach((d,a)=>{h.isSome(d)&&this._repository.release(this._material,g(a))})};k.load=function(d,a){this._map.has(a)||this._map.set(a,this._repository.acquire(this._material,g(a)));a=this._map.get(a);if(h.isSome(a)){if(a.ensureResources(d)===
l.ResourceState.LOADED)return a;this._repository.requestRender()}return null};return e}();f.GLMaterials=m;f.outputFromPass=g;Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
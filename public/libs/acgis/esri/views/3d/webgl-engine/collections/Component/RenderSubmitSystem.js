// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./DepthRange"],function(b,g){let h=function(){function c(a){this._objects=a}var d=c.prototype;d.submit=function(a,e){this._objects.preSubmit(e);this._objects.visibleObjects.forAll(f=>f.renderable.material.submit(a,e,f))};d.queryShadowCasterDepthRange=function(a){return this._objects.visibleObjects.length?g.computeDepthRange(a,this._objects.visibleObjects):null};return c}();b.RenderSubmitSystem=h;Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
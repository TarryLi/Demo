// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/mat4","../../../../chunks/mat4f64","./localOriginHelper"],function(d,f,g,h){let k=function(){function e(a){this.factory=a;this.originData=new Map}var c=e.prototype;c.acquire=function(a){return this.register(this.factory.getOrigin(a))};c.register=function(a){const b=this.originData.get(a.id);if(b)return b.refCount++,b.origin;this.originData.set(a.id,{refCount:1,viewMatrix:g.create(),origin:a});return a};c.release=function(a){const b=this.originData.get(a.id);b&&
(b.refCount--,0===b.refCount&&this.originData.delete(a.id))};c.updateViewMatrices=function(a){this.originData.forEach(b=>{f.copy(b.viewMatrix,a);h.applyToViewMatrix(b.origin.vec3,b.viewMatrix)})};c.getViewMatrix=function(a){return this.originData.get(a.id).viewMatrix};return e}();d.LocalOriginManager=k;Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
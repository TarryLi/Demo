// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers"],function(c,e){let f=function(){function a(b){this.maxCount=b;this._nextIndex=0;this.recycledIndices=[]}var d=a.prototype;d.acquire=function(){if(0<this.recycledIndices.length)return this.recycledIndices.pop();if(this.availableCount)return this._nextIndex++};d.release=function(b){this.recycledIndices.push(b)};e._createClass(a,[{key:"activeCount",get:function(){return this._nextIndex-this.recycledIndices.length}},{key:"availableCount",
get:function(){return this.recycledIndices.length+this.maxCount-this._nextIndex}}]);return a}();c.SimpleIndexManager=f;Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
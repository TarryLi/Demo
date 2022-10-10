// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./object"],function(f,h){let g=function(){function e(a,c={ignoreUnknown:!1,useNumericKeys:!1}){this.jsonToAPI=a;this.options=c;this.apiValues=[];this.jsonValues=[];this.apiToJSON=this._invertMap(a);this.apiValues=this._getKeysSorted(this.apiToJSON);this.jsonValues=this._getKeysSorted(this.jsonToAPI);this.read=b=>this.fromJSON(b);this.write=(b,k,l)=>{b=this.toJSON(b);void 0!==b&&h.setDeepValue(l,b,k)};this.write.isJSONMapWriter=!0}var d=e.prototype;d.toJSON=function(a){return this.apiToJSON.hasOwnProperty(a)?
(a=this.apiToJSON[a],this.options.useNumericKeys?+a:a):this.options.ignoreUnknown?void 0:a};d.fromJSON=function(a){return this.jsonToAPI.hasOwnProperty(a)?this.jsonToAPI[a]:this.options.ignoreUnknown?void 0:a};d._invertMap=function(a){const c={};for(const b in a)c[a[b]]=b;return c};d._getKeysSorted=function(a){const c=[];for(const b in a)c.push(b);c.sort();return c};return e}();f.JSONMap=g;f.strict=function(){return function(e,d){return new g(e,{ignoreUnknown:!0,...d})}};Object.defineProperties(f,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
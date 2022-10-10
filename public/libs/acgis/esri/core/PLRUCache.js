// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./maybe"],function(h,k){let n=function(){function l(a){this._size=a;this._levels=Math.log2(this._size);this._index=new Uint8Array(Math.ceil(a/8));this._data=Array(a);this._lookupTable=new Map}var e=l.prototype;e.with=function(a,b){return this.has(b)?this.get(b):this.set(b,a(b))};e.has=function(a){return this._lookupTable.has(a)};e.get=function(a){a=this._lookupTable.get(a);a=k.isSome(a)?this._getData(a):null;return"object"===typeof a?a:null};e.set=function(a,b){const c=this._freeIndex();
a=this._data[c]=k.isSome(b)?b:a;this._lookupTable.set("object"===typeof a?a.cacheKey:a,c);return b};e.clear=function(){for(var a=0;a<this._index.length;a++)this._index[a]=0;for(a=0;a<this._data.length;a++)this._data[a]=null;this._lookupTable.clear()};e._getData=function(a){let b=Math.floor(((1<<this._levels)-1+a)/2);for(let d=this._levels-1;0<=d;d--){{var c=this._index;const f=Math.floor(b/8);c[f]|=1<<b-8*f}b=Math.floor(b/2)}return this._data[a]};e._freeIndex=function(){var a=0,b=0;for(var c=0;c<
this._levels;c++){{b=this._index;const f=Math.floor(a/8);var d=a-8*f;const m=b[f],g=1<<d;d=(m&g)>>d;b[f]=m&~g|g*(1-d);b=d}a=2*a+1+b}a-=(1<<this._levels)-1;(c=this._data[a])&&this._lookupTable.delete("object"===typeof c?c.cacheKey:c);return a};return l}();h.PLRUCache=n;Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(function(){function c(b){let d="";for(let a=0;a<b;a++)d+=(65536*(1+Math.random())|0).toString(16).substring(1);return d}const f=/^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$/i;let e=function(){function b(a){this.value="";if(!a)throw new TypeError("Invalid argument; `value` has no value.");this.value=b.EMPTY;a&&a instanceof b?this.value=a.toString():a&&"[object String]"===Object.prototype.toString.call(a)&&b.isGuid(a)&&(this.value=a)}var d=b.prototype;d.equals=function(a){return b.isGuid(a)&&
this.value===a};d.isEmpty=function(){return this.value===b.EMPTY};d.toString=function(){return this.value};d.toJSON=function(){return this.value};b.isGuid=function(a){return a&&(a instanceof b||f.test(a.toString()))};b.create=function(){return new b([c(2),c(1),c(1),c(1),c(3)].join("-"))};b.raw=function(){return[c(2),c(1),c(1),c(1),c(3)].join("-")};return b}();e.EMPTY="00000000-0000-0000-0000-000000000000";return e});
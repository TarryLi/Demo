// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["../../../../chunks/_rollupPluginBabelHelpers"],function(f){return function(){function b(a){this._array=[];0>=a&&console.error("strideInBytes must be positive!");this._stride=a}var e=b.prototype;e.reset=function(){this.array.length=0};e.toBuffer=function(){return(new Uint32Array(this._array)).buffer};b.i1616to32=function(a,c){return 65535&a|c<<16};b.i8888to32=function(a,c,d,g){return a&255|(c&255)<<8|(d&255)<<16|g<<24};b.i8816to32=function(a,c,d){return a&255|(c&255)<<8|d<<16};f._createClass(b,
[{key:"array",get:function(){return this._array}},{key:"index",get:function(){return 4*this._array.length/this._stride}},{key:"itemSize",get:function(){return this._stride}},{key:"sizeInBytes",get:function(){return 4*this._array.length}}]);return b}()});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers"],function(h,m){let l=function(){function g(b,a,c=0,e,f){this.TypedArrayConstructor=b;this.elementCount=9;b=this.TypedArrayConstructor;void 0===e&&(e=9*b.BYTES_PER_ELEMENT);const k=0===a.byteLength?0:c;this.typedBuffer=null==f?new b(a,k):new b(a,k,(f-c)/b.BYTES_PER_ELEMENT);this.typedBufferStride=e/b.BYTES_PER_ELEMENT;this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride);this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}
var d=g.prototype;d.sliceBuffer=function(b,a,c=this.count-a){a=this.typedBuffer.byteOffset+a*this.stride;return new b(this.buffer,a,this.stride,a+c*this.stride)};d.getMat=function(b,a){b*=this.typedBufferStride;for(let c=0;9>c;c++)a[c]=this.typedBuffer[b++];return a};d.setMat=function(b,a){b*=this.typedBufferStride;for(let c=0;9>c;c++)this.typedBuffer[b++]=a[c]};d.get=function(b,a){return this.typedBuffer[b*this.typedBufferStride+a]};d.set=function(b,a,c){this.typedBuffer[b*this.typedBufferStride+
a]=c};d.copyFrom=function(b,a,c){const e=this.typedBuffer,f=a.typedBuffer;b*=this.typedBufferStride;a=c*a.typedBufferStride;for(c=0;9>c;++c)e[b++]=f[a++]};m._createClass(g,[{key:"buffer",get:function(){return this.typedBuffer.buffer}}]);return g}();l.ElementCount=9;h.BufferViewMat3Impl=l;Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["../chunks/_rollupPluginBabelHelpers","./arrayUtils","./HeapSort"],function(m,h,k){function l(f){f.data.length>1.5*f.length&&(f.data.length=Math.floor(1.1*f.length))}return function(){function f(a){this.data=[];this._length=0;this._allocator=void 0;this._deallocator=()=>null;this._shrink=()=>{};this._hint=new h.PositionHint;a&&(a.initialSize&&(this.data=Array(a.initialSize)),a.allocator&&(this._allocator=a.allocator),void 0!==a.deallocator&&(this._deallocator=a.deallocator),a.shrink&&(this._shrink=
()=>l(this)))}var d=f.prototype;d.toArray=function(){return this.data.slice(0,this.length)};d.filter=function(a){const c=[];for(let b=0;b<this._length;b++){const e=this.data[b];a(e)&&c.push(e)}return c};d.getItemAt=function(a){if(!(0>a||a>=this._length))return this.data[a]};d.includes=function(a,c){a=this.data.indexOf(a,c);return-1!==a&&a<this.length};d.clear=function(){this.length=0};d.prune=function(){this.clear();this.data=[]};d.push=function(a){this.data[this._length++]=a};d.pushArray=function(a,
c=a.length){for(let b=0;b<c;b++)this.data[this._length++]=a[b]};d.fill=function(a,c){for(let b=0;b<c;b++)this.data[this._length++]=a};d.pushNew=function(){this._allocator&&(this.data[this.length]=this._allocator(this.data[this.length]));const a=this.data[this._length];++this._length;return a};d.unshift=function(a){this.data.unshift(a);this._length++;l(this)};d.pop=function(){if(0!==this.length){var a=this.data[this.length-1];--this.length;this._shrink();return a}};d.remove=function(a){const c=h.indexOf(this.data,
a,this.length,this._hint);if(-1!==c)return this.data.splice(c,1),--this.length,a};d.removeUnordered=function(a){a=h.removeUnordered(this.data,a,this.length,this._hint);void 0!==a&&--this.length;this._shrink();return a};d.removeUnorderedIndex=function(a){if(!(a>=this.length||0>a))return this.swapElements(a,this.length-1),this.pop()};d.removeUnorderedMany=function(a,c=a.length,b){this.length=h.removeUnorderedMany(this.data,a,this.length,c,this._hint,b);this._shrink()};d.front=function(){if(0!==this.length)return this.data[0]};
d.back=function(){if(0!==this.length)return this.data[this.length-1]};d.swapElements=function(a,c){a>=this.length||c>=this.length||a===c||([this.data[a],this.data[c]]=[this.data[c],this.data[a]])};d.sort=function(a){k.sort(this.data,0,this.length,a)};d.iterableSort=function(a){return k.iterableSort(this.data,0,this.length,a)};d.some=function(a,c){for(let b=0;b<this.length;++b)if(a.call(c,this.data[b],b,this.data))return!0;return!1};d.filterInPlace=function(a,c){let b=0;for(let e=0;e<this._length;++e){const g=
this.data[e];a.call(c,g,e,this.data)&&(this.data[e]=this.data[b],this.data[b]=g,b++)}if(this._deallocator)for(a=b;a<this._length;a++)this.data[a]=this._deallocator(this.data[a]);this._length=b;this._shrink();return this};d.forAll=function(a,c){const b=this.length,e=this.data;for(let g=0;g<b;++g)a.call(c,e[g],g,e)};d.forEach=function(a,c){for(let b=0;b<this.length;++b)a.call(c,this.data[b],b,this.data)};d.map=function(a,c){const b=Array(this.length);for(let e=0;e<this.length;++e)b[e]=a.call(c,this.data[e],
e,this.data);return b};d.reduce=function(a,c){for(let b=0;b<this.length;++b)c=a(c,this.data[b],b,this.data);return c};d.has=function(a){const c=this.length,b=this.data;for(let e=0;e<c;++e)if(b[e]===a)return!0;return!1};m._createClass(f,[{key:"length",get:function(){return this._length},set:function(a){if(a>this._length)if(this._allocator)for(;this._length<a;)this.data[this._length++]=this._allocator(this.data[this._length]);else this._length=a;else{if(this._deallocator)for(let c=a;c<this._length;++c)this.data[c]=
this._deallocator(this.data[c]);this._length=a;this._shrink()}}}]);return f}()});
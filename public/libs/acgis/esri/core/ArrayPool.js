// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["./ObjectPool"],function(f){function g(a){a.length=0}let e=function(){function a(b=50,h=50){this._pool=new f(Array,void 0,g,h,b)}var c=a.prototype;c.acquire=function(){return this._pool.acquire()};c.release=function(b){this._pool.release(b)};c.prune=function(){this._pool.prune(0)};a.acquire=function(){return d.acquire()};a.release=function(b){return d.release(b)};a.prune=function(){d.prune()};return a}();const d=new e(100);return e});
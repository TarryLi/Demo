// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./ObservationHandle"],function(c,g){let h=function(){function d(){this._observers=[]}var e=d.prototype;e.observe=function(a){this._observers.includes(a)||this._observers.push(a);return new g.ObservationHandle(this._observers,a)};e.notify=function(){const a=this._observers.slice();for(let b=0;b<a.length;++b){const f=a[b];f.onInvalidated();f.onCommitted()}};return d}();c.SimpleObservable=h;Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
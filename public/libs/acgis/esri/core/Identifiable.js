// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","./accessorSupport/decorators/subclass"],function(d,e,g,h){let k=0;const l=a=>{a=function(c){function f(...b){b=c.call(this,...b)||this;Object.defineProperty(e._assertThisInitialized(b),"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+k++});return b}e._inheritsLoose(f,c);return f}(a);return a=g.__decorate([h.subclass("esri.core.Identifiable")],a)};d.Identifiable=function(a){function c(){return a.apply(this,
arguments)||this}e._inheritsLoose(c,a);return c}(l(function(){return function(){}}()));d.Identifiable=g.__decorate([h.subclass("esri.core.Identifiable")],d.Identifiable);d.IdentifiableMixin=l;d.NumericIdentifiableMixin=a=>{a=function(c){function f(...b){b=c.call(this,...b)||this;Object.defineProperty(e._assertThisInitialized(b),"uid",{writable:!1,configurable:!1,value:k++});return b}e._inheritsLoose(f,c);return f}(a);return a=g.__decorate([h.subclass("esri.core.NumericIdentifiable")],a)};Object.defineProperties(d,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
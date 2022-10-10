// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../views/3d/environment/SunnyWeather ../../views/3d/environment/weather ../lightingTypes ../SunLighting".split(" "),function(a,k,b,l,f,g,t,m,n,p,q,r){var c;a.SlideEnvironment=c=function(h){function d(){var e=h.apply(this,arguments)||this;e.lighting=
new r;e.weather=new n;return e}k._inheritsLoose(d,h);d.prototype.clone=function(){return new c({lighting:f.clone(this.lighting),weather:f.clone(this.weather)})};return d}(l.JSONSupport);b.__decorate([g.property({types:q.lightingTypes,json:{write:!0}})],a.SlideEnvironment.prototype,"lighting",void 0);b.__decorate([g.property({types:p.weatherTypes,json:{write:!0}})],a.SlideEnvironment.prototype,"weather",void 0);a.SlideEnvironment=c=b.__decorate([m.subclass("esri.webscene.Environment")],a.SlideEnvironment);
Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
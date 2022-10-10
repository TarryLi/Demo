// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../geometry/support/jsonUtils ../../geometry/Polyline".split(" "),function(g,e,a,h,f,p,q,k,l,m,n){a=function(c){function d(b){b=c.call(this,b)||this;b.calculationType=null;b.geodesic=null;b.lengthUnit=null;b.polylines=null;
return b}g._inheritsLoose(d,c);return d}(h.JSONSupport);e.__decorate([f.property({type:String,json:{write:!0}})],a.prototype,"calculationType",void 0);e.__decorate([f.property({type:Boolean,json:{write:!0}})],a.prototype,"geodesic",void 0);e.__decorate([f.property({json:{write:!0}})],a.prototype,"lengthUnit",void 0);e.__decorate([f.property({type:[n],json:{read:{reader:c=>c?c.map(d=>m.fromJSON(d)):null},write:{writer:(c,d)=>{d.polylines=c.map(b=>b.toJSON())}}}})],a.prototype,"polylines",void 0);a=
e.__decorate([l.subclass("esri.rest.support.LengthsParameters")],a);a.from=k.ensureType(a);return a});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./ClassificationDefinition".split(" "),function(g,b,a,d,l,m,n,h,k){a=function(e){function f(){var c=e.apply(this,arguments)||this;c.classificationDefinition=null;c.where=null;return c}g._inheritsLoose(f,e);return f}(a.JSONSupport);b.__decorate([d.property({type:k,
json:{read:{source:"classificationDef"},write:{target:"classificationDef"}}})],a.prototype,"classificationDefinition",void 0);b.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"where",void 0);return a=b.__decorate([h.subclass("esri.rest.support.GenerateRendererParameters")],a)});
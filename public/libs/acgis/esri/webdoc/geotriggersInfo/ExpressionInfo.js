// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Clonable ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(g,c,a,h,d,l,m,n,k){a=function(e){function f(b){b=e.call(this,b)||this;b.expression=null;b.returnType="string";b.title=null;return b}g._inheritsLoose(f,e);return f}(a.ClonableMixin(h.JSONSupport));c.__decorate([d.property({type:String,
json:{write:{isRequired:!0}}})],a.prototype,"expression",void 0);c.__decorate([d.property({type:["number","string"],json:{write:!0}})],a.prototype,"returnType",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"title",void 0);return a=c.__decorate([k.subclass("esri.webdoc.geotriggersInfo.ExpressionInfo")],a)});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(h,d,c,a,e,l,m,n,k){c=new c.JSONMap({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",
esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});a=function(f){function g(b){b=f.call(this,b)||this;b.description=null;b.type=null;return b}h._inheritsLoose(g,f);return g}(a.JSONSupport);d.__decorate([e.property({type:String,json:{write:!0}})],a.prototype,"description",void 0);d.__decorate([e.property({type:String,json:{read:c.read,write:c.write}})],a.prototype,"type",void 0);return a=d.__decorate([k.subclass("esri.rest.support.GPMessage")],
a)});
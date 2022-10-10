// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./commonProperties ../../geometry/Point ../../geometry/SpatialReference ../../geometry/Extent".split(" "),function(g,d,b,h,e,r,t,k,l,m,n,p,q){b=function(a){function f(c){c=a.call(this,c)||this;c.apiKey=null;c.categories=null;
c.countryCode=null;c.location=null;c.maxSuggestions=null;c.outSpatialReference=null;c.searchExtent=null;c.text=null;return c}g._inheritsLoose(f,a);return f}(h.JSONSupport);d.__decorate([e.property(m.apiKey)],b.prototype,"apiKey",void 0);d.__decorate([e.property({type:[String],json:{read:{source:"category",reader:a=>a?a.split(","):null},write:{target:"category",writer:(a,f)=>{f.category=a?a.join(","):null}}}})],b.prototype,"categories",void 0);d.__decorate([e.property({type:String,json:{write:!0}})],
b.prototype,"countryCode",void 0);d.__decorate([e.property({type:n,json:{write:{writer:(a,f)=>{f.location=a?a.clone().normalize():null}}}})],b.prototype,"location",void 0);d.__decorate([e.property({type:Number,json:{write:!0}})],b.prototype,"maxSuggestions",void 0);d.__decorate([e.property({type:p,json:{read:{source:"outSR"},write:{target:"outSR"}}})],b.prototype,"outSpatialReference",void 0);d.__decorate([e.property({type:q,json:{write:{writer:(a,f)=>{a=a?a.shiftCentralMeridian():null;f.searchExtent=
JSON.stringify(a)}}}})],b.prototype,"searchExtent",void 0);d.__decorate([e.property({type:String,json:{write:!0}})],b.prototype,"text",void 0);b=d.__decorate([l.subclass("esri.rest.support.SuggestLocationsParameters")],b);b.from=k.ensureType(b);return b});
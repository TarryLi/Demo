// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ../../layers/support/fieldType".split(" "),function(h,c,a,f,n,p,q,k,l,m){var d;a=d=function(g){function e(b){b=g.call(this,b)||this;b.exactMatch=!1;b.name=null;b.type=null;return b}h._inheritsLoose(e,
g);e.prototype.clone=function(){return new d({exactMatch:this.exactMatch,type:this.type,name:this.name})};return e}(a.JSONSupport);c.__decorate([f.property({type:Boolean,json:{write:!0}})],a.prototype,"exactMatch",void 0);c.__decorate([f.property({type:String,json:{write:!0}})],a.prototype,"name",void 0);c.__decorate([k.enumeration(m.kebabDict)],a.prototype,"type",void 0);return a=d=c.__decorate([l.subclass("esri.webdoc.applicationProperties.SearchTableField")],a)});
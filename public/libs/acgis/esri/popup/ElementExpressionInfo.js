// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/JSONSupport ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass".split(" "),function(h,c,a,d,l,m,n,k){var e;a=e=function(g){function f(b){b=g.call(this,b)||this;b.title=null;b.expression=null;b.returnType="dictionary";return b}h._inheritsLoose(f,g);f.prototype.clone=function(){return new e({title:this.title,expression:this.expression})};
return f}(a.JSONSupport);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"title",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"expression",void 0);c.__decorate([d.property({type:["dictionary"],readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"returnType",void 0);return a=e=c.__decorate([k.subclass("esri.popup.ElementExpressionInfo")],a)});
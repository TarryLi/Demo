// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../ElementExpressionInfo ./Content".split(" "),function(h,c,f,b,n,p,k,l,m){var d;b=d=function(g){function e(a){a=g.call(this,a)||this;a.expressionInfo=null;a.type="expression";return a}h._inheritsLoose(e,g);e.prototype.clone=function(){var a;return new d({expressionInfo:null==
(a=this.expressionInfo)?void 0:a.clone()})};return e}(m);c.__decorate([f.property({type:l,json:{write:!0}})],b.prototype,"expressionInfo",void 0);c.__decorate([f.property({type:["expression"],readOnly:!0,json:{read:!1,write:!0}})],b.prototype,"type",void 0);return b=d=c.__decorate([k.subclass("esri.popup.content.ExpressionContent")],b)});
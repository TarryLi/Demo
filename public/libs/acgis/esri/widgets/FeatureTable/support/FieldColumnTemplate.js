// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../layers/support/domains ../../FeatureForm/Format ./ColumnTemplateBase ./EditableColumnTemplateMixin".split(" "),function(h,c,d,a,p,q,k,e,l,m,n){a=function(f){function g(b){b=f.call(this,b)||this;b.domain=null;b.editableExpression=null;
b.fieldName=null;b.format=null;b.requiredExpression=null;b.type="field";b.valueExpression=null;b.visibilityExpression=null;return b}h._inheritsLoose(g,f);return g}(n.EditableColumnTemplateMixin(m));c.__decorate([d.property({types:e.types,json:{read:{reader:e.fromJSON},write:!0}})],a.prototype,"domain",void 0);c.__decorate([d.property({type:String,json:{write:!0}}),d.property()],a.prototype,"editableExpression",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"fieldName",
void 0);c.__decorate([d.property({type:l})],a.prototype,"format",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"requiredExpression",void 0);c.__decorate([d.property({type:String,json:{read:!1,write:!0}})],a.prototype,"type",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"valueExpression",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"visibilityExpression",void 0);return a=c.__decorate([k.subclass("esri.widgets.FeatureTable.support.FieldColumnTemplate")],
a)});
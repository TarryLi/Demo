// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Clonable ../../core/JSONSupport ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ./networkEnums".split(" "),function(p,c,b,q,l,e,w,x,y,f,r,t,u,
d){b=function(m){function g(a){a=m.call(this,a)||this;a.attributeParameterValues=null;a.description=null;a.distanceAttributeName=null;a.id=null;a.impedanceAttributeName=null;a.name=null;a.restrictionAttributeNames=null;a.simplificationTolerance=null;a.simplificationToleranceUnits=null;a.timeAttributeName=null;a.type=null;a.useHierarchy=null;a.uturnAtJunctions=null;return a}p._inheritsLoose(g,m);var n=g.prototype;n.readRestrictionAttributes=function(a,h){({restrictionAttributeNames:a}=h);return l.isNone(a)?
null:a.map(k=>d.restrictionAttributeNameJsonMap.fromJSON(k))};n.writeRestrictionAttributes=function(a,h,k){!l.isNone(a)&&a.length&&(h[k]=a.map(v=>d.restrictionAttributeNameJsonMap.toJSON(v)))};return g}(b.ClonableMixin(q.JSONSupport));c.__decorate([e.property({type:[Object],json:{write:!0}})],b.prototype,"attributeParameterValues",void 0);c.__decorate([e.property({type:String,json:{write:!0}})],b.prototype,"description",void 0);c.__decorate([f.enumeration(d.distanceImpedanceAttributeNameJsonMap,{ignoreUnknown:!1})],
b.prototype,"distanceAttributeName",void 0);c.__decorate([e.property({type:String,json:{write:!0}})],b.prototype,"id",void 0);c.__decorate([f.enumeration(d.impedanceAttributeNameJsonMap,{ignoreUnknown:!1})],b.prototype,"impedanceAttributeName",void 0);c.__decorate([e.property({type:String,json:{write:!0}})],b.prototype,"name",void 0);c.__decorate([e.property({type:[String],json:{write:!0}})],b.prototype,"restrictionAttributeNames",void 0);c.__decorate([r.reader("restrictionAttributeNames")],b.prototype,
"readRestrictionAttributes",null);c.__decorate([u.writer("restrictionAttributeNames")],b.prototype,"writeRestrictionAttributes",null);c.__decorate([e.property({type:Number,json:{write:{allowNull:!0}}})],b.prototype,"simplificationTolerance",void 0);c.__decorate([f.enumeration(d.lengthUnitJsonMap)],b.prototype,"simplificationToleranceUnits",void 0);c.__decorate([f.enumeration(d.durationImpedanceAttributeNameJsonMap,{ignoreUnknown:!1})],b.prototype,"timeAttributeName",void 0);c.__decorate([f.enumeration(d.travelModeTypeJsonMap)],
b.prototype,"type",void 0);c.__decorate([e.property({type:Boolean,json:{write:!0}})],b.prototype,"useHierarchy",void 0);c.__decorate([f.enumeration(d.restrictUTurnJsonMap)],b.prototype,"uturnAtJunctions",void 0);return b=c.__decorate([t.subclass("esri.rest.support.TravelMode")],b)});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Accessor ../core/Clonable ../core/Identifiable ../core/JSONSupport ../core/maybe ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass".split(" "),function(g,b,a,l,m,n,h,c,r,t,u,p){let q=0;a=function(k){function f(d){d=k.call(this,d)||this;d.id=`${Date.now().toString(16)}-analysis-${q++}`;d.title=null;return d}g._inheritsLoose(f,
k);g._createClass(f,[{key:"parent",get:function(){return this._get("parent")},set:function(d){const e=this.parent;if(h.isSome(e))switch(e.type){case "line-of-sight":e.removeAnalysis(this);break;case "2d":case "3d":e.analyses.includes(this)&&e.analyses.remove(this)}this._set("parent",d)}},{key:"isEditable",get:function(){return this.requiredPropertiesForEditing.every(h.isSome)}}]);return f}(n.JSONSupportMixin(l.ClonableMixin(m.IdentifiableMixin(a))));b.__decorate([c.property({type:String,constructOnly:!0,
clonable:!1})],a.prototype,"id",void 0);b.__decorate([c.property({type:String})],a.prototype,"title",void 0);b.__decorate([c.property({constructOnly:!0})],a.prototype,"type",void 0);b.__decorate([c.property({clonable:!1,value:null})],a.prototype,"parent",null);b.__decorate([c.property({readOnly:!0})],a.prototype,"extent",void 0);b.__decorate([c.property({readOnly:!0})],a.prototype,"isEditable",null);b.__decorate([c.property({readOnly:!0})],a.prototype,"requiredPropertiesForEditing",void 0);b.__decorate([c.property({readOnly:!0})],
a.prototype,"nonEditableMessage",void 0);return a=b.__decorate([p.subclass("esri.analysis.Analysis")],a)});
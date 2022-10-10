// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../analysis/AreaMeasurementAnalysis ../../core/maybe ../../core/unitUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../properties/defaultUnit ../../views/3d/interactive/measurementTools/areaMeasurement3D/AreaMeasurement3DTool ../support/InteractiveAnalysisViewModel".split(" "),function(n,c,p,d,m,g,
b,x,y,t,u,v,w){b=function(q){function l(a){a=q.call(this,a)||this;a.analysis=null;a.supportedViewType="3d";a.unsupportedErrorMessage="AreaMeasurement3DViewModel is only supported in 3D views.";a._userUnitOptions=null;a._userUnit=null;return a}n._inheritsLoose(l,q);var h=l.prototype;h.initialize=function(){this.analysis.unit=this.unit};h.constructAnalysis=function(){return new p};h.constructTool=function(){return new v({view:d.unwrap(this.view),analysis:this.analysis,analysisViewData:d.unwrap(this.analysisView),
visible:this.visible})};h._findSelectableUnit=function(a,e){const {unitOptions:f}=this;return f.includes(a)?a:d.isSome(e)?this._findSelectableUnit(e):f[0]};h._filteredOrAllUnits=function(a){if(d.isNone(a))return m.measurementAreaUnits.slice();a=a.filter(e=>m.measurementAreaUnits.includes(e));return 0===a.length?m.measurementAreaUnits.slice():a};n._createClass(l,[{key:"state",get:function(){return this.disabled||!this.ready?"disabled":d.isNone(this.tool)?"ready":this.tool.state}},{key:"measurement",
get:function(){if(d.isNone(this.tool)||this.disabled||this.tool.destroyed)return null;var {analysisView:a}=this;if(d.isNone(a))return null;const e=a.analysisVisualization;var f=e.viewData,k=f.measurementData;a=a.validMeasurement;f="euclidean"===f.mode;const r=(k=0===(f?k.intersectingSegments:k.geodesicIntersectingSegments).size)?a?"available":"unavailable":"invalid";return{mode:f?"euclidean":"geodesic",area:{text:k&&a?e.areaLabel:null,state:r},perimeterLength:{text:k&&a?e.perimeterLengthLabel:null,
state:r}}}},{key:"unitOptions",get:function(){return this._filteredOrAllUnits(this._userUnitOptions)},set:function(a){this._userUnitOptions=a;this._set("unitOptions",this._filteredOrAllUnits(this._userUnitOptions))}},{key:"unit",get:function(){return d.isSome(this._userUnit)?this._userUnit=this._findSelectableUnit(this._userUnit,this.defaultUnit):this._findSelectableUnit(this.defaultUnit)},set:function(a){this._userUnit=a?this._findSelectableUnit(a,this._userUnit):null;this.analysis.unit=this._userUnit}}]);
return l}(w.InteractiveAnalysisViewModel);c.__decorate([g.property({type:p})],b.prototype,"analysis",void 0);c.__decorate([g.property({readOnly:!0})],b.prototype,"state",null);c.__decorate([g.property({readOnly:!0})],b.prototype,"measurement",null);c.__decorate([g.property()],b.prototype,"unitOptions",null);c.__decorate([g.property()],b.prototype,"unit",null);c.__decorate([g.property(u.defaultUnitPropertyMetadata)],b.prototype,"defaultUnit",void 0);c.__decorate([g.property()],b.prototype,"_userUnit",
void 0);return b=c.__decorate([t.subclass("esri.widgets.AreaMeasurement3D.AreaMeasurement3DViewModel")],b)});
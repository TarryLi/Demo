// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/handleUtils ../../../../core/maybe ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../geometry/support/vectorStacks ./LengthDimensionSubTool ../../webgl-engine/lib/Intersector ../../webgl-engine/lib/IntersectorInterfaces ../../../interactive/AnalysisToolBase ../../../support/screenUtils".split(" "),
function(c,m,e,p,g,n,f,y,z,A,q,r,t,u,v,w,x){var h;(function(k){k.Ready="ready";k.Creating="creating";k.Created="created"})(h||(h={}));c.DimensioningTool=function(k){function l(a){a=k.call(this,a)||this;a.preferManipulatorCursor=!0;a.analysisViewData=null;return a}m._inheritsLoose(l,k);var d=l.prototype;d.initialize=function(){this._intersector=u.newIntersector(this.view.state.viewingMode);this._intersector.options.store=v.StoreResults.MIN;this._lengthDimensionSubTool=new t.LengthDimensionSubTool({view:this.view});
this.own(p.destroyHandle(this._lengthDimensionSubTool));for(const a of this.analysis.dimensions.items)this._addDimension(a);this.own(this.analysis.dimensions.on("change",a=>{for(const b of a.added)this._addDimension(b);for(const b of a.removed)this._removeDimension(b)}));this.own(n.watch(()=>this.state,a=>{a===h.Created&&this.finishToolCreation()},n.syncAndInitial))};d.getManipulatorsForDimension=function(a){return this._lengthDimensionSubTool.getManipulatorsForDimension(a)};d.onInputEvent=function(a){switch(a.type){case "immediate-click":this._clickHandler(a);
break;case "immediate-double-click":this._doubleClickHandler(a);break;case "pointer-move":this._pointerMoveHandler(a)}};d.onActivate=function(){this._activeSubTool=this._lengthDimensionSubTool};d.onDeactivate=function(){g.isSome(this._activeSubTool)&&(this._activeSubTool.onDeactivate(),g.isSome(this._activeSubTool.stagedDimension)&&(this.analysis.dimensions.remove(this._activeSubTool.stagedDimension),this._activeSubTool.stagedDimension=null),this._activeSubTool=null)};d._clickHandler=function(a){if(!g.isNone(this._activeSubTool)){var b=
this._intersectScreen(a);if(!g.isNone(b)){if(g.isNone(this._activeSubTool.stagedDimension))b=this._activeSubTool.onUnstagedClick({mapPoint:b,pointerType:a.pointerType}),this.analysis.dimensions.add(b);else this._activeSubTool.onStagedClick({mapPoint:b,pointerType:a.pointerType});a.stopPropagation()}}};d._doubleClickHandler=function(a){this.view.activeTool=null;a.stopPropagation()};d._pointerMoveHandler=function(a){if(!g.isNone(this._activeSubTool)&&!this.hasFocusedManipulators){var b=this._intersectScreen(a);
if(!g.isNone(b))this._activeSubTool.onPointerMove({mapPoint:b,pointerType:a.pointerType})}};d._intersectScreen=function(a){a=x.createScreenPointArrayFromEvent(a);this.view.sceneIntersectionHelper.intersectToolIntersectorScreen(a,this._intersector);a=this._intersector.results.min;const b=r.sv3d.get();return a.getIntersectionPoint(b)?this.view.renderCoordsHelper.fromRenderCoords(b,this.view.spatialReference):null};d._addDimension=function(a){this._lengthDimensionSubTool.addDimension(a,this.manipulators)};
d._removeDimension=function(a){this._lengthDimensionSubTool.removeDimension(a,this.manipulators)};m._createClass(l,[{key:"state",get:function(){return this.analysis.dimensions.some(a=>"length"===a.type)?g.isSome(this._activeSubTool)?h.Creating:h.Created:h.Ready}},{key:"updating",get:function(){return this._lengthDimensionSubTool.updating}},{key:"cursor",get:function(){return this.active?"crosshair":null}}]);return l}(w.AnalysisToolBase);e.__decorate([f.property({constructOnly:!0})],c.DimensioningTool.prototype,
"view",void 0);e.__decorate([f.property({constructOnly:!0})],c.DimensioningTool.prototype,"analysis",void 0);e.__decorate([f.property({readOnly:!0})],c.DimensioningTool.prototype,"state",null);e.__decorate([f.property({readOnly:!0})],c.DimensioningTool.prototype,"updating",null);e.__decorate([f.property({readOnly:!0})],c.DimensioningTool.prototype,"cursor",null);e.__decorate([f.property({readOnly:!0})],c.DimensioningTool.prototype,"preferManipulatorCursor",void 0);e.__decorate([f.property({constructOnly:!0})],
c.DimensioningTool.prototype,"analysisViewData",void 0);e.__decorate([f.property()],c.DimensioningTool.prototype,"_activeSubTool",void 0);e.__decorate([f.property()],c.DimensioningTool.prototype,"_lengthDimensionSubTool",void 0);c.DimensioningTool=e.__decorate([q.subclass("esri.views.3d.analysis.Dimensioning.DimensioningTool")],c.DimensioningTool);Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
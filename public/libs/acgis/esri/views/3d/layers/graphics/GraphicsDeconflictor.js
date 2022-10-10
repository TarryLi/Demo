// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Handles ../../../../core/MapUtils ../../../../core/maybe ../../../../core/reactiveUtils ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/set ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/boundedPlane ./Deconflictor ./enums ./LabelDeconflictor ../../../support/Scheduler".split(" "),
function(g,p,r,t,u,q,h,A,B,C,D,E,v,w,l,k,x,y){function m(e){e=e.layer;return!(!e||!e.featureReduction||"selection"!==e.featureReduction.type)}function z(e){(e=e.graphics3DGraphics)&&e.forEach(f=>f.clearVisibilityFlag(k.VisibilityFlag.DECONFLICTION))}g.GraphicsDeconflictor=function(e){function f(){var a=e.apply(this,arguments)||this;a._handles=new t;a._contexts=new Map;a._viewState=new l.DeconflictorViewState;a.visibilityGroup=k.VisibilityGroup.GRAPHIC;a._iconMarginFactor=-.1;return a}p._inheritsLoose(f,
e);var d=f.prototype;d.initialize=function(){this._handles.add([h.watch(()=>{var a,b;return null==(a=this.view)?void 0:null==(b=a.state)?void 0:b.camera},()=>{this._updateViewState();this.setDirty()}),h.watch(()=>{var a,b,c;return null==(a=this.view)?void 0:null==(b=a.map)?void 0:null==(c=b.ground)?void 0:c.opacity},(a,b)=>{1!==a&&1!==b||this.setDirty()}),h.watch(()=>{var a;return null==(a=this.view)?void 0:a.slicePlane},()=>{this._updateSlicePlane();this._slicePlaneChanged()},h.initial)]);this._frameTask=
this.view.resourceController.scheduler.registerTask(y.TaskPriority.GRAPHICS_DECONFLICTOR,this);this._labels=new x.LabelDeconflictor({view:this.view,parent:this})};d.destroy=function(){this._labels.destroy();this._labels=null;this._handles.destroy();this._handles=null;this._frameTask&&(this._frameTask.remove(),this._frameTask=null)};d.setDirty=function(){0<this._contexts.size&&(e.prototype.setDirty.call(this),this._labels.setDirty())};d.runTask=function(a){e.prototype.runTask.call(this,a);this.running||
this._labels.setDirty()};d.setInitialIconVisibilityFlag=function(a,b){a=!(this._graphicSupportsDeconfliction(b)&&m(a));b.setVisibilityFlag(k.VisibilityFlag.DECONFLICTION,a,k.VisibilityGroup.GRAPHIC)};d._updateViewState=function(){this.view&&this.view.state&&(this._viewState.camera.copyFrom(this.view.state.camera),this._updateSlicePlane())};d._updateSlicePlane=function(){const a=this.view?this.view.slicePlane:null;q.isSome(a)&&w.transform(a,this._viewState.camera.viewMatrix,this._viewState.slicePlane);
this._viewState.slicePlaneEnabled=q.isSome(a)};d._slicePlaneChanged=function(){u.someMap(this._contexts,(a,b)=>b.symbolCreationContext.slicePlaneEnabled)&&this.setDirty()};d.addGraphicsOwner=function(a){let b=this._contexts.get(a);null==b&&(b=new Map,this._contexts.set(a,b),this.setDirty());return{addGraphic:c=>this._addGraphic(a,b,c),removeGraphic:c=>this._removeGraphic(b,c),labelingInfoChange:()=>this._labels.enabledChanged(a,b),featureReductionChange:()=>this.enabledChanged(a,b),slicePlaneEnabledChange:()=>
this._slicePlaneEnabledChanged(a,b),clear:()=>b.forEach(c=>this._removeGraphic(b,c.graphics3DGraphic))}};d.removeGraphicsOwner=function(a){const b=this._contexts.get(a);b&&(b.forEach(c=>this._removeGraphic(b,c.graphics3DGraphic)),this._contexts.delete(a),this.setDirty())};d._addGraphic=function(a,b,c){const n=c.graphic.uid;c=new l.DeconflictorGraphic(c,a.symbolCreationContext.slicePlaneEnabled);b.set(n,c);m(a)&&this.addToActiveGraphics(c);a.labelsEnabled&&this._labels.addToActiveGraphics(c)};d._removeGraphic=
function(a,b){b=b.graphic.uid;const c=a.get(b);c&&(this.removeFromActiveGraphics(c),this._labels.removeFromActiveGraphics(c),a.delete(b),this.setDirty())};d.enabledChanged=function(a,b){const c=m(a);c||z(a);this.modifyGraphics(b,c)};d._slicePlaneEnabledChanged=function(a,b){const c=a.symbolCreationContext.slicePlaneEnabled;b.forEach(n=>n.slicePlaneEnabled=c);this.setDirty()};d.getGraphicsLayers=function(a){return a.graphics};d._graphicSupportsDeconfliction=function(a){if(a.isDraped)return!1;a=a.graphics;
if(!a||!a.length)return!1;for(const b of a)if(this.layerSupportsDeconfliction(b))return!0;return!1};p._createClass(f,[{key:"labels",get:function(){return this._labels}},{key:"viewState",get:function(){return this._viewState}},{key:"iconMarginFactor",get:function(){return this._iconMarginFactor},set:function(a){this._iconMarginFactor=a;this.setDirty()}}]);return f}(l.Deconflictor);g.GraphicsDeconflictor=r.__decorate([v.subclass("esri.views.3d.layers.graphics.GraphicsDeconflictor")],g.GraphicsDeconflictor);
Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
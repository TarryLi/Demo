// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../analysis/LineOfSightAnalysis ../../analysis/LineOfSightAnalysisObserver ../../analysis/LineOfSightAnalysisTarget ../../core/Collection ../../core/collectionUtils ../../core/Handles ../../core/handleUtils ../../core/maybe ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./LineOfSightTarget ../support/AnalysisViewModel".split(" "),
function(n,k,t,y,z,f,u,A,B,e,h,l,E,F,G,C,v,D){const p=f.ofType(v);f=function(w){function m(a){a=w.call(this,a)||this;a.analysis=null;a.supportedViewType="3d";a.unsupportedErrorMessage="LineOfSightViewModel is only supported in 3D views.";a._handles=new A;a._vmTargetsToConnection=new Map;a._analysisTargetsToConnection=new Map;return a}n._inheritsLoose(m,w);var d=m.prototype;d.initialize=function(){this._handles.add([this.targets.on("after-add",a=>this._onViewModelTargetAdded(a.item)),this.targets.on("after-remove",
a=>this._onViewModelTargetRemoved(a.item)),h.watch(()=>this.analysis,a=>this._onAnalysisChange(a),h.syncAndInitial)])};d.destroy=function(){this._analysisTargetsToConnection.forEach(a=>a.remove());this._handles=e.destroyMaybe(this._handles)};d.continue=function(){e.isSome(this.tool)&&this.tool.continue()};d.stop=function(){e.isSome(this.tool)&&this.tool.stop()};d.constructAnalysis=function(){return new t};d.onConnectToAnalysisView=function(){var a=n._asyncToGenerator(function*(b){this._handles.add([b.on("result-changed",
c=>{const g=this._analysisTargetsToConnection.get(c.target);e.isSome(c.result)?(g.viewModelTarget.intersectedGraphic=c.result.intersectedGraphic,g.viewModelTarget.intersectedLocation=e.unwrap(c.result.intersectedLocation),g.viewModelTarget.visible=c.result.visible):(g.viewModelTarget.intersectedGraphic=null,g.viewModelTarget.intersectedLocation=null,g.viewModelTarget.visible=void 0)})],"view")});return function(b){return a.apply(this,arguments)}}();d.onDisconnectFromAnalysisView=function(){null!=
this._handles&&this._handles.remove("view")};d._onViewModelTargetAdded=function(a){if(!this._vmTargetsToConnection.get(a)){var b=new z({position:a.location});this._connectViewModelWithAnalysisTarget(a,b);this.analysis.targets.add(b)}};d._onViewModelTargetRemoved=function(a){if(a=this._vmTargetsToConnection.get(a))a.remove(),this.analysis.targets.remove(a.analysisTarget)};d._onAnalysisTargetAdded=function(a){if(!this._analysisTargetsToConnection.get(a)){var b=new v({location:e.applySome(a.position,
c=>c.clone())});this._connectViewModelWithAnalysisTarget(b,a);this.targets.add(b)}};d._onAnalysisTargetRemoved=function(a){if(a=this._analysisTargetsToConnection.get(a))a.remove(),this.targets.remove(a.viewModelTarget)};d._connectViewModelWithAnalysisTarget=function(a,b){let c=!1;const g=B.handlesGroup([h.watch(()=>b.position,q=>{c||(c=!0,a.location=e.applySome(q,r=>r.clone()),c=!1)},h.sync),h.watch(()=>a.location,q=>{c||(c=!0,b.position=e.applySome(q,r=>r.clone()),c=!1)},h.sync)]),x={analysisTarget:b,
viewModelTarget:a,remove:()=>{g.remove();this._vmTargetsToConnection.delete(a);this._analysisTargetsToConnection.delete(b)}};this._vmTargetsToConnection.set(a,x);this._analysisTargetsToConnection.set(b,x)};d._onAnalysisChange=function(a){this._handles.remove("analysis");this._handles.add([this.analysis.targets.on("after-add",b=>this._onAnalysisTargetAdded(b.item)),this.analysis.targets.on("after-remove",b=>this._onAnalysisTargetRemoved(b.item))],"analysis");this.targets.removeAll();a.targets.forEach(b=>
{this._onAnalysisTargetAdded(b)})};n._createClass(m,[{key:"state",get:function(){return this.disabled||!this.ready?"disabled":e.isNone(this.tool)?"ready":this.tool.state}},{key:"observer",get:function(){return e.isSome(this.analysis.observer)?this.analysis.observer.position:null},set:function(a){this.analysis.observer=new y({position:a})}},{key:"targets",get:function(){return this._get("targets")||new p},set:function(a){this._set("targets",u.referenceSetter(a,this.targets,p))}},{key:"testInfo",get:function(){return{analysisView:this.analysisView,
getAnalysisTargetFromViewModelTarget:a=>e.applySome(this._vmTargetsToConnection.get(a),b=>b.analysisTarget)}}}]);return m}(D.AnalysisViewModel);k.__decorate([l.property({type:t})],f.prototype,"analysis",void 0);k.__decorate([l.property({readOnly:!0})],f.prototype,"state",null);k.__decorate([l.property()],f.prototype,"observer",null);k.__decorate([l.property({type:p,cast:u.castForReferenceSetter,nonNullable:!0})],f.prototype,"targets",null);return f=k.__decorate([C.subclass("esri.widgets.lineOfSight.LineOfSightViewModel")],
f)});
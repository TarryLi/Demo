// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/Handles ../../../../../core/maybe ../../../../../core/reactiveUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/arrayUtils ../../../../../core/has ../../../../../core/accessorSupport/ensureType ../../../../../core/accessorSupport/decorators/subclass ../../../../../layers/graphics/hydratedFeatures ../../../analysis/support/measurementUtils ../../editingTools/dragEventPipeline3D ./AreaMeasurement3DView ../support/PickRequest ../../../../interactive/AnalysisToolBase ../../../../interactive/dragEventPipeline ../../../../support/screenUtils".split(" "),
function(q,g,B,k,r,h,d,J,K,C,t,u,v,D,E,F,G,w){d=function(x){function m(a){a=x.call(this,a)||this;a._handles=new B;a.polygonState="initial";a.analysisViewData=null;return a}q._inheritsLoose(m,x);var b=m.prototype;b.initialize=function(){const {view:a,analysisViewData:f,manipulators:l,visible:c}=this;this.measurementView=new D.default({view:a,analysisViewData:f,toolState:this,manipulators:l,visible:c});this._setupManipulators();this._handles.add(r.watch(()=>this.state,e=>{"measured"===e&&this.finishToolCreation()},
r.syncAndInitial))};b.destroy=function(){this.measurementView.destroy();this._set("measurementView",null);this._handles=k.destroyMaybe(this._handles)};b.finishMeasurement=function(){const {path:a}=this.analysisViewData;3>a.numVertices?(a.clear(),this.polygonState="initial"):(a.close(),this.polygonState="measured");this.analysisViewData.cursorPoint=null};b.onShow=function(){this.measurementView.show()};b.onHide=function(){this.measurementView.hide()};b.onInputEvent=function(a){switch(a.type){case "immediate-double-click":this._handleImmediateDoubleClick(a);
break;case "immediate-click":this._handleImmediateClick(a);break;case "pointer-move":this._handlePointerMove(a);break;case "drag":this._handleDrag(a);break;case "key-down":this._handleKeyDown(a)}};b._setupManipulators=function(){const a=c=>c.events.on("grab-changed",()=>{this.analysisViewData.validMeasurement&&(this.polygonState=this.manipulators.some(e=>e.manipulator.grabbing)?"editing":"measured")}),f=(c,e)=>{this._handles.add([G.createManipulatorDragEventPipeline(e,(n,H,I)=>{const y=v.hideManipulatorWhileDragging(n),
p=k.unwrap(n.metadata);H.next(y).next(v.screenToMap3D(this.view)).next(z=>{n.location=z.mapEnd;this.analysisViewData.path.setVertexPosition(p,t.clonePoint(z.mapEnd))});const A=t.clonePoint(this.analysisViewData.path.getVertexPositionAsPoint(p));I.next(y).next(()=>{this.analysisViewData.path.setVertexPosition(p,A);n.location=A})}),a(e)],`manipulator-${c}`)},l=c=>{this._handles.remove(`manipulator-${c}`)};this.manipulators.forEach(({id:c,manipulator:e})=>{f(c,e)});this._handles.add([this.manipulators.on("after-add",
({item:{id:c,manipulator:e}})=>{f(c,e)}),this.manipulators.on("after-remove",({item:{id:c}})=>{l(c)})])};b._handleImmediateDoubleClick=function(a){u.isPrimaryPointerAction(a)&&("drawing"===this.polygonState&&this.finishMeasurement(),a.stopPropagation())};b._handleDrag=function(a){"editing"===this.polygonState&&a.stopPropagation()};b._handleImmediateClick=function(a){if(u.isPrimaryPointerAction(a)){var f=w.createScreenPointFromEvent(a);if(this.active)switch(this.polygonState){case "initial":if(this._addVertexAt(f)){this.analysisViewData.cursorPoint=
null;this.polygonState="drawing";a.stopPropagation();return}break;case "drawing":{const l=this.measurementView.vertexHandleAt(f,a.pointerType);if(k.isNone(l)){if(this._addVertexAt(f)){this.analysisViewData.cursorPoint=null;a.stopPropagation();return}}else 0===l.index&&(this.finishMeasurement(),a.stopPropagation())}}"mouse"===a.pointerType&&this._hoverAt(f)}};b._handlePointerMove=function(a){"mouse"===a.pointerType&&(a=w.createScreenPointFromEvent(a),this._hoverAt(a))};b._handleKeyDown=function(a){"Enter"===
a.key&&"drawing"===this.polygonState&&(this.finishMeasurement(),a.stopPropagation())};b._hoverAt=function(a){!this.active||"initial"!==this.polygonState&&"drawing"!==this.polygonState?this.analysisViewData.cursorPoint=null:(a=this._pick(a),k.isSome(a)&&(this.analysisViewData.cursorPoint=a.mapPoint))};b._addVertexAt=function(a){a=this._pick(a);return k.isSome(a)&&k.isSome(a.mapPoint)?(this.analysisViewData.path.add(a.mapPoint),!0):!1};b._pick=function(a){a=new E.PickRequest(a);return this.measurementView.pick(a)};
q._createClass(m,[{key:"state",get:function(){return 0===this.analysisViewData.path.numVertices?"ready":this.analysisViewData.validMeasurement&&"editing"!==this.polygonState?"measured":"measuring"}},{key:"cursor",get:function(){return"ready"===this.state||"drawing"===this.polygonState?"crosshair":null}}]);return m}(F.AnalysisToolBase);g.__decorate([h.property({readOnly:!0})],d.prototype,"state",null);g.__decorate([h.property()],d.prototype,"polygonState",void 0);g.__decorate([h.property({readOnly:!0})],
d.prototype,"cursor",null);g.__decorate([h.property()],d.prototype,"measurementView",void 0);g.__decorate([h.property({constructOnly:!0})],d.prototype,"view",void 0);g.__decorate([h.property()],d.prototype,"analysis",void 0);g.__decorate([h.property({constructOnly:!0})],d.prototype,"analysisViewData",void 0);return d=g.__decorate([C.subclass("esri.views.3d.interactive.measurementTools.areaMeasurement3D.AreaMeasurement3DTool")],d)});
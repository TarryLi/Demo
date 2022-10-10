// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../Color ../../../../geometry ../../../../analysis/LengthDimension ../../../../core/HandleOwner ../../../../core/Handles ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../layers/graphics/hydratedFeatures ./settings ../../interactive/manipulatorUtils ../../interactive/SnappingVisualizer3D ../../interactive/editingTools/dragEventPipeline3D ../../../interactive/coordinateHelper ../../../interactive/dragEventPipeline ../../../interactive/editGeometry/EditGeometry ../../../interactive/editGeometry/EditGeometryOperations ../../../interactive/snapping/SceneSnappingManagerPool ../../../interactive/snapping/SnappingContext ../../../interactive/snapping/SnappingDragPipelineStep ../../../interactive/snapping/SnappingOperation ../../../../geometry/Point".split(" "),
function(h,w,l,A,Q,B,C,D,g,E,m,t,R,S,T,F,n,u,G,H,x,I,y,J,K,L,M,N,O,p){h.LengthDimensionSubTool=function(z){function q(a){var b=z.call(this,a)||this;b.stagedDimension=null;b._dimensionManipulators=new Map;b._dimensionHandles=new D;b._snappingPipeline=new N.SnappingPipeline;b._snappingManagerResult=L.acquire(a.view);b.own(b._snappingManagerResult);return b}w._inheritsLoose(q,z);var c=q.prototype;c.initialize=function(){this._snappingOperation=new O.SnappingOperation({view:this.view});this.own([this._dimensionHandles,
m.watch(()=>this._snappingOperation.stagedPoint,a=>{g.isSome(this.stagedDimension)&&(this.stagedDimension.endPoint=g.applySome(a,b=>n.clonePoint(b,new p)))},m.sync)])};c.destroy=function(){this._snappingOperation=g.destroyMaybe(this._snappingOperation)};c.addDimension=function(a,b){if(!this._dimensionManipulators.has(a)){var d=this._createPointManipulator(a,{isStart:!0}),f=this._createPointManipulator(a,{isStart:!1}),e={startManipulator:d,endManipulator:f};this._setupDimensionToManipulatorsSync(a,
e);this._dimensionManipulators.set(a,e);b.add(d);b.add(f)}};c.removeDimension=function(a,b){const d=this._dimensionManipulators.get(a);if(!g.isNone(d)){this._dimensionHandles.remove(a);var {startManipulator:f,endManipulator:e}=d;this._dimensionManipulators.delete(a);b.remove(f);b.remove(e)}};c.getManipulatorsForDimension=function(a){return this._dimensionManipulators.get(a)};c.onDeactivate=function(){this._snappingManager.doneSnapping()};c.onUnstagedClick=function({mapPoint:a,pointerType:b}){b=this._snappingContext(b);
a=n.clonePoint(this._snappingManager.update(a,b),new p);this.stagedDimension=a=new B({startPoint:a,endPoint:null});this._snappingManager.doneSnapping();return a};c.onStagedClick=function({mapPoint:a,pointerType:b}){g.isNone(this.stagedDimension)||(b=this._snappingContext(b),a=n.clonePoint(this._snappingManager.update(a,b),new p),this.stagedDimension.endPoint=a,this.stagedDimension=null,this._snappingManager.doneSnapping())};c.onPointerMove=function({mapPoint:a,pointerType:b}){b=this._snappingContext(b);
this.updatingHandles.addPromise(E.ignoreAbortErrors(this._snappingOperation.snap(a,this._snappingManager,b)))};c._setupDimensionToManipulatorsSync=function(a,b){const {startManipulator:d,endManipulator:f}=b;this._dimensionHandles.add([m.watch(()=>({startPoint:a.startPoint,endPoint:a.endPoint,stagedDimension:this.stagedDimension}),({startPoint:e,endPoint:r,stagedDimension:k})=>{g.isSome(e)?(d.available=g.isNone(k)||k===a,d.location=e):d.available=!1;g.isSome(r)?(f.available=g.isNone(k),f.location=
r):f.available=!1},m.syncAndInitial)],a)};c._createPointManipulator=function(a,b){({isStart:b}=b);const d=b?"startPoint":"endPoint";b=G.createSphereManipulator(this.view,A.toUnitRGB(u.settings.pointManipulators.color),u.settings.pointManipulators.opacity);b.available=!1;b.radius=u.settings.pointManipulators.radius;const f=y.createManipulatorDragEventPipeline(b,(e,r,k,P)=>{e=x.hideManipulatorWhileDragging(e);r.next(e).next(x.screenToMap3D(this.view)).next(this._snappingPipeline.createSnapDragEventPipelineStep({snappingContext:this._snappingContext(P),
snappingManager:this._snappingManager,cancel:k,updatingHandles:this.updatingHandles}),this._snappingPipeline.next).next(v=>{v=n.clonePoint(v.mapEnd,new p);a[d]=v});k.next(e).next(y.resetProperties(a,[d]))});this._dimensionHandles.add(f,a);return b};c._snappingContext=function(a){return new M.SnappingContext({elevationInfo:{mode:"absolute-height",offset:0},pointer:a,editGeometryOperations:new K.EditGeometryOperations(new J.EditGeometry("point",I.createCoordinateHelper(!0,!1,this.view.spatialReference))),
visualizer:new H.SnappingVisualizer3D})};w._createClass(q,[{key:"updating",get:function(){return this.updatingHandles.updating||this._snappingManager.updating}},{key:"_snappingManager",get:function(){return this._snappingManagerResult.snappingManager}}]);return q}(C.HandleOwner);l.__decorate([t.property({constructOnly:!0,nonNullable:!0})],h.LengthDimensionSubTool.prototype,"view",void 0);l.__decorate([t.property({readOnly:!0})],h.LengthDimensionSubTool.prototype,"updating",null);l.__decorate([t.property()],
h.LengthDimensionSubTool.prototype,"stagedDimension",void 0);h.LengthDimensionSubTool=l.__decorate([F.subclass("esri.views.3d.analysis.Dimensioning.LengthDimensionSubTool")],h.LengthDimensionSubTool);Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Evented ../../core/Handles ../../core/lang ../../core/maybe ../../core/promiseUtils ../../core/screenUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../layers/GraphicsLayer ../../layers/graphics/dehydratedFeatures ../ViewingMode ../2d/interactive/SnappingVisualizer2D ../interactive/coordinateHelper ../interactive/editGeometry/EditGeometry ../interactive/editGeometry/EditGeometryOperations ../interactive/snapping/SnappingContext ../interactive/snapping/SnappingOperation".split(" "),
function(m,g,e,r,t,f,u,n,h,H,v,w,x,y,z,A,p,B,C,D){var l;e=l=function(q){function k(a){var c;var b=q.call(this,a)||this;b._hasZ=null;b._cursorScreenPoint=null;b._activePointerId=null;b._stagedVertexUnsnapped=null;b._lastVertexUnsnapped=null;b._handles=new r;b._viewHandlesKey="view-handles";b._undoRedoHandlesKey="undo-redo-handles";b._drawToolHandlesKey="draw-tool";b._nativeEventHistory={undoStack:[],redoStack:[]};b.interactiveUndoDisabled=!1;b.history=[];b.redoHistory=[];b.snapToScene=!1;b.view=null;
b.elevationInfo=null;b.defaultZ=0;b._coordinateHelper=A.createCoordinateHelper(a.hasZ,!1,a.view.spatialReference);b._snappingManager=a.snappingManager;b._editGeometryOperations=new B.EditGeometryOperations(new p.EditGeometry(null!=(c=a.editGeometryType)?c:"polygon",b._coordinateHelper));b._snappingGraphicsLayer=new w({id:l.SNAPPING_GRAPHICS_LAYER_ID,listMode:"hide",internal:!0});b._snappingContext=new C.SnappingContext({editGeometryOperations:b._editGeometryOperations,elevationInfo:{mode:"on-the-ground",
offset:0},pointer:"mouse",visualizer:new z.SnappingVisualizer2D(b._snappingGraphicsLayer)});b._activeComponent=new p.Component(a.view.spatialReference,y.ViewingMode.Local);b._editGeometryOperations.data.components.push(b._activeComponent);return b}m._inheritsLoose(k,q);var d=k.prototype;d.normalizeCtorArgs=function(a){a={...a};delete a.editGeometryType;return a};d.initialize=function(){this._snappingOperation=new D.SnappingOperation({view:this.view});"2d"===this.view.type&&this.view.map.layers.add(this._snappingGraphicsLayer)};
d.destroy=function(){this._handles.destroy();this.view.map.layers.remove(this._snappingGraphicsLayer);this._snappingGraphicsLayer.destroy();f.isSome(this._snappingManager)&&this._snappingManager.doneSnapping();this._snappingOperation=f.destroyMaybe(this._snappingOperation);this._editGeometryOperations.destroy()};d.canUndo=function(){return this._editGeometryOperations.canUndo};d.canRedo=function(){return this._editGeometryOperations.canRedo};d.undo=function(){this.canUndo&&this._editGeometryOperations.undo()};
d.redo=function(){this.canRedo&&this._editGeometryOperations.redo()};d.getCoordsFromScreenPoint=function(a){a=this.screenToMap(a);return f.isNone(a)?null:a.hasZ?[a.x,a.y,a.z]:[a.x,a.y]};d.getCoordsAndPointFromScreenPoint=function(a){a=this.screenToMap(a);return f.isNone(a)?null:a.hasZ?{vertex:[a.x,a.y,a.z],mapPoint:a}:{vertex:[a.x,a.y],mapPoint:a}};d.screenToMap=function(a){var c=null;"3d"===this.view.type?this.hasZ?(c=f.unwrapOr(this.elevationInfo,E),c=this.view.sceneIntersectionHelper.intersectElevationFromScreen(n.createScreenPointArray(a.x,
a.y),c,this._getGeometryZValue())):(c=f.unwrapOr(this.elevationInfo,F),c=this.view.sceneIntersectionHelper.intersectElevationFromScreen(n.createScreenPointArray(a.x,a.y),c,0),f.isSome(c)&&(c.z=void 0)):(c=this.view.toMap(a),f.isSome(c)&&(c.z=this.hasZ?this._getGeometryZValue():void 0));return c};d._pushCursorVertex=function(a,c){this._stagedVertexUnsnapped=a=x.makeDehydratedPoint(a[0],a[1],null,this.view.spatialReference);const b=this._snappingManager;f.isNone(b)?(this._stagedVertex=a,c()):u.ignoreAbortErrors(this._snappingOperation.snap(a,
b,this._snappingContext)).then(()=>{c()})};d._popCursorVertex=function(){this._stagedVertex=this._stagedVertexUnsnapped=null};d._getGeometryZValue=function(){return this.defaultZ};d._abortSnapping=function(){this._snappingOperation.abort()};d._isDuplicateOfLastVertex=function(a){const c=this._editGeometryOperations.data.components[0].getLastVertex();if(f.isSome(c)&&a[0]===c[0]&&a[1]===c[1])return!0;const {x:b,y:G}=this._coordinateHelper.vectorToDehydratedPoint(a);return f.isSome(this._lastVertexUnsnapped)&&
b===this._lastVertexUnsnapped.x&&G===this._lastVertexUnsnapped.y?!0:!1};d._shouldHandlePointerEvent=function(a){return this._isPrimaryPointerAction(a)&&(f.isNone(this._activePointerId)||this._activePointerId===a.pointerId)};d._vertexAddHandler=function(a){const c=f.isSome(this._stagedVertex)?this._coordinateHelper.pointToArray(this._stagedVertex):this.getCoordsFromScreenPoint(this._cursorScreenPoint);f.isSome(c)&&this._addVertex(c,a.native)};d._drawCompleteHandler=function(a){this._completeDrawing(a.native)};
d._isPrimaryPointerAction=function(a){return"mouse"!==a.pointerType||0===a.button};m._createClass(k,[{key:"_committedVertices",get:function(){return this._editGeometryOperations.data.components[0].vertices.map(a=>a.pos)}},{key:"vertices",get:function(){return f.isSome(this._stagedVertex)?[...this._committedVertices,this._coordinateHelper.pointToArray(this._stagedVertex)]:this._committedVertices}},{key:"hasZ",get:function(){return f.isSome(this._hasZ)?this._hasZ:"3d"===this.view.type},set:function(a){this._hasZ=
a;this.notifyChange("hasZ")}},{key:"_stagedVertex",get:function(){return this._snappingOperation.stagedPoint},set:function(a){this._snappingOperation.stagedPoint=t.clone(a)}}]);return k}(e.EventedAccessor);e.SNAPPING_GRAPHICS_LAYER_ID="DrawAction-snapping-graphics-layer";g.__decorate([h.property({readOnly:!0})],e.prototype,"vertices",null);g.__decorate([h.property({type:Boolean,nonNullable:!0})],e.prototype,"interactiveUndoDisabled",void 0);g.__decorate([h.property({readOnly:!0})],e.prototype,"history",
void 0);g.__decorate([h.property({readOnly:!0})],e.prototype,"redoHistory",void 0);g.__decorate([h.property()],e.prototype,"snapToScene",void 0);g.__decorate([h.property()],e.prototype,"view",void 0);g.__decorate([h.property()],e.prototype,"elevationInfo",void 0);g.__decorate([h.property({nonNullable:!0})],e.prototype,"defaultZ",void 0);g.__decorate([h.property()],e.prototype,"hasZ",null);g.__decorate([h.property()],e.prototype,"_snappingOperation",void 0);g.__decorate([h.property()],e.prototype,
"_stagedVertex",null);e=l=g.__decorate([v.subclass("esri.views.draw.DrawAction")],e);const E={mode:"absolute-height",offset:0},F={mode:"on-the-ground",offset:0};return e});
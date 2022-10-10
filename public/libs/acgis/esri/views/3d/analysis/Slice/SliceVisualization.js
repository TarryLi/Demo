// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/Handles ../../../../core/maybe ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/mat4 ../../../../chunks/vec3 ../../../../chunks/vec4f64 ../../../../geometry/support/vectorStacks ./sliceToolConfig ./sliceToolUtils ../../webgl-engine/materials/lineStippleUtils".split(" "),
function(b,m,d,v,w,h,f,e,B,C,D,x,t,p,y,q,k,r,z){b.SliceVisualization=function(u){function n(a){a=u.call(this,a)||this;a._handles=new w;a._gridVisualElement=null;a._outlineVisualElement=null;a.state="pending";a.showGrid=!1;a.preview=!0;return a}m._inheritsLoose(n,u);var g=n.prototype;g.initialize=function(){this._initialize()};g._initialize=function(){var a=m._asyncToGenerator(function*(){if("destroyed"!==this.state&&"ready"!==this.state){yield f.whenOnce(()=>this.view.ready);var c=this.analysisViewData;
if(h.isNone(c))throw Error("expected internal object to be valid");this._gridVisualElement=r.createGridVisualElement(this.view);this._outlineVisualElement=r.createOutlineVisualElement(this.view);this._handles.add([f.watch(()=>({visible:h.isSome(c.plane)&&this.analysisViewData.visible,active:this.analysisViewData.active,preview:this.preview,showGrid:this.showGrid}),l=>this._updateMaterials(l),f.syncAndInitial),f.watch(()=>c.plane,l=>this._updatePlane(l),f.syncAndInitial)],"internal");this._set("state",
"ready")}});return function(){return a.apply(this,arguments)}}();g.destroy=function(){"destroyed"!==this.state&&"pending"!==this.state&&(this._handles.destroy(),this._gridVisualElement=h.destroyMaybe(this._gridVisualElement),this._outlineVisualElement=h.destroyMaybe(this._outlineVisualElement),this.set("view",null),this._set("state","destroyed"))};g.whenReady=function(){var a=m._asyncToGenerator(function*(){yield f.whenOnce(()=>this.view.ready)});return function(){return a.apply(this,arguments)}}();
g._updatePlane=function(a){if(!h.isNone(a)){var c=p.set(q.sv3d.get(),p.length(a.basis1),p.length(a.basis2),1);c=t.fromScaling(q.sm4d.get(),c);a=r.calculateBoundedPlaneTranslateRotate(a,q.sm4d.get());a=t.multiply(c,a,c);this._outlineVisualElement.transform=a;this._gridVisualElement.transform=a}};g._updateMaterials=function({visible:a,active:c,preview:l,showGrid:A}){this._outlineVisualElement.color=k.PLANE_OUTLINE_COLOR;this._outlineVisualElement.width=l?k.PLANE_PREVIEW_OUTLINE_WIDTH:k.PLANE_OUTLINE_WIDTH;
this._outlineVisualElement.stipplePattern=c?null:z.createStipplePatternSimple(5);this._gridVisualElement.backgroundColor=k.PLANE_BACKGROUND_COLOR;this._gridVisualElement.gridColor=A?k.GRID_COLOR:y.ZEROS;this._gridVisualElement.visible=a;this._outlineVisualElement.visible=a};m._createClass(n,[{key:"ready",get:function(){return"ready"===this.state}}]);return n}(v);d.__decorate([e.property({readOnly:!0})],b.SliceVisualization.prototype,"state",void 0);d.__decorate([e.property()],b.SliceVisualization.prototype,
"view",void 0);d.__decorate([e.property()],b.SliceVisualization.prototype,"analysis",void 0);d.__decorate([e.property()],b.SliceVisualization.prototype,"analysisViewData",void 0);d.__decorate([e.property()],b.SliceVisualization.prototype,"ready",null);d.__decorate([e.property()],b.SliceVisualization.prototype,"showGrid",void 0);d.__decorate([e.property()],b.SliceVisualization.prototype,"preview",void 0);b.SliceVisualization=d.__decorate([x.subclass("esri.views.3d.analysis.Slice.SliceVisualization")],
b.SliceVisualization);Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
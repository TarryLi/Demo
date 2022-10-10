// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/Handles ../../../../../core/handleUtils ../../../../../core/has ../../../../../core/maybe ../../../../../core/reactiveUtils ../ManipulatorType ./config ./Manipulation ./MoveXYAxisManipulation ./MoveXYDiscManipulation ./MoveZManipulation".split(" "),function(h,t,x,u,y,v,z,q,w,r,A,B,C){r=function(l){function n(a){var b=l.call(this)||this;b._handles=new x;b._angleDeferred=null;b._interactive=!0;const {tool:d,view:c,snapToScene:e,
radius:f}=a;b._view=c;b.xyManipulation=new B.MoveXYDiscManipulation({tool:d,view:c,snapToScene:e,radius:f});b.xyAxisManipulation=new A.MoveXYAxisManipulation({tool:d,view:c,radius:f});b.zManipulation=new C.MoveZManipulation({tool:d,view:c,radius:f});b.xyManipulation.available=a.xyAvailable;b.xyAxisManipulation.available=a.xyAxisAvailable;b.zManipulation.available=a.zAvailable;b._autoHideXYAxis();b.forEachManipulator(g=>{b._handles.add(g.events.on("grab-changed",()=>b._updateManipulatorInteractivity()))});
return b}t._inheritsLoose(n,l);var m=n.prototype;m.destroy=function(){this._handles.destroy();this.xyManipulation.destroy();this.xyAxisManipulation.destroy();this.zManipulation.destroy()};m.createGraphicDragPipeline=function(a,b,d){return u.handlesGroup([this.xyManipulation.createGraphicDragPipeline((c,e,f,g,k)=>a(h.ManipulationType.XY,c,e,f,g,k),b,d),this.xyAxisManipulation.createGraphicDragPipeline((c,e,f,g,k)=>a(h.ManipulationType.XY_AXIS,c,e,f,g,k),b,d),this.zManipulation.createGraphicDragPipeline((c,
e,f,g,k)=>a(h.ManipulationType.Z,c,e,f,g,k),b,d)])};m.createDragPipeline=function(a,b,d,c){return u.handlesGroup([this.xyManipulation.createDragPipeline((e,f,g,k,p)=>a(h.ManipulationType.XY,e,f,g,k,p),b,d,c),this.xyAxisManipulation.createDragPipeline((e,f,g,k,p)=>a(h.ManipulationType.XY_AXIS,e,f,g,k,p),b,d,c),this.zManipulation.createDragPipeline((e,f,g,k,p)=>a(h.ManipulationType.Z,e,f,g,k,p),d)])};m.forEachManipulator=function(a){this.xyManipulation.forEachManipulator(b=>a(b,q.ManipulatorType.TRANSLATE_XY));
this.xyAxisManipulation.forEachManipulator(b=>a(b,q.ManipulatorType.TRANSLATE_XY));this.zManipulation.forEachManipulator(b=>a(b,q.ManipulatorType.TRANSLATE_Z))};m._autoHideXYAxis=function(){const a=this.xyAxisManipulation;var b=this.xyManipulation;if(!y("esri-mobile")){var d=[];b.forEachManipulator(c=>d.push(c));a.forEachManipulator(c=>d.push(c));b=()=>{const c=[];this.xyAxisVisible?v.isSome(this._angleDeferred)&&(this.angle=this._angleDeferred()):a.forEachManipulator(e=>c.push(e.disableDisplay()));
this._handles.remove("disable-xy-axis-display");this._handles.add(c,"disable-xy-axis-display")};for(const c of d)this._handles.add(c.events.on("focus-changed",b));this._view.inputManager&&this._handles.add(z.when(()=>{var c;return null==(c=this._view.inputManager)?void 0:c.latestPointerType},b));b()}};m._updateManipulatorInteractivity=function(){const a=this.grabbing;this.forEachManipulator(b=>{b.interactive=!a&&this._interactive||b.grabbing})};n.radiusForSymbol=function(a){return(a=v.isSome(a)&&
"point-3d"===a.type&&a.symbolLayers)&&0<a.length&&a.some(b=>"icon"===b.type)?w.DISC_RADIUS_SMALL:w.DISC_RADIUS};t._createClass(n,[{key:"snapToScene",set:function(a){this.xyManipulation.snapToScene=a}},{key:"angle",set:function(a){this._angleDeferred=null;this.xyAxisManipulation.angle=a}},{key:"angleDeferred",set:function(a){this.xyAxisVisible?this.angle=a():this._angleDeferred=a}},{key:"interactive",set:function(a){this._interactive!==a&&(this._interactive=a,this._updateManipulatorInteractivity())}},
{key:"radius",set:function(a){this.xyAxisManipulation.radius=a;this.xyManipulation.radius=a;this.zManipulation.radius=a}},{key:"displayScale",set:function(a){this.xyManipulation.displayScale=a;this.xyAxisManipulation.displayScale=a}},{key:"xyAxisVisible",get:function(){const a=this.xyManipulation.someManipulator(b=>b.focused)||this.xyAxisManipulation.someManipulator(b=>b.focused);return this._view.inputManager&&"touch"===this._view.inputManager.latestPointerType||a}}]);return n}(r.Manipulation);h.ManipulationType=
void 0;(function(l){l[l.XY=0]="XY";l[l.XY_AXIS=1]="XY_AXIS";l[l.Z=2]="Z"})(h.ManipulationType||(h.ManipulationType={}));h.MoveManipulation=r;Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../Graphic ../../intl ../../symbols ../../core/Handles ../../core/maybe ../../core/reactiveUtils ../../core/unitFormatUtils ../../core/unitUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../geometry/geometryEngine ../../geometry/projection ../../geometry/support/geodesicUtils ../../layers/GraphicsLayer ../../views/ViewingMode ../../views/draw/Draw ../../views/interactive/dragEventPipeline ../../views/interactive/GraphicManipulator ../../views/interactive/InteractiveToolBase ../../intl/messages ../../intl/locale ../../geometry/Point ../../symbols/SimpleFillSymbol ../../symbols/SimpleLineSymbol ../../symbols/TextSymbol ../../symbols/Font ../../symbols/SimpleMarkerSymbol ../../geometry/Polyline ../../geometry/SpatialReference ../../geometry/Polygon".split(" "),
function(g,C,p,ea,x,fa,ha,P,y,E,u,F,q,ia,ja,ka,Q,k,l,h,G,R,S,D,T,U,H,V,I,W,X,Y,Z,J,K,z,aa){function ba(b,d,f,a){const e=new J({style:"circle",color:a.handleColor,size:a.handleWidth,outline:{type:"simple-line",width:0}});a=new J({style:"circle",color:a.handleColor,size:1.5*a.handleWidth,outline:{type:"simple-line",width:0}});b=new x({geometry:b,symbol:e});return new T.GraphicManipulator({view:d,layer:f,graphic:b,focusedSymbol:a})}function L(b,d,f){if(2===b.length)return b=new K({paths:b,spatialReference:d}),
d.isGeographic?h.isSupported(d)?d=h.geodesicDensify(b,1E5):(b=l.project(b,z.WGS84),b=h.geodesicDensify(b,1E5),d=l.project(b,d)):d.isWebMercator?d=k.geodesicDensify(b,1E5,"meters"):k.planarLength(b,"meters")>=f?(b=l.project(b,z.WGS84),b=h.geodesicDensify(b,1E5),d=l.project(b,d)):d=b,{measurement:null,fillGeometry:null,outlineGeometry:d};b.push(b[0]);var a=new K({paths:[b],spatialReference:d}),e=new aa({rings:[b],spatialReference:d});let c=b=null;if(d.isGeographic)if(h.isSupported(d)){b=h.geodesicDensify(a,
1E5);c=h.geodesicDensify(e,1E5);c=k.simplify(c);if(!c)return null;e=h.geodesicLengths([a],"meters")[0];a=h.geodesicAreas([c],"square-meters")[0]}else{b=z.WGS84;a=l.project(a,b);e=l.project(e,b);b=h.geodesicDensify(a,1E5);c=h.geodesicDensify(e,1E5);c=k.simplify(c);if(!c)return null;e=h.geodesicLengths([a],"meters")[0];a=h.geodesicAreas([c],"square-meters")[0];b=l.project(b,d);c=l.project(c,d)}else if(d.isWebMercator){b=k.geodesicDensify(a,1E5,"meters");c=k.geodesicDensify(e,1E5,"meters");c=k.simplify(c);
if(!c)return null;e=k.geodesicLength(a,"meters");a=k.geodesicArea(c,"square-meters")}else{const m=k.planarLength(a,"meters");if(m>=f){b=z.WGS84;a=l.project(a,b);e=l.project(e,b);b=h.geodesicDensify(a,1E5);c=h.geodesicDensify(e,1E5);c=k.simplify(c);if(!c)return null;e=h.geodesicLengths([a],"meters")[0];a=h.geodesicAreas([c],"square-meters")[0];b=l.project(b,d);c=l.project(c,d)}else{b=a;c=k.simplify(e);if(!c)return null;e=m;a=k.planarArea(c,"square-meters")}}return{measurement:{geometry:c,area:a,perimeter:e},
fillGeometry:c,outlineGeometry:b}}function M(b){if(!b)return!1;const {isGeographic:d,isWebMercator:f,isWGS84:a}=b;return d&&!a&&!h.isSupported(b)||!d&&!f}function N(b,d,f){if(!d||!b)return null;const a={area:null,perimeter:null},{area:e,perimeter:c}=d;switch(f){case "metric":a.area=u.formatMetricArea(b,e,"square-meters");break;case "imperial":a.area=u.formatImperialArea(b,e,"square-meters");break;default:d=F.convertUnit(e,"square-meters",f),a.area=u.formatDecimal(b,d,f)}if(f=ca(f))switch(f){case "metric":a.perimeter=
u.formatMetricLength(b,c,"meters");break;case "imperial":a.perimeter=u.formatImperialLength(b,c,"meters");break;default:d=F.convertUnit(c,"meters",f),a.perimeter=u.formatDecimal(b,d,f)}else a.perimeter="";return a}function ca(b){switch(b){case "metric":return"metric";case "imperial":return"imperial";case "square-inches":return"inches";case "square-feet":return"feet";case "square-yards":return"yards";case "square-miles":return"miles";case "square-us-feet":return"us-feet";case "square-meters":return"meters";
case "square-kilometers":return"kilometers";case "acres":return"imperial";case "ares":case "hectares":return"metric";case "square-millimeters":return"millimeters";case "square-centimeters":return"centimeters";case "square-decimeters":return"decimeters";default:return null}}g.AreaMeasurement2DTool=function(b){function d(a){a=b.call(this,a)||this;a._drawActive=!1;a._handles=new P;a._measurementLayer=new G({internal:!0,listMode:"hide",visible:!1});a._manipulatorLayer=new G({internal:!0,listMode:"hide",
visible:!1});a._vertices=[];a.geodesicDistanceThreshold=1E5;a.measurement=null;a.measurementLabel=null;return a}C._inheritsLoose(d,b);var f=d.prototype;f.initialize=function(){var a=this;H.fetchMessageBundle("esri/core/t9n/Units").then(c=>{this.messages=c});this._handles.add(V.onLocaleChange(C._asyncToGenerator(function*(){a.messages=yield H.fetchMessageBundle("esri/core/t9n/Units")})));const e=this.view;this._draw=new S({view:e});e.map.addMany([this._measurementLayer,this._manipulatorLayer]);e.focus();
this._handles.add([E.watch(()=>[this.unit,this.geodesicDistanceThreshold,this.palette,this.messages],()=>{0<this._vertices.length&&this._updateGraphics()},E.initial)])};f.destroy=function(){const {map:a}=this.view;this._draw.view=null;this._draw=y.destroyMaybe(this._draw);a.removeMany([this._measurementLayer,this._manipulatorLayer]);this._handles.removeAll();this._measurementLayer.removeAll();this._manipulatorLayer.removeAll();this._set("measurement",null);this._set("measurementLabel",null);this._handles=
y.destroyMaybe(this._handles);this._measurementLayer=y.destroyMaybe(this._measurementLayer);this._manipulatorLayer=y.destroyMaybe(this._manipulatorLayer)};f.onActivate=function(){this._drawActive||0!==this._vertices.length||this._startSketch()};f.onShow=function(){this._measurementLayer.visible=!0;this._manipulatorLayer.visible=!0};f.onHide=function(){this._measurementLayer.visible=!1;this._manipulatorLayer.visible=!1};f.reset=function(){this._vertices=[];this._measurementLayer.removeAll();this._set("measurement",
null);this._set("measurementLabel",null);this._draw.reset();this._drawActive=!1;this._updateSketch([])};f._startSketch=function(){this._drawActive=!0;const a=this._draw.create("polyline",{mode:"click"});a.on("vertex-add vertex-update vertex-remove cursor-update undo redo".split(" "),e=>this._updateSketch(e.vertices));a.on("draw-complete",()=>this._stopSketch())};f._stopSketch=function(){3>this._vertices.length?(this.reset(),this._startSketch()):(this.manipulators.forEach(a=>{a.manipulator.interactive=
!0}),this._drawActive=!1,this.finishToolCreation())};f._updateSketch=function(a){if(!M(this.view.spatialReference)||l.isLoaded())if(2>a.length)this._vertices=[],this.manipulators.removeAll(),this._measurementLayer.removeAll();else{for(var e=this.view.spatialReference;this._vertices.length>a.length;){var {manipulatorId:c}=this._vertices.pop();this.manipulators.remove(c)}for(let n=this._vertices.length;n<a.length;n++){const [v,A]=a[n];c=new I({x:v,y:A,spatialReference:e});c=ba(c,this.view,this._manipulatorLayer,
this.palette);var m=this.manipulators.add(c);D.createManipulatorDragEventPipeline(c,(B,da)=>{da.next(D.screenToMap(this.view)).next(D.dragGraphic(B.graphic,R.ViewingMode.Local)).next(()=>{const O=B.graphic.geometry;this._vertices[n].coord=[O.x,O.y];this._updateGraphics()})});this._vertices.push({manipulatorId:m,coord:[v,A]})}c=this._vertices.length-1;m=this._vertices[c];var [r,t]=a[c];if(m.coord[0]!==r||m.coord[1]!==t)m.coord=[r,t],a=new I({x:r,y:t,spatialReference:e}),this.manipulators.findById(m.manipulatorId).graphic.geometry=
a;var w=this._drawActive?this._vertices[c].manipulatorId:null;this.manipulators.forEach(n=>{n.manipulator.interactive=null==w||n.id!==w});this._updateGraphics()}};f._updateGraphics=function(){var a=this._vertices.map(v=>v.coord);if(a=L(a,this.view.spatialReference,this.geodesicDistanceThreshold)){var {measurement:e,fillGeometry:c,outlineGeometry:m}=a;this._set("measurement",e);a=e?N(this.messages,e,this.unit):null;this._set("measurementLabel",a);if(c||m){var {graphics:r}=this._measurementLayer;if(3===
r.length){var t=r.getItemAt(0);var w=r.getItemAt(1);var n=r.getItemAt(2)}else{const {fillColor:v,pathColor:A,pathWidth:B}=this.palette;t=new x({symbol:new W({color:v,outline:null})});w=new x({symbol:new X({color:A,width:B})});n=new x({symbol:new Y({color:[255,255,255,1],font:new Z({size:14,family:"sans-serif"}),haloColor:[0,0,0,.5],haloSize:2})});r.removeAll();r.addMany([t,w,n])}t.geometry=c;w.geometry=m;n.geometry=null==c?void 0:c.centroid;n.symbol.text=null==a?void 0:a.area}}};C._createClass(d,
[{key:"cursor",get:function(){return this._drawActive?"crosshair":null}},{key:"editable",set:function(a){this._set("editable",a);a||this._draw.reset()}}]);return d}(U.InteractiveToolBase);p.__decorate([q.property()],g.AreaMeasurement2DTool.prototype,"_drawActive",void 0);p.__decorate([q.property({readOnly:!0})],g.AreaMeasurement2DTool.prototype,"cursor",null);p.__decorate([q.property({value:!0})],g.AreaMeasurement2DTool.prototype,"editable",null);p.__decorate([q.property({type:Number})],g.AreaMeasurement2DTool.prototype,
"geodesicDistanceThreshold",void 0);p.__decorate([q.property({readOnly:!0})],g.AreaMeasurement2DTool.prototype,"measurement",void 0);p.__decorate([q.property({readOnly:!0})],g.AreaMeasurement2DTool.prototype,"measurementLabel",void 0);p.__decorate([q.property()],g.AreaMeasurement2DTool.prototype,"messages",void 0);p.__decorate([q.property()],g.AreaMeasurement2DTool.prototype,"palette",void 0);p.__decorate([q.property()],g.AreaMeasurement2DTool.prototype,"unit",void 0);p.__decorate([q.property({constructOnly:!0})],
g.AreaMeasurement2DTool.prototype,"view",void 0);g.AreaMeasurement2DTool=p.__decorate([Q.subclass("esri.widgets.AreaMeasurement2D.AreaMeasurement2DTool")],g.AreaMeasurement2DTool);g.createAreaMeasurementInfo2D=L;g.createAreaMeasurementLabel=N;g.isProjectionEngineRequired=M;g.isSupported=function(b){return null!=b};Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
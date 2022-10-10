// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../Graphic ../../intl ../../symbols ../../core/Handles ../../core/maybe ../../core/reactiveUtils ../../core/unitFormatUtils ../../core/unitUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../geometry/geometryEngine ../../geometry/projection ../../geometry/support/geodesicUtils ../../layers/GraphicsLayer ../../views/ViewingMode ../../views/draw/Draw ../../views/interactive/dragEventPipeline ../../views/interactive/GraphicManipulator ../../views/interactive/InteractiveToolBase ../../intl/messages ../../intl/locale ../../geometry/Point ../../symbols/CIMSymbol ../../symbols/TextSymbol ../../symbols/Font ../../symbols/SimpleMarkerSymbol ../../geometry/Polyline ../../geometry/SpatialReference".split(" "),
function(e,x,h,aa,y,ba,ca,M,u,C,z,N,l,da,ea,fa,O,A,v,n,D,P,Q,B,R,S,E,T,F,U,V,W,G,X,H){function Y(c,d,b,a){const g=new G({style:"circle",color:a.handleColor,size:a.handleWidth,outline:{type:"simple-line",width:0}});a=new G({style:"circle",color:a.handleColor,size:1.5*a.handleWidth,outline:{type:"simple-line",width:0}});c=new y({geometry:c,symbol:g});return new R.GraphicManipulator({view:d,layer:b,graphic:c,focusedSymbol:a})}function I(c,d,b){c=new X({paths:[c],spatialReference:d});if(d.isGeographic)if(n.isSupported(d))b=
n.geodesicLengths([c],"meters")[0],d=n.geodesicDensify(c,1E5);else{b=v.project(c,H.WGS84);var a=n.geodesicDensify(b,1E5);b=n.geodesicLengths([b],"meters")[0];d=v.project(a,d)}else d.isWebMercator?(b=A.geodesicLength(c,"meters"),d=A.geodesicDensify(c,1E5,"meters")):(a=A.planarLength(c,"meters"),a>=b?(b=v.project(c,H.WGS84),a=n.geodesicDensify(b,1E5),b=n.geodesicLengths([b],"meters")[0],d=v.project(a,d)):(b=a,d=c));return{measurement:{geometry:d,length:b},original:c,drawing:d}}function J(c,d,b){if(!d||
!c)return null;switch(b){case "metric":return z.formatMetricLength(c,d.length,"meters");case "imperial":return z.formatImperialLength(c,d.length,"meters");default:return z.formatDecimal(c,N.convertUnit(d.length,"meters",b),b)}}e.DistanceMeasurement2DTool=function(c){function d(a){a=c.call(this,a)||this;a._drawActive=!1;a._handles=new M;a._measurementLayer=new D({internal:!0,listMode:"hide",visible:!1});a._manipulatorLayer=new D({internal:!0,listMode:"hide",visible:!1});a._vertices=[];a.geodesicDistanceThreshold=
1E5;a.measurement=null;a.measurementLabel=null;return a}x._inheritsLoose(d,c);var b=d.prototype;b.initialize=function(){var a=this;E.fetchMessageBundle("esri/core/t9n/Units").then(f=>{this.messages=f});this._handles.add(T.onLocaleChange(x._asyncToGenerator(function*(){a.messages=yield E.fetchMessageBundle("esri/core/t9n/Units")})));const g=this.view;this._draw=new Q({view:g});g.map.addMany([this._measurementLayer,this._manipulatorLayer]);g.focus();this._handles.add([C.watch(()=>[this.unit,this.geodesicDistanceThreshold,
this.palette,this.messages],()=>{0<this._vertices.length&&this._updatePolylines()},C.initial)])};b.destroy=function(){const {map:a}=this.view;this._draw.view=null;this._draw=u.destroyMaybe(this._draw);a.removeMany([this._measurementLayer,this._manipulatorLayer]);this._handles.removeAll();this._measurementLayer.removeAll();this._manipulatorLayer.removeAll();this._set("measurement",null);this._set("measurementLabel",null);this._handles=u.destroyMaybe(this._handles);this._measurementLayer=u.destroyMaybe(this._measurementLayer);
this._manipulatorLayer=u.destroyMaybe(this._manipulatorLayer)};b.onActivate=function(){this._drawActive||0!==this._vertices.length||this._startSketch()};b.onShow=function(){this._measurementLayer.visible=!0;this._manipulatorLayer.visible=!0};b.onHide=function(){this._measurementLayer.visible=!1;this._manipulatorLayer.visible=!1};b.reset=function(){this._vertices=[];this._measurementLayer.removeAll();this._set("measurement",null);this._set("measurementLabel",null);this._draw.reset();this._drawActive=
!1;this._updateSketch([])};b._startSketch=function(){this._drawActive=!0;const a=this._draw.create("polyline",{mode:"click"});a.on("vertex-add vertex-update vertex-remove cursor-update undo redo".split(" "),g=>this._updateSketch(g.vertices));a.on("draw-complete",()=>{this._stopSketch()})};b._stopSketch=function(){this.manipulators.forEach(a=>{a.manipulator.interactive=!0});this._drawActive=!1;this.finishToolCreation()};b._updateSketch=function(a){if(2>a.length)this._vertices=[],this.manipulators.removeAll(),
this._measurementLayer.removeAll();else{for(var {spatialReference:g}=this.view;this._vertices.length>a.length;){var {manipulatorId:f}=this._vertices.pop();this.manipulators.remove(f)}for(let k=this._vertices.length;k<a.length;k++){const [w,t]=a[k];f=new F({x:w,y:t,spatialReference:g});f=Y(f,this.view,this._manipulatorLayer,this.palette);var p=this.manipulators.add(f);B.createManipulatorDragEventPipeline(f,(K,Z)=>{Z.next(B.screenToMap(this.view)).next(B.dragGraphic(K.graphic,P.ViewingMode.Local)).next(()=>
{const L=K.graphic.geometry;this._vertices[k].coord=[L.x,L.y];this._updatePolylines()})});this._vertices.push({manipulatorId:p,coord:[w,t]})}f=this._vertices.length-1;p=this._vertices[f];var [q,m]=a[f];if(p.coord[0]!==q||p.coord[1]!==m)p.coord=[q,m],a=new F({x:q,y:m,spatialReference:g}),this.manipulators.findById(p.manipulatorId).graphic.geometry=a;var r=this._drawActive?this._vertices[f].manipulatorId:null;this.manipulators.forEach(k=>{k.manipulator.interactive=null==r||k.id!==r});this._updatePolylines()}};
b._updatePolylines=function(){var a=this._vertices.map(k=>k.coord);const {measurement:g,drawing:f,original:p}=I(a,this.view.spatialReference,this.geodesicDistanceThreshold);this._set("measurement",g);a=J(this.messages,g,this.unit);this._set("measurementLabel",a);let q,m;const {graphics:r}=this._measurementLayer;if(2===r.length)q=r.getItemAt(0),m=r.getItemAt(1);else{const {pathPrimaryColor:k,pathSecondaryColor:w,pathWidth:t}=this.palette;q=new y({symbol:new U({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",
symbolLayers:[{type:"CIMSolidStroke",effects:[{type:"CIMGeometricEffectDashes",dashTemplate:[14,12],lineDashEnding:"FullGap",controlPointEnding:"NoConstraint"}],enable:!0,capStyle:"Butt",joinStyle:"Round",width:t-1.5,color:w},{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",width:t,color:k}]}}})});m=new y({symbol:new V({color:[255,255,255,1],haloColor:[0,0,0,.5],haloSize:2,font:new W({size:14,family:"sans-serif"})})});r.removeAll();r.addMany([q,m])}q.geometry=f;m.geometry=p.extent.center;
m.symbol.text=a};x._createClass(d,[{key:"cursor",get:function(){return this._drawActive?"crosshair":null}},{key:"editable",set:function(a){this._set("editable",a);a||this._draw.reset()}}]);return d}(S.InteractiveToolBase);h.__decorate([l.property()],e.DistanceMeasurement2DTool.prototype,"_drawActive",void 0);h.__decorate([l.property({readOnly:!0})],e.DistanceMeasurement2DTool.prototype,"cursor",null);h.__decorate([l.property({value:!0})],e.DistanceMeasurement2DTool.prototype,"editable",null);h.__decorate([l.property({type:Number})],
e.DistanceMeasurement2DTool.prototype,"geodesicDistanceThreshold",void 0);h.__decorate([l.property({readOnly:!0})],e.DistanceMeasurement2DTool.prototype,"measurement",void 0);h.__decorate([l.property({readOnly:!0})],e.DistanceMeasurement2DTool.prototype,"measurementLabel",void 0);h.__decorate([l.property()],e.DistanceMeasurement2DTool.prototype,"messages",void 0);h.__decorate([l.property()],e.DistanceMeasurement2DTool.prototype,"palette",void 0);h.__decorate([l.property()],e.DistanceMeasurement2DTool.prototype,
"unit",void 0);h.__decorate([l.property({constructOnly:!0})],e.DistanceMeasurement2DTool.prototype,"view",void 0);e.DistanceMeasurement2DTool=h.__decorate([O.subclass("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DTool")],e.DistanceMeasurement2DTool);e.createDistanceMeasurementInfo2D=I;e.createDistanceMeasurementLabel=J;e.isProjectionEngineRequired=function(c){if(!c)return!1;const {isGeographic:d,isWebMercator:b,isWGS84:a}=c;return d&&!a&&!n.isSupported(c)||!d&&!b};e.isSupported=function(c){return null!=
c};Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
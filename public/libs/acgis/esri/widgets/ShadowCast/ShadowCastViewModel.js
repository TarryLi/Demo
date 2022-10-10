// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Color ../../core/Accessor ../../core/has ../../core/Handles ../../core/maybe ../../core/promiseUtils ../../core/reactiveUtils ../../core/screenUtils ../../core/timeUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../chunks/vec3f64 ../../views/3d/support/earthUtils ../../views/3d/support/sunUtils ../../views/3d/webgl-engine/shaders/ShadowCastVisualizeTechniqueConfiguration ./DiscreteOptions ./DurationMode ./DurationOptions ./ShadowCastState ./ShadowTooltipViewModel ./ShadowVisualizationType ./ThresholdOptions ../support/traversalUtils".split(" "),
function(u,d,w,c,S,H,g,x,l,B,r,e,T,U,I,J,K,L,y,C,M,D,z,N,q,E,O){function v({renderView:m,parameters:n}){g.isSome(m)&&g.isSome(n)&&m.setRenderParameters({shadowCastOptions:n})}function A(m){if(m.suspended)return!1;switch(m.type){case "line-of-sight-3d":case "building-scene-3d":case "csv-3d":case "elevation-3d":case "feature-3d":case "geojson-3d":case "graphics-3d":case "integrated-mesh-3d":case "ogc-feature-3d":case "route-3d":case "scene-layer-3d":case "scene-layer-graphics-3d":case "stream-3d":case "wms-3d":return!0;
case "base-dynamic-3d":case "imagery-3d":case "imagery-tile-3d":case "map-image-3d":case "point-cloud-3d":case "tile-3d":case "vector-tile-3d":case "voxel-3d":case "wfs-3d":case "wmts-3d":case "media-3d":return!1;case "group":return m.layerViews.toArray().some(n=>A(n));default:return!1}}const F=[],P=J.create(),G=[],Q=r.convertTime(1,"hours","milliseconds");c=function(m){function n(a){var b=m.call(this,a)||this;b.view=null;b.tooltip=new N.ShadowTooltipViewModel({getDuration:(f,k)=>b.getDuration(f,
k)});b.startTimeOfDay=r.convertTime(10,"hours","milliseconds");b.endTimeOfDay=r.convertTime(16,"hours","milliseconds");b.visualizationType=q.ShadowVisualizationType.Threshold;b.thresholdOptions=new E;b.durationOptions=new D;b.discreteOptions=new C;b._running=!0;b._handles=new H;b._stopPreviewingTask=null;b._forcePreview=null;b._autoRestoreForcePreviewEnabled=!0;b._utcOffset=null;b.date=new Date;return b}u._inheritsLoose(n,m);var t=n.prototype;t.initialize=function(){var a=this;this._handles.add([l.watch(()=>
({view:this.view,tooltipEnabled:this._tooltipEnabled}),({view:b,tooltipEnabled:f})=>{this.tooltip.view=b;this.tooltip.enabled=f},l.syncAndInitial),l.watch(()=>this._forcePreviewDependencies,()=>{g.abortMaybe(this._stopPreviewingTask);this._forcePreview=!0;this._autoRestoreForcePreviewEnabled&&(this._stopPreviewingTask=x.createTask(function(){var b=u._asyncToGenerator(function*(f){yield x.after(500,f);x.throwIfAborted(f);a._forcePreview=!1});return function(f){return b.apply(this,arguments)}}()))},
l.syncAndInitial),l.watch(()=>({renderView:this.renderView,parameters:this._visualizationParameters}),v,l.syncAndInitial),l.watch(()=>({renderView:this.renderView,parameters:{lightDirections:this._lightDirections}}),v,l.syncAndInitial),l.watch(()=>({renderView:this.renderView,parameters:{enabled:this._running}}),v,l.syncAndInitial),l.watch(()=>({renderView:this.renderView,parameters:{previewing:this._previewing}}),v,l.syncAndInitial)])};t.destroy=function(){this.stop();this._handles=g.destroyMaybe(this._handles);
g.destroyMaybe(this.tooltip)};t.start=function(){this._running=!0};t.stop=function(){this._running=!1};t.setRunning=function(a){this._running=a};t.getDuration=function(){var a=u._asyncToGenerator(function*(b,f){const {view:k,renderView:p}=this;if(g.isNone(k)||g.isNone(p))return 0;b=k.state.camera.screenToRender(B.createScreenPointArray(b.x,b.y),B.createRenderScreenPointArray());b=p.readAccumulatedShadow(b);f=this._sampleCount;return 0===f?0:this._duration/f*f*b});return function(b,f){return a.apply(this,
arguments)}}();u._createClass(n,[{key:"state",get:function(){return g.isSome(this.view)&&this.view.ready&&g.isSome(this._referencePosition)?z.ShadowCastState.Ready:z.ShadowCastState.Disabled}},{key:"date",set:function(a){a=new Date(a);a.setHours(0,0,0,0);this._set("date",a)}},{key:"utcOffset",get:function(){return g.unwrapOr(this._utcOffset,this._utcOffsetAuto)},set:function(a){this._utcOffset=a}},{key:"testData",get:function(){return{setAutoRestoreForcedPreviewEnabled:a=>{this._autoRestoreForcePreviewEnabled=
a},setForcedPreview:a=>{this._forcePreview=a},isPreviewing:()=>this._previewing}}},{key:"_previewing",get:function(){const {view:a}=this;return g.isNone(a)||g.isNone(a.allLayerViews)?!0:this._forcePreview||!a.stationary||a.allLayerViews.some(b=>A(b)&&b.updating)}},{key:"_utcOffsetAuto",get:function(){return g.mapOr(this._referencePosition,0,a=>K.longitudeToTimezone(a[0],!1))}},{key:"_dateUTCOffset",get:function(){let a=this.date;a=r.offsetDateUTC(a,-a.getTimezoneOffset(),"minutes");return a=r.offsetDateUTC(a,
-this.utcOffset,"hours")}},{key:"_startDateTimeUTC",get:function(){return r.offsetDateUTC(this._dateUTCOffset,this.startTimeOfDay)}},{key:"_endDateTimeUTC",get:function(){return r.offsetDateUTC(this._dateUTCOffset,this.endTimeOfDay)}},{key:"_referencePosition",get:function(){return g.applySome(this.view,a=>g.applySome(a.environmentManager,b=>b.referencePositionWGS84Comparable))}},{key:"_interval",get:function(){const a=0<this._duration?Math.floor(this._duration/255):255,b=this.discreteOptions.interval;
switch(this.visualizationType){case q.ShadowVisualizationType.Threshold:case q.ShadowVisualizationType.Duration:return a;case q.ShadowVisualizationType.Discrete:return 0<b?b:a}}},{key:"_sampleCount",get:function(){return this._lightDirections.length}},{key:"_duration",get:function(){return this.endTimeOfDay-this.startTimeOfDay}},{key:"_lightDirections",get:function(){var {view:a}=this;if(g.isNone(a))return F;var b="global"===a.viewingMode?P:this._referencePosition;if(g.isNone(b))return F;a=L.computeDirectionsOverTime(this._startDateTimeUTC,
this._endDateTimeUTC,this._interval,b,a.state.viewingMode);b=a.length;G.length=0;const f=O.breadthFirstBinaryPartitioning(0,b,G),k=Array(b);for(let p=0;p<b;++p)k[p]=a[f[p]];return k}},{key:"_tooltipEnabled",get:function(){return this.state===z.ShadowCastState.Ready&&this.visualizationType!==q.ShadowVisualizationType.Discrete&&this._running&&!this._previewing}},{key:"_visualizationParameters",get:function(){if(!this._running)return null;switch(this.visualizationType){case q.ShadowVisualizationType.Threshold:return this._thresholdVisualizationParameters;
case q.ShadowVisualizationType.Duration:return this._durationVisualizationParameters;case q.ShadowVisualizationType.Discrete:return this._discreteVisualizationParameters}}},{key:"_thresholdVisualizationParameters",get:function(){const {value:a,color:b}=this.thresholdOptions,f=this._duration;return{visualization:y.ShadowCastVisualization.Threshold,color:w.toUnitRGBA(b),threshold:0<f?a/this._duration:0}}},{key:"_durationVisualizationParameters",get:function(){const {color:a,mode:b}=this.durationOptions;
var f=this._duration;f=0<f&&b===M.DurationMode.Hourly?Q/f:0;return{color:w.toUnitRGBA(a),visualization:y.ShadowCastVisualization.Gradient,bandsEnabled:0<f,bandSize:f}}},{key:"_discreteVisualizationParameters",get:function(){return{color:w.toUnitRGBA(this.discreteOptions.color),visualization:y.ShadowCastVisualization.Gradient,bandsEnabled:!1,bandSize:0}}},{key:"_forcePreviewDependencies",get:function(){var {view:a}=this;if(g.isNone(a))return null;const b=a.slicePlane;var f=a.allLayerViews.toArray().filter(A),
k=f.map(h=>h.layer).filter(g.isSome);a=f.map(h=>h.visible);const p=k.map(h=>h.visible),R=k.map(h=>h.opacity);k=k.filter(h=>"definitionExpression"in h).map(h=>h.definitionExpression);f=f.filter(h=>"filter"in h).map(h=>h.filter);return{slicePlane:b,startDateUTC:this._startDateTimeUTC,endDateUTC:this._endDateTimeUTC,layerViewVisibilities:a,layerVisibilities:p,layerOpacities:R,filters:f,definitionExpressions:k}}},{key:"renderView",get:function(){var {view:a}=this;if(g.isNone(a))return null;a=a._stage;
return g.isNone(a)?null:a.renderView}}]);return n}(c);d.__decorate([e.property()],c.prototype,"state",null);d.__decorate([e.property()],c.prototype,"view",void 0);d.__decorate([e.property()],c.prototype,"tooltip",void 0);d.__decorate([e.property({nonNullable:!0})],c.prototype,"date",null);d.__decorate([e.property({nonNullable:!0})],c.prototype,"utcOffset",null);d.__decorate([e.property({nonNullable:!0})],c.prototype,"startTimeOfDay",void 0);d.__decorate([e.property({nonNullable:!0})],c.prototype,
"endTimeOfDay",void 0);d.__decorate([e.property({nonNullable:!0})],c.prototype,"visualizationType",void 0);d.__decorate([e.property({type:E,nonNullable:!0})],c.prototype,"thresholdOptions",void 0);d.__decorate([e.property({type:D,nonNullable:!0})],c.prototype,"durationOptions",void 0);d.__decorate([e.property({type:C,nonNullable:!0})],c.prototype,"discreteOptions",void 0);d.__decorate([e.property()],c.prototype,"_running",void 0);d.__decorate([e.property()],c.prototype,"_handles",void 0);d.__decorate([e.property()],
c.prototype,"_stopPreviewingTask",void 0);d.__decorate([e.property()],c.prototype,"_forcePreview",void 0);d.__decorate([e.property()],c.prototype,"_autoRestoreForcePreviewEnabled",void 0);d.__decorate([e.property()],c.prototype,"_previewing",null);d.__decorate([e.property()],c.prototype,"_utcOffset",void 0);d.__decorate([e.property()],c.prototype,"_utcOffsetAuto",null);d.__decorate([e.property()],c.prototype,"_dateUTCOffset",null);d.__decorate([e.property()],c.prototype,"_startDateTimeUTC",null);
d.__decorate([e.property()],c.prototype,"_endDateTimeUTC",null);d.__decorate([e.property()],c.prototype,"_referencePosition",null);d.__decorate([e.property()],c.prototype,"_interval",null);d.__decorate([e.property()],c.prototype,"_sampleCount",null);d.__decorate([e.property()],c.prototype,"_duration",null);d.__decorate([e.property()],c.prototype,"_lightDirections",null);d.__decorate([e.property()],c.prototype,"_tooltipEnabled",null);d.__decorate([e.property()],c.prototype,"_visualizationParameters",
null);d.__decorate([e.property()],c.prototype,"_thresholdVisualizationParameters",null);d.__decorate([e.property()],c.prototype,"_durationVisualizationParameters",null);d.__decorate([e.property()],c.prototype,"_discreteVisualizationParameters",null);d.__decorate([e.property()],c.prototype,"_forcePreviewDependencies",null);d.__decorate([e.property()],c.prototype,"renderView",null);return c=d.__decorate([I.subclass("esri.widgets.ShadowCast.ShadowCastViewModel")],c)});
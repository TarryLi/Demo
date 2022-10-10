// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Error ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../layers/graphics/hydratedFeatures ../../../layers/graphics/controllers/FeatureTileController3D ./FeatureLikeLayerView3D ./LayerView3D ./support/FeatureTileFetcher3DLayerViewContext ../support/EventedSet ../support/updatingProperties ../webgl-engine/lib/basicInterfaces ../../layers/FeatureLayerView ../../layers/LayerView ../../layers/RefreshableLayerView".split(" "),
function(p,g,v,m,n,k,e,I,J,w,x,y,z,A,B,C,D,q,E,F,G){e=function(r){function t(a){a=r.call(this,a)||this;a._controllerTotal=0;a._processorTotal=0;a.suspendResumeExtentMode="data";return a}p._inheritsLoose(t,r);var h=t.prototype;h.initialize=function(){this.updatingHandles.add(()=>this.view.floors,()=>m.isSome(this.processor.filterVisibility)&&this.processor.filterVisibility.filterChanged());this.handles.add(n.watch(()=>this._updatingRequiredFieldsPromise,a=>this.updatingHandles.addPromise(a),n.syncAndInitial))};
h.destroy=function(){this.updatingHandles.removeAll();this.handles.removeAll();this.fetcherContext=m.destroyMaybe(this.fetcherContext)};h.setVisibility=function(a,b){var c;null==(c=this.processor)?void 0:c.setObjectIdVisibility(a,b)};h.createQuery=function(){return r.prototype.createQuery.call(this)};h.queryFeatures=function(a,b){const c=()=>r.prototype.queryFeatures.call(this,a,b);return"mesh"===this.layer.geometryType?this._queryFeaturesMesh(this._ensureQuery(a),c):c()};h.beforeSetController=function(a){a.maximumNumberOfFeatures=
this.maximumNumberOfFeatures};h.createController=function(){this.fetcherContext=new B.FeatureTileFetcher3DLayerViewContext({layerView:this,returnZ:this.hasZ,returnM:this.hasM});const a=new y.FeatureTileController3D({layerView:this,context:this.fetcherContext,graphics:new C.EventedSet,extent:this.clippingExtent});this.updatingHandles.add(()=>a.serviceDataExtent,b=>{this.processor&&(this.processor.dataExtent=b)},n.initial);this.handles.add(n.watch(()=>this.suspended,b=>{b?a.suspend():a.resume()},n.syncAndInitial));
this.updatingHandles.add(()=>{var b;return null==(b=this.processor)?void 0:b.displayFeatureLimit},b=>a.displayFeatureLimit=b,n.initial);this.handles.add(n.when(()=>!this.updating,()=>{this._processorTotal=this._controllerTotal=0}));return a};h.doRefresh=function(){var a=p._asyncToGenerator(function*(b){b&&!this.suspended&&this.controller&&this.controller.refetch();m.isSome(this.processor.filterVisibility)&&(this.processor.filterVisibility.dirty=!0)});return function(b){return a.apply(this,arguments)}}();
h.getUsedMemory=function(){var a,b,c,d;const f=null!=(a=null==(b=this.processor)?void 0:b.usedMemory)?a:0;a=null!=(c=null==(d=this.controller)?void 0:d.memoryForUnusedFeatures)?c:0;return f+a};h.getUnloadedMemory=function(){var a,b,c,d,f;const l=null!=(a=null==(b=this.processor)?void 0:b.unprocessedMemoryEstimate)?a:0;a=null!=(c=(null==(d=this.controller)?NaN:d.expectedFeatureDiff)*(null==(f=this.processor)?NaN:f.usedMemoryPerFeature))?c:0;return l+a};h.ignoresMemoryFactor=function(){var a;return null==
(a=this.controller)?void 0:a.hasMaximumNumberOfFeaturesOverride};h._queryFeaturesMesh=function(){var a=p._asyncToGenerator(function*(b,c){yield this._validateQueryFeaturesMesh(b);c=yield c();if(b&&b.outStatistics||m.isNone(this.graphics3DProcessor))return c;b=this.layer.objectIdField;const d=this.graphics3DProcessor.graphics3DGraphicsByObjectID,f=[];for(const l of c.features)if(l.geometry){const u=d.get(l.attributes[b]);u&&(l.geometry=x.hydrateGeometry(u.graphic.geometry),f.push(l))}else f.push(l);
c.features=f;return c});return function(b,c){return a.apply(this,arguments)}}();h._validateQueryFeaturesMesh=function(){var a=p._asyncToGenerator(function*(b){if(b){var c=f=>{throw new v("feature-layer-view:unsupported-query",`Queries on Mesh feature collection layers do not support '${f}'`);},d=["quantizationParameters","geometryPrecision","maxAllowableOffset"];for(const f of d)null!=b[f]&&c(f);"returnM"in b&&b.returnM&&c("returnM");"returnCentroid"in b&&b.returnCentroid&&c("returnCentroid");m.isSome(b.outSpatialReference)&&
!b.outSpatialReference.equals(this.view.spatialReference)&&c("outSpatialReference")}});return function(b){return a.apply(this,arguments)}}();p._createClass(t,[{key:"maximumNumberOfFeatures",get:function(){var a,b;return null!=(a=null==(b=this.controller)?void 0:b.maximumNumberOfFeatures)?a:this._get("maximumNumberOfFeatures")},set:function(a){this._set("maximumNumberOfFeatures",a);this.controller&&(this.controller.maximumNumberOfFeatures=a)}},{key:"maximumNumberOfFeaturesExceeded",get:function(){return this.controller?
!(this.suspended||!this.controller.maximumNumberOfFeaturesExceeded):!1}},{key:"updatingProgressValue",get:function(){var a,b;let c=0;if(null!=(a=this.controller)&&a.updating){a=this.controller.updatingRemaining;var d=Math.max(this.controller.updatingTotal,this._controllerTotal);0<d&&(c=(d-a)/d,this._controllerTotal=d)}a=0;null!=(b=this.processor)&&b.updating&&(b=this.processor.updatingRemaining,d=Math.max(b,this._processorTotal),0<d&&(a=(d-b)/d,this._processorTotal=d));return.5*(c+a)}},{key:"updatePolicy",
get:function(){if(!this.controller)return q.UpdatePolicy.ASYNC;switch(this.controller.mode){case "snapshot":{const a=H[this.layer.geometryType];return null==a||this.controller.serviceDataCount>a?q.UpdatePolicy.ASYNC:q.UpdatePolicy.SYNC}case "tiles":return q.UpdatePolicy.ASYNC}}},{key:"hasZ",get:function(){const a=this.layer,b=a.capabilities&&a.capabilities.data;return b&&b.supportsZ?"returnZ"in a&&null!=a.returnZ?a.returnZ:b.supportsZ:!1}},{key:"hasM",get:function(){const a=this.layer,b=a.capabilities&&
a.capabilities.data;return b&&b.supportsM?"returnM"in a&&null!=a.returnM?a.returnM:!1:!1}},{key:"performanceInfo",get:function(){var a,b,c,d,f;const l=null==(a=this.controller)?void 0:a.displayFeatureLimit;a=m.isSome(l)&&l.averageSymbolComplexity;a=m.isSome(a)?`f:${a.primitivesPerFeature},v:${a.primitivesPerCoordinate}`:"n/a";a={...this._getResourceInfo(),storedFeatures:0,totalVertices:0,partial:this.maximumNumberOfFeaturesExceeded,mode:null!=(b=null==(c=this.controller)?void 0:c.mode)?b:"n/a",symbolComplexity:a,
nodes:null!=(d=null==(f=this.controller)?void 0:f.tileDescriptors.length)?d:0};this.controller&&a.displayedNumberOfFeatures&&(b=this.controller.debug,a.storedFeatures=b.storedFeatures,a.totalVertices=b.totalVertices);return a}},{key:"test",get:function(){var a;return{updatePolicy:this.updatePolicy,controller:this.controller,loadedGraphics:null==(a=this.controller)?void 0:a.graphics}}}]);return t}(G(z.FeatureLikeLayerView3D(E(A.LayerView3D(F)))));g.__decorate([k.property()],e.prototype,"layer",void 0);
g.__decorate([k.property()],e.prototype,"controller",void 0);g.__decorate([k.property()],e.prototype,"_controllerTotal",void 0);g.__decorate([k.property()],e.prototype,"_processorTotal",void 0);g.__decorate([k.property()],e.prototype,"maximumNumberOfFeatures",null);g.__decorate([k.property()],e.prototype,"maximumNumberOfFeaturesExceeded",null);g.__decorate([k.property(D.updatingProgress)],e.prototype,"updatingProgress",void 0);g.__decorate([k.property({readOnly:!0})],e.prototype,"updatingProgressValue",
null);g.__decorate([k.property({readOnly:!0})],e.prototype,"updatePolicy",null);g.__decorate([k.property({readOnly:!0})],e.prototype,"hasZ",null);g.__decorate([k.property({readOnly:!0})],e.prototype,"hasM",null);g.__decorate([k.property()],e.prototype,"suspendResumeExtentMode",void 0);e=g.__decorate([w.subclass("esri.views.3d.layers.FeatureLayerViewBase3D")],e);const H={point:5E3,polygon:500,polyline:1E3};return e});
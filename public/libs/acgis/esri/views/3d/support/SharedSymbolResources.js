// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/arrayUtils ../../../core/Handles ../../../core/handleUtils ../../../core/reactiveUtils ../../../geometry/projectionEllipsoid ./index ./StreamTextureCollection ../webgl-engine/lib/screenSizePerspectiveUtils ../../webgl/enums".split(" "),function(h,n,p,q,k,f,r,t,u,l,m){let v=function(){function g(a){this.streamDataRequester=this.textures=null;this.graphicsOwners=[];this.cimSymbolRasterizer=this.screenSizePerspectiveHandles=null;
this.viewState=a.viewState;this.view=a.view;this.pointsOfInterest=a.pointsOfInterest;this.objectResourceCache=a.objectResourceCache;this.streamDataRequester=a.resourceController.createStreamDataRequester(t.ClientType.SYMBOLOGY);this.textures=new u.StreamTextureCollection(this.streamDataRequester,a.view._stage,{preMultiplyAlpha:!0,wrap:{s:m.TextureWrapMode.CLAMP_TO_EDGE,t:m.TextureWrapMode.CLAMP_TO_EDGE}},a.resourceController.scheduler);const b=r.getReferenceEllipsoid(this.view.spatialReference).radius;
this.screenSizePerspectiveSettings=l.getSettings(a.viewingMode,b);this.screenSizePerspectiveSettingsLabels=l.getLabelSettings(a.viewingMode,b)}var d=g.prototype;d.destroy=function(){this.textures.destroy();this.streamDataRequester=this.textures=null};d.addGraphicsOwner=function(a){if(!a)return k.makeHandle();this.graphicsOwners.push(a);const b=f.watch(()=>{var c;return null==(c=a.layer)?void 0:c.screenSizePerspectiveEnabled},()=>this._updateScreenSizePerspectiveEnabled());this._updateScreenSizePerspectiveEnabled();
return k.makeHandle(()=>{b.remove();p.removeUnordered(this.graphicsOwners,a);this._updateScreenSizePerspectiveEnabled()})};d._updateScreenSizePerspectiveEnabled=function(){var a=this.graphicsOwners.some(b=>{var c;return!0===(null==(c=b.layer)?void 0:c.screenSizePerspectiveEnabled)});a&&!this.screenSizePerspectiveHandles?(this.screenSizePerspectiveHandles=new q,a=()=>this._updateScreenSizePerspectiveSettings(),this.screenSizePerspectiveHandles.add([f.watch(()=>this.pointsOfInterest.centerOnSurfaceInfrequent.distance,
a,f.sync),this.viewState.events.on("camera-projection-changed",a)]),this._updateScreenSizePerspectiveSettings()):!a&&this.screenSizePerspectiveHandles&&(this.screenSizePerspectiveHandles.destroy(),this.screenSizePerspectiveHandles=null)};d._updateScreenSizePerspectiveSettings=function(){e.distance=this.pointsOfInterest.centerOnSurfaceInfrequent.distance;e.fovY=this.viewState.camera.fovY;this.screenSizePerspectiveSettings.update(e);this.screenSizePerspectiveSettingsLabels.update(e);this.view._stage.renderView.requestRender()};
n._createClass(g,[{key:"test",get:function(){return{screenSizePerspectiveHandles:this.screenSizePerspectiveHandles}}}]);return g}();const e={distance:0,fovY:0};h.SharedSymbolResources=v;Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
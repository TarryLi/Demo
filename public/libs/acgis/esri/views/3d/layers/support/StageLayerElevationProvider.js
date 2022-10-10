// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/Evented ../../../../core/Handles ../../../../core/Logger ../../../../core/maybe ../../../../core/unitUtils ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/aaBoundingRect ../../../../symbols/support/unitConversionUtils ../../webgl-engine/lib/Intersector ../../webgl-engine/lib/IntersectorInterfaces".split(" "),
function(f,y,k,z,A,B,C,D,E,m,L,M,N,F,t,n,l,G,H,I,J){const K=C.getLogger("esri.views.3d.layers.support.StageLayerElevationProvider");f.StageLayerElevationProvider=function(u){function p(a){a=u.call(this,a)||this;a.elevationOffset=0;a._layerHandes=new B;return a}y._inheritsLoose(p,u);var g=p.prototype;g.initialize=function(){this.renderCoordsHelper=this.view.renderCoordsHelper;this.intersectLayers=[this.stageLayer];this.intersector=I.newIntersector(this.view.state.viewingMode);this.intersector.options.store=
J.StoreResults.MIN;var a=this._computeLayerExtent(this.stageLayer);this.zmin=a[2];this.zmax=a[5];a=this.stageLayer.events;this._layerHandes.add([a.on("layerObjectAdded",b=>this._objectChanged(b.object)),a.on("layerObjectRemoved",b=>this._objectChanged(b.object)),a.on("objectGeometryAdded",b=>this._objectChanged(b.object)),a.on("objectGeometryRemoved",b=>this._objectChanged(b.object)),a.on("vertexAttrsUpdated",b=>this._objectChanged(b.object)),a.on("objectTransformation",b=>this._objectChanged(b))])};
g.dispose=function(){this._layerHandes.destroy()};g.elevationInfoChanged=function(){const a=null!=this.layer?this.layer.elevationInfo:null;if(null!=a&&"on-the-ground"!==a.mode){const b=E.getMetersPerVerticalUnitForSR(this.layer.spatialReference),d=H.getMetersPerUnit(a.unit);this.elevationOffset=D.unwrapOr(a.offset,0)*d/b}else this.elevationOffset=0};g.getElevation=function(a,b,d,h){c[0]=a;c[1]=b;c[2]=d;if(!this.renderCoordsHelper.toRenderCoords(c,h,c))return K.error("could not project point for elevation alignment"),
null;a=this.elevationOffset;b=this.zmin+a;this.renderCoordsHelper.setAltitude(v,this.zmax+a,c);this.renderCoordsHelper.setAltitude(w,b,c);this.intersector.reset(v,w,null);this.intersector.intersect(this.intersectLayers,null,1,null,x=>x.metadata&&x.metadata.isElevationSource);return this.intersector.results.min.getIntersectionPoint(c)?this.renderCoordsHelper.getAltitude(c):null};g._objectChanged=function(a){var b;if(null!=(b=a.metadata)&&b.isElevationSource&&this.spatialReference){l.empty(e);a.metadata.lastValidElevationBB.isEmpty()||
this._expandExtent(a.metadata.lastValidElevationBB.min,a.metadata.lastValidElevationBB.max,e);b=a.boundingVolumeWorldSpace.min;var d=a.boundingVolumeWorldSpace.max;this._expandExtent(b,d,e);l.toRect(e,q);this.zmin=Math.min(this.zmin,e[2]);this.zmax=Math.max(this.zmax,e[5]);r.extent=q;r.spatialReference=this.spatialReference;this.emit("elevation-change",r);t.copy(a.metadata.lastValidElevationBB.min,b);t.copy(a.metadata.lastValidElevationBB.max,d)}};g._computeLayerExtent=function(a){l.empty(e);a.objects.forAll(b=>
this._expandExtent(b.boundingVolumeWorldSpace.min,b.boundingVolumeWorldSpace.max,e));return e};g._expandExtent=function(a,b,d){for(let h=0;8>h;++h)c[0]=h&1?a[0]:b[0],c[1]=h&2?a[1]:b[1],c[2]=h&4?a[2]:b[2],this.renderCoordsHelper.fromRenderCoords(c,c,this.spatialReference),l.expandWithVec3(d,c);return d};return p}(A.EventedMixin(z));k.__decorate([m.property({constructOnly:!0})],f.StageLayerElevationProvider.prototype,"layer",void 0);k.__decorate([m.property({constructOnly:!0})],f.StageLayerElevationProvider.prototype,
"stageLayer",void 0);k.__decorate([m.property({constructOnly:!0})],f.StageLayerElevationProvider.prototype,"view",void 0);k.__decorate([m.property({readOnly:!0,aliasOf:"view.spatialReference"})],f.StageLayerElevationProvider.prototype,"spatialReference",void 0);f.StageLayerElevationProvider=k.__decorate([F.subclass("esri.views.3d.layers.support.StageLayerElevationProvider")],f.StageLayerElevationProvider);const e=l.empty(),q=G.empty(),r={spatialReference:null,extent:q,context:"scene"},c=n.create(),
v=n.create(),w=n.create();Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
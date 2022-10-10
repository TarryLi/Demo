// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/handleUtils ../../../core/maybe ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../geometry/support/aaBoundingRect ../../../layers/support/mediaUtils ./interfaces ./LayerView3D ../terrain/OverlayRenderer ../webgl-engine/lib/basicInterfaces ../webgl-engine/lib/Geometry ../webgl-engine/lib/ModelDirtyTypes ../webgl-engine/lib/RenderGeometry ../webgl-engine/lib/Texture ../webgl-engine/lib/VertexAttribute ../webgl-engine/materials/ImageMaterial ../../layers/LayerView ../../webgl/enums".split(" "),
function(k,r,t,g,u,A,v,l,L,M,B,C,D,E,F,n,w,G,p,H,I,m,J,K,x){l=function(y){function q(){var a=y.apply(this,arguments)||this;a.type="media-3d";a.drapeSourceType=E.DrapeSourceType.RasterImage;a.updatePolicy=w.UpdatePolicy.ASYNC;a._uidToElement=new Map;a._renderedElements=new Map;a._lastDrapingExtent=null;a._update=u.debounce(function(){var b=k._asyncToGenerator(function*(c,d,e){c=yield a._collectMediaElements(c,d,e);a._synchronizeRenderElements(c)});return function(c,d,e){return b.apply(this,arguments)}}(),
0);return a}k._inheritsLoose(q,y);var f=q.prototype;f.initialize=function(){this._renderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this);this.handles.add([t.makeHandle(()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this)),A.on(()=>this.layer.source,"refresh",()=>this._updateWithLastDrapingExtent())]);this.updatingHandles.add(()=>this.suspended,()=>this._updateWithLastDrapingExtent())};f.setDrapingExtent=function(a,b){this._lastDrapingExtent={overlays:a,
spatialReference:b};this._updateWithLastDrapingExtent()};f.getHit=function(a){return(a=this._uidToElement.get(a))?{type:"media",element:a,layer:this.layer}:null};f._updateWithLastDrapingExtent=function(){if(g.isNone(this._lastDrapingExtent)||this.suspended)this._renderer&&this._synchronizeRenderElements(new Set);else{var {overlays:a,spatialReference:b}=this._lastDrapingExtent;this.updatingHandles.addPromise(this._update(a,b).catch(()=>{}))}};f._collectMediaElements=function(){var a=k._asyncToGenerator(function*(b,
c,d){const e=this.layer.source;return g.isNone(e)?new Set:new Set((yield Promise.all(b.map(h=>e.queryElements(C.toExtent(h.extent,c),{signal:d})))).flat())});return function(b,c,d){return a.apply(this,arguments)}}();f._synchronizeRenderElements=function(a){this._synchronizeRenderElementsRemove(a);this._synchronizeRenderElementsAdd(a)};f._synchronizeRenderElementsRemove=function(a){const b=new Set,c=[];this._renderedElements.forEach((d,e)=>{a.has(e)||(b.add(e),g.isSome(d.renderData)&&c.push(d.renderData.renderGeometry),
this._removeElement(e,d))});this._renderer.removeGeometries(c,p.ModelDirty.Geometry.REMOVE)};f._synchronizeRenderElementsAdd=function(a){for(const b of a)this._renderedElements.has(b)||this._createRenderElement(b)};f._removeElement=function(a,{renderData:b,handle:c}){this._destroyRenderData(b);this._renderedElements.delete(a);this._uidToElement.delete(a.uid);c.remove()};f._createRenderElement=function(){var a=k._asyncToGenerator(function*(b){const c=new D.MediaElementView({spatialReference:this.view.spatialReference,
element:b}),d={renderData:null,handle:t.handlesGroup([this.updatingHandles.add(()=>b.opacity,e=>{g.isSome(d.renderData)&&d.renderData.material.setParameters({opacity:e})}),this.updatingHandles.add(()=>c.coords,e=>{g.isSome(d.renderData)?this._updateGeometry(d,d.renderData,e):this._initializeRenderData(c,d)}),this.updatingHandles.add(()=>b.content,()=>this._initializeRenderData(c,d)),t.destroyHandle(c)])};this._renderedElements.set(b,d);this._uidToElement.set(b.uid,b);this.updatingHandles.addPromise(b.load().catch(()=>
{}));this._initializeRenderData(c,d)});return function(b){return a.apply(this,arguments)}}();f._initializeRenderData=function(a,b){const {coords:c,element:d}=a;if(g.isNone(c)||g.isNone(d.content))b.renderData=this._destroyRenderData(b.renderData);else if(!g.isSome(b.renderData)){a=this._createTexture(d.content);this.view._stage.add(a);var e=this.view._stage.loadImmediate(a);u.isPromiseLike(e)&&this.updatingHandles.addPromise(e);e=new J.ImageMaterial({initTextureTransparent:!0,textureId:a.id,opacity:d.opacity,
transparent:!0});var h=this._positionVertexBufferFromCoordinates(c),z=new Uint16Array([0,1,2,0,2,3]);h=new G.Geometry([[m.VertexAttribute.POSITION,{data:h,size:3,exclusive:!0}],[m.VertexAttribute.UV0,{data:[0,0,1,0,1,1,0,1],size:2,exclusive:!0}]],[[m.VertexAttribute.POSITION,z],[m.VertexAttribute.UV0,z]]);h=new H.RenderGeometry(h,e,{layerUid:this.layer.uid,graphicUid:d.uid});this._renderer.addGeometries([h],p.ModelDirty.Geometry.ADD);b.renderData={renderGeometry:h,texture:a,material:e}}};f._updateGeometry=
function(a,b,c){g.isNone(c)?a.renderData=this._destroyRenderData(a.renderData):(a=this._positionVertexBufferFromCoordinates(c),b.renderGeometry.vertexAttributes.get(m.VertexAttribute.POSITION).data=a,this._renderer.modifyGeometries([b.renderGeometry],p.ModelDirty.State.VERTEXATTRS))};f._positionVertexBufferFromCoordinates=function(a){const [b,c,d,e]=a.rings[0];return new Float64Array([b[0],b[1],n.DRAPED_Z,e[0],e[1],n.DRAPED_Z,d[0],d[1],n.DRAPED_Z,c[0],c[1],n.DRAPED_Z])};f._destroyRenderData=function(a){if(g.isNone(a))return null;
this.view._stage.remove(a.texture);this._renderer.removeGeometries([a.renderGeometry],p.ModelDirty.Geometry.REMOVE);a.material.dispose();return null};f._createTexture=function(a){return new I.Texture(a,{wrap:{s:x.TextureWrapMode.CLAMP_TO_EDGE,t:x.TextureWrapMode.CLAMP_TO_EDGE},preMultiplyAlpha:!0,width:a instanceof HTMLImageElement?a.naturalWidth:a.width,height:a instanceof HTMLImageElement?a.naturalHeight:a.height,mipmap:!0,powerOfTwoResizeMode:w.PowerOfTwoResizeMode.STRETCH,updateCallback:()=>this.view.basemapTerrain.overlayManager.setDrawTexturesDirty()})};
k._createClass(q,[{key:"test",get:function(){const a=this;return{get numberOfElements(){return a._renderedElements.size}}}}]);return q}(F.LayerView3D(K));r.__decorate([v.property({readOnly:!0})],l.prototype,"type",void 0);r.__decorate([v.property()],l.prototype,"layer",void 0);return l=r.__decorate([B.subclass("esri.views.3d.layers.MediaLayerView3D")],l)});
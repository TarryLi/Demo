// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../chunks/vec4 ../editingTools/settings ./Object3DVisualElement ../../layers/graphics/ElevationContext ../../layers/graphics/pointUtils ../../webgl-engine/lib/basicInterfaces ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/lib/Material ../../webgl-engine/materials/ShadedColorMaterial".split(" "),function(m,n,u,v,w,g,d,k,x,y,p,q,z,r){k=function(t){function h(a){var b=
t.call(this,a)||this;b.view=null;b._renderOccluded=z.RenderOccludedFlag.OccludeAndTransparent;b._vertices=null;b._spatialReference=null;b._color=d.settings.colorToVec4(d.settings.reshapeManipulators.vertex.color);b._size=d.settings.reshapeManipulators.vertex.size;b._outlineColor=d.settings.colorToVec4(d.settings.reshapeManipulators.vertex.outlineColor);b._outlineSize=d.settings.reshapeManipulators.vertex.outlineSize;b._elevationInfo=null;b.applyProps(a);return b}n._inheritsLoose(h,t);var c=h.prototype;
c._updateMaterial=function(){this.attached&&this.vertexMaterial.setParameters(this.vertexMaterialParameters)};c._updateOutlineMaterial=function(){this.attached&&this.vertexOutlineMaterial.setParameters(this.vertexOutlineMaterialParameters)};c._createRenderGeometries=function(){var a=this.vertices;if(u.isNone(a)||0===a.length)return[];var b=y.geometryToRenderInfo(a,this.spatialReference,this.view.elevationProvider,this.view.renderCoordsHelper,x.ElevationContext.fromElevationInfo(this.elevationInfo));
a=[];const l=b.numVertices;b=b.position;for(let f=0;f<l;++f){var e=v.set(A,b[3*f],b[3*f+1],b[3*f+2]);const B=q.createSphereGeometry(.5,16,16,{offset:e});e=q.createSphereGeometry(.5,16,16,{offset:e});a.push({vertexGeometry:B,vertexOutlineGeometry:e})}return a};c.createGeometries=function(a){const b=this._createRenderGeometries();for(const {vertexGeometry:l,vertexOutlineGeometry:e}of b)a.addGeometry(l,this.vertexMaterial),a.addGeometry(e,this.vertexOutlineMaterial)};c.createExternalResources=function(){this.vertexMaterial=
new r.ShadedColorMaterial({...this.vertexMaterialParameters,writeDepth:!0,cullFace:p.CullFaceOptions.Back,screenSizeEnabled:!0});this.vertexOutlineMaterial=new r.ShadedColorMaterial({...this.vertexOutlineMaterialParameters,transparent:!0,writeDepth:!0,cullFace:p.CullFaceOptions.Front,screenSizeEnabled:!0,shadingEnabled:!1})};c.destroyExternalResources=function(){this.vertexOutlineMaterial=this.vertexMaterial=null};c.forEachExternalMaterial=function(a){a(this.vertexMaterial);a(this.vertexOutlineMaterial)};
n._createClass(h,[{key:"renderOccluded",get:function(){return this._renderOccluded},set:function(a){a!==this._renderOccluded&&(this._renderOccluded=a,this._updateMaterial(),this._updateOutlineMaterial())}},{key:"vertices",get:function(){return this._vertices},set:function(a){this._vertices=a;this.recreateGeometry()}},{key:"spatialReference",get:function(){return this._spatialReference},set:function(a){this._spatialReference=a;this.recreateGeometry()}},{key:"color",get:function(){return this._color},
set:function(a){g.exactEquals(a,this._color)||(g.copy(this._color,a),this._updateMaterial())}},{key:"size",get:function(){return this._size},set:function(a){a!==this._size&&(this._size=a,this._updateMaterial())}},{key:"outlineColor",get:function(){return this._outlineColor},set:function(a){g.exactEquals(a,this._outlineColor)||(g.copy(this._outlineColor,a),this._updateOutlineMaterial())}},{key:"outlineSize",get:function(){return this._outlineSize},set:function(a){a!==this._outlineSize&&(this._outlineSize=
a,this._updateOutlineMaterial())}},{key:"elevationInfo",get:function(){return this._elevationInfo},set:function(a){this._elevationInfo=a;this.recreateGeometry()}},{key:"vertexMaterialParameters",get:function(){return{color:this._color,transparent:1>this._color[3],screenSizeScale:this.size,renderOccluded:this._renderOccluded}}},{key:"vertexOutlineMaterialParameters",get:function(){return{color:this._outlineColor,transparent:1>this._outlineColor[3],screenSizeScale:this.size+2*this.outlineSize,renderOccluded:this._renderOccluded}}}]);
return h}(k.Object3DVisualElement);const A=w.create();m.VerticesVisualElement=k;Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../support/buffer/InterleavedLayout ../core/shaderLibrary/ShaderOutputOptions ../lib/GLMaterials ../lib/GLTextureMaterial ../lib/Material ../lib/RenderSlot ../lib/VertexAttribute ./VisualVariablePassParameters ../shaders/LineMarkerTechnique ../shaders/LineMarkerTechniqueConfiguration ../shaders/RibbonLineTechniqueConfiguration".split(" "),function(y,z,w,C,L,n,M,N,A,p,d,O,D,P,E){let S=
function(l){function g(a){a=l.call(this,a,new F)||this;a._vertexAttributeLocations=D.markerVertexAttributeLocations;a.techniqueConfig=new P.LineMarkerTechniqueConfiguration;a.layout=a.createLayout();return a}z._inheritsLoose(g,l);var b=g.prototype;b.dispose=function(){};b.getConfiguration=function(a,m){this.techniqueConfig.output=a;this.techniqueConfig.draped=m.slot===p.RenderSlot.DRAPED_MATERIAL;this.techniqueConfig.hasCap=this.parameters.cap!==E.CapType.BUTT;this.techniqueConfig.hasSlicePlane=this.parameters.hasSlicePlane;
this.techniqueConfig.hasOccludees=this.parameters.hasOccludees;this.techniqueConfig.writeDepth=this.parameters.writeDepth;this.techniqueConfig.vvColor=this.parameters.vvColorEnabled;this.techniqueConfig.vvOpacity=this.parameters.vvOpacityEnabled;this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled;this.techniqueConfig.occluder=this.parameters.renderOccluded===A.RenderOccludedFlag.OccludeAndTransparentStencil;this.techniqueConfig.transparencyPassType=m.transparencyPassType;this.techniqueConfig.hasMultipassTerrain=
m.multipassTerrain.enabled;this.techniqueConfig.cullAboveGround=m.multipassTerrain.cullAboveGround;return this.techniqueConfig};b.intersect=function(){};b.createLayout=function(){const a=L.newLayout().vec3f(d.VertexAttribute.POSITION).vec2f(d.VertexAttribute.UV0).vec3f(d.VertexAttribute.AUXPOS1);this.parameters.vvSizeEnabled?a.f32(d.VertexAttribute.SIZEFEATUREATTRIBUTE):a.f32(d.VertexAttribute.SIZE);this.parameters.vvColorEnabled?a.f32(d.VertexAttribute.COLORFEATUREATTRIBUTE):a.vec4f(d.VertexAttribute.COLOR);
this.parameters.vvOpacityEnabled&&a.f32(d.VertexAttribute.OPACITYFEATUREATTRIBUTE);return a};b.createBufferWriter=function(){return new Q(this.layout,this.parameters)};b.requiresSlot=function(a,m){if(a===p.RenderSlot.DRAPED_MATERIAL)return!0;if(this.parameters.renderOccluded===A.RenderOccludedFlag.OccludeAndTransparentStencil)return a===p.RenderSlot.OPAQUE_MATERIAL||a===p.RenderSlot.OCCLUDER_MATERIAL||a===p.RenderSlot.TRANSPARENT_OCCLUDER_MATERIAL;m=M.outputFromPass(m);return m===n.ShaderOutput.Color||
m===n.ShaderOutput.Alpha?a===(this.parameters.writeDepth?p.RenderSlot.TRANSPARENT_MATERIAL:p.RenderSlot.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL):a===p.RenderSlot.OPAQUE_MATERIAL};b.createGLMaterial=function(a){return a.output===n.ShaderOutput.Color||a.output===n.ShaderOutput.Alpha||a.output===n.ShaderOutput.Highlight||a.output===n.ShaderOutput.Depth?new R(a):null};return g}(A.Material),R=function(l){function g(){return l.apply(this,arguments)||this}z._inheritsLoose(g,l);var b=g.prototype;b._updateParameters=
function(a){this.updateTexture(this._material.parameters.textureId);this._material.setParameters(this.textureBindParameters);return this.ensureTechnique(D.LineMarkerTechnique,a)};b._updateOccludeeState=function(a){a.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:a.hasOccludees})};b.beginSlot=function(a){this._output!==n.ShaderOutput.Color&&this._output!==n.ShaderOutput.Alpha||this._updateOccludeeState(a);return this._updateParameters(a)};return g}(N.GLTextureMaterial),
F=function(l){function g(){var b=l.apply(this,arguments)||this;b.width=0;b.color=[1,1,1,1];b.placement="end";b.cap=E.CapType.BUTT;b.writeDepth=!0;b.hasSlicePlane=!1;b.vvFastUpdate=!1;b.hasOccludees=!1;return b}z._inheritsLoose(g,l);return g}(O.VisualVariablePassParameters),Q=function(){function l(b,a){this.vertexBufferLayout=b;this.parameters=a}var g=l.prototype;g.allocate=function(b){return this.vertexBufferLayout.createBuffer(b)};g.elementCount=function(){return"begin-end"===this.parameters.placement?
12:6};g.write=function(b,a,m,T){const q=a.vertexAttributes.get(d.VertexAttribute.POSITION).data,G=q.length/3;let H=1,I=0;this.parameters.vvSizeEnabled?I=a.vertexAttributes.get(d.VertexAttribute.SIZEFEATUREATTRIBUTE).data[0]:a.vertexAttributes.has(d.VertexAttribute.SIZE)&&(H=a.vertexAttributes.get(d.VertexAttribute.SIZE).data[0]);let r=[1,1,1,1],J=0;this.parameters.vvColorEnabled?J=a.vertexAttributes.get(d.VertexAttribute.COLORFEATUREATTRIBUTE).data[0]:a.vertexAttributes.has(d.VertexAttribute.COLOR)&&
(r=a.vertexAttributes.get(d.VertexAttribute.COLOR).data);let K=0;this.parameters.vvOpacityEnabled&&(K=a.vertexAttributes.get(d.VertexAttribute.OPACITYFEATUREATTRIBUTE).data[0]);const B=b.transformation,e=new Float32Array(m.buffer);let f=this.vertexBufferLayout.stride/4*T;const u=(c,t,h,k)=>{e[f++]=c[0];e[f++]=c[1];e[f++]=c[2];e[f++]=h[0];e[f++]=h[1];e[f++]=t[0];e[f++]=t[1];e[f++]=t[2];this.parameters.vvSizeEnabled?e[f++]=I:e[f++]=H;this.parameters.vvColorEnabled?e[f++]=J:(c=Math.min(4*k,r.length-
4),e[f++]=r[c+0],e[f++]=r[c+1],e[f++]=r[c+2],e[f++]=r[c+3]);this.parameters.vvOpacityEnabled&&(e[f++]=K)};let x;(function(c){c[c.ASCENDING=1]="ASCENDING";c[c.DESCENDING=-1]="DESCENDING"})(x||(x={}));b=(c,t)=>{const h=w.set(U,q[3*c],q[3*c+1],q[3*c+2]),k=V;let v=c+t;do w.set(k,q[3*v],q[3*v+1],q[3*v+2]),v+=t;while(w.equals(h,k)&&0<=v&&v<G);B&&(w.transformMat4(h,h,B),w.transformMat4(k,k,B));u(h,k,[-1,-1],c);u(h,k,[1,-1],c);u(h,k,[1,1],c);u(h,k,[-1,-1],c);u(h,k,[1,1],c);u(h,k,[-1,1],c)};a=this.parameters.placement;
"begin"!==a&&"begin-end"!==a||b(0,x.ASCENDING);"end"!==a&&"begin-end"!==a||b(G-1,x.DESCENDING)};return l}();const U=C.create(),V=C.create();y.LineMarkerMaterial=S;y.Parameters=F;Object.defineProperties(y,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
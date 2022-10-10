// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../enums ../Utils ./WGLGeometryBrush ../materialKey/MaterialKey ../techniques/utils ../../../../webgl/enums".split(" "),function(z,t,m,A,B,C,D,b){function E(n){const f={geometry:[{location:0,name:"a_pos",count:2,type:b.DataType.SHORT},{location:1,name:"a_id",count:3,type:b.DataType.UNSIGNED_BYTE},{location:2,name:"a_bitset",count:1,type:b.DataType.UNSIGNED_BYTE},{location:3,name:"a_color",count:4,type:b.DataType.UNSIGNED_BYTE,
normalized:!0},{location:4,name:"a_aux1",count:4,type:b.DataType.UNSIGNED_SHORT},{location:5,name:"a_aux2",count:4,type:b.DataType.SHORT},{location:6,name:"a_aux3",count:4,type:b.DataType.UNSIGNED_BYTE},{location:7,name:"a_zoomRange",count:2,type:b.DataType.UNSIGNED_SHORT}]};switch(n.symbologyType){case m.WGLSymbologyType.SIMPLE:case m.WGLSymbologyType.OUTLINE_FILL_SIMPLE:f.geometry.splice(7,1),f.geometry.splice(4,1)}return{shader:"materials/fill",vertexLayout:f}}return function(n){function f(){return n.apply(this,
arguments)||this}z._inheritsLoose(f,n);var l=f.prototype;l.dispose=function(){};l.getGeometryType=function(){return m.WGLGeometryType.FILL};l.supportsSymbology=function(d){return d!==m.WGLSymbologyType.DOT_DENSITY};l.drawGeometry=function(d,g,e,a){const {context:k,painter:p,rendererInfo:v,requiredLevel:F,passOptions:w,requestRender:x}=d;var c=C.FillMaterialKey.load(e.materialKey),q=D.getTechniqueFromMaterialKey(c.data);const r=t.isSome(w)&&"hittest"===w.type;var h=p.materialManager;const {shader:G,
vertexLayout:H,hittestAttributes:I}=t.unwrapOr(q.programSpec,E(c));q=b.PrimitiveType.TRIANGLES;let u=A.createProgramDescriptor(c.data,H);r&&(u=this._getTriangleDesc(e.materialKey,u,I),q=b.PrimitiveType.POINTS);const {attributes:y,bufferLayouts:J}=u;a=h.getMaterialProgram(d,c,G,y,a);!t.isSome(x)||r||a.isCompiled?(k.useProgram(a),this._setSharedUniforms(a,d,g),a.setUniform2f("u_tileOffset",512*g.key.col,512*g.key.row),c.textureBinding&&(p.textureManager.bindTextures(k,a,c),a.setUniform1f("u_zoomFactor",
1/2**(F-g.key.level))),h=1/d.pixelRatio,a.setUniform1f("u_blur",h),a.setUniform1f("u_antialiasing",h),this._setSizeVVUniforms(c,a,v,g),this._setColorAndOpacityVVUniforms(c,a,v),c=e.target.getVAO(k,J,y,r),h=e.indexCount,e=e.indexFrom*Uint32Array.BYTES_PER_ELEMENT,r&&(h/=3,e/=3),k.bindVAO(c),this._drawFills(d,g,a,q,h,e)):x()};l._drawFills=function(d,g,e,a,k,p){d.context.drawElements(a,k,b.DataType.UNSIGNED_INT,p)};return f}(B)});
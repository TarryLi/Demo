// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../enums ../Utils ./WGLGeometryBrush ../materialKey/MaterialKey ../../../../webgl/enums".split(" "),function(w,p,x,y,z,A,a){return function(q){function k(){return q.apply(this,arguments)||this}w._inheritsLoose(k,q);var h=k.prototype;h.dispose=function(){};h.getGeometryType=function(){return x.WGLGeometryType.LABEL};h.supportsSymbology=function(c){return!0};h.drawGeometry=function(c,e,f,b){const {context:d,painter:r,
state:l,rendererInfo:B,passOptions:t,requestRender:u}=c,g=A.LabelMaterialKey.load(f.materialKey);var m=p.isSome(t)&&"hittest"===t.type;const n=g.mapAligned?1:0;if(n||!(1<=Math.abs(e.key.level-Math.round(100*c.displayLevel)/100))){var {bufferLayouts:C,attributes:v}=y.createProgramDescriptor(g.data,{geometry:[{location:0,name:"a_pos",count:2,type:a.DataType.SHORT},{location:1,name:"a_id",count:4,type:a.DataType.UNSIGNED_BYTE},{location:2,name:"a_color",count:4,type:a.DataType.UNSIGNED_BYTE,normalized:!0},
{location:3,name:"a_haloColor",count:4,type:a.DataType.UNSIGNED_BYTE,normalized:!0},{location:4,name:"a_texAndSize",count:4,type:a.DataType.UNSIGNED_BYTE},{location:5,name:"a_refSymbolAndPlacementOffset",count:4,type:a.DataType.UNSIGNED_BYTE},{location:6,name:"a_glyphData",count:4,type:a.DataType.UNSIGNED_BYTE},{location:7,name:"a_vertexOffset",count:2,type:a.DataType.SHORT},{location:8,name:"a_texCoords",count:2,type:a.DataType.UNSIGNED_SHORT}]});b=r.materialManager.getMaterialProgram(c,g,"materials/label",
v,b);!p.isSome(u)||m||b.isCompiled?(c.context.setStencilFunction(a.CompareFunction.EQUAL,0,255),d.useProgram(b),this._setSharedUniforms(b,c,e),r.textureManager.bindTextures(d,b,g),m=1===n?l.displayViewMat3:l.displayMat3,this._setSizeVVUniforms(g,b,B,e),b.setUniform1f("u_mapRotation",Math.floor(l.rotation/360*254)),b.setUniform1f("u_mapAligned",n),b.setUniformMatrix3fv("u_displayMat3",m),b.setUniform1f("u_opacity",1),b.setUniform2fv("u_screenSize",c.state.size),b.setUniform1f("u_isHalo",1),c=f.target.getVAO(d,
C,v),e=f.indexFrom*Uint32Array.BYTES_PER_ELEMENT,d.bindVAO(c),d.drawElements(a.PrimitiveType.TRIANGLES,f.indexCount,a.DataType.UNSIGNED_INT,e),b.setUniform1f("u_isHalo",0),d.drawElements(a.PrimitiveType.TRIANGLES,f.indexCount,a.DataType.UNSIGNED_INT,e),d.setStencilTestEnabled(!0),d.setBlendingEnabled(!0)):u()}};return k}(z)});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../../core/maybe ../../terrain/interfaces ./glUtil3D ../../../../chunks/Compositing.glsl ../shaders/CompositingTechnique ../shaders/CompositingTechniqueConfiguration ../../../webgl/enums ../../../webgl/Util".split(" "),function(k,q,r,t,l,d,m,n){return function(){function p(b,a){this._rctx=b;this._techniqueRepository=a;this._configuration=new d.CompositingTechniqueConfiguration;this._passParameters=new t.CompositingPassParameters}var e=p.prototype;e.dispose=function(){this._vao=k.disposeMaybe(this._vao)};
e.compositeTransparent=function(b,a,c,f,g=1){this._configuration.alphaMode=d.AlphaMode.Alpha;this._configuration.function=d.CompositingFunction.Transparency;this._configuration.hasOpacityFactor=1!==g;this._passParameters.colorTexture=a;this._passParameters.alphaTexture=c;this._passParameters.frontFaceTexture=f;a=this._rctx;c=this._techniqueRepository.acquire(l.CompositingTechnique,this._configuration);a.bindTechnique(c,this._passParameters,b);b=this._ensureVAO();a.bindVAO(b);a.drawArrays(m.PrimitiveType.TRIANGLE_STRIP,
0,n.vertexCount(b,"geometry"));c.release()};e.composite=function(b,a,c=d.AlphaMode.None,f=1,g=d.CompositingFunction.Standard,u=q.OverlayIndex.INNER){const h=this._rctx;this._configuration.alphaMode=c;this._configuration.function=g;this._configuration.hasOpacityFactor=1!==f;this._passParameters.overlayIndex=u;this._passParameters.texture=a;this._passParameters.opacity=f;a=this._techniqueRepository.acquire(l.CompositingTechnique,this._configuration);h.bindTechnique(a,this._passParameters,b);b=this._ensureVAO();
h.bindVAO(b);h.drawArrays(m.PrimitiveType.TRIANGLE_STRIP,0,n.vertexCount(b,"geometry"));a.release()};e._ensureVAO=function(){k.isNone(this._vao)&&(this._vao=r.createQuadVAO(this._rctx));return this._vao};return p}()});
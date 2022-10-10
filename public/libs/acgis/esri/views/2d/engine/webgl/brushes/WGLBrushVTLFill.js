// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../../vectorTiles/style/StyleDefinition ../definitions ../enums ../number ./WGLBrush ../../../../webgl/enums".split(" "),function(I,O,y,J,C,E,P,F,q){const K=1/65536;F=function(L){function G(){var d=L.apply(this,arguments)||this;d._fillProgramOptions={id:!1,pattern:!1};d._outlineProgramOptions={id:!1};return d}O._inheritsLoose(G,L);var D=G.prototype;D.dispose=function(){};D.drawMany=function(d,w){const {displayLevel:k,
drawPhase:b,renderPass:h,spriteMosaic:f,styleLayerUID:m}=d;var a=!1;for(var l of w)if(l.layerData.has(m)){var r=l.layerData.get(m);if(0<r.fillIndexCount||0<r.outlineIndexCount){a=!0;break}}if(a){a=d.styleLayer;var g=a.getPaintProperty("fill-pattern");r=(l=void 0!==g)&&g.isDataDriven;if(l&&!r){var t=g.getValue(k);t=f.getMosaicItemPosition(t,!0)}g=!l&&a.getPaintValue("fill-antialias",k);var z=!0,x=1;if(!l){var u=a.getPaintProperty("fill-color"),c=a.getPaintProperty("fill-opacity");null!=u&&u.isDataDriven||
null!=c&&c.isDataDriven||(x=a.getPaintValue("fill-color",k),x=a.getPaintValue("fill-opacity",k)*x[3],1<=x&&(z=!1))}if(!z||"opaque"!==h){var n;b===E.WGLDrawPhase.HITTEST&&(n=P.u32to4Xu8(m+1));u=a.getPaintValue("fill-translate",k);c=a.getPaintValue("fill-translate-anchor",k);(z||"translucent"!==h)&&this._drawFill(d,m,a,w,u,c,l,t,r,n);t=!a.hasDataDrivenOutlineColor&&a.outlineUsesFillColor&&1>x;g&&"opaque"!==h&&!t&&this._drawOutline(d,m,a,w,u,c,n)}}};D._drawFill=function(d,w,k,b,h,f,m,a,l,r){if(!m||l||
!y.isNone(a)){var {context:g,displayLevel:t,state:z,drawPhase:x,painter:u,pixelRatio:c,spriteMosaic:n,requestRender:A}=d;d=k.fillMaterial;var e=u.vectorTilesMaterialManager,v=c>C.VTL_HIGH_RES_CUTOFF?2:1,H=x===E.WGLDrawPhase.HITTEST,B=this._fillProgramOptions;B.id=H;B.pattern=m;e=e.getMaterialProgram(g,d,B);if(!y.isSome(A)||H||e.isCompiled){g.useProgram(e);y.isSome(a)&&({page:a}=a,B=n.getPageSize(a),y.isSome(B)&&(n.bind(g,q.TextureSamplingMode.LINEAR,a,C.VTL_TEXTURE_BINDING_UNIT_SPRITES),e.setUniform2fv("u_mosaicSize",
B),e.setUniform1i("u_texture",C.VTL_TEXTURE_BINDING_UNIT_SPRITES)));e.setUniformMatrix3fv("u_displayMat3",f===J.TranslateAnchor.VIEWPORT?z.displayMat3:z.displayViewMat3);e.setUniform2fv("u_fillTranslation",h);e.setUniform1f("u_depth",k.z+K);H&&e.setUniform4fv("u_id",r);h=-1;for(const p of b)if(p.layerData.has(w)&&(p.key.level!==h&&(h=p.key.level,d.setDataUniforms(e,t,k,h,n)),b=p.layerData.get(w),b.fillIndexCount&&(b.prepareForRendering(g),f=b.fillVertexArrayObject,!y.isNone(f)))){g.bindVAO(f);e.setUniformMatrix3fv("u_dvsMat3",
p.transforms.dvs);g.setStencilFunction(q.CompareFunction.EQUAL,p.stencilRef,255);m&&e.setUniform1f("u_patternFactor",p.rangeX/(v*p.width*Math.max(2**(Math.round(t)-p.key.level),1)));if(l){f=b.patternMap;if(!f)continue;for(const [M,N]of f)f=n.getPageSize(M),y.isSome(f)&&(n.bind(g,q.TextureSamplingMode.LINEAR,M,C.VTL_TEXTURE_BINDING_UNIT_SPRITES),e.setUniform2fv("u_mosaicSize",f),e.setUniform1i("u_texture",C.VTL_TEXTURE_BINDING_UNIT_SPRITES),g.drawElements(q.PrimitiveType.TRIANGLES,N[1],q.DataType.UNSIGNED_INT,
Uint32Array.BYTES_PER_ELEMENT*N[0]))}else g.drawElements(q.PrimitiveType.TRIANGLES,b.fillIndexCount,q.DataType.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*b.fillIndexStart);p.triangleCount+=b.fillIndexCount/3}}else A()}};D._drawOutline=function(d,w,k,b,h,f,m){const {context:a,displayLevel:l,state:r,drawPhase:g,painter:t,pixelRatio:z,spriteMosaic:x,requestRender:u}=d;d=k.outlineMaterial;var c=t.vectorTilesMaterialManager;const n=.75/z,A=g===E.WGLDrawPhase.HITTEST,e=this._outlineProgramOptions;e.id=
A;c=c.getMaterialProgram(a,d,e);if(!y.isSome(u)||A||c.isCompiled){a.useProgram(c);c.setUniformMatrix3fv("u_displayMat3",f===J.TranslateAnchor.VIEWPORT?r.displayMat3:r.displayViewMat3);c.setUniform2fv("u_fillTranslation",h);c.setUniform1f("u_depth",k.z+K);c.setUniform1f("u_outline_width",n);A&&c.setUniform4fv("u_id",m);h=-1;for(const v of b)v.layerData.has(w)&&(v.key.level!==h&&(h=v.key.level,d.setDataUniforms(c,l,k,h,x)),b=v.layerData.get(w),b.prepareForRendering(a),b.outlineIndexCount&&(f=b.outlineVertexArrayObject,
y.isNone(f)||(a.bindVAO(f),c.setUniformMatrix3fv("u_dvsMat3",v.transforms.dvs),a.setStencilFunction(q.CompareFunction.EQUAL,v.stencilRef,255),a.drawElements(q.PrimitiveType.TRIANGLES,b.outlineIndexCount,q.DataType.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*b.outlineIndexStart),v.triangleCount+=b.outlineIndexCount/3)))}else u()};return G}(F);I.WGLBrushVTLFill=F;Object.defineProperties(I,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
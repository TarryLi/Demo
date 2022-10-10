// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/Error ../../../../../../core/Logger ../../../../../../core/maybe ../../../../../../core/screenUtils ../../../../../../chunks/mat2df32 ../../../../../../chunks/vec2f32 ../../../../../../symbols/cim/enums ../../color ../../definitions ../../number ../../materialKey/MaterialKey ./util ./WGLBaseMarkerTemplate ./WGLDynamicMeshTemplate ../../util/Result".split(" "),function(C,D,E,z,l,F,G,H,w,x,q,I,h,J,K,L){const M=G.create(),
N=F.create(),O=E.getLogger("esri.views.2d.engine.webgl.WGLDynamicMarkerTemplate");return function(B){function t(a,c,r){var b=B.call(this,a)||this;b._cimMarkerLayer=a;b._minMaxZoom=q.i1616to32(Math.round(c*x.MIN_MAX_ZOOM_PRECISION_FACTOR),Math.round(r*x.MIN_MAX_ZOOM_PRECISION_FACTOR));const k=a.color;h.isFunction(k)?b._dynamicPropertyMap.set("_fillColor",(g,d,e)=>w.premultiplyAlphaRGBA(k(g,d,e))):b._fillColor=w.premultiplyAlphaRGBA(k);const f=a.outlineColor;h.isFunction(f)?b._dynamicPropertyMap.set("_outlineColor",
(g,d,e)=>w.premultiplyAlphaRGBA(f(g,d,e))):b._outlineColor=w.premultiplyAlphaRGBA(f);const n=a.size;h.isFunction(n)?b._dynamicPropertyMap.set("_size",(g,d,e)=>l.pt2px(n(g,d,e))):b._size=l.pt2px(n)||0;c=a.scaleX;h.isFunction(c)?b._dynamicPropertyMap.set("_scaleX",c):b._scaleX=c||1;const m=a.offsetX;h.isFunction(m)?b._dynamicPropertyMap.set("xOffset",(g,d,e)=>l.pt2px(m(g,d,e))):b.xOffset=l.pt2px(m)||0;const p=a.offsetY;h.isFunction(p)?b._dynamicPropertyMap.set("yOffset",(g,d,e)=>l.pt2px(p(g,d,e))):
b.yOffset=l.pt2px(p)||0;const u=a.outlineWidth;h.isFunction(u)?b._dynamicPropertyMap.set("_outlineWidth",(g,d,e)=>l.pt2px(u(g,d,e))):b._outlineWidth=l.pt2px(u)||0;c=a.rotation;h.isFunction(c)?b._dynamicPropertyMap.set("_angle",c):b._angle=c||0;z.isSome(a.effects)&&(c=a.effects,h.isFunction(c)?b._dynamicPropertyMap.set("_effects",c):b._effects=c);z.isSome(a.markerPlacement)&&(c=a.markerPlacement,h.isFunction(c)?b._dynamicPropertyMap.set("_markerPlacement",c):b._markerPlacement=c);b._scaleFactor=z.unwrapOr(a.scaleFactor,
1);b._bitSet=(a.alignment===H.Alignment.MAP?1:0)|(a.colorLocked?1:0)<<1|(a.scaleSymbolsProportionally?1:0)<<3;b._materialKey=a.materialKey;return b}C._inheritsLoose(t,B);t.fromCIMMarker=function(a,c){const [r,b]=h.getMinMaxZoom(a.scaleInfo,c);return new t(a,r,b)};t.prototype.bindFeature=function(a,c,r){const b=a.readLegacyFeature();a=a.getObjectId();this._dynamicPropertyMap.forEach((P,Q)=>{this[Q]=P(b,c,r)});var k=this._cimMarkerLayer.materialHash;a="function"===typeof k?k(b,c,r,a):k;if((a=this._materialCache.get(a))&&
L.ok(a.spriteMosaicItem)&&a.spriteMosaicItem){a=a.spriteMosaicItem;k=this._cimMarkerLayer.sizeRatio;var f=a.width/a.height*this._scaleX,n=this._cimMarkerLayer.rotateClockwise?this._angle:-this._angle,m=this._size,p=m*f,u=this.xOffset,g=this.yOffset;this.xOffset*=this._scaleFactor;this.yOffset*=this._scaleFactor;var d=this._cimMarkerLayer.scaleSymbolsProportionally&&this._cimMarkerLayer.frameHeight?this._size/l.pt2px(this._cimMarkerLayer.frameHeight):1,e=this._outlineWidth*d,y=l.pt2px(this._cimMarkerLayer.referenceSize),
A=d=0,v=this._cimMarkerLayer.anchorPoint;v&&(this._cimMarkerLayer.isAbsoluteAnchorPoint?this._size&&(d=-v.x/(this._size*f),A=v.y/this._size):(d=v.x,A=v.y));this._sizeOutlineWidth=q.i8888to32(Math.round(Math.min(Math.sqrt(128*p),255)),Math.round(Math.min(Math.sqrt(128*m),255)),Math.round(Math.min(Math.sqrt(128*e),255)),Math.round(Math.min(Math.sqrt(128*y),255)));this.angle=n;this._bitestAndDistRatio=q.i1616to32(this._bitSet,Math.round(64*k));f=a.rect.x+x.SPRITE_PADDING;n=a.rect.y+x.SPRITE_PADDING;
e=f+a.width;y=n+a.height;this._texUpperLeft=q.i1616to32(f,n);this._texUpperRight=q.i1616to32(e,n);this._texBottomLeft=q.i1616to32(f,y);this._texBottomRight=q.i1616to32(e,y);f=I.MarkerMaterialKey.load(this._materialKey);f.sdf=a.sdf;f.pattern=!0;f.textureBinding=a.textureBinding;this._materialKey=f.data;this._anchorX=.5-(.5+d)*a.width/a.width;this._anchorY=.5-(.5+A)*a.height/a.height;p=p*k*this._scaleFactor;m=m*k*this._scaleFactor;p*=a.rect.width/a.width;m*=a.rect.height/a.height;this._computedWidth=
p;this._computedHeight=m;this._applyTransformation(N,M);this.xOffset=u;this.yOffset=g}else O.error(new D("mapview-cim","Encountered an error when binding feature"))};return t}(J(K))});
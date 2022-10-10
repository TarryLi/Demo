// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/has ../BitBlitRenderer ./Effect ./highlight/HighlightGradient ./highlight/HighlightRenderer ./highlight/HighlightSurfaces ../../../../webgl/enums".split(" "),function(k,u,l,m,n,p,q,r){return function(h){function g(){var a=h.apply(this,arguments)||this;a.defines=["highlight"];a._hlRenderer=new p;a._hlGradient=new n;a._width=void 0;a._height=void 0;a._hlSurfaces=new q;a._adjustedWidth=void 0;a._adjustedHeight=void 0;a._blitRenderer=
new l.BitBlitRenderer;return a}k._inheritsLoose(g,h);var d=g.prototype;d.dispose=function(){this._hlSurfaces&&this._hlSurfaces.dispose();this._hlRenderer&&this._hlRenderer.dispose();this._hlGradient&&this._hlGradient.destroy();this._boundFBO=null};d.bind=function(a){const {context:b,painter:c}=a,{width:e,height:f}=b.getViewport(),t=c.getFbos(e,f).effect0;this.setup(a,e,f);b.bindFramebuffer(t);b.setColorMask(!0,!0,!0,!0);b.setClearColor(0,0,0,0);b.clear(b.gl.COLOR_BUFFER_BIT)};d.unbind=function(){};
d.setup=function({context:a},b,c){this._width=b;this._height=c;const e=b%4,f=c%4;b+=2>e?-e:4-e;c+=2>f?-f:4-f;this._adjustedWidth=b;this._adjustedHeight=c;this._boundFBO=a.getBoundFramebufferObject();b=Math.round(1*b);c=Math.round(1*c);this._hlRenderer.setup(a,b,c);this._hlSurfaces.setup(a,b,c)};d.draw=function({context:a}){const b=a.getBoundFramebufferObject();a.setViewport(0,0,1*this._adjustedWidth,1*this._adjustedHeight);a.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo);a.setStencilTestEnabled(!1);
a.setClearColor(0,0,0,0);a.clear(a.gl.COLOR_BUFFER_BIT);this._blitRenderer.render(a,b.colorTexture,r.TextureSamplingMode.NEAREST,1);a.setStencilTestEnabled(!1);a.setBlendingEnabled(!1);a.setColorMask(!1,!1,!1,!0);a.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo);a.setClearColor(0,0,0,0);a.clear(a.gl.COLOR_BUFFER_BIT);this._hlRenderer.preBlur(a,this._hlSurfaces.sharedBlur1Tex);a.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo);a.setClearColor(0,0,0,0);a.clear(a.gl.COLOR_BUFFER_BIT);this._hlRenderer.finalBlur(a,
this._hlSurfaces.sharedBlur2Tex);a.bindFramebuffer(this._boundFBO);a.setBlendingEnabled(!0);a.setColorMask(!0,!0,!0,!0);a.setViewport(0,0,this._width,this._height);this._hlRenderer.renderHighlight(a,this._hlSurfaces.sharedBlur1Tex,this._hlGradient);this._boundFBO=null};d.setHighlightOptions=function(a){this._hlGradient.setHighlightOptions(a)};return g}(m.Effect)});
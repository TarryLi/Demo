// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../engine/Bitmap","../../engine/BitmapContainer"],function(l,m,q,e){e=function(f){function g(b){var a=f.call(this)||this;a.requestRender=a.requestRender.bind(m._assertThisInitialized(a));a._layerView=b;a._canvas=document.createElement("canvas");a._context=a._canvas.getContext("2d");a._bitmap=new q.Bitmap(null,"standard",!1);a.addChild(a._bitmap);return a}m._inheritsLoose(g,f);var n=g.prototype;n.doRender=function(b){const a=b.state,
p=this._createCustomRenderParams(b),h=this._canvas,c=this._bitmap,d=window.devicePixelRatio;h.width=a.size[0]*d;h.height=a.size[1]*d;c.resolution=a.resolution;const k=a.clone();k.pixelRatio=d;c.pixelRatio=d;p.state=k;c.x=a.viewpoint.targetGeometry.x-Math.abs(a.extent.xmax-a.extent.xmin)/2;c.y=a.viewpoint.targetGeometry.y+Math.abs(a.extent.ymax-a.extent.ymin)/2;this._layerView.render(p);c.source=h;c.rotation=a.rotation;f.prototype.doRender.call(this,{...b,state:k})};n._createCustomRenderParams=function(b){return{globalOpacity:b.globalOpacity,
state:b.state,stationary:b.stationary,pixelRatio:window.devicePixelRatio,context:this._context}};return g}(e.BitmapContainer);l.Display=e;Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
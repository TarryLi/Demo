// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/set ../../../core/accessorSupport/decorators/subclass ../engine/BitmapTileContainer".split(" "),function(c,g,h,m,n,p,q,r,k,l){c.BitmapTileLayerView2D=a=>{a=function(d){function b(){return d.apply(this,arguments)||this}g._inheritsLoose(b,d);var e=b.prototype;e.attach=function(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`);
this._bitmapView=new l.BitmapTileContainer(this._tileInfoView);this.container.addChild(this._bitmapView)};e.detach=function(){var f;this.container.removeChild(this._bitmapView);null==(f=this._bitmapView)?void 0:f.removeAllChildren()};return b}(a);return a=h.__decorate([k.subclass("esri.views.2d.layers.BitmapTileLayerView2D")],a)};Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
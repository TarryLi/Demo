// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../views/2d/engine/webgl/enums","../../views/2d/engine/webgl/materialKey/MaterialKey"],function(g,l,d,m){const n={marker:d.WGLGeometryType.MARKER,fill:d.WGLGeometryType.FILL,line:d.WGLGeometryType.LINE,text:d.WGLGeometryType.TEXT};let q=function(){function f(c,a,h,p){const e={minScale:null==a?void 0:a.minScale,maxScale:null==a?void 0:a.maxScale};var k=e.minScale||e.maxScale?e.minScale+"-"+e.maxScale:"";this.layers=c;this.data=a;this.hash=
this._createHash()+k;this.rendererKey=h;a={isOutline:!1,placement:null,symbologyType:d.WGLSymbologyType.DEFAULT,vvFlags:h};for(const b of c)c=n[b.type],a.isOutline="line"===b.type&&b.isOutline,b.materialKey=m.createMaterialKey(c,a),b.maxVVSize=p,b.scaleInfo=e,b.templateHash+=k}f.prototype._createHash=function(){let c="";for(const a of this.layers)c+=a.templateHash;return c};l._createClass(f,[{key:"type",get:function(){return"expanded-cim"}}]);return f}();g.ExpandedCIM=q;Object.defineProperties(g,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
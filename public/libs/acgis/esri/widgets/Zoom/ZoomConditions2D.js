// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(g,c,a,d,l,m,n,k){a=function(h){function e(){return h.apply(this,arguments)||this}g._inheritsLoose(e,h);g._createClass(e,[{key:"canZoomIn",get:function(){if(!this.get("view.ready"))return!1;const f=this.get("view.animation.target.scale")||
this.get("view.scale"),b=this.get("view.constraints.effectiveMaxScale");return 0===b||f>b}},{key:"canZoomOut",get:function(){if(!this.get("view.ready"))return!1;const f=this.get("view.animation.target.scale")||this.get("view.scale"),b=this.get("view.constraints.effectiveMinScale");return 0===b||f<b}}]);return e}(a);c.__decorate([d.property({readOnly:!0})],a.prototype,"canZoomIn",null);c.__decorate([d.property({readOnly:!0})],a.prototype,"canZoomOut",null);c.__decorate([d.property()],a.prototype,"view",
void 0);return a=c.__decorate([k.subclass("esri.widgets.Zoom.ZoomConditions2D")],a)});
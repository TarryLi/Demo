// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass".split(" "),function(l,c,b,f,n,p,q,m){var d;b=d=function(g){function e(){var a=g.apply(this,arguments)||this;a.enabled=!0;a.rotationEnabled=!0;return a}l._inheritsLoose(e,g);var h=e.prototype;h.constrain=function(a,k){if(!this.enabled||
!k)return a;this.rotationEnabled||(a.rotation=k.rotation);return a};h.clone=function(){return new d({enabled:this.enabled,rotationEnabled:this.rotationEnabled})};return e}(b);c.__decorate([f.property()],b.prototype,"enabled",void 0);c.__decorate([f.property()],b.prototype,"rotationEnabled",void 0);return b=d=c.__decorate([m.subclass("esri.views.2d.constraints.RotationConstraint")],b)});
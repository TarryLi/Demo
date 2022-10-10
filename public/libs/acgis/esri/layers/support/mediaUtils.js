// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../geometry/Polygon ../../geometry/projection ../../geometry/support/aaBoundingRect ../../geometry/support/normalizeUtilsSync".split(" "),function(a,g,b,l,e,d,t,u,v,m,n,p,h,q){a.MediaElementView=function(k){function f(c){return k.call(this,
c)||this}g._inheritsLoose(f,k);g._createClass(f,[{key:"bounds",get:function(){const c=this.coords;return e.isNone(c)?null:h.fromExtent(c.extent)}},{key:"coords",get:function(){var c;const r=null==(c=e.unwrap(this.element.georeference))?void 0:c.coords;return p.projectOrLoad(r,this.spatialReference).geometry}},{key:"normalizedCoords",get:function(){return n.fromJSON(q.normalizeCentralMeridianSync(this.coords))}},{key:"normalizedBounds",get:function(){return e.isSome(this.normalizedCoords)?h.fromExtent(this.normalizedCoords.extent):
null}}]);return f}(l);b.__decorate([d.property()],a.MediaElementView.prototype,"spatialReference",void 0);b.__decorate([d.property()],a.MediaElementView.prototype,"element",void 0);b.__decorate([d.property()],a.MediaElementView.prototype,"bounds",null);b.__decorate([d.property()],a.MediaElementView.prototype,"coords",null);b.__decorate([d.property()],a.MediaElementView.prototype,"normalizedCoords",null);b.__decorate([d.property()],a.MediaElementView.prototype,"normalizedBounds",null);a.MediaElementView=
b.__decorate([m.subclass("esri.layers.support.media.MediaElementView")],a.MediaElementView);Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
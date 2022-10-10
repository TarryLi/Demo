// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../geometry/Point ../../geometry/Polygon ../../geometry/projection ./GeoreferenceBase".split(" "),function(p,e,d,h,b,v,w,r,k,t,m,u){b=function(q){function n(a){a=q.call(this,a)||this;a.bottomLeft=null;a.bottomRight=null;a.topLeft=null;a.topRight=
null;a.type="corners";return a}p._inheritsLoose(n,q);p._createClass(n,[{key:"coords",get:function(){let {topLeft:a,topRight:f,bottomLeft:c,bottomRight:g}=this;if(d.isNone(a)||d.isNone(f)||d.isNone(c)||d.isNone(g))return null;const l=a.spatialReference;f=m.projectOrLoad(f,l).geometry;c=m.projectOrLoad(c,l).geometry;g=m.projectOrLoad(g,l).geometry;return d.isNone(f)||d.isNone(c)||d.isNone(g)?null:new t({rings:[[[c.x,c.y],[a.x,a.y],[f.x,f.y],[g.x,g.y],[c.x,c.y]]],spatialReference:l})}}]);return n}(u);
e.__decorate([h.property({readOnly:!0})],b.prototype,"coords",null);e.__decorate([h.property({type:k})],b.prototype,"bottomLeft",void 0);e.__decorate([h.property({type:k})],b.prototype,"bottomRight",void 0);e.__decorate([h.property({type:k})],b.prototype,"topLeft",void 0);e.__decorate([h.property({type:k})],b.prototype,"topRight",void 0);return b=e.__decorate([r.subclass("esri.layers.support.CornersGeoreference")],b)});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/maybe ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./Symbol3DLayer ./edges/utils ./support/Symbol3DMaterial".split(" "),function(h,c,k,d,a,r,t,l,m,n,p,q){var e;a=e=function(g){function f(b){b=g.call(this,b)||this;b.type="extrude";b.size=1;b.material=null;b.castShadows=!0;b.edges=
null;return b}h._inheritsLoose(f,g);f.prototype.clone=function(){return new e({edges:this.edges&&this.edges.clone(),enabled:this.enabled,material:k.isSome(this.material)?this.material.clone():null,castShadows:this.castShadows,size:this.size})};return f}(n);c.__decorate([l.enumeration({Extrude:"extrude"},{readOnly:!0})],a.prototype,"type",void 0);c.__decorate([d.property({type:Number,json:{write:{enabled:!0,isRequired:!0}},nonNullable:!0})],a.prototype,"size",void 0);c.__decorate([d.property({type:q.Symbol3DMaterial,
json:{write:!0}})],a.prototype,"material",void 0);c.__decorate([d.property({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],a.prototype,"castShadows",void 0);c.__decorate([d.property(p.symbol3dEdgesProperty)],a.prototype,"edges",void 0);return a=e=c.__decorate([m.subclass("esri.symbols.ExtrudeSymbol3DLayer")],a)});
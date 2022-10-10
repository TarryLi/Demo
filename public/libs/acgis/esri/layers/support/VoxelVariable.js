// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./VoxelFormat".split(" "),function(h,b,a,d,l,m,n,k,e){a=function(f){function g(){var c=f.apply(this,arguments)||this;c.id=null;c.description="";c.name=null;c.originalFormat=null;c.renderingFormat=null;c.unit="";c.volumeId=0;c.type=null;return c}
h._inheritsLoose(g,f);return g}(a.JSONSupport);b.__decorate([d.property({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"id",void 0);b.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"description",void 0);b.__decorate([d.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"name",void 0);b.__decorate([d.property({type:e,json:{write:!0}})],a.prototype,"originalFormat",void 0);b.__decorate([d.property({type:e,json:{write:{enabled:!0,isRequired:!0}}})],
a.prototype,"renderingFormat",void 0);b.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"unit",void 0);b.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"volumeId",void 0);b.__decorate([d.property({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],a.prototype,"type",void 0);return a=b.__decorate([k.subclass("esri.layers.support.VoxelVariable")],a)});
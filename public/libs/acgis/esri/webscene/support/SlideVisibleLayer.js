// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(a,h,c,k,l,f,m,n){var d;a.SlideVisibleLayer=d=function(g){function e(b){b=g.call(this,b)||this;b.id="";b.sublayerIds=null;return b}h._inheritsLoose(e,g);e.prototype.clone=function(){return new d({id:this.id,sublayerIds:l.clone(this.sublayerIds)})};
return e}(k.JSONSupport);c.__decorate([f.property({type:String,json:{write:!0}})],a.SlideVisibleLayer.prototype,"id",void 0);c.__decorate([f.property({type:[m.Integer],json:{read:{source:"subLayerIds"},write:{target:"subLayerIds"}}})],a.SlideVisibleLayer.prototype,"sublayerIds",void 0);a.SlideVisibleLayer=d=c.__decorate([n.subclass("esri.webscene.support.SlideVisibleLayer")],a.SlideVisibleLayer);Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(h,d,c,a,e,l,m,n,k){c=new c.JSONMap({GPBoolean:"boolean",GPDataFile:"data-file",GPDate:"date",GPDouble:"double",GPFeatureRecordSetLayer:"feature-record-set-layer",GPField:"field",GPLinearUnit:"linear-unit",
GPLong:"long",GPRasterData:"raster-data",GPRasterDataLayer:"raster-data-layer",GPRecordSet:"record-set",GPString:"string","GPMultiValue:GPBoolean":"multi-value","GPMultiValue:GPDataFile":"multi-value","GPMultiValue:GPDate":"multi-value","GPMultiValue:GPDouble":"multi-value","GPMultiValue:GPFeatureRecordSetLayer":"multi-value","GPMultiValue:GPField":"multi-value","GPMultiValue:GPLinearUnit":"multi-value","GPMultiValue:GPLong":"multi-value","GPMultiValue:GPRasterData":"multi-value","GPMultiValue:GPRasterDataLayer":"multi-value",
"GPMultiValue:GPRecordSet":"multi-value","GPMultiValue:GPString":"multi-value"});a=function(f){function g(b){b=f.call(this,b)||this;b.dataType=null;b.value=null;return b}h._inheritsLoose(g,f);return g}(a.JSONSupport);d.__decorate([e.property({json:{read:c.read,write:c.write}})],a.prototype,"dataType",void 0);d.__decorate([e.property()],a.prototype,"value",void 0);return a=d.__decorate([k.subclass("esri.rest.support.ParameterValue")],a)});
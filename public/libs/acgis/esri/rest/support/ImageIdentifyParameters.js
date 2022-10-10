// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../TimeExtent ../../core/JSONSupport ../../core/lang ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../geometry/Point ../../geometry/support/jsonUtils ../../layers/support/MosaicRule ../../layers/support/RasterFunction".split(" "),function(p,c,u,b,v,q,d,z,w,h,x,y,r,m){var n;b=n=
function(t){function l(){var a=t.apply(this,arguments)||this;a.geometry=null;a.renderingRules=null;a.pixelSize=null;a.returnGeometry=!0;a.returnCatalogItems=!0;a.returnPixelValues=!0;a.maxItemCount=null;a.timeExtent=null;a.raster=void 0;a.viewId=void 0;a.processAsMultidimensional=!1;return a}p._inheritsLoose(l,t);var g=l.prototype;g.writeGeometry=function(a,e,f){null!=a&&(e.geometryType=y.getJsonType(a),e[f]=JSON.stringify(a.toJSON()))};g.writeMosaicRule=function(a,e,f){null!=a&&(e[f]=JSON.stringify(a.toJSON()))};
g.writeRenderingRule=function(a,e,f){null!=a&&(e[f]=JSON.stringify(a.toJSON()));a.rasterFunctionDefinition&&(e[f]=JSON.stringify(a.rasterFunctionDefinition))};g.writeRenderingRules=function(a,e,f){null!=a&&(e[f]=JSON.stringify(a.map(k=>k.rasterFunctionDefinition||k.toJSON())))};g.writePixelSize=function(a,e,f){null!=a&&(e[f]=JSON.stringify(a))};g.writeTimeExtent=function(a,e,f){if(null!=a){const k=q.isSome(a.start)?a.start.getTime():null;a=q.isSome(a.end)?a.end.getTime():null;e[f]=null!=k?null!=a?
`${k},${a}`:`${k}`:null}};g.clone=function(){return new n(v.clone({geometry:this.geometry,mosaicRule:this.mosaicRule,renderingRule:this.renderingRule,pixelSize:this.pixelSize,returnGeometry:this.returnGeometry,returnCatalogItems:this.returnCatalogItems,returnPixelValues:this.returnPixelValues,maxItemCount:this.maxItemCount,processAsMultidimensional:this.processAsMultidimensional,raster:this.raster,viewId:this.viewId,timeExtent:this.timeExtent}))};p._createClass(l,[{key:"mosaicRule",set:function(a){a&&
a.mosaicMethod&&(a=r.fromJSON({...a.toJSON(),mosaicMethod:a.mosaicMethod,mosaicOperation:a.mosaicOperation}));this._set("mosaicRule",a)}},{key:"renderingRule",set:function(a){a&&a.rasterFunction&&(a=m.fromJSON({...a.toJSON(),rasterFunction:a.rasterFunction,rasterFunctionArguments:a.rasterFunctionArguments}));this._set("renderingRule",a)}}]);return l}(b.JSONSupport);c.__decorate([d.property({json:{write:!0}})],b.prototype,"geometry",void 0);c.__decorate([h.writer("geometry")],b.prototype,"writeGeometry",
null);c.__decorate([d.property({type:r,json:{write:!0}})],b.prototype,"mosaicRule",null);c.__decorate([h.writer("mosaicRule")],b.prototype,"writeMosaicRule",null);c.__decorate([d.property({type:m,json:{write:!0}})],b.prototype,"renderingRule",null);c.__decorate([h.writer("renderingRule")],b.prototype,"writeRenderingRule",null);c.__decorate([d.property({type:[m],json:{write:!0}})],b.prototype,"renderingRules",void 0);c.__decorate([h.writer("renderingRules")],b.prototype,"writeRenderingRules",null);
c.__decorate([d.property({type:x,json:{write:!0}})],b.prototype,"pixelSize",void 0);c.__decorate([h.writer("pixelSize")],b.prototype,"writePixelSize",null);c.__decorate([d.property({type:Boolean,json:{write:!0}})],b.prototype,"returnGeometry",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],b.prototype,"returnCatalogItems",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],b.prototype,"returnPixelValues",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],
b.prototype,"maxItemCount",void 0);c.__decorate([d.property({type:u,json:{write:{target:"time"}}})],b.prototype,"timeExtent",void 0);c.__decorate([h.writer("timeExtent")],b.prototype,"writeTimeExtent",null);c.__decorate([d.property({json:{write:!0}})],b.prototype,"raster",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"viewId",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],b.prototype,"processAsMultidimensional",void 0);return b=n=c.__decorate([w.subclass("esri.rest.support.ImageIdentifyParameters")],
b)});
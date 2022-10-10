// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/aliasOf ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ./imageryRendererUtils ./MosaicRule ./rasterEnums ./RasterFunction".split(" "),function(c,r,d,v,g,y,z,A,f,w,n,l,x,p,t){c.ExportImageServiceParameters=
function(u){function q(){var a=u.apply(this,arguments)||this;a.layer=null;a.adjustAspectRatio=void 0;a.bandIds=void 0;a.compression=void 0;a.compressionQuality=void 0;a.compressionTolerance=.01;a.interpolation=null;a.noData=null;a.noDataInterpretation=void 0;a.pixelType=void 0;a.lercVersion=2;return a}r._inheritsLoose(q,u);var h=q.prototype;h.writeAdjustAspectRatio=function(a,b,e){10.3>this.layer.version||(b[e]=a)};h.writeCompressionQuality=function(a,b,e){this.format&&this.format.toLowerCase().includes("jpg")&&
null!=a&&(b[e]=a)};h.writeCompressionTolerance=function(a,b,e){"lerc"===this.format&&null!=a&&(b[e]=a)};h.writeLercVersion=function(a,b,e){"lerc"===this.format&&10.5<=this.layer.version&&(b[e]=a)};h.combineRendererWithRenderingRule=function(){var a;const b=this.layer,{rasterInfo:e,renderingRule:k,renderer:m}=b;return m&&l.isSupportedRendererType(m)?l.combineRenderingRules(l.convertRendererToRenderingRule(m,{rasterAttributeTable:e.attributeTable,pixelType:e.pixelType,dataType:e.dataType,bandProperties:null==
(a=e.keyProperties)?void 0:a.BandProperties,convertColorRampToColormap:10.6>b.version,convertToRFT:null!=k&&k.rasterFunctionDefinition?!0:!1}),k):k};h._addResampleRasterFunction=function(a){var b;if("vector-field"!==(null==(b=this.layer.renderer)?void 0:b.type)||"Resample"===(null==a?void 0:a.functionName))return a;b=new t({functionName:"Resample",functionArguments:{ResamplingType:"esriImageServiceDataTypeVector-UV"===this.layer.serviceDataType?7:10,InputCellSize:{x:this.layer.pixelSizeX,y:this.layer.pixelSizeY}}});
b=null!=a&&a.rasterFunctionDefinition?new t({rasterFunctionDefinition:l.convertRenderingRuleToRFT(b)}):b;return l.combineRenderingRules(b,a)};r._createClass(q,[{key:"format",get:function(){var a;return"vector-field"===(null==(a=this.layer.renderer)?void 0:a.type)?"lerc":this.layer.format}},{key:"version",get:function(){const a=this.layer;a.commitProperty("bandIds");a.commitProperty("format");a.commitProperty("compressionQuality");a.commitProperty("compressionTolerance");a.commitProperty("interpolation");
a.commitProperty("noData");a.commitProperty("noDataInterpretation");a.commitProperty("mosaicRule");a.commitProperty("renderingRule");a.commitProperty("adjustAspectRatio");a.commitProperty("pixelFilter");a.commitProperty("renderer");a.commitProperty("definitionExpression");return(this._get("version")||0)+1},set:function(a){this._set("version",a)}},{key:"mosaicRule",get:function(){var a=this.layer;let b=a.mosaicRule;a=a.definitionExpression;b?a&&a!==b.where&&(b=b.clone(),b.where=a):a&&(b=new x({where:a}));
return b}},{key:"renderingRule",get:function(){var a;const b=this.layer;let e=b.renderingRule;const k=b.pixelFilter,m=!b.format||b.format.includes("jpg")||b.format.includes("png");e=this._addResampleRasterFunction(e);m&&!k&&"vector-field"!==(null==(a=b.renderer)?void 0:a.type)&&(e=this.combineRendererWithRenderingRule());return e}}]);return q}(v.JSONSupport);d.__decorate([f.property()],c.ExportImageServiceParameters.prototype,"layer",void 0);d.__decorate([f.property({json:{write:!0}})],c.ExportImageServiceParameters.prototype,
"adjustAspectRatio",void 0);d.__decorate([n.writer("adjustAspectRatio")],c.ExportImageServiceParameters.prototype,"writeAdjustAspectRatio",null);d.__decorate([f.property({json:{write:!0}}),g.aliasOf("layer.bandIds")],c.ExportImageServiceParameters.prototype,"bandIds",void 0);d.__decorate([f.property({json:{write:!0}})],c.ExportImageServiceParameters.prototype,"compression",void 0);d.__decorate([f.property({json:{write:!0}}),g.aliasOf("layer.compressionQuality")],c.ExportImageServiceParameters.prototype,
"compressionQuality",void 0);d.__decorate([n.writer("compressionQuality")],c.ExportImageServiceParameters.prototype,"writeCompressionQuality",null);d.__decorate([f.property({json:{write:!0}}),g.aliasOf("layer.compressionTolerance")],c.ExportImageServiceParameters.prototype,"compressionTolerance",void 0);d.__decorate([n.writer("compressionTolerance")],c.ExportImageServiceParameters.prototype,"writeCompressionTolerance",null);d.__decorate([f.property({json:{write:!0}})],c.ExportImageServiceParameters.prototype,
"format",null);d.__decorate([f.property({type:String,json:{read:{reader:p.interpolationKebab.read},write:{writer:p.interpolationKebab.write}}}),g.aliasOf("layer.interpolation")],c.ExportImageServiceParameters.prototype,"interpolation",void 0);d.__decorate([f.property({json:{write:!0}}),g.aliasOf("layer.noData")],c.ExportImageServiceParameters.prototype,"noData",void 0);d.__decorate([f.property({type:String,json:{read:{reader:p.noDataInterpretationKebab.read},write:{writer:p.noDataInterpretationKebab.write}}}),
g.aliasOf("layer.noDataInterpretation")],c.ExportImageServiceParameters.prototype,"noDataInterpretation",void 0);d.__decorate([f.property({json:{write:!0}})],c.ExportImageServiceParameters.prototype,"pixelType",void 0);d.__decorate([f.property({json:{write:!0}})],c.ExportImageServiceParameters.prototype,"lercVersion",void 0);d.__decorate([n.writer("lercVersion")],c.ExportImageServiceParameters.prototype,"writeLercVersion",null);d.__decorate([f.property({type:Number})],c.ExportImageServiceParameters.prototype,
"version",null);d.__decorate([f.property({json:{write:!0}})],c.ExportImageServiceParameters.prototype,"mosaicRule",null);d.__decorate([f.property({json:{write:!0}})],c.ExportImageServiceParameters.prototype,"renderingRule",null);c.ExportImageServiceParameters=d.__decorate([w.subclass("esri.layers.mixins.ExportImageServiceParameters")],c.ExportImageServiceParameters);Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
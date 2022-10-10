// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/jsonMap ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/ensureType ../../geometry/Point ./DimensionalDefinition ./RasterFunction".split(" "),function(r,c,b,t,f,e,u,k,v,p,w,x,y){var l;const g=b.strict()({MT_FIRST:"first",
MT_LAST:"last",MT_MIN:"min",MT_MAX:"max",MT_MEAN:"mean",MT_BLEND:"blend",MT_SUM:"sum"}),m=b.strict()({esriMosaicNone:"none",esriMosaicCenter:"center",esriMosaicNadir:"nadir",esriMosaicViewpoint:"viewpoint",esriMosaicAttribute:"attribute",esriMosaicLockRaster:"lock-raster",esriMosaicNorthwest:"northwest",esriMosaicSeamline:"seamline"});b=l=function(q){function n(a){a=q.call(this,a)||this;a.ascending=!0;a.itemRenderingRule=null;a.lockRasterIds=null;a.method=null;a.multidimensionalDefinition=null;a.objectIds=
null;a.operation=null;a.sortField=null;a.sortValue=null;a.viewpoint=null;a.where=null;return a}r._inheritsLoose(n,q);var h=n.prototype;h.readAscending=function(a,d){return null!=d.ascending?d.ascending:null!=d.sortAscending?d.sortAscending:!0};h.readMethod=function(a,d){a=d.mosaicMethod||d.defaultMosaicMethod;switch(a?a.toLowerCase().replace("esrimosaic",""):""){case "byattribute":case "attribute":a="esriMosaicAttribute";break;case "lockraster":a="esriMosaicLockRaster";break;case "center":a="esriMosaicCenter";
break;case "northwest":a="esriMosaicNorthwest";break;case "nadir":a="esriMosaicNadir";break;case "viewpoint":a="esriMosaicViewpoint";break;case "seamline":a="esriMosaicSeamline";break;case "none":a="esriMosaicNone";break;default:a="esriMosaicNone"}return a=m.fromJSON(a)};h.readOperation=function(a,d){a=d.mosaicOperation;d=d.mosaicOperator&&d.mosaicOperator.toLowerCase();d=a||(d?g.toJSON(d):null);return g.fromJSON(d)||"first"};h.castSortValue=function(a){return null==a||"string"===typeof a||"number"===
typeof a?a:`${a}`};h.clone=function(){return new l({ascending:this.ascending,itemRenderingRule:f.clone(this.itemRenderingRule),lockRasterIds:f.clone(this.lockRasterIds),method:this.method,multidimensionalDefinition:f.clone(this.multidimensionalDefinition),objectIds:f.clone(this.objectIds),operation:this.operation,sortField:this.sortField,sortValue:this.sortValue,viewpoint:f.clone(this.viewpoint),where:this.where})};return n}(t.JSONSupport);c.__decorate([e.property({type:Boolean,json:{write:!0}})],
b.prototype,"ascending",void 0);c.__decorate([k.reader("ascending",["ascending","sortAscending"])],b.prototype,"readAscending",null);c.__decorate([e.property({type:y,json:{write:!0}})],b.prototype,"itemRenderingRule",void 0);c.__decorate([e.property({type:[p.Integer],json:{write:{overridePolicy(){return{enabled:"lock-raster"===this.method}}}}})],b.prototype,"lockRasterIds",void 0);c.__decorate([e.property({type:String,json:{type:m.jsonValues,write:{target:"mosaicMethod",writer:m.write}}})],b.prototype,
"method",void 0);c.__decorate([k.reader("method",["mosaicMethod","defaultMosaicMethod"])],b.prototype,"readMethod",null);c.__decorate([e.property({type:[x],json:{write:!0}})],b.prototype,"multidimensionalDefinition",void 0);c.__decorate([e.property({type:[p.Integer],json:{name:"fids",write:!0}})],b.prototype,"objectIds",void 0);c.__decorate([e.property({json:{type:g.jsonValues,read:{reader:g.read},write:{target:"mosaicOperation",writer:g.write}}})],b.prototype,"operation",void 0);c.__decorate([k.reader("operation",
["mosaicOperation","mosaicOperator"])],b.prototype,"readOperation",null);c.__decorate([e.property({type:String,json:{write:{overridePolicy(){return{enabled:"attribute"===this.method}}}}})],b.prototype,"sortField",void 0);c.__decorate([e.property({type:[String,Number],json:{write:{allowNull:!0,overridePolicy(){return{enabled:"attribute"===this.method,allowNull:!0}}}}})],b.prototype,"sortValue",void 0);c.__decorate([u.cast("sortValue")],b.prototype,"castSortValue",null);c.__decorate([e.property({type:w,
json:{write:!0}})],b.prototype,"viewpoint",void 0);c.__decorate([e.property({type:String,json:{write:!0}})],b.prototype,"where",void 0);return b=l=c.__decorate([v.subclass("esri.layers.support.MosaicRule")],b)});
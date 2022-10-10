// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer".split(" "),function(v,f,z,l,k,D,A,w,B,C){var r;const m=new Set(["raster","raster2","dem","fillraster"]),n=new Set(["rasters"]),
x=d=>d&&d.rasterFunction?e.fromJSON(d):d,t=d=>d&&d instanceof e?d.toJSON():d,u=d=>(null==d?void 0:d.functionName)&&!d.declaredClass,y=d=>u(d)?new e(d):d;let e=r=function(d){function p(a){a=d.call(this,a)||this;a.functionName=null;a.outputPixelType="unknown";a.variableName=null;a.rasterFunctionDefinition=null;return a}v._inheritsLoose(p,d);var q=p.prototype;q.readFunctionArguments=function(a){if(null==a)var b=null;else{a=l.clone(a);var c={};for(b of Object.keys(a))m.has(b.toLowerCase())?c[b]=x(a[b]):
n.has(b.toLowerCase())&&Array.isArray(a[b])?c[b]=a[b].map(x):c[b]=a[b];b=c}return b};q.writeFunctionArguments=function(a,b,c){const h={};for(const g of Object.keys(a))m.has(g.toLowerCase())?h[g]=t(a[g]):n.has(g.toLowerCase())&&Array.isArray(a[g])?h[g]=a[g].map(t):h[g]=t(a[g]);b[c]=h};q.readFunctionName=function(a,b){a=b.rasterFunctionInfos;const c=b.name;return c?c:a&&a.length&&"None"!==a[0].name?a[0].name:b.rasterFunctionDefinition?b.rasterFunctionDefinition.name:b.rasterFunction};q.clone=function(){return new r({functionName:this.functionName,
functionArguments:l.clone(this.functionArguments),outputPixelType:this.outputPixelType,variableName:this.variableName,rasterFunctionDefinition:l.clone(this.rasterFunctionDefinition)})};v._createClass(p,[{key:"functionArguments",set:function(a){if(a){const b=Object.keys(a);if(b.some(c=>m.has(c.toLowerCase())&&u(a[c]))||b.some(c=>n.has(c.toLowerCase())&&Array.isArray(a[c])&&a[c].some(h=>u(h)))){a=l.clone(a);for(const c of b)m.has(c.toLowerCase())?a[c]=y(a[c]):n.has(c.toLowerCase())&&Array.isArray(a[c])&&
(a[c]=a[c].map(h=>y(h)))}}this._set("functionArguments",a)}}]);return p}(z.JSONSupport);f.__decorate([k.property({json:{type:Object,name:"rasterFunctionArguments"}})],e.prototype,"functionArguments",null);f.__decorate([w.reader("functionArguments")],e.prototype,"readFunctionArguments",null);f.__decorate([C.writer("functionArguments")],e.prototype,"writeFunctionArguments",null);f.__decorate([k.property({json:{type:String,write:{target:"rasterFunction"}}})],e.prototype,"functionName",void 0);f.__decorate([w.reader("functionName",
["rasterFunction","rasterFunctionInfos","rasterFunctionDefinition"])],e.prototype,"readFunctionName",null);f.__decorate([A.enumeration({C128:"c128",C64:"c64",F32:"f32",F64:"f64",S16:"s16",S32:"s32",S8:"s8",U1:"u1",U16:"u16",U2:"u2",U32:"u32",U4:"u4",U8:"u8",UNKNOWN:"unknown"},{ignoreUnknown:!1}),k.property({json:{default:"unknown"}})],e.prototype,"outputPixelType",void 0);f.__decorate([k.property({type:String,json:{read:!0,write:!0}})],e.prototype,"variableName",void 0);f.__decorate([k.property({type:Object,
json:{name:"rasterFunctionDefinition"}})],e.prototype,"rasterFunctionDefinition",void 0);return e=r=f.__decorate([B.subclass("esri.layers.support.RasterFunction")],e)});
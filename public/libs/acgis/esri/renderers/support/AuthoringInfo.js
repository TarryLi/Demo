// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/jsonMap ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ./AuthoringInfoFieldInfo ./AuthoringInfoVisualVariable ../../rest/support/colorRamps".split(" "),function(p,c,g,b,m,d,v,w,x,q,y,r){var n;const f=new g.JSONMap({esriClassifyDefinedInterval:"defined-interval",
esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation"}),h=new g.JSONMap({pieChart:"pie-chart",classedSize:"class-breaks-size",classedColor:"class-breaks-color",univariateColorSize:"univariate-color-size",relationship:"relationship",predominance:"predominance",dotDensity:"dot-density",flow:"flow"});g=new g.JSONMap({classedSize:"class-breaks-size",classedColor:"class-breaks-color",
univariateColorSize:"univariate-color-size",relationship:"relationship",predominance:"predominance",dotDensity:"dot-density"});const t="inches feet yards miles nautical-miles millimeters centimeters decimeters meters kilometers decimal-degrees".split(" ");b=n=function(k){function l(a){a=k.call(this,a)||this;a.colorRamp=null;a.lengthUnit=null;a.maxSliderValue=null;a.minSliderValue=null;a.visualVariables=null;return a}p._inheritsLoose(l,k);var u=l.prototype;u.readColorRamp=function(a){if(a)return r.fromJSON(a)};
u.clone=function(){return new n({classificationMethod:this.classificationMethod,colorRamp:m.clone(this.colorRamp),fields:this.fields&&this.fields.slice(0),field1:m.clone(this.field1),field2:m.clone(this.field2),focus:this.focus,numClasses:this.numClasses,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,lengthUnit:this.lengthUnit,statistics:this.statistics,standardDeviationInterval:this.standardDeviationInterval,type:this.type,visualVariables:this.visualVariables&&this.visualVariables.map(a=>
a.clone()),univariateSymbolStyle:this.univariateSymbolStyle,univariateTheme:this.univariateTheme,flowTheme:this.flowTheme})};p._createClass(l,[{key:"classificationMethod",get:function(){const a=this._get("classificationMethod"),e=this.type;return e&&"relationship"!==e?"class-breaks-size"===e||"class-breaks-color"===e?a||"manual":null:a},set:function(a){this._set("classificationMethod",a)}},{key:"fields",get:function(){return this.type&&"predominance"!==this.type?null:this._get("fields")},set:function(a){this._set("fields",
a)}},{key:"field1",get:function(){return this.type&&"relationship"!==this.type?null:this._get("field1")},set:function(a){this._set("field1",a)}},{key:"field2",get:function(){return this.type&&"relationship"!==this.type?null:this._get("field2")},set:function(a){this._set("field2",a)}},{key:"flowTheme",get:function(){return"flow"===this.type?this._get("flowTheme"):null},set:function(a){this._set("flowTheme",a)}},{key:"focus",get:function(){return this.type&&"relationship"!==this.type?null:this._get("focus")},
set:function(a){this._set("focus",a)}},{key:"numClasses",get:function(){return this.type&&"relationship"!==this.type?null:this._get("numClasses")},set:function(a){this._set("numClasses",a)}},{key:"statistics",get:function(){return"univariate-color-size"===this.type&&"above-and-below"===this.univariateTheme?this._get("statistics"):null},set:function(a){this._set("statistics",a)}},{key:"standardDeviationInterval",get:function(){const a=this.type;return a&&"relationship"!==a&&"class-breaks-size"!==a&&
"class-breaks-color"!==a?null:this.classificationMethod&&"standard-deviation"!==this.classificationMethod?null:this._get("standardDeviationInterval")},set:function(a){this._set("standardDeviationInterval",a)}},{key:"type",get:function(){return this._get("type")},set:function(a){let e=a;"classed-size"===a?e="class-breaks-size":"classed-color"===a&&(e="class-breaks-color");this._set("type",e)}},{key:"univariateSymbolStyle",get:function(){return"univariate-color-size"===this.type&&"above-and-below"===
this.univariateTheme?this._get("univariateSymbolStyle"):null},set:function(a){this._set("univariateSymbolStyle",a)}},{key:"univariateTheme",get:function(){return"univariate-color-size"===this.type?this._get("univariateTheme"):null},set:function(a){this._set("univariateTheme",a)}}]);return l}(b.JSONSupport);c.__decorate([d.property({type:f.apiValues,value:null,json:{type:f.jsonValues,read:f.read,write:f.write,origins:{"web-document":{default:"manual",type:f.jsonValues,read:f.read,write:f.write}}}})],
b.prototype,"classificationMethod",null);c.__decorate([d.property({types:r.types,json:{write:!0}})],b.prototype,"colorRamp",void 0);c.__decorate([w.reader("colorRamp")],b.prototype,"readColorRamp",null);c.__decorate([d.property({type:[String],value:null,json:{write:!0}})],b.prototype,"fields",null);c.__decorate([d.property({type:q.AuthoringInfoFieldInfo,value:null,json:{write:!0}})],b.prototype,"field1",null);c.__decorate([d.property({type:q.AuthoringInfoFieldInfo,value:null,json:{write:!0}})],b.prototype,
"field2",null);c.__decorate([d.property({type:["flow-line","wave-front"],value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],b.prototype,"flowTheme",null);c.__decorate([d.property({type:["HH","HL","LH","LL"],value:null,json:{write:!0}})],b.prototype,"focus",null);c.__decorate([d.property({type:Number,value:null,json:{type:v.Integer,write:!0}})],b.prototype,"numClasses",null);c.__decorate([d.property({type:t,json:{type:t,read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],b.prototype,
"lengthUnit",void 0);c.__decorate([d.property({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],b.prototype,"maxSliderValue",void 0);c.__decorate([d.property({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],b.prototype,"minSliderValue",void 0);c.__decorate([d.property({type:Object,value:null,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],b.prototype,"statistics",null);c.__decorate([d.property({type:[.25,.33,.5,1],value:null,json:{type:[.25,
.33,.5,1],write:!0}})],b.prototype,"standardDeviationInterval",null);c.__decorate([d.property({type:h.apiValues,value:null,json:{type:h.jsonValues,read:h.read,write:h.write,origins:{"web-scene":{type:g.jsonValues,write:{writer:g.write,overridePolicy(k){return{enabled:"flow"!==k}}}}}}})],b.prototype,"type",null);c.__decorate([d.property({type:[y],json:{write:!0}})],b.prototype,"visualVariables",void 0);c.__decorate([d.property({type:"caret circle-caret arrow circle-arrow plus-minus circle-plus-minus square circle triangle happy-sad thumb custom".split(" "),
value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],b.prototype,"univariateSymbolStyle",null);c.__decorate([d.property({type:["high-to-low","above-and-below","above","below","90-10"],value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],b.prototype,"univariateTheme",null);return b=n=c.__decorate([x.subclass("esri.renderers.support.AuthoringInfo")],b)});
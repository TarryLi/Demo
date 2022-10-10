// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Error ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ./VisualVariable".split(" "),function(h,c,m,d,a,r,t,n,p,q){var g;a=g=function(k){function e(b){b=k.call(this,b)||this;b.axis=null;b.type="rotation";b.rotationType="geographic";b.valueExpressionTitle=null;
return b}h._inheritsLoose(e,k);var l=e.prototype;l.writeValueExpressionTitleWebScene=function(b,u,v,f){f&&f.messages&&f.messages.push(new m("property:unsupported",this.type+"VisualVariable.valueExpressionTitle is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:`visualVariables[${this.index}]`+".valueExpressionTitle",context:f}))};l.clone=function(){return new g({axis:this.axis,rotationType:this.rotationType,field:this.field,valueExpression:this.valueExpression,
valueExpressionTitle:this.valueExpressionTitle,legendOptions:this.legendOptions&&this.legendOptions.clone()})};h._createClass(e,[{key:"cache",get:function(){return{hasExpression:!!this.valueExpression,compiledFunc:null}}}]);return e}(q);c.__decorate([d.property({readOnly:!0})],a.prototype,"cache",null);c.__decorate([d.property({type:["heading","tilt","roll"],json:{origins:{"web-scene":{default:"heading",write:!0}}}})],a.prototype,"axis",void 0);c.__decorate([d.property({type:["rotation"],json:{type:["rotationInfo"]}})],
a.prototype,"type",void 0);c.__decorate([d.property({type:["geographic","arithmetic"],json:{write:!0,origins:{"web-document":{write:!0,default:"geographic"}}}})],a.prototype,"rotationType",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"valueExpressionTitle",void 0);c.__decorate([p.writer("web-scene","valueExpressionTitle")],a.prototype,"writeValueExpressionTitleWebScene",null);return a=g=c.__decorate([n.subclass("esri.renderers.visualVariables.RotationVariable")],a)});
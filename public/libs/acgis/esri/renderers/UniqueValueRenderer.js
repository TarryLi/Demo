// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../symbols ../core/Error ../core/lang ../core/Logger ../core/maybe ../core/object ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/cast ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../core/accessorSupport/diffUtils ../core/accessorSupport/ensureType ../layers/support/fieldUtils ../portal/Portal ./Renderer ./mixins/VisualVariablesMixin ./support/commonProperties ./support/LegendOptions ./support/UniqueValueInfo ../support/arcadeOnDemand ../chunks/persistableUrlUtils ../symbols/support/styleUtils ../symbols/WebStyleSymbol".split(" "),
function(q,f,F,G,r,e,n,H,k,I,J,y,K,z,L,A,v,x,M,N,B,O,w,C,D,P,Q){var u;const p=e.getLogger("esri.renderers.UniqueValueRenderer"),R=A.ensureType(w);e=u=function(E){function t(a){a=E.call(this,a)||this;a._valueInfoMap={};a._isDefaultSymbolDerived=!1;a.type="unique-value";a.backgroundFillSymbol=null;a.field=null;a.field2=null;a.field3=null;a.valueExpression=null;a.valueExpressionTitle=null;a.legendOptions=null;a.defaultLabel=null;a.fieldDelimiter=null;a.portal=null;a.styleOrigin=null;a.diff={uniqueValueInfos(b,
c){if(b||c){if(!b||!c)return{type:"complete",oldValue:b,newValue:c};var d=!1,h={type:"collection",added:[],removed:[],changed:[],unchanged:[]};for(let l=0;l<c.length;l++){const m=b.find(S=>S.value===c[l].value);m?L.diff(m,c[l])?(h.changed.push({type:"complete",oldValue:m,newValue:c[l]}),d=!0):h.unchanged.push({oldValue:m,newValue:c[l]}):(h.added.push(c[l]),d=!0)}for(let l=0;l<b.length;l++)c.find(m=>m.value===b[l].value)||(h.removed.push(b[l]),d=!0);return d?h:void 0}}};a._set("uniqueValueInfos",[]);
return a}q._inheritsLoose(t,E);var g=t.prototype;g.castField=function(a){return null==a||"function"===typeof a?a:A.ensureString(a)};g.writeField=function(a,b,c,d){"string"===typeof a?b[c]=a:d&&d.messages?d.messages.push(new G("property:unsupported","UniqueValueRenderer.field set to a function cannot be written to JSON")):p.error(".field: cannot write field to JSON since it's not a string value")};g.readPortal=function(a,b,c){return c.portal||x.getDefault()};g.readStyleOrigin=function(a,b,c){if(b.styleName)return Object.freeze({styleName:b.styleName});
if(b.styleUrl)return a=D.fromJSON(b.styleUrl,c),Object.freeze({styleUrl:a})};g.writeStyleOrigin=function(a,b,c,d){a.styleName?b.styleName=a.styleName:a.styleUrl&&(b.styleUrl=D.toJSON(a.styleUrl,d))};g.addUniqueValueInfo=function(a,b){this.styleOrigin?p.error("#addUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style"):(a="object"===typeof a?R(a):new w({value:a,symbol:F.ensureType(b)}),this.uniqueValueInfos.push(a),this._valueInfoMap[a.value]=a)};g.removeUniqueValueInfo=
function(a){if(this.styleOrigin)p.error("#removeUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style");else for(let b=0;b<this.uniqueValueInfos.length;b++)if(this.uniqueValueInfos[b].value===a+""){delete this._valueInfoMap[a];this.uniqueValueInfos.splice(b,1);break}};g.getUniqueValueInfo=function(){var a=q._asyncToGenerator(function*(b,c){let d=c;this.valueExpression&&(n.isNone(c)||n.isNone(c.arcade))&&(d={...d,arcade:yield C.loadArcade()});return this._getUniqueValueInfo(b,
d)});return function(b,c){return a.apply(this,arguments)}}();g.getSymbol=function(a,b){if(this.valueExpression&&(n.isNone(b)||n.isNone(b.arcade)))p.error("#getSymbol()","Please use getSymbolAsync if valueExpression is used");else return(a=this._getUniqueValueInfo(a,b))&&a.symbol||this.defaultSymbol};g.getSymbolAsync=function(){var a=q._asyncToGenerator(function*(b,c){if(this.valueExpression&&(n.isNone(c)||n.isNone(c.arcade))){const d=yield C.loadArcade(),{arcadeUtils:h}=d;h.hasGeometryOperations(this.valueExpression)&&
(yield h.enableGeometryOperations());c={...c,arcade:d}}return(b=this._getUniqueValueInfo(b,c))&&b.symbol||this.defaultSymbol});return function(b,c){return a.apply(this,arguments)}}();g.getSymbols=function(){const a=[];for(const b of this.uniqueValueInfos)b.symbol&&a.push(b.symbol);this.defaultSymbol&&a.push(this.defaultSymbol);return a};g.getAttributeHash=function(){return this.visualVariables&&this.visualVariables.reduce((a,b)=>a+b.getAttributeHash(),"")};g.getMeshHash=function(){const a=JSON.stringify(this.backgroundFillSymbol),
b=JSON.stringify(this.defaultSymbol),c=this.uniqueValueInfos.reduce((d,h)=>d+h.getMeshHash(),"");return`${a}.${b}.${c}.${`${this.field}.${this.field2}.${this.field3}.${this.fieldDelimiter}`}.${this.valueExpression}`};g.clone=function(){const a=new u({field:this.field,field2:this.field2,field3:this.field3,defaultLabel:this.defaultLabel,defaultSymbol:r.clone(this.defaultSymbol),valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,fieldDelimiter:this.fieldDelimiter,visualVariables:r.clone(this.visualVariables),
legendOptions:r.clone(this.legendOptions),authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),backgroundFillSymbol:r.clone(this.backgroundFillSymbol)});this._isDefaultSymbolDerived&&(a._isDefaultSymbolDerived=!0);a._set("portal",this.portal);const b=r.clone(this.uniqueValueInfos);this.styleOrigin&&(a._set("styleOrigin",Object.freeze(r.clone(this.styleOrigin))),Object.freeze(b));a._set("uniqueValueInfos",b);a._updateValueInfoMap();return a};g.collectRequiredFields=function(){var a=q._asyncToGenerator(function*(b,
c){b=[this.collectVVRequiredFields(b,c),this.collectSymbolFields(b,c)];yield Promise.all(b)});return function(b,c){return a.apply(this,arguments)}}();g.collectSymbolFields=function(){var a=q._asyncToGenerator(function*(b,c){const d=[...this.getSymbols().map(h=>h.collectRequiredFields(b,c)),v.collectArcadeFieldNames(b,c,this.valueExpression)];v.collectField(b,c,this.field);v.collectField(b,c,this.field2);v.collectField(b,c,this.field3);yield Promise.all(d)});return function(b,c){return a.apply(this,
arguments)}}();g.populateFromStyle=function(){return P.fetchStyle(this.styleOrigin,{portal:this.portal}).then(a=>{const b=[];this._valueInfoMap={};a&&a.data&&Array.isArray(a.data.items)&&a.data.items.forEach(c=>{var d=new Q({styleUrl:a.styleUrl,styleName:a.styleName,portal:this.portal,name:c.name});this.defaultSymbol||c.name!==a.data.defaultItem||(this.defaultSymbol=d,this._isDefaultSymbolDerived=!0);d=new w({value:c.name,symbol:d});b.push(d);this._valueInfoMap[c.name]=d});this._set("uniqueValueInfos",
Object.freeze(b));!this.defaultSymbol&&this.uniqueValueInfos.length&&(this.defaultSymbol=this.uniqueValueInfos[0].symbol,this._isDefaultSymbolDerived=!0);return this})};g._updateValueInfoMap=function(){this._valueInfoMap={};this.uniqueValueInfos.forEach(a=>this._valueInfoMap[a.value+""]=a)};g._getUniqueValueInfo=function(a,b){return this.valueExpression?this._getUnqiueValueInfoForExpression(a,b):this._getUnqiueValueInfoForFields(a)};g._getUnqiueValueInfoForExpression=function(a,b){const {viewingMode:c,
scale:d,spatialReference:h,arcade:l}=n.unwrapOr(b,{});var m=this._cache.compiledFunc;b=n.unwrap(l).arcadeUtils;m||(m=b.createSyntaxTree(this.valueExpression),m=b.createFunction(m),this._cache.compiledFunc=m);a=b.executeFunction(m,b.createExecContext(a,b.getViewInfo({viewingMode:c,scale:d,spatialReference:h})));return this._valueInfoMap[a+""]};g._getUnqiueValueInfoForFields=function(a){const b=this.field,c=a.attributes;if("function"!==typeof b&&this.field2){a=this.field2;var d=this.field3;const h=
[];b&&h.push(c[b]);a&&h.push(c[a]);d&&h.push(c[d]);d=h.join(this.fieldDelimiter||"")}else"function"===typeof b?d=b(a):b&&(d=c[b]);return this._valueInfoMap[d+""]};t.fromPortalStyle=function(a,b){const c=new u(b&&b.properties);c._set("styleOrigin",Object.freeze({styleName:a}));c._set("portal",b&&b.portal||x.getDefault());b=c.populateFromStyle();b.catch(d=>{p.error(`#fromPortalStyle('${a}'[, ...])`,"Failed to create unique value renderer from style name",d)});return b};t.fromStyleUrl=function(a,b){b=
new u(b&&b.properties);b._set("styleOrigin",Object.freeze({styleUrl:a}));b=b.populateFromStyle();b.catch(c=>{p.error(`#fromStyleUrl('${a}'[, ...])`,"Failed to create unique value renderer from style URL",c)});return b};q._createClass(t,[{key:"_cache",get:function(){return{compiledFunc:null}}},{key:"defaultSymbol",set:function(a){this._isDefaultSymbolDerived=!1;this._set("defaultSymbol",a)}},{key:"uniqueValueInfos",set:function(a){this.styleOrigin?p.error("#uniqueValueInfos\x3d","Cannot modify unique value infos of a UniqueValueRenderer created from a web style"):
(this._set("uniqueValueInfos",a),this._updateValueInfoMap())}},{key:"arcadeRequired",get:function(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression}}]);return t}(N.VisualVariablesMixin(M));f.__decorate([k.property({readOnly:!0})],e.prototype,"_cache",null);f.__decorate([J.enumeration({uniqueValue:"unique-value"})],e.prototype,"type",void 0);f.__decorate([k.property(B.rendererBackgroundFillSymbolProperty)],e.prototype,"backgroundFillSymbol",void 0);f.__decorate([k.property({json:{type:String,
read:{source:"field1"},write:{target:"field1"}}})],e.prototype,"field",void 0);f.__decorate([I.cast("field")],e.prototype,"castField",null);f.__decorate([z.writer("field")],e.prototype,"writeField",null);f.__decorate([k.property({type:String,json:{write:!0}})],e.prototype,"field2",void 0);f.__decorate([k.property({type:String,json:{write:!0}})],e.prototype,"field3",void 0);f.__decorate([k.property({type:String,json:{write:!0}})],e.prototype,"valueExpression",void 0);f.__decorate([k.property({type:String,
json:{write:!0}})],e.prototype,"valueExpressionTitle",void 0);f.__decorate([k.property({type:O.LegendOptions,json:{write:!0}})],e.prototype,"legendOptions",void 0);f.__decorate([k.property({type:String,json:{write:!0}})],e.prototype,"defaultLabel",void 0);f.__decorate([k.property(H.deepMerge({...B.rendererSymbolProperty},{json:{write:{overridePolicy(){return{enabled:!this._isDefaultSymbolDerived}}},origins:{"web-scene":{write:{overridePolicy(){return{enabled:!this._isDefaultSymbolDerived}}}}}}}))],
e.prototype,"defaultSymbol",null);f.__decorate([k.property({type:String,json:{write:!0}})],e.prototype,"fieldDelimiter",void 0);f.__decorate([k.property({type:x,readOnly:!0})],e.prototype,"portal",void 0);f.__decorate([y.reader("portal",["styleName"])],e.prototype,"readPortal",null);f.__decorate([k.property({readOnly:!0,json:{write:{enabled:!1,overridePolicy:()=>({enabled:!0})}}})],e.prototype,"styleOrigin",void 0);f.__decorate([y.reader("styleOrigin",["styleName","styleUrl"])],e.prototype,"readStyleOrigin",
null);f.__decorate([z.writer("styleOrigin",{styleName:{type:String},styleUrl:{type:String}})],e.prototype,"writeStyleOrigin",null);f.__decorate([k.property({type:[w],json:{write:{overridePolicy(){return this.styleOrigin?{enabled:!1}:{enabled:!0}}}}})],e.prototype,"uniqueValueInfos",null);return e=u=f.__decorate([K.subclass("esri.renderers.UniqueValueRenderer")],e)});
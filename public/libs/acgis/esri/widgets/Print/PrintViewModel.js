// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../intl ../../request ../../core/Collection ../../core/deprecate ../../core/Error ../../core/lang ../../core/Loadable ../../core/Logger ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../portal/Portal ../../rest/geoprocessor/execute ../../rest/geoprocessor/GPOptions ../../core/has ../../geometry/support/normalizeUtils ../../layers/support/Field ../../layers/support/MapImage ../../core/urlUtils ../../rest/support/DataFile ../../rest/support/FeatureSet ../../rest/support/LinearUnit ../../rest/support/ParameterValue ../../rest/support/RasterData ../../rest/support/JobInfo ../../rest/print ../../rest/support/fileFormat ../../rest/support/layoutTemplate ../../rest/support/PrintParameters ../../rest/support/PrintTemplate ./CustomTemplate ../../intl/date".split(" "),
function(r,k,g,F,G,H,x,I,J,K,L,l,U,M,z,N,V,W,X,Y,Z,aa,ba,ca,da,ea,fa,ha,O,A,y,P,Q,B,C){function R(p){p.layoutOptions||(p.layoutOptions={});p.layoutOptions.customTextElements||(p.layoutOptions.customTextElements=[]);p.layoutOptions.customTextElements.find(v=>"date"in v)||({customTextElements:p}=p.layoutOptions,p.push({date:C.formatDate(Date.now(),C.convertDateFormatToIntlOptions("short-date"))}))}const D=G.ofType(B);g=function(p){function v(a){a=p.call(this,a)||this;a.allowedFormats="all";a.allowedLayouts=
"all";a.defaultTemplates=new D;a.extraParameters=null;a.includeDefaultTemplates=!0;a.effectivePrintServiceUrl=null;a.error=null;a.portal=z.getDefault();a.printServiceUrl=null;a.templatesInfo=null;a.updateDelay=1E3;a.view=null;a.templateCustomTextElements=null;a.print=a.print.bind(r._assertThisInitialized(a));return a}r._inheritsLoose(v,p);var t=v.prototype;t.destroy=function(){this.view=null};t.load=function(){var a=r._asyncToGenerator(function*(c){this.addResolvingPromise(this._loadResources(c).catch(f=>
this.error=f));return this});return function(c){return a.apply(this,arguments)}}();t.print=function(){var a=r._asyncToGenerator(function*(c){const {view:f,extraParameters:e,updateDelay:h}=this;if(!f)throw new x("print:view-required","view is not set");R(c);c=new P({view:f,template:c,extraParameters:e,updateDelay:h});try{return yield O.execute(this.effectivePrintServiceUrl,c)}catch(d){throw new x("print:export-error","An error occurred while exporting the web map.",{error:d});}});return function(c){return a.apply(this,
arguments)}}();t.toPrintTemplate=function({attributionEnabled:a,author:c,copyright:f,customTextElements:e,dpi:h,forceFeatureAttributes:d,format:b,height:q,layout:m,legendEnabled:u,northArrowEnabled:n,scale:w,scaleEnabled:S,title:T,width:E}){a=new Q({attributionVisible:a,forceFeatureAttributes:d,format:b,layout:m,layoutOptions:{authorText:c||"",copyrightText:f||"",customTextElements:e,titleText:T||""},outScale:w,scalePreserved:S});E&&(a.exportOptions.width=E);q&&(a.exportOptions.height=q);h&&(a.exportOptions.dpi=
h);u||(a.layoutOptions.legendLayers=[]);(h=this.templateToNorthArrowInfo[m])&&h.visible!==n&&(a.layoutOptions.elementOverrides={[h.name]:{visible:n}});return a};t._loadResources=function(){var a=r._asyncToGenerator(function*(c){let f=[];var {printServiceUrl:e}=this;if(!e){var h;if(this.destroyed)return;({portal:e}=this);try{yield e.load(c)}catch(b){throw new x("print:could-not-load-portal","Cannot load print resource information from portal",{url:this.effectivePrintServiceUrl});}if(e=null==(h=e.helperServices)?
void 0:h.printTask){var d;this._set("effectivePrintServiceUrl",e.url);f=(null!=(d=null==e?void 0:e.templates)?d:[]).map(b=>B.fromJSON(b))}}0<f.length&&this.defaultTemplates.addMany(f);if(-1===this.effectivePrintServiceUrl.toLowerCase().split("/").indexOf("gpserver"))throw new x("print:invalid-print-service-url","Can't fetch print templates information from provided URL",{url:this.effectivePrintServiceUrl});this._processLayoutTemplateInfos(yield this._getLayoutTemplatesInfo(c));yield this._loadServiceDescription(c)});
return function(c){return a.apply(this,arguments)}}();t._loadServiceDescription=function(){var a=r._asyncToGenerator(function*(c){c=yield this._getPrintTemplatesFromService(c);this._set("templatesInfo",c)});return function(c){return a.apply(this,arguments)}}();t._getLayoutTemplatesInfo=function(){var a=r._asyncToGenerator(function*(c){var f=this;let e=[];const h=function(){var d=r._asyncToGenerator(function*(b){b=f.effectivePrintServiceUrl.replace(/(\/GPServer\/).+/i,`$1${encodeURI(b)}`);return(yield N.execute(b,
null,null,L.unwrap(c))).results[0].value});return function(b){return d.apply(this,arguments)}}();try{e=yield h("Get Layout Templates Info Task")}catch(d){}if(!e||1>e.length)try{e=yield h("Get Layout Templates Info")}catch(d){}return e});return function(c){return a.apply(this,arguments)}}();t._processLayoutTemplateInfos=function(a){const c={},f={};a.forEach(({layoutTemplate:e,layoutOptions:{customTextElements:h,mapSurroundInfos:d}})=>{e=y.fromJSON(e);c[e]=h;d&&(f[e]=d.find(b=>"CIMMarkerNorthArrow"===
b.type))});this.templateCustomTextElements=Object.freeze(c);this.templateToNorthArrowInfo=f};t._getPrintTemplatesFromService=function(){var a=r._asyncToGenerator(function*(c){return F(this.effectivePrintServiceUrl,{...c,query:{f:"json"},timeout:6E4}).then(f=>{f=f&&f.data;let e=null,h=null;(f&&f.parameters).forEach(d=>{var b=d.choiceList&&d.choiceList.slice(),q;b&&b.length&&d.defaultValue&&(q=b.indexOf(d.defaultValue));-1<q&&(b.splice(q,1),b.unshift(d.defaultValue));q=(m,u)=>{const n="all"===u?m:m.filter(w=>
u.includes(w));return 0===n.length?m:n};if("Format"===d.name)b=q(b.map(A.fromJSON),this.allowedFormats),d=A.fromJSON(d.defaultValue),e={defaultValue:b.includes(d)?d:b[0],choiceList:b};else if("Layout_Template"===d.name){b=b.filter(n=>"map_only"!==n.toLowerCase());let m,u;b.some((n,w)=>{n=n.toLowerCase();if(n.includes("letter")&&n.includes("landscape"))return m=w,!0;n.includes("a4")&&n.includes("landscape")&&(m=w);return!1});m&&(u=b[m],b.splice(m,1),b.unshift(u));b=q(b.map(y.fromJSON),this.allowedLayouts);
d=y.fromJSON(d.defaultValue);h={defaultValue:b.includes(d)?d:b[0],choiceList:b}}});this.error=null;return{format:e,layout:h}}).catch(f=>{throw new x("print:unavailable-service-info","Can't fetch templates info from service",{error:f});})});return function(c){return a.apply(this,arguments)}}();r._createClass(v,[{key:"effectiveTemplateCustomTextElements",get:function(){if(!this._serviceTemplateCustomTextElements)return{};const a=I.clone(this._serviceTemplateCustomTextElements);this.templateCustomTextElements&&
Object.keys(this.templateCustomTextElements).forEach(c=>{const f=a[c];if(f){const e=this.templateCustomTextElements[c];f.forEach(h=>{const [d]=Object.entries(h)[0];e.find(b=>{const [q,m]=Object.entries(b)[0];d===q&&(h[d]=m)})})}});return Object.freeze(a)}},{key:"state",get:function(){return"loading"===this.loadStatus?"initializing":this.error||"failed"===this.loadStatus?"error":this.get("view.ready")&&"loaded"===this.loadStatus?"ready":"disabled"}},{key:"scaleEnabled",set:function(a){H.deprecatedProperty(K.getLogger(this.declaredClass),
"scaleEnabled",{version:"4.22"});this.set("scaleEnabled",a)}}]);return v}(J);k.__decorate([l.property()],g.prototype,"_serviceTemplateCustomTextElements",void 0);k.__decorate([l.property()],g.prototype,"allowedFormats",void 0);k.__decorate([l.property()],g.prototype,"allowedLayouts",void 0);k.__decorate([l.property({type:D})],g.prototype,"defaultTemplates",void 0);k.__decorate([l.property()],g.prototype,"extraParameters",void 0);k.__decorate([l.property()],g.prototype,"includeDefaultTemplates",void 0);
k.__decorate([l.property({aliasOf:{source:"printServiceUrl",overridable:!0},readOnly:!0})],g.prototype,"effectivePrintServiceUrl",void 0);k.__decorate([l.property()],g.prototype,"effectiveTemplateCustomTextElements",null);k.__decorate([l.property()],g.prototype,"error",void 0);k.__decorate([l.property({type:z})],g.prototype,"portal",void 0);k.__decorate([l.property()],g.prototype,"printServiceUrl",void 0);k.__decorate([l.property({readOnly:!0})],g.prototype,"state",null);k.__decorate([l.property()],
g.prototype,"scaleEnabled",null);k.__decorate([l.property({readOnly:!0})],g.prototype,"templatesInfo",void 0);k.__decorate([l.property()],g.prototype,"updateDelay",void 0);k.__decorate([l.property()],g.prototype,"view",void 0);k.__decorate([l.property()],g.prototype,"templateCustomTextElements",void 0);k.__decorate([l.property()],g.prototype,"templateToNorthArrowInfo",void 0);return g=k.__decorate([M.subclass("esri.widgets.Print.PrintViewModel")],g)});
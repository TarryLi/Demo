// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../request ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ../layers/FeatureLayer ../layers/support/featureQueryAll ./Network ./RulesTable ./support/NamedTraceConfiguration ./support/TerminalConfiguration ./support/typeUtils ../rest/support/Query".split(" "),function(u,m,C,p,k,P,Q,D,E,F,G,H,I,B,w,J){k=function(A){function y(a){a=
A.call(this,a)||this;a.sharedNamedTraceConfigurations=[];a.type="utility";return a}u._inheritsLoose(y,A);var n=y.prototype;n.load=function(){var a=u._asyncToGenerator(function*(c){this.addResolvingPromise(A.prototype.load.call(this,c));this.addResolvingPromise(this._loadNamedTraceConfigurationsFromNetwork(c));return this});return function(c){return a.apply(this,arguments)}}();n.getTerminalConfiguration=function(a){let c=null,b=null;var d=a.layer;let h=null;if("feature"===(null==d?void 0:d.type)){if(h=
d.layerId,null===h)return null}else return null;d=a.attributes;if(null==d)return null;for(const l of Object.keys(d))"ASSETGROUP"===l.toUpperCase()&&(c=a.getAttribute(l)),"ASSETTYPE"===l.toUpperCase()&&(b=a.getAttribute(l));if(!this.dataElement)return null;let e=null;a=this.dataElement.domainNetworks;for(const l of a){var f;if(a=null==(f=l.junctionSources)?void 0:f.find(g=>g.layerId===h)){var t;if(a=null==(t=a.assetGroups)?void 0:t.find(g=>g.assetGroupCode===c)){var v;if(a=null==(v=a.assetTypes)?void 0:
v.find(g=>g.assetTypeCode===b)){e=a.terminalConfigurationId;break}}}}return null!=e?(f=this.dataElement.terminalConfigurations,(f=null==f?void 0:f.find(l=>l.terminalConfigurationId===e))?B.fromJSON(f):null):null};n.getTierNames=function(a){var c;const b=null==(c=this.dataElement)?void 0:c.domainNetworks.find(d=>d.domainNetworkName===a);return(null==b?void 0:b.tiers.map(d=>d.name))||[]};n.getRulesTable=function(){var a=u._asyncToGenerator(function*(){return this._createRulesTable()});return function(){return a.apply(this,
arguments)}}();n.isUtilityLayer=function(a){return this._utilityLayerList.has(a.layerId)};n._loadNamedTraceConfigurationsFromNetwork=function(){var a=u._asyncToGenerator(function*(c){var b;if(0!==(null==(b=this.sharedNamedTraceConfigurations)?void 0:b.length)){b=this.sharedNamedTraceConfigurations.map(d=>d.globalId);c=yield this._fetchTraceConfigData(this.networkServiceUrl,b,c);for(const d of this.sharedNamedTraceConfigurations)(b=null==c?void 0:c.find(h=>h.globalId===d.globalId))&&d.read(b,{origin:"service"})}});
return function(c){return a.apply(this,arguments)}}();n._createRulesTable=function(){var a=u._asyncToGenerator(function*(){var c;const b=new E({url:this.rulesTableUrl});yield b.load();const d=null==(c=this.dataElement)?void 0:c.domainNetworks;if(!d)return null;const h=d.flatMap(e=>[...e.edgeSources,...e.junctionSources]);c=(yield this._queryRulesTable(b)).map(e=>this._hydrateRuleInfo(b,h,e));return new H({layer:b,rules:c})});return function(){return a.apply(this,arguments)}}();n._queryRulesTable=
function(){var a=u._asyncToGenerator(function*(c){const b=new J({where:"1\x3d1",outFields:["*"]});return(yield F.queryAllJSON(c,b)).features});return function(c){return a.apply(this,arguments)}}();n._hydrateRuleInfo=function(a,c,b){var d=a.fieldsIndex.get("RULETYPE"),h=a.fieldsIndex.get("CREATIONDATE"),e=a.fieldsIndex.get("FROMNETWORKSOURCEID"),f=a.fieldsIndex.get("FROMASSETGROUP"),t=a.fieldsIndex.get("FROMASSETTYPE"),v=a.fieldsIndex.get("FROMTERMINALID"),l=a.fieldsIndex.get("TONETWORKSOURCEID"),
g=a.fieldsIndex.get("TOASSETGROUP");const K=a.fieldsIndex.get("TOASSETTYPE"),L=a.fieldsIndex.get("TOTERMINALID"),M=a.fieldsIndex.get("VIANETWORKSOURCEID"),N=a.fieldsIndex.get("VIAASSETGROUP"),O=a.fieldsIndex.get("VIAASSETTYPE");a=a.fieldsIndex.get("VIATERMINALID");d=b.attributes[d.name];h=new Date(b.attributes[h.name]);b=[{networkSourceId:b.attributes[e.name],assetGroupId:b.attributes[f.name],assetTypeId:b.attributes[t.name],terminalId:b.attributes[v.name]},{networkSourceId:b.attributes[l.name],assetGroupId:b.attributes[g.name],
assetTypeId:b.attributes[K.name],terminalId:b.attributes[L.name]},{networkSourceId:b.attributes[M.name],assetGroupId:b.attributes[N.name],assetTypeId:b.attributes[O.name],terminalId:b.attributes[a.name]}];let r;(function(q){q[q.from=0]="from";q[q.to=1]="to";q[q.via=2]="via"})(r||(r={}));e={ruleType:d,creationDate:h};for(const q of[r.from,r.to,r.via]){if(d!==w.RuleType.RTEdgeJunctionEdgeConnectivity&&q===r.via)continue;const z=b[q];f=c.find(x=>x.sourceId===z.networkSourceId);t=null==f?void 0:f.assetGroups.find(x=>
x.assetGroupCode===z.assetGroupId);v=null==t?void 0:t.assetTypes.find(x=>x.assetTypeCode===z.assetTypeId);l=this._getTerminal(d,v,z);if(d===w.RuleType.RTContainment||d===w.RuleType.RTAttachment)l=null;g="";switch(q){case r.from:g="from";break;case r.to:g="to";break;case r.via:g="via"}e[`${g}NetworkSource`]=f;e[`${g}AssetGroup`]=t;e[`${g}AssetType`]=v;e[`${g}Terminal`]=l}return e};n._getTerminal=function(a,c,b){var d,h;if(a===w.RuleType.RTAttachment||a===w.RuleType.RTContainment)return null;const e=
null==c?void 0:c.terminalConfigurationId;a=null==(d=this.terminalConfigurations)?void 0:d.find(f=>f.id===e);return null==a?void 0:null==(h=a.terminals)?void 0:h.find(f=>f.id===b.terminalId)};n._fetchTraceConfigData=function(a,c,b){return C(`${a}/traceConfigurations/query`,{responseType:"json",query:{globalIds:JSON.stringify(c),f:"json"},...b}).then(d=>d.data.traceConfigurations)};u._createClass(y,[{key:"serviceTerritoryFeatureLayerId",get:function(){var a;return null==(a=this.dataElement)?void 0:
a.serviceTerritoryFeatureLayerId}},{key:"systemLayers",get:function(){var a,c;return{rulesTableId:null==(a=this.sourceJSON)?void 0:a.systemLayers.rulesTableId,rulesTableUrl:this.sourceJSON?`${this.featureServiceUrl}/${this.rulesTableId}`:null,subnetworksTableId:null==(c=this.sourceJSON)?void 0:c.systemLayers.subnetworksTableId,subnetworksTableUrl:this.sourceJSON?`${this.featureServiceUrl}/${this.subnetworksTableId}`:null}}},{key:"rulesTableId",get:function(){var a;return null==(a=this.sourceJSON)?
void 0:a.systemLayers.rulesTableId}},{key:"rulesTableUrl",get:function(){return this.sourceJSON?`${this.featureServiceUrl}/${this.rulesTableId}`:null}},{key:"subnetworksTableId",get:function(){var a;return null==(a=this.sourceJSON)?void 0:a.systemLayers.subnetworksTableId}},{key:"subnetworksTableUrl",get:function(){return this.sourceJSON?`${this.featureServiceUrl}/${this.subnetworksTableId}`:null}},{key:"terminalConfigurations",get:function(){var a;return(null==(a=this.dataElement)?void 0:a.terminalConfigurations.map(c=>
B.fromJSON(c)))||[]}},{key:"domainNetworkNames",get:function(){var a;return(null==(a=this.dataElement)?void 0:a.domainNetworks.map(c=>c.domainNetworkName))||[]}},{key:"_utilityLayerList",get:function(){const a=new Set;this.dataElement.domainNetworks.map(c=>{c.edgeSources.map(b=>{a.add(b.layerId)});c.junctionSources.map(b=>{a.add(b.layerId)})});return a}}]);return y}(G);m.__decorate([p.property({type:[I],json:{origins:{"web-map":{read:{source:"traceConfigurations"},write:{target:"traceConfigurations"}},
service:{read:{source:"traceConfigurations"}}},read:!1}})],k.prototype,"sharedNamedTraceConfigurations",void 0);m.__decorate([p.property({type:["utility"],readOnly:!0,json:{read:!1,write:!1}})],k.prototype,"type",void 0);m.__decorate([p.property({readOnly:!0})],k.prototype,"serviceTerritoryFeatureLayerId",null);m.__decorate([p.property({readOnly:!0})],k.prototype,"systemLayers",null);m.__decorate([p.property({readOnly:!0})],k.prototype,"rulesTableId",null);m.__decorate([p.property({readOnly:!0})],
k.prototype,"rulesTableUrl",null);m.__decorate([p.property({readOnly:!0})],k.prototype,"subnetworksTableId",null);m.__decorate([p.property({readOnly:!0})],k.prototype,"subnetworksTableUrl",null);m.__decorate([p.property({readOnly:!0})],k.prototype,"terminalConfigurations",null);m.__decorate([p.property({readOnly:!0})],k.prototype,"domainNetworkNames",null);return k=m.__decorate([D.subclass("esri.networks.UtilityNetwork")],k)});
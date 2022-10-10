// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("require ./chunks/_rollupPluginBabelHelpers ./chunks/tslib.es6 ./Color ./core/Collection ./core/collectionUtils ./core/compilerUtils ./core/Error ./core/JSONSupport ./core/lang ./core/Loadable ./core/loadAll ./core/Logger ./core/promiseUtils ./core/accessorSupport/decorators/property ./core/accessorSupport/ensureType ./core/accessorSupport/decorators/subclass ./core/accessorSupport/decorators/writer ./ground/NavigationConstraint ./webdoc/support/opacityUtils".split(" "),function(u,p,n,B,C,
D,E,F,h,w,G,H,I,r,q,x,J,K,L,y){function z(g){return"elevation"===g.type||g&&"createElevationSampler"in g}var v;const A=I.getLogger("esri.Ground");h=v=function(g){function l(a){var b=g.call(this,a)||this;b.opacity=1;b.surfaceColor=null;b.navigationConstraint=null;b.layers=new C;b.layers.on("after-add",c=>{c=c.item;c.parent&&c.parent!==p._assertThisInitialized(b)&&"remove"in c.parent&&c.parent.remove(c);c.parent=p._assertThisInitialized(b);"elevation"!==c.type&&"base-elevation"!==c.type&&A.error(`Layer '${c.title}, id:${c.id}' of type '${c.type}' is not supported as a ground layer and will therefore be ignored. Only layers of type 'elevation' are supported.`)});
b.layers.on("after-remove",c=>{c.item.parent=null});return b}p._inheritsLoose(l,g);var e=l.prototype;e.initialize=function(){this.when().catch(a=>{A.error("#load()","Failed to load ground",a)});this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)};e.destroy=function(){const a=this.layers.removeAll();for(const b of a)b.destroy();this.layers.destroy()};e.normalizeCtorArgs=function(a){a&&"resourceInfo"in a&&(this._set("resourceInfo",a.resourceInfo),a={...a},delete a.resourceInfo);
return a};e.writeLayers=function(a,b,c,d){const m=[];a&&(d={...d,layerContainerType:"ground"},a.forEach(f=>{if("write"in f){const k={};E.typeCast(f)().write(k,d)&&m.push(k)}else d&&d.messages&&d.messages.push(new F("layer:unsupported",`Layers (${f.title}, ${f.id}) of type '${f.declaredClass}' cannot be persisted in the ground`,{layer:f}))}));b.layers=m};e.load=function(a){this.addResolvingPromise(this._loadFromSource(a));return Promise.resolve(this)};e.loadAll=function(){return H.loadAll(this,a=>
{a(this.layers)})};e.queryElevation=function(){var a=p._asyncToGenerator(function*(b,c){yield this.load({signal:null==c?void 0:c.signal});var {ElevationQuery:d}=yield new Promise((f,k)=>u(["./layers/support/ElevationQuery"],f,k));r.throwIfAborted(c);d=new d;const m=this.layers.filter(z).toArray();return d.queryAll(m,b,c)});return function(b,c){return a.apply(this,arguments)}}();e.createElevationSampler=function(){var a=p._asyncToGenerator(function*(b,c){yield this.load({signal:null==c?void 0:c.signal});
var {ElevationQuery:d}=yield new Promise((f,k)=>u(["./layers/support/ElevationQuery"],f,k));r.throwIfAborted(c);d=new d;const m=this.layers.filter(z).toArray();return d.createSamplerAll(m,b,c)});return function(b,c){return a.apply(this,arguments)}}();e.clone=function(){const a={opacity:this.opacity,surfaceColor:w.clone(this.surfaceColor),navigationConstraint:w.clone(this.navigationConstraint),layers:this.layers.slice()};this.loaded&&(a.loadStatus="loaded");return(new v({resourceInfo:this.resourceInfo})).set(a)};
e.read=function(a,b){this.resourceInfo||this._set("resourceInfo",{data:a,context:b});g.prototype.read.call(this,a,b)};e._loadFromSource=function(a){const b=this.resourceInfo;return b?this._loadLayersFromJSON(b.data,b.context,a):Promise.resolve(null)};e._loadLayersFromJSON=function(a,b,c){const d=b&&b.origin||"web-scene",m=b&&b.portal||null,f=b&&b.url||null;return(new Promise((k,t)=>u(["./layers/support/layersCreator"],k,t))).then(({populateOperationalLayers:k})=>{r.throwIfAborted(c);const t=[];a.layers&&
Array.isArray(a.layers)&&t.push(k(this.layers,a.layers,{context:{origin:d,url:f,portal:m,layerContainerType:"ground"},defaultLayerType:"ArcGISTiledElevationServiceLayer"}));return r.eachAlways(t)}).then(()=>{})};p._createClass(l,[{key:"layers",set:function(a){this._set("layers",D.referenceSetter(a,this._get("layers")))}}]);return l}(h.JSONSupportMixin(G));n.__decorate([q.property({json:{read:!1}})],h.prototype,"layers",null);n.__decorate([K.writer("layers")],h.prototype,"writeLayers",null);n.__decorate([q.property({readOnly:!0})],
h.prototype,"resourceInfo",void 0);n.__decorate([q.property({type:Number,nonNullable:!0,range:{min:0,max:1},json:{type:x.Integer,read:{reader:y.transparencyToOpacity,source:"transparency"},write:{writer:(g,l)=>{l.transparency=y.opacityToTransparency(g)},target:"transparency"}}})],h.prototype,"opacity",void 0);n.__decorate([q.property({type:B,json:{type:[x.Integer],write:(g,l)=>{l.surfaceColor=g.toJSON().slice(0,3)}}})],h.prototype,"surfaceColor",void 0);n.__decorate([q.property({type:L.NavigationConstraint,
json:{write:!0}})],h.prototype,"navigationConstraint",void 0);return h=v=n.__decorate([J.subclass("esri.Ground")],h)});
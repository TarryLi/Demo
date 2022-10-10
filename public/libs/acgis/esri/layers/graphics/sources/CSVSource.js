// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../core/has ../../../core/Loadable ../../../core/maybe ../../../core/promiseUtils ../../../core/workers/workers ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../rest/support/FeatureSet ../../../geometry/Extent".split(" "),function(d,e,g,D,t,u,v,w,x,h,E,F,y,z,A){d.CSVSource=
function(p){function n(b){var a=p.call(this,b)||this;a.type="csv";a.refresh=w.debounce(function(){var c=e._asyncToGenerator(function*(l){yield a.load();const {extent:m,timeExtent:k}=yield a._connection.invoke("refresh",l);a.sourceJSON.extent=m;k&&(a.sourceJSON.timeInfo.timeExtent=[k.start,k.end]);return{dataChanged:!0,updates:{extent:a.sourceJSON.extent,timeInfo:a.sourceJSON.timeInfo}}});return function(l){return c.apply(this,arguments)}}());return a}e._inheritsLoose(n,p);var f=n.prototype;f.load=
function(b){b=v.isSome(b)?b.signal:null;this.addResolvingPromise(this._startWorker(b));return Promise.resolve(this)};f.destroy=function(){var b;null==(b=this._connection)?void 0:b.close();this._connection=null};f.openPorts=function(){var b=e._asyncToGenerator(function*(){yield this.load();return this._connection.openPorts()});return function(){return b.apply(this,arguments)}}();f.queryFeatures=function(){var b=e._asyncToGenerator(function*(a,c={}){yield this.load(c);a=yield this._connection.invoke("queryFeatures",
a?a.toJSON():null,c);return z.fromJSON(a)});return function(a){return b.apply(this,arguments)}}();f.queryFeaturesJSON=function(){var b=e._asyncToGenerator(function*(a,c={}){yield this.load(c);return this._connection.invoke("queryFeatures",a?a.toJSON():null,c)});return function(a){return b.apply(this,arguments)}}();f.queryFeatureCount=function(){var b=e._asyncToGenerator(function*(a,c={}){yield this.load(c);return this._connection.invoke("queryFeatureCount",a?a.toJSON():null,c)});return function(a){return b.apply(this,
arguments)}}();f.queryObjectIds=function(){var b=e._asyncToGenerator(function*(a,c={}){yield this.load(c);return this._connection.invoke("queryObjectIds",a?a.toJSON():null,c)});return function(a){return b.apply(this,arguments)}}();f.queryExtent=function(){var b=e._asyncToGenerator(function*(a,c={}){yield this.load(c);a=yield this._connection.invoke("queryExtent",a?a.toJSON():null,c);return{count:a.count,extent:A.fromJSON(a.extent)}});return function(a){return b.apply(this,arguments)}}();f.querySnapping=
function(){var b=e._asyncToGenerator(function*(a,c={}){yield this.load(c);return this._connection.invoke("querySnapping",a,c)});return function(a){return b.apply(this,arguments)}}();f._startWorker=function(){var b=e._asyncToGenerator(function*(a){this._connection=yield x.open("CSVSourceWorker",{strategy:t("feature-layers-workers")?"dedicated":"local",signal:a});const {url:c,delimiter:l,fields:m,latitudeField:k,longitudeField:B,spatialReference:q,timeInfo:r}=this.loadOptions;a=yield this._connection.invoke("load",
{url:c,customParameters:this.customParameters,parsingOptions:{delimiter:l,fields:null==m?void 0:m.map(C=>C.toJSON()),latitudeField:k,longitudeField:B,spatialReference:null==q?void 0:q.toJSON(),timeInfo:null==r?void 0:r.toJSON()}},{signal:a});this.locationInfo=a.locationInfo;this.sourceJSON=a.layerDefinition;this.delimiter=a.delimiter});return function(a){return b.apply(this,arguments)}}();return n}(u);g.__decorate([h.property()],d.CSVSource.prototype,"type",void 0);g.__decorate([h.property()],d.CSVSource.prototype,
"loadOptions",void 0);g.__decorate([h.property()],d.CSVSource.prototype,"customParameters",void 0);g.__decorate([h.property()],d.CSVSource.prototype,"locationInfo",void 0);g.__decorate([h.property()],d.CSVSource.prototype,"sourceJSON",void 0);g.__decorate([h.property()],d.CSVSource.prototype,"delimiter",void 0);d.CSVSource=g.__decorate([y.subclass("esri.layers.graphics.sources.CSVSource")],d.CSVSource);Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
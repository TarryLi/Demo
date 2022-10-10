// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../core/Error ../../../core/HandleOwner ../../../core/has ../../../core/Loadable ../../../core/maybe ../../../core/promiseUtils ../../../core/workers/workers ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../geometry/support/typeUtils ./support/clientSideDefaults ../../ogc/wfsUtils ../../../rest/support/FeatureSet ../../../geometry/Extent".split(" "),
function(g,e,k,L,x,y,z,A,r,t,B,l,M,N,C,D,u,n,E,F){g.WFSSource=function(v){function p(){var b=v.apply(this,arguments)||this;b.capabilities=u.createCapabilities(!1,!1);b.type="wfs";b.refresh=t.debounce(function(){var a=e._asyncToGenerator(function*(c){yield b.load();({extent:c}=yield b._connection.invoke("refresh",c));b.sourceJSON.extent=c;return{dataChanged:!0,updates:{extent:b.sourceJSON.extent}}});return function(c){return a.apply(this,arguments)}}());return b}e._inheritsLoose(p,v);var f=p.prototype;
f.load=function(b){var a;b=null!=(a=r.isSome(b)&&b.signal)?a:null;this.addResolvingPromise(this._startWorker({signal:b}));return Promise.resolve(this)};f.destroy=function(){var b;null==(b=this._connection)?void 0:b.close();this._connection=null};f.openPorts=function(){var b=e._asyncToGenerator(function*(){yield this.load();return this._connection.openPorts()});return function(){return b.apply(this,arguments)}}();f.queryFeatures=function(){var b=e._asyncToGenerator(function*(a,c={}){yield this.load(c);
a=yield this._connection.invoke("queryFeatures",a?a.toJSON():null,c);return E.fromJSON(a)});return function(a){return b.apply(this,arguments)}}();f.queryFeaturesJSON=function(){var b=e._asyncToGenerator(function*(a,c={}){yield this.load(c);return this._connection.invoke("queryFeatures",a?a.toJSON():null,c)});return function(a){return b.apply(this,arguments)}}();f.queryFeatureCount=function(){var b=e._asyncToGenerator(function*(a,c={}){yield this.load(c);return this._connection.invoke("queryFeatureCount",
a?a.toJSON():null,c)});return function(a){return b.apply(this,arguments)}}();f.queryObjectIds=function(){var b=e._asyncToGenerator(function*(a,c={}){yield this.load(c);return this._connection.invoke("queryObjectIds",a?a.toJSON():null,c)});return function(a){return b.apply(this,arguments)}}();f.queryExtent=function(){var b=e._asyncToGenerator(function*(a,c={}){yield this.load(c);a=yield this._connection.invoke("queryExtent",a?a.toJSON():null,c);return{count:a.count,extent:F.fromJSON(a.extent)}});return function(a){return b.apply(this,
arguments)}}();f.querySnapping=function(){var b=e._asyncToGenerator(function*(a,c={}){yield this.load(c);return this._connection.invoke("querySnapping",a,c)});return function(a){return b.apply(this,arguments)}}();f._createLoadOptions=function(){var b=e._asyncToGenerator(function*(a){const {url:c,customParameters:h,name:d,namespaceUri:m,spatialReference:w,fields:G,geometryType:H,swapXY:I}=this.layer;if(!c)throw new x("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||
(this.wfsCapabilities=yield n.getCapabilities(c,{customParameters:h,...a}));a="fields geometryType name namespaceUri spatialReference swapXY".split(" ").some(q=>null==this.layer[q])?yield n.getWFSLayerInfo(this.wfsCapabilities,d,m,{spatialReference:w,customParameters:h,signal:null==a?void 0:a.signal}):{...n.prepareWFSLayerFields(G),geometryType:H,name:d,namespaceUri:m,spatialReference:w,swapXY:I};const J=r.unwrap(n.findFeatureType(this.wfsCapabilities.readFeatureTypes(),a.name,a.namespaceUri)),K=
D.featureGeometryTypeKebabDictionary.toJSON(a.geometryType);return{customParameters:h,featureType:J,fields:a.fields.map(q=>q.toJSON()),geometryField:a.geometryField,geometryType:K,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:a.objectIdField,spatialReference:a.spatialReference.toJSON(),swapXY:a.swapXY}});return function(a){return b.apply(this,arguments)}}();f._startWorker=function(){var b=e._asyncToGenerator(function*(a){const [c,
h]=yield t.eachAlways([this._createLoadOptions(a),B.open("WFSSourceWorker",{...a,strategy:z("feature-layers-workers")?"dedicated":"local"})]);var d=c.error||h.error||null;const m=h.value||null;if(d)throw m&&m.close(),d;d=c.value;this._connection=h.value;({extent:a}=yield this._connection.invoke("load",d,a));this.sourceJSON={extent:a,fields:d.fields,geometryType:d.geometryType,objectIdField:d.objectIdField,geometryField:d.geometryField,drawingInfo:u.createDrawingInfo(d.geometryType),name:d.featureType.title,
wfsInfo:{name:d.featureType.name,featureUrl:d.getFeatureUrl,maxFeatures:3E3,swapXY:d.swapXY,supportedSpatialReferences:d.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:d.featureType.namespaceUri}}});return function(a){return b.apply(this,arguments)}}();return p}(y.HandleOwnerMixin(A));k.__decorate([l.property()],g.WFSSource.prototype,"capabilities",void 0);k.__decorate([l.property({constructOnly:!0})],g.WFSSource.prototype,"layer",void 0);k.__decorate([l.property()],g.WFSSource.prototype,
"sourceJSON",void 0);k.__decorate([l.property()],g.WFSSource.prototype,"type",void 0);k.__decorate([l.property()],g.WFSSource.prototype,"wfsCapabilities",void 0);g.WFSSource=k.__decorate([C.subclass("esri.layers.graphics.sources.WFSSource")],g.WFSSource);Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
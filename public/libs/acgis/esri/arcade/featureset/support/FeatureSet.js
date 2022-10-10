// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ./cache ./FeatureSetIterator ./IdSet ./shared ./stats ../../../core/promiseUtils ../../../core/sql/WhereClause ../../../geometry/geometryEngineAsync ../../../geometry/SpatialReference ../../../layers/support/FieldsIndex".split(" "),function(k,t,y,v,n,q,w,r,u,z,A){let x=function(){function l(b){this.featureSetQueryInterceptor=this.recentlyUsedQueries=null;this._idstates=[];this._mainSetInUse=this._wset=this._parent=null;this._maxProcessing=200;this._maxQuery=
500;this._totalCount=-1;this._databaseType=n.FeatureServiceDatabaseType.NotEvaluated;this._databaseTypeProbed=null;this.declaredRootClass="esri.arcade.featureset.support.FeatureSet";this._featureCache=[];this.fields=this.types=null;this.globalIdField=this.objectIdField=this.geometryType="";this.spatialReference=null;this.loaded=this._transparent=this.hasZ=this.hasM=!1;this._fieldsIndex=this._loadPromise=null;b&&b.lrucache&&(this.recentlyUsedQueries=b.lrucache);b&&b.interceptor&&(this.featureSetQueryInterceptor=
b.interceptor)}var f=l.prototype;f.optimisePagingFeatureQueries=function(b){this._parent&&this._parent.optimisePagingFeatureQueries(b)};f._hasMemorySource=function(){return!0};f.prop=function(b,a){if(void 0===a)return this[b];void 0!==this[b]&&(this[b]=a);return this};f.end=function(){return null!==this._parent&&!0===this._parent._transparent?this._parent.end():this._parent};f._ensureLoaded=function(){return this.load()};f.load=function(){null===this._loadPromise&&(this._loadPromise=this.loadImpl());
return this._loadPromise};f.loadImpl=function(){var b=k._asyncToGenerator(function*(){if(!0===this._parent.loaded)return this._initialiseFeatureSet(),this;yield this._parent.load();this._initialiseFeatureSet();return this});return function(){return b.apply(this,arguments)}}();f._initialiseFeatureSet=function(){null!==this._parent?(this.fields=this._parent.fields.slice(0),this.geometryType=this._parent.geometryType,this.objectIdField=this._parent.objectIdField,this.globalIdField=this._parent.globalIdField,
this.spatialReference=this._parent.spatialReference,this.hasM=this._parent.hasM,this.hasZ=this._parent.hasZ,this.typeIdField=this._parent.typeIdField,this.types=this._parent.types):(this.fields=[],this.globalIdField=this.objectIdField=this.typeIdField="",this.spatialReference=new z({wkid:4326}),this.geometryType=n.layerGeometryEsriConstants.point)};f.getField=function(b,a){let c;if(a=a||this.fields)b=b.toLowerCase(),a.some(d=>{d&&d.name.toLowerCase()===b&&(c=d);return!!c});return c};f.getFieldsIndex=
function(){null===this._fieldsIndex&&(this._fieldsIndex=new A(this.fields));return this._fieldsIndex};f._maxProcessingRate=function(){return null!==this._parent?Math.min(this._maxProcessing,this._parent._maxProcessingRate()):Math.min(this._maxProcessing,this._maxQueryRate())};f._maxQueryRate=function(){return null!==this._parent?Math.max(this._maxQuery,this._parent._maxQueryRate()):this._maxQuery};f._checkCancelled=function(b){if(null!==b&&b.aborted)throw Error("Operation has been cancelled.");};
f.nativeCapabilities=function(){return this._parent.nativeCapabilities()};f._canDoAggregates=function(){var b=k._asyncToGenerator(function*(a,c,d,e,g){return null===this._parent?!1:this._parent._canDoAggregates(a,c,d,e,g)});return function(a,c,d,e,g){return b.apply(this,arguments)}}();f._getAggregatePagesDataSourceDefinition=function(){var b=k._asyncToGenerator(function*(a,c,d,e,g,h,m){if(null===this._parent)throw Error("Should never be called");return this._parent._getAggregatePagesDataSourceDefinition(a,
c,d,e,g,h,m)});return function(a,c,d,e,g,h,m){return b.apply(this,arguments)}}();f._getAgregagtePhysicalPage=function(){var b=k._asyncToGenerator(function*(a,c,d){if(null===this._parent)throw Error("Should never be called");return this._parent._getAgregagtePhysicalPage(a,c,d)});return function(a,c,d){return b.apply(this,arguments)}}();f.databaseType=function(){var b=k._asyncToGenerator(function*(){if(this._databaseType===n.FeatureServiceDatabaseType.NotEvaluated){if(null!==t.applicationCache){const a=
t.applicationCache.getDatabaseType(this._cacheableFeatureSetSourceKey());if(null!==a)return a}if(null!==this._databaseTypeProbed)return this._databaseTypeProbed;try{this._databaseTypeProbed=this._getDatabaseTypeImpl(),null!==t.applicationCache&&t.applicationCache.setDatabaseType(this._cacheableFeatureSetSourceKey(),this._databaseTypeProbed)}catch(a){throw null!==t.applicationCache&&t.applicationCache.clearDatabaseType(this._cacheableFeatureSetSourceKey()),a;}return this._databaseTypeProbed}return this._databaseType});
return function(){return b.apply(this,arguments)}}();f._getDatabaseTypeImpl=function(){var b=k._asyncToGenerator(function*(){const a=[{thetype:n.FeatureServiceDatabaseType.SqlServer,testwhere:"(CAST( '2015-01-01' as DATETIME) \x3d CAST( '2015-01-01' as DATETIME)) AND OBJECTID\x3c0"},{thetype:n.FeatureServiceDatabaseType.Oracle,testwhere:"(TO_DATE('2003-11-18','YYYY-MM-DD') \x3d TO_DATE('2003-11-18','YYYY-MM-DD')) AND OBJECTID\x3c0"},{thetype:n.FeatureServiceDatabaseType.StandardisedNoInterval,testwhere:"(date '2015-01-01 10:10:10' \x3d date '2015-01-01 10:10:10') AND OBJECTID\x3c0"}];
for(const c of a)if(!0===(yield this._runDatabaseProbe(c.testwhere)))return c.thetype;return n.FeatureServiceDatabaseType.StandardisedNoInterval});return function(){return b.apply(this,arguments)}}();f._cacheableFeatureSetSourceKey=function(){return"MUSTBESET"};f._runDatabaseProbe=function(){var b=k._asyncToGenerator(function*(a){if(null!==this._parent)return this._parent._runDatabaseProbe(a);throw Error("Not Implemented");});return function(a){return b.apply(this,arguments)}}();f.isTable=function(){return this._parent.isTable()};
f._featureFromCache=function(b){if(void 0!==this._featureCache[b])return this._featureCache[b]};f._isInFeatureSet=function(b){return n.IdState.Unknown};f._getSet=function(b){throw Error("Not implemented in abstract class");};f._getFeature=function(){var b=k._asyncToGenerator(function*(a,c,d){this._checkCancelled(d);if(void 0!==this._featureFromCache(c))return this._featureFromCache(c);yield this._getFeatures(a,c,this._maxProcessingRate(),d);this._checkCancelled(d);if(void 0!==this._featureFromCache(c))return this._featureFromCache(c);
throw Error("Feature Not Found");});return function(a,c,d){return b.apply(this,arguments)}}();f._getFeatureBatch=function(){var b=k._asyncToGenerator(function*(a,c){this._checkCancelled(c);const d=new v([],a,!1,null),e=[];yield this._getFeatures(d,-1,a.length,c);this._checkCancelled(c);for(const g of a)void 0!==this._featureFromCache(g)&&e.push(this._featureFromCache(g));return e});return function(a,c){return b.apply(this,arguments)}}();f._getFeatures=function(){var b=k._asyncToGenerator(function*(a,
c,d,e){return"success"});return function(a,c,d,e){return b.apply(this,arguments)}}();f._getFilteredSet=function(b,a,c,d,e){throw Error("Not implemented in abstract class");};f._refineSetBlock=function(){var b=k._asyncToGenerator(function*(a,c,d){if(!0===this._checkIfNeedToExpandCandidatePage(a,this._maxQueryRate()))return yield this._expandPagedSet(a,this._maxQueryRate(),0,0,d),this._refineSetBlock(a,c,d);this._checkCancelled(d);var e=a._candidates.length;this._refineKnowns(a,c);let g=e-a._candidates.length;
if(0===a._candidates.length||g>=c)return a;yield this._refineIfParentKnown(a,c-g,d);this._checkCancelled(d);this._refineKnowns(a,c-g);g=e-a._candidates.length;if(g<c&&0<a._candidates.length){e=c-g;const h=this._prepareFetchAndRefineSet(a._candidates);yield this._fetchAndRefineFeatures(h,h.length>e?e:a._candidates.length,d);this._checkCancelled(d);this._refineKnowns(a,c-g)}return a});return function(a,c,d){return b.apply(this,arguments)}}();f._fetchAndRefineFeatures=function(b,a,c){return null};f._prepareFetchAndRefineSet=
function(b){const a=[];for(let c=0;c<b.length;c++)this._isPhysicalFeature(b[c])&&a.push(b[c]);return a};f._isPhysicalFeature=function(b){return null===this._parent?!0:this._parent._isPhysicalFeature(b)};f._refineKnowns=function(b,a){let c=0,d=null;const e=[];a=this._maxQueryRate();for(let g=0;g<b._candidates.length&&"GETPAGES"!==b._candidates[g];g++){let h=!1;const m=this._candidateIdTransform(b._candidates[g]);m!==b._candidates[g]&&(h=!0);const p=this._isInFeatureSet(m);if(p===n.IdState.InFeatureSet)!0===
h?b._known.includes(m)||(b._known.push(m),c+=1):(b._known.push(b._candidates[g]),c+=1),null===d?d={start:g,end:g}:d.end===g-1?d.end=g:(e.push(d),d={start:g,end:g});else if(p===n.IdState.NotInFeatureSet)null===d?d={start:g,end:g}:d.end===g-1?d.end=g:(e.push(d),d={start:g,end:g}),c+=1;else if(p===n.IdState.Unknown&&(c+=1,!0===b._ordered))break;if(c>=a)break}null!==d&&e.push(d);for(a=e.length-1;0<=a;a--)b._candidates.splice(e[a].start,e[a].end-e[a].start+1)};f._refineIfParentKnown=function(b,a,c){const d=
new v([],[],b._ordered,null);d._candidates=b._candidates.slice(0);return this._parent._refineSetBlock(d,a,c)};f._candidateIdTransform=function(b){return this._parent._candidateIdTransform(b)};f._checkIfNeedToExpandKnownPage=function(b,a){if(null===b.pagesDefinition)return!1;let c=0;for(let d=b._lastFetchedIndex;d<b._known.length;d++){if("GETPAGES"===b._known[d])return!0;if(void 0===this._featureCache[b._known[d]]&&(c+=1,c>=a))break}return!1};f._checkIfNeedToExpandCandidatePage=function(b,a){if(null===
b.pagesDefinition)return!1;let c=0;for(let d=0;d<b._candidates.length;d++){if("GETPAGES"===b._candidates[d])return!0;c+=1;if(c>=a)break}return!1};f._expandPagedSet=function(){var b=k._asyncToGenerator(function*(a,c,d,e,g){if(null===this._parent)throw Error("Parent Paging not implemented");return this._parent._expandPagedSet(a,c,d,e,g)});return function(a,c,d,e,g){return b.apply(this,arguments)}}();f._expandPagedSetFeatureSet=function(){var b=k._asyncToGenerator(function*(a,c,d,e,g){0<a._known.length&&
"GETPAGES"===a._known[a._known.length-1]&&(e=1);0===e&&0<a._candidates.length&&"GETPAGES"===a._candidates[a._candidates.length-1]&&(e=2);if(0===e)return"finished";e=yield this._getPage(a,e,g);return d+e<c?this._expandPagedSet(a,c,d+e,0,g):"success"});return function(a,c,d,e,g){return b.apply(this,arguments)}}();f._getPage=function(){var b=k._asyncToGenerator(function*(a,c,d){const e=1===c?a._known:a._candidates;if(a.pagesDefinition.internal.set.length>a.pagesDefinition.resultOffset||!0===a.pagesDefinition.internal.fullyResolved){--e.length;
c=0;for(d=0;d<a.pagesDefinition.resultRecordCount&&!(a.pagesDefinition.resultOffset+d>=a.pagesDefinition.internal.set.length);d++)e[e.length]=a.pagesDefinition.internal.set[a.pagesDefinition.resultOffset+d],c++;a.pagesDefinition.resultOffset+=c;d=!1;!0===a.pagesDefinition.internal.fullyResolved&&a.pagesDefinition.internal.set.length<=a.pagesDefinition.resultOffset&&(d=!0);!1===d&&e.push("GETPAGES");return c}yield this._getPhysicalPage(a,c,d);return this._getPage(a,c,d)});return function(a,c,d){return b.apply(this,
arguments)}}();f._getPhysicalPage=function(b,a,c){return null};f._clonePageDefinition=function(b){return null===this._parent?null:this._parent._clonePageDefinition(b)};f._first=function(b){return this.iterator(b).next()};f.first=function(b){return this._first(b)};f.calculateStatistic=function(){var b=k._asyncToGenerator(function*(a,c,d,e){yield this._ensureLoaded();let g=yield this._stat(a,c,"",null,null,d,e);!1===g.calculated&&(g=yield this._manualStat(a,c,d,e));return g.result});return function(a,
c,d,e){return b.apply(this,arguments)}}();f._manualStat=function(){var b=k._asyncToGenerator(function*(a,c,d,e){let g=null;switch(a.toLowerCase()){case "count":return g=yield q.count(this,e),{calculated:!0,result:g};case "distinct":return g=yield q.distinct(this,c,d),{calculated:!0,result:g};case "avg":case "mean":return g=yield q.mean(this,c,e),{calculated:!0,result:g};case "stdev":return g=yield q.stdev(this,c,e),{calculated:!0,result:g};case "variance":return g=yield q.variance(this,c,e),{calculated:!0,
result:g};case "sum":return g=yield q.sum(this,c,e),{calculated:!0,result:g};case "min":return g=yield q.min(this,c,e),{calculated:!0,result:g};case "max":return g=yield q.max(this,c,e),{calculated:!0,result:g};default:return{calculated:!0,result:0}}});return function(a,c,d,e){return b.apply(this,arguments)}}();f._stat=function(){var b=k._asyncToGenerator(function*(a,c,d,e,g,h,m){const p=yield this._parent._stat(a,c,d,e,g,h,m);return!1===p.calculated?null===g&&""===d&&null===e?this._manualStat(a,
c,h,m):{calculated:!1}:p});return function(a,c,d,e,g,h,m){return b.apply(this,arguments)}}();f._unionAllGeomSelf=function(b){const a=this.iterator(this._defaultTracker(b)),c=[];return new Promise((d,e)=>{this._unionShapeInBatches(c,a,d,e)})};f._unionAllGeom=function(b){return new Promise((a,c)=>{const d=this.iterator(this._defaultTracker(b));this._unionShapeInBatches([],d,a,c)})};f._unionShapeInBatches=function(b,a,c,d){a.next().then(e=>{try{null!==e&&null!==e.geometry&&b.push(e.geometry),30<b.length||
null===e&&1<b.length?u.union(b).then(g=>{try{null===e?c(g):(b=[g],this._unionShapeInBatches(b,a,c,d))}catch(h){d(h)}},d):null===e?1===b.length?c(b[0]):c(null):this._unionShapeInBatches(b,a,c,d)}catch(g){d(g)}},d)};f.iterator=function(b){return new y(this,b)};f.intersection=function(b,a=!1){return l._featuresetFunctions.intersection.bind(this)(b,a)};f.difference=function(b,a=!1,c=!0){return l._featuresetFunctions.difference.bind(this)(b,a,c)};f.symmetricDifference=function(b,a=!1,c=!0){return l._featuresetFunctions.symmetricDifference.bind(this)(b,
a,c)};f.morphShape=function(b,a,c="unknown",d=null){return l._featuresetFunctions.morphShape.bind(this)(b,a,c,d)};f.morphShapeAndAttributes=function(b,a,c="unknown"){return l._featuresetFunctions.morphShapeAndAttributes.bind(this)(b,a,c)};f.union=function(b,a=!1){return l._featuresetFunctions.union.bind(this)(b,a)};f.intersects=function(b){return l._featuresetFunctions.intersects.bind(this)(b)};f.envelopeIntersects=function(b){return l._featuresetFunctions.envelopeIntersects.bind(this)(b)};f.contains=
function(b){return l._featuresetFunctions.contains.bind(this)(b)};f.overlaps=function(b){return l._featuresetFunctions.overlaps.bind(this)(b)};f.relate=function(b,a){return l._featuresetFunctions.relate.bind(this)(b,a)};f.within=function(b){return l._featuresetFunctions.within.bind(this)(b)};f.touches=function(b){return l._featuresetFunctions.touches.bind(this)(b)};f.top=function(b){return l._featuresetFunctions.top.bind(this)(b)};f.crosses=function(b){return l._featuresetFunctions.crosses.bind(this)(b)};
f.buffer=function(b,a,c,d=!0){return l._featuresetFunctions.buffer.bind(this)(b,a,c,d)};f.filter=function(b,a=null){return l._featuresetFunctions.filter.bind(this)(b,a)};f.orderBy=function(b){return l._featuresetFunctions.orderBy.bind(this)(b)};f.dissolve=function(b,a){return l._featuresetFunctions.dissolve.bind(this)(b,a)};f.groupby=function(b,a){return l._featuresetFunctions.groupby.bind(this)(b,a)};f.reduce=function(b,a=null,c){return new Promise((d,e)=>{this._reduceImpl(this.iterator(this._defaultTracker(c)),
b,a,0,d,e,0)})};f._reduceImpl=function(b,a,c,d,e,g,h){try{h++,1E3<h?setTimeout(()=>{h=0;this._reduceImpl(b,a,c,d,e,g,h)}):b.next().then(m=>{try{if(null===m)e(c);else{const p=a(c,m,d,this);w.isPromiseLike(p)?p.then(B=>{this._reduceImpl(b,a,B,d+1,e,g,h)},g):this._reduceImpl(b,a,p,d+1,e,g,h)}}catch(p){g(p)}},g)}catch(m){g(m)}};f.removeField=function(b){return l._featuresetFunctions.removeField.bind(this)(b)};f.addField=function(b,a,c=null){return l._featuresetFunctions.addField.bind(this)(b,a,c)};f.sumArea=
function(b,a=!1,c){const d=n.convertSquareUnitsToCode(b);return this.reduce((e,g)=>null===g.geometry?0:a?u.geodesicArea(g.geometry,d).then(h=>e+h):u.planarArea(g.geometry,d).then(h=>e+h),0,c)};f.sumLength=function(b,a=!1,c){const d=n.convertLinearUnitsToCode(b);return this.reduce((e,g)=>null===g.geometry?0:a?u.geodesicLength(g.geometry,d).then(h=>e+h):u.planarLength(g.geometry,d).then(h=>e+h),0,c)};f._substituteVars=function(b,a){if(null!==a){const c={};for(const d in a)c[d.toLowerCase()]=a[d];b.parameters=
c}};f.distinct=function(){var b=k._asyncToGenerator(function*(a,c=1E3,d=null,e){yield this.load();a=r.WhereClause.create(a,this.getFieldsIndex());this._substituteVars(a,d);return this.calculateStatistic("distinct",a,c,this._defaultTracker(e))});return function(a){return b.apply(this,arguments)}}();f.min=function(){var b=k._asyncToGenerator(function*(a,c=null,d){yield this.load();a=r.WhereClause.create(a,this.getFieldsIndex());this._substituteVars(a,c);return this.calculateStatistic("min",a,-1,this._defaultTracker(d))});
return function(a){return b.apply(this,arguments)}}();f.max=function(){var b=k._asyncToGenerator(function*(a,c=null,d){yield this.load();a=r.WhereClause.create(a,this.getFieldsIndex());this._substituteVars(a,c);return this.calculateStatistic("max",a,-1,this._defaultTracker(d))});return function(a){return b.apply(this,arguments)}}();f.avg=function(){var b=k._asyncToGenerator(function*(a,c=null,d){yield this.load();a=r.WhereClause.create(a,this.getFieldsIndex());this._substituteVars(a,c);return this.calculateStatistic("avg",
a,-1,this._defaultTracker(d))});return function(a){return b.apply(this,arguments)}}();f.sum=function(){var b=k._asyncToGenerator(function*(a,c=null,d){yield this.load();a=r.WhereClause.create(a,this.getFieldsIndex());this._substituteVars(a,c);return this.calculateStatistic("sum",a,-1,this._defaultTracker(d))});return function(a){return b.apply(this,arguments)}}();f.stdev=function(){var b=k._asyncToGenerator(function*(a,c=null,d){yield this.load();a=r.WhereClause.create(a,this.getFieldsIndex());this._substituteVars(a,
c);return this.calculateStatistic("stdev",a,-1,this._defaultTracker(d))});return function(a){return b.apply(this,arguments)}}();f.variance=function(){var b=k._asyncToGenerator(function*(a,c=null,d){yield this.load();a=r.WhereClause.create(a,this.getFieldsIndex());this._substituteVars(a,c);return this.calculateStatistic("variance",a,-1,this._defaultTracker(d))});return function(a){return b.apply(this,arguments)}}();f.count=function(){var b=k._asyncToGenerator(function*(a){yield this.load();return this.calculateStatistic("count",
r.WhereClause.create("1",this.getFieldsIndex()),-1,this._defaultTracker(a))});return function(a){return b.apply(this,arguments)}}();f._defaultTracker=function(b){return b?b:{aborted:!1}};f.forEach=function(b,a){return new Promise((c,d)=>{this._forEachImpl(this.iterator(this._defaultTracker(a)),b,this,c,d,0)})};f._forEachImpl=function(b,a,c,d,e,g){try{g++,1E3<g?setTimeout(()=>{g=0;this._forEachImpl(b,a,c,d,e,g)},0):b.next().then(h=>{try{if(null===h)d(c);else{const m=a(h);void 0===m||null===m?this._forEachImpl(b,
a,c,d,e,g):w.isPromiseLike(m)?m.then(()=>{try{this._forEachImpl(b,a,c,d,e,g)}catch(p){e(p)}},e):this._forEachImpl(b,a,c,d,e,g)}}catch(m){e(m)}},e)}catch(h){e(h)}};f.convertToJSON=function(b){const a={layerDefinition:{geometryType:this.geometryType,fields:[]},featureSet:{features:[],geometryType:this.geometryType}};for(let c=0;c<this.fields.length;c++)a.layerDefinition.fields.push(n.esriFieldToJson(this.fields[c]));return this.reduce((c,d)=>{c={geometry:d.geometry&&d.geometry.toJSON(),attributes:{}};
for(const e in d.attributes)c.attributes[e]=d.attributes[e];a.featureSet.features.push(c);return 1},0,b).then(()=>a)};f.castToText=function(){return"object, FeatureSet"};f.queryAttachments=function(b,a,c,d,e){return this._parent.queryAttachments(b,a,c,d,e)};f.serviceUrl=function(){return this._parent.serviceUrl()};f.subtypes=function(){return this.typeIdField?{subtypeField:this.typeIdField,subtypes:this.types?this.types.map(b=>({name:b.name,code:b.id})):[]}:null};f.relationshipMetaData=function(){return this._parent.relationshipMetaData()};
f.schema=function(){const b=[];for(const a of this.fields)b.push(n.esriFieldToJson(a));return{objectIdField:this.objectIdField,globalIdField:this.globalIdField,geometryType:void 0===n.layerGeometryEsriRestConstants[this.geometryType]?"":n.layerGeometryEsriRestConstants[this.geometryType],fields:b}};f.convertToText=function(){var b=k._asyncToGenerator(function*(a,c){if("schema"===a)return yield this._ensureLoaded(),JSON.stringify(this.schema());if("featureset"===a){yield this._ensureLoaded();const d=
[];yield this.reduce((e,g)=>{e={geometry:g.geometry?g.geometry.toJSON():null,attributes:g.attributes};null!==e.geometry&&e.geometry.spatialReference&&delete e.geometry.spatialReference;d.push(e);return 1},0,c);a=this.schema();a.features=d;a.spatialReference=this.spatialReference.toJSON();return JSON.stringify(a)}return this.castToText()});return function(a,c){return b.apply(this,arguments)}}();f.getFeatureByObjectId=function(b,a){return this._parent.getFeatureByObjectId(b,a)};f.getOwningSystemUrl=
function(){return this._parent.getOwningSystemUrl()};f.getIdentityUser=function(){return this._parent.getIdentityUser()};f.getRootFeatureSet=function(){return null!==this._parent?this._parent.getRootFeatureSet():this};f.getDataSourceFeatureSet=function(){return null!==this._parent?this._parent.getDataSourceFeatureSet():this};f.castAsJson=function(b=null){return"keeptype"===(null==b?void 0:b.featureset)?this:"none"===(null==b?void 0:b.featureset)?null:{type:"FeatureSet"}};f.castAsJsonAsync=function(){var b=
k._asyncToGenerator(function*(a=null,c=null){if("keeptype"===(null==c?void 0:c.featureset))return this;if("schema"===(null==c?void 0:c.featureset))return yield this._ensureLoaded(),JSON.parse(JSON.stringify(this.schema()));if("none"===(null==c?void 0:c.featureset))return null;yield this._ensureLoaded();const d=[];yield this.reduce((e,g)=>{e={geometry:g.geometry?!0===(null==c?void 0:c.keepGeometryType)?g.geometry:g.geometry.toJSON():null,attributes:g.attributes};null!==e.geometry&&e.geometry.spatialReference&&
!0!==(null==c?void 0:c.keepGeometryType)&&delete e.geometry.spatialReference;d.push(e);return 1},0,a);a=this.schema();a.features=d;a.spatialReference=!0===(null==c?void 0:c.keepGeometryType)?this.spatialReference:this.spatialReference.toJSON();return a});return function(){return b.apply(this,arguments)}}();k._createClass(l,[{key:"gdbVersion",get:function(){return this._parent?this._parent.gdbVersion:""}}]);return l}();x._featuresetFunctions={};return x});
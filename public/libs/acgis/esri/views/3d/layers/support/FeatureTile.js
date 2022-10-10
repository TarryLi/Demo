// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/arrayUtils ../../../../core/maybe ../../../../geometry/support/aaBoundingRect ../../../../layers/graphics/dehydratedFeatures".split(" "),function(b,p,q,l,g,k){const m=new Set;let t=function(){function d(a){this.descriptor=a;this.fetchStatus=b.FetchStatus.FETCH_NEEDED;this._features=null;this._featureLimit=this._numVertices=0;this.featuresMissing=!0;this._shuffled=!1;this._numFeatures=-1;this._emptyFeatureRatio=0;this._estimatedSize=
-1;this._estimatedUnusedSize=0;this._estimatedUnusedSizeDirty=!1;this._availableFields=m;this._displayingFeatures=null;this.alive=!0;this.filtered=!1}var h=d.prototype;h.setFeatures=function(a,c,e){this._availableFields=l.unwrapOr(e,m);this._features=a;this._shuffled=!1;this._estimatedSize=-1;this._estimatedUnusedSizeDirty=!0;a&&0<a.length?(this._emptyFeatureRatio=c/(a.length+c),this._numVertices=a.reduce((f,r)=>f+k.numVertices(r.geometry),0)):this._numVertices=this._emptyFeatureRatio=0};h.updateMemoryEstimates=
function(){if(0>this._estimatedSize){this._estimatedUnusedSize=this._estimatedSize=0;if(this._features)for(var a=0;a<this._features.length;++a){const c=k.estimateSize(this._features[a]);this._estimatedSize+=c;a>=this.featureLimit&&(this._estimatedUnusedSize+=c)}return!0}if(this._estimatedUnusedSizeDirty){this._estimatedUnusedSize=0;this._estimatedUnusedSizeDirty=!1;if(this._features)for(a=this.featureLimit;a<this._features.length;++a)this._estimatedUnusedSize+=k.estimateSize(this._features[a]);return!0}return!1};
h.resetFetching=function(){this.fetchStatus=this.fetchStatus===b.FetchStatus.REFETCHING?b.FetchStatus.REFETCH_NEEDED:b.FetchStatus.FETCH_NEEDED};h.intersects=function(a){if(!a||!this.descriptor.extent)return!0;g.fromExtent(a,n);return g.intersects(this.descriptor.extent,n)};h.intersectionIncludingBorrowed=function(a,c){const e=l.isSome(this.extentIncludingBorrowedFeatures)?this.extentIncludingBorrowedFeatures:this.descriptor.extent;if(!a&&!e)return g.copy(c,g.POSITIVE_INFINITY),c;a?(g.fromExtent(a,
c),g.intersection(c,e,c)):g.copy(c,e);return c};h._shuffle=function(a){this._features.sort((c,e)=>k.getObjectId(c,a)-k.getObjectId(e,a));q.shuffle(this._features,16438);this._estimatedUnusedSizeDirty=this._shuffled=!0};h.reduceFeatures=function(a,c,e){if(0>=a)return!1;if(!this._features)return this.featureLimit=0,!1;let f=!1;this.featureLimit=Math.ceil(this.numFeatures*a);this.featureLimit>this._features.length&&(this.featureLimit=this._features.length,this.fetchStatus===b.FetchStatus.DONE&&0<this._features.length&&
(this.fetchStatus=b.FetchStatus.REFETCH_NEEDED,f=!0));!this._shuffled&&1>a&&this._shuffle(e);a=Math.max(this.featureLimit,Math.ceil(c*this.numFeatures));this._features.length>a&&(this._features.length=a,this.featuresMissing=!0,this.fetchStatus===b.FetchStatus.FULL&&(this.fetchStatus=b.FetchStatus.DONE));return f};p._createClass(d,[{key:"displayingFeatures",get:function(){return this._displayingFeatures},set:function(a){this._displayingFeatures=a;this.extentIncludingBorrowedFeatures=null}},{key:"perTileMaximumNumberOfFeaturesExceeded",
get:function(){return!this.filtered&&(this.featuresMissing||this.features&&this.featureLimit!==this.features.length)}},{key:"features",get:function(){return this._features}},{key:"featureLimit",get:function(){return this._featureLimit},set:function(a){this._featureLimit!==a&&(this._featureLimit=a,this._estimatedUnusedSizeDirty=!0)}},{key:"availableFields",get:function(){return this._availableFields}},{key:"emptyFeatureRatio",get:function(){return this._emptyFeatureRatio}},{key:"numFeatures",get:function(){return this.hasPreciseFeatureCount?
this._numFeatures:this._features?this._features.length:0},set:function(a){this._numFeatures=a}},{key:"hasPreciseFeatureCount",get:function(){return-1<this._numFeatures}},{key:"needsFeatureCount",get:function(){return-1===this._numFeatures}},{key:"numVertices",get:function(){return this._numVertices}},{key:"id",get:function(){return this.descriptor.id}},{key:"estimatedSize",get:function(){this.updateMemoryEstimates();return this._estimatedSize}},{key:"estimatedUnusedSize",get:function(){return this._estimatedUnusedSize}},
{key:"isFetching",get:function(){return this.fetchStatus===b.FetchStatus.FETCHING||this.fetchStatus===b.FetchStatus.REFETCHING}},{key:"isRefetching",get:function(){return this.fetchStatus===b.FetchStatus.REFETCHING}},{key:"needsFetching",get:function(){return this.fetchStatus===b.FetchStatus.FETCH_NEEDED||this.fetchStatus===b.FetchStatus.REFETCH_NEEDED}},{key:"needsRefetching",get:function(){return this.fetchStatus===b.FetchStatus.REFETCH_NEEDED}},{key:"isFetched",get:function(){return this.fetchStatus===
b.FetchStatus.DONE||this.fetchStatus===b.FetchStatus.FULL}},{key:"needsDisplayUpdate",get:function(){var a;if(a=!!this._features){a:{a=this._features;var c=this.displayingFeatures,e=this.featureLimit;if(l.isNone(c)||l.isNone(a)||e!==c.length||e>a.length)a=!1;else{for(let f=0;f<e;++f)if(a[f]!==c[f]){a=!1;break a}a=!0}}a=!a}return a}},{key:"cache",get:function(){return{availableFields:this._availableFields,features:this.features,numFeatures:this._numFeatures,emptyFeatureRatio:this._emptyFeatureRatio,
fetchStatus:this.fetchStatus,featuresMissing:this.featuresMissing}},set:function(a){this.requestController=null;this._availableFields=a.availableFields;this._features=a.features;this._numFeatures=a.numFeatures;this._emptyFeatureRatio=a.emptyFeatureRatio;this.fetchStatus=a.fetchStatus;this.featuresMissing=a.featuresMissing;this._estimatedSize=-1;this._estimatedUnusedSizeDirty=!0}}]);return d}();b.FetchStatus=void 0;(function(d){d[d.FETCH_NEEDED=0]="FETCH_NEEDED";d[d.REFETCH_NEEDED=1]="REFETCH_NEEDED";
d[d.FETCHING=2]="FETCHING";d[d.REFETCHING=3]="REFETCHING";d[d.DONE=4]="DONE";d[d.FULL=5]="FULL"})(b.FetchStatus||(b.FetchStatus={}));const n=g.create();b.FAILED_FEATURE_COUNT=-2;b.FeatureTile=t;Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
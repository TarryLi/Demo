// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../geometry ../../../../core/maybe ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../layers/support/rasterFunctions/stretchUtils ../../../../rest/support/ImageHistogramParameters ./RasterLayerAdapter ../../../../geometry/Point".split(" "),function(n,
p,f,l,v,C,D,E,w,x,y,z,A){f=function(q){function m(){var b=q.apply(this,arguments)||this;b._cacheSize=20;b._statsCache=new Map;return b}n._inheritsLoose(m,q);var g=m.prototype;g.generateRasterInfo=function(b){const a=l.unwrap(null==b?void 0:b.renderingRule);return this.layer.generateRasterInfo(a,{signal:null==b?void 0:b.signal})};g.estimateStatisticsHistograms=function(){var b=n._asyncToGenerator(function*(a){var c,h,d,e=null!=(c=null==(h=l.unwrap(null==a?void 0:a.renderingRule))?void 0:h.functionName)?
c:"default";if(this._statsCache.has(e))return this._statsCache.get(e);let {width:r,height:t,pixelSize:k}=this.layer.rasterInfo;for(c=1;2E3<r||2E3<t;)r/=2,t/=2,c*=2;h=null!=(d=null==a?void 0:a.renderingRule)?d:this.layer.renderingRule;const {fullExtent:u,mosaicRule:B}=this.layer;k=new A(k.x*c,k.y*c,u.spatialReference);d=new y({geometry:u,pixelSize:k,renderingRule:h,mosaicRule:B});this.layer.capabilities.operations.supportsComputeStatisticsHistograms?a=yield this.layer.computeStatisticsHistograms(d,
a):({histograms:a}=yield this.layer.computeHistograms(d,a),a={statistics:x.estimateStatisticsFromHistograms(a),histograms:a});this._statsCache.set(e,a);this._statsCache.size>this._cacheSize&&(e=this._statsCache.keys().next().value,this._statsCache.delete(e));return a});return function(a){return b.apply(this,arguments)}}();g.supportsMultidirectionalHillshade=function(){return 10.81<=this.layer.version};g.load=function(b){this.addResolvingPromise(this.layer.load(b).then(()=>{var a;this.generateRasterInfo({renderingRule:this.renderingRule,
signal:null==(a=l.unwrap(b))?void 0:a.signal}).then(c=>this.rasterInfo=c)}));return Promise.resolve(this)};return m}(z);p.__decorate([v.property()],f.prototype,"layer",void 0);return f=p.__decorate([w.subclass("esri.smartMapping.support.adapters.ImageryLayerAdapter")],f)});
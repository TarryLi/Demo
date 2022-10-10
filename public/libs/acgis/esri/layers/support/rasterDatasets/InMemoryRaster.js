// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../core/Error ../../../core/maybe ../../../core/promiseUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../RasterInfo ./BaseRaster ../rasterFunctions/pixelUtils ../rasterFunctions/stretchUtils ../../../geometry/Extent ../../../geometry/SpatialReference".split(" "),
function(l,m,f,x,u,y,v,K,L,M,z,A,B,C,D,E,F){f=function(w){function n(){var c=w.apply(this,arguments)||this;c.datasetFormat="MEMORY";return c}l._inheritsLoose(n,w);var p=n.prototype;p.open=function(){var c=l._asyncToGenerator(function*(a){var b;yield this.init();const {pixelBlock:d,statistics:e,histograms:q,name:g,keyProperties:h,nativeExtent:G,transform:H}=this.data,{width:r,height:t,pixelType:I}=d,k=this.data.extent||new E({xmin:-.5,ymin:.5,xmax:r-.5,ymax:t-.5,spatialReference:new F({wkid:3857})}),
J=null!=(b=this.data.isPseudoSpatialReference)?b:!this.data.extent;b=new A({width:r,height:t,pixelType:I,extent:k,nativeExtent:G,transform:H,pixelSize:{x:k.width/r,y:k.height/t},spatialReference:k.spatialReference,bandCount:3,keyProperties:h||{},statistics:e,isPseudoSpatialReference:J,histograms:q});this.createRemoteDatasetStorageInfo(b,512,512);this._set("rasterInfo",b);this.updateTileInfo();yield this._buildInMemoryRaster(d,{width:512,height:512},a);this.datasetName=g;this.url="/InMemory/"+g});
return function(a){return c.apply(this,arguments)}}();p.fetchRawTile=function(c,a,b,d){c=this._pixelBlockTiles.get(`${c}/${a}/${b}`);return Promise.resolve(c)};p._buildInMemoryRaster=function(){var c=l._asyncToGenerator(function*(a,b,d){var e=this.rasterInfo.storageInfo.maximumPyramidLevel;const q=this.rasterJobHandler?this.rasterJobHandler.split({pixelBlock:a,tileSize:b,maximumPyramidLevel:e},d):Promise.resolve(C.split(a,b,e));b=u.isSome(this.rasterInfo.statistics);e=u.isSome(this.rasterInfo.histograms);
a=b?Promise.resolve({statistics:null,histograms:null}):this.rasterJobHandler?this.rasterJobHandler.estimateStatisticsHistograms({pixelBlock:a},d):Promise.resolve(D.estimateStatisticsHistograms(a));a=yield y.eachAlways([q,a]);if(!a[0].value&&a[1].value)throw new x("inmemory-raster:open","failed to build in memory raster");this._pixelBlockTiles=a[0].value;if(!b){var g;this.rasterInfo.statistics=null==(g=a[1].value)?void 0:g.statistics}if(!e){var h;this.rasterInfo.histograms=null==(h=a[1].value)?void 0:
h.histograms}});return function(a,b,d){return c.apply(this,arguments)}}();return n}(B);m.__decorate([v.property({type:String,json:{write:!0}})],f.prototype,"datasetFormat",void 0);m.__decorate([v.property()],f.prototype,"data",void 0);return f=m.__decorate([z.subclass("esri.layers.support.rasterDatasets.InMemoryRaster")],f)});
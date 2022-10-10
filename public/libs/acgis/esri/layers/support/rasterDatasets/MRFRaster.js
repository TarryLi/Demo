// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../core/Error ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../PixelBlock ../RasterInfo ../RasterStorageInfo ./BaseRaster ./pamParser ./xmlUtilities ../rasterFormats/utils ../rasterFunctions/stretchUtils ../../../geometry/SpatialReference ../../../geometry/Extent ../../../geometry/Point".split(" "),
function(z,A,y,B,C,D,S,T,U,K,L,M,N,O,G,t,P,Q,E,H,I){const v=new Map;v.set("Int8","s8");v.set("UInt8","u8");v.set("Int16","s16");v.set("UInt16","u16");v.set("Int32","s32");v.set("UInt32","u32");v.set("Float32","f32");v.set("Float64","f32");v.set("Double64","f32");const w=new Map;w.set("none",{blobExtension:".til",isOneSegment:!0,decoderFormat:"bip"});w.set("lerc",{blobExtension:".lrc",isOneSegment:!1,decoderFormat:"lerc"});w.set("deflate",{blobExtension:".pzp",isOneSegment:!0,decoderFormat:"deflate"});
w.set("jpeg",{blobExtension:".pjg",isOneSegment:!0,decoderFormat:"jpg"});y=function(J){function F(){var e=J.apply(this,arguments)||this;e._files=null;e._storageIndex=null;e.datasetFormat="MRF";return e}z._inheritsLoose(F,J);var x=F.prototype;x.open=function(){var e=z._asyncToGenerator(function*(a){var c;yield this.init();this.datasetName=this.url.slice(this.url.lastIndexOf("/")+1);var d=a?C.unwrap(a.signal):null,b=yield this.request(this.url,{responseType:"xml",signal:d});const {rasterInfo:g,files:l}=
this._parseHeader(b.data);if(-1===(null==(c=this.ioConfig.skipExtensions)?void 0:c.indexOf("aux.xml"))&&(a=yield this._fetchAuxiliaryData(a),null!=a)){var q;g.statistics=null!=(q=a.statistics)?q:g.statistics;(g.histograms=a.histograms)&&C.isNone(g.statistics)&&(g.statistics=Q.estimateStatisticsFromHistograms(a.histograms))}this._set("rasterInfo",g);this._files=l;d=yield this.request(l.index,{responseType:"array-buffer",signal:d});this._storageIndex=this._parseIndex(d.data);const {blockWidth:f,blockHeight:u}=
this.rasterInfo.storageInfo;d=this.rasterInfo.storageInfo.pyramidScalingFactor;const {width:m,height:k}=this.rasterInfo;q=[];a=this._getBandSegmentCount();c=0;for(b=-1;c<this._storageIndex.length;){b++;const h=Math.ceil(m/f/d**b)-1,n=Math.ceil(k/u/d**b)-1;c+=(h+1)*(n+1)*a*4;q.push({maxRow:n,maxCol:h,minCol:0,minRow:0})}this.rasterInfo.storageInfo.blockBoundary=q;0<b&&(this.rasterInfo.storageInfo.firstPyramidLevel=1,this.rasterInfo.storageInfo.maximumPyramidLevel=b);this.updateTileInfo()});return function(a){return e.apply(this,
arguments)}}();x.fetchRawTile=function(){var e=z._asyncToGenerator(function*(a,c,d,b={}){const {blockWidth:g,blockHeight:l,blockBoundary:q}=this.rasterInfo.storageInfo;var f=q[a];if(!f||f.maxRow<c||f.maxCol<d||f.minRow>c||f.minCol>d)return null;const {bandCount:u,pixelType:m}=this.rasterInfo,{ranges:k,actualTileWidth:h,actualTileHeight:n}=this._getTileLocation(a,c,d);if(!k||0===k.length)return null;if(0===k[0].from&&0===k[0].to)return a=new Uint8Array(g*l),new L({width:g,height:l,pixels:null,mask:a,
validPixelCount:0});({bandIds:c}=this.ioConfig);d=this._getBandSegmentCount();f=[];for(a=a=0;a<d;a++)(!c||-1<c.indexOf[a])&&f.push(this.request(this._files.data,{range:{from:k[a].from,to:k[a].to},responseType:"array-buffer",signal:b.signal}));b=yield Promise.all(f);a=b.map(r=>r.data.byteLength).reduce((r,R)=>r+R);f=new Uint8Array(a);let p=0;for(a=0;a<d;a++)f.set(new Uint8Array(b[a].data),p),p+=b[a].data.byteLength;a=w.get(this.rasterInfo.storageInfo.compression).decoderFormat;c=yield this.decodePixelBlock(f.buffer,
{width:g,height:l,format:a,planes:(null==c?void 0:c.length)||u,pixelType:m});if(C.isSome(this.rasterInfo.noDataValue)&&"lerc"!==a&&!c.mask&&(b=this.rasterInfo.noDataValue[0],null!=b)){d=c.width*c.height;f=new Uint8Array(d);if(1E24<Math.abs(b))for(a=0;a<d;a++)1E-6<Math.abs((c.pixels[0][a]-b)/b)&&(f[a]=1);else for(a=0;a<d;a++)c.pixels[0][a]!==b&&(f[a]=1);c.mask=f}d=b=0;if(h!==g||n!==l)if(f=c.mask)for(a=0;a<l;a++)for(d=a*g,b=a<n?h:0;b<g;b++)f[d+b]=0;else for(f=new Uint8Array(g*l),c.mask=f,a=0;a<n;a++)for(d=
a*g,b=0;b<h;b++)f[d+b]=1;return c});return function(a,c,d){return e.apply(this,arguments)}}();x._parseIndex=function(e){if(0<e.byteLength%16)throw"invalid array buffer must be multiples of 16";let a,c,d,b,g;if(P.isPlatformLittleEndian){a=new Uint8Array(e);d=new ArrayBuffer(e.byteLength);c=new Uint8Array(d);for(b=0;b<e.byteLength/4;b++)for(g=0;4>g;g++)c[4*b+g]=a[4*b+3-g];e=new Uint32Array(d)}else e=new Uint32Array(e);return e};x._getBandSegmentCount=function(){return w.get(this.rasterInfo.storageInfo.compression).isOneSegment?
1:this.rasterInfo.bandCount};x._getTileLocation=function(e,a,c){const {blockWidth:d,blockHeight:b,pyramidScalingFactor:g}=this.rasterInfo.storageInfo,{width:l,height:q}=this.rasterInfo,f=this._getBandSegmentCount();let u,m;var k,h=0;let n=0;for(k=0;k<e;k++)n=g**k,u=Math.ceil(l/d/n),m=Math.ceil(q/b/n),h+=u*m;n=g**e;u=Math.ceil(l/d/n);m=Math.ceil(q/b/n);h=4*(h+(a*u+c))*f;e=this._storageIndex.subarray(h,h+4*f);h=k=0;const p=[];for(let r=0;r<f;r++)k=e[4*r]*2**32+e[4*r+1],h=k+e[4*r+2]*2**32+e[4*r+3],p.push({from:k,
to:h});return{ranges:p,actualTileWidth:c<u-1?d:Math.ceil(l/n)-d*(u-1),actualTileHeight:a<m-1?b:Math.ceil(q/n)-b*(m-1)}};x._parseHeader=function(e){var a=t.getElement(e,"MRF_META/Raster");if(!a)throw new B("mrf:open","not a valid MRF format");var c=t.getElement(a,"Size"),d=parseInt(c.getAttribute("x"),10),b=parseInt(c.getAttribute("y"),10);const g=parseInt(c.getAttribute("c"),10);c=(t.getElementValue(a,"Compression")||"none").toLowerCase();if(!w.has(c))throw new B("mrf:open","currently does not support compression "+
c);var l=t.getElementValue(a,"DataType")||"UInt8";const q=v.get(l);if(null==q)throw new B("mrf:open","currently does not support pixel type "+l);var f=t.getElement(a,"PageSize");l=parseInt(f.getAttribute("x"),10);f=parseInt(f.getAttribute("y"),10);a=t.getElement(a,"DataValues");let u;a&&(a=a.getAttribute("NoData"),null!=a&&(u=a.trim().split(" ").map(r=>parseFloat(r))));if(t.getElement(e,"MRF_META/CachedSource"))throw new B("mrf:open","currently does not support MRF referencing other data files");
var m=t.getElement(e,"MRF_META/GeoTags"),k=t.getElement(m,"BoundingBox");a=!1;if(null!=k){var h=parseFloat(k.getAttribute("minx"));var n=parseFloat(k.getAttribute("miny"));const r=parseFloat(k.getAttribute("maxx"));k=parseFloat(k.getAttribute("maxy"));m=t.getElementValue(m,"Projection")||"";var p;"LOCAL_CS[]"!==m?m.toLowerCase().startsWith("epsg:")?(m=Number(m.slice(5)),isNaN(m)||0===m||(p=new E({wkid:m}))):p=G.parseSpatialReference(m):(a=!0,p=new E({wkid:3857}));h=new H(h,n,r,k);h.spatialReference=
p}else a=!0,h=new H({xmin:-.5,ymin:.5-b,xmax:d-.5,ymax:.5,spatialReference:new E({wkid:3857})});p=t.getElement(e,"MRF_META/Rsets");n=parseInt(p&&p.getAttribute("scale")||"2",10);p=h.spatialReference;l=new N({origin:new I({x:h.xmin,y:h.ymax,spatialReference:p}),blockWidth:l,blockHeight:f,pyramidBlockWidth:l,pyramidBlockHeight:f,compression:c,pyramidScalingFactor:n});f=new I({x:h.width/d,y:h.height/b,spatialReference:p});d=new M({width:d,height:b,extent:h,isPseudoSpatialReference:a,spatialReference:p,
bandCount:g,pixelType:q,pixelSize:f,noDataValue:u,storageInfo:l});b=t.getElementValue(e,"datafile");e=t.getElementValue(e,"IndexFile");e={mrf:this.url,index:e||this.url.replace(".mrf",".idx"),data:b||this.url.replace(".mrf",w.get(c).blobExtension)};return{rasterInfo:d,files:e}};x._fetchAuxiliaryData=function(){var e=z._asyncToGenerator(function*(a){try{const {data:c}=yield this.request(this.url+".aux.xml",{responseType:"xml",signal:null==a?void 0:a.signal});return G.parsePAMInfo(c)}catch{return null}});
return function(a){return e.apply(this,arguments)}}();return F}(O);A.__decorate([D.property()],y.prototype,"_files",void 0);A.__decorate([D.property()],y.prototype,"_storageIndex",void 0);A.__decorate([D.property({type:String,json:{write:!0}})],y.prototype,"datasetFormat",void 0);return y=A.__decorate([K.subclass("esri.layers.support.rasterIO.MRFRaster")],y)});
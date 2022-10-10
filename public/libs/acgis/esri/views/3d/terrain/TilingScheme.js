// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/Error ../../../core/mathUtils ../../../core/maybe ../../../core/unitUtils ../../../geometry/Extent ../../../geometry/projection ../../../geometry/SpatialReference ../../../geometry/support/aaBoundingRect ../../../geometry/support/spatialReferenceUtils ../../../geometry/support/webMercatorUtils ../../../layers/support/TileInfo".split(" "),function(w,B,n,m,r,C,D,E,y,F,z,t,u){function A(){return new n("tilingscheme:tile-info-missing",
"Tiling scheme must have tiling information")}let v=function(){function e(a){var b=e.checkUnsupported(a);if(r.isSome(b))throw b;a=r.unwrap(a);this.spatialReference=a.spatialReference;this._isWebMercator=this.spatialReference.isWebMercator;this._isGCS=E.canProjectToWGS84ComparableLonLat(this.spatialReference)||z.isMars(this.spatialReference)||z.isMoon(this.spatialReference);this.origin=[a.origin.x,a.origin.y];this.pixelSize=a.size[0];this.dpi=a.dpi;var c=a.lods.reduce((g,k,q)=>{k.level<g.min&&(g.min=
k.level,g.minIndex=q);g.max=Math.max(g.max,k.level);return g},{min:Infinity,minIndex:0,max:-Infinity}),d=a.lods[c.minIndex];const f=2**d.level;b=d.resolution*f;d=d.scale*f;this.levels=Array(c.max+1);for(c=0;c<this.levels.length;c++)this.levels[c]={resolution:b,scale:d,tileSize:[b*a.size[0],b*a.size[1]]},b/=2,d/=2}var h=e.prototype;h.clone=function(){return new e(this.toTileInfo())};h.toTileInfo=function(){return new u({dpi:this.dpi,origin:{x:this.origin[0],y:this.origin[1],spatialReference:this.spatialReference},
size:[this.pixelSize,this.pixelSize],spatialReference:this.spatialReference,lods:this.levels.map((a,b)=>({level:b,scale:a.scale,resolution:a.resolution}))})};h.getExtent=function(a,b,c,d){var f=this.levels[a];a=f.tileSize[0];f=f.tileSize[1];d[0]=this.origin[0]+c*a;d[2]=this.origin[0]+(c+1)*a;d[3]=this.origin[1]-b*f;d[1]=this.origin[1]-(b+1)*f};h.convertExtentToRadians=function(a,b){this._isWebMercator?(b[0]=t.x2lon(a[0]),b[1]=t.y2lat(a[1]),b[2]=t.x2lon(a[2]),b[3]=t.y2lat(a[3])):this._isGCS&&(b[0]=
m.deg2rad(a[0]),b[1]=m.deg2rad(a[1]),b[2]=m.deg2rad(a[2]),b[3]=m.deg2rad(a[3]))};h.getExtentGeometry=function(a,b,c,d=new D){this.getExtent(a,b,c,l);d.spatialReference=this.spatialReference;d.xmin=l[0];d.ymin=l[1];d.xmax=l[2];d.ymax=l[3];d.zmin=void 0;d.zmax=void 0;return d};h.ensureMaxLod=function(a){if(null==a)return!1;for(var b=!1;this.levels.length<=a;){b=this.levels[this.levels.length-1];const c=b.resolution/2;this.levels.push({resolution:c,scale:b.scale/2,tileSize:[c*this.pixelSize,c*this.pixelSize]});
b=!0}return b};h.capMaxLod=function(a){this.levels.length>a+1&&(this.levels.length=a+1)};h.getMaxLod=function(){return this.levels.length-1};h.scaleAtLevel=function(a){return this.levels[0].scale/2**a};h.levelAtScale=function(a){const b=this.levels[0].scale;return a>=b?0:Math.log(b/a)*Math.LOG2E};h.resolutionAtLevel=function(a){return this.levels[0].resolution/2**a};h.compatibleWith=function(a){if(!(a instanceof e)){if(e.checkUnsupported(a))return!1;a=new e(a)}if(!a.spatialReference.equals(this.spatialReference)||
a.pixelSize!==this.pixelSize)return!1;const b=Math.min(this.levels.length,a.levels.length)-1,c=this.levels[b].resolution;let d=.5*c;if(!m.floatEqualAbsolute(a.origin[0],this.origin[0],d)||!m.floatEqualAbsolute(a.origin[1],this.origin[1],d))return!1;d=.5*c/2**b/this.pixelSize*12;return m.floatEqualAbsolute(c,a.levels[b].resolution,d)};h.rootTilesInExtent=function(a,b=null,c=Infinity){const d=[],f=this.levels[0].tileSize;if(r.isNone(a)||0===f[0]||0===f[1])return d;e.computeRowColExtent(a,f,this.origin,
l);a=l[1];let g=l[3],k=l[0],q=l[2];var p=q-k;const x=g-a;p*x>c&&(c=Math.floor(Math.sqrt(c)),x>c&&(a=a+Math.floor(.5*x)-Math.floor(.5*c),g=a+c),p>c&&(k=k+Math.floor(.5*p)-Math.floor(.5*c),q=k+c));for(c=a;c<g;c++)for(p=k;p<q;p++)d.push([0,c,p]);r.isSome(b)&&(b[0]=this.origin[0]+k*f[0],b[1]=this.origin[1]-g*f[1],b[2]=this.origin[0]+q*f[0],b[3]=this.origin[1]-a*f[1]);return d};e.computeRowColExtent=function(a,b,c,d){const f=.001*(a[2]-a[0]+(a[3]-a[1]));d[0]=Math.max(0,Math.floor((a[0]+f-c[0])/b[0]));
d[2]=Math.max(0,Math.ceil((a[2]-f-c[0])/b[0]));d[1]=Math.max(0,Math.floor((c[1]-a[3]+f)/b[1]));d[3]=Math.max(0,Math.ceil((c[1]-a[1]-f)/b[1]))};e.isPowerOfTwo=function(a){a=a.lods;const b=a[0].resolution*2**a[0].level;return!a.some(c=>!m.floatEqualRelative(c.resolution,b/2**c.level))};e.hasGapInLevels=function(a){a=a.lods.map(b=>b.level);a.sort((b,c)=>b-c);for(let b=1;b<a.length;b++)if(a[b]!==a[0]+b)return!0;return!1};e.tileSizeSupported=function(a){const b=a.size[1];return b===a.size[0]&&0===(b&b-
1)&&128<=b&&512>=b};e.hasOriginPerLODs=function(a){const b=a.origin;return a.lods.some(c=>null!=c.origin&&(c.origin[0]!==b.x||c.origin[1]!==b.y))};e.getMissingTileInfoError=function(){return new n("tilingscheme:tile-info-missing","Tiling scheme must have tiling information")};e.checkUnsupported=function(a){return r.isNone(a)?A():1>a.lods.length?new n("tilingscheme:generic","Tiling scheme must have at least one level"):e.isPowerOfTwo(a)?e.hasGapInLevels(a)?new n("tilingscheme:gaps","Tiling scheme levels must not have gaps between min and max level"):
e.tileSizeSupported(a)?e.hasOriginPerLODs(a)?new n("tilingscheme:multiple-origin","Tiling scheme levels must not have their own origin"):null:new n("tilingscheme:tile-size","Tiles must be square and size must be one of [128, 256, 512]"):new n("tilingscheme:power-of-two","Tiling scheme must be power of two")};e.fromExtent=function(a,b){const c=a[2]-a[0],d=a[3]-a[1],f=C.getMetersPerUnitForSR(b),g=1.2*Math.max(c,d);a=new e(new u({size:[256,256],origin:{x:a[0]-.5*(g-c),y:a[3]+.5*(g-d)},lods:[{level:0,
resolution:g/256,scale:1/(256/96*.0254/(g*f))}],spatialReference:b}));a.ensureMaxLod(20);return a};e.makeWebMercatorAuxiliarySphere=function(a){const b=new e(e.WebMercatorAuxiliarySphereTileInfo);b.ensureMaxLod(a);return b};e.makeGCSWithTileSize=function(a,b=256,c=16){const d=256/b;a=new e(new u({size:[b,b],origin:{x:-180,y:90,spatialReference:a},spatialReference:a,lods:[{level:0,resolution:.703125*d,scale:2.95497598570834E8*d}]}));a.ensureMaxLod(c);return a};B._createClass(e,[{key:"test",get:function(){return{isWebMercator:this._isWebMercator,
isGCS:this._isGCS}}}]);return e}();v.WebMercatorAuxiliarySphereTileInfo=new u({size:[256,256],origin:{x:-2.0037508342787E7,y:2.0037508342787E7,spatialReference:y.WebMercator},spatialReference:y.WebMercator,lods:[{level:0,resolution:156543.03392800014,scale:5.91657527591555E8}]});v.WebMercatorAuxiliarySphere=v.makeWebMercatorAuxiliarySphere(19);const l=F.create();w.TilingScheme=v;w.getMissingTileInfoError=A;Object.defineProperties(w,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
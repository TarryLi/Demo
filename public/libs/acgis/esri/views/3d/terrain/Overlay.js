// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/mathUtils ../../../geometry/support/aaBoundingRect ./interfaces ../webgl-engine/lib/basicInterfaces ../webgl-engine/lib/LocalOriginFactory".split(" "),function(f,m,n,g,d,l,p){f.OverlaySource=void 0;(function(b){b[b.None=0]="None";b[b.ColorAndWater=1]="ColorAndWater";b[b.Highlight=2]="Highlight";b[b.Occluded=3]="Occluded"})(f.OverlaySource||(f.OverlaySource={}));let r=function(){function b(a,c){this.index=a;this.renderTargets=
c;this._extent=g.create();this.resolution=0;this.renderLocalOrigin=p.fromValues(0,0,0,"O");this.mapUnitsPerPixel=this.pixelRatio=1;this.canvasGeometries=new q;this.validTargets=null;this.hasTargetWithoutRasterImage=this.hasDrapedRasterSource=this.hasDrapedFeatureSource=!1;this.index=a;this.validTargets=Array(c.renderTargets.length).fill(!1)}var e=b.prototype;e.getValidTexture=function(a){return this.validTargets[a]?this.renderTargets.getTarget(a).getTexture():null};e.getColorTexture=function(a){return(a=
a===f.OverlaySource.ColorAndWater?this.renderTargets.getTarget(d.RenderTargetType.Color):a===f.OverlaySource.Highlight?this.renderTargets.getTarget(d.RenderTargetType.Highlight):this.renderTargets.getTarget(d.RenderTargetType.Occluded))?a.getTexture():null};e.getColorTextureNoRasterImage=function(){return this._needsColorWithoutRasterImage?this.getValidTexture(d.RenderTargetType.ColorNoRasterImage):this.hasDrapedFeatureSource?this.getValidTexture(d.RenderTargetType.Color):null};e.getNormalTexture=
function(a){return(a=a===f.OverlaySource.ColorAndWater?this.renderTargets.getTarget(d.RenderTargetType.Water):null)?a.getTexture():null};e.draw=function(a,c){const h=this.computeRenderTargetValidityBitfield();for(const k of this.renderTargets.renderTargets)this.validTargets[k.type]=k.type!==d.RenderTargetType.ColorNoRasterImage||this._needsColorWithoutRasterImage?a.drawTarget(this,k,c):!1;a=this.computeRenderTargetValidityBitfield();return h^a?l.ValidationState.CHANGED:l.ValidationState.UNCHANGED};
e.computeRenderTargetValidityBitfield=function(){const a=this.validTargets;return+a[d.RenderTargetType.Color]|+a[d.RenderTargetType.ColorNoRasterImage]<<1|+a[d.RenderTargetType.Highlight]<<2|+a[d.RenderTargetType.Water]<<3|+a[d.RenderTargetType.Occluded]<<4};e.setupGeometryViewsCyclical=function(a){this.setupGeometryViewsDirect();var c=.001*a.range;if(this._extent[0]-c<=a.min){const h=this.canvasGeometries.extents[this.canvasGeometries.numViews++];g.offset(this._extent,a.range,0,h)}this._extent[2]+
c>=a.max&&(c=this.canvasGeometries.extents[this.canvasGeometries.numViews++],g.offset(this._extent,-a.range,0,c))};e.setupGeometryViewsDirect=function(){this.canvasGeometries.numViews=1;g.copy(this.canvasGeometries.extents[0],this._extent)};e.hasSomeSizedView=function(){for(let a=0;a<this.canvasGeometries.numViews;a++){const c=this.canvasGeometries.extents[a];if(c[0]!==c[2]&&c[1]!==c[3])return!0}return!1};e.applyViewport=function(a){a.setViewport(this.index===d.OverlayIndex.INNER?0:this.resolution,
0,this.resolution,this.resolution)};m._createClass(b,[{key:"extent",get:function(){return this._extent}},{key:"_needsColorWithoutRasterImage",get:function(){return this.hasDrapedRasterSource&&this.hasDrapedFeatureSource&&this.hasTargetWithoutRasterImage}}]);return b}(),q=function(){this.extents=[g.create(),g.create(),g.create()];this.numViews=0};f.Overlay=r;f.computeOverlayResolution=function(b,e,a){return Math.min(n.nextHighestPowerOfTwo(Math.max(b,e)+256),a)};Object.defineProperties(f,{__esModule:{value:!0},
[Symbol.toStringTag]:{value:"Module"}})});
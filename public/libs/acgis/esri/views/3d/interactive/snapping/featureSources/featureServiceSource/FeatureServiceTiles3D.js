// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../chunks/tslib.es6 ../../../../../../core/HandleOwner ../../../../../../core/maybe ../../../../../../core/reactiveUtils ../../../../../../core/accessorSupport/decorators/property ../../../../../../core/arrayUtils ../../../../../../core/has ../../../../../../core/accessorSupport/ensureType ../../../../../../core/accessorSupport/decorators/subclass ../../../../layers/support/FeatureTileDescriptor3D ../../../../../interactive/snapping/featureSources/featureServiceSource/tileUtils".split(" "),
function(c,p,d,r,l,q,e,y,z,A,t,u,m){function v({lij:[h,f,k],extent:a}){return{id:`${h}/${f}/${k}`,level:h,row:f,col:k,extent:a}}c.FeatureServiceTiles3D=function(h){function f(a){a=h.call(this,a)||this;a.pointOfInterest=null;return a}p._inheritsLoose(f,h);var k=f.prototype;k.initialize=function(){this.handles.add(q.watch(()=>this.view.featureTiles,a=>{this.handles.remove("feature-tiles");a&&this.handles.add(a.addClient(),"feature-tiles")},q.initial))};k._filterTiles=function(a){return l.isNone(a)?
[]:a.filter(b=>50<Math.abs(b.measures.screenRect[3]-b.measures.screenRect[1])&&b.measures.visibility===u.Visibility.VISIBLE_ON_SURFACE)};p._createClass(f,[{key:"tiles",get:function(){const a=this.tilesCoveringView,b=this.effectivePointOfInterest;if(l.isSome(b)){const n=a.map(g=>m.distanceToTile(b,g));for(let g=1;g<n.length;g++)if(n[g-1]>n[g])return a.sort((w,x)=>m.distanceToTile(b,w)-m.distanceToTile(b,x)),a.slice()}return a}},{key:"tilesCoveringView",get:function(){var a,b;return this._filterTiles(null==
(a=this.view.featureTiles)?void 0:null==(b=a.tiles)?void 0:b.toArray()).map(v)}},{key:"tileInfo",get:function(){var a,b;return null!=(a=null==(b=this.view.featureTiles)?void 0:b.tilingScheme.toTileInfo())?a:null}},{key:"tileSize",get:function(){var a,b;return null!=(a=null==(b=this.view.featureTiles)?void 0:b.tileSize)?a:256}},{key:"effectivePointOfInterest",get:function(){var a;const b=this.pointOfInterest;return l.isSome(b)?b:null==(a=this.view.pointsOfInterest)?void 0:a.focus.location}}]);return f}(r.HandleOwner);
d.__decorate([e.property({readOnly:!0})],c.FeatureServiceTiles3D.prototype,"tiles",null);d.__decorate([e.property({readOnly:!0})],c.FeatureServiceTiles3D.prototype,"tilesCoveringView",null);d.__decorate([e.property({readOnly:!0})],c.FeatureServiceTiles3D.prototype,"tileInfo",null);d.__decorate([e.property({readOnly:!0})],c.FeatureServiceTiles3D.prototype,"tileSize",null);d.__decorate([e.property({constructOnly:!0})],c.FeatureServiceTiles3D.prototype,"view",void 0);d.__decorate([e.property()],c.FeatureServiceTiles3D.prototype,
"pointOfInterest",void 0);d.__decorate([e.property()],c.FeatureServiceTiles3D.prototype,"effectivePointOfInterest",null);c.FeatureServiceTiles3D=d.__decorate([t.subclass("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")],c.FeatureServiceTiles3D);Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
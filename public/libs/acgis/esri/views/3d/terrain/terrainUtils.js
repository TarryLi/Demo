// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../core/Collection ../../../core/compilerUtils ../../../core/maybe ../../../geometry/support/spatialReferenceUtils ../../../layers/support/layerUtils ../../ViewingMode ../support/StreamDataLoader ./interfaces ../../../chunks/terrainUtilsPlanar ../../../chunks/terrainUtilsSpherical".split(" "),function(b,B,C,g,v,D,l,E,c,m,n){function p(a){return"imagery-tile"===(null==a?void 0:a.type)||"wcs"===(null==a?void 0:a.type)}function k(a){return"imagery-tile-3d"===(null==a?void 0:a.type)}
function q(a){return"tile-3d"===(null==a?void 0:a.type)}function r(a){return"vector-tile-3d"===(null==a?void 0:a.type)}function t(a){return"wmts-3d"===(null==a?void 0:a.type)}function w(a){return"elevation-3d"===(null==a?void 0:a.type)}function x(a){return a&&(q(a)||k(a)||r(a)||t(a))}function u(a,d,f,e){return F[e].checkIfTileInfoSupportedForViewSR(a,f,d)}function y(a,d,f){a=D.getTileMaxtrixSetFromActiveLayer(a);if(g.isSome(a))if(B.isCollection(a)){if(a=a.find(e=>null==u(e.tileInfo,e.fullExtent,d,
f)))return{tileInfo:a.tileInfo,fullExtent:a.fullExtent}}else return{tileInfo:a.tileInfo,fullExtent:a.fullExtent};return{tileInfo:null,fullExtent:null}}function z(a){return a.isWGS84||a.isWebMercator||v.isCGCS2000(a)||!v.isEarth(a)}const F={[l.ViewingMode.Global]:n.terrainUtilsSpherical,[l.ViewingMode.Local]:m.terrainUtilsPlanar};b.ENABLE_WATERPROOFNESS_TESTS=!1;const A={force512VTL:!1};m=[c.NeighborIndex.NORTH,c.NeighborIndex.EAST,c.NeighborIndex.SOUTH,c.NeighborIndex.WEST];n=[c.NeighborIndex.NORTH_EAST,
c.NeighborIndex.SOUTH_EAST,c.NeighborIndex.SOUTH_WEST,c.NeighborIndex.NORTH_WEST];b.ENABLE_TERRAIN_INTERNAL_CHECKS=!1;b.almostEquals=function(a,d,f=1E-5){return Math.abs(a-d)<f};b.checkIfTileInfoSupportedForView=u;b.enableWaterproofnessTests=function(a){b.ENABLE_WATERPROOFNESS_TESTS=a};b.eps=1E-5;b.getLayerWithExtentRange=function(a){return k(a)?{fullExtent:a.fullExtent,minScale:a.layer.minScale,maxScale:a.layer.maxScale,tilemapCache:null}:a.layer};b.getTileInfoAndExtentFromWMTSLayer=y;b.getTiledLayerInfo=
function(a,d,f){var e=null;let h=null;if("wmts"===(null==a?void 0:a.type))a=y(a,d,f),e=a.tileInfo,h=a.fullExtent;else if(h=p(a)?a.getCompatibleFullExtent(d):a.fullExtent,e=f===l.ViewingMode.Local,p(a))e=a.getCompatibleTileInfo(d,h,e);else if("vector-tile"===(null==a?void 0:a.type)){e=e&&!z(d)||A.force512VTL;const G=a.tileInfo.spatialReference.isGeographic;e=e?a.tileInfo:a.tileInfo.getOrCreateCompatible(256,G?1:2)}else e=a.tileInfo;return g.isSome(e)&&g.isSome(h)&&null==u(e,h,d,f)?{tileInfo:e,fullExtent:h}:
null};b.internalAssert=function(a,d){};b.isBlendableLayerView=function(a){return a&&(q(a)||t(a)||k(a)||r(a))};b.isEast=function(a){return a===c.NeighborIndex.NORTH_EAST||a===c.NeighborIndex.EAST||a===c.NeighborIndex.SOUTH_EAST};b.isElevationLayerView=w;b.isGroupLayer=function(a){return"group"===(null==a?void 0:a.type)};b.isImageryTileLayerView=k;b.isImageryTileRenderInfo=function(a){var d;a=null==a?void 0:null==(d=a.sourceLayerInfo)?void 0:d.data;return g.isSome(a)&&"type"in a&&"raster-tile"===a.type};
b.isMapTileLayerView=x;b.isNorth=function(a){return a===c.NeighborIndex.NORTH_EAST||a===c.NeighborIndex.NORTH||a===c.NeighborIndex.NORTH_WEST};b.isNorthCorner=function(a){return a===c.NeighborIndex.NORTH_WEST||a===c.NeighborIndex.NORTH_EAST};b.isProjectableRasterLayer=p;b.isRasterTileRenderInfo=function(a){var d;a=null==a?void 0:null==(d=a.sourceLayerInfo)?void 0:d.data;return a instanceof HTMLImageElement||a instanceof E.ImageWithType||a instanceof HTMLCanvasElement||a instanceof ImageData};b.isSouth=
function(a){return a===c.NeighborIndex.SOUTH_EAST||a===c.NeighborIndex.SOUTH||a===c.NeighborIndex.SOUTH_WEST};b.isSurfaceLayerView=function(a){return x(a)||w(a)};b.isTerrainSurfaceLayer=function(a){switch(a.type){case "building-scene":case "csv":case "feature":case "geo-rss":case "geojson":case "graphics":case "group":case "integrated-mesh":case "kml":case "line-of-sight":case "map-notes":case "ogc-feature":case "point-cloud":case "route":case "scene":case "stream":case "voxel":case "subtype-group":case "unknown":case "unsupported":case "wfs":case null:return!1;
case "base-dynamic":case "base-elevation":case "base-tile":case "bing-maps":case "elevation":case "imagery":case "imagery-tile":case "map-image":case "media":case "open-street-map":case "tile":case "vector-tile":case "wcs":case "web-tile":case "wms":case "wmts":return!0;default:return C.neverReached(a.type),!1}};b.isTextureTileRenderInfo=function(a){var d;a=null==a?void 0:null==(d=a.sourceLayerInfo)?void 0:d.data;return g.isSome(a)&&"type"in a&&"tile-texture"===a.type};b.isTileLayerView=q;b.isVectorTileLayerView=
r;b.isVectorTileRenderInfo=function(a){var d;a=null==a?void 0:null==(d=a.sourceLayerInfo)?void 0:d.data;return g.isSome(a)&&"type"in a&&"vector-tile"===a.type};b.isWMTSLayerView=t;b.isWest=function(a){return a===c.NeighborIndex.NORTH_WEST||a===c.NeighborIndex.WEST||a===c.NeighborIndex.SOUTH_WEST};b.isWestCorner=function(a){return a===c.NeighborIndex.NORTH_WEST||a===c.NeighborIndex.SOUTH_WEST};b.lij2s=function(a){return"["+a[0]+","+a[1]+","+a[2]+"]"};b.neighborCornerIndices=n;b.neighborEdgeIndices=
m;b.oppositeCorner=function(a){return a===c.NeighborIndex.NORTH_EAST?c.NeighborIndex.SOUTH_WEST:a===c.NeighborIndex.NORTH_WEST?c.NeighborIndex.SOUTH_EAST:a===c.NeighborIndex.SOUTH_WEST?c.NeighborIndex.NORTH_EAST:c.NeighborIndex.NORTH_WEST};b.oppositeEdge=function(a){return a===c.NeighborIndex.NORTH?c.NeighborIndex.SOUTH:a===c.NeighborIndex.EAST?c.NeighborIndex.WEST:a===c.NeighborIndex.SOUTH?c.NeighborIndex.NORTH:c.NeighborIndex.EAST};b.releaseTileData=function(a){g.isSome(a)&&"release"in a&&a.release();
return null};b.test=A;b.useFetchTileForLayer=function(a){return a.fetchTile&&!1!==a.hasOverriddenFetchTile};b.v32s=function(a){return"("+a[0]+","+a[1]+","+a[2]+")"};b.vtlAssumes256PixelSizeAsDefault=z;b.weakAssert=function(a,d){a||console.warn("Terrain: "+d)};Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../chunks/_rollupPluginBabelHelpers"],function(g,h,l){function b(){b=l._asyncToGenerator(function*(a,c){if(!a)return null;switch(a.type){case "symbol":return new (yield new Promise((d,e)=>g(["./tileRenderers/SymbolTileRenderer"],f=>d(k(f)),e))).default(c);case "heatmap":return new (yield new Promise((d,e)=>g(["./tileRenderers/HeatmapTileRenderer"],f=>d(k(f)),e))).default(c)}});return b.apply(this,arguments)}const k=a=>Object.freeze(Object.defineProperty({__proto__:null,
default:a},Symbol.toStringTag,{value:"Module"}));h.createOrReuseTileRenderer=function(a,c){return b.apply(this,arguments)};Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/Error ../../../core/maybe ../../../renderers/support/rasterRendererHelper ../support/utils".split(" "),function(e,f,g,l,m,n){function p(a){return c.apply(this,arguments)}function c(){c=f._asyncToGenerator(function*(a){a=yield n.processRasterRendererParameters(a);const b=a.layer.supportsMultidirectionalHillshade();if("multi-directional"===a.hillshadeType&&!b)throw new g("raster-shaded-relief-renderer:not-supported","multi-directional hillshade type is only supported on 10.8.1+ servers");
b||(a.hillshadeType="traditional");return a});return c.apply(this,arguments)}function d(){d=f._asyncToGenerator(function*(a){a=yield p(a);const b=m.createShadedReliefRenderer(a.layer.rasterInfo,a.hillshadeType);if(l.isNone(b))throw new g("raster-shaded-relief-renderer:not-supported","Only elevation raster data is supported");{const {scalingType:h,colorRamp:k}=a;null!=h&&(b.scalingType=h);void 0!==k&&(b.colorRamp=k)}return{renderer:b}});return d.apply(this,arguments)}e.createRenderer=function(a){return d.apply(this,
arguments)};Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
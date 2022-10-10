// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../core/Error ../../core/maybe ../../geometry/support/scaleUtils ../../renderers/visualVariables/SizeVariable ../statistics/spatialStatistics ../support/adapters/support/layerUtils".split(" "),function(l,e,m,n,p,q,f){function r(a){return g.apply(this,arguments)}function g(){g=l._asyncToGenerator(function*(a){var {view:b}=a;if(!(a&&b&&a.layer))throw new e("outline:missing-parameters","'view' and 'layer' parameters are required");const {layer:d,...h}=
a;a=f.createLayerAdapter(d,f.featureCapableLayerTypes);const c={layerAdapter:a,...h};if(!a)throw new e("outline:invalid-parameters","'layer' must be one of these types: "+f.getLayerTypeLabels(f.featureCapableLayerTypes).join(", "));yield b.when();b=m.isSome(c.signal)?{signal:c.signal}:null;yield a.load(b);if("polygon"!==a.geometryType)throw new e("outline:not-supported",`outline is not supported for geometryType: ${a.geometryType}`);return c});return g.apply(this,arguments)}function t(a,b){const d=
a.avgSize,h=n.getScaleForResolution(1,b.spatialReference);a=u.map(c=>({size:c.width,value:Math.round(d/c.size*h)}));a.sort((c,v)=>c.value-v.value);return{visualVariables:[new p({target:"outline",valueExpression:"$view.scale",stops:a})],opacity:.25}}function k(){k=l._asyncToGenerator(function*(a){const {layerAdapter:b,...d}=yield r(a);a=yield b.getSampleFeatures({sampleSize:-1,returnGeometry:!0,...d});a=yield q({features:a,geometryType:b.geometryType});if(!("avgSize"in a&&a.avgSize))throw new e("outline:insufficient-info",
"average polygon size is invalid");return t(a,d.view)});return k.apply(this,arguments)}const u=[{size:10,width:0},{size:20,width:.5},{size:80,width:1},{size:250,width:2}];return function(a){return k.apply(this,arguments)}});
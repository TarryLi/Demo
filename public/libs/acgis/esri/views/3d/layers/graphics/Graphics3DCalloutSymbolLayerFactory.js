// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/Logger","../../../../symbols/callouts/calloutUtils","./Graphics3DLineCalloutSymbolLayer"],function(b,e,f,g){const c=e.getLogger("esri.views.3d.layers.graphics.Graphics3DCalloutSymbolLayerFactory"),h={line:g.Graphics3DLineCalloutSymbolLayer};b.make=function(a,k){if(!f.hasCalloutSupport(a))return c.error("Graphics3DCalloutSymbolLayerFactory#make",`symbol of type '${a.type}' does not support callouts`),null;if(!a.callout)return null;const d=h[a.callout.type];return d?
new d(a,k):(c.error("Graphics3DCalloutSymbolLayerFactory#make",`unknown or unsupported callout type ${a.callout.type}`),null)};Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
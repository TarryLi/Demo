// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../core/Error ../../core/lang ../../core/maybe ../../core/object ../../core/accessorSupport/extensions/serializableProperty/writer ../../layers/support/layerUtils".split(" "),function(e,n,p,m,q,f,g){function h(a,d){"maxScale"in a&&(d.maxScale=f.numberToJSON(a.maxScale));"minScale"in a&&(d.minScale=f.numberToJSON(a.minScale))}const k=new Set("bing-maps imagery imagery-tile map-image open-street-map tile unknown unsupported vector-tile web-tile wms wmts".split(" ")),l=new Set("csv feature geo-rss geojson group imagery imagery-tile kml map-image map-notes ogc-feature route tile unknown unsupported vector-tile web-tile wfs wms wmts".split(" "));
e.disableRestrictedWriting=function(a){k.add(a);l.add(a)};e.enableRestrictedWriting=function(a){k.delete(a);l.delete(a)};e.getLayerJSON=function(a,d,b){if(!("write"in a&&a.write))return b&&b.messages&&b.messages.push(new n("layer:unsupported",`Layers (${a.title}, ${a.id}) of type '${a.declaredClass}' cannot be persisted`,{layer:a})),null;if(b.restrictedWebMapWriting){var c="basemap"===b.layerContainerType?k:"operational-layers"===b.layerContainerType?l:null;c=m.isSome(c)?c.has(a.type)&&!g.isFeatureCollectionLayer(a):
!0}else c=!0;if(c)return d={},a.write(d,b)?d:null;if(m.isSome(d)&&(b=d=p.clone(d),g.isFeatureCollectionLayer(a)?(c=(c=q.getDeepValue("featureCollection.layers",b))&&c[0]&&c[0].layerDefinition)&&h(a,c):"stream"===a.type?(c=b.layerDefinition=b.layerDefinition||{},h(a,c)):"group"!==a.type&&h(a,b),"blendMode"in a&&(b.blendMode=a.blendMode,"normal"===b.blendMode&&delete b.blendMode),b.opacity=f.numberToJSON(a.opacity),b.title=a.title||"Layer",b.visibility=a.visible,"legendEnabled"in a&&"wmts"!==a.type))if(g.isFeatureCollectionLayer(a)){if(b=
b.featureCollection)b.showLegend=a.legendEnabled}else b.showLegend=a.legendEnabled;return d};Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
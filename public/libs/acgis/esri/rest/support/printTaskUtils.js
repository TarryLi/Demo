// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../core/screenUtils","../../renderers/visualVariables/support/visualVariableUtils"],function(g,m,n){function p(a){return a&&"blendMode"in a&&"effect"in a}function q(a){return"esri.views.2d.layers.GroupLayerView2D"===(null==a?void 0:a.declaredClass)}g.applyVisualVariables=function(a,c){const {graphic:e,renderer:b,symbol:f}=c;c=f.type;if("text"!==c&&"shield-label-symbol"!==c&&"visualVariables"in b&&b.visualVariables){var d=b.getVisualVariablesForType("size"),l=b.getVisualVariablesForType("color"),
k=b.getVisualVariablesForType("opacity"),h=b.getVisualVariablesForType("rotation");d=d[0];l=l[0];k=k[0];h=h[0];d&&(d=n.getSize(d,e,{shape:"simple-marker"===c?f.style:null}),null!=d&&("simple-marker"===c?a.size=m.px2pt(d):"picture-marker"===c?(a.width=m.px2pt(d),a.height=m.px2pt(d)):"simple-line"===c?a.width=m.px2pt(d):a.outline&&(a.outline.width=m.px2pt(d))));l&&((d=n.getColor(l,e))&&"simple-marker"===c||"simple-line"===c||"simple-fill"===c)&&(a.color=d?d.toJSON():void 0);k&&(c=n.getOpacity(k,e),
null!=c&&a.color&&(a.color[3]=Math.round(255*c)));h&&(a.angle=-n.getRotationAngle(b,e))}};g.createMultipointLayer=function(){return{layerDefinition:{name:"multipointLayer",geometryType:"esriGeometryMultipoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryMultipoint",features:[]}}};g.createPointLayer=function(){return{layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}}};g.createPolygonLayer=
function(){return{layerDefinition:{name:"polygonLayer",geometryType:"esriGeometryPolygon",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolygon",features:[]}}};g.createPolylineLayer=function(){return{layerDefinition:{name:"polylineLayer",geometryType:"esriGeometryPolyline",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolyline",features:[]}}};g.getContextBoundingBox=function(a,c=15){const e=a.canvas.width;var b=a.canvas.height;a=a.getImageData(0,0,e,b).data;
let f,d,l,k,h;f=b;a:for(;f--;)for(b=e;b--;)if(a[4*(e*f+b)+3]>c){h=f;break a}if(!h)return null;b=e;a:for(;b--;)for(f=h+1;f--;)if(a[4*(e*f+b)+3]>c){k=b;break a}b=0;a:for(;b<=k;++b)for(f=h+1;f--;)if(a[4*(e*f+b)+3]>c){d=b;break a}f=0;a:for(;f<=h;++f)for(b=d;b<=k;++b)if(a[4*(e*f+b)+3]>c){l=f;break a}return{x:d,y:l,width:k-d,height:h-l}};g.getVisibleLayerViews=function(a,c){const e=a.allLayerViews.items;if(c===a.scale)return e.filter(b=>!b.suspended);a=[];for(const b of e)if(!q(b.parent)||a.includes(b.parent))!b.visible||
c&&"isVisibleAtScale"in b&&!b.isVisibleAtScale(c)||a.push(b);return a};g.isBingMapsLayer=function(a){return"bing-maps"===(null==a?void 0:a.type)};g.isBlendLayer=p;g.isCSVLayer=function(a){return"csv"===(null==a?void 0:a.type)};g.isScreenshotRequired=function(a){const c=a.layer;if(p(c)){const e=c.blendMode;if((!e||"normal"===e)&&(c.effect||"featureEffect"in a&&a.featureEffect))return!0}return!1};Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../symbols ../../core/Error ../WebStyleSymbol ../PointSymbol3D ../SimpleLineSymbol ../LineSymbol3D ../SimpleMarkerSymbol ../PictureMarkerSymbol ../SimpleFillSymbol ../PolygonSymbol3D ../TextSymbol ../LabelSymbol3D".split(" "),function(f,g,h,l,d,m,n,p,q,r,t,u,v){const c={retainId:!1,ignoreDrivers:!1,hasLabelingContext:!0};f.to3D=function(a,e=c){if(!a)return{symbol:null};const {retainId:w=c.retainId,ignoreDrivers:x=c.ignoreDrivers,hasLabelingContext:y=c.hasLabelingContext,retainCIM:z=
c.retainCIM}=e;if(g.isSymbol3D(a)||a instanceof l)var b=a.clone();else if("cim"===a.type){var k;e=null==(b=a.data)?void 0:null==(k=b.symbol)?void 0:k.type;if("CIMPointSymbol"!==e)return{error:new h("symbol-conversion:unsupported-cim-symbol",`CIM symbol of type '${e||"unknown"}' is unsupported in 3D`,{symbol:a})};b=z?a.clone():d.fromCIMSymbol(a)}else if(a instanceof m)b=n.fromSimpleLineSymbol(a);else if(a instanceof p)b=d.fromSimpleMarkerSymbol(a);else if(a instanceof q)b=d.fromPictureMarkerSymbol(a);
else if(a instanceof r)b=t.fromSimpleFillSymbol(a);else if(a instanceof u)b=y?v.fromTextSymbol(a):d.fromTextSymbol(a);else return{error:new h("symbol-conversion:unsupported-2d-symbol",`2D symbol of type '${a.type||a.declaredClass}' is unsupported in 3D`,{symbol:a})};w&&"cim"!==b.type&&(b.id=a.id);if(x&&g.isSymbol3D(b))for(a=0;a<b.symbolLayers.length;++a)b.symbolLayers.getItemAt(a)._ignoreDrivers=!0;return{symbol:b}};Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
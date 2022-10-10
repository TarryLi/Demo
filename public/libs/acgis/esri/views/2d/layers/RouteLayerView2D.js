// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Collection ../../../core/CollectionFlattener ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../rest/support/DirectionLine ../../../rest/support/DirectionPoint ../../../rest/support/PointBarrier ../../../rest/support/PolygonBarrier ../../../rest/support/PolylineBarrier ../../../rest/support/RouteInfo ../../../rest/support/Stop ./LayerView2D ./graphics/GraphicContainer ./graphics/GraphicsView2D ../../layers/LayerView".split(" "),
function(l,n,p,v,g,q,u,h,M,N,w,x,y,z,A,B,C,D,E,F,G,H){function r(e){return e instanceof x||e instanceof y||e instanceof z||e instanceof A||e instanceof B||e instanceof C||e instanceof D}function I(e){return p.isCollection(e)&&e.length&&r(e.getItemAt(0))}function J(e){return Array.isArray(e)&&e.length&&r(e[0])}const K=Object.freeze({remove(){},pause(){},resume(){}}),L="route-info direction-line direction-point polygon-barrier polyline-barrier point-barrier stop".split(" "),k={graphic:null,property:null,
oldValue:null,newValue:null};h=function(e){function m(){var a=e.apply(this,arguments)||this;a._graphics=new p;a._highlightIds=new Map;a._networkFeatureMap=new Map;a._networkGraphicMap=new Map;return a}l._inheritsLoose(m,e);var d=m.prototype;d.initialize=function(){this.updatingHandles.addOnCollectionChange(()=>this._routeItems,a=>this._routeItemsChanged(a),q.initial)};d.destroy=function(){this.handles.removeAll();this.updatingHandles.removeAll();this._networkFeatureMap.clear();this._networkGraphicMap.clear();
this._graphics.removeAll()};d.attach=function(){this._createGraphicsView()};d.detach=function(){this._destroyGraphicsView()};d.fetchPopupFeatures=function(){var a=l._asyncToGenerator(function*(b){return this._graphicsView.hitTest(b).filter(c=>!!c.popupTemplate)});return function(b){return a.apply(this,arguments)}}();d.highlight=function(a){const b=(r(a)?[this._getNetworkFeatureUid(a)]:J(a)?a.map(c=>this._getNetworkFeatureUid(c)):I(a)?a.map(c=>this._getNetworkFeatureUid(c)).toArray():[a.uid]).filter(g.isSome);
if(!b.length)return K;this._addHighlight(b);return{remove:()=>this._removeHighlight(b)}};d.hitTest=function(){var a=l._asyncToGenerator(function*(b,c){if(this.suspended)return null;c=this._graphicsView.hitTest(b).filter(g.isSome).map(t=>this._networkGraphicMap.get(t));if(!c.length)return null;const {layer:f}=this;return c.reverse().map(t=>({type:"route",layer:f,mapPoint:b,networkFeature:t}))});return function(b,c){return a.apply(this,arguments)}}();d.isUpdating=function(){return this._graphicsView.updating};
d.moveStart=function(){};d.moveEnd=function(){};d.update=function(a){this._graphicsView.processUpdate(a)};d.viewChange=function(){this._graphicsView.viewChange()};d._addHighlight=function(a){for(const b of a)this._highlightIds.has(b)?(a=this._highlightIds.get(b),this._highlightIds.set(b,a+1)):this._highlightIds.set(b,1);this._updateHighlight()};d._createGraphic=function(a){a=a.toGraphic();a.layer=this.layer;a.sourceLayer=this.layer;return a};d._createGraphicsView=function(){const a=this.view,b=new F(a.featuresTilingScheme);
this._graphicsView=new G({container:b,graphics:this._graphics,requestUpdateCallback:()=>this.requestUpdate(),view:a});this.container.addChild(b);this._updateHighlight()};d._destroyGraphicsView=function(){this.container.removeChild(this._graphicsView.container);this._graphicsView.destroy()};d._getDrawOrder=function(a){a=this._networkGraphicMap.get(a);return L.indexOf(a.type)};d._getNetworkFeatureUid=function(a){return this._networkFeatureMap.has(a)?this._networkFeatureMap.get(a).uid:null};d._removeHighlight=
function(a){for(const b of a)this._highlightIds.has(b)&&(a=this._highlightIds.get(b)-1,0===a?this._highlightIds.delete(b):this._highlightIds.set(b,a));this._updateHighlight()};d._routeItemsChanged=function(a){if(a.removed.length){this._graphics.removeMany(a.removed.map(b=>{const c=this._networkFeatureMap.get(b);this._networkFeatureMap.delete(b);this._networkGraphicMap.delete(c);return c}));for(const b of a.removed)this.handles.remove(b)}if(a.added.length){this._graphics.addMany(a.added.map(b=>{const c=
this._createGraphic(b);if(g.isNone(c.symbol))return null;this._networkFeatureMap.set(b,c);this._networkGraphicMap.set(c,b);return c}).filter(g.isSome));for(const b of a.added)this.handles.add([q.watch(()=>b.geometry,(c,f)=>{this._updateGraphic(b,"geometry",c,f)}),q.watch(()=>b.symbol,(c,f)=>{this._updateGraphic(b,"symbol",c,f)})],b);this._graphics.sort((b,c)=>this._getDrawOrder(b)-this._getDrawOrder(c))}};d._updateGraphic=function(a,b,c,f){this._networkFeatureMap.has(a)?(a=this._networkFeatureMap.get(a),
a[b]=c,k.graphic=a,k.property=b,k.oldValue=f,k.newValue=c,this._graphicsView.graphicUpdateHandler(k)):(b=this._createGraphic(a),this._networkFeatureMap.set(a,b),this._networkGraphicMap.set(b,a),this._graphics.add(b))};d._updateHighlight=function(){const a=Array.from(this._highlightIds.keys());this._graphicsView.setHighlight(a)};l._createClass(m,[{key:"_routeItems",get:function(){return new v({getCollections:()=>[g.isSome(this.layer.routeInfo)?new p([this.layer.routeInfo]):null,this.layer.directionLines,
this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}}]);return m}(E.LayerView2DMixin(H));n.__decorate([u.property()],h.prototype,"_graphics",void 0);n.__decorate([u.property()],h.prototype,"_routeItems",null);return h=n.__decorate([w.subclass("esri.views.2d.layers.RouteLayerView2D")],h)});
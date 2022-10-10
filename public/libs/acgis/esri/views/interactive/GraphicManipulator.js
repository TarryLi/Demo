// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/Evented ../../core/maybe ../../core/reactiveUtils ../../core/screenUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../chunks/vec2 ../../chunks/vec3 ../../chunks/vec3f64 ../../geometry/projection ../../support/elevationInfoUtils ../../symbols/support/defaults ../../symbols/support/ElevationInfo ../support/drapedUtils".split(" "),
function(b,q,d,w,x,h,r,m,g,H,I,J,y,z,A,B,p,C,D,E,F){b.GraphicManipulator=function(t){function n(a){a=t.call(this,a)||this;a.layer=null;a.interactive=!0;a.selectable=!1;a.grabbable=!0;a.dragging=!1;a.cursor=null;a.events=new x.EventEmitter;a._circleCollisionCache=null;a._graphicSymbolChangedHandle=null;a._originalSymbol=null;return a}q._inheritsLoose(n,t);var k=n.prototype;k.grabbableForEvent=function(){return!0};k.destroy=function(){this.detachSymbolChanged();this._resetGraphicSymbol();this._set("view",
null)};k.intersectionDistance=function(a){const c=this.graphic;if(!1===c.visible)return null;const e=c.geometry;if(h.isNone(e))return null;var f=this._get("focusedSymbol");f=h.isSome(f)?f:c.symbol;return"2d"===this.view.type?this._intersectDistance2D(this.view,a,e,f):this._intersectDistance3D(this.view,a,c)};k.attach=function(){this.attachSymbolChanged();h.isSome(this.layer)&&this.layer.add(this.graphic)};k.detach=function(){this.detachSymbolChanged();this._resetGraphicSymbol();h.isSome(this.layer)&&
this.layer.remove(this.graphic)};k.attachSymbolChanged=function(){this.detachSymbolChanged();this._graphicSymbolChangedHandle=r.watch(()=>{var a;return null==(a=this.graphic)?void 0:a.symbol},a=>{h.isSome(a)&&a!==this.focusedSymbol&&a!==this._originalSymbol&&(this._originalSymbol=a,this._focused&&h.isSome(this.focusedSymbol)&&(this.graphic.symbol=this.focusedSymbol))},r.sync)};k.detachSymbolChanged=function(){h.isSome(this._graphicSymbolChangedHandle)&&(this._graphicSymbolChangedHandle.remove(),this._graphicSymbolChangedHandle=
null)};k._updateGraphicSymbol=function(){this.graphic.symbol=this._focused&&h.isSome(this.focusedSymbol)?this.focusedSymbol:this._originalSymbol};k._resetGraphicSymbol=function(){this.graphic.symbol=this._originalSymbol};k._intersectDistance2D=function(a,c,e,f){f=f||D.getDefaultSymbol2D(e);if(h.isNone(f))return null;var l=this._circleCollisionCache;if("point"!==e.type||"simple-marker"!==f.type)return F.intersectsDrapedGeometry(c,e,a)?1:null;if(h.isNone(l)||!l.originalPoint.equals(e)){const u=a.spatialReference;
p.canProjectWithoutEngine(e.spatialReference,u)&&(l=p.project(e,u),this._circleCollisionCache=l={originalPoint:e.clone(),mapPoint:l,radiusPx:m.pt2px(f.size)})}return h.isSome(l)?(c=m.screenPointObjectToArray(c,G),a=a.toScreen(l.mapPoint),l=l.radiusPx,e=a.x+m.pt2px(f.xoffset),f=a.y-m.pt2px(f.yoffset),z.squaredDistance(c,[e,f])<l*l?1:null):null};k._intersectDistance3D=function(a,c,e){return(c=a.toMap(c,{include:[e]}))&&p.projectPointToVector(c,v,a.renderSpatialReference)?A.distance(v,a.state.camera.eye):
null};q._createClass(n,[{key:"graphic",set:function(a){this._circleCollisionCache=null;this._originalSymbol=a.symbol;this._set("graphic",a);this.attachSymbolChanged()}},{key:"elevationInfo",get:function(){const a="elevationInfo"in this.graphic.layer&&this.graphic.layer.elevationInfo,c=C.getGraphicEffectiveElevationMode(this.graphic);return new E.default({mode:c,offset:a?a.offset:0})}},{key:"focusedSymbol",set:function(a){a!==this._get("focusedSymbol")&&(this._set("focusedSymbol",a),this._updateGraphicSymbol(),
this._circleCollisionCache=null)}},{key:"grabbing",set:function(a){a!==this._get("grabbing")&&(this._set("grabbing",a),this._updateGraphicSymbol())}},{key:"hovering",set:function(a){a!==this._get("hovering")&&(this._set("hovering",a),this._updateGraphicSymbol())}},{key:"selected",set:function(a){a!==this._get("selected")&&(this._set("selected",a),this._updateGraphicSymbol(),this.events.emit("select-changed",{action:a?"select":"deselect"}))}},{key:"_focused",get:function(){return this._get("hovering")||
this._get("grabbing")}}]);return n}(w);d.__decorate([g.property({constructOnly:!0,nonNullable:!0})],b.GraphicManipulator.prototype,"graphic",null);d.__decorate([g.property()],b.GraphicManipulator.prototype,"elevationInfo",null);d.__decorate([g.property({constructOnly:!0,nonNullable:!0})],b.GraphicManipulator.prototype,"view",void 0);d.__decorate([g.property({value:null})],b.GraphicManipulator.prototype,"focusedSymbol",null);d.__decorate([g.property({constructOnly:!0})],b.GraphicManipulator.prototype,
"layer",void 0);d.__decorate([g.property()],b.GraphicManipulator.prototype,"interactive",void 0);d.__decorate([g.property()],b.GraphicManipulator.prototype,"selectable",void 0);d.__decorate([g.property()],b.GraphicManipulator.prototype,"grabbable",void 0);d.__decorate([g.property({value:!1})],b.GraphicManipulator.prototype,"grabbing",null);d.__decorate([g.property()],b.GraphicManipulator.prototype,"dragging",void 0);d.__decorate([g.property()],b.GraphicManipulator.prototype,"hovering",null);d.__decorate([g.property({value:!1})],
b.GraphicManipulator.prototype,"selected",null);d.__decorate([g.property()],b.GraphicManipulator.prototype,"cursor",void 0);b.GraphicManipulator=d.__decorate([y.subclass("esri.views.interactive.GraphicManipulator")],b.GraphicManipulator);const v=B.create(),G=m.createScreenPointArray();Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
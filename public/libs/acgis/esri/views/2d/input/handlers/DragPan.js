// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../input/DragEventSeparator","../../../input/InputHandler","../../../input/handlers/support"],function(k,l,m,e,n){e=function(f){function g(d,b,a){var c=f.call(this,!0)||this;c.view=d;c.pointerAction=b;c.registerIncoming("drag",a,p=>c._handleDrag(p));c.registerIncoming("pointer-down",()=>c.stopMomentumNavigation());return c}l._inheritsLoose(g,f);var h=g.prototype;h.onInstall=function(d){f.prototype.onInstall.call(this,d);this.dragEventSeparator=
new m.DragEventSeparator({start:(b,a)=>{this.view.mapViewNavigation.pan.begin(this.view,a.data);a.stopPropagation()},update:(b,a)=>{this.view.mapViewNavigation.pan.update(this.view,a.data);a.stopPropagation()},end:(b,a)=>{this.view.mapViewNavigation.pan.end(this.view,a.data);a.stopPropagation()},condition:(b,a)=>1===b&&n.eventMatchesPointerAction(a.data,this.pointerAction)})};h._handleDrag=function(d){const b=this.view.mapViewNavigation;b.pinch.zoomMomentum||b.pinch.rotateMomentum?this.stopMomentumNavigation():
this.dragEventSeparator.handle(d)};h.stopMomentumNavigation=function(){this.view.mapViewNavigation.pan.stopMomentumNavigation()};return g}(e.InputHandler);k.DragPan=e;Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
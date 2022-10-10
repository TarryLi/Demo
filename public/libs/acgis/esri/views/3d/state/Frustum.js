// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/vec3","../../../chunks/vec3f64","../../../geometry/support/frustum"],function(m,n,f,g,c){function h(e,d,a){e.origin=d;e.endpoint=a;f.direction(e.direction,d,a)}let l=function(){function e(a){this.renderCoordsHelper=a;this.frustum=c.create();this._points=c.createPoints();this.lines=Array(12);this._origin=g.create();this._direction=g.create();this._altitude=null;for(a=0;12>a;a++)this.lines[a]={origin:null,direction:g.create(),
endpoint:null}}var d=e.prototype;d.update=function(a){c.fromMatrix(a.viewMatrix,a.projectionMatrix,this.frustum,this._points);f.copy(this._origin,a.eye);f.copy(this._direction,a.viewForward);this._altitude=this.renderCoordsHelper.getAltitude(this._origin);this._updateLines()};d.updatePoints=function(a){for(let b=0;b<this._points.length;b++)f.copy(this._points[b],a[b]);c.computePlanes(this.frustum,this._points);this._updateLines()};d.intersectsSphere=function(a){return c.intersectsSphere(this.frustum,
a)};d.intersectsRay=function(a){return c.intersectsRay(this.frustum,a)};d.intersectsLineSegment=function(a,b){return c.intersectsLineSegment(this.frustum,a,b)};d.intersectsPoint=function(a){return c.intersectsPoint(this.frustum,a)};d._updateLines=function(){const a=this._points;for(let b=0;4>b;b++){const k=b+4;h(this.lines[b],a[b],a[k]);h(this.lines[b+4],a[b],3===b?a[0]:a[b+1]);h(this.lines[b+8],a[k],3===b?a[4]:a[k+1])}};n._createClass(e,[{key:"planes",get:function(){return this.frustum}},{key:"points",
get:function(){return this._points}},{key:"mutablePoints",get:function(){return this._points}},{key:"direction",get:function(){return this._direction}},{key:"altitude",get:function(){return this._altitude}}]);return e}();l.planePointIndices=c.planePointIndices;l.nearFarLineIndices=[[c.PointIndex.NEAR_BOTTOM_LEFT,c.PointIndex.FAR_BOTTOM_LEFT],[c.PointIndex.NEAR_BOTTOM_RIGHT,c.PointIndex.FAR_BOTTOM_RIGHT],[c.PointIndex.NEAR_TOP_RIGHT,c.PointIndex.FAR_TOP_RIGHT],[c.PointIndex.NEAR_TOP_LEFT,c.PointIndex.FAR_TOP_LEFT]];
m.Frustum=l;Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
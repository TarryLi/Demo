// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../CIMCursor","../CurveHelper","../enums"],function(u,w,g,x,h){let v=function(){function d(){}d.local=function(){null===d.instance&&(d.instance=new d);return d.instance};d.prototype.execute=function(k,m,a,b){return new y(k,m,a)};return d}();v.instance=null;let y=function(d){function k(a,b,c){a=d.call(this,a,!0,!0)||this;a._curveHelper=new x.CurveHelper;a._angleToLine=void 0!==b.angleToLine?b.angleToLine:!0;a._offset=void 0!==b.offset?
b.offset*c:0;a._relativeTo=b.relativeTo;a._position=void 0!==b.startPointOffset?b.startPointOffset*c:0;a._epsilon=.001*c;return a}w._inheritsLoose(k,d);var m=k.prototype;m.processPath=function(a){var b=this._position;if(this._relativeTo===h.PlacementOnLineRelativeTo.SegmentMidpoint){this.iteratePath||(this._segmentCount=a.length,this._curSegment=1,this.iteratePath=!0);for(;this._curSegment<this._segmentCount;){var c=this._curSegment;this._curSegment++;b=a[c-1];c=a[c];const e=this._curveHelper.calculateLength(b,
c);if(e<this._epsilon)continue;a=.5+this._position/e;const [n,f]=this._curveHelper.getAngleCS(b,c,a);a=g.getCoord2D(b,c,a);this.internalPlacement.setTranslate(a[0]-this._offset*f,a[1]+this._offset*n);this._angleToLine&&this.internalPlacement.setRotateCS(n,f);return this.internalPlacement}this.iteratePath=!1;return null}this._relativeTo===h.PlacementOnLineRelativeTo.LineEnd&&g.reversePath(a);b=this.onLine(a,b);this._relativeTo===h.PlacementOnLineRelativeTo.LineEnd&&g.reversePath(a);return b};m.onLine=
function(a,b){let c,e=!1;switch(this._relativeTo){default:c=this._curveHelper.calculatePathLength(a)/2+b;break;case h.PlacementOnLineRelativeTo.LineBeginning:c=b;break;case h.PlacementOnLineRelativeTo.LineEnd:c=b,e=!0}const n=a.length;let f=0,l=a[0];for(let p=1;p<n;++p){b=l;l=a[p];const q=this._curveHelper.calculateLength(b,l);if(f+q>c){a=(c-f)/q;const [r,t]=this._curveHelper.getAngleCS(b,l,a);a=g.getCoord2D(b,l,a);b=e?-this._offset:this._offset;this.internalPlacement.setTranslate(a[0]-b*t,a[1]+b*
r);this._angleToLine&&(e?this.internalPlacement.setRotateCS(-r,-t):this.internalPlacement.setRotateCS(r,t));return this.internalPlacement}f+=q}return null};return k}(g.PathTransformationCursor);u.PlacementOnLine=v;Object.defineProperties(u,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
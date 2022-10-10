// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports"],function(e){let h=function(){function c(a,b){this.x=a;this.y=b}var d=c.prototype;d.clone=function(){return new c(this.x,this.y)};d.equals=function(a,b){return a===this.x&&b===this.y};d.isEqual=function(a){return a.x===this.x&&a.y===this.y};d.setCoords=function(a,b){this.x=a;this.y=b};d.normalize=function(){var a=this.x;const b=this.y;a=Math.sqrt(a*a+b*b);this.x/=a;this.y/=a};d.rightPerpendicular=function(){const a=this.x;this.x=this.y;this.y=-a};d.move=function(a,b){this.x+=a;this.y+=
b};d.assign=function(a){this.x=a.x;this.y=a.y};d.assignAdd=function(a,b){this.x=a.x+b.x;this.y=a.y+b.y};d.assignSub=function(a,b){this.x=a.x-b.x;this.y=a.y-b.y};d.rotate=function(a,b){const f=this.x,g=this.y;this.x=f*a-g*b;this.y=f*b+g*a};d.scale=function(a){this.x*=a;this.y*=a};d.length=function(){const a=this.x,b=this.y;return Math.sqrt(a*a+b*b)};c.distance=function(a,b){const f=b.x-a.x;a=b.y-a.y;return Math.sqrt(f*f+a*a)};c.add=function(a,b){return new c(a.x+b.x,a.y+b.y)};c.sub=function(a,b){return new c(a.x-
b.x,a.y-b.y)};return c}();e.GeometryType=void 0;(function(c){c[c.Unknown=0]="Unknown";c[c.Point=1]="Point";c[c.LineString=2]="LineString";c[c.Polygon=3]="Polygon"})(e.GeometryType||(e.GeometryType={}));e.Point=h;Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
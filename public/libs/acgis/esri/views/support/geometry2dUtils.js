// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../core/mathUtils","../../chunks/vec2","../../chunks/vec2f64"],function(e,q,d,n){function r(b,a){return b[0]*a[1]-b[1]*a[0]}function t(b,a,c){a=d.dot(c,a)/d.squaredLength(c);return d.scale(b,c,a)}function u(b,a,c,g,f=c){d.subtract(l,g,c);d.subtract(h,a,f);t(p,h,l);return d.add(b,f,p)}function v(b,a,c,g){d.subtract(l,a,c);a=g/d.length(l);return d.scaleAndAdd(b,c,l,a)}e.LineType=void 0;(function(b){b[b.RAY=0]="RAY";b[b.LINE=1]="LINE"})(e.LineType||(e.LineType={}));const l=n.create(),
w=n.create(),h=n.create(),p=n.create();e.cross=r;e.intersectCircleAndPoint=function(b,a,c){v(h,c,b,a);return q.floatEqualAbsolute(h[0],c[0])&&q.floatEqualAbsolute(h[1],c[1])?[n.clone(c)]:[]};e.intersectLineAndPoint=function(b,a){u(h,a,b.start,b.end);return q.floatEqualAbsolute(h[0],a[0])&&q.floatEqualAbsolute(h[1],a[1])?[n.clone(a)]:[]};e.intersectLineAndRay=function(b,a){const c=b.start;var g=a.start,f=a.end;const m=d.subtract(l,b.end,c);var k=d.subtract(w,f,g);f=r(m,k);if(1E-6>=Math.abs(f))return[];
g=d.subtract(h,c,g);k=r(k,g)/f;f=r(m,g)/f;if(0<=k){if(0<=f||a.type===e.LineType.LINE)return[d.scaleAndAdd(p,c,m,k)]}else if(b.type===e.LineType.LINE&&(0<=f||a.type===e.LineType.LINE))return[d.scaleAndAdd(p,c,m,k)];return[]};e.intersectLineLikeAndCircle=function(b,a,c){const g=[],f=d.subtract(l,b.end,b.start);var m=d.subtract(w,b.start,a);a=d.squaredLength(f);const k=2*d.dot(f,m);c=d.squaredLength(m)-c*c;c=k*k-4*a*c;0===c?(a=-k/(2*a),(b.type===e.LineType.LINE||0<=a)&&g.push(d.scaleAndAdd(p,b.start,
f,a))):0<c&&(c=Math.sqrt(c),m=(-k+c)/(2*a),(b.type===e.LineType.LINE||0<=m)&&g.push(d.scaleAndAdd(p,b.start,f,m)),a=(-k-c)/(2*a),(b.type===e.LineType.LINE||0<=a)&&g.push(d.scaleAndAdd(h,b.start,f,a)));return g};e.pointToLineDistance=function(b,a,c){return Math.abs((a[0]-b[0])*(c[1]-b[1])-(a[1]-b[1])*(c[0]-b[0]))/d.distance(a,c)};e.projectPoint=t;e.projectPointToCircle=v;e.projectPointToLine=u;e.projectPointToRay=function(b,a,c,g){d.subtract(l,g,c);d.subtract(h,a,c);a=d.dot(l,h)/d.squaredLength(l);
return 0<a?d.scaleAndAdd(b,c,l,a):d.copy(b,c)};Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
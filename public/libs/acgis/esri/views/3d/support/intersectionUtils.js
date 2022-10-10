// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/vec2f64","../../../chunks/vec3","../../../chunks/vec3f64","../../../geometry/support/plane"],function(h,p,f,q,l){function m(a,c,b,e){const d=r;a?(b&&e&&(d.len=f.distance(c,b)),f.copy(d.dir,a)):e?(d.len=f.distance(c,b),f.subtract(d.dir,b,c),f.scale(d.dir,d.dir,1/d.len)):(f.subtract(d.dir,b,c),f.normalize(d.dir,d.dir));return d}function n(a,c,b,e){e.clip[0]=0;e.clip[1]=b?e.len:Number.MAX_VALUE;for(b=0;b<a.length;b++){{var d=a[b],t=c;var g=e;const k=f.dot(l.normal(d),
g.dir);d=-l.signedDistance(d,t);0>d&&0<=k?g=!1:-1E-6<k&&1E-6>k?g=0<d:!(0>d||0>k)||0>d&&0>k?(d/=k,0<k?d<g.clip[1]&&(g.clip[1]=d):d>g.clip[0]&&(g.clip[0]=d),g=g.clip[0]<=g.clip[1]):g=!0}if(!g)return!1}return!0}const r={dir:q.create(),len:0,clip:p.create()};h.closestPointOnRay=function(a,c,b,e){e=f.dot(b,f.subtract(a,e,c));return f.add(a,c,f.scale(a,b,e))};h.frustumLineSegment=function(a,c,b,e){e=m(e,c,b,!0);return n(a,c,b,e)};h.frustumPoint=function(a,c){for(let b=0;6>b;b++)if(0<l.signedDistance(a[b],
c))return!1;return!0};h.frustumRay=function(a,c,b,e){b=m(e,c,b,!1);return n(a,c,null,b)};h.frustumSphere=function(a,c,b){const e=c[0],d=c[1];c=c[2];return a[0][0]*e+a[0][1]*d+a[0][2]*c+a[0][3]>b||a[1][0]*e+a[1][1]*d+a[1][2]*c+a[1][3]>b||a[2][0]*e+a[2][1]*d+a[2][2]*c+a[2][3]>b||a[3][0]*e+a[3][1]*d+a[3][2]*c+a[3][3]>b||a[4][0]*e+a[4][1]*d+a[4][2]*c+a[4][3]>b||a[5][0]*e+a[5][1]*d+a[5][2]*c+a[5][3]>b?!1:!0};h.planeSphere=function(a,c,b){return a[0]*c[0]+a[1]*c[1]+a[2]*c[2]+a[3]<b};Object.defineProperties(h,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
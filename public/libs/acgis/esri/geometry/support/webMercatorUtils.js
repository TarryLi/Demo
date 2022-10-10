// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../core/lang ../../core/maybe ../SpatialReference ./Ellipsoid ./spatialReferenceUtils".split(" "),function(h,n,x,p,m,k){function q(a,b,c,f,d){d.spatialReference=c;if("x"in a&&"x"in d)[d.x,d.y]=b(a.x,a.y,r,f);else if("xmin"in a&&"xmin"in d)[d.xmin,d.ymin]=b(a.xmin,a.ymin,r,f),[d.xmax,d.ymax]=b(a.xmax,a.ymax,r,f);else if("paths"in a&&"paths"in d||"rings"in a&&"rings"in d){a="paths"in a?a.paths:a.rings;c=[];for(let t=0;t<a.length;t++){const l=a[t];var e=[];c.push(e);for(let g=0;g<
l.length;g++)e.push(b(l[g][0],l[g][1],[0,0],f)),2<l[g].length&&e[g].push(l[g][2]),3<l[g].length&&e[g].push(l[g][3])}"paths"in d?d.paths=c:d.rings=c}else if("points"in a&&"points"in d){a=a.points;c=[];for(e=0;e<a.length;e++)c[e]=b(a[e][0],a[e][1],[0,0],f),2<a[e].length&&c[e].push(a[e][2]),3<a[e].length&&c[e].push(a[e][3]);d.points=c}return d}function w(a,b){const c=a&&(null!=a.wkid||null!=a.wkt?a:a.spatialReference),f=b&&(null!=b.wkid||null!=b.wkt?b:b.spatialReference);return a&&"type"in a&&"mesh"===
a.type||b&&"type"in b&&"mesh"===b.type||!c||!f?!1:k.equals(f,c)?!0:k.isWebMercator(f)&&k.isWGS84(c)||k.isWebMercator(c)&&k.isWGS84(f)}function u(a,b,c=[0,0]){89.99999<b?b=89.99999:-89.99999>b&&(b=-89.99999);b*=.017453292519943;c[0]=.017453292519943*a*m.earth.radius;c[1]=m.earth.halfSemiMajorAxis*Math.log((1+Math.sin(b))/(1-Math.sin(b)));return c}function v(a,b,c=[0,0],f=!1){a=a/m.earth.radius*57.29577951308232;c[0]=f?a:a-360*Math.floor((a+180)/360);c[1]=57.29577951308232*(Math.PI/2-2*Math.atan(Math.exp(-b/
m.earth.radius)));return c}const r=[0,0];h.canProject=w;h.geographicToWebMercator=function(a,b=!1,c=n.clone(a)){return q(a,u,p.WebMercator,b,c)};h.lngLatToXY=u;h.project=function(a,b){if(x.isNone(a))return null;const c=a.spatialReference;b=b&&(null!=b.wkid||null!=b.wkt?b:b.spatialReference);return w(c,b)?k.equals(c,b)?n.clone(a):k.isWebMercator(b)?q(a,u,p.WebMercator,!1,n.clone(a)):k.isWGS84(b)?q(a,v,p.WGS84,!1,n.clone(a)):null:null};h.webMercatorToGeographic=function(a,b=!1,c=n.clone(a)){return q(a,
v,p.WGS84,b,c)};h.x2lon=function(a){return a/m.earth.radius};h.xyToLngLat=v;h.y2lat=function(a){return Math.PI/2-2*Math.atan(Math.exp(-a/m.earth.radius))};Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
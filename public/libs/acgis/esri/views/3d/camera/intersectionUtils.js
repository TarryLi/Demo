// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../core/maybe ../../../chunks/vec3 ../../../chunks/vec3f64 ../../../geometry/projectionEllipsoid ../../../geometry/support/aaBoundingRect ../webgl-engine/lib/Intersector".split(" "),function(k,n,f,m,t,u,v){function p(a,b){return a.elevationProvider?n.unwrapOr(a.elevationProvider.getElevation(b[0],b[1],b[2],a.renderCoordsHelper.spatialReference,"ground"),0):0}function q(a,b,c){if(!a.state.isGlobal)return!1;const g=p(a,b);({far:a}=a.stateManager.constraintsManager.nearFarHeuristic.compute(b,
c,a.renderDataExtent,g,w));a*=a;return f.squaredDistance(b,c)>a}const r={},l=m.create(),e=m.create(),h=m.create(),w={near:0,far:0};k.cameraOnContentAlongViewDirection=function(a,b,c,g){const d=a.state.camera.clone();b&&(d.eye=b,d.center=c,d.up=g);b=d.ray;c=r[a.viewingMode];c||(c=v.newIntersector(a.state.viewingMode),c.options.backfacesTerrain=!a.state.isGlobal,c.options.invisibleTerrain=!0,r[a.viewingMode]=c);({isGlobal:g}=a.state);a.sceneIntersectionHelper.intersectRay(b,c,e)&&!q(a,b.origin,e)?b=
!0:!a.renderCoordsHelper.intersectManifold(b,0,e)||q(a,b.origin,e)?g?(c=t.getReferenceEllipsoid(a.spatialReference).radius,c=f.dot(b.origin,b.origin)-c*c,f.scale(e,b.direction,(0<c?Math.sqrt(c)/3:1)/f.length(b.direction)),f.add(e,e,b.origin),b=!0):b=!1:b=!0;b||f.copy(e,d.center);c=a.state.constraints;g=c.minimumPoiDistance;f.squaredDistance(d.eye,e)<g&&(b=c.collision.enabled,f.copy(h,d.viewForward),f.scale(h,h,g),b?d.eye=f.subtract(l,e,h):f.add(e,d.eye,h),a=a.renderCoordsHelper,g=a.getAltitude(d.eye),
c=c.collision.elevationMargin,b&&g<c&&(f.subtract(h,e,d.eye),d.eye=a.setAltitude(l,c,d.eye),f.add(e,d.eye,h)));d.center=e;return d};k.eyeWithinExtent=function(a,b,c,g){return n.isSome(a.renderCoordsHelper.fromRenderCoords(b.eye,l,g))&&u.containsPoint(c,l)};k.surfaceElevationBelowRenderLocation=p;Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
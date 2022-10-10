// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/mat4f64","../../../../chunks/vec3f64","../../../../geometry/projection","../../../../geometry/projectionEllipsoid"],function(g,k,l,m,n){function h(a,e,b){const c=l.create(),d=2**(4*Math.ceil(Math.log(a[3])*Math.LOG2E/4)+1);if(b.isGeographic){var f=d/n.getReferenceEllipsoid(b).radius*180/Math.PI;b=Math.max(-90,Math.min(90,Math.round(a[1]/f)*f));f/=Math.cos((Math.abs(b)-f/2)/180*Math.PI);c[0]=Math.round(a[0]/f)*f;c[1]=b}else b=Math.round(a[1]/d),c[0]=Math.round(a[0]/
d)*d,c[1]=b*d;c[2]=Math.round((a[2]+e)/d)*d;return c}g.computeGlobalTransformation=function(a,e,b,c){a=h(a,e,b);e=k.create();m.computeTranslationToOriginAndRotation(b,a,e,c);return e};g.getLocalOrigin=h;Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
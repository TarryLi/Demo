// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/vec2 ./constraintUtils/altitude ./constraintUtils/common ./constraintUtils/distance ./constraintUtils/surfaceCollision ./constraintUtils/tilt ../../animation/easing".split(" "),function(b,q,k,c,l,f,m,r){const t=[{type:c.ConstraintTypes.TILT,error:function(a,d,e){return m.getTiltConstraintError(a,d,e)*d.distance},apply:m.applyTiltConstraint},{type:c.ConstraintTypes.ALTITUDE,error:k.getAltitudeConstraintError,apply:k.applyAltitudeConstraint},{type:c.ConstraintTypes.DISTANCE,
error:l.getDistanceConstraintError,apply:l.applyDistanceConstraint}],u={selection:c.ConstraintTypes.ALL,interactionType:c.InteractionType.NONE,interactionFactor:0,interactionStartCamera:null,interactionDirection:null,tiltMode:c.TiltMode.TUMBLE};b.applyAltitudeConstraint=k.applyAltitudeConstraint;b.getAltitudeConstraintError=k.getAltitudeConstraintError;Object.defineProperty(b,"ConstraintTypes",{enumerable:!0,get:()=>c.ConstraintTypes});Object.defineProperty(b,"InteractionType",{enumerable:!0,get:()=>
c.InteractionType});b.applyDistanceConstraint=l.applyDistanceConstraint;b.getDistanceConstraintError=l.getDistanceConstraintError;Object.defineProperty(b,"ApplyCollisionMode",{enumerable:!0,get:()=>f.Mode});b.applySurfaceCollisionConstraint=f.applySurfaceCollisionConstraint;b.applyTiltConstraint=m.applyTiltConstraint;b.getTiltConstraintError=m.getTiltConstraintError;b.applyAll=function(a,d,e=u,g=d){let n=!1;g!==d&&g.copyFrom(d);g.computeUp(a.state.viewingMode);for(d=0;5>d;d++){let p=0;for(var h of t)if(c.hasConstraintType(e.selection,
h.type)){const v=Math.abs(h.error(a,g,e));h.apply(a,g,e)&&(n=!0,p+=v)}if(0===p)break}h=c.hasConstraintType(e.selection,c.ConstraintTypes.COLLISION);a:switch(e.interactionType){case c.InteractionType.PAN:e=f.Mode.EYE_AND_CENTER;break a;case c.InteractionType.ASCEND:e=a.state.isGlobal?f.Mode.EYE_AND_CENTER_SCALE:f.Mode.EYE_AND_CENTER;break a;default:e=f.Mode.EYE}h&&f.applySurfaceCollisionConstraint(a,g,e)&&(n=!0);n&&g.computeUp(a.state.viewingMode);return n};b.pixelDistanceToInteractionFactor=function(a,
d){a="number"===typeof a?a:q.distance(a,d);return r.inOutCubic(Math.min(1,a/150))};Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
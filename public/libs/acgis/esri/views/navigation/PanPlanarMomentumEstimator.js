// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/vec3 ../../chunks/vec3f64 ./FilteredFiniteDifference ./Momentum".split(" "),function(h,n,k,p,e,l){let m=function(f){function c(a,b,d,g,q){a=f.call(this,a,b,d)||this;a.sceneVelocity=g;a.direction=q;return a}n._inheritsLoose(c,f);c.prototype.value=function(a){return f.prototype.valueFromInitialVelocity.call(this,this.sceneVelocity,a)};return c}(l.Momentum);l=function(){function f(a=300,b=12,d=.84){this.minimumInitialVelocity=a;this.stopVelocity=
b;this.friction=d;this.enabled=!0;this.time=new e.FilteredFiniteDifference(.6);this.screen=[new e.FilteredFiniteDifference(.4),new e.FilteredFiniteDifference(.4)];this.scene=[new e.FilteredFiniteDifference(.6),new e.FilteredFiniteDifference(.6),new e.FilteredFiniteDifference(.6)];this.tmpDirection=p.create()}var c=f.prototype;c.add=function(a,b,d){!this.enabled||this.time.hasLastValue&&.015>this.time.computeDelta(d)||(this.screen[0].update(a[0]),this.screen[1].update(a[1]),this.scene[0].update(b[0]),
this.scene[1].update(b[1]),this.scene[2].update(b[2]),this.time.update(d))};c.reset=function(){this.screen[0].reset();this.screen[1].reset();this.scene[0].reset();this.scene[1].reset();this.scene[2].reset();this.time.reset()};c.evaluateMomentum=function(){if(!this.enabled||!this.screen[0].hasFilteredDelta)return null;var a=this.screen[0].filteredDelta;const b=this.screen[1].filteredDelta;a=Math.sqrt(a*a+b*b)/this.time.filteredDelta;return Math.abs(a)<this.minimumInitialVelocity?null:this.createMomentum(a,
this.stopVelocity,this.friction)};c.createMomentum=function(a,b,d){k.set(this.tmpDirection,this.scene[0].filteredDelta,this.scene[1].filteredDelta,this.scene[2].filteredDelta);const g=k.length(this.tmpDirection);0<g&&k.scale(this.tmpDirection,this.tmpDirection,1/g);return new m(a,b,d,g/this.time.filteredDelta,this.tmpDirection)};return f}();h.PanPlanarMomentum=m;h.PanPlanarMomentumEstimator=l;Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
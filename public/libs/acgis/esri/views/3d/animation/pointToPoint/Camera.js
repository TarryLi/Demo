// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../../core/mathUtils ../../../../chunks/mat3 ../../../../chunks/mat3f64 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../ViewingMode ../../support/mathUtils".split(" "),function(v,B,w,c,k,q,r){const h=k.create(),f=k.create(),l=k.create(),d=k.create(),m=k.create(),p=k.create();var n=k.fromValues(0,0,1),x=k.fromValues(0,1,0),t=k.fromValues(1,0,0);const y=w.create();return function(){function z(a=q.ViewingMode.Global){this.viewingMode=a;this.center=k.create();this.distance=this.yaw=
this.pitch=0;this.lookAtDirection=k.clone(x)}var g=z.prototype;g.pixelsPerPanAtZoom=function(a){return this.size/2/(this._zoomToPanScale*a)};g.zoomAtPixelsPerPan=function(a){return this.size/2/(this._zoomToPanScale*a)};g.pixelsPerRotateAtZoom=function(){return this.size/2/Math.max(Math.cos(Math.abs(this.pitch)),.5)};g.compareTo=function(a,b){b||(b={pan:0,rotate:0,sourceZoom:0,targetZoom:0});if(this.viewingMode===q.ViewingMode.Global){var e=c.length(this.center);const u=c.length(a.center);e=(e+u)/
2;b.pan=r.angle(this.center,a.center)*e}else b.pan=c.distance(this.center,a.center);e=Math.abs(a.yaw-this.yaw);e>=Math.PI&&(e=2*Math.PI-e);b.rotate=Math.max(e,Math.abs(a.pitch-this.pitch));b.sourceZoom=this.distance;b.targetZoom=a.distance;return b};g.interpolate=function(a,b,e){this.viewingMode===q.ViewingMode.Global?r.slerp(a.center,b.center,e.pan,this.center):c.lerp(this.center,a.center,b.center,e.pan);this.distance=v.lerp(a.distance,b.distance,e.zoom);this.pitch=v.lerp(a.pitch,b.pitch,e.rotate);
a=a.yaw;b=b.yaw;Math.abs(b-a)>=Math.PI&&(a+=2*(a<b?1:-1)*Math.PI);this.yaw=v.lerp(a,b,e.rotate)};g.copyFrom=function(a){c.copy(this.center,a.center);this.pitch=a.pitch;this.yaw=a.yaw;this.distance=a.distance;c.copy(this.lookAtDirection,a.lookAtDirection);this.size=a.size;this.copyFromCommon(a);this.viewingMode=a.viewingMode};g.copyFromRenderCamera=function(a){const b=this._lookAtOrientation(a.center,y);c.copy(this.center,a.center);c.subtract(d,a.center,a.eye);c.transformMat3(d,d,b);c.transformMat3(m,
a.up,b);this.distance=c.length(d);d[0]/=this.distance;d[1]/=this.distance;d[2]/=this.distance;this.pitch=this._eyeUpToPitch(d);this.yaw=this._eyeUpToYaw(d,m);this.size=Math.sqrt(a.width*a.width+a.height*a.height);this.copyFromCommon(a)};g.copyFromCommon=function(a){this.fov=a.fov;this._zoomToPanScale=Math.atan(.5*this.fov)};g.copyToRenderCamera=function(a){const b=this._lookAtOrientation(this.center,y);B.transpose(b,b);this._axisAngleVec3(t,this.pitch-Math.PI/2,x,d);this._axisAngleVec3(n,this.yaw,
d);this._axisAngleVec3(t,this.pitch-Math.PI/2,n,m);this._axisAngleVec3(n,this.yaw,m);c.scale(d,d,this.distance);c.transformMat3(d,d,b);c.transformMat3(m,m,b);a.center=this.center;a.eye=c.subtract(d,this.center,d);a.up=m};g._axisAngleVec3=function(a,b,e,u=e){const A=Math.cos(b);b=Math.sin(b);c.scale(h,e,A);c.cross(f,a,e);c.scale(f,f,b);c.scale(l,a,(1-A)*c.dot(a,e));return c.add(u,c.add(u,h,f),l)};g._lookAtOrientation=function(a,b=w.create()){this._upAtLookAt(a,l);c.cross(h,this.lookAtDirection,l);
c.normalize(h,h);0===h[0]&&0===h[1]&&0===h[2]&&c.copy(h,t);c.cross(f,l,h);c.normalize(f,f);b[0]=h[0];b[1]=f[0];b[2]=l[0];b[3]=h[1];b[4]=f[1];b[5]=l[1];b[6]=h[2];b[7]=f[2];b[8]=l[2];return b};g._upAtLookAt=function(a,b){return this.viewingMode===q.ViewingMode.Local?c.copy(b,n):c.normalize(b,a)};g._eyeUpToPitch=function(a){return Math.PI-r.angle(n,a)};g._eyeUpToYaw=function(a,b){.5>Math.abs(b[2])?(c.copy(p,b),0<a[2]&&c.scale(p,p,-1)):c.copy(p,a);c.cross(f,p,n);c.normalize(f,f);return r.angle(t,f,n)};
return z}()});
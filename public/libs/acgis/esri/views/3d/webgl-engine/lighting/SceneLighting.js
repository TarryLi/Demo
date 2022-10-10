// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/vec3 ../../../../chunks/vec3f64 ./Lightsources ./SphericalHarmonics".split(" "),function(e,g,c,a,h,k){let l=function(){function f(){this._shOrder=2;this._oldSunlight={direction:a.create(),ambient:{color:a.create(),intensity:1},diffuse:{color:a.create(),intensity:1}};this.groundLightingFactor=this.globalFactor=.5;this._sphericalHarmonics=new h.SphericalHarmonicsAmbientLight;this._mainLight={intensity:a.create(),direction:a.fromValues(1,
0,0),castShadows:!1,specularStrength:1,environmentStrength:1}}f.prototype.set=function(b){k.combineLights(b,this._shOrder,this._mainLight,this._sphericalHarmonics);c.copy(this._oldSunlight.direction,this._mainLight.direction);b=1/Math.PI;this._oldSunlight.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*b;this._oldSunlight.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*b;this._oldSunlight.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*b;c.scale(this._oldSunlight.diffuse.color,
this._mainLight.intensity,b);c.copy(d,this._oldSunlight.diffuse.color);c.scale(d,d,.4*this.globalFactor);c.add(this._oldSunlight.ambient.color,this._oldSunlight.ambient.color,d)};g._createClass(f,[{key:"sh",get:function(){return this._sphericalHarmonics}},{key:"mainLight",get:function(){return this._mainLight}},{key:"lightingMainDirection",get:function(){return this._mainLight.direction}},{key:"old",get:function(){return this._oldSunlight}}]);return f}();const d=a.create();e.SceneLighting=l;e.ambientBoost=
.4;Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass".split(" "),function(g,c,a,d,n,p,q,k){a=function(h){function e(f){var b=h.call(this)||this;b.nativeIndex=null;b._detectedDeviceType="unknown";"standard"===f.mapping?b._detectedDeviceType="standard":l.test(f.id)?b._detectedDeviceType=
"spacemouse":b._detectedDeviceType="unknown";b.nativeIndex=f.index;return b}g._inheritsLoose(e,h);g._createClass(e,[{key:"native",get:function(){return(navigator.getGamepads?navigator.getGamepads():[])[this.nativeIndex]}},{key:"deviceType",get:function(){return this._detectedDeviceType}},{key:"axisThreshold",get:function(){return m[this.deviceType]}}]);return e}(a);c.__decorate([d.property({nonNullable:!0,readOnly:!0})],a.prototype,"nativeIndex",void 0);c.__decorate([d.property({type:String,readOnly:!0})],
a.prototype,"deviceType",null);c.__decorate([d.property({type:Number,readOnly:!0})],a.prototype,"axisThreshold",null);a=c.__decorate([k.subclass("esri.views.input.gamepad.GamepadInputDevice")],a);const l=/^(3dconnexion|space(mouse|navigator|pilot|explorer))/i,m={standard:.15,spacemouse:.025,unknown:0};return a});
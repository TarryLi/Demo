// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ./Accessor ./accessorSupport/decorators/property ./accessorSupport/decorators/subclass".split(" "),function(b,h,e,k,l,m){b.AsyncSequence=function(f){function c(){var a=f.apply(this,arguments)||this;a.updating=!1;a.pending=[];return a}h._inheritsLoose(c,f);var g=c.prototype;g.push=function(a,d){this.pending.push({promise:a,callback:d});1===this.pending.length&&this._process()};g._process=function(){if(this.pending.length){this.updating=
!0;var a=this.pending[0];a.promise.then(d=>a.callback(d)).catch(()=>{}).then(()=>{this.pending.shift();this._process()})}else this.updating=!1};return c}(k);e.__decorate([l.property()],b.AsyncSequence.prototype,"updating",void 0);b.AsyncSequence=e.__decorate([m.subclass("esri.core.AsyncSequence")],b.AsyncSequence);Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
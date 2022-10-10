// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./materialUtils".split(" "),function(a,h,b,k,c,n,p,q,l,m){var d;a.Symbol3DVerticalOffset=d=function(g){function e(){var f=g.apply(this,arguments)||this;f.screenLength=0;f.minWorldLength=0;return f}h._inheritsLoose(e,g);e.prototype.clone=
function(){return new d({screenLength:this.screenLength,minWorldLength:this.minWorldLength,maxWorldLength:this.maxWorldLength})};return e}(k.JSONSupport);b.__decorate([c.property(m.screenSizeProperty)],a.Symbol3DVerticalOffset.prototype,"screenLength",void 0);b.__decorate([c.property({type:Number,json:{write:!0,default:0}})],a.Symbol3DVerticalOffset.prototype,"minWorldLength",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.Symbol3DVerticalOffset.prototype,"maxWorldLength",void 0);
a.Symbol3DVerticalOffset=d=b.__decorate([l.subclass("esri.symbols.support.Symbol3DVerticalOffset")],a.Symbol3DVerticalOffset);Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
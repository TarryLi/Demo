// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/jsonMap ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ./LinePattern3D ./lineStyles".split(" "),function(k,c,d,g,p,q,r,l,m,a,n){var e;d=d.strict()({dash:"dash","dash-dot":"dash-dot","dash-dot-dot":"long-dash-dot-dot",dot:"dot","long-dash":"long-dash",
"long-dash-dot":"long-dash-dot",null:"none","short-dash":"short-dash","short-dash-dot":"short-dash-dot","short-dash-dot-dot":"short-dash-dot-dot","short-dot":"short-dot",solid:"solid"});a=e=function(h){function f(b){b=h.call(this,b)||this;b.type="style";b.style="solid";return b}k._inheritsLoose(f,h);f.prototype.clone=function(){return new e({style:this.style})};return f}(a);c.__decorate([g.property({type:["style"]})],a.prototype,"type",void 0);c.__decorate([l.enumeration(d),g.property({type:n.lineStyles})],
a.prototype,"style",void 0);return a=e=c.__decorate([m.subclass("esri.symbols.patterns.LineStylePattern3D")],a)});
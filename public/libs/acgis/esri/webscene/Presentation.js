// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Collection ../core/collectionUtils ../core/JSONSupport ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/cast ../core/accessorSupport/decorators/subclass ./Slide".split(" "),function(e,f,b,g,l,m,t,u,n,p,q){const d=b.ofType(q);b=function(h){function c(a){a=h.call(this,a)||this;a.slides=new d;return a}e._inheritsLoose(c,h);var k=c.prototype;k.destroy=function(){this.slides.forEach(a=>
a.destroy());this.slides.removeAll()};k.clone=function(){return new this.constructor({slides:this.slides.clone()})};e._createClass(c,[{key:"slides",set:function(a){a&&(a=a.filter(r=>!!r.viewpoint));this._set("slides",g.referenceSetter(a,this._get("slides"),d))}}]);return c}(l.JSONSupport);f.__decorate([m.property({type:d,nonNullable:!0,json:{write:!0}}),n.cast(g.castForReferenceSetter)],b.prototype,"slides",null);return b=f.__decorate([p.subclass("esri.webscene.Presentation")],b)});
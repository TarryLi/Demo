// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../Widget ../../support/Heading ../../support/widgetUtils ../../support/jsxFactory".split(" "),function(k,c,d,b,q,r,l,m,n,t,e){b=function(h){function f(a,p){a=h.call(this,a,p)||this;a.description=null;a.headingLevel=2;a.title=null;return a}
k._inheritsLoose(f,h);var g=f.prototype;g.render=function(){return e.tsx("div",{class:"esri-feature-element-info"},this.renderTitle(),this.renderDescription())};g.renderTitle=function(){const {title:a}=this;return a?e.tsx(n.Heading,{level:this.headingLevel,class:"esri-feature-element-info__title"},a):null};g.renderDescription=function(){const {description:a}=this;return a?e.tsx("div",{key:"description",class:"esri-feature-element-info__description"},a):null};return f}(m);c.__decorate([d.property()],
b.prototype,"description",void 0);c.__decorate([d.property()],b.prototype,"headingLevel",void 0);c.__decorate([d.property()],b.prototype,"title",void 0);return b=c.__decorate([l.subclass("esri.widgets.Feature.support.FeatureElementInfo")],b)});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Accessor ../core/Collection ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass".split(" "),function(a,k,d,p,l,m,f,r,t,u,q){a.BasemapView=function(n){function g(h){var b=n.call(this,h)||this;b.view=null;b.baseLayerViews=new l;b.referenceLayerViews=new l;b._loadingHandle=m.watch(()=>{var c,e;return null==
(c=b.view)?void 0:null==(e=c.map)?void 0:e.basemap},c=>{c&&c.load().catch(()=>{})},m.initial);return b}k._inheritsLoose(g,n);g.prototype.destroy=function(){this._set("view",null);this._loadingHandle&&(this._loadingHandle.remove(),this._loadingHandle=null)};k._createClass(g,[{key:"suspended",get:function(){return this.view?this.view.suspended:!0}},{key:"updating",get:function(){var h,b;if(this.view&&this.view.suspended)return!1;const c=null==(h=this.view)?void 0:null==(b=h.map)?void 0:b.basemap;return c&&
c.loaded?this.baseLayerViews.some(e=>e.updating)||this.referenceLayerViews.some(e=>e.updating):!1}}]);return g}(p);d.__decorate([f.property({constructOnly:!0})],a.BasemapView.prototype,"view",void 0);d.__decorate([f.property({readOnly:!0})],a.BasemapView.prototype,"baseLayerViews",void 0);d.__decorate([f.property({readOnly:!0})],a.BasemapView.prototype,"referenceLayerViews",void 0);d.__decorate([f.property({readOnly:!0})],a.BasemapView.prototype,"suspended",null);d.__decorate([f.property({type:Boolean,
readOnly:!0})],a.BasemapView.prototype,"updating",null);a.BasemapView=d.__decorate([q.subclass("esri.views.BasemapView")],a.BasemapView);Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
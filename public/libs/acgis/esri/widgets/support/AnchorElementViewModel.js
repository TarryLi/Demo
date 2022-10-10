// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Evented ../../core/Handles ../../core/maybe ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(l,e,b,p,d,m,f,u,v,w,q){const g=Symbol("anchorHandles");b=function(n){function h(k){var a=n.call(this,k)||this;a[r]=new p;a.location=null;a.screenLocationEnabled=
!1;a.view=null;a[g].add([m.when(()=>d.applySome(a.screenLocationEnabled?a.view:null,c=>[c.size,"3d"===c.type?c.camera:c.viewpoint]),()=>a.notifyChange("screenLocation")),m.watch(()=>a.screenLocation,(c,t)=>{d.isSome(c)&&d.isSome(t)&&a.emit("view-change")})]);return a}l._inheritsLoose(h,n);h.prototype.destroy=function(){this.view=null;this[g]=d.destroyMaybe(this[g])};l._createClass(h,[{key:"screenLocation",get:function(){const {location:k,view:a,screenLocationEnabled:c}=this;return c&&d.isSome(k)&&
d.isSome(a)&&a.ready?a.toScreen(k):null}}]);return h}(b.EventedAccessor);var r=g;e.__decorate([f.property()],b.prototype,"location",void 0);e.__decorate([f.property()],b.prototype,"screenLocation",null);e.__decorate([f.property()],b.prototype,"screenLocationEnabled",void 0);e.__decorate([f.property()],b.prototype,"view",void 0);return b=e.__decorate([q.subclass("esri.widgets.support.AnchorElementViewModel")],b)});
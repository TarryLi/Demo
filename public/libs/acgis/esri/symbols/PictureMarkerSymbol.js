// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/lang ../core/screenUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ./MarkerSymbol ./support/urlUtils".split(" "),function(q,c,r,g,d,b,t,u,v,w,n){var k;b=k=function(l){function m(...a){a=l.call(this,...a)||this;a.color=null;a.type="picture-marker";a.url=null;a.source=
null;a.height=12;a.width=12;a.size=null;return a}q._inheritsLoose(m,l);var f=m.prototype;f.normalizeCtorArgs=function(a,e,p){if(a&&"string"!==typeof a&&null==a.imageData)return a;const h={};a&&(h.url=a);null!=e&&(h.width=g.toPt(e));null!=p&&(h.height=g.toPt(p));return h};f.readHeight=function(a,e){return e.size||a};f.readWidth=function(a,e){return e.size||a};f.clone=function(){const a=new k({angle:this.angle,height:this.height,url:this.url,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset});
a._set("source",r.clone(this.source));return a};f.hash=function(){return`${l.prototype.hash.call(this)}.${this.height}.${this.url}.${this.width}`};return m}(w);c.__decorate([d.property({json:{write:!1}})],b.prototype,"color",void 0);c.__decorate([t.enumeration({esriPMS:"picture-marker"},{readOnly:!0})],b.prototype,"type",void 0);c.__decorate([d.property(n.urlPropertyDefinition)],b.prototype,"url",void 0);c.__decorate([d.property(n.sourcePropertyDefinition)],b.prototype,"source",void 0);c.__decorate([d.property({type:Number,
cast:g.toPt,json:{write:!0}})],b.prototype,"height",void 0);c.__decorate([u.reader("height",["height","size"])],b.prototype,"readHeight",null);c.__decorate([d.property({type:Number,cast:g.toPt,json:{write:!0}})],b.prototype,"width",void 0);c.__decorate([d.property({json:{write:!1}})],b.prototype,"size",void 0);return b=k=c.__decorate([v.subclass("esri.symbols.PictureMarkerSymbol")],b)});
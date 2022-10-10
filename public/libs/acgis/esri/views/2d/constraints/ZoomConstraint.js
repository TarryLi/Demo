// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass".split(" "),function(x,h,f,k,z,A,B,y){var q;f=q=function(t){function r(a){a=t.call(this,a)||this;a._lodByScale={};a._scales=[];a.effectiveLODs=null;a.effectiveMinZoom=-1;a.effectiveMaxZoom=-1;a.effectiveMinScale=0;a.effectiveMaxScale=
0;a.lods=null;a.minZoom=-1;a.maxZoom=-1;a.minScale=0;a.maxScale=0;a.snapToZoom=!0;return a}x._inheritsLoose(r,t);var l=r.prototype;l.initialize=function(){let {lods:a,minScale:b,maxScale:c,minZoom:e,maxZoom:d}=this,m=-1,n=-1,u=!1,v=!1;0!==b&&0!==c&&b<c&&([b,c]=[c,b]);if(a&&a.length){a=a.map(g=>g.clone());a.sort((g,p)=>p.scale-g.scale);a.forEach((g,p)=>g.level=p);for(const g of a){!u&&0<b&&b>=g.scale&&(m=g.level,u=!0);!v&&0<c&&c>=g.scale&&(n=w?w.level:-1,v=!0);var w=g}-1===e&&(e=0===b?0:m);-1===d&&
(d=0===c?a.length-1:n);e=Math.max(e,0);e=Math.min(e,a.length-1);d=Math.max(d,0);d=Math.min(d,a.length-1);e>d&&([e,d]=[d,e]);b=a[e].scale;c=a[d].scale;a.splice(0,e);a.splice(d-e+1,a.length);a.forEach((g,p)=>{this._lodByScale[g.scale]=g;this._scales[p]=g.scale});this._set("effectiveLODs",a);this._set("effectiveMinZoom",e);this._set("effectiveMaxZoom",d)}this._set("effectiveMinScale",b);this._set("effectiveMaxScale",c)};l.constrain=function(a,b){if(b&&a.scale===b.scale)return a;var c=this.effectiveMinScale;
const e=this.effectiveMaxScale,d=a.targetGeometry,m=b&&b.targetGeometry,n=0!==c&&a.scale>c;if(0!==e&&a.scale<e||n)c=n?c:e,m&&(b=(c-b.scale)/(a.scale-b.scale),d.x=m.x+(d.x-m.x)*b,d.y=m.y+(d.y-m.y)*b),a.scale=c;this.snapToZoom&&this.effectiveLODs&&(a.scale=this._getClosestScale(a.scale));return a};l.fit=function(a){if(!this.effectiveLODs||!this.snapToZoom)return this.constrain(a,null);const b=this.scaleToZoom(a.scale);a.scale=this.zoomToScale(.99<Math.abs(b-Math.floor(b))?Math.round(b):Math.floor(b));
return a};l.zoomToScale=function(a){if(!this.effectiveLODs)return 0;a-=this.effectiveMinZoom;a=Math.max(0,a);const b=this._scales;if(0>=a)return b[0];if(a>=b.length)return b[b.length-1];const c=Math.round(a);return b[c]+(c-a)*(b[Math.round(a-.5)]-b[c])};l.scaleToZoom=function(a){if(!this.effectiveLODs)return-1;const b=this._scales;let c,e;if(a>=b[0])return this.effectiveMinZoom;if(a<=b[b.length-1])return this.effectiveMaxZoom;for(let d=0;d<b.length-1;d++){c=b[d];e=b[d+1];if(e===a)return d+this.effectiveMinZoom+
1;if(c>a&&e<a)return d+this.effectiveMinZoom+1-(a-e)/(c-e)}};l.snapToClosestScale=function(a){if(!this.effectiveLODs)return a;a=this.scaleToZoom(a);return this.zoomToScale(Math.round(a))};l.snapToNextScale=function(a,b=.5){if(!this.effectiveLODs)return a*b;a=Math.round(this.scaleToZoom(a));return this.zoomToScale(a+1)};l.snapToPreviousScale=function(a,b=2){if(!this.effectiveLODs)return a*b;a=Math.round(this.scaleToZoom(a));return this.zoomToScale(a-1)};l.clone=function(){return new q({lods:this.lods,
minZoom:this.minZoom,maxZoom:this.maxZoom,minScale:this.minScale,maxScale:this.maxScale})};l._getClosestScale=function(a){if(this._lodByScale[a])return this._lodByScale[a].scale;a=this._scales.reduce((b,c)=>Math.abs(c-a)<=Math.abs(b-a)?c:b,this._scales[0]);return this._lodByScale[a].scale};return r}(f);h.__decorate([k.property({readOnly:!0})],f.prototype,"effectiveLODs",void 0);h.__decorate([k.property({readOnly:!0})],f.prototype,"effectiveMinZoom",void 0);h.__decorate([k.property({readOnly:!0})],
f.prototype,"effectiveMaxZoom",void 0);h.__decorate([k.property({readOnly:!0})],f.prototype,"effectiveMinScale",void 0);h.__decorate([k.property({readOnly:!0})],f.prototype,"effectiveMaxScale",void 0);h.__decorate([k.property()],f.prototype,"lods",void 0);h.__decorate([k.property()],f.prototype,"minZoom",void 0);h.__decorate([k.property()],f.prototype,"maxZoom",void 0);h.__decorate([k.property()],f.prototype,"minScale",void 0);h.__decorate([k.property()],f.prototype,"maxScale",void 0);h.__decorate([k.property()],
f.prototype,"snapToZoom",void 0);return f=q=h.__decorate([y.subclass("esri.views.2d.constraints.ZoomConstraint")],f)});
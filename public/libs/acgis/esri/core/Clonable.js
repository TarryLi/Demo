// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ./Accessor ./has ./lang ./Logger ./maybe ./accessorSupport/PropertyOrigin ./accessorSupport/utils ./accessorSupport/decorators/subclass".split(" "),function(h,q,r,y,n,z,A,B,e,t,u){A.getLogger("esri.core.Clonable");n=a=>{a=function(k){function p(){return k.apply(this,arguments)||this}q._inheritsLoose(p,k);p.prototype.clone=function(){var f=B.unwrapOrThrow(t.getProperties(this),"unable to clone instance of non-accessor class"),
l=f.metadatas;const v=f.store,w={};f=new Map;for(var b in l){var c=l[b];const d=null==v?void 0:v.originOf(b),g=c.clonable;if(c.readOnly||!1===g||d!==e.OriginId.USER&&d!==e.OriginId.DEFAULTS&&d!==e.OriginId.WEB_MAP&&d!==e.OriginId.WEB_SCENE)continue;c=this[b];let m=null;m="function"===typeof g?g(c):"reference"===g?c:z.tryClone(c);if(null==c||null!=m)d===e.OriginId.DEFAULTS?f.set(b,m):w[b]=m}l=new (Object.getPrototypeOf(this).constructor)(w);if(f.size){var x;if(b=null==(x=t.getProperties(l))?void 0:
x.store)for(const [d,g]of f)b.set(d,g,e.OriginId.DEFAULTS)}return l};return p}(a);return a=r.__decorate([u.subclass("esri.core.Clonable")],a)};h.Clonable=function(a){function k(){return a.apply(this,arguments)||this}q._inheritsLoose(k,a);return k}(n(y));h.Clonable=r.__decorate([u.subclass("esri.core.Clonable")],h.Clonable);h.ClonableMixin=n;Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
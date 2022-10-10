// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/arrayUtils ../core/lang ../core/maybe ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ./Extent ./Geometry ./Point ./SpatialReference ./support/centroid ./support/contains ./support/coordsUtils ./support/extentUtils ./support/intersectsBase ./support/webMercatorUtils ./support/zmUtils".split(" "),function(u,l,A,
v,n,p,h,B,C,D,E,m,F,G,H,I,J,K,L,w){var t;h=t=function(x){function q(...a){a=x.call(this,...a)||this;a.rings=[];a.type="polygon";return a}u._inheritsLoose(q,x);q.fromExtent=function(a){var b=a.clone().normalize();a=a.spatialReference;let c=!1,f=!1;for(const d of b)d.hasZ&&(c=!0),d.hasM&&(f=!0);b={rings:b.map(d=>{const e=[[d.xmin,d.ymin],[d.xmin,d.ymax],[d.xmax,d.ymax],[d.xmax,d.ymin],[d.xmin,d.ymin]];if(c&&d.hasZ){var k=d.zmin+.5*(d.zmax-d.zmin);for(let r=0;r<e.length;r++)e[r].push(k)}if(f&&d.hasM)for(d=
d.mmin+.5*(d.mmax-d.mmin),k=0;k<e.length;k++)e[k].push(d);return e}),spatialReference:a};c&&(b.hasZ=!0);f&&(b.hasM=!0);return new t(b)};var g=q.prototype;g.normalizeCtorArgs=function(a,b){let c=null,f,d,e=null;a&&!Array.isArray(a)?(c=a.rings?a.rings:null,b||(a.spatialReference?b=a.spatialReference:a.rings||(b=a)),f=a.hasZ,d=a.hasM):c=a;c=c||[];b=b||F.WGS84;c.length&&c[0]&&null!=c[0][0]&&"number"===typeof c[0][0]&&(c=[c]);if(e=c[0]&&c[0][0])void 0===f&&void 0===d?(f=2<e.length,d=3<e.length):void 0===
f?f=d?3<e.length:2<e.length:void 0===d&&(d=f?3<e.length:2<e.length);return{rings:c,spatialReference:b,hasZ:f,hasM:d}};g.writeRings=function(a,b){b.rings=v.clone(this.rings)};g.addRing=function(a){if(a){var b=this.rings,c=b.length;if(Array.isArray(a[0]))b[c]=a.concat();else{const f=[];for(let d=0,e=a.length;d<e;d++)f[d]=a[d].toArray();b[c]=f}this.notifyChange("rings");return this}};g.clone=function(){const a=new t;a.spatialReference=this.spatialReference;a.rings=v.clone(this.rings);a.hasZ=this.hasZ;
a.hasM=this.hasM;return a};g.equals=function(a){if(this===a)return!0;if(n.isNone(a))return!1;var b=this.spatialReference,c=a.spatialReference;if(n.isSome(b)!==n.isSome(c)||n.isSome(b)&&n.isSome(c)&&!b.equals(c)||this.rings.length!==a.rings.length)return!1;b=([f,d,e,k],[r,M,y,z])=>f===r&&d===M&&(null==e&&null==y||e===y)&&(null==k&&null==z||k===z);for(c=0;c<this.rings.length;c++)if(!A.equals(this.rings[c],a.rings[c],b))return!1;return!0};g.contains=function(a){if(!a)return!1;const b=L.project(a,this.spatialReference);
return H.polygonContainsPoint(this,n.isSome(b)?b:a)};g.isClockwise=function(a){a=Array.isArray(a[0])?a:a.map(b=>this.hasZ?this.hasM?[b.x,b.y,b.z,b.m]:[b.x,b.y,b.z]:[b.x,b.y]);return I.isClockwise(a,this.hasM,this.hasZ)};g.getPoint=function(a,b){if(!this._validateInputs(a,b))return null;a=this.rings[a][b];b=this.hasZ;const c=this.hasM;return b&&!c?new m(a[0],a[1],a[2],void 0,this.spatialReference):c&&!b?new m(a[0],a[1],void 0,a[2],this.spatialReference):b&&c?new m(a[0],a[1],a[2],a[3],this.spatialReference):
new m(a[0],a[1],this.spatialReference)};g.insertPoint=function(a,b,c){if(!this._validateInputs(a,b,!0))return this;w.updateSupportFromPoint(this,c);Array.isArray(c)||(c=c.toArray());this.rings[a].splice(b,0,c);this.notifyChange("rings");return this};g.removePoint=function(a,b){if(!this._validateInputs(a,b))return null;a=new m(this.rings[a].splice(b,1)[0],this.spatialReference);this.notifyChange("rings");return a};g.removeRing=function(a){if(!this._validateInputs(a,null))return null;a=this.rings.splice(a,
1)[0];const b=this.spatialReference;a=a.map(c=>new m(c,b));this.notifyChange("rings");return a};g.setPoint=function(a,b,c){if(!this._validateInputs(a,b))return this;w.updateSupportFromPoint(this,c);Array.isArray(c)||(c=c.toArray());this.rings[a][b]=c;this.notifyChange("rings");return this};g._validateInputs=function(a,b,c=!1){return null==a||0>a||a>=this.rings.length||null!=b&&(a=this.rings[a],c&&(0>b||b>a.length)||!c&&(0>b||b>=a.length))?!1:!0};g.toJSON=function(a){return this.write({},a)};u._createClass(q,
[{key:"cache",get:function(){this.commitProperty("rings");this.commitProperty("hasZ");this.commitProperty("hasM");this.commitProperty("spatialReference");return{}}},{key:"centroid",get:function(){const a=G.polygonCentroid(this);if(!a||isNaN(a[0])||isNaN(a[1])||this.hasZ&&isNaN(a[2]))return null;const b=new m;b.x=a[0];b.y=a[1];b.spatialReference=this.spatialReference;this.hasZ&&(b.z=a[2]);return b}},{key:"extent",get:function(){const {spatialReference:a}=this;var b=J.getPolygonExtent(this);if(!b)return null;
b=new D(b);b.spatialReference=a;return b}},{key:"isSelfIntersecting",get:function(){return K.isSelfIntersecting(this.rings)}}]);return q}(E);l.__decorate([p.property({readOnly:!0})],h.prototype,"cache",null);l.__decorate([p.property({readOnly:!0})],h.prototype,"centroid",null);l.__decorate([p.property({readOnly:!0})],h.prototype,"extent",null);l.__decorate([p.property({readOnly:!0})],h.prototype,"isSelfIntersecting",null);l.__decorate([p.property({type:[[[Number]]],json:{write:{isRequired:!0}}})],
h.prototype,"rings",void 0);l.__decorate([C.writer("rings")],h.prototype,"writeRings",null);h=t=l.__decorate([B.subclass("esri.geometry.Polygon")],h);h.prototype.toJSON.isDefaultToJSON=!0;return h});
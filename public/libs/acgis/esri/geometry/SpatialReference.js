// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/JSONSupport ../core/lang ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ./support/spatialReferenceUtils".split(" "),function(n,c,b,t,l,d,u,p,f){var e;b=e=function(q){function h(a){a=q.call(this,a)||this;a.latestWkid=null;a.wkid=null;a.wkt=null;a.vcsWkid=null;a.latestVcsWkid=null;a.imageCoordinateSystem=null;return a}
n._inheritsLoose(h,q);h.fromJSON=function(a){if(!a)return null;if(a.wkid){if(102100===a.wkid)return e.WebMercator;if(4326===a.wkid)return e.WGS84}const g=new e;g.read(a);return g};var k=h.prototype;k.normalizeCtorArgs=function(a){return a&&"object"===typeof a?a:{["string"===typeof a?"wkt":"wkid"]:a}};k.writeWkt=function(a,g){this.wkid||(g.wkt=a)};k.clone=function(){if(this===e.WGS84)return e.WGS84;if(this===e.WebMercator)return e.WebMercator;const a=new e;null!=this.wkid?(a.wkid=this.wkid,null!=this.latestWkid&&
(a.latestWkid=this.latestWkid),null!=this.vcsWkid&&(a.vcsWkid=this.vcsWkid),null!=this.latestVcsWkid&&(a.latestVcsWkid=this.latestVcsWkid)):null!=this.wkt&&(a.wkt=this.wkt);this.imageCoordinateSystem&&(a.imageCoordinateSystem=t.clone(this.imageCoordinateSystem));return a};k.equals=function(a){if(null==a)return!1;if(this.imageCoordinateSystem||a.imageCoordinateSystem){if(null==this.imageCoordinateSystem||null==a.imageCoordinateSystem)return!1;const {id:g,referenceServiceName:r}=a.imageCoordinateSystem,
{geodataXform:v}=a.imageCoordinateSystem,m=this.imageCoordinateSystem;return null==g||v?JSON.stringify(m)===JSON.stringify(a.imageCoordinateSystem):r?m.id===g&&m.referenceServiceName===r:m.id===g}return f.equals(this,a)};k.toJSON=function(a){return this.write(void 0,a)};n._createClass(h,[{key:"isWGS84",get:function(){return f.isWGS84(this)}},{key:"isWebMercator",get:function(){return f.isWebMercator(this)}},{key:"isGeographic",get:function(){return f.isGeographic(this)}},{key:"isWrappable",get:function(){return f.isWrappable(this)}}]);
return h}(b.JSONSupport);b.GCS_NAD_1927=null;b.WGS84=null;b.WebMercator=null;b.PlateCarree=null;c.__decorate([d.property({readOnly:!0})],b.prototype,"isWGS84",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"isWebMercator",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"isGeographic",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"isWrappable",null);c.__decorate([d.property({type:l.Integer,json:{write:!0}})],b.prototype,"latestWkid",void 0);c.__decorate([d.property({type:l.Integer,
json:{write:!0,origins:{"web-scene":{write:{overridePolicy(){return{isRequired:null===this.wkt?!0:!1}}}}}}})],b.prototype,"wkid",void 0);c.__decorate([d.property({type:String,json:{origins:{"web-scene":{write:{overridePolicy(){return{isRequired:null===this.wkid?!0:!1}}}}}}})],b.prototype,"wkt",void 0);c.__decorate([p.writer("wkt"),p.writer("web-scene","wkt")],b.prototype,"writeWkt",null);c.__decorate([d.property({type:l.Integer,json:{write:!0}})],b.prototype,"vcsWkid",void 0);c.__decorate([d.property({type:l.Integer,
json:{write:!0}})],b.prototype,"latestVcsWkid",void 0);c.__decorate([d.property()],b.prototype,"imageCoordinateSystem",void 0);b=e=c.__decorate([u.subclass("esri.geometry.SpatialReference")],b);b.prototype.toJSON.isDefaultToJSON=!0;b.GCS_NAD_1927=new b({wkid:4267,wkt:'GEOGCS["GCS_North_American_1927",DATUM["D_North_American_1927",SPHEROID["Clarke_1866",6378206.4,294.9786982]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]]'});b.WGS84=new b(f.WGS84);b.WebMercator=new b(f.WebMercator);b.PlateCarree=
new b(f.PlateCarree);Object.freeze&&(Object.freeze(b.GCS_NAD_1927),Object.freeze(b.WGS84),Object.freeze(b.WebMercator));return b});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../core/Collection ../../core/Evented ../../core/JSONSupport ../../core/Loadable ../../core/maybe ../../core/reactiveUtils ../../core/string ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/cast ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/ensureType ./kmlUtils ../../geometry/Extent".split(" "),
function(n,e,c,p,u,v,w,x,q,y,f,C,D,z,A,B,r,k,t){var g;c=g=function(l){function m(){var a=l.apply(this,arguments)||this;a._sublayersHandles=null;a.description=null;a.id=null;a.networkLink=null;a.title=null;a.sourceJSON=null;a.fullExtent=null;return a}n._inheritsLoose(m,l);var h=m.prototype;h.initialize=function(){q.whenOnce(()=>this.networkLink).then(()=>q.whenOnce(()=>!0===this.visible)).then(()=>this.load())};h.load=function(a){if(this.networkLink&&!this.networkLink.viewFormat)return a=x.isSome(a)?
a.signal:null,a=this._fetchService(this._get("networkLink").href,a).then(d=>{const b=k.computeExtent(d.sublayers);this.fullExtent=t.fromJSON(b);this.sourceJSON=d;d=r.ensureType(p.ofType(g),k.sublayersFromJSON(g,d));this.sublayers?this.sublayers.addMany(d):this.sublayers=d;this.layer.emit("sublayer-update");this.layer&&this.layer.notifyChange("visibleSublayers")}),this.addResolvingPromise(a),Promise.resolve(this)};h.castSublayers=function(a){return r.ensureType(p.ofType(g),a)};h.readVisible=function(a,
d){return!!d.visibility};h._fetchService=function(a,d){return k.fetchService(a,this.layer.outSpatialReference,this.layer.refreshInterval,d).then(b=>k.parseKML(b.data))};n._createClass(m,[{key:"sublayers",set:function(a){const d=this._get("sublayers");d&&(d.forEach(b=>{b.parent=null;b.layer=null}),this._sublayersHandles.forEach(b=>b.remove()),this._sublayersHandles=null);a&&(a.forEach(b=>{b.parent=this;b.layer=this.layer}),this._sublayersHandles=[a.on("after-add",({item:b})=>{b.parent=this;b.layer=
this.layer}),a.on("after-remove",({item:b})=>{b.parent=null;b.layer=null})]);this._set("sublayers",a)}},{key:"visible",get:function(){return this._get("visible")},set:function(a){this._get("visible")!==a&&(this._set("visible",a),this.layer&&this.layer.notifyChange("visibleSublayers"))}},{key:"layer",set:function(a){this._set("layer",a);this.sublayers&&this.sublayers.forEach(d=>d.layer=a)}}]);return m}(u.EventedMixin(v.JSONSupportMixin(w)));e.__decorate([f.property()],c.prototype,"description",void 0);
e.__decorate([f.property()],c.prototype,"id",void 0);e.__decorate([f.property({readOnly:!0,value:null})],c.prototype,"networkLink",void 0);e.__decorate([f.property({json:{write:{allowNull:!0}}})],c.prototype,"parent",void 0);e.__decorate([f.property({value:null,json:{write:{allowNull:!0}}})],c.prototype,"sublayers",null);e.__decorate([z.cast("sublayers")],c.prototype,"castSublayers",null);e.__decorate([f.property({value:null,json:{read:{source:"name",reader(l){return y.stripHTML(l)}}}})],c.prototype,
"title",void 0);e.__decorate([f.property({value:!0})],c.prototype,"visible",null);e.__decorate([A.reader("visible",["visibility"])],c.prototype,"readVisible",null);e.__decorate([f.property()],c.prototype,"sourceJSON",void 0);e.__decorate([f.property({value:null})],c.prototype,"layer",null);e.__decorate([f.property({type:t})],c.prototype,"fullExtent",void 0);return c=g=e.__decorate([B.subclass("esri.layers.support.KMLSublayer")],c)});
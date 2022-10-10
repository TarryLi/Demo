// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("./chunks/_rollupPluginBabelHelpers ./chunks/tslib.es6 ./Basemap ./Ground ./core/Accessor ./core/CollectionFlattener ./core/Evented ./core/maybe ./core/accessorSupport/decorators/property ./core/arrayUtils ./core/has ./core/accessorSupport/decorators/cast ./core/accessorSupport/decorators/subclass ./layers/support/editableLayers ./support/basemapUtils ./support/collectionUtils ./support/groundUtils ./support/LayersMixin ./support/TablesMixin".split(" "),function(l,d,u,m,c,n,v,w,e,D,E,p,x,y,
h,z,A,B,C){c=function(q){function k(b){var a=q.call(this,b)||this;a.allLayers=new n({getCollections:()=>{var f,r,t;return[null==(f=a.basemap)?void 0:f.baseLayers,null==(r=a.ground)?void 0:r.layers,a.layers,null==(t=a.basemap)?void 0:t.referenceLayers]},getChildrenFunction:f=>"layers"in f?f.layers:null});a.allTables=z.createFlattenedTablesCollection(l._assertThisInitialized(a));a.basemap=null;a.editableLayers=new n({getCollections:()=>[a.allLayers],itemFilterFunction:y.isEditableLayer});a.ground=new m;
a._basemapCache=h.createCache();return a}l._inheritsLoose(k,q);var g=k.prototype;g.destroy=function(){var b,a;this.allLayers.destroy();this.allTables.destroy();this.editableLayers.destroy();null==(b=this.ground)?void 0:b.destroy();null==(a=this.basemap)?void 0:a.destroy();h.destroyCache(this._basemapCache);this._basemapCache=null};g.castBasemap=function(b){return h.ensureType(b,this._basemapCache)};g.castGround=function(b){b=A.ensureType(b);return w.isNone(b)?this._get("ground"):b};g.findLayerById=
function(b){return this.allLayers.find(a=>a.id===b)};g.findTableById=function(b){return this.allTables.find(a=>a.id===b)};return k}(C.TablesMixin(B.LayersMixin(v.EventedMixin(c))));d.__decorate([e.property({readOnly:!0,dependsOn:[]})],c.prototype,"allLayers",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"allTables",void 0);d.__decorate([e.property({type:u})],c.prototype,"basemap",void 0);d.__decorate([p.cast("basemap")],c.prototype,"castBasemap",null);d.__decorate([e.property({readOnly:!0})],
c.prototype,"editableLayers",void 0);d.__decorate([e.property({type:m,nonNullable:!0})],c.prototype,"ground",void 0);d.__decorate([p.cast("ground")],c.prototype,"castGround",null);return c=d.__decorate([x.subclass("esri.Map")],c)});
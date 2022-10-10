// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Collection ../../core/Evented ../../core/HandleOwner ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../LayerList/ListItem".split(" "),function(m,k,h,x,y,g,l,C,D,E,z,t){const n=h.ofType(t);h=function(u){function p(a){a=u.call(this,a)||this;a.baseItems=new n;a.baseListItemCreatedFunction=
null;a.referenceListItemCreatedFunction=null;a.referenceItems=new n;a.view=null;a._compileBaseList=a._compileBaseList.bind(m._assertThisInitialized(a));a._compileReferenceList=a._compileReferenceList.bind(m._assertThisInitialized(a));return a}m._inheritsLoose(p,u);var e=p.prototype;e.initialize=function(){this.handles.add([g.watch(()=>{var a,c,b,d;return[null==(a=this.view)?void 0:null==(c=a.map)?void 0:c.basemap,this.view,null==(b=this.view)?void 0:b.ready,null==(d=this.view)?void 0:d.basemapView]},
()=>this._watchBasemapLayers(),g.initial),g.watch(()=>this.baseListItemCreatedFunction,()=>this._baseListItemCreatedFunctionChanged()),g.watch(()=>this.referenceListItemCreatedFunction,()=>this._referenceListItemCreatedFunctionChanged())],"view")};e.destroy=function(){this.view=null;this.baseItems.removeAll();this.referenceItems.removeAll()};e.triggerAction=function(a,c){a&&!a.disabled&&this.emit("trigger-action",{action:a,item:c})};e.transferListItem=function({listItem:a,from:c,to:b,newIndex:d}){const {referenceItems:f,
baseItems:v}=this,{layer:w}=a,q=this.get("view.map.basemap.baseLayers"),r=this.get("view.map.basemap.referenceLayers");if(q&&r&&c!==b){var A="reference"===b?f:v,B="reference"===c?r:q;b="reference"===b?r:q;("reference"===c?f:v).remove(a);B.remove(w);A.add(a,d);b.add(w,d)}};e._createItemChangeHandles=function({items:a,key:c,callback:b}){const {handles:d}=this;d.remove(c);b();a&&d.add(a.on("change",()=>b()),c)};e._createListItem=function({layer:a,type:c}){const {view:b,baseListItemCreatedFunction:d,
referenceListItemCreatedFunction:f}=this;return new t({layer:a,listItemCreatedFunction:"base"===c?d:f,view:b})};e._watchLayersListMode=function({layers:a,key:c,callback:b}){const {handles:d}=this;d.remove(c);a&&a.forEach(f=>{d.add(g.watch(()=>f.listMode,()=>b()),c)})};e._compileListItems=function({layers:a,items:c,key:b,type:d,callback:f}){this._watchLayersListMode({layers:a,key:b,callback:f});this._createNewItems({type:d,items:c,layers:a});this._removeItems({items:c,layers:a});this._sortItems(c,
a)};e._compileReferenceList=function(){const {referenceItems:a}=this,c=this.get("view.map.basemap.referenceLayers");this._compileListItems({type:"reference",layers:c,items:a,key:"base-layers-list-mode",callback:this._compileReferenceList})};e._compileBaseList=function(){const {baseItems:a}=this,c=this.get("view.map.basemap.baseLayers");this._compileListItems({type:"base",layers:c,items:a,key:"reference-layers-list-mode",callback:this._compileBaseList})};e._compileLists=function(){this._compileReferenceList();
this._compileBaseList()};e._createNewItems=function({items:a,layers:c,type:b}){c&&c.forEach(d=>{a.find(f=>f.layer===d)||a.add(this._createListItem({type:b,layer:d}))})};e._removeItems=function({items:a,layers:c}){const {handles:b}=this;a&&a.forEach(d=>{!d||c&&c.find(f=>d.layer===f)||(b.remove(`${"children"}-${d.uid}`),a.remove(d))})};e._sortItems=function(a,c){a&&a.sort((b,d)=>{b=c.indexOf(b.layer);d=c.indexOf(d.layer);return b>d?-1:b<d?1:0})};e._removeAllBaseItems=function(){const {handles:a,baseItems:c}=
this;c.forEach(b=>{a.remove(`${"children"}-${b.uid}`)});c.removeAll()};e._removeAllReferenceItems=function(){const {handles:a,referenceItems:c}=this;c.forEach(b=>{a.remove(`${"children"}-${b.uid}`)});c.removeAll()};e._baseListItemCreatedFunctionChanged=function(){this._removeAllBaseItems();this._compileLists()};e._referenceListItemCreatedFunctionChanged=function(){this._removeAllReferenceItems();this._compileLists()};e._watchBasemapLayers=function(){const {handles:a,view:c}=this;a.remove(["base-layers",
"reference-layers","basemap","base-layer-views","reference-layer-views"]);this._compileLists();c&&c.ready&&a.add([g.watch(()=>{var b,d,f;return null==(b=this.view)?void 0:null==(d=b.map)?void 0:null==(f=d.basemap)?void 0:f.baseLayers},b=>this._createItemChangeHandles({items:b,key:"base-layers",callback:this._compileBaseList}),g.initial),g.watch(()=>{var b,d,f;return null==(b=this.view)?void 0:null==(d=b.map)?void 0:null==(f=d.basemap)?void 0:f.referenceLayers},b=>this._createItemChangeHandles({items:b,
key:"reference-layers",callback:this._compileReferenceList}),g.initial),g.watch(()=>{var b,d;return null==(b=this.view)?void 0:null==(d=b.basemapView)?void 0:d.baseLayerViews},b=>this._createItemChangeHandles({items:b,key:"base-layer-views",callback:this._compileBaseList}),g.initial),g.watch(()=>{var b,d;return null==(b=this.view)?void 0:null==(d=b.basemapView)?void 0:d.referenceLayerViews},b=>this._createItemChangeHandles({items:b,key:"reference-layer-views",callback:this._compileReferenceList}),
g.initial)],"basemap")};m._createClass(p,[{key:"basemapTitle",get:function(){return this.get("view.map.basemap.title")||null},set:function(a){void 0===a?this._clearOverride("basemapTitle"):this._override("basemapTitle",a)}},{key:"state",get:function(){return this.get("view.ready")?"ready":this.get("view")?"loading":"disabled"}}]);return p}(y.HandleOwnerMixin(x.EventedAccessor));k.__decorate([l.property({type:n})],h.prototype,"baseItems",void 0);k.__decorate([l.property()],h.prototype,"basemapTitle",
null);k.__decorate([l.property()],h.prototype,"baseListItemCreatedFunction",void 0);k.__decorate([l.property()],h.prototype,"referenceListItemCreatedFunction",void 0);k.__decorate([l.property({type:n})],h.prototype,"referenceItems",void 0);k.__decorate([l.property({readOnly:!0})],h.prototype,"state",null);k.__decorate([l.property()],h.prototype,"view",void 0);k.__decorate([l.property()],h.prototype,"transferListItem",null);return h=k.__decorate([z.subclass("esri.widgets.BasemapLayerList.BasemapLayerListViewModel")],
h)});
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as i}from"./tslib.es6.js";import e from"../core/Collection.js";import{r as s,c as r}from"./collectionUtils.js";import{a as t}from"./maybe.js";import{watch as l,sync as a}from"../core/reactiveUtils.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as y}from"../core/accessorSupport/decorators/subclass.js";import p from"../views/layers/LayerView.js";import"./ArrayPool.js";import"../core/Evented.js";import"../core/Accessor.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"./Logger.js";import"../config.js";import"./object.js";import"./string.js";import"./tracking.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"../core/promiseUtils.js";import"../core/Error.js";import"./shared.js";import"./SimpleObservable.js";import"../core/HandleOwner.js";import"../core/Handles.js";import"./Identifiable.js";import"../core/Promise.js";let h=class extends p{constructor(i){super(i),this.type="group",this.layerViews=new e}_allLayerViewVisibility(i){this.layerViews.forEach((e=>{e.visible=i}))}initialize(){this.handles.add([this.layerViews.on("change",(i=>this._layerViewsChangeHandler(i))),l((()=>this.layer.visibilityMode),(()=>this._applyVisibility((()=>this._allLayerViewVisibility(this.visible)),(()=>this._applyExclusiveVisibility(null)))),a),l((()=>this.visible),(i=>{this._applyVisibility((()=>this._allLayerViewVisibility(i)),(()=>{}))}),a)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}set layerViews(i){this._set("layerViews",s(i,this._get("layerViews")))}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce(((i,e)=>i+e.updatingProgress),0)/this.layerViews.length}isUpdating(){return this.layerViews.some((i=>i.updating))}_hasLayerViewVisibleOverrides(){return this.layerViews.some((i=>i._isOverridden("visible")))}_findLayerViewForLayer(i){return i&&this.layerViews.find((e=>e.layer===i))}_firstVisibleOnLayerOrder(){const i=this.layer.layers.find((i=>this._findLayerViewForLayer(i)?.visible));return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){t(i)&&(i=this._firstVisibleOnLayerOrder(),t(i)&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.getItemAt(0)))),this.layerViews.forEach((e=>{e.visible=e===i}))}_layerViewsChangeHandler(i){this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map((i=>l((()=>i.visible),(e=>this._applyVisibility((()=>{e!==this.visible&&(i.visible=this.visible)}),(()=>this._applyExclusiveVisibility(e?i:null)))),a))).toArray(),"grouplayerview:visible");const e=i.added[i.added.length-1];this._applyVisibility((()=>this._allLayerViewVisibility(this.visible)),(()=>this._applyExclusiveVisibility(e?.visible?e:null)))}_applyVisibility(i,e){this._hasLayerViewVisibleOverrides()&&("inherited"===this.layer?.visibilityMode?i():"exclusive"===this.layer?.visibilityMode&&e())}};i([o({cast:r})],h.prototype,"layerViews",null),i([o({readOnly:!0})],h.prototype,"updatingProgress",null),i([o()],h.prototype,"view",void 0),h=i([y("esri.views.layers.GroupLayerView")],h);const n=h;export{n as default};
